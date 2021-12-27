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
	export default {
		data () {
			return {
				value: ''
			}
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
				wx.$app.updateGroupProfile({
				  groupID: this.$store.getters.toAccount,
				  name: this.value, // 修改群名称
				}).then((res) => {
				  uni.showToast({
				  	title: '修改成功'
				  })
				 
				}).then(() => {
					setTimeout(_ => {
						uni.navigateBack() 
					}, 800)
				}).catch((imError) => {
					uni.showToast({
						title:'抱歉，只有群主、管理员才能修改名称',
						icon: 'none',
						duration: 2000
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
