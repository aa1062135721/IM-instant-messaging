<template>
	<view class="chat">
		<view class="main">
			<view style="height: 16rpx; background-color: #F9F9F9;"></view>
			<view class="add_icon">
				<u-input v-model="value" :focus="true" @change="change" placeholder="请输入名称" clearable :custom-style="{padding: '10rpx 20rpx'}"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				value: '',
				info: {}
			}
		},
		
		onLoad(option) {
			this.info = option
			if (this.info.remark) this.value += this.info.remark
		},
		
		onNavigationBarButtonTap(e) {
			this.setRemark()
		},
		
		methods: {
			setRemark () {
				// 更新好友备注
				let _this = this
				wx.$app.updateFriend({userID: this.info.userID, remark: this.value}).then(res => {
					if (res.code) return
					uni.showToast({
						title: '修改成功',
						icon: 'none'
					})
					setTimeout(_ => {
						uni.navigateBack()
					}, 1000)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>	
	.chat {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		position: relative;
		background-color: #f9f9f9;
		.main {
			.add_icon {
				background-color: #FFFFFF;
			}
		}
	}
</style>
