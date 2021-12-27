<template>
	<view class="chat">
		<view class="main">
			<view class="group-member " v-if="!info.groupID">
				<view class="group-info">
					<view class="single" style="border-bottom: none">
						<text class="left-title">群组成员</text>
						<view class="right">
							<text>{{groupInfo.memberCount}}</text>
							<image src="/static/lqImg/right-arrow.png"></image>
						</view>
					</view>					
				</view>
				<view class="member-info">
					<view class="single" v-for="(item, index) in memberList" :key="index" @click="seeDetail(item)">
						<image v-if="item.avatar" :src="item.avatar" mode="aspectFill"></image>
						<image v-else src="/static/lqImg/defaultAvatar.png"></image>
						<text class="text">{{item.nick || item.userID}}</text>
					</view>
				</view>
			</view>
			<view class="group-info" v-else>
				<view class="single_title">
					<text class="left-title">
						群头像
					</text>
					<view class="right">
						<image v-if="searchGroupInfo.avatar" :src="searchGroupInfo.avatar" mode="aspectFill"></image>
						<image v-else src="/static/lqImg/defaultAvatar.png"></image>
					</view>
				</view>
				<view class="single">
					<text class="left-title">群聊名称</text>
					<view class="right">
						<text>{{searchGroupInfo.name}}</text>
					</view>
				</view>
				<view class="single">
					<text class="left-title">群组人数</text>
					<view class="right">
						<text>{{searchGroupInfo.memberCount}}</text>
					</view>
				</view>
				<view style="height: 16rpx; background-color: #F9F9F9;"></view>
			</view>
			<!-- <view class="product">
				<u-cell-group>
					<u-cell-item bg-color="#F9F9F9" title="产品服务" value="查看更多" :title-style="{color: '#222222', fontSize: '32rpx'}" :value-style="{color: '#999999', fontSize: '24rpx'}"></u-cell-item>
				</u-cell-group>
				<view class="card">
					<view class="card-single">
						<text class="time">09-28</text>
						<view class="card-text">
							<view class="text-info">
								<view class="text-title">
									<text>2021年度渝商评选 参选人物系列</text>
								</view>
								<view class="introduce">
									<text>团总经理李奇当选副会长</text>
								</view>
							</view>
						</view>
					</view>
					<view class="card-single">
						<text class="time">09-28</text>
						<view class="card-text">
							<image src="https://img1.baidu.com/it/u=2810831878,1188946892&fm=26&fmt=auto"></image>
							<view class="text-info">
								<view class="text-title">
									<text>2021年度渝商评选 参选人物系列</text>
								</view>
								<view class="introduce">
									<text>团总经理李奇当选副会长</text>
								</view>
							</view>
						</view>
					</view>
					<view class="card-single">
						<text class="time">09-28</text>
						<view class="card-text">
							<image src="https://img1.baidu.com/it/u=2810831878,1188946892&fm=26&fmt=auto"></image>
							<view class="text-info">
								<view class="text-title">
									<text>2021年度渝商评选 参选人物系列</text>
								</view>
								<view class="introduce">
									<text>团总经理李奇当选副会长</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view> -->
			<view class="group-info" v-if="!info.groupID">
				<view class="single" style="background-color: #F9F9F9;">
					<text class="left-title">群组信息</text>
				</view>
				<view class="single" @click="goPage('changeName')">
					<text class="left-title">群聊名称</text>
					<view class="right">
						<text>{{groupInfo.name}}</text>
						<image src="/static/lqImg/right-arrow.png"></image>
					</view>
				</view>
				<view class="single" @click="goPage('groupCode')">
					<text class="left-title">群二维码</text>
					<view class="right">
						<image style="width: 35rpx; height: 35rpx;" src="/static/lqImg/qrCode.png"></image>
						<image src="/static/lqImg/right-arrow.png"></image>
					</view>
				</view>
				<view class="single" @click="goPage('groupNickName')">
					<text class="left-title">群内昵称</text>
					<view class="right">
						<text v-if="groupInfo.selfInfo" >{{groupInfo.selfInfo.nameCard}}</text>
						<image src="/static/lqImg/right-arrow.png"></image>
					</view>
				</view>
				<view class="single" v-if="myInfo.userID === groupInfo.ownerID" @click="addMember">
					<text class="left-title">添加群成员</text>
					<view class="right">
						<text v-if="groupInfo.selfInfo" >{{groupInfo.selfInfo.nameCard}}</text>
						<image style="width: 50rpx; height: 50rpx;" src="/static/lqImg/icon_add_group.png"></image>
					</view>
				</view>
				<view style="height: 16rpx; background-color: #F9F9F9;"></view>
				<!-- <view class="single" @click="show = true">
					<text class="left-title">清空聊天记录</text>
					<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
				</view> -->
			</view>
			
			<view class="btn" v-if="!info.groupID">
				<u-button @click="sendMessage" class="u-btn" :ripple="true" :custom-style="{height: '96rpx', lineHeight: '96rpx'}" type="primary" >发消息</u-button>
				<u-button @click="loginOut" class="u-btn" :ripple="true" :hair-line="false" :custom-style="{color: '#222222', height: '96rpx', lineHeight: '96rpx'}">退出群聊</u-button>
			</view>
			<view class="btn" v-else>
				<u-button v-if="isAdd" class="u-btn" :ripple="true" :custom-style="{height: '96rpx', lineHeight: '96rpx'}" >等待验证</u-button>
				<u-button v-else @click="jojnGroup" class="u-btn" :ripple="true" :custom-style="{height: '96rpx', lineHeight: '96rpx'}" type="primary" >加入群聊</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data () {
			return {
				show: false,
				actionSheetList: [
					{
						text: '确定'
					}
				],
				memberList: [],
				groupInfo: {},
				info: {},
				searchGroupInfo: {},
				isAdd: false
			}
		},
		
		onLoad(options) {
			this.info = options
			console.log(this.info, 8888)
		},
		
		onShow() {
			if (this.info.groupID) {
				this.searchGroupByID()
			} else {
				this.getGroupProfile()
				this.getGroupMemberList()
			}
		},
		
		computed: {
			...mapGetters(['myInfo'])
		},
		
		methods: {
			goPage (url) {
				uni.navigateTo({
					url: `/pages/ly-lq/chat/${url}`
				})
			},
			
			// 查看群成员详情资料
			seeDetail (item) {
				uni.navigateTo({
					url: `/pages/ly-lq/chat/friendMessage?userID=${item.userID}`
				})
			},
			
			// 邀请群成员
			addMember () {
				uni.navigateTo({
					url: `/pages/ly-lq/chooseFriend/chooseFriend?addMember=${this.$store.getters.toAccount}`
				})
			},
			
			// 发送消息
			sendMessage() {
				this.$store.dispatch('checkoutConversation',  'GROUP'+this.$store.getters.toAccount)
			},
			
			// 加入群聊
			jojnGroup() {
				wx.$app.joinGroup({ groupID: this.info.groupID, type: this.TIM.TYPES.GRP_PUBLIC }).then((imResponse) => {
				  switch (imResponse.data.status) {
				    case this.TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL: // 等待管理员同意
				      break;
				    case this.TIM.TYPES.JOIN_STATUS_SUCCESS: // 加群成功
				      break;
				    case this.TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP: // 已经在群中
				      break;
				    default:
				      break;
				  }
				  console.log(imResponse, 77)
				  if (imResponse.data.status == this.TIM.TYPES.JOIN_STATUS_SUCCESS) {
					  setTimeout(_ => {
					  	uni.navigateTo({
					  		url: '/pages/ly-lq/mailList/myGroup',
					  		fail(err) {
					  			console.log(err)
					  		}
					  	})
					  }, 300)
				  } else if (imResponse.data.status == this.TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL) {
					  uni.showToast({
					  	title: '发送成功，等待管理员同意',
					  	icon: 'none'
					  })
					  this.isAdd = true
				  } else if (imResponse.data.status == this.TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP) {
					  uni.showToast({
					  	title: '你已经在群中',
					  	icon: 'none'
					  })
				  }
				}).catch((imError) => {
					uni.showToast({
						title: imError.message,
						icon: 'none'
					})
				  console.warn('joinGroup error:', imError); // 申请加群失败的相关信息
				});
			},
			
			// 退出群聊
			loginOut() {
				wx.$app.quitGroup(this.$store.getters.toAccount).then((res) => {
				  if (res.code) return
				  uni.showToast({
				  	title: '退出成功'
				  })
				  setTimeout(_ => {
					  uni.switchTab({
					  	url: '/pages/ly-lq/home/home'
					  })
				  }, 800)
				}).catch((err) => {
					uni.showToast({
						title: err.message,
						icon: 'none'
					})
				});
			},
			
			
			// 搜索群聊
			searchGroupByID () {
				wx.$app.searchGroupByID(this.info.groupID).then((imResponse) => {
				  this.searchGroupInfo = imResponse.data.group
				  console.log(this.searchGroupInfo, 525252)
				}).catch(function(imError) {
				  console.warn('searchGroupByID error:', imError); // 搜素群组失败的相关信息
				});				
			},
			
			getGroupProfile () {
				let groupId = ''
				this.info.groupID ? groupId = this.info.groupID : groupId = this.$store.getters.toAccount
				
				wx.$app.getGroupProfile({ groupID: groupId }).then((res) => {
				  console.log('获取到的群资料', res)
				  this.groupInfo = res.data.group
				}).catch((imError) => {
				  console.warn('getGroupProfile error:', imError); // 获取群详细资料失败的相关信息
				})				
			},
			
			getGroupMemberList() {
				let groupId = ''
				this.info.groupID ? groupId = this.info.groupID : groupId = this.$store.getters.toAccount
				wx.$app.getGroupMemberList({ groupID: groupId, count: 30, offset:0 }).then((res) => {
				  console.log('获取到的群成员资料', res) // 群成员列表
				  this.memberList = res.data.memberList
				  console.log(this.memberList, 55555)
				}).catch((imError) => {
				  console.warn('getGroupMemberList error:', imError)
				})
			},
			
			actionSheetCallback(index) {
				console.log(index)
			}
		}
	}
