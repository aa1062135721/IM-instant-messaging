<template>
	<view class="sendFriendAsk">
		<view class="single">
			<text class="title">发送添加朋友申请</text>
			<u-input class="input" maxlength="100" v-model="friendInfo.wording" type=textarea :focus="true"></u-input>
		</view>
		<view class="single">
			<text class="title">设置备注</text>
			<u-input class="input" maxlength="100" v-model="friendInfo.remark" type=textarea></u-input>
		</view>
		<view class="btn">
			<u-button type="primary" @click="sendAsk">发送</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				friendInfo: {
					wording: '你好，我是',
					remark: ''
				},
				info: {}
			}
		},
		
		onLoad(option) {
			console.log(option, 'option')
			this.info = option
			if (this.info.nick) this.friendInfo.wording += this.info.nick
			option.source ? this.info.source = option.source : this.info.source = 'hunt' 
		},
		
		methods: {
			sendAsk () {
				wx.$app.addFriend({
				  to: this.info.userID,
				  source: `AddSource_Type_${this.info.source}`,
				  remark: this.friendInfo.remark,
				  wording: this.friendInfo.wording
				}).then((res) => {
					console.log(res, 5554444)
					const { code } = res.data
				  // 添加好友的请求发送成功
					if (code === 30539) {
						// 30539 说明 user1 设置了【需要经过自己确认对方才能添加自己为好友】，此时 SDK 会触发 TIM.EVENT.FRIEND_APPLICATION_LIST_UPDATED 事件
					} else if (code === 0) {
						// 0 说明 user1 设置了【允许任何人添加自己为好友】，此时 SDK 会触发 TIM.EVENT.FRIEND_LIST_UPDATED 事件
					}
					uni.showToast({
						title: '发送成功',
						icon: 'none'
					})
					setTimeout(() =>{
						uni.navigateBack()
					}, 800)
				}).catch((imError) => {
				  console.warn('addFriend error:', imError); // 添加好友失败的相关信息
				  if (imError.code === 30525) {
					  console.log(imError)
					  uni.showToast({
					  	title: '抱歉，你在对方的黑名单中，不允许加好友',
						icon:'none'
					  })
				  } else if (imError.code === 30515) {
					  uni.showToast({
					  	title: '抱歉，对方在你的黑名单中，不允许加好友',
					  	icon:'none'
					  })
				  } else {
					  uni.showToast({
					  	title: '已是好友关系哦',
					  	icon: 'none'
					  })					  
				  }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sendFriendAsk {
		border-top: 1rpx solid #f7f7f7;
		min-height: 100vh;
		background: #FFFFFF;
		padding: 28rpx 32rpx;
		box-sizing: border-box;
		.single {
			margin-bottom: 40rpx;
			.title {
				color: #828282;
				font-size: 32rpx;
			}
			.input {
				margin-top: 12rpx;
				background-color: #f7f7f7;
				/deep/ .uni-textarea-textarea {
					padding-left: 20rpx;
				}
				/deep/ .uni-textarea-placeholder {
					margin-left: 20rpx;
				}
			}
		}
		.btn {
			margin-top: 144rpx;
		}
	}
</style>
