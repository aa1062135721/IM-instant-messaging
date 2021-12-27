<template>
	<view class="release">
		<textarea value="" placeholder="请输入..." />
		<image class="addBtn" src="@/static/hexingImg/tj.png" mode=""></image>
		<view class="btn">
			发布
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
page {
	height: 100%;
	background-color: #F9F9F9;
	.release{
		padding: 32rpx;
	}
	textarea{
		width: 686rpx;
		height: 280rpx;
		padding: 24rpx;
		font-size: 28rpx;
		margin-bottom: 24rpx;
		background: #F9F9F9;
		border-radius: 4rpx;
	}
	.addBtn{
		width: 120rpx;
		height: 108rpx;
	}
	.btn{
		width: 686rpx;
		line-height: 96rpx;
		color: #ffffff;
		text-align: center;
		font-size: 32rpx;
		margin: 32rpx auto;
		background: #1989FA;
		border-radius: 4rpx;
	}
}
</style>
