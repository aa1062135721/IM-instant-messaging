<template>
	<view class="content">
		<u-navbar title="校园通告" :border="true"></u-navbar>
		<view class="main">
			<view class="list" v-for="(item,i) in dataList" :key="i" @tap="goDetial(i)">
				<view class="top">
					<view class="left">{{item.title}}</view>
					<view class="right">{{item.time}}</view>
				</view>
				<view class="text allshe3">{{item.dec}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					title: '关于国庆节放假通知',
					time: '2021-09-08',
					dec: '一般指重庆市梁平中学。重庆市梁平中 学,建校于1907年,是重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校'
				}, {
					title: '关于国庆节放假通知',
					time: '2021-09-08',
					dec: '一般指重庆市梁平中学。重庆市梁平中 学,建校于1907年,是重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校'
				}, {
					title: '关于国庆节放假通知',
					time: '2021-09-08',
					dec: '一般指重庆市梁平中学。重庆市梁平中 学,建校于1907年,是重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校'
				}, {
					title: '关于国庆节放假通知',
					time: '2021-09-08',
					dec: '一般指重庆市梁平中学。重庆市梁平中 学,建校于1907年,是重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校'
				}, {
					title: '关于国庆节放假通知',
					time: '2021-09-08',
					dec: '一般指重庆市梁平中学。重庆市梁平中 学,建校于1907年,是重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校'
				}, {
					title: '关于国庆节放假通知',
					time: '2021-09-08',
					dec: '一般指重庆市梁平中学。重庆市梁平中 学,建校于1907年,是重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼仪示范学校、重庆市德育示范校、重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校'
				}, ]
			};
		},
		methods: {
			goDetial(i) {
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/noticeDetails/index'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		padding: 24upx;
		box-sizing: border-box;

		.list {
			width: 100%;
			padding: 24upx;
			background: #FFFFFF;
			box-shadow: 0 0 32upx rgba(28, 45, 70, 0.04);
			border-radius: 4upx;
			box-sizing: border-box;
			margin-bottom: 16upx;

			.top {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-family: 'PingFang SC';

				.left {
					font-weight: bold;
					font-size: 28upx;
					color: #222222;
				}

				.right {
					font-weight: 500;
					font-size: 24upx;
					color: #999999;
				}
			}

			.text {
				width: 100%;
				margin-top: 16upx;
				font-family: 'PingFang SC';
				font-size: 28upx;
				line-height: 40upx;
				color: #666666;
			}
		}
	}
</style>
