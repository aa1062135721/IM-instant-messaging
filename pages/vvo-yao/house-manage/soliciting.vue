<template>
	<view class="container">
		<u-navbar back-text="" :title="title">
			<!-- 	<view class="navbar-right" slot="right">
				<view class="nav_right" @tap="soldOut">下架房源</view>
			</view> -->
		</u-navbar>
		<view class="input-row">
			<text class="input-row-title">发布类型：</text>
			<input disabled="" v-model="room.publicType" class="input-row-text" type="text" placeholder="请输入发布类型" />
		</view>
		<view class="input-row">
			<text class="input-row-title">区域：</text>

			<picker @change="changecategoryList" :value="categoryVal" :range="categoryList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{categoryList.length>0? categoryList[categoryVal].display:'' }}
				</view>
			</picker>


			<!-- <u-picker v-model="show" :columns="columns"></u-picker> -->
			<!-- <input v-model="room.area" class="input-row-text" type="text" placeholder="请输入小区位置" /> -->
		</view>
		<view class="input-row">
			<text class="input-row-title">面积：</text>
			<input v-model="room.coveredArea" class="input-row-text" type="text" placeholder="请输入面积" />
		</view>
		<view class="input-row">
			<text class="input-row-title">房屋性质：</text>

			<picker @change="changehousing" :value="housingIndex" :range="housingList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{housingList.length>0? housingList[housingIndex].display:'' }}
				</view>
			</picker>



			<!-- <input v-model="room.decorate" class="input-row-text" type="text" placeholder="请输入房屋性质" /> -->
		</view>
		<view class="input-row">
			<text class="input-row-title">房屋户型：</text>
			<!-- <input v-model="room.roomType" class="input-row-text" type="text" placeholder="请输入房屋户型" /> -->
			<picker @change="changeDoor" :value="doorIndex" :range="doorList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{doorList.length>0? doorList[doorIndex].display:'' }}
				</view>
			</picker>

		</view>

		<view v-if="title=='录入求租信息'" class="input-row">
			<text class="input-row-title">房屋楼层：</text>
			<input v-model="room.floor" class="input-row-text" type="text" placeholder="请输入房屋楼层" />
		</view>

		<view v-else class="input-row">
			<text class="input-row-title">房屋朝向：</text>
			<!-- <input v-model="room.roomType" class="input-row-text" type="text" placeholder="请输入房屋户型" /> -->
			<picker @change="changetoward" :value="towardIndex" :range="towardList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{towardList.length>0? towardList[towardIndex].display:'' }}
				</view>
			</picker>

		</view>




		<view class="input-row">
			<text class="input-row-title">{{title=='录入购房信息'?'房屋价格':'月租价格'}}：</text>
			<input v-model="room.price" class="input-row-text" type="text" placeholder="请输入价格" />
		</view>

		<view class="input-row">
			<text class="input-row-title">付款方式：</text>
			<!-- <input v-model="room.payment" class="input-row-text" type="text" placeholder="付款方式" /> -->
			<picker @change="changepay" :value="payIndex" :range="payList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{payList.length>0? payList[payIndex].display:'' }}
				</view>
			</picker>
		</view>

		<view class="input-row">
			<text class="input-row-title">联系人：</text>
			<input v-model="room.linkman" class="input-row-text" type="text" placeholder="请输入联系人" />
		</view>

		<view class="input-row">
			<text class="input-row-title">联系电话：</text>
			<input v-model="room.linktel" class="input-row-text" type="text" placeholder="请输入联系电话" />
		</view>


		<view class="btn_box">
			<view class="info_btn cancel_btn" @click="cancel">取消</view>
			<view class="info_btn confirm_btn" @click="release">{{title=='录入购房信息'?'出售':'出租'}}</view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {

				// 朝向
				towardList: [],
				towardIndex: 0,
				// 付款方式
				payList: [],
				payIndex: 0,
				// 房屋户型
				doorList: [],
				doorIndex: 0,

				// 房屋性质
				housingList: [],
				housingIndex: 0,

				// 区域
				categoryList: [],
				categoryVal: 0,


				title: '',
				roomId: '',
				info: '',
				type: '',
				startYear: '',
				startMonth: '',
				startDay: '',
				room: {},
				imgArr: [],
				params: {
					year: true,
					month: true,
					day: true,
				},
				show: false,
			}
		},
		onLoad(e) {
			// this.roomId=e.roomId;
			this.getDoorList()
			this.gethousingList()
			this.getareaList()
			this.type = e.type;


			// this.room.publicType = e.key

			if (e.key == 3) {
				this.room.publicType = '求租'
				this.getPayList()
			}
			if (e.key == 4) {
				this.room.publicType = '购房'
				this.getPayListData()
				this.gettowardList()
			}
			let time = new Date();
			// 获取年日月时分秒
			this.startYear = time.getFullYear();
			this.startMonth = Number(time.getMonth()) + 1;
			this.startDay = time.getDate();


			// type 1、购房  2、求租
			let url = '';
			if (e.type == 1) {
				// url = 'room/rent/getInfo/';
				this.title = '录入购房信息'
			} else {
				// url = 'room/buy/getInfo/';
				this.title = '录入求租信息'
			}
			// this.getInfo(url)
		},
		// onNavigationBarButtonTap(e) {
		// 	this.soldOut()
		// },e
		methods: {

			// 房屋朝向
			changetoward(e) {
				this.towardIndex = e.detail.value;
			},

			//付款方式
			changepay(e) {
				this.payIndex = e.detail.value;
			},

			//房屋户型
			changeDoor(e) {
				this.doorIndex = e.detail.value;
			},
			// 房屋性质
			changehousing(e) {
				this.housingIndex = e.detail.value;
			},

			// 区域
			changecategoryList(e) {
				this.categoryVal = e.detail.value;
			},

			// 获取房屋朝向
			gettowardList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '朝向'
				}, 'POST', '', false).then((res) => {
					this.towardList = res.data.data
				})
			},
			// 获取付款方式
			getPayList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '租房付款方式'
				}, 'POST', '', false).then((res) => {
					this.payList = res.data.data
				})
			},

			getPayListData() {
				this.$api.to_http('/common/getKeys', {
					keyName: '购房付款方式'
				}, 'POST', '', false).then((res) => {
					this.payList = res.data.data
				})
			},

			// 获取房屋户型
			getDoorList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '房屋户型'
				}, 'POST', '', false).then((res) => {
					this.doorList = res.data.data
				})
			},
			//获取房屋性质list
			gethousingList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '装修情况'
				}, 'POST', '', false).then((res) => {
					this.housingList = res.data.data
				})
			},
			// 获取区域list
			getareaList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '区域'
				}, 'POST', '', false).then((res) => {
					this.categoryList = res.data.data
				})
			},
			// 点击取消按钮
			cancel() {
				uni.showModal({
					title: '提示',
					content: '是否取消发布',
					success: function(res) {

						if (res.confirm) {

							uni.navigateBack({
								delta: 1
							})

						}
					}
				})

			},

			release() {

				let that = this

				if (this.title == '录入求租信息') {
					this.room.area = this.categoryList[this.categoryVal].display //区域
					this.room.decorate = this.housingList[this.housingIndex].display //房屋性质
					this.room.roomType = this.doorList[this.doorIndex].display //户型
					this.room.payment = this.payList[this.payIndex].display
                   this.room.publicAddress=uni.getStorageSync('curLocation')
					this.room.rpricePer = '元/月'
					uni.showModal({
						title: '提示',
						content: '确定发布求租信息',
						success: function(res) {
							if (res.confirm) {
								that.$api.to_http('/house/publicQz', that.room, 'post', '', false).then((
										res) => {
										console.log(res)
										if (res.data.code == 200) {
											uni.showToast({
												title: '操作成功',
												icon: 'success'
											})
											setTimeout(() => {
												uni.navigateBack({
													delta: 1
												})
											}, 2000)

										} else {
											uni.showToast({
												title: res.data.message,
												icon: 'error'
											})
										}

									}

								)
							}
						}
					});
				} else {
					this.room.area = this.categoryList[this.categoryVal].display //区域
					this.room.decorate = this.housingList[this.housingIndex].display //房屋性质
					this.room.roomType = this.doorList[this.doorIndex].display //户型
					this.room.payment = this.payList[this.payIndex].display
					this.room.buildingHead = this.towardList[this.towardIndex].display
                    this.room.publicAddress=uni.getStorageSync('curLocation')
					this.room.rpricePer = '元'
					uni.showModal({
						title: '提示',
						content: '确定发布求租信息',
						success: function(res) {
							if (res.confirm) {
								that.$api.to_http('/house/publicGf', that.room, 'post', '', false).then((
										res) => {
										console.log(res)
										if (res.data.code == 200) {
											uni.showToast({
												title: '操作成功',
												icon: 'success'
											})
											setTimeout(() => {
												uni.navigateBack({
													delta: 1
												})
											}, 2000)

										} else {
											uni.showToast({
												title: res.data.message,
												icon: 'error'
											})
										}

									}

								)
							}
						}
					});



				}
			},

			confirm(e) {
				let tim_str = e.year + '-' + e.month + '-' + e.day
				this.room.rsDate = tim_str
			},
			//删除图片
			toDelete(index) {
				this.imgArr.splice(index, 1)
			},
			getInfo(url) {
				let roomId = this.roomId
				this.$api.to_http(url + roomId, {

				}, 'GET', '', false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.info = res.data
					this.imgArr = res.data.images
					this.room = res.data.romm
				})
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
			submit(i, e) {
				let img_id_arr = []; // 最终要提交的图片租
				this.imgArr.forEach(ele => {
					img_id_arr.push(ele.id)
				})
				let url = '';
				// if(i == '5'){
				// 	// type 1、出租  2、出售
				// 	if(this.type == 1){
				// 		url = 'room/rent/edit';
				// 	}else{
				// 		url = 'room/buy/edit';
				// 	}
				// }else{
				// 	// type 1、出租  2、出售
				// 	if(this.type == 1){
				// 		url = 'room/rent/save';
				// 	}else{
				// 		url = 'room/buy/save';
				// 	}
				// }

				if (!this.room.roomRsId || this.room.roomRsId == '' || this.room.roomRsId == null) {
					// type 1、出租  2、出售
					if (this.type == 1) {
						url = 'room/rent/save';
					} else {
						url = 'room/buy/save';
					}
				} else {
					// type 1、出租  2、出售
					if (this.type == 1) {
						this.room.rsTypeCode = 1;
						this.room.statusCode = 1;
						url = 'room/rent/edit';
					} else {
						this.room.rsTypeCode = 2;
						this.room.statusCode = 3;
						url = 'room/buy/edit';
					}
				}
				this.$api.to_http(url, {
					room: this.room,
					images: img_id_arr
				}, 'POST', '', false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.$refs.uToast.show({
						title: res.message,
						type: 'success',
					})

				})
			},
			soldOut() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '是否确认下架该房源',
					success: function(res) {
						if (res.confirm) {
							let roomId = that.roomId;
							// type 1、出租  2、出售
							let url = '';
							if (that.type == 1) {
								url = 'room/rent/soldOut/';
							} else {
								url = 'room/buy/soldOut/';
							}
							that.$api.to_http(url + roomId, {

							}, 'GET', '', false).then((res) => {
								res = res.data
								if (res.code != 200) {
									return that.$refs.uToast.show({
										title: res.message,
										type: 'error',
									})
								}
								that.$refs.uToast.show({
									title: res.message,
									type: 'success',
								})
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
		}
	}
</script>

<style lang="scss" scoped>
	.btn_box {
		padding: 0 32upx;
		display: flex;
		justify-content: space-between;
		position: absolute;
		left: 0;
		bottom: 84upx;

		.info_btn {
			height: 96upx;
			width: 330upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.cancel_btn {
			border: 1px solid #999999;
			box-sizing: border-box;
			border-radius: 2px;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: bold;
			font-size: 32upx;
			color: #999;
			margin-right: 26upx;
		}

		.confirm_btn {
			background: #1989FA;
			border-radius: 2px;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: bold;
			font-size: 32upx;
			color: #fff;
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		background-color: #F9F9F9;

		.navbar-right {
			height: 44upx;
			margin-right: 24upx;
			box-sizing: border-box;

			.nav_right {
				font-family: 'PingFang SC';
				font-size: 32upx;
				text-align: right;
				color: #1989FA;
			}
		}

		.input-row {
			padding: 0 32rpx;
			height: 96rpx;
			border-bottom: 2rpx solid #F2F2F2;
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: #FFFFFF;

			.input-row-text {
				font-size: 28rpx;
				line-height: 40rpx;
				color: #222222;
				flex: 1;
			}
		}

		.input-row-title {
			font-size: 32rpx;
			line-height: 44rpx;
			color: #222222;
			width: 232rpx;
		}

		.input-column {
			padding: 20rpx 32rpx;
			border-bottom: 2rpx solid #F2F2F2;
			display: flex;
			flex-direction: column;
			background-color: #FFFFFF;

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

			.textarea-style {
				width: 100%;
				padding: 0;
				font-size: 28rpx;
				line-height: 42rpx;
				color: #666666;
				margin-top: 10rpx;
			}
		}

		.submit-btn {
			margin: 46rpx 32rpx;
			height: 88rpx;
			line-height: 88rpx;
			text-align: center;
			background: #1989FA;
			border-radius: 4rpx;

			.submit-text {
				font-size: 32rpx;
				color: #FFFFFF;
			}

			&.orange {
				background: #ED6A0C;
			}
		}

	}
</style>
