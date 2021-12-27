<template>
	<view class="container">
		<view v-if="currentMessageList.length === 0">
			<view class="noCentent">
				暂无系统消息
			</view>
		</view>
		<view v-for="message in currentMessageList" :key="message.ID">
			<view v-if="message.payload.operationType === 1" class="card handle">
				<view>
					<view class="time">
						<text>
							{{message.newtime}}
						</text>
					</view>
					<view class="text">
						<view>
							{{message.virtualDom[0].text}}
						</view>
						<view class="choose">
							<u-button type="primary" size="small" :custom-style="{'width': '120rpx', 'fontSize': '26rpx', 'height': '42rpx', 'borderRadius': 'none'}"	 class="button" @click="handleClick(message)">处理</u-button>
						</view>
					</view> 
				</view>
			</view>
			<view class="card" v-else>
				<view class="time">{{message.newtime}}</view>
				<view class="text">
					{{message.virtualDom[0].text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		onUnload() {
			this.$store.commit('resetCurrentConversation')
			this.$store.commit('resetGroup')
		},
		computed: {
			...mapState({
				currentMessageList: state => {
					return [...state.conversation.currentMessageList].reverse()
				}
			})
		},
		onShow() {
			console.log(this.currentMessageList, 888777)
		},
		methods: {
			handleClick(message) {
				console.log(message)
				uni.showActionSheet({
					itemList: ['同意', '拒绝'],
					success: res => {
						const option = {
							handleAction: 'Agree',
							handleMessage: '欢迎进群',
							message
						}
						if (res.tapIndex === 1) {
							option.handleAction = 'Reject'
							option.handleMessage = '拒绝申请'
						}
						wx.$app.handleGroupApplication(option)
							.then(() => {
								uni.showToast({
									title: option.handleAction === 'Agree' ? '已同意申请' : '已拒绝申请'
								})
								this.$store.commit('removeMessage', message)
							}).catch((error) => {
								uni.showToast({
									title: error.message || '处理失败',
									icon: 'none',
									duration: 3000
								})
							})
					}
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
page {
	height: 100%;
}
.container {
	height: 100%;
	background-color: #f7f7f7;
	.noCentent {
		text-align: center;
		padding-top: 40rpx;
		color: #333333;
		font-size: 28rpx;
	}
	.card {
		border-bottom: 1px solid #eeeeee;
		margin-top: 32rpx;
		padding: 0 20rpx;
		.time {
			font-size: 28rpx;
			color: #1989FA;
			margin-bottom: 10rpx;
			.choose {
				font-size: 24rpx;
			}
		}
		.text {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx;
			background-color: #FFFFFF;
			font-size: 26rpx;
			padding: 30rpx 24rpx;
			.choose {
				margin-left: 30rpx;
			}
		}
	}
}
</style>