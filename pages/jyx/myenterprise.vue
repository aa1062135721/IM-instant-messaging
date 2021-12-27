<template>
	<!-- 我的企业 -->
	<view class="page">
		<view class=""  v-if="list.length>0" >
			<view class="list" v-for="(item,index) in list" :key='item'>
				<view class="commany">
					<image src="../../static/hexingImg/cpfb.png" mode=""></image>
					<view class="com-content">
						<view class="comany-name">{{item.mainPart.entname}}</view>
						<view class="tag">
							<view class="subsist">存续</view>
							<view class="orders">曾用命</view>
							<view class="small">小微企业</view>
							<view class="browse">浏览:2万＋</view>
						</view>
					</view>
				</view>
				<view class="cont">
					<text>简介:</text>{{item.mainPart.opscope}}
				</view>

				<view class="action_btn">
					<view class="facus">
						<text>关注人数：</text>
						<text>{{item.focusCount}}</text>
					</view>

					<view class="details" @click="godetail(item.mainPart.pripid)">查看详情</view>
				</view>

			</view>
		</view>
		<view class="no-data" v-else>
			- 暂无数据 -
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				pageNo:1,
				pageSize:10

			}
		},
		onLoad() {
			 this.companyinfo()
		},
		methods: {
			//轮播列表
			companyinfo() {
				this.$request('/mainPart/claimPage',{
					pageNo:this.pageNo,
					pageSize:this.pageSize
				}).then(res => {
					console.log(res)
					console.log(res.records)
					this.list=res.records
					
				});
			},
			godetail(id){
				uni.navigateTo({
					url:'company-info?id='+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		// padding: 0 16rpx;
		.list{
			background-color: #fff;
			margin-bottom: 30upx;
			.commany {
				display: flex;
				justify-content: flex-start;
				align-content: center;
				padding: 28upx 32upx 34upx 32upx;

				image {
					width: 120upx;
					height: 120upx;
					margin-right: 20upx;
				}

				.com-content {
					display: flex;
					flex-direction: column;
					align-content: center;

					.comany-name {
						font-family: PingFang SC;
						font-style: normal;
						font-weight: 600;
						font-size: 32upx;
						color: #222222;
						margin-bottom: 34upx;
					}

					.tag {
						display: flex;
						justify-content: flex-start;
						align-items: center;

						view {
							margin-right: 16upx;
						}

						.subsist {
							font-family: PingFang SC;
							font-style: normal;
							font-weight: 300;
							font-size: 24upx;
							background: #D5FFD5;
							border-radius: 4upx;
							color: #0BC73F;
							padding: 4upx 12upx;
						}

						.orders {
							font-family: PingFang SC;
							font-style: normal;
							font-weight: 300;
							font-size: 24upx;
							color: #F4980D;
							background: #FFF6DE;
							border-radius: 4upx;
							padding: 4upx 12upx;
						}

						.small {
							font-family: PingFang SC;
							font-style: normal;
							font-weight: 300;
							font-size: 24upx;
							color: #D16DF4;
							background: #F7F0FF;
							border-radius: 4upx;
							padding: 4upx 12upx;
						}

						.browse {
							font-family: PingFang SC;
							font-style: normal;
							font-weight: 300;
							font-size: 24upx;
							color: #828282;
						}
					}

				}
			}

			.cont {

				font-family: PingFang SC;
				font-style: normal;
				font-weight: 500;
				font-size: 28upx;
				color: #333;
				padding: 0upx 32upx;

				text {

					color: #BDBDBD;
				}
			}
			.action_btn {
				padding: 20upx 32upx;
				font-size: 24upx;
				display: flex;
				justify-content: space-between;
				margin-top: 40upx;

				.facus {
					width: 200upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-family: PingFang SC;
					font-style: normal;
					font-weight: bold;
					border: 1px solid #FF5555;
					color: #ff5555;
					box-sizing: border-box;
					border-radius: 2px;
				}

				.details {
					width: 200upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-family: PingFang SC;
					font-style: normal;
					font-weight: bold;
					background: #1989FA;
					// border: 1px solid #FF5555;
					color: #fff;
					box-sizing: border-box;
					border-radius: 2px;
				}
			}
		}
	}
	.no-data{
		text-align: center;
		font-size: 28upx;
		color: #666666;
		padding: 20upx;
	}
</style>
