<template>
	<view class="set">
		<view class="setItem" style="margin-bottom: 24rpx;" @click="toSet">
			<view class="">
				账号与安全 
			</view>
			<image src="@/static/hexingImg/icon.png" mode=""></image>
		</view>
		<view class="setItem" @click="navigate({url: '/pages/hexing/my/newMsg'})">
			<view class="">
				新消息通知
			</view>
			<image src="@/static/hexingImg/icon.png" mode=""></image>
		</view>
		<view class="setItem" @click="navigate({url: '/pages/hexing/my/about'})">
			<view class="">
				关于APP
			</view>
			<image src="@/static/hexingImg/icon.png" mode=""></image>
		</view>
		<!-- <view class="btn">
			切换账号
		</view> -->
		<view class="btn" @click="toLogout">
			退出
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
	
		},
		methods: {
			toSet(){
				if(!uni.getStorageSync('token')){
					uni.showToast({
						title: '请先登录',
						icon:'none',
						duration: 2000
					});
					return
				}
				uni.navigateTo({
					url: '/pages/hexing/my/account'
				})
			},
			navigate(params) {
				uni.navigateTo({
					...params 
				})
			},
			toLogout(){
				// uni.removeStorageSync('token')
				// uni.clearStorageSync()
				// uni.clearStorage()
				// wx.$app.logout().then((res) => {
				//   console.log(res.data); // 退出成功
				// }).catch(function(imError) {
				//   console.warn('logout error:', imError);
				// });
				//this.navigate({url: '/pages/hexing/index/index'})
				this.$request('/user/logOut',{},"GET").then(res => {
						uni.removeStorageSync('token')
						uni.clearStorageSync();// 清除登录状态
						uni.clearStorage()
						uni.showToast({
							title: '退出登录',
							duration: 2000,
							icon: 'none'
						})
						setTimeout(function() {
							uni.redirectTo({
								url: '/pages/hexing/index/index'
							})
						}, 1000)
				});
			}
		}
	}
</script>

<style scoped lang="scss">
page {
	height: 100%;
	background-color: #F9F9F9;
	.setItem{
		height: 96rpx;
		border-top: 2rpx solid #F2F2F2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 32rpx;
		color: #222222;
		background-color: #ffffff;
		padding: 0 32rpx;
		image{
			width: 13rpx;
			height: 24rpx;
		}
	}
	.btn{
		line-height: 96rpx;
		text-align: center;
		font-size: 32rpx;
		color: #222222;
		background-color: #ffffff;
		margin-top: 60rpx;
	}
}
</style>
