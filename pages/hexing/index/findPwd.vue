<template>
	<view class="findPwd">
		<view class="inputBox">
			<view class="inputTel">
				+86>
				<input v-model="phone" type="number" maxlength="11" value="" placeholder="请输入手机号码"/>
			</view>
			<view class="inputCode">
				<input v-model="smsCode" type="text" value="" placeholder="验证码"/>
				<view>
					<view class="codeBtn" v-if="show" @click="getCode">
						获取验证码
					</view>
					<view class="codeBtn codeBtn2" v-if="!show">重新发送[{{count}}]</view>
				</view>
			</view>
			<view class="inputPwd">
				<input v-model="passWord" password value="" placeholder="请输入密码"/>
			</view>
			<view class="inputPwd">
				<input v-model="passWord2" password type="text" value="" placeholder="请确认密码"/>
			</view>
		</view>
		<view class="btn" @click="toSubmit">
			完成
		</view>
		<!-- <view class="" style="font-size: 24upx;">
			密码规则：最小6位密码（允许输入数字、字母 ，不允许输入特殊字符、汉字等）
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:true,//是否出现发送验证码倒计时
				count:'',//发送验证码倒计时
				phone:'',
				smsCode:'',
				passWord:'',
				passWord2:'',
			}
		},
		onLoad() {
		},
		methods: {
			// 发送验证码
			getCode(){
				if(!this.phone){//判断是否输入手机号
					uni.showToast({
						title: '请输入手机号',
						icon:"none",
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
				this.$request('/user/getSmscode',{
						type: 2,
						phone: this.phone
					},'GET').then(res => {
					const TIME_COUNT = 60; //倒计时初始时间60s
					if(!this.timer) {
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
			},
			toSubmit(){
				if(!this.phone){//判断是否输入手机号
					uni.showToast({
						title: '请输入手机号',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(!this.smsCode){//判断是否输入验证码
					uni.showToast({
						title: '请输入验证码',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(!this.passWord){//判断是否输入密码
					uni.showToast({
						title: '请输入密码',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(!this.passWord2){//判断是否确认密码
					uni.showToast({
						title: '请确认密码',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(this.passWord!=this.passWord2){//判断确认密码是否一致
					uni.showToast({
						title: '两次密码不一致',
						icon:"none",
						duration: 2000
					});
					return
				}
				this.$request('/user/restPassword',{
						phone: this.phone,
						passWord:this.$md5(this.passWord),
						smsCode:this.smsCode,
					}).then(res => {
						uni.showToast({
							title: '密码修改成功',
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
	.findPwd{
		padding: 0 32rpx;
	}
	.inputBox{
		margin-top: 144rpx;
		.inputTel{
			display: flex;
			align-items: center;
			margin-bottom: 60rpx;
			font-size: 32rpx;
			border-bottom: 2rpx solid #E0E0E0;
			padding-bottom: 18rpx;
			input{
				margin-left: 30rpx;
				font-size: 30rpx;
				border-left: 1rpx solid #BDBDBD;
				padding-left: 16rpx;
			}
		}
		.inputCode{
			border-bottom: 2rpx solid #E0E0E0;
			padding-bottom: 24rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 60rpx;
			input{
				width: 400rpx;
				font-size: 32rpx;
			}
			.codeBtn{
				width: 166rpx;
				border-radius: 10rpx;
				line-height: 48rpx;
				font-size: 24rpx;
				background-color: #1989FA;
				color: #ffffff;
				text-align: center;
			}
			.codeBtn2{
				background-color: #d3d8e6;
				color: #ffffff;
				
			}
		}
		.inputPwd{
			border-bottom: 2rpx solid #E0E0E0;
			padding-bottom: 18rpx;
			margin-bottom: 60rpx;
			input{
				font-size: 32rpx;
			}
		}
	}
	.btn{
		width: 686rpx;
		line-height: 88rpx;
		margin: 198rpx auto 30rpx auto;
		text-align: center;
		background-color: #1989FA;
		color: #ffffff;
		font-size: 32rpx;
		border-radius: 4rpx;
		
	}
	.forgetBtn{
		color: #1989FA;
		font-size: 28rpx;
		text-align: right;
	}
</style>
