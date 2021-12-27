<template>
	<view class="">
		<view class="box">

			<view class="deputy">
				<view class="business-info">为你找到<text>{{details.total}}</text>条股东信息</view>
				<view class="deputy-content">
					<image src="../../static/hexingImg/cpfb.png" mode="" v-if="details.logo==''"></image>
					<image src="../../static/hexingImg/cpfb.png" mode="" v-else></image>
					<view class="deputy-right">
						<view class="deputy-top">
							<view class="deputy-title">{{details.name || '-'}}</view>
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
					<text class="page-title">持股比例</text>
					<text class="yellow">{{details.percent|| '-'}}</text>
				</view>
				<view class="page-item">
					<text class="page-title">股东类型</text>
					<text >-</text>
					
				</view>
				<view class="page-item">
					<text class="page-title">认缴出资额</text>
					<text>{{details.amomon|| '-'}}</text>
				</view>
				<view class="page-item">
					<text class="page-title">认缴出资日期</text>
					<text>{{details.time|| '-'}}</text>
				</view>
				<view class="page-item">
					<text class="page-title">最终受益股份</text>
					<text>{{details.capital|| '-'}}</text>
				</view>
				<view class="page-item" v-for="(item,index) in detail.typeJoin" :key="index">
					<text class="page-title">任职职务</text>
					<text>{{item}}</text>
				</view>

			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				details: {},
				detail:{}

			}
		},
		onLoad() {
			this.details = uni.getStorageSync('details')
			// console.log(this.keyword)
			// uni.setNavigationBarTitle({
			// 	title: this.keyword
			// })
			// this.companyinfo()
			//this.company();
		},
		methods: {
			companyinfo() {
				this.$api.to_http('/sczt/get/'+this.keyword, {}, 'POST', '', false).then((res) => {
					console.log(res)
					console.log(res.data)
					if(res.data.code==200){
						this.details=res.data.data
					}
				})
				// let that = this;
				// uni.request({
				// 	url: 'http://open.api.tianyancha.com/web/services/open/ic/holder/2.0',
				// 	header: {
				// 		'Access-Control-Allow-Origin': '*',
				// 		'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
				// 		"Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
				// 		"X-Powered-By": ' 3.2.1',
				// 		'Content-Type': 'application/json;charset=UTF-8',
				// 		'Authorization': 'a5d64ed9-d4fd-440a-b4c7-027f7ec8a0b2' //自定义请求头信息
				// 	},
				// 	method: 'GET',
				// 	data: {
				// 		keyword: that.keyword, //搜索关键字（公司名称、公司id、注册号或社会统一信用代码）
				// 	}
				// }).then((res) => {
				// 	console.log(res)

				// 	if (res[1].data.error_code == 0) {
				// 		that.details = res[1].data.result.items
				// 	}
				// })
			},
			// company() {
			// 	let that = this;
			// 	uni.request({
			// 		url: '/web/services/open/ic/staff/2.0',
			// 		header: {
			// 			'Access-Control-Allow-Origin': '*',
			// 			'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
			// 			"Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
			// 			"X-Powered-By": ' 3.2.1',
			// 			'Content-Type': 'application/json;charset=UTF-8',
			// 			'Authorization': 'a5d64ed9-d4fd-440a-b4c7-027f7ec8a0b2' //自定义请求头信息
			// 		},
			// 		method: 'GET',
			// 		data: {
			// 			keyword: that.keyword, //搜索关键字（公司名称、公司id、注册号或社会统一信用代码）
			// 		}
			// 	}).then((res) => {
			// 		console.log(res)
			
			// 		if (res[1].data.error_code == 0) {
			// 			that.detail = res[1].data.result.items
			// 		}
			// 	})
			// }
		},
		
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

			.business-info {
				font-family: PingFang SC;
				font-style: normal;
				font-weight: normal;
				font-size: 28upx;
				color: #828282;
				margin-bottom: 30upx;

				text {
					color: #FFA463;
				}
			}

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
