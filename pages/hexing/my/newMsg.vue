<template>
	<view class="newMsg">
		<view class="item">
			<view class="">新消息提示音</view>
			<image v-if="voice" @click="voice=!voice" src="@/static/hexingImg/ck2.png" mode=""></image>
			<image v-else @click="voice=!voice" src="@/static/hexingImg/ck1.png" mode=""></image>
		</view>
		<view class="item">
			<view class="">振动</view>
			<image v-if="shock" @click="shock=!shock" src="@/static/hexingImg/ck2.png" mode=""></image>
			<image v-else @click="shock=!shock" src="@/static/hexingImg/ck1.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				voice:uni.getStorageSync('voice') || false,
				shock:uni.getStorageSync('shock') || false
			}
		},
		onLoad() {
		},
		
		watch: {
			voice: function (newVal, oldVal) {
				uni.setStorageSync('voice', newVal)
				if (newVal) {
					this.openSettings()
				}
			},
			shock: function (newVal, oldVal) {
				uni.setStorageSync('shock', newVal)
				if (newVal) {
					this.setting()
				}
			}
		},
		
		methods: {
			
			openSettings() {
				/* 获取当前手机是否有通知权限 */
				// #ifdef APP-PLUS
				//声音
				let main = plus.android.runtimeMainActivity();
				let RingtoneManager = plus.android.importClass("android.media.RingtoneManager");
				let uri = RingtoneManager.getActualDefaultRingtoneUri(main, RingtoneManager.TYPE_NOTIFICATION);  
				let MediaPlayer = plus.android.importClass("android.media.MediaPlayer");  
				let player = MediaPlayer.create(main, uri);  
				player.setLooping(false);  
				player.prepare();  
				player.start();
				// #endif 
				/* 获取当前手机是否有通知权限 */
			},
			
			setting () {
				// #ifdef APP-PLUS
				plus.device.vibrate(500);
				// #endif
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
		align-items: center;
		justify-content: space-between;
		background-color: #ffffff;
		border-top: 2rpx solid #F2F2F2;;
		view{
			color: #222222;
			font-size: 32rpx;
		}
		image{
			width: 96rpx;
			height: 48rpx;
		}
	}
}
</style>
