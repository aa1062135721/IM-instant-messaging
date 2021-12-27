<template>
	<view class="container">
		<view class="release-card">
			<text class="release-card-title">常用工具</text>
			
			<view class="release-row">
				<image @click="$navigate({url: '/pages/vvo-yao/product-release/release-goods'})" class="release-icon" src="@/static/images/vvo-yao/release-icon1.png"></image>
				<image @click="$navigate({url: '/pages/vvo-yao/product-release/goods-manage'})" class="release-icon" src="@/static/images/vvo-yao/release-icon2.png"></image>
				<image @click="$navigate({url: '/pages/vvo-yao/product-release/order-managemwnt'})" class="release-icon" src="@/static/images/vvo-yao/release-icon3.png"></image>
				<image @click="$navigate({url: '/pages/vvo-yao/product-release/data-analysis'})" class="release-icon" src="@/static/images/vvo-yao/release-icon4.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods: {
			showToast(title) {
				uni.showToast({title, icon: 'none'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		background-color: #F9F9F9;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		flex: 1;
		.release-card {
			margin: 24rpx;
			height: 147px;
			background: #FFFFFF;
			border-radius: 4rpx;
			padding: 0 28rpx;
			display: flex;
			flex-direction: column;
			.release-card-title {
				font-size: 32rpx;
				line-height: 32rpx;
				color: #000000;
				margin-top: 28rpx;
			}
			
			.release-row {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				margin: 40rpx 18rpx;
			}
			
			.release-icon {
				width: 112rpx;
				height: 146rpx;
			}
		}
	}
</style>