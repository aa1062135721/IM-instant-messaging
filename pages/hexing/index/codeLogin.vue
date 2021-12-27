<template>
	<view class="codeLogin">
		<view class="inputBox">
			<view class="input" v-if="type==1">
				<input v-model="tel" type="number" maxlength="11" value="" placeholder="请输入手机号" />
			</view>
			<view class="" v-else>
				<view class="inputTxt1">输入验证码</view>
				<view class="inputTxt2">请输入{{ tel }}收到的验证码</view>
			</view>
			<view class="input">
				<input v-model="smsCode" type="number" value="" placeholder="请输入验证码" />
				<view>
					<view class="codeBtn" v-if="show" @click="getCode">获取验证码</view>
					<view class="codeBtn codeBtn2" v-if="!show">重新发送[{{ count }}]</view>
				</view>
			</view>
		</view>
		<view class="btn" @click="toLogin">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel: '', //手机号
				smsCode: '', //验证码
				show: true, //是否出现发送验证码倒计时
				count: '' ,//发送验证码倒计时
				type:0
			};
		},
		onLoad(e) {
			this.tel = e.tel;
			this.type = e.type
		},
		methods: {

			getCode() {
				uni.showToast({
					title: '获取成功',
					icon: "none",
					duration: 2000
				});
				if (this.type == 1) {
					this.$request('/user/getSmscode', {
						type: 6,
						phone: this.tel
					}, 'GET').then(res => {
						const TIME_COUNT = 60; //倒计时初始时间60s
						if (!this.timer) {
							this.count = TIME_COUNT;
							this.show = false;
							this.timer = setInterval(() => {
								if (this.count > 0 && this.count <= TIME_COUNT) {
									this.count--;
								} else {
									this.show = true;
									clearInterval(this.timer); //清除计时器
									this.timer = null;
								}
							}, 1000);
						}
					});
				}else{
					this.$request('/user/getSmscode', {
						type: 1,
						phone: this.tel
					}, 'GET').then(res => {
						const TIME_COUNT = 60; //倒计时初始时间60s
						if (!this.timer) {
							this.count = TIME_COUNT;
							this.show = false;
							this.timer = setInterval(() => {
								if (this.count > 0 && this.count <= TIME_COUNT) {
									this.count--;
								} else {
									this.show = true;
									clearInterval(this.timer); //清除计时器
									this.timer = null;
								}
							}, 1000);
						}
					});
				}
			},
			// 跳转至首页
			toLogin() {
				if (!this.smsCode) { //判断是否输验证码
					uni.showToast({
						title: '请输入验证码',
						icon: "none",
						duration: 2000
					});
					return
				}
				if (this.type == 1) {
					this.$request('/user/bindPhone', {
						phone: this.tel,
						smsCode: this.smsCode,
					
					}).then(res => {
						console.log(res)
						//缓存token
						uni.setStorage({
							key: 'token',
							data: res.token,
							success: function() {
								//跳转至首页
								uni.switchTab({
									url: '../home/home'
								});
							}
						});
					});
				} else {
					this.$request('/user/smsLogin', {
						phone: this.tel,
						smsCode: this.smsCode
					}).then(res => {
						//缓存token
						uni.setStorage({
							key: 'token',
							data: res.token,
							success: function() {
								//跳转至首页
								uni.switchTab({
									url: '../home/home'
								});
							}
						});
					});
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	.codeLogin {
		padding: 0 32rpx;
	}

	.inputBox {
		margin-top: 76rpx;

		.inputTxt1 {
			font-size: 48rpx;
			color: #1989fa;
			margin-bottom: 20rpx;
		}

		.inputTxt2 {
			font-size: 32rpx;
			color: #666666;
			margin-bottom: 110rpx;
		}

		.input {
			padding: 30upx 0;
			border-bottom: 2rpx solid #e0e0e0;
			// padding-bottom: 24rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			input {
				width: 400rpx;
				font-size: 32rpx;
			}

			.codeBtn {
				width: 166rpx;
				border-radius: 10rpx;
				line-height: 48rpx;
				font-size: 24rpx;
				background-color: #1989fa;
				color: #ffffff;
				text-align: center;
			}

			.codeBtn2 {
				background-color: #d3d8e6;
				color: #ffffff;
			}
		}
	}

	.btn {
		width: 686rpx;
		line-height: 88rpx;
		margin: 0 auto;
		text-align: center;
		background-color: #1989fa;
		color: #ffffff;
		font-size: 32rpx;
		margin-top: 198rpx;
		border-radius: 4rpx;
	}
</style>
