<template>
	<view class="collection">
		<view class="top">
			<view class="title">
				<image @click="toBack" src="@/static/hexingImg/back.png" mode=""></image>
				<view class="titleTxt1">收藏</view>
				<view class="titleTxt2" @click="toSearch">筛选</view>
			</view>
		</view>

		<view class="" style="height: var(--status-bar-height);margin-bottom: 88rpx;">
			<!-- 顶部占位空盒子 -->
		</view>
		<view class="tabs-view">
			<view class="tabs-item" @click="toChange(3)">
				<view class="tabs-item-relative">
					<text class="tabs-text" :class="{active:favorType==3}">商品</text>
					<view class="tabs-border" v-if="favorType==3"></view>
				</view>
			</view>

			<view class="tabs-item" @click="toChange(1)">
				<view class="tabs-item-relative">
					<text class="tabs-text" :class="{active:favorType==1}">房源</text>
					<view class="tabs-border" v-if="favorType==1"></view>
				</view>
			</view>
		</view>
		<!-- <view>
			<view class="wu" style="text-align: center;font-size: 32rpx;margin-top: 150rpx;color: #999999;"
				v-if="list.length==0">
				无相关消息
			</view>
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="itemTop">
					<view class="itemTitle">
						房屋租售信息
					</view>
					<view class="itemTime">
						{{item.favoriteDate}}
					</view>
				</view>
				<view class="itemTxt">
					房屋{{item.rsTypeCode==1?'出租':'出售'}}:
					{{item.aheName}},
					{{item.aheAddress}},
					{{item.houseU}},
					{{item.rsIntroduce}}
				</view>
			</view>
		</view> -->
		<scroll-view class="scroll-view" scroll-y>
			<!-- 房屋列表 -->
			<view class="house-cell" v-if="favorType==1" v-for="(item, index) in roomslist" :key="index"
				@click="getDetail(item.roomRs.roomId)">
				<image class="house-cover" v-if="item.roomRs.pictures.length>0" :src="baseUrlImg+item.pictures[0]"></image>
				<image class="house-cover" v-else src="../../../static/images/vvo-yao/goods-cover.png"></image>
				<view class="house-right">
					<text class="house-title">{{item.roomRs.aheName}}{{item.roomRs.roomOwnerName}}</text>
					<text class="house-desc">{{item.roomRs.aheAddress}}</text>
					<view class="label-row">
						<view class="label-view active" v-if="item.roomRs.statusCode==1">
							<text class="label-text active">正在出租</text>
						</view>
						<view class="label-view active" v-if="item.roomRs.statusCode==2">
							<text class="label-text active">已出租</text>
						</view>
						<view class="label-view active" v-if="item.roomRs.statusCode==3">
							<text class="label-text active">正在出售</text>
						</view>
						<view class="label-view active" v-if="item.roomRs.statusCode==4">
							<text class="label-text active">已出售</text>
						</view>
						<view class="label-view">
							<text class="label-text">{{item.roomRs.houseU}}</text>
						</view>

						<view class="label-view">
							<text class="label-text">{{item.roomRs.fitUp}}</text>
						</view>
					</view>

					<view class="house-bottom">
						<text class="house-price">{{item.roomRs.price}}{{item.roomRs.rpricePer}}</text>
						<text class="house-area">建面{{item.roomRs.areaBuild}}平</text>
					</view>
				</view>
			</view>
			
			<!-- 商品列表 -->
			<view class="list-cell" v-if="favorType==3" v-for="(item, index) in goodslist" :key="index"
				@click="navigate(item.goods.goodsId)">
				<image class="goods-cover" :src="imgUrl+item.goods.pictures[0]"></image>
				<view class="cell-right">
					<text class="goods-name">{{item.goods.goodsName}}</text>

					<text class="goods-price">¥{{item.goods.price}}</text>

					<view class="cell-right-row">
						<text class="goods-stock">剩余库存:{{item.goods.stockCount}}件</text>
						<text class="goods-sold">已售{{item.goods.soldCount}}件</text>
						<!-- <text class="shelf" v-if="status==3" @click.stop="soldOut(2,item.goodsId)">下架</text>
						<text class="shelf" v-else @click.stop="addGoods(3,item.goodsId)">上架</text> -->
					</view>
				</view>
			</view>

		</scroll-view>
		<view class="popup" v-show="popup" @click="popup=false">
			<view class="popupBox" @click.stop="">
				<!-- <view class="popupSearch">
					<image src="@/static/hexingImg/ss.png" mode=""></image>
					<input v-model="name" type="text" value="" placeholder="搜索小区名称" />
				</view> -->
				<!-- <view class="popupDate">
					<text>2021年11月17日</text>
					<image src="@/static/hexingImg/d own.png" mode=""></image>
				</view> -->
				<view class="popupDate">
					<gpp-date-picker class="startTime" @onConfirm="getStartTime" :startDate="startDate1"
						:endDate="endDate1" :defaultValue="endDate1">
						<text>{{startTime||'请选择开始日期'}}</text>
						<image src="@/static/hexingImg/down.png" mode=""></image>
					</gpp-date-picker>
					~
					<gpp-date-picker class="startTime" @onConfirm="getEndTime" :startDate="startDate2"
						:endDate="endDate2" :defaultValue="endDate2">
						<text>{{endTime||'请选择结束日期'}}</text>
						<image src="@/static/hexingImg/down.png" mode=""></image>
					</gpp-date-picker>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import gppDatePicker from "@/components/gpp-datePicker/gpp-datePicker.vue"
	export default {
		data() {
			return {
				tabsList: [{
						name: '商品'
					},
					{
						name: '房源'
					}
				],
				popup: false,
				page: 1,
				noPage: false,
				roomslist: [],
				goodslist: [],
				name: '', //搜索关键字
				startTime: '', //搜索的开始时间
				endTime: '', //搜索的结束时间
				favorType: 1,
				startDate1: '', //开始时间选择器的开始日期
				endDate1: '', //开始时间选择器的结束日期
				startDate2: '', //结束时间选择器的开始日期
				endDate2: '', //结束时间选择器的结束日期
			}
		},
		components: {
			gppDatePicker
		},
		// computed: {
		// 	startDate() {
		// 		return this.getDate('start');
		// 	},
		// 	endDate() {
		// 		return this.getDate('end');
		// 	}
		// },
		onLoad() {
			this.getDate()
			this.getMoreList()
		},
		onReachBottom() {
			// debugger
			if(this.noPage){
				return
			}
			this.getMoreList();
		},
		methods: {
			toBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			// tab切换
			toChange(i) {
				this.favorType = i;
				console.log(i)
				console.log(this.favorType)
				this.page = 1;
				this.roomslist = [];
				this.goodslist = [];
				this.getMoreList();
			},
			
			getMoreList() {
				this.page = 1
				this.noPage = false
				uni.showLoading({
					title: '加载更多...',
					mask: true
				});
				this.$api.to_http('/common/user-favor-gather/page', {
					pageNo: this.page++,
					pageSize: 10,
					// name: this.name,
					from: this.startTime,
					to: this.endTime,
					favorType: JSON.stringify(this.favorType)
				}, 'POST', '', false).then(res => {
					console.log(res)
					uni.hideLoading()
					var res=res.data.data
					if(res.records.length<10){
						this.noPage = true
					}
					if (res.records.length == 0) {
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						
					} else {
						if (this.favorType == 1&&res.records) {
							this.roomslist = this.roomslist.concat(res.records)
						} else if (this.favorType == 3) {
							this.goodslist = this.goodslist.concat(res.records)
						}
					}
				})

			},
			//获取时间选择器的开始和结束时间
			getDate() {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				// if (type === 'start') {
				// 	year = year - 100;
				// }
				this.endDate1 = `${year}-${month}-${day}`
				this.endDate2 = `${year}-${month}-${day}`
				this.startDate1 = `${year-100}-${month}-${day}`
				this.startDate2 = `${year-100}-${month}-${day}`
			},
			getStartTime(e) {
				this.startTime = e.dateValue
				this.startDate2 = e.dateValue
			},
			getEndTime(e) {
				this.endTime = e.dateValue
				this.endDate1 = e.dateValue
			},
			toSearch() {
				if (!this.popup) {
					console.log('打开筛选框')

					//初始化选择器时间和筛选时间
					this.startTime = ''
					this.endTime = ''
					this.getDate()

					this.popup = !this.popup
				} else {
					console.log('执行筛选操作')
					this.getList()
					this.popup = !this.popup
				}
			},
			getDetail(roomRsId, roomType) {//房源
				uni.setStorageSync('roomRsId', roomRsId)
				uni.navigateTo({
					url: '/pages/vvo-yao/house-manage/detail?id='+roomRsId
				})
			},
			navigate(id) {//商品
				uni.navigateTo({
					url: '/pages/vvo-yao/product-release/goods-detail?goodsId='+id
				})
			},
			// getList() {
			// 	this.page = 1
			// 	this.noPage = false
			// 	this.$api.to_http('/common/user-favor-gather/page', {
			// 		pageNo: this.page,
			// 		pageSize: 10,
			// 		name: this.name,
			// 		from: this.startTime,
			// 		to: this.endTime,
			// 		favorType:this.favorType
			// 	}, 'POST', '', false).then((res) => {
			// 		//this.list = res.data.data.records
			// 		// console.log(res)
			// 		// res = res.data
			// 		if (res.code != 200) {
			// 			return this.$refs.uToast.show({
			// 				title: res.message,
			// 				type: 'error',
			// 			})
			// 		}else{
			// 			this.type=this.isCheck
			// 			if(this.favorType==1){
			// 				this.roomslist =res.data.records
			// 			}else if(this.favorType==3){
			// 				this.goodslist=res.data.records
			// 			}
			// 		}
			// 	})
			// },
		}
	}
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		background-color: #F9F9F9;

		.collection {
			overflow-y: scroll;
		}

		.top {
			position: fixed;
			top: 0;
			width: 750rpx;
			background-color: #ffffff;
			padding-top: var(--status-bar-height);
			z-index: 999;

			.title {
				width: 100%;
				height: 88rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 36rpx;

				image {
					width: 30rpx;
					height: 30rpx;
				}

				.titleTxt1 {
					font-size: 34rpx;
					color: #222222;
					font-weight: 600;
				}

				.titleTxt2 {
					font-size: 28rpx;
					color: #1989FA;
					;
				}
			}
		}

		.tabs-view {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			height: 88rpx;

			.tabs-item {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 88rpx;

				.tabs-item-relative {
					position: relative;
				}

				.tabs-text {
					font-size: 32rpx;
					color: #666666;

					&.active {
						color: #1989FA;
					}
				}

				.tabs-border {
					position: absolute;
					bottom: -10rpx;
					width: 92rpx;
					height: 4rpx;
					border-radius: 2rpx;
					background-color: #1989FA;
				}
			}
		}

		.item {
			width: 750rpx;
			height: 188rpx;
			padding: 36rpx 24rpx;
			border-top: 2rpx solid #F2F2F2;
			background-color: #ffffff;

			.itemTop {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20rpx;

				.itemTitle {
					color: #222222;
					font-size: 32rpx;
					font-weight: 600;
				}

				.itemTime {
					color: #4F4F4F;
					font-size: 28rpx;
				}
			}

			.itemTxt {
				color: #666666;
				font-size: 24rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}

		.popup {
			position: fixed;
			top: var(--status-bar-height);
			margin-top: 88rpx;
			width: 750rpx;
			height: 100%;
			background: rgba(0, 0, 0, 0.49);

			.popupBox {
				width: 750rpx;
				height: 300rpx;
				background: #FFFFFF;
				border-radius: 0 0 20rpx 20rpx;
				padding-top: 32rpx;

				.popupSearch {
					width: 686rpx;
					height: 60rpx;
					background: #F2F2F2;
					border-radius: 100rpx;
					margin: 0 auto;
					display: flex;
					align-items: center;
					padding: 0 20rpx;

					image {
						width: 30rpx;
						height: 30rpx;
						margin-right: 16rpx;
					}

					input {
						font-size: 28rpx;
						width: 600rpx;
					}
				}

				.popupDate {
					width: 686rpx;
					padding: 0 30rpx;
					border-bottom: 2rpx solid #E0E0E0;
					padding-bottom: 18rpx;
					margin: 60rpx auto 0 auto;
					display: flex;
					justify-content: space-around;
					color: #666666;

					.startTime {
						display: flex;
						align-items: center;
						justify-content: center;

						text {
							margin-right: 20rpx;
							font-size: 28rpx;
						}

						image {
							width: 25rpx;
							height: 25rpx;
						}
					}

				}
			}
		}
	}

	.scroll-view {
		flex: 1;

		//商品列表
		.list-cell {
			margin: 24rpx 12rpx 8rpx 12rpx;
			display: flex;
			flex-direction: row;
			background: #FFFFFF;
			box-shadow: 0rpx 0rpx 16rpx rgba(28, 45, 70, 0.04);
			border-radius: 4rpx;
			padding: 24rpx;

			.goods-cover {
				width: 188rpx;
				height: 188rpx;
				border-radius: 16rpx;
			}

			.cell-right {
				flex: 1;
				margin-left: 16rpx;
				display: flex;
				flex-direction: column;

				.goods-name {
					font-size: 28rpx;
					line-height: 40rpx;
					color: #222222;
					lines: 2;
					text-overflow: ellipsis;
				}

				.goods-price {
					font-weight: 600;
					font-size: 52rpx;
					color: #ED6A0C;
				}

				.cell-right-row {
					display: flex;
					flex-direction: row;
					align-items: center;

					.goods-stock {
						font-size: 24rpx;
						color: #666666;
						flex: 1;
					}

					.goods-sold {
						font-size: 24rpx;
						color: #666666;
						margin-right: 40rpx;
					}

					.shelf {
						font-size: 24rpx;
						color: #1989FA;
					}
				}
			}
		}

		// 房屋列表
		.house-cell {
			display: flex;
			flex-direction: row;
			padding: 28rpx 32rpx;

			// border-bottom-color: #F2F2F2;
			// border-bottom-width: 2rpx;
			// border-style: solid;
			// background-color: #FFFFFF;
			.house-cover {
				width: 188rpx;
				height: 188rpx;
				border-radius: 16rpx;
			}

			.house-right {
				flex: 1;
				margin-left: 16rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.house-title {
					font-size: 28rpx;
					color: #222222;
					lines: 1;
					text-overflow: ellipsis;
				}

				.house-desc {
					font-size: 24rpx;
					color: #666666;
					lines: 1;
					text-overflow: ellipsis;
				}

				.label-row {
					display: flex;
					flex-direction: row;
					align-items: center;
					flex-wrap: wrap;
					margin-left: -28rpx;

					.label-view {
						padding: 0 13rpx;
						// height: 32rpx;
						background-color: #F2F2F2;
						border-radius: 4rpx;
						margin-left: 28rpx;
						line-height: 32rpx;

						&.active {
							background-color: #1989FA;
						}

						.label-text {
							font-size: 24rpx;
							color: #999999;

							&.active {
								color: #FFFFFF;
							}
						}
					}
				}

				.house-bottom {
					display: flex;
					flex-direction: row;
					align-items: flex-end;
					justify-content: space-between;

					.house-price {
						font-weight: 600;
						font-size: 40rpx;
						color: #ED6A0C;
						line-height: 40rpx;
					}

					.house-area {
						font-size: 24rpx;
						color: #666666;
					}
				}
			}
		}


	}
</style>
