<template>
	<view class="mail-list">
		<view class="search">
			<u-search search-icon="/static/lqImg/search.png" placeholder="搜索" v-model="search" :show-action="false" search-icon-color="#BDBDBD" placeholder-color="#BDBDBD"></u-search>
		</view>
		<view class="main">
			<view class="tab">
				<u-tabs active-color='#1989FA' font-size="32" bar-width="80" :bold="false" :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
			</view>
			<view class="addTime">
				<view class="single" v-if="applicationList.inThreeDays.length && unreadCount">
					<view class="title">近三天</view>
					<view class="item" v-for="(item, index) in applicationList.inThreeDays" :key="index" v-if="item.type === 'Pendency_Type_ComeIn' ">
						<view class="left">
							<image :src="item.avatar"></image>
							<view>
								<view class="user-name">
									{{item.nick || item.userID}}
								</view>
								<view class="user-remarks">
									{{item.wording}}
								</view>
							</view>
						</view>
						<view class="right" @click="acceptFriendApplication(item)">
							<text class="agree" >同意</text>
						</view>
					</view>
				</view>
				<view class="single" v-if="applicationList.threeDaysAgo.length && unreadCount">
					<view class="title">三天前</view>
					<view class="item" v-for="(item, index) in applicationList.threeDaysAgo" :key="index"  v-if="item.type === 'Pendency_Type_ComeIn' ">
						<view class="left">
							<image :src="item.avatar" mode="aspectFill"></image>
							<view>
								<view class="user-name">
									{{item.nick || item.userID}}
								</view>
								<view class="user-remarks">
									{{item.wording}}
								</view>
							</view>
						</view>
						<view class="right">
							<text class="agree">同意</text>
						</view>
					</view>
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
				list: [
					{
						name: '好友申请'
					}
				],
				applicationList: {
					inThreeDays: [], // 三天内的申请列表
					threeDaysAgo: [] // 三天以前的申请列表
				},
				current: 0
			}
		},	
		
		computed: {
			...mapState({
				unreadCount: state => state.conversation.unreadCount,
				friendApplicationList: state => state.conversation.friendApplicationList,
			})
		},
		
		created () {
			this.getFriendApplicationList()
			console.log('vuex存储的数据', this.friendApplicationList, 66)
		},
		
		methods: {
			change(index) {
				this.current = index;
			},
			
			getFriendApplicationList() {
				// console.log(this.dayjs('2018-06-08').diff(this.dayjs('2017-06-01'),'day'))
				wx.$app.getFriendApplicationList().then((res) => {
					console.log(res)
					let data = res.data.friendApplicationList;
					this.applicationList.inThreeDays = data.filter(res => this.callTime(res.time) <= 3)
					this.applicationList.threeDaysAgo = data.filter(res => this.callTime(res.time) > 3)
				}).catch((imError) => {
				  console.warn('getFriendApplicationList error:', imError); // 获取好友申请列表失败的相关信息
				});				
			},
			
			callTime (time) {
				let ago = this.dayjs(time*1000).format('YYYY-MM-DD')
				let now = this.dayjs(new Date()).format('YYYY-MM-DD')
				let day = this.dayjs(ago).diff(this.dayjs(now), 'day')
				return day
			},
			
			acceptFriendApplication(item) {
				wx.$app.acceptFriendApplication({
				  userID: item.userID,
				  remark: item.nick,
				  type: this.TIM.TYPES.SNS_APPLICATION_AGREE_AND_ADD
				}).then((res) => {
					console.log(res)
					uni.showToast({
						title:'添加成功',
						icon: 'none'
					})
					this.getFriendApplicationList()
				  // 同意好友成功后，SDK 会触发 TIM.EVENT.FRIEND_APPLICATION_LIST_UPDATED 事件
				}).catch((imError) => {
				  console.warn('acceptFriendApplication error:', imError);
				});				
			}
		}
	}
</script>

<style lang="scss" scoped>
.mail-list {
	.nav {
		border-bottom: 1px solid #f7f7f7;
	}
	.search {
		margin: 0 auto;
		width: 90%;
		margin-top: 32rpx;
	}
	.main {
		margin-top: 30rpx;
		.tab {
			padding-bottom: 12rpx;
		}
		.addTime {
			.single {
				.title {
					background-color: #F9F9F9;
					padding: 20rpx 32rpx;
					color: #4F4F4F;
					box-sizing: border-box;
				}
				.item {
					padding: 20rpx 32rpx;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: space-between;
					image {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						margin-right: 26rpx;
					}
					.left {
						display: flex;
						align-items: center;
						view {
							line-height: 40rpx;
						}
						.user-name {
							color: #333333;
							font-size: 32rpx;
						}
						.user-remarks {
							font-size: 24rpx;
							color: #828282;
						}
					}
					.right {
						.agree {
							background-color: #1989FA;
							color: #FFFFFF;
							font-size: 26rpx;
							padding: 0 16rpx;
							display: inline-block;
						}
						.added {
							color: #ED6A0C;
							font-size: 28rpx;
						}
					}
				}
			}
		}
	}
}
</style>
