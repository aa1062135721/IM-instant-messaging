<template>
	<view class="chat">
		<view class="topBox"></view>
		<view class="nav">
			<view class="nav_left" @click="goBack">
				<image src="/static/lqImg/left-arrow.png"></image>
			</view>
			<view class="nav_center">
				<text>新建标签</text>
			</view>
			<view class="nav_right">
			</view>
		</view>
		<view class="main">
			<view class="add_icon" @click="goPage">
				<image src="/static/lqImg/icon_add.png"></image>
				<text>新建标签</text>
			</view>
			<!-- <view class="single" >
				<text>{{item.name}} ({{item.userIDList.length}})</text>
			</view> -->
			<view class="add-member" v-for="(item, index) in groupList" :key="index">
				<view class="title">
					<view class="left">
						<text>{{item.name}} ({{item.userIDList.length}})</text>
					</view>
					<view class="right" @click="addMember(item)">
						<image src="/static/lqImg/nav_add.png"></image>
						<text>添加成员</text>
					</view>					
				</view>
				<swiperAction btn-width="120" @click="click" :goFlag="goFlag" :name='item.name' :options="options" :show="item1.show" :fatherIndex="index" :index="index1" v-for="(item1, index1) in item.memberList" :key="index1">
					<view class="single">
						<image v-if="item1.avatar" :src="item1.avatar" mode="aspectFill"></image>
						<image v-else src="/static/lqImg/defaultAvatar.png"></image>
						<view>
							<view class="user-name">
								{{item1.remark || item1.nick || item1.userID}}
							</view>
						</view>		
					</view>
				</swiperAction>
			</view>
		</view>
	</view>
</template>

<script>
	import swiperAction from '../components/swiperAction/u-swipe-action.vue'
	export default {
		components:{
			swiperAction
		},
		data () {
			return {
				groupList: [],
				options: [
					{
						text: '删除',
						style: {
							backgroundColor: '#F2F2F2'
						}
					}
				],
				goFlag: false
			}
		},
		
		onShow() {
			this.getFriendGroupList()
			this.goFlag = false
		},
		
		methods: {			
			goPage() {
				uni.navigateTo({
					url: '/pages/ly-lq/mailList/addlabel'
				})
			},
			
			goBack() {
				uni.navigateTo({
					url: '/pages/ly-lq/mailList/index'
				})
			},
			
			getFriendGroupList () {
				wx.$app.getFriendGroupList().then((res)=> {
					if (res.code) return
					this.groupList = res.data
					this.groupList.map(res => {
						if (res.userIDList) {
							this.getUserProfile(res.userIDList, res.name)
						}
					})
					console.log(this.groupList, 666)
				}).catch(function(imError) {
					console.warn('getFriendGroupList error:', imError); // 获取好友分组列表失败的相关信息
				});
			},
			
			addMember (item) {
				this.goFlag = true
				uni.navigateTo({
					url: `/pages/ly-lq/chooseFriend/chooseFriend?name=${item.name}`
				})
			},
			
			click (index, index1, name) {
				wx.$app.removeFromFriendGroup({
				  name: name,
				  userIDList: [this.groupList[index].userIDList[index1]],
				}).then((res) => {
					if (res.code) return
					uni.showToast({
						title: '移除成功'
					})
					this.getFriendGroupList()
				}).catch((imError) => {
				  console.warn('addToFriendGroup error:', imError); // 获取失败
				});
			},
			
			
			
			getUserProfile (list, name) {
				wx.$app.getUserProfile({
				  userIDList: [...list] // 请注意：即使只拉取一个用户的资料，也需要用数组类型，例如：userIDList: ['user1']
				}).then((res) => {
					res.data.map(val => {
						this.$set(val, 'show', false)
					})
					this.groupList.forEach(item => {
						if (name === item.name) {
							this.$set(item, 'memberList', res.data)
						}
					})
				}).catch((imError) => {
				  console.warn('getUserProfile error:', imError); // 获取其他用户资料失败的相关信息
				});				
			}
		}
	}
</script>

<style lang="scss" scoped>	
	.chat {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh- 44);
		position: relative;
		.topBox{
			width: 750rpx;
			height: var(--status-bar-height);
			background-color: #ffffff;
		}
		.nav {
			width: 100%;
			box-sizing: border-box;
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
		}
		.main {
			background: #FFFFFF;
			.add_icon {
				padding: 29rpx 25rpx;
				border-top: 1px solid #f7f7f7;
				border-bottom: 1px solid #f7f7f7;
				display: flex;
				align-items: center;
				color: #222222;
				font-size: 32rpx;
				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 13rpx;
				}
			}
			.add-member {
				.title {
					padding: 29rpx 25rpx;
					border-top: 5px solid #f7f7f7;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.right {
						display: flex;
						align-items: center;
						image {
							width: 40rpx;
							height: 40rpx;
							margin-right: 13rpx;
							margin-top: 4rpx;
						}
					}					
				}
				.single {
					width: 100%;
					display: flex;
					align-items: center;
					padding: 10rpx 20rpx;
					margin-bottom: 10rpx;
					image {
						width: 96rpx;
						height: 96rpx;
						border-radius: 50%;
						margin-right: 20rpx;
					}
				}
			}
		}
	}
</style>
