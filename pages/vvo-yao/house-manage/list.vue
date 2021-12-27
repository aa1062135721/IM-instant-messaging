<template>
	<view class="container">

		<u-popup v-model="selectType" mode='right'>
			
            <view  class="select_type">
            	<!-- 买房 -->
            	<view @click="buyHouse(1,4)" class="public">
            		<image  class="icon" src="../../../static/images/vvo-yao/2.png" mode=""></image>
            		<view>买房</view>
            	</view>
            	<!-- 卖房 -->
            	<view @click="goListinfo(1,2)" class="public sellers">
            		<image class="icon" src="../../../static/images/vvo-yao/1.png" mode=""></image>
            		<view>卖房</view>
            	</view>
            	<!-- 求租 -->
            	<view @click="buyHouse(2,3)" class="public soliciting">
            		<image class="icon" src="../../../static/images/vvo-yao/3.png" mode=""></image>
            		<view>求租</view>
            	</view>
            	<!-- 出租 -->
            	<view @click="goListinfo(2,1)"  class="public rent">
            		<image class="icon" src="../../../static/images/vvo-yao/4.png" mode=""></image>
            		<view>出租</view>
            	</view>
            
            </view>
		</u-popup>

	


		<view class="search">
			<view class="search-left">
				<image src="../../../static/hexingImg/ss.png" mode=""></image>
				<input type="text" value="" placeholder="关键词搜索" v-model="searchName" confirm-type="search" />
			</view>
			<view class="search-right" @click="list=[],getList()">搜索</view>
		</view>
		<view class="tabs_view">
			<view class="tabs_item">
				<view class="tabs_item_relative" @click="toCheck(1,'11'),noPage=false">
					<text class="tabs_text" :class="{active:isCheck==1}">出租</text>
					<view class="tabs_border" v-show="isCheck==1"></view>
				</view>
			</view>

			<view class="tabs_item">
				<view class="tabs_item_relative" @click="toCheck(2,'11'),noPage=false">
					<text class="tabs_text" :class="{active:isCheck==2}">出售</text>
					<view class="tabs_border" v-show="isCheck==2"></view>
				</view>
			</view>
		</view>

		<view class="screen_view">
			<!-- <view class="screen-item">
				<text class="screen-text">区域</text>
				<image class="down-icon" src="@/static/images/vvo-yao/down-gray.png"></image>
			</view>
			
			<view class="screen-item">
				<text class="screen-text">价格</text>
				<image class="down-icon" src="@/static/images/vvo-yao/down-gray.png"></image>
			</view>
			
			<view class="screen-item">
				<text class="screen-text">户型</text>
				<image class="down-icon" src="@/static/images/vvo-yao/down-gray.png"></image>
			</view>
			
			<view class="screen-item">
				<text class="screen-text">用途</text>
				<image class="down-icon" src="@/static/images/vvo-yao/down-gray.png"></image>
			</view> -->
			<u-dropdown active-color="#1989FA" ref='uDropdowns' inactive-color="#666666" menu-icon="arrow-down-fill"
				menu-icon-size="14">
				<u-dropdown-item v-model="areaVal" :title="areaTitle" :options="areaType" @change="selArea">
				</u-dropdown-item>
				<u-dropdown-item v-model="priceVal" :title="priceTitle" :options="priceType" @change="selPrice">
				</u-dropdown-item>
				
				<u-dropdown-item v-model="houseVal" :title="houseTitle" :options="houseType" @change="selHouse">
				</u-dropdown-item>
				<u-dropdown-item v-model="purposeVal" :title="purposeTitle" :options="purposeType" @change="selPurpose">
				</u-dropdown-item>
			</u-dropdown>
		</view>

		<scroll-view class="scroll_view" scroll-y>
			<view class="house_cell" v-for="(item, index) in list" :key="index" @click="getDetail(item.room.id)">
				<image class="house_cover" v-if="item.images && item.images.length>0"
					:src="imgBaseUrl+item.images[0].path"></image>
				<image class="house_cover" v-else src="../../../static/images/vvo-yao/goods-cover.png"></image>
				<view class="house_right">
					<text class="house_title">{{item.room.aheName}}{{item.room.roomOwnerName}}</text>
					<text class="house_desc">{{item.room.address}}</text>
					<view class="Tag">
					  <view class="itemtag tagactive">{{item.room.roomStatusDisplay}}</view>  <view class="itemtag">{{item.room.roomType}}</view>
					    <view class="itemtag">{{item.room.decorate}}</view>
					</view>
					<view class="label_row">
						<view class="label_view active" v-if="item.room.statusCode==1">
							<text class="label_text active">正在出租</text>
						</view>
						<view class="label_view active" v-if="item.room.statusCode==2">
							<text class="label_text active">已出租</text>
						</view>
						<view class="label_view active" v-if="item.room.statusCode==3">
							<text class="label_text active">正在出售</text>
						</view>
						<view class="label_view active" v-if="item.room.statusCode==4">
							<text class="label_text active">已出售</text>
						</view>
						<view class="label_view">
							<text class="label_text">{{item.room.houseU}}</text>
						</view>

						<view class="label_view">
							<text class="label_text">{{item.room.fitUp}}</text>
						</view>
					</view>

					<view class="house_bottom">
						<text class="house_price">{{item.room.price}}{{item.room.rpricePer}}</text>
						<text class="house-area">建面{{item.room.coveredArea}}m²</text>
					</view>
				</view>
			</view>
		</scroll-view>

		<image @click="navigate({url: '/pages/vvo-yao/house-manage/map-room'})" class="location"
			src="@/static/images/vvo-yao/location.png"></image>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import YAO_API from '../../../common/vmeitime-http/index.js'
	export default {
		data() {
			return {
				searchName:'',
				publicType:1,
				selectType: false,
				keyword: '',
				imgBaseUrl: YAO_API.http_config.imgBaseUrl,
				roomType: 1,
				list: [],
				isCheck: 1,
				status: uni.getStorageSync('status'),
				provinceName: uni.getStorageSync('provinceName'),
				aheName: uni.getStorageSync('aheName'),
				pageNo: 1,
				pageSize: 30,
				noPage: false,
				areaTitle: '区域',
				priceTitle: '价格',
				houseTitle: '户型',
				purposeTitle: '用途',
				areaVal: '',
				priceVal: '',
				houseVal: '',
				purposeVal: '',
				areaType: [{
					label: '默认排序',
					value: '',
				}],
				priceType: [],
				houseType: [],
				purposeType: [],
			}
		},
		onShow() {
			// this.noPage=false
			// this.pageNo=1
			
			// this.getList()
		},
		
		onLoad(op) {
			if (op.type == 1) {
				this.toCheck(2)
			} else {
				this.toCheck(1)
			}
			// isCheck 1、出租  2、出售
			let type = '';
			if (this.isCheck == 1) {
				type = '房屋租房价格';
			} else {
				type = '房屋售房价格';
			}
			this.getType(type);
			this.getType('房屋户型');
			this.getType('房屋用途');
		},
		onReachBottom() {
			if (this.noPage) {
				uni.showToast({
					title: '没有更多了',
					icon: 'none',
					duration: 2000
				});
				return
			}
			uni.showLoading({
				title: '加载更多...',
				mask: true
			});
			this.pageNo++
			this.getList();
		},
		onNavigationBarButtonTap() {
			this.selectType = !this.selectType
		},
		methods: {
		buyHouse(info,key){
			uni.navigateTo({
				url:'./soliciting?type='+info+'&key='+key
			})
		},
			goListinfo(info,key){
				uni.navigateTo({
					url:'./input-info?type='+info+'&key='+key
				})
			},
			
			getType(val) {
				this.$api.to_http('common/getKeys', {
					keyName: val
				}, 'POST', '', false, 'application/json').then((res) => {
					res = res.data
					console.log(res)
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					let arr = [{
						value: '',
						label: '全部'
					}]
					if (res.data.length > 0) {
						res.data.forEach(item => {
							item.label = item.display;
							let obj = {
								// value: item.display,
								value: item.value,
								label: item.display
							}
							arr.push(obj)
						})
					}
					switch (val) {
						case '房屋租房价格':
							this.priceType = arr;
							break;
						case '房屋售房价格':
							this.priceType = arr;
							break;
						case '房屋户型':
							this.houseType = arr;
							break;
						case '房屋用途':
							this.purposeType = arr;
							break;
					}
				})
			},
			selArea(val) {
				let data = '';
				this.areaType.forEach(item => {
					if (item.value == val) {
						data = item.label;
					}
				})
				this.areaTitle = val == '' ? '区域' : data;
			},
			selPrice(val) {
				// debugger
				let data = '';
				this.priceType.forEach(item => {
					if (item.value == val) {
						data = item.label;
					}
				})
				this.priceTitle = val == '' ? '价格' : data;
				
				this.pageNo = 1;
				this.list = [];
				this.getList();
			},
			
			selHouse(val) {
				// debugger
				let data = '';
				this.houseType.forEach(item => {
					if (item.value == val) {
						data = item.label;
					}
				})
				
				this.houseTitle = val == '' ? '户型' : data;
				// this.houseTitle=data
				this.pageNo = 1;
				this.list = [];
				this.getList()
			},
			
			selPurpose(val) {
				let data = '';
				this.purposeType.forEach(item => {
					if (item.value == val) {
						data = item.label;
					}
				})
				this.purposeTitle = val == '' ? '用途' : data;
				this.pageNo = 1;
				this.list = [];
				this.getList()
			},
			toCheck(e, i) {
			// console.log(e)
			this.publicType=e
				// this.$refs.uDropdowns.close();
				// console.log(this.$refs.uDropdowns, '11')
				if (i && i == '11') {
					this.$refs.uDropdowns.close();
				}
				this.isCheck = e;
				this.roomType = e;
				this.areaVal = '';
				this.priceVal = '';
				this.houseVal = '';
				this.purposeVal = '';
				this.areaTitle = '区域';
				this.priceTitle = '价格';
				this.houseTitle = '户型';
				this.purposeTitle = '用途';
				// e 1、出租  2、出售
				let type = '';
				if (e == 1) {
					type = '房屋租房价格';
				} else {
					type = '房屋售房价格';
				}
				this.getType(type);
				this.pageNo = 1;
				this.list = [];
				this.getList()
			},
			getDetail(roomRsId, roomType) {
				
				console.log(roomRsId)
				uni.setStorageSync('roomRsId', roomRsId)
				uni.navigateTo({
					url: './detail?id='+roomRsId
				})
			},
			navigate(params) {
				uni.navigateTo({
					...params
				})
			},
			getList() {
				// price:this.priceVal,
				let that = this;
				this.$api.to_http('/house/page', {
					pageNo:that.pageNo,
					pageSize:that.pageSize,
					publicType:that.publicType,
					//roomType: that.roomType,
					//provinceName: that.provinceName,
					//aheName: that.aheName,
					area: that.areaVal,
					price: that.priceVal,
					roomType: that.houseTitle=='户型'?'':that.houseTitle,
					roomUse: that.purposeTitle=='用途'?'':that.purposeTitle,
					// roomType: that.houseVal,
					// roomUse: that.purposeVal,
					name:that.searchName
				}, 'POST', '', false,'application/json').then((res) => {
					res = res.data
					if (res.code != 200) {
						return that.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					if(that.noPage){
						return
					}
					if (res.data.records.length > 0) {
					
						that.list = that.list.concat(res.data.records);
					} else {
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						
						if(res.data.records.length<that.pageSize){
							that.noPage = true;
						}
					}
					// that.list=res.data.records
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.uni-page-head{
		padding: 14upx 30upx 14upx 6upx !important;
	}
	/deep/.uni-page-head-ft{
		margin-right: 30upx !important;
	}
	.Tag{
		display: flex;
		.itemtag{
			background: #F2F2F2;
			border-radius: 2px;
			// margin: 0 28upx;
			margin-right: 28upx;
			color: #999;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 10upx;
			font-size: 24upx;
		}
	}
	.tagactive{
		background-color: #1989FA !important;
		color: #fff !important;
	}
	/deep/.u-drawer-right{
		background:transparent;
	}
	
	/deep/.u-drawer__scroll-view{
		width: 228upx;
		
	}

	.select_type {
		width: 228upx;
		height: 424upx;
		background: #EEEEEE;
		border-radius: 0px 0px 0px 5px;
		position: absolute;
		top: 112upx;
		right: 0;
		z-index: 100;
		overflow: hidden;

		.public {
			margin: 24upx auto;
			width: 180upx;
			height: 76upx;
			background: #ED6A0C;
			border-radius: 2px;
			padding: 17upx 22upx;
			display: flex;
			justify-content: space-between;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: bold;
			font-size: 28upx;
			color: #fff;

			.icon {
				width: 22.71px;
				height: 21.08px;
			}

		}

		.sellers {
			background: #2DA641;
		}

		.soliciting {
			background-color: #FAD20C;
		}

		.rent {
			background: #1989FA;
		}
	}

	.search {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		padding: 24upx 32upx;
		background: #fff;

		.search-left {
			width: 80%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background-color: #F9F9F9;
			border-radius: 40upx 0px 0upx 40upx;
			padding: 0 20upx;

			image {
				width: 28upx;
				height: 28upx;
				margin-right: 10upx;
			}

			input {
				font-family: PingFang SC;
				font-style: normal;
				font-weight: normal;
				font-size: 24upx;
				color: #C4C4C4;
				flex: 1;
			}
		}

		.search-right {
			width: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 24upx 16upx;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 24upx;
			background: #1989FA;
			border-radius: 0px 40upx 40upx 0px;
			color: #FFFFFF;
		}
	}

	.container {
		width: 100%;
		// height: 100vh;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #F9F9F9;
		flex: 1;

		.tabs_view {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			height: 88rpx;
			border-bottom-width: 1upx;
			border-bottom-style: solid;
			border-bottom-color: #F2F2F2;
			background-color: #FFFFFF;

			.tabs_item {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 88rpx;

				.tabs_item_relative {
					position: relative;
				}

				.tabs_text {
					font-size: 32rpx;
					color: #666666;

					&.active {
						color: #1989FA;
					}
				}

				.tabs_border {
					position: absolute;
					bottom: -10rpx;
					width: 64rpx;
					height: 4rpx;
					border-radius: 2rpx;
					background-color: #1989FA;
				}
			}
		}

		.screen_view {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;

			background: #FFFFFF;
			height: 64rpx;

			.screen-item {
				display: flex;
				flex-direction: row;
				align-items: center;

				.screen-text {
					font-size: 28rpx;
					color: #666666;
				}

				.down-icon {
					width: 24rpx;
					height: 16rpx;
					margin-left: 12rpx;
					margin-top: 4rpx;
				}
			}
		}

		.scroll_view {
			flex: 1;
			height: calc(100% - 152rpx);
			;

			.house_cell {
				display: flex;
				flex-direction: row;
				padding: 28rpx 32rpx;
				border-bottom-color: #F2F2F2;
				border-bottom-width: 2rpx;
				border-bottom-style: solid;
				background-color: #FFFFFF;

				.house_cover {
					width: 188rpx;
					height: 188rpx;
					border-radius: 16rpx;
				}

				.house_right {
					flex: 1;
					margin-left: 16rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.house_title {
						font-size: 28rpx;
						color: #222222;
						lines: 1;
						text-overflow: ellipsis;
					}

					.house_desc {
						font-size: 24rpx;
						color: #666666;
						lines: 1;
						text-overflow: ellipsis;
					}

					.label_row {
						display: flex;
						flex-direction: row;
						align-items: center;
						flex-wrap: wrap;
						margin-left: -28rpx;

						.label_view {
							padding: 0 13rpx;
							// height: 32rpx;
							background-color: #F2F2F2;
							border-radius: 4rpx;
							margin-left: 28rpx;
							line-height: 32rpx;

							&.active {
								background-color: #1989FA;
							}

							.label_text {
								font-size: 24rpx;
								color: #999999;

								&.active {
									color: #FFFFFF;
								}
							}
						}
					}

					.house_bottom {
						display: flex;
						flex-direction: row;
						align-items: flex-end;
						justify-content: space-between;

						.house_price {
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

		.location {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50rpx;
			position: fixed;
			right: 32rpx;
			bottom: 200rpx;
		}
	}
</style>
