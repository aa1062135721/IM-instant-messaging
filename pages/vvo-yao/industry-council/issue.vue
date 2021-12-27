<template>
	<view class="container">
		<view class="release-company">
			<view class="release-company-text1">发布单位</view>
			<input type="text" class="release-company-input" v-model="subForm.company" />
		</view>
		<view class="release-people">
			<view class="release-people-text1">发布人</view>
			<input type="text" class="release-people-input" v-model="subForm.publisher" />
		</view>
		<view class="release-row">
			<input type="text" value="" placeholder="请输入标题" v-model="subForm.title" />
		</view>
		<view class="release-row">
			<textarea placeholder-style="color:#646464;
                font-size:24rpx" placeholder="请输入公示内容" @input="descInput" maxlength="300" v-model="subForm.content" />
			<text>{{ start }}/300</text>
		</view>

		
		<view class="upload-imageBox">
			<!-- 		<view class="upload-image">
				<image src="../../../static/images/vvo-yao/Group.png" mode=""></image>
				<view class="upload-image-text">上传图片</view>

			</view> -->
			<view class="house-cover-main">
				<view class="house-cover-view" v-for="(item, index) in imgArr" :key="index">
					<image class="house-cover" :src="imgUrl+item.path" mode="aspectFill"></image>
					<u-icon class="delete" @click="toDelete(index)" name="close" color="#EEEEEE" size="20"></u-icon>
				</view>
				<image v-if="imgArr.length<9" class="house-cover" src="@/static/images/vvo-yao/add-house.png"
					@click="toUp()"></image>
			</view>
			<!-- 	<view class="upload-image">
				<u-upload class="upload" :fileList="subForm.fileList" @afterRead="afterRead" @delete="deletePic"
					name="1" multiple width="210" height="210" :maxCount="9">
				</u-upload>
			</view> -->
		</view>

		<view class="btn-Box">
			<view class="cancel-btn">取消</view>
			<view class="release-btn" @click="SubMit()">发布</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				start: 0,
				subForm: {
					company: '',
					publisher: '',
					title: '',
					content: '',
					fileList: []
				},
				imgArr: [],
				// committeeId: "1472143507329773569",
				pageNo: 1,
				pageSize: 20,
			}
		},
		onLoad() {
			// this.SubMit()
		},
		methods: {
			descInput() {
				let txVal = this.subForm.content.length;
				this.start = txVal;
			},
			//删除图片
			toDelete(index) {
				this.imgArr.splice(index, 1)
			},
			toUp() {
				// 上传图片
				let num = 9
				uni.chooseImage({
					count: num,
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						tempFilePaths.forEach(ele => {
							uni.uploadFile({
								url: this.baseUrl + '/common/file/upload',
								method: 'POST',
								filePath: ele,
								name: 'file',
								header: {
									"access-token": uni.getStorageSync('token'),
								},
								success: (res) => {
									let JsonData = JSON.parse(res.data)
									console.log(JsonData);
									let url2 = JsonData.data.path;
									let obj = {
										id: JsonData.data.id,
										path: url2
									}
									this.imgArr.push(obj)
								}
							});
						})
					}
				});
			},
			SubMit() {
				let that = this
				// console.log(this.imgArr,999999)
				var imgs=[]
				that.imgArr.forEach(item=>{
					imgs.push(item.id)
				})
				// console.log(imgs)
				this.$api.to_http('committeePublic/save', {
					public: {
						publicUnit: that.subForm.company,
						title: that.subForm.title,
						content: that.subForm.content,
						publicUser: that.subForm.publisher,
						committeeId: uni.getStorageSync('committeeId'), //业委会id
						pageNo: that.pageNo,
						pageSize: that.pageSize,
					},
					images:imgs

				},'post',false,'').then(res=> {
					// debugger
				 console.log(res,8998989)
					if (res.data.code== 200) {
						uni.showToast({
							icon: 'success',
							title: res.data.message
						})
					}
					// setTimeout(()=>{
					// 	uni.navigateBack({
					// 		delta: 1
					// 	})
					// },1000)
				})
			},
			// uploadFilePromise(url) {
			// 	return new Promise((resolve, reject) => {
			// 		let a = uni.uploadFile({
			// 			url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
			// 			filePath: url,
			// 			name: 'file',
			// 			formData: {
			// 				user: 'test'
			// 			},
			// 			success: (res) => {
			// 				setTimeout(() => {
			// 					resolve(res.data.data)
			// 				}, 1000)
			// 			}
			// 		});
			// 	})
			// },
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		min-height: 100vh !important;

		.release-company {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 32rpx;
			margin-left: 32rpx;
			padding: 0 32rpx;
			width: 686rpx;
			height: 100rpx;
			background-color: #F9F9F9;

			.release-company-text1 {
				flex: 1;
				font-size: 36rpx;
			}

			.release-company-input {
				flex: 1;
				font-size: 36rpx;
				text-indent: 40rpx;
				font-weight: bold;
			}
		}


		.release-people {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 32rpx;
			margin-left: 32rpx;
			padding: 0 32rpx;
			width: 686rpx;
			height: 100rpx;
			background-color: #F9F9F9;

			.release-people-text1 {
				flex: 1;
				font-size: 36rpx;
			}

			.release-people-input {
				flex: 1;
				font-size: 36rpx;
				font-weight: bold;
				text-indent: 40rpx;
			}
		}

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
				right: 40rpx;
				top: 700rpx;
				font-size: 24rpx;
				color: #999999;
			}

		}

		.upload-imageBox {
			display: flex;
			flex-wrap: wrap;
			margin: 0 32rpx;
			min-height: 300rpx;

			.house-cover-main {
				margin-top: 16rpx;
				margin-left: -52rpx;
				// overflow: hidden;
				display: flex;
				flex-direction: row;
				align-items: center;
				flex-wrap: wrap;

			}

			.house-cover-view {
				margin-right: -20rpx;
				position: relative
			}

			.delete {
				position: absolute;
				top: -10rpx;
				right: -10rpx;
				// z-index: 999;
				width: 28rpx;
				height: 28rpx;
				background: rgba($color: #000000, $alpha: 0.5);
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.house-cover {
				width: 180rpx;
				height: 180rpx;
				margin-bottom: 20rpx;
				margin-left: 52rpx;
				border-radius: 8rpx;
			}

			// justify-content: space-around;
			// .upload-image {
			// 	margin: 32rpx;
			// 	position: relative;
			// 	display: flex;
			// 	flex-direction: row;
			// 	background-color: #EEEEEE;
			// 	border-radius: 4rpx;

			// 	.upload {
			// 		width: 210rpx;
			// 		height: 210rpx;
			// 	}

			// 	image {
			// 		margin: 80rpx;
			// 		width: 80rpx;
			// 		height: 80rpx;
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
			.upload-image {
				margin-left: 32rpx;
			}
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
