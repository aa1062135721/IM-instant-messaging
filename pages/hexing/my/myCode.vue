<template>
	<view class="myCode">
		<view class="box">
			<view class="top">
				<image :src="info.head" mode=""></image>
				<view class="">{{info.userName}}</view>
			</view>
			<image class="codeImg" :src="code" mode=""></image>
			<view class="txt">
				扫一扫上面的二维码图案，加我好友
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:'',//个人信息
				code:'',
			}
		},
		onLoad(){
			this.getInfo()
			this.getCode()
		},
		methods: {
			getInfo(){
				this.$request('/user/getInfo',{},"GET").then(res => {
						this.info = res
				});
			},
			getCode(){
				this.$request('/user/qrCode',{},"GET").then(res => {
						this.code = res
				});
			},
		}
	}
</script>

<style scoped lang="scss">
page {
	height: 100%;
	background-color: #F9F9F9;
	.box{
		width: 686rpx;
		height: 908rpx;
		background-color: #ffffff;
		margin: 90rpx auto;
		border-radius: 8rpx;
		padding: 40rpx 32rpx;
		text-align: center;
	}
	.top{
		margin-bottom: 30rpx;
		display: flex;
		align-items: center;
		image{
			width: 126rpx;
			height: 126rpx;
			margin-right: 24rpx;
		}
		view{
			color: #000000;
			font-size: 32rpx;
		}
	}
	.codeImg{
		width: 606rpx;
		height: 606rpx;
	}
	.txt{
		font-size: 28rpx;
		color: #828282;
		margin-top: 32rpx;
	}
}
</style>
