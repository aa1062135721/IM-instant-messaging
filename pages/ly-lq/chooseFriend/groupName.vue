<template>
	<view class="chat">
		<view class="main">
			<view style="height: 16rpx; background-color: #F9F9F9;"></view>
			<view class="add_icon">
				<u-input v-model="value" placeholder="请输入名称" clearable :custom-style="{padding: '10rpx 20rpx'}" />
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data () {
			return {
				value: '',
				chooseList: []
			}
		},
		
		onLoad(options) {
			this.chooseList = JSON.parse(options.data)
		},
		
		computed: {
			...mapGetters(['myInfo'])
		},
		
		onNavigationBarButtonTap(e) {
			if (!this.value) {
				uni.showToast({
					title: "请输入群聊名称"
				})
			} else {
				this.updateGroupProfile()
			}
		},
		
		methods: {
			updateGroupProfile () {
				wx.$app.createGroup({
				  type: this.TIM.TYPES.GRP_PUBLIC,
				  name: this.value,
				  avatar: this.myInfo.avatar,
				  memberList: [...this.chooseList] // 如果填写了 memberList，则必须填写 userID
				}).then(({ data: { group } }) => {
					return Promise.resolve()
				}).then(_ => {
					uni.showToast({
					  title: '创建成功',
					  duration: 1000
					})
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/ly-lq/home/home'
						})
					}, 1000)
				}).catch((err) => {
					console.log(err)
					uni.showToast({
					  title: '创建失败',
					  icon: 'none'
					})
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>	
	.chat {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 44);
		position: relative;
		background-color: #f9f9f9;
		.main {
			.add_icon {
				background-color: #FFFFFF;
			}
		}
	}
</style>
