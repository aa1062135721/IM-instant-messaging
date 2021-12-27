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
	import { mapState } from 'vuex'
	export default {
		data () {
			return {
				value: ''
			}
		},
		computed:{
			...mapState({
				myInfo: state => state.user.myInfo
			})
		},
		
		onLoad() {
			console.log(this.myInfo)
		},
		
		onNavigationBarButtonTap(e) {
			if (!this.value) {
				uni.showToast({
					title: "请输入群内昵称",
					icon: 'none'
				})
			} else {
				this.setGroupMemberNameCard()
			}
		},
		
		methods: {
			setGroupMemberNameCard () {
				wx.$app.setGroupMemberNameCard({ groupID: this.$store.getters.toAccount, userID: this.myInfo.userID, nameCard: this.value }).then((res) => {
				  uni.showToast({
				  	title: '修改成功'
				  })
				}).then(() => {
					setTimeout(_ => {
						uni.navigateBack() 
					}, 800)
				}).catch(function(imError) {
				  console.warn('setGroupMemberNameCard error:', imError); // 设置群成员名片失败的相关信息
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
