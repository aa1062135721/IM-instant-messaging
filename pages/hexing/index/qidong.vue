<template>
	<view class="index">
		<image class="img1" src="@/static/hexingImg/logo.png" mode=""></image>
		<view class="txt1">
			智汇都梁
		</view>
		<view class="txt2">
			让生活更方便
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			setTimeout(()=>{
				console.log('跳')
				uni.navigateTo({
					url:"login"
				})
			},3000)
		},
		methods: {
		}
	}
</script>

<style scoped lang="scss">
	.index{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #1989FA;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		.img1{
			width: 210rpx;
			height: 210rpx;
		}
		.txt1{
			font-size: 48rpx;
			font-weight: 500;
			margin-top: 38rpx;
			margin-bottom: 20rpx;
		}
		.txt2{
			font-size: 32rpx;
			font-weight: 300;
		}
	}
</style>
