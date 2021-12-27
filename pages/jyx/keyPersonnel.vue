<template>
	<view class="">
		<view class="box">
			<view class="deputy">
				<view class="deputy-content">
					<image src="../../static/hexingImg/cpfb.png" mode=""></image>
					<view class="deputy-right">
						<view class="deputy-top">
							<view class="deputy-title">{{details.entname|| '-'}}</view>
							<view class="browse">任职1家企业</view>
						</view>
						<view class="tag">
							<view class="subsist">大股东</view>
							<view class="orders">实际控制人</view>
							<view class="small">最终受益人</view>
						</view>
					</view>
				</view>
			</view>
			<view class="pageCard">
				<view class="page-item">
					<text class="page-title">职位</text>
					<text>执行董事兼经理</text>
				</view>
				<view class="page-item">
					<text class="page-title"></text>
					<text></text>
				</view>
				<view class="page-item">
					<text class="page-title">持股比例</text>
					<text class="yellow">{{'-'}}%</text>
				</view>
				<view class="page-item">
					<text class="page-title">最终受益</text>
					<text>{{'-'}}%</text>
				</view>
			</view>
		</view>
		

	</view>
</template>

<script>
export default {
		data() {
			return {
				name:'',
				details:{},
				
			}
		},
		onLoad() {
			this.details=uni.getStorageSync('details')
			// console.log(this.name)
			// uni.setNavigationBarTitle({
			// 	title:this.name
			// })
			// this.companyinfo()
		},
		methods: {
			// companyinfo(){
			// 	this.$api.to_http('/sczt/get/'+this.name, {}, 'POST', '', false).then((res) => {
			// 		console.log(res)
			// 		console.log(res.data)
			// 		if(res.data.code==200){
			// 			this.details=res.data.data
			// 		}
			// 	})	
				
			// }
		}
	}
</script>

<style lang="scss">
	page {
		padding: 28upx 0upx;
		background-color: #FFFFFF;
	}

	.box {
		border-top: 1upx solid #F2F2F2;

		.deputy {
			display: flex;
			flex-direction: column;
			margin-bottom: 20upx;
			padding: 28upx 30upx;


			.deputy-content {
				display: flex;
				justify-content: flex-start;
				font-family: PingFang SC;
				font-style: normal;
				font-weight: normal;
				font-size: 32upx;
				color: #2F80ED;

				image {
					width: 70upx;
					height: 70upx;
					border-radius: 8upx;
					margin-right: 20upx;
				}

				.deputy-right {
					flex: 1;

					.deputy-top {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 30upx;

						.deputy-title {
							font-family: PingFang SC;
							font-style: normal;
							font-weight: normal;
							font-size: 32upx;
							color: #2F80ED;

						}

						.browse {
							font-family: PingFang SC;
							font-style: normal;
							font-weight: normal;
							font-size: 24upx;
							color: #F2994A;
						}
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
							color: #FFA463;
							padding: 4upx 12upx;
							background: #FFF4EC;
							border-radius: 4upx;
						}

						.orders {
							font-family: PingFang SC;
							font-style: normal;
							font-weight: 300;
							font-size: 24upx;
							color: #FFAD31;
							background: #FFF6DE;
							border-radius: 4upx;
							padding: 4upx 12upx;
						}

						.small {
							font-family: PingFang SC;
							font-style: normal;
							font-weight: 300;
							font-size: 24upx;
							color: #1989FA;
							background: #ECF5FE;
							border-radius: 4upx;
							padding: 4upx 12upx;
						}

					}
				}

			}
		}

		.pageCard {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 0 30upx;

			.page-item {
				width: 50%;
				display: flex;
				flex-direction: column;
				font-family: PingFang SC;
				font-style: normal;
				font-weight: normal;
				font-size: 28upx;
				color: #333333;
				margin-bottom: 30upx;

				.page-title {
					color: #BDBDBD;
					margin-bottom: 8upx;
				}

				.yellow {
					color: #F2994A;
				}

			}
		}
	}
</style>
