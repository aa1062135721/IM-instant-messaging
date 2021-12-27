<template>
	<view class="content">
		<!-- 顶部占位盒子 -->
		<view class="top"></view>

		<!-- 中间输入部分 -->
		<view class="center">
			<image @click="toBack" class="backBtn" src="../../../static/hexingImg/back2.png" mode=""></image>
			<image class="logo" src="@/static/hexingImg/logo.png"></image>
			<view class="tip">
				请验证登录，未注册的手机号会自动为您注册
			</view>
			<view class="input">
				+86>
				<input v-model="tel" type="number" maxlength="11" value="" placeholder="请输入手机号码" />
			</view>

			<!-- <view class="bottom">
				<image src="@/static/hexingImg/wx.png" mode=""></image> 
				<view class="">
					登录代表同意平台的
					<text @click="toXieyi">《用户服务协议》</text>及
					<text @click="toZhengce">《隐私政策》</text>
				</view>
			</view> -->

			<view class="btn">
				<view class="btnItem1" @click="toCodeLogin">
					登录
				</view>
				<view class="btnItem" @click="toPwdLogin">
					账号密码登录
				</view>
			</view>
		</view>

		<!-- 底部提示 -->
		<view class="bottom">
			<image src="@/static/hexingImg/wx.png" mode="" @click="getWxInfo()"></image>
			<view class="">
				登录代表同意平台的
				<text @click="toXieyi">《用户服务协议》</text>及
				<text @click="toZhengce">《隐私政策》</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel: '', //手机号码

			}
		},
		onLoad() {
			
		},
		methods: {
			// 跳转至验证码登录页
			toCodeLogin() {
				if (!this.tel) { //判断是否输手机号
					uni.showToast({
						title: '请输入手机号',
						icon: "none",
						duration: 2000
					});
					return
				}
				if (!/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(this.tel)) {
					return this.$refs.uToast.show({
						title: '请输入正确的手机号码',
						type: 'error',
					})
				}
				uni.navigateTo({
					url: "codeLogin?tel=" + this.tel
				})
			},
			// 跳转至验证码登录页
			toPwdLogin() {
				uni.navigateTo({
					url: "pwdLogin"
				})
			},
			//返回上一个页面
			toBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			//用户协议
			toXieyi() {
				uni.navigateTo({
					url: "agreement"
				})
			},
			//隐私协议
			toZhengce() {
				uni.navigateTo({
					url: "privacy"
				})
			},
			getWxInfo() {
				let that = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes.authResult);
						that.loginRes = loginRes.authResult
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log(infoRes)
								that.infoRes = infoRes

								that.wxLogin();
							},
							fail(res) {
								uni.showToast({
									title: res,
									icon: 'none',
									duration: 2000
								})
							}
						});
					}
				});
			},
			// 微信登录
			wxLogin() {
				let that = this;
				let parmes = {
					//openid: that.infoRes.userInfo.openId,
					nickname: that.infoRes.userInfo.nickName,
					headimgurl: that.infoRes.userInfo.avatarUrl,
					unionid: that.infoRes.userInfo.unionId,
					sex: that.infoRes.userInfo.gender,
					province: that.infoRes.userInfo.province,
					city: that.infoRes.userInfo.city
				}
				this.$request('/user/wxLogin', parmes).then(res => {
					if (res.phone == "" || res.phone == null) {
						uni.setStorageSync('token', res.token);
						console.log(uni.getStorageSync('token'))
						uni.showLoading({
							title: '登录中',
						})
						setTimeout(function() {
							uni.navigateTo({
								url: '/pages/hexing/index/codeLogin?type=1'
							})
						}, 1000)
					} else {
						uni.setStorageSync('token', res.token);
						console.log(uni.getStorageSync('token'))
						uni.showLoading({
							title: '登录中',
						})
						setTimeout(function() {
							uni.hideLoading()
						}, 1000)
						setTimeout(function() {
							uni.switchTab({
								url: '/pages/hexing/home/home'
							})
						}, 1000)
					}

				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		// position: absolute;
		// width: 100%;
		// height: 100%;
		// top: 0;
		// left: 0;
		color: #333333;
		background-image: url('@/static/hexingImg/denglu.png');
		background-size: 100%;
		background-position: top;
		background-repeat: no-repeat;
	}

	.top {
		width: 750rpx;
		height: var(--status-bar-height);
	}

	.center {
		padding: 138rpx 30rpx 0 30rpx;
		position: relative;

		.backBtn {
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			left: 32rpx;
			top: 32rpx;
		}

		.logo {
			display: block;
			height: 210rpx;
			width: 206rpx;
			margin: 0 auto 76rpx auto;
		}

		.tip {
			color: #666666;
			font-size: 28rpx;
			margin-bottom: 60rpx;
		}

		.input {
			display: flex;
			align-items: center;
			margin-bottom: 72rpx;
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

		.btn {
			width: 686rpx;
			line-height: 88rpx;
			text-align: center;
			font-size: 32rpx;
			color: #999999;

			.btnItem1 {
				background-color: #1989FA;
				;
				border-radius: 4rpx;
				color: #ffffff;
			}
		}
	}

	.bottom {
		width: 750rpx;
		position: absolute;
		bottom: 120rpx;
		text-align: center;
		font-size: 24rpx;
		color: #999999;
		margin-bottom: 30rpx;

		image {
			width: 90rpx;
			height: 90rpx;
			border-radius: 45rpx;
			margin-bottom: 30rpx;
		}

		text {
			color: #1989FA;
		}
	}
</style>
