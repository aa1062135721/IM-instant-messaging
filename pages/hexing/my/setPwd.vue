<template>
	<view class="setPwd">
		<!-- 顶部导航栏 -->
		<view class="top">
			<view class="title">
				<image @click="toBack" src="@/static/hexingImg/back.png" mode=""></image>
				<view class="titleTxt1">设置密码</view>
				<view class="titleTxt2" @click="toSetPwd">完成</view>
			</view>
		</view>
		<!-- 顶部占位空盒子 -->
		<view class="" style="height: var(--status-bar-height);margin-bottom: 88rpx;">
		</view>
		<view class="item" v-if="havePwd==1">
			<view class="itemLabel">
				旧密码
			</view>
			<input v-model="oldPassWord" password value="" placeholder="请填写旧密码"/>
		</view>
		<view class="item" v-if="havePwd==1">
			<view class="itemLabel">
				新密码
			</view>
			<input v-model="newPassword" password value="" placeholder="请填写新密码"/>
		</view>
		<view class="item" v-else>
			<view class="itemLabel">
				密码
			</view>
			<input v-model="newPassword" password value="" placeholder="请填写密码"/>
		</view>
		<view class="item">
			<view class="itemLabel">
				确认密码
			</view>
			<input v-model="newPassword2" password value="" placeholder="请再次输入新密码"/>
		</view>
		<view class="tip">
			密码必须是8-16位英文字母，数字，字符组合（不能是纯数字）
		</view>
		<view class="btn" @click="toFindPwd">
			忘记旧密码
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				havePwd:'',
				info:'',
				oldPassWord:'',
				newPassword:'',
				newPassword2:""
			}
		},
		onLoad(e) {
			this.havePwd = e.havePwd
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta:1
				})
			},
			//将电话中间4位变成*
			tPhone(tel) {
				tel = tel+''
				return tel.substr(0,3)+"****"+tel.substr(7);
			},
			toFindPwd(){
				uni.navigateTo({
					url:'../index/findPwd'
				})
			},
			getInfo(){
				this.$request('/user/getInfo',{},"GET").then(res => {
					this.info = res
				});
			},
			toSetPwd(){
				if(this.havePwd==1&&!this.oldPassWord){
					uni.showToast({
						title: '请输入旧密码',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(!this.newPassword){
					if(this.havePwd==1){
						uni.showToast({
							title: '请填写新密码',
							icon:"none",
							duration: 2000
						});
					}else{
						uni.showToast({
							title: '请填写密码',
							icon:"none",
							duration: 2000
						});
					}
					return
				}
				if(!this.newPassword2){
					uni.showToast({
						title: '请再次确认密码',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(this.newPassword!=this.newPassword2){
					uni.showToast({
						title: '两次密码不一致',
						icon:"none",
						duration: 2000
					});
					return
				}
				let oldPassWord
				if(this.oldPassWord){
					oldPassWord = this.$md5(this.oldPassWord)
				}else{
					oldPassWord = ''
				}
				this.$request('/user/updatePassWord',{
					oldPassWord:oldPassWord,
					newPassword:this.$md5(this.newPassword),
				}).then(res => {
					console.log(oldPassWord)
					console.log(this.$md5(this.newPassword))
					console.log(res)
					uni.showToast({
						title: '设置成功',
						duration: 2000
					});
					setTimeout(()=>{
						uni.navigateBack({
							delta:1
						})
					},2000)
					
				});
			}
		}
	}
</script>

<style scoped lang="scss">
page {
	height: 100%;
	background-color: #F9F9F9;
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
	.item{
		height: 96rpx;
		border-top: 2rpx solid #F2F2F2;
		display: flex;
		align-items: center;
		padding: 0 32rpx;
		background-color: #ffffff;
		.itemLabel{
			width: 170rpx;
			color: #222222;
			font-size: 32rpx;
		}
	}
	.tip{
		font-size: 24rpx;
		color: #666666;
		margin: 20rpx 32rpx;
	}
	.btn{
		font-size: 28rpx;
		color: #2F80ED;
		margin-left: 32rpx;
	}
}
</style>
