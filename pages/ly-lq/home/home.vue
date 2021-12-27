<template>
	<view class="home">
		<view class="topBox"></view>
		<view class="menu">
			<view class="nav">
				<view></view>
				<view class="nav_center">
					<text>消息</text>
				</view>
				<view class="nav_right">
					<!-- <image @click="goMail" src="/static/lqImg/mail-list.png"></image> -->
					<view @click="goMail" class="nav_right_text">通讯录</view>
					<image @click="showMenu=true" src="/static/lqImg/icon_more.png"></image>
				</view>
			</view>			  
		</view>
		<!-- 顶部占位空盒子 -->
		<view class="" style="height: var(--status-bar-height);margin-bottom: 88rpx;"></view>
		<view class="search">
			<u-mask duration="0" :show="showMenu" @click="showMenu = false"  :custom-style="{background: 'rgba(0, 0, 0, 0)'}"></u-mask>
			<view class="option-menu" v-if="showMenu">
				<view class="option-item" @click="sendGroupChat">
					<image src="/static/lqImg/icon_ql.png"></image>
					<text>发起群聊</text>
				</view>
				<view class="option-item" @click="addFriend">
					<image src="/static/lqImg/icon_tjhy.png"></image>
					<text>添加朋友</text>
				</view>
				<view class="option-item" @click="saoys">
					<image src="/static/lqImg/icon_sys.png"></image>
					<text>扫一扫</text>
				</view>
			</view>
		</view>
		<!-- <view class="top">
			<u-search search-icon="/static/lqImg/search.png" placeholder="搜索" v-model="search" :show-action="false" search-icon-color="#BDBDBD" placeholder-color="#BDBDBD"></u-search>
		</view> -->
		<view class="content">
			<view class="chatItme" v-for="(item,index) in allConversation">
				<view class="personal" v-if="item.type === 'C2C'">
					<view class="single"  @click="checkoutConversation(item, item.userProfile.nick || item.userProfile.userID)">
						<view class="left">
							<view class="header">
								<image v-if="item.userProfile.avatar" :src="item.userProfile.avatar" mode="aspectFill"></image>
								<image v-else src="/static/lqImg/defaultAvatar.png" mode=""></image>
							</view>
							<view class="center">
								<view class="user">{{item.remark || item.userProfile.nick || item.toAccount}}</view>
								<view class="userText">{{item.lastMessage.messageForShow}}</view>
							</view>
						</view>
						<view class="right">
							<text>{{item.lastMessage.lastMessageTime}}</text>
							<view class="noRead" v-if="item.unreadCount">
								<text>
									{{ item.unreadCount > 99 ? '99+' : item.unreadCount}}
								</text>
							</view>
						</view>
					</view>				
				</view>
				<view class="personal" v-if="item.type === 'GROUP'">
					<view class="single"  @click="checkoutConversation(item, item.groupProfile.name || item.groupProfile.ID)">
						<view class="left">
							<view class="header">
								<view v-if="item.groupProfile.avatar && item.groupProfile.avatar !== 'FaceUrl'" >
									<image :src="item.groupProfile.avatar" mode="aspectFill"></image>
								</view>
								<image v-else src="/static/lqImg/defaultAvatar.png" mode="aspectFill"></image>
							</view>
							<view class="center">
								<view class="user">{{item.groupProfile.name || item.groupProfile.groupID}}</view>
								<view class="userText" v-if="!item.lastMessage.isRevoked">
									<template v-if="item.lastMessage.fromAccount === '@TIM#SYSTEM'">{{item.lastMessage.messageForShow}}</template>
									<template v-else>{{item.lastMessage.nick || item.lastMessage.fromAccount}}：{{item.lastMessage.messageForShow}}</template>
								</view>
								<view class="userText" v-else>
									<template v-if="myInfo.userID === item.lastMessage.fromAccount">你撤回了一条消息</template>
									<template v-else>{{item.lastMessage.nick || item.lastMessage.fromAccount}}撤回了一条消息</template>
								</view>
							</view>
						</view>
						<view class="right">
							<text>{{item.lastMessage.lastMessageTime}}</text>
							<view class="noRead" v-if="item.unreadCount">
								<text>
									{{ item.unreadCount > 99 ? '99+' : item.unreadCount}}
								</text>
							</view>
						</view>
					</view>				
				</view>
				<view class="personal" v-else-if="item.type === '@TIM#SYSTEM'" >
					<view class="single"  @click="checkoutNotification(item)">
						<view class="left">
							<view class="header">
								<image src="/static/lqImg/system-setting.png" mode=""></image>
							</view>
							<view class="center">
								<view class="user">
									<view class="username">系统通知</view>
								</view>
								<view class="userText">
									<view class="content">点击查看</view>
								</view>
							</view>
						</view>
						<view class="right">
							<text>{{item.lastMessage.lastMessageTime}}</text>
							<view class="noRead" v-if="item.unreadCount">
								<text>
									{{ item.unreadCount > 99 ? '99+' : item.unreadCount}}
								</text>
							</view>
						</view>
					</view>				
				</view>	
			</view>
		</view>
		
	</view>
