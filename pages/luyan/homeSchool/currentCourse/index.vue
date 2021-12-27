<template>
	<view class="content">
		<u-navbar title="本期课程" :border="true"></u-navbar>
		<view class="main">
			<view class="top">
				<view class="left">日期</view>
				<view class="search">
					<view class="">{{timeVal.data}}</view>
					<view class="">{{timeVal.week}}</view>
					<view class="searchRight">
						<view class="">上课</view>
						<view class="">
							<image src="../../../../static/luyan/images/icon_disk_down.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>
				<view class="right" @tap="isData=true">
					<image src="../../../../static/luyan/images/icon_data.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="list">
				<qianjue-step :list="list"></qianjue-step>
			</view>
		</view>
		<u-calendar v-model="isData" @change="confirm"></u-calendar>
	</view>
</template>

<script>
	import qianjueStep from '@/components/qianjue-step/qianjue-step.vue';
	export default {
		components: {
			qianjueStep
		},
		data() {
			return {
				isData:false,
				timeVal:{
					data:'2021-11-02',
					week:'星期二'
				},
				list: [{
						name: '上午',
						child:[
							{
								child:[
									{
										title: '语文',
										text: '第一节 8:00-8:45 张老师'
									}, {
										title: '数学',
										text: '第二节 8:00-8:45 张老师'
									}
								]
							},
							{
								child:[
									{
										title: '语文',
										text: '第一节 8:00-8:45 张老师'
									}, {
										title: '数学',
										text: '第二节 8:00-8:45 张老师'
									}
								]
							}
						]
					},
					{
						name: '下午',
						child:[
							{
								child:[
									{
										title: '语文',
										text: '第一节 8:00-8:45 张老师'
									}, {
										title: '数学',
										text: '第二节 8:00-8:45 张老师'
									}
								]
							},
							{
								child:[
									{
										title: '语文',
										text: '第一节 8:00-8:45 张老师'
									}, {
										title: '数学',
										text: '第二节 8:00-8:45 张老师'
									}
								]
							}
						]
					},
				]
			};
		},
		methods: {
			confirm(e) {
				this.timeVal.data = e.result;
				this.timeVal.week = e.week;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		min-height: 100vh;
		background-image: linear-gradient(#3296fa, #ffffff);

		.main {
			width: 100%;
			padding: 30upx 24upx;
			box-sizing: border-box;

			.top {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					width: 100upx;
					margin-right: 24upx;
					font-family: 'PingFang SC';
					font-size: 32upx;
					color: #FFFFFF;
				}

				.search {
					width: 100%;
					padding: 18upx 24upx;
					border-radius: 4upx;
					box-sizing: border-box;
					background-color: #FFFFFF;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-family: 'PingFang SC';
					font-weight: 500;
					font-size: 28upx;
					color: #222222;

					.searchRight {
						display: flex;
						align-items: center;
						color: #1989FA;

						image {
							width: 24upx;
							height: 24upx;
							margin-left: 24upx;
						}
					}
				}

				.right {
					width: 64upx;
					height: 64upx;
					margin-left: 24upx;

					image {
						width: 64upx;
						height: 64upx;
					}
				}
			}

			.list {
				width: 100%;
				min-height: 80vh;
				margin-top: 24upx;
				padding: 64upx 48upx;
				background: #FFFFFF;
				box-shadow: 0 0 32upx rgba(28, 45, 70, 0.04);
				border-radius: 4upx;
				box-sizing: border-box;
			}
		}
	}
</style>
