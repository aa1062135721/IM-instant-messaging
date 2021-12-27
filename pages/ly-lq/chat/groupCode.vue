<template>
	<view class="chat">
		<view class="main">
			<view class="top">
				<image v-if="groupInfo.avatar" :src="groupInfo.avatar"></image>
				<image v-else src="/static/lqImg/defaultAvatar.png"></image>
				<text>{{groupInfo.name}}</text>
			</view>
			<view class="center">
				<image :src="codeUrl" mode="scaleToFill"></image>
			</view>
			<view class="foot">
				<text>扫一扫上面的二维码图案，进群</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				value: '',
				groupInfo: {},
				codeUrl: ''
			}
		},
		
		created() {
			this.getGroupProfile()
		},
		
		methods: {
			getGroupProfile () {
				wx.$app.getGroupProfile({ groupID: this.$store.getters.toAccount }).then((res) => {
				  console.log('获取到的群资料', res)
				  this.groupInfo = res.data.group
				  this.createGroupQrCode()
				}).catch((imError) => {
				  console.warn('getGroupProfile error:', imError); // 获取群详细资料失败的相关信息
				})				
			},
			
			createGroupQrCode () {
				this.$api.to_http('/user/createGroupQrCode', { groupId : this.groupInfo.groupID }, 'GET').then((res) => {
					if (res.data.code === 200) {
						this.codeUrl = res.data.data
						console.log(this.codeUrl)
					}
				})				
			}
		}
	}
</script>

<style lang="scss" scoped>	
	.chat {
		display: flex;
		flex-direction: column;
		height: 100vh;
		position: relative;
		background-color: #f9f9f9;
		align-items: center;
		.main {
			width: 686rpx;
			height: 908rpx;
			background-color: #FFFFFF;
			margin-top: 20%;
			padding: 40rpx 32rpx;
			box-sizing: border-box;
			.top {
				display: flex;
				align-items: center;
				color: #000000;
				font-size: 32rpx;
				image {
					width: 126rpx;
					height: 126rpx;
					border-radius: 50%;
					margin-right: 24rpx;
				}
			}
			.center {
				margin: 32rpx 0;
				image {
					width: 606rpx;
					height: 606rpx;
				}
			}
			.foot {
				text-align: center;
				color: #828282;
				font-size: 28rpx;
			}
		}
	}
</style>
