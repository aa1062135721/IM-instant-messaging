<template>
	<view class="mail-list">
		<view class="search">
			<u-search @change="changeSearchVal" @search="searchUser" search-icon="/static/lqImg/search.png" placeholder="搜索" v-model="search" :show-action="false" search-icon-color="#BDBDBD" placeholder-color="#BDBDBD"></u-search>
		</view>
		<view class="main">
			<u-index-list :scrollTop="scrollTop" active-color="#828282" :index-list="indexList">
				<view v-for="(item, index) in firendList" :key="index">
					<u-index-anchor v-show="item.list && item.list.length"  :index="item.key" :custom-style="{padding: '20rpx', fontSize: '32rpx', background: '#F9F9F9'}" />
					<view class="list-cell" @click="seeDetail(item1)" v-for="(item1, index1) in item.list" :key="index1" v-if="item.list">
						<view class="user-info">
							<image v-if="item1.avatar" :src="item1.avatar" mode="aspectFill"></image>
							<image v-else src="/static/lqImg/defaultAvatar.png"></image>
							<view>
								<view class="user-name">
									{{item1.nick || item1.userID }}
								</view>
								<view class="user-company" v-if="item1.company">
									{{item1.company}}
								</view>
							</view>							
						</view>
						<view class="add-info">
							<view class="add-source" v-if="item1.source">
								添加来源：{{item1.source}}
							</view>
							<view class="add-time" v-if="item1.addTime">
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
				blackList: [],
				firendList: [],
				indexList: []
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		
		onShow() {
			this.getBlackList()
		},
		
		methods: {
			getBlackList () {
				wx.$app.getBlacklist().then((res) => {
					console.log(res); // 我的黑名单列表，结构为包含用户 userID 的数组 - [userID]
					if (res.code) return
					this.blackList = res.data
					!this.blackList.length ? this.firendList = [] :  this.getUserProfile(this.blackList)
				}).catch(function(imError) {
				  console.warn('getBlacklist error:', imError); // 获取黑名单列表失败的相关信息
				});
			},
			
			// 搜索联系人
			searchUser() {
				let list = JSON.parse(JSON.stringify(this.blackList))
				console.log(list)
				list.forEach((res, index) => res.list = res.list.filter(item =>  item.remark.indexOf(this.search) != -1 || item.profile.nick.indexOf(this.search) != -1))
				this.blackList = list
			},
			
			// 监听输入框内容
			changeSearchVal(e) {
				if (!e) this.getBlackList()
			},
			
			getUserProfile (data) {
				wx.$app.getUserProfile({
					userIDList: [...data] // 请注意：即使只拉取一个用户的资料，也需要用数组类型，例如：userIDList: ['user1']
				}).then((res1) => {
					console.log(res1); // 存储用户资料的数组 - [Profile]
					if (res1.code) return
					this.firendList = res1.data
					this.handleFriendList()
				}).catch((imError) => {
					console.warn('getUserProfile error:', imError); // 获取其他用户资料失败的相关信息
				})				
			},
			
			seeDetail(item) {
				uni.navigateTo({
					url: `/pages/ly-lq/chat/friendMessage?userID=${item.userID}`
				})
			},
			
			handleFriendList () {
				let list = this.firendList
				list = list.sort((pre, next) => Pinyin.getFullChars(pre.remark || pre.nick || pre.userID).localeCompare(Pinyin.getFullChars(next)))
				let letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
				const newArr = []
				let temp = {
					key: '#',
					list: []
				}
				list.map(item => {
					// 取首字母
					const key = Pinyin.getFullChars(item.remark || item.nick || item.userID).charAt(0).toUpperCase()
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
					color: #333333;
					font-size: 32rpx;
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
