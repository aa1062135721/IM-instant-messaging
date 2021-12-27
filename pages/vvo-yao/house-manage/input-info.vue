<template>
	<view class="container">
		<u-navbar back-text="" :title="title">

		</u-navbar>
		<view class="input-row">
			<text class="input-row-title">小区名字：</text>
			<input v-model="room.aheName" class="input-row-text" type="text" placeholder="请输入小区名字" />
		</view>

		<view class="input-row">
			<text class="input-row-title">小区位置：</text>
			<input v-model="room.address" class="input-row-text" type="text" placeholder="请输入小区位置" />
		</view>

		<view class="input-row">
			<text class="input-row-title">期号：</text>
			<input v-model="room.num" class="input-row-text" type="text" placeholder="请输入期号" />
		</view>

		<view class="input-row">
			<text class="input-row-title">楼栋：</text>
			<input v-model="room.building" class="input-row-text" type="text" placeholder="请输入楼栋" />
		</view>

		<view class="input-row">
			<text class="input-row-title">单元：</text>
			<input v-model="room.unit" class="input-row-text" type="text" placeholder="请输入单元" />
		</view>

		<view class="input-row">
			<text class="input-row-title">楼层：</text>
			<input v-model="room.floor" class="input-row-text" type="text" placeholder="请输入单元" />
		</view>


		<view class="input-row">
			<text class="input-row-title">房号：</text>
			<input v-model="room.house" class="input-row-text" type="text" placeholder="请输入房号" />
		</view>

		<view class="input-row" @click="isshow=true">
			<text class="input-row-title">性质：</text>
			<!-- <input v-model="room.roomUse" class="input-row-text" type="text" placeholder="请输入单元" /> -->
			<picker @change="natureChange" :value="natureVal" :range="natureList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{natureList.length>0?natureList[natureVal].display:'' }}
				</view>
			</picker>

		</view>


		<view class="input-row" @click="show=true,timeType=1">
			<text class="input-row-title">接房时间：</text>
			<input v-model="room.roomOfTime" class="input-row-text" type="text" placeholder="请输入接房时间" />
		</view>


		<view class="input-row" @click="show=true,timeType=2">
			<text class="input-row-title">建成时间：</text>
			<input v-model="room.roomBuildTime" class="input-row-text" type="text" placeholder="请输入建成时间" />
		</view>

		<view class="input-row">
			<text class="input-row-title">建筑面积：</text>
			<input v-model="room.coveredArea" class="input-row-text" type="text" placeholder="请输入建筑面积" />
		</view>

		<view class="input-row">
			<text class="input-row-title">套内面积：</text>
			<input v-model="room.insideArea" class="input-row-text" type="text" placeholder="请输入套内面积" />
		</view>

		<view class="input-row">
			<text class="input-row-title">户型：</text>
			<!-- <input v-model="room.roomType" class="input-row-text" type="text" placeholder="请输入装修情况" /> -->
			<picker @change="modelChange" :value="modelVal" :range="modelList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{modelList.length>0?modelList[modelVal].display:'' }}
				</view>
			</picker>
		</view>

		<view class="input-row">
			<text class="input-row-title">电梯房：</text>
			<!-- <input v-model="room.isLift" class="input-row-text" type="text" placeholder="请输入装修情况" /> -->
			<picker @change="elevatorChange" :value="elevatorVal" :range="elevatorList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{elevatorList.length>0?elevatorList[elevatorVal].display:'' }}
				</view>
			</picker>

		</view>

		<view class="input-row">
			<text class="input-row-title">装修情况：</text>
			<!-- <input v-model="room.decorate" class="input-row-text" type="text" placeholder="请输入装修情况" /> -->
			<picker @change="decorateChange" :value="decorateVal" :range="decorateList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{decorateList.length>0?decorateList[decorateVal].display:'' }}
				</view>
			</picker>
		</view>

		<view class="input-row">
			<text class="input-row-title">朝向：</text>
			<!-- <input v-model="room.buildingHead" class="input-row-text" type="text" placeholder="请输入朝向" /> -->

			<picker @change="towardChange" :value="towardVal" :range="towardList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{towardList.length>0?towardList[towardVal].display:'' }}
				</view>
			</picker>
		</view>

		<view class="input-row">
			<text class="input-row-title">{{title=='录入卖房信息'?'价格':'月租价'}}：</text>
			<input v-model="room.price" class="input-row-text" type="text"
				:placeholder=" title=='录入卖房信息'?'请输入价格(元)':'请输入价格(元/月)'" />
		</view>


		<view class="input-row" v-if="title=='录入出租信息'">
			<text class="input-row-title">付款方式：</text>
			<!-- 	<input v-model="room.isBargain" class="input-row-text" type="text" placeholder="请输入价格(元/月)" /> -->

			<picker @change="payChange" :value="payVal" :range="payList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{payList.length>0?payList[payVal].display:'' }}
				</view>
			</picker>
		</view>

		<view class="input-row" v-if="title=='录入出租信息'">
			<text class="input-row-title">家具家电：</text>
			<!-- <input v-model="room.roomAppliances" class="input-row-text" type="text" placeholder="请输入装修情况" /> -->
			<picker @change="furnitureChange" :value="furnitureVal" :range="furnitureList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{furnitureList.length>0?furnitureList[furnitureVal].display:'' }}
				</view>
			</picker>
		</view>


		<view class="input-row">
			<text class="input-row-title">可议价：</text>
			<!-- 	<input v-model="room.isBargain" class="input-row-text" type="text" placeholder="请输入价格(元/月)" /> -->

			<picker @change="bargainingChange" :value="bargainingdVal" :range="bargainingList" range-key="display">
				<view style="padding: 20rpx;background-color: white;">
					{{bargainingList.length>0?bargainingList[bargainingdVal].display:'' }}
				</view>
			</picker>
		</view>

		<!-- 	<view class="input-row" v-else>
			<text class="input-row-title">房价：</text>
			<input v-model="room.price" class="input-row-text" type="text" placeholder="请输入价格(元/平)" />
		</view> -->
		<view class="input-row">
			<text class="input-row-title">联系人：</text>
			<input v-model="room.linkman" class="input-row-text" type="text" placeholder="请输入联系人姓名" />
		</view>
		<view class="input-row">
			<text class="input-row-title">联系电话：</text>
			<input v-model="room.linktel" class="input-row-text" type="number" placeholder="请输入联系电话" />
		</view>

		<view class="input-row">
			<text class="input-row-title">房产证号：</text>
			<input v-model="room.pocNum" class="input-row-text" type="number" placeholder="请输入房产证号" />
		</view>



		<!-- 	<view class="input-column">
			<text class="input-row-title">户型图：</text>
			
			<view class="house-cover-main">
				<view class="house-cover-view" v-for="(item, index) in imgArr" :key="index">
					<image class="house-cover" :src="imgUrl+item.path" mode="aspectFill"></image>	
					<u-icon class="delete" @click="toDelete(index)" name="close" color="#ffffff" size="20"></u-icon>
				</view>
				<image v-if="imgArr.length<9" class="house-cover" src="@/static/images/vvo-yao/add-house.png" @click="toUp()"></image>
			</view>
		</view>
		 -->

		<view class="input-row">
			<text class="input-row-title">户型图：</text>
			<input v-model="room.floorPlan" class="input-row-text" type="number" placeholder="请输入户型图" />
		</view>

		<view class="input-column">
			<text class="input-row-title">图片：</text>

			<view class="house-cover-main">
				<view class="house-cover-view" v-for="(item, index) in imgArr" :key="index">
					<image class="house-cover" :src="imgUrl+item.path" mode="aspectFill"></image>
					<u-icon class="delete" @click="toDelete(index)" name="close" color="#ffffff" size="20"></u-icon>
				</view>
				<image v-if="imgArr.length<9" class="house-cover" src="@/static/images/vvo-yao/add-house.png"
					@click="toUp()"></image>
			</view>
		</view>

		<view class="input-column">
			<text class="input-row-title">其他描述：</text>
			<textarea maxlength='100' v-model="room.otherDesc" class="textarea-style" placeholder="请输入描述"></textarea>
		</view>


		<view class="input-column ">
			<text class="input-row-title">地理位置：</text>
			<!-- <textarea v-model="room.rsIntroduce" class="textarea-style" placeholder="请输入商品描述"></textarea> -->
			<view class=" locationMap">
				<map style="width: 100%;" :latitude="location.latitude" :longitude="location.longitude"></map>
			</view>

		</view>

		<view class="input-column">
			<text class="input-row-title">房源介绍：</text>
			<textarea v-model="room.roomDesc" class="textarea-style" placeholder="请输入房源描述"></textarea>
		</view>

		<view class="sell" @click="sell">出售</view>

		<u-pickerT mode="time" v-model="show" :params="params" @confirm="confirm" :start-year="startYear"
			:start-month="startMonth" :start-day="startDay"></u-pickerT>
		<u-toast ref="uToast" />






	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 家具家电
				furnitureVal: 0,
				furnitureList: [],
				// 付款方式
				payVal: 0,
				payList: [],
				// 可议价
				bargainingdVal: 0,
				bargainingList: [],
				// 朝向
				towardVal: 0,
				towardList: [],
				// 装修情况
				decorateVal: 0,
				decorateList: [],
				// 电梯房
				elevatorVal: 0,
				elevatorList: [],

				// 户型
				modelList: [],
				modelVal: 0,

				// 性质
				natureList: [],
				natureVal: 0,

				timeType: 1,
				location: {
					longitude: '',
					latitude: '',
				},
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
			this.getnatureList()
			this.getmodelList()
			this.getelevatorList()
			this.getdecorateList()
			this.gettowardList()
			this.getbargainingList()
			this.getPayList()
			this.getfurnitureList()
			// this.roomId=e.roomId;
			this.room.publicType=e.key
			this.location.latitude = uni.getStorageSync('latitude')
			this.location.longitude = uni.getStorageSync('longitude')
			this.type = e.type;

			let time = new Date();
			// 获取年日月时分秒
			this.startYear = time.getFullYear();
			this.startMonth = Number(time.getMonth()) + 1;
			this.startDay = time.getDate();


			// type 1、卖房  2、出租
			let url = '';
			if (e.type == 1) {
				// url = 'room/rent/getInfo/';
				this.title = '录入卖房信息'
			} else {
				// url = 'room/buy/getInfo/';
				this.title = '录入出租信息'
			}
			// this.getInfo(url)
		},
		// onNavigationBarButtonTap(e) {
		// 	this.soldOut()
		// },e
		methods: {

			// 出售/出租
			sell() {
				let floorPlanArr=[]
				if(this.imgArr){
					this.imgArr.forEach(item=>{
						floorPlanArr.push(item.path)
						// console.log(item)
					})
					
					this.room.floorPlan=floorPlanArr.join(',')
				}
				// 出售
				this.room.roomUse = this.natureList[this.natureVal].display //性质
				this.room.roomType = this.modelList[this.modelVal].display //户型
				this.room.isLift = this.elevatorList[this.elevatorVal].display //电梯房
				this.room.decorate = this.decorateList[this.decorateVal].display //装修情况
				this.room.buildingHead = this.towardList[this.towardVal].display //朝向
				this.room.isBargain = this.bargainingList[this.bargainingdVal].display //议价
                this.room.publicAddress=uni.getStorageSync('curLocation')

				if (this.title == '录入卖房信息') {
					let arr = []
					this.imgArr.forEach(item => {
						arr.push(item.id)
						
					})
					this.room.rpricePer = '元'
                    // this.room.publicType=
					let that = this
					uni.showModal({
						title: '提示',
						content: '是否确定出售',
						success: function(res) {
							if (res.confirm) {
								that.$api.to_http('/house/publicCs', {
									images: arr,
									room: Object.assign(that.room, that.location)
								}, 'POST', '', false).then((res) => {
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
								})
							}
						}
					})

				} else {
					this.room.payment = this.payList[this.payVal].display //付款方式
					this.room.roomAppliances = this.furnitureList[this.furnitureVal].display //家具家电
					let arr = []
					this.imgArr.forEach(item => {
						arr.push(item.id)
					})
					this.room.rpricePer = '元/月'
                    let that =this
					uni.showModal({
						title: '提示',
						content: '是否确定出售',
						success: function(res) {
							if (res.confirm) {
								that.$api.to_http('/house/publicCz', {
									images: arr,
									room: Object.assign(that.room, that.location)
								}, 'POST', '', false).then((res) => {
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
								})
							}
						}
					})
					
					// this.$api.to_http('/house/publicCz', {
					// 	images: arr,
					// 	room: Object.assign(this.room, this.location)
					// }, 'POST', '', false).then(res => {
					// 	console.log(res)
					// })

				}


			},

			furnitureChange(e) {
				this.furnitureVal = e.detail.value
			},

			payChange(e) {
				this.payVal = e.detail.value;
			},
			bargainingChange(e) {
				this.bargainingdVal = e.detail.value;
			},
			towardChange(e) {
				this.towardVal = e.detail.value;
			},
			decorateChange(e) {
				this.decorateVal = e.detail.value;
			},
			// 电梯房
			elevatorChange(e) {
				this.elevatorVal = e.detail.value;
			},
			// 户型
			modelChange(e) {
				this.modelVal = e.detail.value;
			},
			// 性质
			natureChange(e) {
				this.natureVal = e.detail.value;
			},

			getfurnitureList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '家具家电情况'
				}, 'POST', '', false).then((res) => {
					this.furnitureList = res.data.data
				})
			},
			gettowardList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '朝向'
				}, 'POST', '', false).then((res) => {
					this.towardList = res.data.data
				})
			},
			getPayList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '租房付款方式'
				}, 'POST', '', false).then((res) => {
					this.payList = res.data.data
				})
			},
			getbargainingList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '是否'
				}, 'POST', '', false).then((res) => {
					this.bargainingList = res.data.data
				})
			},

			getdecorateList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '装修情况'
				}, 'POST', '', false).then((res) => {
					this.decorateList = res.data.data
				})
			},

			getelevatorList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '是否'
				}, 'POST', '', false).then((res) => {
					this.elevatorList = res.data.data
				})
			},

			getmodelList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '房屋户型'
				}, 'POST', '', false).then((res) => {
					this.modelList = res.data.data
				})
			},

			getnatureList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '房屋用途'
				}, 'POST', '', false).then((res) => {
					this.natureList = res.data.data
				})
			},

			confirm(e) {
				// console.log(this.timeType)
				let tim_str = e.year + '-' + e.month + '-' + e.day
				if (this.timeType == 1) {
					this.room.roomOfTime = tim_str
				} else {
					this.room.roomBuildTime = tim_str
				}


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
	.sell {
		margin: 128upx 32upx;
		background: #ED6A0C;
		border-radius: 2px;
		height: 88upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		font-family: PingFang SC;
		color: #fff;
	}

	.locationMap {
		display: flex;
		justify-content: center;
		width: 100%;
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
