<template>
	<view class="codeLogin">
		<view class="inputBox">
			<view class="inputTxt1">
				账号密码登录
			</view>
			<view class="inputTel">
				+86>
				<input type="number" v-model="phone" maxlength="11" value="" placeholder="请输入手机号码" />
			</view>
			<view class="inputPwd">
				<input password v-model="passWord" value="" placeholder="请输入密码" />
			</view>
		</view>
		<view class="btn" @click="toLogin">
			登录
		</view>
		<view class="forgetBtn" @click="toFindPwd">
			忘记密码
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				passWord: '',
				cheackd: false
			}
		},
		onLoad() {
			// if (this.cheackd == true) {
			// 	this.phone = uni.getStorageSync('phone')
			// 	this.passWord = uni.getStorageSync('passWord')
			// }
		},
		methods: {
			// 跳转至找回密码页
			toFindPwd() {
				uni.navigateTo({
					url: "findPwd"
				})
			},
			// 跳转至首页
			toLogin() {
				if (!this.phone) { //判断是否输手机号
					uni.showToast({
						title: '请输入手机号码',
						icon: "none",
						duration: 2000
					});
					return
				}
				if (!/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(this.phone)) {
					return this.$refs.uToast.show({
						title: '请输入正确的手机号码',
						type: 'error',
					})
				}
				if (!this.passWord) { //判断是否输密码
					uni.showToast({
						title: '请输入密码',
						icon: "none",
						duration: 2000
					});
					return
				}
				this.$request('/user/login', {
					phone: this.phone,
					passWord: this.$md5(this.passWord)
				}).then(res => {
					console.log(res)
					//缓存token
					uni.setStorageSync('token', res.token)
					// //跳转至首页
					uni.switchTab({
						url: '../home/home'
					});
					// if (this.cheackd) {
					// 	this.remember();
					// } else {
					// 	uni.removeStorageSync('phone')
					// 	uni.removeStorageSync('passWord') // 清除登录状态
					// 	uni.removeStorageSync('cheackd') // 清除登录状态
					// 	this.remember();
					// }
					// uni.setStorage({
					// 	key: 'token',
					// 	data: res.token,
					// 	success: function() {
					// 		//跳转至首页
					// 		uni.switchTab({
					// 			url: '../home/home'
					// 		});
					// 	}
					// });
				});

			},
			// remember() {
			// 	uni.setStorageSync('username', this.username)
			// 	uni.setStorageSync('password', this.password)
			// 	uni.setStorageSync('cheackd', this.cheackd)
			// },
		}
	}
</script>

<style scoped lang="scss">
	.codeLogin {
		padding: 0 32rpx;
	}

	.inputBox {
		margin-top: 76rpx;

		.inputTxt1 {
			font-size: 48rpx;
			color: #1989FA;
			margin-bottom: 96rpx;
		}

		.inputTel {
			display: flex;
			align-items: center;
			margin-bottom: 60rpx;
			font-size: 32rpx;
			border-bottom: 2rpx solid #E0E0E0;
			padding-bottom: 18rpx;

			input {
				margin-left: 30rpx;
				font-size: 30rpx;
				border-left: 1rpx solid #BDBDBD;
				padding-left: 16rpx;
			}
		}

		.inputPwd {
			border-bottom: 2rpx solid #E0E0E0;
			padding-bottom: 18rpx;

			input {
				margin-left: 30rpx;
				font-size: 32rpx;
			}
		}
	}

	.btn {
		width: 686rpx;
		line-height: 88rpx;
		margin: 198rpx auto 30rpx auto;
		text-align: center;
		background-color: #1989FA;
		color: #ffffff;
		font-size: 32rpx;
		border-radius: 4rpx;

	}

	.forgetBtn {
		color: #1989FA;
		font-size: 28rpx;
		text-align: right;
	}
</style>
