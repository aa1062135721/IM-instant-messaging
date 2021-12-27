<template>
	<view class="chat">
		<view class="main">
			<view class="add_icon">
				<input class="input" v-model="tagName" placeholder="标签名字  如: 家人、朋友"></input>
			</view>
			<!-- <view class="add-member">
				<view class="left">
					<text>标签成员（0）</text>
				</view>
				<view class="right" @click="goPage">
					<image src="/static/lqImg/nav_add.png"></image>
					<text>添加成员</text>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				tagName: ''
			}
		},
		
		created() {
			
		},
		
		onNavigationBarButtonTap(e) {
			// this.createFriendGroup()
			this.goPage()
		},
		
		methods: {
			createFriendGroup () {
				// wx.$app.createFriendGroup({
				//   name: this.tagName,
				//   userIDList: ['']
				// }).then((res) => {
				// 	if (res.code) return 
				// 	uni.showToast({
				// 		title: '新建成功'
				// 	})
				// 	setTimeout(_ => { uni.navigateBack() }, 800)
				// }).catch(function(imError) {
				//   console.warn('getFriendGroupInfo error:', imError); // 获取失败
				// });
			},
			goPage () {
				if (!this.tagName) {
					uni.showToast({
						title: '请先输入标签名',
						icon: "none"
					})
					return
				}
				uni.navigateTo({
					url: `/pages/ly-lq/chooseFriend/chooseFriend?name=${this.tagName}&type=1`
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
		background-color: #FFFFFF;
		.nav {
			border-bottom: 1px solid #f7f7f7;
			.nav_right {
				margin-right: 32rpx;
				color: #1989FA;
				font-size: 32rpx;
			}
		}
		.main {
			padding: 0 32rpx;
			border-top: 1px solid #f7f7f7;
			.add_icon {
				padding: 32rpx 0;
				box-sizing: border-box;
				input {
					background-color: #F9F9F9;
					padding: 0 28rpx;
					font-size: 28rpx;
					color: #333333;
					height: 80rpx;
					box-sizing: border-box;
					/deep/ .uni-input-wrapper {
						height: 80rpx;
					}
				}
				.input-placeholder {
					color: #BDBDBD;
				}
			}
			.add-member {
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
		}
	}
</style>
