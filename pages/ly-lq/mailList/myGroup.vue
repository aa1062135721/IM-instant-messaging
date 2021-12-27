<template>
	<view class="myGroup">
		<view class="topBox"></view>
		<view class="nav">
			<view class="nav_left" @click="goBack">
				<image src="/static/lqImg/left-arrow.png"></image>
			</view>
			<view class="nav_center">
				<text>群聊</text>
			</view>
			<view class="nav_right">
			</view>
		</view>
		<view class="search">
			<u-search 
			search-icon="/static/lqImg/search.png" 
			placeholder="搜索" 
			v-model="search" 
			:show-action="false" 
			search-icon-color="#BDBDBD" 
			placeholder-color="#BDBDBD"
			@search="searchFriend"
			@change="changeSearchVal"
			></u-search>
		</view>
		<view class="main">
			<view class="single" v-for="(item, index) in groupList" :key="index" @click="checkoutConversation(item, item.name || item.groupID)">
				<view class="left">
					<image  v-if="item.avatar && item.avatar !== 'FaceUrl'" :src="item.avatar"></image>
					<image v-else src="/static/lqImg/defaultAvatar.png"></image>
				</view>
				<view class="right">
					<text>{{item.name}}</text>
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
				groupList: []
			}
		},
		
		computed: {
			...mapState({
				myInfo: state => state.user.myInfo
			})
		},
		
		onShow() {
			this.getGroupList()
		},
		
		onBackPress(e){
			uni.navigateTo({
				url:"/pages/ly-lq/mailList/index"
			})
			// 此处一定要return为true，否则页面不会返回到指定路径
			 return true;
		},
		
		methods: {
			goBack () {
				uni.navigateBack()
			},
			
			getGroupList () {
				wx.$app.getGroupList().then((res) => {
				  this.groupList = res.data.groupList
				  console.log(this.groupList)
				}).catch(function(imError) {
				  console.warn('getGroupList error:', imError); // 获取群组列表失败的相关信息
				})				
			},
			
			// 点击某会话
			checkoutConversation(item, name) {
				this.$store.dispatch('checkoutConversation', 'GROUP' + item.groupID)
				uni.setStorageSync('myGroup', true)
			},
			
			searchFriend () {
				this.groupList = this.groupList.filter(res => res.name.indexOf(this.search) != -1)
			},
			
			// 监听输入框内容
			changeSearchVal(e) {
				if (!e) this.getGroupList()
			}
		}
	}
</script>

<style lang="scss" scoped>
.myGroup {
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
		.single {
			display: flex;
			align-items: center;
			padding: 20rpx 32rpx;
			.left {
				margin-right: 26rpx;
				image {
					width: 80rpx;
					height: 80rpx;
				}
			}
		}
	}
}
</style>
