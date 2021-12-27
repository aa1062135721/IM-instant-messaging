<template>
	<view class="account">
		<view class="item">
			<view class="itemTxt">
				手机号：{{tPhone(info.phone)}}
			</view>
			<view class="itemBtn" @click="navigate({url: '/pages/hexing/my/changeTel'})">
				<view>点击更换</view>
				<image src="@/static/hexingImg/icon.png" mode=""></image>
			</view>
		</view>
		<view class="item">
			<view class="itemTxt">
				密码：<text v-if="info.passWord">******</text>
			</view>
			<view class="itemBtn" @click="toSetPwd">
				<view v-if="info.passWord" style="background-color: #BDBDBD;">已设置</view>
				<view v-else style="background-color: #BDBDBD;">未设置</view>
				<image src="@/static/hexingImg/icon.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:''
			}
		},
		onLoad() {
			// this.getInfo()
		},
		onShow() {
			this.getInfo()
		},
		methods: {
			//将电话中间4位变成*
			tPhone(tel) {
				tel = tel+''
				return tel.substr(0,3)+"****"+tel.substr(7);
			},
			navigate(params) {
				uni.navigateTo({
					...params 
				})
			},
			getInfo(){
				this.$request('/user/getInfo',{},"GET").then(res => {
					this.info = res
					console.log(this.info)
				});
			},
			toSetPwd(){
				if(this.info.passWord){
					uni.navigateTo({
						url: '/pages/hexing/my/setPwd?havePwd=1'
					})
				}else{
					uni.navigateTo({
						url: '/pages/hexing/my/setPwd?havePwd=2'
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
page {
	height: 100%;
	background-color: #F9F9F9;
	.item{
		height: 96rpx;
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 2rpx solid #F2F2F2;
		background-color: #ffffff;
		.itemTxt{
			font-size: 32rpx;
			color: #222222;
		}
		.itemBtn{
			display: flex;
			align-items: center;
			view{
				font-size: 24rpx;
				height: 48rpx;
				line-height: 48rpx;
				padding: 0 24rpx;
				color: #ffffff;
				background-color: #1989FA;
				border-radius: 6rpx;
				margin-right: 40rpx;
			}
			image{
				width: 15rpx;
				height: 25rpx;
			}
		}
	}
}
</style>
