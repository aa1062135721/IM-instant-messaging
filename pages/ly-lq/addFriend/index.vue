<template>
	<view class="mail-list">
		<view class="topBox"></view>
		<view class="nav">
			<view class="nav_left" @click="goBack">
				<image src="/static/lqImg/left-arrow.png"></image>
			</view>
			<view class="nav_center">
				<text>添加好友</text>
			</view>
			<view class="nav_right">
			</view>
		</view>
		<view class="search" v-show="!data.length && !isShow">
			<u-search 
			search-icon="/static/lqImg/search.png" 
			placeholder="通过手机号搜索用户" 
			v-model="search" 
			:show-action="false" 
			search-icon-color="#BDBDBD" 
			placeholder-color="#BDBDBD"
			@search="searchFriend"
			:focus="true"
			></u-search>
		</view>
		<view class="main">
			<view class="noUser" v-if="isShow">
				<text>该用户不存在</text>
			</view>
			<view class="infoBox" v-if="data.length">
				<view class="info-item">
					<view class="info_left">
						<image v-if="data[0].avatar" :src="data[0].avatar" mode="aspectFill"></image>
						<image v-else src="/static/lqImg/defaultAvatar.png"></image>
					</view>
					<view class="info_right">
						<text class="name">{{data[0].nick}}</text>
						<view class="user_info">
							<text class="userID">账号：{{data[0].userID}}</text>
							<text class="address" v-if="userData.address">地区：{{userData.address}}</text>							
						</view>
					</view>					
				</view>
				<view class="add" @click="addFriend">
					<text>添加好友</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data () {
			return {
				search: '',
				data: [],
				isShow: false,
				info: {}, // 接收父组件的参数
				personalData: {}, // 获取到的个人信息
				userData: {} ,// 获取到的其他用户资料
				source: 'hunt'
			}
		},
		
		created() {
		},
		
		onLoad(options) {
			this.info = options
			this.$api.to_http('/user/getInfo', {}, 'GET').then((res) => {
				if (res.data.code === 200) {
					this.personalData = res.data.data
				}
			})
			if (this.info.source) this.source = this.info.source
		},
		
		onShow () {
			this.getUserInfo()
			if (this.info.userID) {
				wx.$app.getUserProfile({ userIDList: [this.info.userID] }).then((res) => {
					console.log(res); // 存储用户资料的数组 - [Profile]
					if (res.code) return
					if (res.data && !res.data.length) this.isShow = true 
					this.data = res.data
				}).catch((imError) => {
				  console.warn('getUserProfile error:', imError); // 获取其他用户资料失败的相关信息
				});
			}
		},
		
		computed: {
			...mapState({
				myInfo: state => state.user.myInfo
			})
		},
		
		methods: {
			goBack () {
				if (this.data && this.data.length) {
					this.data = []
				} else if (this.isShow) {
					this.isShow = false
				} else if (this.info.type*1 == 1) {
					this.search = ''
					uni.switchTab({
						url: '/pages/ly-lq/home/home'
					})
				} else {
					this.search = ''
					uni.navigateTo({
						url: '/pages/ly-lq/mailList/index'
					})
				}
			},
			
			searchFriend (userID) {
				if (this.myInfo.userID === this.search || this.search === this.personalData.phone) {
					uni.showToast({
						title: '不能添加自己为好友',
						icon: 'none'
					})
					return
				}
				this.$api.to_http(`/user/userInfo/${this.search}`, {}, 'GET').then((res) => {
					if (res.data.code === 500) {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
						return
					}
					this.userData = res.data.data
					wx.$app.getUserProfile({ userIDList: [res.data.data.id] }).then((res) => {
						console.log(res); // 存储用户资料的数组 - [Profile]
						if (res.code) return
						if (res.data && !res.data.length) this.isShow = true 
						this.data = res.data
					}).catch((imError) => {
					  console.warn('getUserProfile error:', imError); // 获取其他用户资料失败的相关信息
					});
				})
				return
			},
			
			getUserInfo () {
				
			},
			
			addFriend () {
				uni.navigateTo({
					url: `/pages/ly-lq/addFriend/sendFriendAsk?userID=${this.data[0].userID}&nick=${this.myInfo.nick}&source=${this.source}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.mail-list {
	.topBox{
		width: 750rpx;
		height: var(--status-bar-height);
		background-color: #ffffff;
	}
	.nav {
		width: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid #f4f4f4;
		margin-bottom: 30rpx;
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
	.search {
		margin: 0 auto;
		width: 90%;
		margin-top: 32rpx;
	}
	.main {
		margin-top: 30rpx;
		.noUser {
			text-align: center;
			color: #828282;
			font-size: 28rpx;
		}
		.info-item {
			display: flex;
			// align-items: center;
			padding: 40rpx 0 72rpx 32rpx;
			background-color: #FFFFFF;
			.info_left {
				margin-right: 12rpx;
				image {
					width: 160rpx;
					height: 160rpx;
					border-radius: 50%;
				}
			}
			.info_right {
				height: 100%;
				display: flex;
				flex-direction: column;
				.name {
					align-self: flex-start;
					font-size: 36rpx;
					color: #222222;
					font-weight: 500;
					margin: 10rpx 0;
				}
				.user_info {
					line-height: 60rpx;
					display: flex;
					flex-direction: column;
					.userID, .address {
						font-size: 28rpx;
						color: #5d5d5d;
					}					
				}
			}
		}
		.add {
			margin-top: 20rpx;
			text-align: center;
			background: #FFFFFF;
			padding: 20rpx 0;
			color: #1989FA;
			font-size: 28rpx;
		}
	}
}
</style>
