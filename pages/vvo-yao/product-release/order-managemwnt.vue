<template>
	<view class="container">
		<view class="content">
			<u-empty text="暂无订单" mode="order"></u-empty>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		flex: 1;
		background-color: #F9F9F9;
		.content{
			padding: 100rpx 0;
		}
	}
</style>