</template>

<script>
	import { genTestUserSig } from '../../../static/utils/GenerateTestUserSig.js'
	import { throttle } from '../../../utils/index.js'
	import { mapState, mapGetters } from 'vuex'
	export default {
		data() {
			return {
				search: '',
				userIDList: new Array(30).fill().map((item, idx) => ('user' + idx)),
				selectedIndex: 1,
				showMenu: false,
				// conversationList: [],
			}
		},
		computed: {
			...mapState({
				allConversation: state => state.conversation.allConversation,
				isSdkReady: state => state.global.isSdkReady,
				unreadCount: state => state.conversation.unreadCount
			}),
			...mapGetters(['totalUnreadCount', 'myInfo'])
		},
		
		onLoad() {
			this.login()
			if (!this.isSdkReady) {
				uni.showLoading({
					title: '正在同步数据',
					mask: true
				})
			}
			setTimeout(_ => this.handleTime(), 500)
			setTimeout(_ => this.handleTime(), 1000)
		},
		
		onShow() {
			setTimeout(() => {
				const result = this.allConversation.reduce((count, { unreadCount }) =>   count + unreadCount, 0)
				if (result === 0) {
				  uni.removeTabBarBadge({ index: 1 })
				} else {
				  uni.setTabBarBadge({ index: 1, text: result > 99 ? '99+' : String(result) })
				}
			}, 500)
		},
		
		watch: {
			isSdkReady(newVal) {
				if (newVal) {
					uni.hideLoading()
				}
			}
		},
		
		// 下拉刷新
		onPullDownRefresh() {
			this.login()
		},
		
		methods: {
			login() {
				this.$api.to_http('/user/userSig', {}, 'GET').then((res) => {
					if (res.data.code == 200) {
						console.log(res.data.data)
						wx.$app.login({
							userID: res.data.data.userId,
							userSig: res.data.data.userSig
						}).then((res) => {
							setTimeout(_ => this.getGroupList(), 300)
							uni.stopPullDownRefresh()
						}).catch(() => {})
					}
				})
			},
			
			// 发起群聊
			sendGroupChat () {
				this.showMenu = false
				uni.navigateTo({
					url: `/pages/ly-lq/chooseFriend/sendGroupChat`
				})
			},
			
			// 扫一扫
			saoys () {
				this.showMenu = false
				uni.scanCode({
				    success: (res) => {
						let c = JSON.parse(JSON.stringify(res)).result
						let groupId = JSON.parse(c).groupId
						let userId = JSON.parse(c).userId
						console.log(userId)
						if (groupId) {
							uni.navigateTo({
								url: `/pages/ly-lq/chat/groupMessage?groupID=${groupId}`
							})
						} else if (userId){
							uni.navigateTo({
								url: `/pages/ly-lq/addFriend/index?userID=${userId}&source='sys'`
							})
						}
				    }
				});
			},
			 
			 // 添加好友
			addFriend () {
				this.showMenu = false
				uni.navigateTo({
					url:`/pages/ly-lq/addFriend/index?type=1`
				})
			},
			
			goMail() {
				uni.navigateTo({
					url: '/pages/ly-lq/mailList/index'
				})
			},
			
			// 点击某会话
			checkoutConversation(item, name) {
				this.$store.dispatch('checkoutConversation', item.conversationID)
			},
			
			// 将某会话设为已读
			setMessageRead(item) {
				if (item.unreadCount === 0) {
					return
				}
				wx.$app.setMessageRead({
					conversationID: item.conversationID
				})
			},
			
			// 点击系统通知时，处理notification
			checkoutNotification(item) {
				console.log('item', item)
				this.$store.commit('resetCurrentConversation')
				this.$store.commit('resetGroup')
				this.setMessageRead(item)
				wx.$app.getConversationProfile(item.conversationID)
					.then((res) => {
						this.$store.commit('updateCurrentConversation', res.data.conversation)
						this.$store.dispatch('getMessageList')
					})
				uni.navigateTo({
					url: '/pages/ly-lq/home/system'
				})
			},
			
			getGroupList () {
				wx.$app.getGroupList().then((res) => {
				  console.log(res, '加入的群组'); // 群组列表
				}).catch(function(imError) {
				  console.warn('getGroupList error:', imError); // 获取群组列表失败的相关信息
				});
			},
			
			callTime (time) {
				let ago = this.dayjs(time*1000).format('YYYY-MM-DD')
				let now = this.dayjs(new Date()).format('YYYY-MM-DD')
				let day = this.dayjs(ago).diff(this.dayjs(now), 'day')
				return day
			},
			
			handleTime () {
				this.allConversation.map(res => {
					if (this.dayjs(res.lastMessage.lastTime * 1000).format('YYYY') !==  this.dayjs(new Date()).format('YYYY')) {
						this.$set(res.lastMessage, 'lastMessageTime', this.dayjs(res.lastMessage.lastTime * 1000).format('YYYY年MM月DD日'))
					} else if (this.callTime(res.lastMessage.lastTime) == 0 && this.dayjs(new Date()).format('YYYY-MM-DD') == this.dayjs(res.lastMessage.lastTime*1000).format('YYYY-MM-DD')) {
						console.log(res)
						this.$set(res.lastMessage, 'lastMessageTime', this.dayjs(res.lastMessage.lastTime * 1000).format('HH:mm'))
					} else if (this.callTime(res.lastMessage.lastTime) == -1) {
						this.$set(res.lastMessage, 'lastMessageTime', '昨天')
					} else if (this.callTime(res.lastMessage.lastTime) < -1) {
						this.$set(res.lastMessage, 'lastMessageTime', this.dayjs(res.lastMessage.lastTime * 1000).format('MM月DD日'))
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		background-color: #FFFFFF;
		min-height: 100vh !important;
		position: relative;
	}
	.topBox{
		width: 750rpx;
		height: var(--status-bar-height);
		background-color: #ffffff;
	}
	.menu {
		position: fixed;
		top: 0;
		width: 750rpx;
		background-color: #ffffff;
		padding-top: var(--status-bar-height);
		z-index: 9999;
	}
	.nav {
		background-color: rgba(255, 255, 255, 1.0);
		box-sizing: border-box;
		border-bottom: 1px solid #f4f4f4;
		position: relative;
		text-align: right;
		max-height: 88rpx;
		height: 88rpx;
		// padding-top: var(--status-bar-height);
		display: flex;
		justify-content: space-between;
		align-items: center;
		.nav_center {
			/* 标题 */
			font-family: PingFang SC;
			font-style: normal;
			font-weight: 600;
			font-size: 34rpx;
			line-height: 32rpx;
			color: #333333;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.nav_right {
			display: flex;
			justify-content: space-around;
			.nav_right_text{
				margin-right: 20rpx;
				font-size: 24rpx;
				font-weight: bold;
			}
			image {
				width: 40rpx;
				height: 40rpx;
				margin-right: 20rpx;
			}
		}
	}
	
	.search {
		margin: 0 auto;
		width: 90%;
		.nav_right {
			padding: 14rpx 14rpx 14rpx 24rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			image {
				width: 48rpx;
				height: 48rpx;
			}
		}
		.option-menu {
			position: fixed;
			top: 8%;
			right: 1%;
			width: 252rpx;
			background-color: #606060;
			z-index: 99999;
			border-radius: 20rpx;
			padding: 20rpx 0;
			&::after {
				content: '';
				display: inline-block;
				position: absolute;
				top: -20rpx;
				right: 14rpx;
				width: 0;
				height: 0;
				border-left: 18rpx solid transparent;
				border-right: 18rpx solid transparent;
				border-bottom: 25rpx solid #606060;
			}
			.option-item {
				display: flex;
				align-items: center;
				padding: 26rpx 30rpx;
				box-sizing: border-box;
				color: #FFFFFF;
				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 6rpx;
				}
			}
		}
	}
	
	.slot-wrap {
			display: flex;
			align-items: center;
	}
	.top {
		width: 96%;
		margin: 0 auto;
		margin-top: 40rpx;
		image {
			width: 28rpx;
			height: 28rpx;
		}
	}
	.content {
		width: 100%;
		padding: 0 26rpx 10rpx;
		box-sizing: border-box;
		.single {
			padding-top: 20rpx;
			margin-top: 20rpx;
			border-top: 1px solid #f3f3f3;
			border-bottom: 1px solid #f3f3f3;
			width: 100%;
			display: flex;
			justify-content: space-between;
			.left {
				display: flex;
				align-items: center;
				image {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}
				.center {
					margin-left: 26rpx;
					line-height: 50rpx;
					padding-right: 20rpx;
					.user {
						font-size: 32rpx;
						color: #333333;
					}
					.userText {
						max-width: 400rpx;
						font-size: 24rpx;
						color: #828282;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
			.right {
				min-width: 100rpx;
				align-self: flex-start;
				font-size: 24rpx;
				color: #737373;
				text-align: right;
				.noRead {
					text-align: right;
					width: 40rpx;
					height: 40rpx;
					background-color: red;
					color: #FFFFFF;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 10rpx;
					margin-left: 15rpx;
					font-size: 24rpx;
				}
			}
			&:first-child {
				border-top: none;
			}
		}
	}
</style>
