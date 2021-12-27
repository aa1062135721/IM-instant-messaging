<template>
	<view class="container">
		<view class="tabs-view">
			<view class="tabs-item">
				<view class="tabs-item-relative" @click="toCheck(1)">
					<text class="tabs-text" :class="{active:isCheck==1}">今日</text>
					<view class="tabs-border" v-show="isCheck==1"></view>
				</view>
			</view>

			<view class="tabs-item" @click="toCheck(2)">
				<view class="tabs-item-relative">
					<text class="tabs-text" :class="{active:isCheck==2}">本周</text>
					<view class="tabs-border" v-show="isCheck==2"></view>
				</view>
			</view>

			<view class="tabs-item" @click="toCheck(3)">
				<view class="tabs-item-relative">
					<text class="tabs-text" :class="{active:isCheck==3}">本月</text>
					<view class="tabs-border" v-show="isCheck==3"></view>
				</view>
			</view>

			<view class="tabs-item" @click="toCheck(4)">
				<view class="tabs-item-relative">
					<text class="tabs-text" :class="{active:isCheck==4}">本年</text>
					<view class="tabs-border" v-show="isCheck==4"></view>
				</view>
			</view>
		</view>

		<view class="data-card">
			<view class="data-card-left">
				<text class="data-text">合计收入</text>
				<text class="data-money">1345.04</text>
			</view>

			<image class="money-icon" src="@/static/images/vvo-yao/money-icon.png"></image>
		</view>

		<view class="data-card-white">
			<view class="data-card-column bottom60">
				<text class="data-card-column-num">4567</text>
				<text class="data-card-column-text">浏览量</text>
			</view>

			<view class="data-card-column flex_end bottom60">
				<text class="data-card-column-num">4567</text>
				<text class="data-card-column-text">评论量</text>
			</view>

			<view class="data-card-column">
				<text class="data-card-column-num">4567</text>
				<text class="data-card-column-text">咨询量</text>
			</view>

			<view class="data-card-column flex_end">
				<text class="data-card-column-num">4567</text>
				<text class="data-card-column-text">订单数</text>
			</view>
		</view>

		<view class="data-card-chart">
			<Echarts :option="option" class="charts" />
		</view>
	</view>
</template>

<script>
	import ets from '@/static/js/echarts.min.js'

	// 绘制图表组件
	import Echarts from '@/components/echarts/echarts.vue'

	export default {
		components: {
			Echarts
		},

		data() {
			return {
				isCheck:1,
				// 图表配置(与官方文档一致)
				option: {
					title: {
						text: '销售',
						textStyle: {
							//字体风格,'normal','italic','oblique'
							fontStyle: 'normal',
							//字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
							fontWeight: 'normal',
							fontSize: 18,
							color: '#222222'
						},
						padding: [20, 0 ,0, 0]
					},
					
					grid: {
					    left: '13%',
					    // right: '0%',
					    // bottom: '5%',
					    // containLabel: true
					},

					// 输入放入显示数据
					tooltip: {
						alwaysShowContent: false
					},

					xAxis: {
						type: 'category',
						axisLabel: {},
						boundaryGap: true,
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},

					yAxis: {
						type: 'value',
						splitLine: {
							show: true,
							lineStyle: {
								type: 'dashed'
							}
						}
					},

					dataZoom: [{
							show: false, //不显示拖动条
							realtime: true,
							start: 0, //开始位置
							end: 100 //结束位置
						},
						{
							type: 'inside',
							realtime: true,
							start: 65,
							end: 85
						}
					],

					splitLine: {
						lineStyle: {
							type: 'dashed'
						}
					},

					series: [{
						name: '销量',
						type: 'line',
						lineStyle: {
							color: 'rgb(108, 176, 240)',
							width: 3
						},
						areaStyle: {
							// 像这种情况就需要引入 echarts.js 核心库
							// 因为渐变色配置需要使用 echarts.js > graphic > LinearGradient
							color: new ets.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#5EA7FB'
							}, {
								offset: 1,
								color: 'rgba(1, 191, 236, 0)'
							}])
						},
						smooth: 0.6,
						// 图表数据
						data: [0, 350, 901, 94, 500, 2830, 20],
					}]
				},
			}
		},

		onLoad() {

		},

		methods: {
			toCheck(e){
				this.isCheck=e
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #F9F9F9;

		/* 图表样式 */
		.charts {
			height: 400rpx;
			width: 624rpx;
			border-radius: 80rpx;
			align-self: center;
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
					width: 64rpx;
					height: 4rpx;
					border-radius: 2rpx;
					background-color: #1989FA;
				}
			}
		}

		.data-card {
			margin: 30rpx 32rpx;
			background: #1989FA;
			border-radius: 4rpx;
			height: 230rpx;
			display: flex;
			flex-direction: row;
			align-items: center;

			.data-card-left {
				display: flex;
				flex-direction: column;
				margin-left: 48rpx;
				flex: 1;
			}

			.data-text {
				font-weight: 600;
				font-size: 28rpx;
				color: #FFFFFF;
			}

			.data-money {
				font-weight: 600;
				font-size: 72rpx;
				letter-spacing: 5rpx;
				color: #FFFFFF;
				margin-top: 20rpx;
			}

			.money-icon {
				width: 154rpx;
				height: 184rpx;
				margin-right: 100rpx;
			}
		}

		.data-card-white {
			background: rgba(255, 255, 255, 0.8);
			border-radius: 4rpx;
			margin: 0 32rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-wrap: wrap;
			padding: 40rpx 86rpx;

			.data-card-column {
				display: flex;
				flex-direction: column;
				width: 50%;

				&.flex_end {
					align-items: flex-end;
				}

				&.bottom60 {
					margin-bottom: 60rpx;
				}

				.data-card-column-num {
					font-weight: 600;
					font-size: 48rpx;
					letter-spacing: 2rpx;
					color: #222222;
				}

				.data-card-column-text {
					font-size: 28rpx;
					letter-spacing: 2rpx;
					color: #999999;
				}
			}
		}

		.data-card-chart {
			display: flex;
			flex-direction: column;
			background-color: #FFFFFF;
			margin-top: 20rpx;
			margin-left: 32rpx;
			margin-right: 32rpx;
		}
	}
</style>
