<template>
	<view class="chat">
		<view class="main" v-if="personalData && personalData.length">
			<view class="group-member">
				<view class="member-info">
					<view class="single">
						<image v-if="personalData[0].profile.avatar" :src="personalData[0].profile.avatar" mode="aspectFill"></image>
						<image v-else src="/static/lqImg/defaultAvatar.png"></image>
						<text class="text">{{personalData[0].profile.nick || personalData[0].userID}}</text>
					</view>
				</view>
			</view>
			<view class="group-info">
				<view class="single" @click="goPage('firendRemarks')">
					<text class="left-title">设置备注</text>
					<view class="right">
						<text>{{personalData[0].remark}}</text>
						<image src="/static/lqImg/right-arrow.png"></image>
					</view>
				</view>
				<view style="height: 16rpx; background-color: #F9F9F9;"></view>
				<!-- <view class="single"  @click="show = true">
					<text class="left-title">清空聊天记录</text>
					<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
					<view class="right">
						<image src="/static/lqImg/right-arrow.png"></image>
					</view>
				</view> -->
				<view class="single">
					<text class="left-title">加入黑名单</text>
					<view class="right">
						<u-switch @change="isAddBlack" v-model="addBlack" size="40" inactiveColor="#C8C9CC"></u-switch>
					</view>
				</view>
			</view>
		</view>
		<view class="main" v-if="failureUserIDList && failureUserIDList.length">
			<view class="group-member">
				<view class="member-info">
					<view class="single">
						<image v-if="failureUserIDList[0].avatar" :src="failureUserIDList[0].avatar" ></image>
						<image v-else src="/static/lqImg/defaultAvatar.png"></image>
						<text class="text">{{failureUserIDList[0].nick || failureUserIDList[0].userID}}</text>
					</view>
				</view>
			</view>
			<view class="group-info" v-if="myInfo.userID !== info.userID && personalData.length">
				<view style="height: 16rpx; background-color: #F9F9F9;"></view>
				<view class="single">
					<text class="left-title">加入黑名单</text>
					<view class="right">
						<u-switch @change="isAddBlack" v-model="addBlack" size="40" inactiveColor="#C8C9CC"></u-switch>
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<u-button @click="sendMessage" v-if="personalData && personalData.length" :ripple="true" :custom-style="{height: '96rpx'}" type="primary" >发消息</u-button>
			<u-button @click="addFriend" v-if="info.userID !== myInfo.userID && failureUserIDList.length && relation === 'CheckResult_Type_NoRelation'" :ripple="true" :custom-style="{height: '96rpx'}" type="primary" >添加好友</u-button>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data () {
			return {
				info: {},
				value: 50,
				addBlack: false,
				show: false,
				actionSheetList: [
					{
						text: '确定'
					}
				],
				personalData: [],  // 个人资料
				failureUserIDList: [], // 非好友关系
				otherUserID: '',
				relation: ''
			}
		},
		
		created() {
			this.getFriendProfile()
		},
		
		onLoad(option) {
			console.log(123)
			this.info = option
			this.checkFriend()
			if(option.isUsers && option.isUsers == 2){
				uni.setNavigationBarTitle({
				　　title: '用户信息'
				})
			}else{
				uni.setNavigationBarTitle({
				　　title: '好友信息'
				})
			}
			
		},
		
		computed: {
			...mapState({
				myInfo: state => state.user.myInfo
			})
		},
		
		methods: {
			checkFriend () {
				wx.$app.checkFriend({
				  userIDList: [this.info.userID],
				  type: this.TIM.TYPES.SNS_CHECK_TYPE_BOTH,
				}).then((res) => {
				  const { successUserIDList, failureUserIDList } = res.data;
				  // 校验成功的 userIDList
				  successUserIDList.forEach((item) => {
					const { userID, code, relation } = item; // 此时 code 始终为0
					this.relation = relation
					console.log('关系', this.relation)
					
					// 单向校验好友关系时可能的结果有：
					// - relation: TIM.TYPES.SNS_TYPE_NO_RELATION A 的好友表中没有 B，但无法确定 B 的好友表中是否有 A
					// - relation: TIM.TYPES.SNS_TYPE_A_WITH_B A 的好友表中有 B，但无法确定 B 的好友表中是否有 A
					// 双向校验好友关系时可能的结果有：
					// - relation: TIM.TYPES.SNS_TYPE_NO_RELATION A 的好友表中没有 B，B 的好友表中也没有 A
					// - relation: TIM.TYPES.SNS_TYPE_A_WITH_B A 的好友表中有 B，但 B 的好友表中没有 A
					// - relation: TIM.TYPES.SNS_TYPE_B_WITH_A A 的好友表中没有 B，但 B 的好友表中有 A
					// - relation: TIM.TYPES.SNS_TYPE_BOTH_WAY A 的好友表中有 B，B 的好友表中也有 A
				  });
				  // 校验失败的 userIDList
				  failureUserIDList.forEach((item) => {
					const { userID, code, message } = item;
				  });
				}).catch(function(imError) {
				  console.warn('checkFriend error:', imError);
				});				
			},
			
			actionSheetCallback(index) {
				let id = 'C2C' + this.info.userID
				wx.$app.deleteConversation(id).then((res) => {
					if (res.code) return
					uni.showToast({
						title: '删除成功'
					})
					setTimeout(_ => {
						uni.switchTab({
							url:'/pages/ly-lq/home/home'
						})
					}, 800)
				  const { conversationID } = res.data; // 被删除的会话 ID
				}).catch((imError) => {
				  console.warn('deleteConversation error:', imError); // 删除会话失败的相关信息
				});
			},
			
			// 获取用户详细资料 
			getFriendProfile () {
				wx.$app.getFriendProfile({
				  userIDList: [this.info.userID] // 请注意：即使只拉取一个用户的资料，也需要用数组类型，例如：userIDList: ['user1']
				}).then(res => {
					console.log(res, 5555)
					if (res.code) return
					this.personalData = res.data.friendList
					let data = res.data.failureUserIDList
					if (data && data.length && data[0].code === 2700) {
						this.otherUserID = data[0].userID
						wx.$app.getUserProfile({ userIDList: [data[0].userID] }).then((res) => {
						  this.failureUserIDList = res.data
						  this.addBlack = true
						}).catch((imError) => {
						  console.warn('getUserProfile error:', imError); // 获取其他用户资料失败的相关信息
						});
					}
				}).catch(function(imError) {
				  console.warn('获取用户资料失败:', imError); // 获取其他用户资料失败的相关信息
				})
			},
			
			// 是否拉黑用户
			isAddBlack(e) {
				if (e) {
					wx.$app.addToBlacklist({userIDList: [this.info.userID] }).then((imResponse) => {
					  console.log(imResponse)
					}).catch((imError) => {
					  console.warn('addToBlacklist error:', imError); // 添加用户到黑名单列表失败的相关信息
					});
				} else {
					wx.$app.removeFromBlacklist({userIDList: [this.info.userID] }).then(function(imResponse) {
					  console.log(imResponse.data); // 从黑名单中成功移除的账号列表，结构为包含用户 userID 的数组 - [userID]
					}).catch((imError) => {
					  console.warn('removeFromBlacklist error:', imError); // 将用户从黑名单中移除失败的相关信息
					});
				}
			},
			
			//  加为好友
			addFriend() {
				this.isAddBlack()
				uni.navigateTo({
					url: `/pages/ly-lq/addFriend/sendFriendAsk?userID=${this.otherUserID}&nick=${this.myInfo.nick || this.myInfo.userID}`
				})
			},
			
			// 发送消息
			sendMessage () {
				this.$store.dispatch('checkoutConversation',  'C2C'+this.personalData[0].userID)
			},
			
			goPage (url) {
				uni.navigateTo({
					url: `/pages/ly-lq/chat/${url}?userID=${this.info.userID}&remark=${this.personalData[0].remark}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>	
.chat {
	min-height: calc(100vh - 42rpx);
	position: relative;
	background-color: #F9F9F9;
	.main {
		.group-member {
			padding-top: 28rpx;
			background-color: #FFFFFF;
			.member-info {
				display: flex;
				align-items: center;
				padding: 0 32rpx 32rpx 32rpx;
				.single {
					display: flex;
					flex-direction: column;
					margin-right: 22rpx;
					image {
						width: 112rpx;
						height: 112rpx;
						border-radius: 4rpx;
						margin-bottom: 12rpx;
					}
					.text {
						font-size: 24rpx;
						width: 112rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						text-align: center;
					}
				}
			}
		}
		.group-info {
			.single {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 26rpx 38rpx 26rpx 32rpx;
				background-color: #FFFFFF;
				border-bottom: 1px solid #F7F7F7;
				.left-title {
					font-size: 32rpx;
					color: #222222;
				}
				.right {
					display: flex;
					align-items: center;
					justify-content: right;
					image {
						width: 20rpx;
						height: 22rpx;
						margin-left: 24rpx;
					}
				}				
			}
		}
	}
	.btn {
		width: 100%;
		padding: 20rpx 40rpx 40rpx;
		box-sizing: border-box;
		position: absolute;
		bottom: 80rpx;
	}
}
</style>
