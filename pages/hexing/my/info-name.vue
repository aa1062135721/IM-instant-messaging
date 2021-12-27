<template>
	<view class="infoName">
		<!-- 顶部导航栏 -->
		<view class="top">
			<view class="title">
				<image @click="toBack" src="@/static/hexingImg/back.png" mode=""></image>
				<view class="titleTxt1">用户名称</view>
				<view class="titleTxt2" @click="toSave">完成</view>
			</view>
		</view>
		<!-- 顶部占位空盒子 -->
		<view class="" style="height: var(--status-bar-height);margin-bottom: 88rpx;">
		</view>
		<view class="content">
			<input v-model="userName" type="text" value="" placeholder="请输入名称"/>
			<image v-if="userName" @click="userName=''" src="@/static/hexingImg/delete.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:''
			}
		},
		onLoad() {
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta:1
				})
			},
			toSave(){
				if(!this.userName){//判断是否输入名称
					uni.showToast({
						title: '请输入新名称',
						icon:"none",
						duration: 2000
					});
					return
				}
				this.$request('/user/updateName',{
					userName:this.userName
				}).then(res => {
					console.log(res)
					this.toBack()
				});
			}
		}
	}
</script>

<style scoped lang="scss">
page {
	height: 100%;
	background-color: #F9F9F9;
	.content{
		height: 96rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 32rpx;
		background-color: #ffffff;
		margin-top: 16rpx;
		input{
			width: 650rpx;
		}
		image{
			width: 48rpx;
			height: 48rpx;
		}
	}
	.top{
		position: fixed;
		top: 0;
		width: 750rpx;
		background-color: #ffffff;
		padding-top: var(--status-bar-height);
		.title{
			width: 100%;
			height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 36rpx;
			image{
				width: 30rpx;
				height: 30rpx;
			}
			.titleTxt1{
				font-size: 36rpx;
				color: #222222;
			}
			.titleTxt2{
				font-size: 28rpx;
				color: #1989FA;
			}
		}
	}
	.btn{
		width: 200rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 32rpx;
		color: #999999;
		background-color: #1989FA;
		border-radius: 4rpx;
		color: #ffffff;
		margin: 30rpx auto;
	}
}
</style>
