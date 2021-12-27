<template>
	<view class="container">
		<view class="release-row">
			<input type="text" value="" v-model="title" placeholder="请输入标题" />
		</view>
		<view class="release-row">
			<textarea placeholder-style="color:#646464;
                font-size:24rpx" placeholder="请输入投诉内容" @input="descInput" maxlength="300" v-model="content" />
			<text>{{ start }}/300</text>
		</view>
		<view class="upload-imageBox">
			<!-- <view class="upload-image" v-for="(img,index1) in imagelist" :key="index1">
				<image :src="imgUrl+img" mode=""></image>
				<view class="upload-image-text">上传图片</view>
				<u-icon class="delete" @click="toDelete(index1)" name="close" color="#ffffff" size="20">
			</view> -->
			<view class="goods-cover-card">
				<view class="main-goods-picture" v-for="(item,index) in imagelist" :key="index"
					@click="toUp()">
					<image :src="imgUrl+item.path" mode="aspectFill"></image>
				</view>
				<image class="add-goods" src="@/static/images/vvo-yao/add-goods.png" @click="toUp()"></image>
			</view>

		</view>


		</u-icon>
		<view class="btn-Box">
			<view class="cancel-btn" @click="cancal()">取消</view>
			<view class="release-btn" @click="submit()">发布</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				committeeId: 0,
				start: 0,
				title: '', //标题
				content: '', //投诉内容
				imagelist: []
			}
		},
		onLoad(options) {
			//console.log(this.committeeId)
			this.committeeId = options.id
		},
		methods: {
			//发布
			submit() {
				let that = this
				var complaint={
					committeeId: this.committeeId,
					title: this.title,
					content: this.content,
				}
				let arr=[]
				this.imagelist.forEach(item=>{
					arr.push(item.id)
				})
				this.$api.to_http('/complaint/save', {
					complaint:complaint,
					images: arr
				}, 'POST', '', false).then(res => {
					console.log(res)
					if (res.data.code == 200) {
						uni.showToast({
							icon: 'none',
							title: '发布成功'
						})
					}
				});
			},
			// 上传图片
			toUp() {
				uni.chooseImage({
					count: 9,
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						tempFilePaths.forEach(ele => {
							uni.uploadFile({
								url: this.baseUrl + '/common/file/upload',
								method: 'POST',
								filePath: ele,
								name: 'file',
								// files:images,
								header: {
									"access-token": uni.getStorageSync('token'),
								},
								success: (res) => {
									let JsonData = JSON.parse(res.data)
									console.log(JsonData);
									// let url2 = JsonData.data.id;
									// let obj.url=JsonData.data.path
									// obj.id=url2
									let url2 = JsonData.data.path;
									let obj = {
										id: JsonData.data.id,
										path: url2
									}
									
									this.imagelist.push(obj)
								}
							});
						})


					}
				});
			},
			//删除图片
			toDelete(index) {
				this.imagelist.splice(index, 1)
			},
			descInput() {
				let txVal = this.content.length;
				this.start = txVal;
			},
			//取消发布
			cancal() {
				this.title = ''; //标题
				this.dataInfo = ''; //投诉内容
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		min-height: 100vh !important;

		.release-row {
			margin: 32rpx;

			input {
				padding-left: 24rpx;
				width: 686rpx;
				height: 100rpx;
				background-color: #F9F9F9;
				border-radius: 4rpx;
			}

			textarea {
				position: relative;
				padding: 24rpx;
				width: 686rpx;
				height: 280rpx;
				background-color: #F9F9F9;
				border-radius: 4rpx;
			}

			text {
				position: absolute;
				top: 440rpx;
				right: 40rpx;
				font-size: 24rpx;
				color: #999999;
			}

		}

		.upload-imageBox {
			display: flex;
			flex-wrap: wrap;
			padding: 24upx 32upx;
			
			box-sizing: border-box;
			overflow: hidden;

			.goods-cover-card {
				margin-bottom: 20rpx;
				background-color: #FFFFFF;
				padding: 11rpx 16rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.main-goods-picture {
					width: 210rpx;
					height: 210rpx;
					margin-right: 20upx;
					image {
						width: 210rpx;
						height: 210rpx;
					}
				}

				.add-goods {
					width: 210rpx;
					height: 210rpx;
				}
			}

			// justify-content: space-around;
			// .upload-image {
			// 	margin: 32rpx;
			// 	position: relative;
			// 	width: 210rpx;
			// 	height: 210rpx;
			// 	background-color: #EEEEEE;
			// 	border-radius: 4rpx;

			// 	image {
			// 		margin: 80rpx;
			// 		width: 50rpx;
			// 		height: 50rpx;
			// 	}

			// 	.upload-image-text {
			// 		position: absolute;
			// 		bottom: 24rpx;
			// 		left: 50rpx;
			// 		font-size: 24rpx;
			// 		color: #999999;
			// 		text-align: center;
			// 	}

			// }

		}

		.btn-Box {
			margin: 32rpx;
			display: flex;
			justify-content: space-between;

			.cancel-btn {
				width: 330rpx;
				height: 96rpx;
				color: #999999;
				text-align: center;
				line-height: 96rpx;
				border: 2rpx solid #999999;
				border-radius: 4rpx;
			}

			.release-btn {
				width: 330rpx;
				height: 96rpx;
				background-color: #1989FA;
				color: #fff;
				text-align: center;
				line-height: 96rpx;
				border-radius: 4rpx;
			}
		}
	}
</style>
