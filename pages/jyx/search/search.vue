<template>
	<view class="container">
		<view class="search">
			<view class="search-left">
				<image src="../../../static/hexingImg/ss.png" mode="" ></image>
				<input type="text" value="" placeholder="关键词搜索房源/商品/动态" v-model="keyword"  confirm-type="search"  @confirm="doSearch(false)"/>
			</view>
			<view class="search-right" @click="doSearch()">搜索</view>
		</view>
		<view class="tabs-view">
			<view class="tabs-item">
				<view class="tabs-item-relative" @click="toCheck(1)">
					<text class="tabs-text" :class="{active:isCheck==1}">房源</text>
					<view class="tabs-border" v-show="isCheck==1"></view>
				</view>
			</view>
			<view class="tabs-item">
				<view class="tabs-item-relative" @click="toCheck(2)">
					<text class="tabs-text" :class="{active:isCheck==2}">动态</text>
					<view class="tabs-border" v-show="isCheck==2"></view>
				</view>
			</view>
			<view class="tabs-item">
				<view class="tabs-item-relative" @click="toCheck(3)">
					<text class="tabs-text" :class="{active:isCheck==3}">产品</text>
					<view class="tabs-border" v-show="isCheck==3"></view>
				</view>
			</view>

			
		</view>



		<scroll-view class="scroll-view" scroll-y>
			<!-- 房屋列表 -->
			<view class="house-cell" v-if="isCheck==1" v-for="(item, index) in roomslist" :key="index"
				@click="getDetail(item.roomRs.roomId)">
				<image class="house-cover" v-if="item.pictures.length>0" :src="imgUrl+item.pictures[0]"></image>
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
			<!-- 动态列表 -->
			<view class="main" v-if="isCheck==2">
				<view class="list" v-for="(it,i) in dataList" :key="i">
					<view class="top">
						<view class="left">
							<image :src="it.moment.head?it.head:'../../../static/luyan/images/icon_header.png'" mode="aspectFill"></image>
							<view class="">
								<view class="title">{{it.moment.username||'-'}}</view>
								<view class="text">{{it.moment.createTime}}</view>
							</view>
						</view>
						<!-- <view class="right cncerned" v-if="it.isfollow" @tap="getFollow(i)">已关注</view>
							<view class="right" v-else @tap="getFollow(i)">关注</view> -->
						<view class="light">
							<!-- <image src="../../../static/luyan/images/icon_find_light.png" mode="aspectFit"></image> -->
						</view>
					</view>
					<view class="text">{{it.moment.content}}</view>
					<view class="img" v-if="it.pictures && it.pictures.length > 0">
						<!-- <image v-for="item in it.pictures" :src="item" mode="aspectFill"></image> -->
						<u-image class="pic" v-for="item in it.pictures" :src="imgUrl+item" mode="aspectFill"
							:lazy-load="true">
							<u-loading slot="loading"></u-loading>
							<view slot="error" style="font-size: 24upx;">加载失败</view>
						</u-image>
					</view>
					<view class="video" v-if="it.video && it.video !=''">
						<video :src="it.video" controls></video>
					</view>
					<!-- <view class="btnList">
						<view class="praise" @tap="getPraise(it,i)">
							<image v-if="it.likesFlag == 1" src="@/static/luyan/images/icon_vector_a.png"
								mode="aspectFit"></image>
							<image v-else src="../../../static/luyan/images/icon_find_none.png" mode="aspectFit">
							</image>
							<view class="">{{it.likesFlag == 1?'已点赞':'点赞'}}</view>
						</view>
						<view class="discuss" @tap="getDiscuss(it.momentId,it.userId)">
							<image src="../../../static/luyan/images/icon_find_discuss.png" mode="aspectFit"></image>
							<view class="">评论</view>
						</view>
						<view class="collect" @tap="getCollect(it,i)">
							<image v-if="it.collectFlag == 1" src="../../../static/luyan/images/icon_find_collect.png"
								mode="aspectFit"></image>
							<image v-else src="../../../static/luyan/images/icon_find_collect_none.png"
								mode="aspectFit"></image>
							<view class="">{{it.collectFlag == 1?'已收藏':'收藏'}}</view>
						</view>
			
					</view> -->
				</view>
			</view>
			<!-- 商品列表 -->
			<view class="list-cell" v-if="isCheck==3" v-for="(item, index) in goodslist" :key="index"
				@click="navigate(item.goods.goodsId)">
				<image class="goods-cover" :src="imgUrl+item.pictures[0]"></image>
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

		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import YAO_API from '../../../common/vmeitime-http/index.js'
	export default {
		data() {
			return {
				imgBaseUrl: YAO_API.http_config.imgBaseUrl,
				roomType: 1,
				roomslist: [], //房屋列表
				goodslist: [], //商品列表
				dataList: [], //动态列表
				isCheck: 1,
				status: uni.getStorageSync('status'),
				provinceName: uni.getStorageSync('provinceName'),
				pageNo: 1,
				pageSize: 10,
				keyword:'',//关键词
				type:1
			}
		},
		onLoad() {
			// if (this.type == 1) {
			// 	this.getroomRsList()
			// } 
		},
		methods: {
			toCheck(e) {
				this.isCheck = e
				this.roomType = e
				if (this.isCheck == 1) {
					this.type=this.isCheck
				} else if (this.isCheck == 2) {
					this.type=this.isCheck
				} else {
					this.type=this.isCheck
				}
				this.getroomRsList();
			},
			getDetail(roomRsId) {//房源
				// uni.setStorageSync('roomRsId')
				console.log(roomRsId)
				uni.navigateTo({
					url: '/pages/vvo-yao/house-manage/detail?id='+roomRsId
				})
			},
			navigate(id) {//商品
				uni.navigateTo({
					url: '/pages/vvo-yao/product-release/goods-detail?goodsId='+id
				})
			},
			getroomRsList() { //房屋列表
				this.type=this.isCheck
				if(!this.keyword){
					uni.showToast({
						title: '关键词不能为空',
						icon:"none",
						duration: 2000
					});
					return
				}
				this.$api.to_http('/mainpage/search', {
					keywords:this.keyword,
					type:this.type
				}, 'POST', '', false).then((res) => {
					console.log(res)
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}else{
						this.type=this.isCheck
						if(this.type==1){
							this.roomslist =res.data
						}else if(this.type==2){
							this.dataList=res.data
						}else{
							this.goodslist =res.data
						}
					}
					
				})
			},
			
			//执行搜索//搜索列表
			doSearch(keyword) {
				let that=this
				that.keyword = keyword ? keyword : that.keyword;
				uni.showToast({
					icon: 'none',
					title: '加载中...'
				})
				console.log(that.keyword)
				that.pageNo=1
				that.roomslist=[];
				that.dataList=[];
				that.goodslist =[];
				that.getroomRsList();
			
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F9F9F9;
	}
	.container {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		
		flex: 1;
		//搜索
		.search{
			width: 100%;
			box-sizing: border-box;
			display: flex;
			padding: 24upx 32upx;
			background: #fff;
			.search-left{
				width: 80%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				background-color: #F9F9F9;
				border-radius:40upx 0px  0upx 40upx;
				padding: 0 20upx;
				image{
					width: 28upx;
					height: 28upx;
					margin-right: 10upx;
				}
				input{
					font-family: PingFang SC;
					font-style: normal;
					font-weight: normal;
					font-size: 24upx;
					color: #C4C4C4;
					flex: 1;
				}
			}
			.search-right{
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
		.tabs-view {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			height: 88rpx;
			background: #fff;

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
					width: 64rpx;
					height: 4rpx;
					border-radius: 2rpx;
					background-color: #1989FA;
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

			//动态列表
			.main {
				width: 100%;
				padding: 24upx;
				box-sizing: border-box;

				.list {
					width: 100%;
					padding: 32upx;
					box-sizing: border-box;
					background: #FFFFFF;
					border-radius: 4upx;
					margin-bottom: 16upx;

					.top {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-family: 'PingFang SC';

						.left {
							display: flex;
							align-items: center;

							image {
								width: 96upx;
								height: 96upx;
								margin-right: 16upx;
								border-radius: 50%;
							}

							.title {
								font-size: 28upx;
								line-height: 36upx;
								color: #000000;
							}

							.text {
								font-size: 24upx;
								color: #BDBDBD;
							}
						}

						.right {
							padding: 6upx 10upx;
							background: #EDF6FF;
							border-radius: 3upx;
							box-sizing: border-box;
							font-size: 28upx;
							color: #1989FA;

						}

						.cncerned {
							background: #FFFFFF;
							color: #222222;
							border: 2upx solid rgb(242, 242, 242);
						}
					}

					.text {
						margin-top: 40upx;
						font-family: 'PingFang SC';
						font-size: 28upx;
						color: #000000;
					}

					.img {
						width: 100%;
						margin-top: 20upx;
						display: flex;
						flex-wrap: wrap;

						.pic {
							width: 208upx !important;
							height: 200upx !important;
							margin-right: 4upx;
							margin-bottom: 4upx;
							border-radius: 4upx;

							img {
								width: 208upx;
								height: 200upx;
								border-radius: 4upx;

							}
						}
					}
					.light {
						image {
							width: 28upx;
							height: 28upx;
						}
					}
					.video {
						width: 100%;
						height: 358upx;
						margin-top: 20upx;

						video {
							width: 100%;
							height: 358upx;
						}
					}

					.btnList {
						width: 100%;
						margin-top: 34upx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-family: 'PingFang SC';
						font-size: 24upx;
						color: #000000;

						view {
							display: flex;
							align-items: center;
						}

						.praise {
							image {
								width: 32upx;
								height: 28upx;
								margin-right: 14upx;
							}
						}

						.discuss {
							image {
								width: 28upx;
								height: 28upx;
								margin-right: 14upx;
							}
						}

						.collect {
							image {
								width: 32upx;
								height: 30upx;
								margin-right: 14upx;
							}
						}

						.praise {
							image {
								width: 32upx;
								height: 28upx;
								margin-right: 14upx;
							}
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
