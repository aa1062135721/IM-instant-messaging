<template>
	<view class="container">
		<view class="tabs-view">
			<view class="tabs-item" @click="toChange(3)">
				<view class="tabs-item-relative">
					<text class="tabs-text" :class="{active:isCheck==3}">出售中</text>
					<view class="tabs-border" v-if="isCheck==3"></view>
				</view>
			</view>

			<view class="tabs-item" @click="toChange(2)">
				<view class="tabs-item-relative">
					<text class="tabs-text" :class="{active:isCheck==2}">待上架</text>
					<view class="tabs-border" v-if="isCheck==2"></view>
				</view>
			</view>

			<view class="tabs-item" @click="toChange(1)">
				<view class="tabs-item-relative">
					<text class="tabs-text" :class="{active:isCheck==1}">草稿</text>
					<view class="tabs-border" v-if="isCheck==1"></view>
				</view>
			</view>
		</view>

		<scroll-view class="scroll-view" scroll-y>
			<view class="list-cell" v-for="(item, index) in list" :key="index" @click="goDetail(item.goodsId)">
				<image class="goods-cover" :src="imgUrl+item.mainPicture"></image>
				<view class="cell-right">
					<text class="goods-name">{{item.goodsName}}</text>

					<text class="goods-price">¥{{item.price}}</text>

					<view class="cell-right-row">
						<text class="goods-stock">剩余库存:{{item.stockCount}}件</text>
						<text class="goods-sold">已售{{item.soldCount}}件</text>
						<text class="shelf" v-if="isCheck==3" @click.stop="soldOut(2,item.goodsId)">下架</text>
						<text class="shelf" v-else @click.stop="addGoods(3,item.goodsId)">上架</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	// import net_api from '../../../common/vmeitime-http/index.js'
	export default {
		data() {
			return {
				isCheck: 3,
				pageNo: 1,
				pageSize: 10,
				list: [],
				noPage: false,
			}
		},
		onLoad() {
			this.getMoreOrder()
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
			this.getMoreOrder();
		},
		methods: {
			//跳转商品详情
			goDetail(goodsId) {
				uni.navigateTo({
					url: './goods-detail?goodsId=' + goodsId
				})
			},
			toChange(e) {
				this.isCheck = e
				console.log(e)
				console.log(this.isCheck)
				this.pageNo = 1;
				this.list = [];
				this.getMoreOrder()
			},
			//商品管理列表
			getMoreOrder() {
				
				// if (this.noPage) {
				// 	uni.showToast({
				// 		title: '没有更多了',
				// 		icon: 'none',
				// 		duration: 2000
				// 	});
				// 	return
				// }
				uni.showLoading({
					title: '加载更多...',
					mask: true
				});
				// this.pageNo++
				this.$api.to_http('/goods/list', {
					pageNo: this.pageNo++,
					status: this.isCheck,
					pageSize: this.pageSize,
					onlyShowMine:'是'
				}, 'POST', '', false).then(res => {
					console.log(res)
					if (res.data.data.records.length == 0) {
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						this.noPage = true
					} else {
						this.list = this.list.concat(res.data.data.records);
					}
				})
			},
			//下架商品
			soldOut(i, goodsId) {
				let that = this
				uni.showModal({
					title: '提示',
				 content: '是否确定下架商品',
				 success: function(res) {
						if (res.confirm) {
							that.$api.to_http('/goods/status-change', {
								status: i,
								goodsId: goodsId
							}, 'POST', '', false).then((res) => {
				   	res = res.data
								if (res.code != 200) {
				   		return that.$refs.uToast.show({
										title: res.message,
										type: 'error',
									})
								}
								that.$refs.uToast.show({
									title: "下架成功",
									type: 'success',
								})
								that.getMoreOrder()
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			//上架商品
			addGoods(i, goodsId) {
				let that = this
				uni.showModal({
					title: '提示',
				 content: '是否确定上架商品',
				 success: function(res) {
						if (res.confirm) {
							that.$api.to_http('/goods/status-change', {
								status: i,
								goodsId: goodsId
							}, 'POST', '', false).then((res) => {
				   	res = res.data
								if (res.code != 200) {
									return that.$refs.uToast.show({
										title: res.message,
										type: 'error',
									})
								}
								that.$refs.uToast.show({
									title: "上架成功",
									type: 'success',
								})
								that.getMoreOrder()
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// getList() {
			// 	this.$api.to_http('/goods/list', {
			// 		pageNo: this.pageNo,
			// 		status: this.status,
			// 		pageSize: this.pageSize
			// 	}, 'POST', '', false).then((res) => {
			// 		res = res.data
			// 		if (res.code != 200) {
			// 			return this.$refs.uToast.show({
			// 				title: res.message,
			// 				type: 'error',
			// 			})
			// 		}
			// 		this.list = res.data.records
			// 	})
			// },
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #F9F9F9;
		flex: 1;

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

		.scroll-view {
			flex: 1;
			padding: 8rpx;

			.list-cell {
				margin: 0rpx 12rpx 8rpx 12rpx;
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
		}
	}
</style>
