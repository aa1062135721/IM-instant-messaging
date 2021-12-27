<template>
	<view class="mail-list">
		<view class="topBox"></view>
		<view class="menu">
			<view class="nav">
				<view class="nav_left" @click="goBack">
					<image src="/static/lqImg/left-arrow.png"></image>
				</view>
				<view class="nav_center">
					<text>通讯录</text>
				</view>
				<view class="nav_right">
					<image @click="showMenu = true" src="/static/lqImg/nav_add.png"></image>
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
		<view class="search">
			<u-search @change="changeSearchVal" @search="searchUser" search-icon="/static/lqImg/search.png" placeholder="搜索" v-model="search" :show-action="false" search-icon-color="#BDBDBD" placeholder-color="#BDBDBD"></u-search>
		</view>
		<view class="options">
			<view class="single" @click="goPage('myFriend')">
				<image src="/static/lqImg/myfriend.png"></image>
				<text>我的好友</text>
			</view>
			<view class="single" @click="goPage('friendApplication')">
				<image src="/static/lqImg/apply.png"></image>
				<view class="tag" v-if="unreadCount">{{unreadCount}}</view>
				<text>好友申请</text>
			</view>
			<view class="single" @click="goPage('blacklist')">
				<image src="/static/lqImg/blacklist.png"></image>
				<text>黑名单</text>
			</view>
			<view class="single" @click="goPage('label')">
				<image src="/static/lqImg/label.png"></image>
				<text>标签</text>
			</view>
			<view class="single" @click="goPage('myGroup')">
				<image src="/static/lqImg/icon_group_chat.png"></image>
				<text>群聊</text>
			</view>
		</view>
		<view class="main" v-if="firendList && firendList.length">
			<u-index-list :scrollTop="scrollTop" active-color="#828282" :index-list="indexList">
				<view v-for="(item, index) in firendList" :key="index">
					<u-index-anchor v-show="item.list && item.list.length" :index="item.key" />
					<view class="list-cell" v-for="(item1, index1) in item.list" :key="index1" v-if="item.list" @click="launchChat(item1, item1.nick || item.userID)">
						<image v-if="item1.profile.avatar" :src="item1.profile.avatar" mode="aspectFill"></image>
						<image v-else src="/static/lqImg/defaultAvatar.png"></image>
						<text>
							{{item1.remark || item1.profile.nick || item1.userID}}
						</text>
					</view>
				</view>
			</u-index-list>			
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import Pinyin from 'js-pinyin'
	export default {
		data () {
			return {
				navBarIcon: '/static/img/nav_add.png',
				rightUrl: '',
				search: '',
				scrollTop: 0,
				showMenu: false,
				firendList: [],
				indexList: []
			}
		},
		
		computed: {
			...mapState({
				unreadCount: state => state.conversation.unreadCount
			})
		},
		
		created() {
			this.getFriendList()
		},
		
		onBackPress(e){
			uni.switchTab({
				url: '/pages/ly-lq/home/home'
			})
			// 此处一定要return为true，否则页面不会返回到指定路径
			 return true;
		},
		
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		
		onShow() {
			this.getFriendList()
		},
		
		onHide () {
			this.showMenu = false
		},
		
		onUnload () {
			this.showMenu = false
		},
		
		methods: {
			goBack () {
				uni.switchTab({
					url: '/pages/ly-lq/home/home'
				})
			},
			
			goPage (url) {
				uni.navigateTo({
					url: `/pages/ly-lq/mailList/${url}`
				})
			},
			
			// 搜索联系人
			searchUser() {
				let list = JSON.parse(JSON.stringify(this.firendList))
				list.forEach((res, index) => res.list = res.list.filter(item =>  item.remark.indexOf(this.search) != -1 || item.profile.nick.indexOf(this.search) != -1))
				this.firendList = list
			},
			
			// 监听输入框内容
			changeSearchVal(e) {
				if (!e) this.getFriendList()
			},
			
			// 获取好友列表
			getFriendList () {
				wx.$app.getFriendList().then((res) => {
					if (res.code) return
					if (res.data.length) {
						this.firendList = res.data
						this.firendList.map(res => {
							this.$set(res, 'addSource', res.source.slice(15))
						})
						this.handleFriendList()						
					}
				}).catch(function(imError) {
				  console.warn('getFriendList error:', imError); // 获取好友列表失败的相关信息
				});
			},
			
			handleFriendList () {
				let list = this.firendList
				list = list.sort((pre, next) => Pinyin.getFullChars(pre.remark || pre.profile.nick || pre.userID).localeCompare(Pinyin.getFullChars(next)))
				let letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
				const newArr = []
				let temp = {
					key: '#',
					list: []
				}
				list.map(item => {
					// 取首字母
					const key = Pinyin.getFullChars(item.remark || item.profile.nick || item.userID).charAt(0).toUpperCase()
					const index = newArr.findIndex(subItem => subItem.key === key)
					if (index < 0) {
						if (letter.includes(key)) {
							newArr.push({
								key: key,
								list: [item]
							})							
						} else {
							temp.list.push(item)
						}
					} else {
						newArr[index].list.push(item)
					}
				})
				if(temp.list.length) newArr.push(temp)
				this.firendList = newArr
				this.indexList = this.firendList.map(val => {
					return val.key;
				})
				console.log(this.firendList)
			},
			
			launchChat (item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/ly-lq/chat/friendMessage?userID=${item.userID}`
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
					url:`/pages/ly-lq/addFriend/index`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.mail-list {
	.menu {
		position: fixed;
		top: 0;
		width: 750rpx;
		background-color: #ffffff;
		padding-top: var(--status-bar-height);
		z-index: 9999;
		.nav {
			width: 100%;
			box-sizing: border-box;
			border-bottom: 1px solid #f4f4f4;
			position: relative;
			text-align: right;
			max-height: 88rpx;
			height: 88rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
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
			.nav_left {
				image {
					width: 38rpx;
					height: 38rpx;
					margin-left: 20rpx;
				}
			}
			.nav_right {
				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
			}
		}
	}
	.search {
		border-bottom: 1px solid #f7f7f7;
		margin: 0 auto;
		width: 90%;
		margin-top: 32rpx;
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
	.options {
		padding: 30rpx 0;
		.single {
			padding: 22rpx 32rpx;
			display: flex;
			align-items: center;
			color: #333333;
			font-size: 32rpx;
			position: relative;
			image {
				width: 76rpx;
				height: 76rpx;
				border-radius: 50%;
				margin-right: 26rpx;
			}
			.tag {
				position: absolute;
				top: 15rpx;
				left: 90rpx;
				min-width: 32rpx;
				min-height: 32rpx;
				background: #D40000;
				border-radius: 50%;
				color: #FFFFFF;
				font-size: 24rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
	.main {
		.list-cell {
			display: flex;
			align-items: center;
			padding: 20rpx 32rpx;
			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				margin-right: 32rpx;
			}
		}
		/deep/ .u-index-bar__sidebar {
			top: 52%;
			right: 20rpx;
			color: #828282;
			.u-index-bar__index {
				font-size: 28rpx;
				padding: 4rpx 6rpx;
			}
		}
	}
}
</style>
