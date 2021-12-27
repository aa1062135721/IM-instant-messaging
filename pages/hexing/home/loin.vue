<template>
	<view class="">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

	
			}
		},
		onLoad() {
			// //登陆页


			let token=uni.getStorageSync('token');
			// uni.showToast({
			// 	title:token
			// })
			if(token!=null&&token!=""&&token!=undefined){
					uni.switchTab({
						url:'../home/home'
					})	
					return false;
			}else{
				uni.redirectTo({
					url:'/pages/hexing/index/index'
				})		
				 return false;
			}
		},
		methods: {
			
			
		}
	}
</script>

<style>
</style>
