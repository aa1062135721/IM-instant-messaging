<template>
	<view class="about">
		<image src="@/static/hexingImg/logo.png" mode=""></image>
		<view class="txt">
			APP智汇都梁{{version}}
		</view>
		<view class="shenji" @click="godetial()">
			<view class="">升级</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version:''
			}
		},
		onLoad() {
			this.version = plus.runtime.version//当前版本
			console.log(this.version)
		},
		methods: {
			godetial(){
				uni.navigateTo({
					url:'../../jyx/upgrade'	
				})
			}
		}
	}
</script>

<style scoped lang="scss">
page {
	padding:0 32upx;
	height: 100%;
	background-color: #F9F9F9;
	.about{
		text-align: center;
		padding-top: 160rpx;
		image{
			width: 240rpx;
			height: 240rpx;
			margin-bottom: 35rpx;
		}
		.txt{
			color: #828282;
			font-size: 32rpx;
		}
		.shenji{
			position: fixed;
			bottom: 10%;
			left: 5%;
			right: 5%;
			margin: 0 auto ;
			box-sizing: border-box;
			view{
				padding: 28upx 0;
				background: #1989FA;
				font-family: PingFang SC;
				font-style: normal;
				font-weight: bold;
				font-size: 32upx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #FFFFFF;
			}

		}
	}
}
</style>
