<template>
	<view class="container">
		<view class="goods-cover" v-for="(item, index) in info.mainPictures" :key="index">
			<image :src="imgUrl+item" mode=""></image>
		</view>

		<view class="goods-info">
			<view class="goods-left">
				<view class="goods-name">{{info.goodsName}}</view>
				<view class="soucang" @tap="favorFlag()">
					<image :src="info.favorFlag==0?'../../../static/jyx/xin.png':'../../../static/jyx/xin-active.png'"
						mode="">
					</image>
					<text v-if="info.favorFlag==0">收藏</text>
					<text v-else>取消</text>
				</view>
			</view>

			<view class="goods-price-num">
				<view class="goods-price" v-if="info.priceDiscount">
					<text class="goods-price-left">¥{{info.priceDiscount}}</text>
					<text class="goods-price-right">¥{{info.price}}</text>
				</view>
				<view class="goods-price" v-else>
					<text class="goods-price-left">¥{{info.price}}</text>
				</view>
				<text class="goods-num">库存：{{info.putStockCount}}</text>
			</view>
		</view>

		<view class="business-info">
			<view class="business-row">
				<text class="business-title">分类：{{info.goodsClassCode}}</text>
			</view>

			<!-- <view class="business-row">
				<text class="business-title">瑟提番茄</text>
			</view> -->

			<view class="business-row">
				<text class="business-desc">电话：{{tPhone(info.phone)}}</text>

				<view class="tel-btn">
					<text class="tel-text" @click="getTel(info.phone)">拨号</text>
				</view>
			</view>

			<view class="business-row">
				<text class="business-desc">地址：{{info.address}}</text>

				<!-- <text class="business-desc">距离：500m</text> -->
			</view>
		</view>

		<view class="tabs-view">
			<view class="tabs-item" @click="toCheck(1)">
				<text class="tabs-text" :class="{active:isCheck==1}">详情</text>
				<view class="tabs-border" v-if="isCheck==1"></view>
			</view>

			<view class="tabs-item" @click="toCheck(2)">
				<text class="tabs-text" :class="{active:isCheck==2}">评价</text>
				<view class="tabs-border" v-if="isCheck==2"></view>
			</view>
		</view>
		<view class="goos-detail" v-if="isCheck==1">
			<view class="goods-desc">{{info.goodsDesc}}</view>
			<view class="goods-desc-img" v-for="(img, index1) in info.descPictures" :key="index1">
				<image :src="imgUrl+img" mode="aspectFill"></image>
			</view>
		</view>
		<view class="" v-else>
			<view class="evaluate-item" v-for="(item, index) in answerList" :key="index">
				<view class="evaluate-user">
					<image class="avatar" src="@/static/images/vvo-yao/goods-cover.png"></image>
					<view class="user-info">
						<view class="username-time">
							<text class="username">{{item.disNo}}</text>
							<text class="time">{{item.createTime}}</text>
						</view>

						<view class="star-row">
							<view v-for="(item1,index1) in 5" :key='index1' :class="{actives:item1.star===index1}"
								class="star-icon">
							</view>
						</view>
					</view>
				</view>

				<text class="evaluate-content">{{item.contet}}</text>
			</view>
			<view class="" style="height: 120upx;"></view>
			<view class="search">
				<view class="search-left">
					<input type="text" value="" v-model="comment" placeholder="输入内容评论" />
					<view class="search-right" @click="commentCont()">评论</view>
				</view>
			</view>

		</view>
		<u-toast ref="uToast" />

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				goodsId: '',
				info: {},
				isCheck: 1,
				isxin: 1,
				pageNo: 1,
				pageSize: 30,
				noPage: false,
				answerList: [], //评论列表
				comment: '', //评论内容
			}
		},
		onLoad(e) {
			this.goodsId = e.goodsId
			this.getData()
		},
		onReachBottom() {
			if (this.isCheck == 2) {
				if(!this.noPage){
					this.pageNo++
				}
				this.getMoreOrder();
			}

		},
		methods: {
			//切换Tab
			toCheck(i) {
				this.isCheck = i
				if (this.isCheck == 2) {
					this.getMoreOrder()
				}
			},
			//调取手机拨打电话
			getTel(i) {
				uni.makePhoneCall({
					phoneNumber: i
				});
			},
			//商品详情
			getData() {
				let goodsId = this.goodsId
				this.$api.to_http('/goods/get-one/' + goodsId, {}, 'GET', '', false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					
					this.info = res.data
					console.log(this.info,9898)
				})
			},
			// getAnswer(){
			// 	this.$api.to_http('/goods/answer/list', {
			// 		goodsId:this.goodsId,
			// 		pageNo:this.pageNo,
			// 		pageSize:this.pageSize
			// 	}, 'GET','',false).then((res) => {
			// 		res = res.data
			// 		if (res.code != 200) {
			// 			return this.$refs.uToast.show({
			// 				title: res.message,
			// 				type: 'error',
			// 			})
			// 		}
			// 		this.answerList= res.data.records
			// 	})
			// },
			//评论列表
			getMoreOrder() {
				// if (this.noPage) {
				// 	uni.showToast({
				// 		title: '没有更多了',
				// 		icon: 'none',
				// 		duration: 2000
				// 	});
				// 	return
				// }
				// uni.showLoading({
				// 	title: '加载更多...',
				// 	mask: true
				// });
				
				this.$api.to_http('/goods/answer/list', {
					goodsId: this.goodsId,
					pageNo: this.pageNo,
					pageSize: this.pageSize
				}, 'POST', '', false).then(res => {
					if (res.data.data.records.length == 0) {
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						this.noPage = true
					} else {
					     this.answerList=res.data.data.records
						
					}
				})
			},
			//评论
			commentCont() {
				this.$api.to_http('/goods/answer/submit', {
					goodsId: this.goodsId,
					contet: this.comment,
					star: 5
				}, 'POST', '', false).then((res) => {
					if (res.data.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}else{
						this.$refs.uToast.show({
							title: "评论成功",
							type: 'success',
						})
						this.comment = ''
						this.noPage = false
						this.pageNo = 0
						// this.answerList = []
						this.getMoreOrder()
					}
					
					
				})
			},
			//收藏
			favorFlag() {
				this.$api.to_http('/goods/favor', {
					goodsId: this.goodsId
				}, 'POST', '', false).then((res) => {
					console.log(res)
					if (res.data.code ==200) {
						this.$refs.uToast.show({
							title: res.data.message,
							type: 'success',
						})
					} else {
						return this.$refs.uToast.show({
							title: res.data.message,
							type: 'error',
						})
					}
					this.getData()
				})
			},
			//将电话中间4位变成*
			tPhone(tel) {
				tel = tel+''
				return tel.substr(0,3)+"****"+tel.substr(7);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #F9F9F9;

		.goods-cover {
			width: 750rpx;
			height: 554rpx;

			image {
				width: 750rpx;
				height: 554rpx;
			}
		}

		.goods-info {
			padding: 14upx 32rpx 20rpx 32rpx;
			background-color: #FFFFFF;

			.goods-left {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.goods-name {
					font-size: 36rpx;
					color: #222222;
				}

				.soucang {
					display: flex;
					justify-content: center;
					align-items: center;
					background: #FFE8D7;
					padding: 16upx;
					border-radius: 35upx;
					font-family: PingFang SC;
					font-style: normal;
					font-weight: bold;
					font-size: 28upx;
					color: #333333;

					image {
						width: 32upx;
						height: 28upx;
						margin-right: 20upx;
					}
				}
			}

			.goods-price-num {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				margin-top: 16rpx;

				.goods-price {
					display: flex;
					flex-direction: row;
					align-items: flex-end;

					.goods-price-left {
						font-weight: 600;
						font-size: 52rpx;
						line-height: 52rpx;
						color: #ED6A0C;
					}

					.goods-price-right {
						font-size: 28rpx;
						text-decoration-line: line-through;
						color: #828282;
						margin-bottom: 5rpx;
						margin-left: 8rpx;
					}
				}

				.goods-num {
					font-size: 28rpx;
					color: #3F434A;
				}
			}
		}

		.business-info {
			margin-top: 20rpx;
			background-color: #FFFFFF;

			.business-row {
				padding: 20rpx 32rpx;
				border-bottom: 2rpx solid #EEEEEE;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.business-title {
					font-weight: 600;
					font-size: 28rpx;
					line-height: 42rpx;
					color: #3F434A;
				}

				.business-desc {
					font-weight: 500;
					font-size: 28rpx;
					line-height: 42rpx;
					color: #3F434A;
				}

				.tel-btn {
					width: 88rpx;
					height: 40rpx;
					background: #27AE60;
					border-radius: 8rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.tel-text {
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
		}

		.tabs-view {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			height: 92rpx;
			margin-top: 20rpx;
			background-color: #FFFFFF;

			.tabs-item {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 92rpx;
				position: relative;
				border-bottom: 2rpx solid #EEEEEE;

				.tabs-text {
					font-weight: 600;
					font-size: 32rpx;
					color: #3F434A;

					&.active {
						color: #1989FA;
					}
				}

				.tabs-border {
					position: absolute;
					bottom: 0rpx;
					width: 375rpx;
					height: 4rpx;
					border-radius: 2rpx;
					background-color: #1989FA;
				}
			}
		}

		.goos-detail {
			padding: 30rpx;
			background-color: #FFFFFF;

			.goods-desc {
				font-size: 28rpx;
				font-family: PingFang SC;
				color: #3F434A;
				font-weight: 400;
			}

			.goods-desc-img {
				margin-top: 10rpx;

				image {
					width: 684rpx;
					height: 422rpx;
					margin-bottom: 20rpx;
				}

			}
		}

		.evaluate-item {
			padding: 32rpx 56rpx;
			border-bottom: 2rpx solid #F2F2F2;
			display: flex;
			flex-direction: column;
			background-color: #fff;

			.evaluate-user {
				display: flex;
				flex-direction: row;
				align-items: center;

				.avatar {
					width: 96rpx;
					height: 96rpx;
					border-radius: 48rpx;
				}

				.user-info {
					flex: 1;
					margin-left: 16rpx;
				}

				.username-time {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;

					.username {
						font-size: 28rpx;
						color: #000000;
					}

					.time {
						font-size: 28rpx;
						color: #999999;
					}
				}

				.star-row {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-left: -8rpx;
					overflow: hidden;
					margin-top: 10rpx;

					.star-icon {
						width: 24rpx;
						height: 24rpx;
						margin-left: 8rpx;
						background: url(../../../static/images/vvo-yao/star-default.png) no-repeat center/100% 100%;
					}

					.actives {
						background-image: url(../../../static/images/vvo-yao/star-active.png);
					}
				}
			}

			.evaluate-content {
				margin-top: 20rpx;
				font-size: 28rpx;
				color: #000000;
			}
		}

		//搜索
		.search {
			width: 100%;
			box-sizing: border-box;
			display: flex;
			padding: 10upx 32upx;
			background: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;

			.search-left {
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-color: #F9F9F9;
				border-radius: 35upx;
				padding: 10upx 20upx;

				input {
					font-family: PingFang SC;
					font-style: normal;
					font-weight: normal;
					font-size: 28upx;
					color: #999;
					flex: 1;
				}

				.search-right {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 14upx 36upx;
					font-family: PingFang SC;
					font-style: normal;
					font-weight: bold;
					font-size: 28upx;
					color: #FFFFFF;
					background: #1989FA;
					border-radius: 35upx;
				}
			}

		}
	}
</style>
