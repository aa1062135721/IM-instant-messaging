<template>
	<view class="changeTel">
		<view class="inputBox">
				<!-- <view class="">请填写绑定是手机获取验证码</view> -->
			<view class="inputItem">
			
				<view class="inputTxt">+86</view>
				<input disabled="" type="number" maxlength="11" value="" v-model="phone" placeholder="请输入当前绑定的手机号"/>
			</view>
			<view class="inputItem">
				<view class="inputTxt">验证码</view>
				<input v-model="smsCode" type="text" value="" placeholder="请输入验证码"/>
				<view class="codeBtnBox">
					<view class="codeBtn" v-if="show" @click="getCode">
						获取验证码
					</view>
					<view class="codeBtn codeBtn2" v-if="!show">重新发送[{{count}}]</view>
				</view>
			</view>
		</view>
		<view class="btn" @click="toSubmit">
			确定
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				smsCode:'',//验证码
				show:true,//是否出现发送验证码倒计时
				count:'',//发送验证码倒计时
			}
		},
		onLoad() {
		this.getPhone()
		},
		methods: {
			getPhone(){
				this.$request('/user/getInfo',{},"GET").then(res => {
						// console.log(res) 
						this.phone=res.phone
				});
			},
			// 发送验证码
			getCode(){
				if(!this.phone){//判断是否输手机号
					uni.showToast({
						title: '请输入手机号',
						icon:"none",
						duration: 2000
					});
					return
				}
				this.$request('/user/getSmscode',{
						type: 3,
						phone: this.phone
					},'GET').then(res => {
						const TIME_COUNT = 60;//倒计时初始时间60s
					  if (!this.timer) {
					  this.count = TIME_COUNT;
					  this.show = false;
					  this.timer = setInterval(() => {
					  if (this.count > 0 && this.count <= TIME_COUNT) {
						  this.count--;
						  } else {
						  this.show = true;
						  clearInterval(this.timer);//清除计时器
						  this.timer = null;
						  }
					  }, 1000)
					}
				})
			},
			// 提交
			toSubmit() {
				if(!this.phone){//判断是否输手机号
					uni.showToast({
						title: '请输入手机号',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(!this.smsCode){//判断是否输验证码
					uni.showToast({
						title: '请输入验证码',
						icon:"none",
						duration: 2000
					});
					return
				}
				
				
				// 验证当前
				// this.$request('/user/verifyPhone',{
				// 		phone: this.phone,
				// 		smsCode:this.smsCode
				// 	}).
				
				
				uni.navigateTo({
					url:'./determinechangetel'
				})
				// this.$request('/user/restPhone',{ 
				// 		phone: this.phone,
				// 		smsCode:this.smsCode
				// 	}).then(res => {
				// 		uni.showToast({
				// 			title: '修改成功',
				// 			duration: 2000
				// 		});
				// 		setTimeout(()=>{
				// 			uni.navigateBack({
				// 				delta:1
				// 			})
				// 		},2000)
				// });
			}
		}
	}
</script>

<style scoped lang="scss">
page {
	height: 100%;
	background: #F9F9F9;
	.inputBox{
		.inputItem{
			height: 96rpx;
			display: flex;
			align-items: center;
			font-size: 32rpx;
			border-top: 2rpx solid #E0E0E0;
			padding: 0 32rpx;
			background-color: #ffffff;
			.inputTxt{
				color: #2F80ED;
				font-size: 32rpx;
			}
			input{
				margin-left: 30rpx;
				font-size: 30rpx;
				border-left: 1rpx solid #BDBDBD;
				padding-left: 16rpx;
				width: 350rpx;
			}
			.codeBtnBox{
				margin-left: auto;
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
}
</style>
