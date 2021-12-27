<template>
	<view class="mail-list">
		<view class="search">
			<u-search @change="changeSearchVal" @search="searchUser" search-icon="/static/lqImg/search.png" placeholder="搜索" v-model="search" :show-action="false" search-icon-color="#BDBDBD" placeholder-color="#BDBDBD"></u-search>
		</view>
		<view class="main">
			<u-index-list :scrollTop="scrollTop" active-color="#828282" :index-list="indexList">
				<view v-for="(item, index) in firendList" :key="index">
					<u-index-anchor v-show="item.list && item.list.length"  :index="item.key" :custom-style="{padding: '20rpx', fontSize: '32rpx', background: '#F9F9F9'}" />
					<view class="list-cell" v-for="(item1, index1) in item.list" :key="index1" v-if="item.list">
						<view class="user-info">
							<u-checkbox-group>
								<u-checkbox 
									@change="checkboxChange(item1)" 
									v-model="item1.checked" 
									:name="item.id"
									shape="circle"
								>{{item.name}}</u-checkbox>
								</u-checkbox-group>
							<image v-if="item1.profile.avatar" :src="item1.profile.avatar" mode="aspectFill"></image>
							<image v-else src="/static/lqImg/defaultAvatar.png"></image>
							<view>
								<view class="user-name">
									{{item1.remark || item1.profile.nick || item1.userID}}
								</view>
								<view class="user-company" v-if="item1.company">
									{{item1.company}}
								</view>
							</view>							
						</view>
						<view class="add-info">
							<view class="add-source">
								添加来源：{{item1.addSource.includes('sys') ? '扫一扫' : '搜索'}}
							</view>
							<view class="add-time">
								添加时间：{{dayjs(item1.addTime * 1000).format('YYYY:MM:DD')}}
							</view>
						</view>
					</view>
				</view>
			</u-index-list>			
		</view>
	</view>
</template>

<script>
	import Pinyin from 'js-pinyin'
	export default {
		data () {
			return {
				search: '',
				scrollTop: 0,
				firendList: [],
				info: {},
				indexList: []
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		
		onShow() {
			this.getFriendList()
		},
		
		onLoad(options) {
			this.info = options
		},
		
		onNavigationBarButtonTap(e) {
			let chooseList = []
			this.firendList.map(res => {
				if (res.list) {
					res.list.map(res1 => { if (res1.checked) chooseList.push(res1.userID) })
				}
			})
			if (this.info.type && this.info.type *1 == 1) {
				this.createFriendGroup(chooseList)
				return
			}
			
			// 添加群组成员
			if (this.info.addMember) {
				this.addGroupMember(chooseList)
				return
			}
			this.addToFriendGroup(chooseList)
		},
		
		methods: {
			// 获取好友列表
			getFriendList () {
				wx.$app.getFriendList().then((res) => {
					if (res.code) return
					if (res.data.length) {
						this.firendList = res.data
						this.firendList.map(res => {
							this.$set(res, 'addSource', res.source.slice(15))
							this.$set(res, 'checked', false)
						})
						this.handleFriendList()						
					}
				}).catch(function(imError) {
				  console.warn('getFriendList error:', imError); // 获取好友列表失败的相关信息
				});
			},
			
			// 添加群组成员
			addGroupMember (chooseList) {
				let MemberList = []
				chooseList.map(res => {
					MemberList.push({ Member_Account: res})
				})
				this.$api.to_http('/msg/addGroupMember', {
					GroupId: this.info.addMember,
					MemberList: MemberList
				}, 'POST').then((res) => {
					if (res.data.code === 200 && res.data.data.ErrorCode == 0) {
						uni.showToast({
							title: '添加成功'
						})
						setTimeout(_ => uni.navigateBack(), 300)
					}
				})
			},
			
			// 添加好友到分组
			addToFriendGroup (userList) {
				wx.$app.addToFriendGroup({
				  name: this.info.name,
				  userIDList: [...userList],
				}).then((res) => {
				  console.log(res)
				  uni.showToast({title: '添加成功'})
				  setTimeout(_ => { uni.navigateBack() }, 800)
				  // friendGroup - 好友分组实例
				  // failureUserIDList - 失败的 userID 列表
				  // 添加成功后，SDK 会触发 TIM.EVENT.FRIEND_GROUP_LIST_UPDATED 事件
				}).catch((imError) => {
				  console.warn('addToFriendGroup error:', imError); // 获取失败
				});				
			},
			
			// 新建标签
			createFriendGroup (list) {
				wx.$app.createFriendGroup({
				  name: this.info.name,
				  userIDList: [...list]
				}).then((res) => {
					if (res.code) return 
					uni.showToast({
						title: '新建成功'
					})
					setTimeout(_ => { uni.navigateTo({ url:'/pages/ly-lq/mailList/label' }) }, 800)
				}).catch(function(imError) {
				  console.warn('getFriendGroupInfo error:', imError); // 获取失败
				});
			},
			
			checkboxChange(item) {
				console.log(item)
			},
			
			// 搜索联系人
			searchUser() {
				let list = JSON.parse(JSON.stringify(this.firendList))
				list.forEach((res, index) => res.list = res.list.filter(item =>  item.remark.indexOf(this.search) != -1))
				this.firendList = list
			},
			
			// 监听输入框内容
			changeSearchVal(e) {
				if (!e) this.getFriendList()
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
		.list-cell {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 32rpx;
			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				margin-right: 26rpx;
			}
			.user-info {
				display: flex;
				align-items: center;
				line-height: 40rpx;
				.user-name {
					width: 200rpx;
					color: #333333;
					font-size: 32rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.user-company {
					color: #828282;
					font-size: 24rpx;
				}
			}
			.add-info {
				text-align: right;
				line-height: 40rpx;
				.add-source {
					color: #ED6A0C;
					font-size: 22rpx;
				}
				.add-time {
					color: #828282;
					font-size: 22rpx;
				}
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
