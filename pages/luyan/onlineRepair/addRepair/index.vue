<template>
	<view class="content">
		<u-navbar title="添加报修" :border="true"></u-navbar>
		<view class="main">
			<view class="title">报修信息</view>
			<view class="item">
				<view class="left">报修标题</view>
				<view class="right">
					<view class="">
						<input type="text" v-model="repairTitle" style="text-align: right;" placeholder="请输入..." />
					</view>
					<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">报修类别</view>
				<view class="right">
					<picker @change="categoryChange" :value="categoryVal" :range="categoryList" range-key="display" v-if="categoryList.length > 0">
						<view style="padding: 20rpx;background-color: white;">{{ categoryList[categoryVal].display }}</view>
					</picker>
					<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">报修类型</view>
				<view class="right">
					<picker @change="typeChange" :value="typeVal" :range="typeList" range-key="display" v-if="typeList.length > 0">
						<view style="padding: 20rpx;background-color: white;">{{ typeList[typeVal].display }}</view>
					</picker>
					<!-- <view class="">路灯</view> -->
					<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">报修小区</view>
				<view class="right">
					<view class="">
						<input type="text" v-model="village" style="text-align: right;" placeholder="请输入..." />
					</view>
					<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="title">报修内容</view>
			<view class="itemBtm">
				<textarea class="textarea" v-model="dec" placeholder-style="color:#999999;font-size:28upx" placeholder="请写下详细报修内容,有助于工作人员快速帮您解决问题" />
				<view class="uploadBox">
					<view class="imgBox" v-for="(item,i) in imgList" :key="i">
						<image :src="item" mode="aspectFill"></image>
						<image class="del" @tap="delImg(i)" src="../../../../static/luyan/images/icon_vector_none.png" mode="aspectFit"></image>
					</view>
					<view class="uploadItem" @tap="uploadImg" v-if="imgList.length < 6">
						<view class="itemBox">
							<image src="../../../../static/luyan/images/icon_upload.png" mode="aspectFit"></image>
							<view class="">添加图片</view>
						</view>
					</view>
				</view>
				<view class="btn" @tap="submit">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[],
				categoryList:[],
				typeList:[],
				categoryVal:0,
				typeVal: 0,
				village:'',
				repairTitle:'',
				dec:'',
				uploadList:[],
				userInfo:{}
			};
		},
		onLoad(op) {
			
			this.categoryVal = op.type?op.type:0;
			this.getUser();
			this.getCategory();
		},
		methods: {
			// 获取用户信息
			getUser(){
				this.$api.to_http('user/getInfo', 'GET','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.userInfo = res.data;
				})
			},
			// 获取报修类型
			getCategory(){
				this.$api.to_http('common/getKeys',{
					keyName:'报修类型'
				}, 'POST','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.categoryList = res.data;
					if(this.categoryVal==0){
						this.getfangwuType()
					}else{
						this.getjiadianType()
					}
				})
			},
			// 获取家电报修子类
			getjiadianType(){
				this.$api.to_http('common/getKeys',{
					keyName:'家电报修子类'
				}, 'POST','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.typeList = res.data;
				})
			},
			//获取房屋报修子类
			getfangwuType(){
				this.$api.to_http('common/getKeys',{
					keyName:'房屋报修子类'
				}, 'POST','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.typeList = res.data;
				})
			},
			// 类别选择
			categoryChange: function(e) {
				this.categoryVal = e.detail.value;
				if(this.categoryVal==0){
					this.getfangwuType()
				}else{
					this.getjiadianType()
				}
			},
			// 类型选择
			typeChange: function(e) {
				this.typeVal = e.detail.value;
				
			},
			// 上传图片
			uploadImg() {
				let that = this;
				uni.chooseImage({
				    count: 6, //默认9
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
				console.log(this.categoryList[this.categoryVal].value)
				console.log(this.typeList[this.typeVal].value)
				this.$api.to_http('reportrepair/submit',{
					reportTitle:this.repairTitle,//上报标题
					reportClassCode:this.categoryList[this.categoryVal].value,//报修类别 - 字典report_type
					reportTypeCode:this.typeList[this.typeVal].value,//报修类型 - 字典report_classify
					reportPlace:this.village,//报修小区地址
					reportContent:this.dec,//报修具体内容
					telNo:this.userInfo.phone,//报修人手机号
					pictures:this.uploadList,//报修附件图片地址
					contactName:this.userInfo.userName,//报修人姓名
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
			.title{
				width: 100%;
				padding: 32upx;
				box-sizing: border-box;
				font-family: 'PingFang SC';
				font-size: 32upx;
				color: #222222;
				background-color: rgb(249,249,249);
			}
			.item{
				width: 100%;
				padding: 26upx 32upx;
				border-bottom: 1upx solid #F2F2F2;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #FFFFFF;
				.left{
					font-family: 'PingFang SC';
					font-size: 32upx;
					color: #222222;
				}
				.right{
					display: flex;
					align-items: center;
					font-family: 'PingFang SC';
					font-size: 32upx;
					color: #222222;
					image{
						width: 14upx;
						height: 24upx;
						margin-left: 24upx;
					}
					input{
						font-family: 'PingFang SC';
						font-size: 32upx;
						color: #222222;
					}
				}
			}
			.itemBtm{
				width: 100%;
				padding: 32upx;
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
						width: 180upx;
						height: 160upx;
						margin-right: 10upx;
						margin-bottom: 10upx;
						border-radius: 8upx;
						position: relative;
						image{
							width: 180upx;
							height: 160upx;
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
						width: 180upx;
						height: 160upx;
						padding: 10upx;
						border: 1upx solid #D9DCE0;
						box-sizing: border-box;
						border-radius: 8upx;
						font-family: 'PingFang SC';
						font-size: 24upx;
						line-height: 24upx;
						color: #BFC4CB;
						text-align: center;
						display: flex;
						justify-content: center;
						align-items: center;
						.itemBox{
							image{
								width: 40upx;
								height: 36upx;
								margin-bottom: 18upx;
							}
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
	}
</style>