</script>

<style lang="scss" scoped>	
.chat {
	display: flex;
	flex-direction: column;
	min-height: calc(100vh -44);
	position: relative;
	background-color: #F9F9F9;
	.main {
		.group-member {
			background: #FFFFFF;
			.member-info {
				display: flex;
				align-items: center;
				padding: 32rpx 32rpx 32rpx 32rpx;
				overflow-y: auto;
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
					&:last-child {
						margin-right: 0;
					}
				}
			}
		}
		.product {
			.card {
				.card-single {
					display: flex;
					padding: 30rpx 24rpx 42rpx;
					border-bottom: 1px solid #f4f4f4;
					background: #FFFFFF;
					.time {
						align-self: flex-start;
						margin-right: 46rpx;
						font-size: 28rpx;
						color: #000000;
					}
					.card-text {
						display: flex;
						image {
							width: 80rpx;
							height: 80rpx;
							border-radius: 6rpx;
							margin-right: 12rpx;
						}
						.text-info {
							width: 428rpx;
							line-height:40rpx;
							.text-title {
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								font-size: 28rpx;
								color: #000000;
							}
							.introduce {
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								font-size: 24rpx;
								color: #666666;
							}
						}
					}
				}
			}
		}
		.group-info {
			.single_title {
				padding: 26rpx 38rpx 26rpx 32rpx;
				background-color: #FFFFFF;
				font-size: 32rpx;
				color: #222222;
				.right {
					margin-top: 40rpx;
					image {
						width: 120rpx;
						height: 120rpx;
					}
				}
			}
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
		.btn {
			margin: 10rpx 0 62rpx;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-top: 20%;
			.u-btn {
				width: 90%;
				display: inline-block;
				&:first-child {
					margin-bottom: 22rpx;
				}
			}
		}
	}
}
</style>
