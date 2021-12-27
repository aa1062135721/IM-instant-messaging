<template>
	<view class="content">
		<u-navbar title="发布" :border="true"></u-navbar>
		<view class="main">
			<textarea class="textarea" v-model="dec" placeholder="请输入..." />
			<view class="uploadBox">
				<!-- <image v-for="item in imgList" :src="item" mode="aspectFill"></image> -->
				<view class="imgBox" v-for="(item,i) in imgList" :key="i">
					<image :src="item" mode="aspectFill"></image>
					<image class="del" @tap="delImg(i)" src="../../../../static/luyan/images/icon_vector_none.png" mode="aspectFit"></image>
				</view>
				<view class="uploadItem" @tap="uploadImg" v-if="imgList.length < 9">
					<image src="../../../../static/luyan/images/icon_upload.png" mode="aspectFit"></image>
					<view class="">添加图片</view>
				</view>
			</view>
			<view class="btn" @tap="submit">发布</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[],
				uploadList:[],
				dec:''
			};
		},
		methods: {
			// 上传图片
			uploadImg() {
				let that = this;
				uni.chooseImage({
				    count: 9, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
						that.imgList = that.imgList.concat(res.tempFilePaths);
						let tempFilePaths = res.tempFilePaths;
						tempFilePaths.forEach(item=>{
								// url: 'https://yanxiaozhong.top/api/common/file/multipartUpload', //仅为示例，非真实的接口地址
							uni.uploadFile({
								url: that.baseUrl + '/common/file/multipartUpload', //仅为示例，非真实的接口地址
								filePath: item,
								name: 'file',
								header:{
									'access-token': uni.getStorageSync('token')
								},
								formData: {
									'user': 'test'
								},
								success: (uploadFileRes) => {
									let data = JSON.parse(uploadFileRes.data);
									that.uploadList.push(data.data[0].path)
								}
							});
						})
				    }
				});
			},
			// 删除图片
			delImg(i){
				this.imgList.splice(i,1);
				this.uploadList.splice(i,1);
			},
			// 提交
			submit(){
				this.$api.to_http('user/moments/publish',{
					momentContent:this.dec,
					pictures:this.uploadList,
					latitude:uni.getStorageSync('latitude'),
					longitude:uni.getStorageSync('longitude'),
					publicAddress:uni.getStorageSync('curLocation')
				},'POST','',false).then((res) => {
					console.log(res)
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					uni.showToast({
					    title: res.message,
					    duration: 1000,
						icon:"none"
					});
					setTimeout(()=>{
						uni.navigateBack();
					},1000)
					// this.typeList = res.data;
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;
		.main{
			width: 100%;
			padding: 26upx 32upx;
			box-sizing: border-box;
			.textarea{
				width: 100%;
				height: 280upx;
				padding: 24upx;
				box-sizing: border-box;
				background: #F9F9F9;
				border-radius: 4upx;
			}
			.uploadBox{
				width: 100%;
				margin-top: 24upx;
				display: flex;
				flex-wrap: wrap;
				.imgBox{
					width: 120upx;
					height: 108upx;
					margin-right: 10upx;
					margin-bottom: 10upx;
					border-radius: 8upx;
					position: relative;
					image{
						width: 120upx;
						height: 108upx;
						border-radius: 8upx;
					}
					.del{
						width: 28upx;
						height: 28upx;
						position: absolute;
						right: 0;
						top: 0;
						z-index: 232;
					}
				}
				.uploadItem{
					width: 120upx;
					height: 108upx;
					padding: 10upx;
					border: 1upx solid #D9DCE0;
					box-sizing: border-box;
					border-radius: 8upx;
					font-family: 'PingFang SC';
					font-size: 24upx;
					line-height: 24upx;
					color: #BFC4CB;
					text-align: center;
					image{
						width: 40upx;
						height: 36upx;
						margin-bottom: 18upx;
					}
				}
			}
			.btn{
				width: 100%;
				height: 96upx;
				margin-top: 32upx;
				background: #1989FA;
				border-radius: 4upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: 'PingFang SC';
				font-size: 32upx;
				color: #FFFFFF;
			}
		}
	}
</style>
