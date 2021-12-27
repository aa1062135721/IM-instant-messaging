<template>
	<view class="privacy">
		<rich-text :nodes="content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: ''
			}
		},
		onLoad() {
			this.getPrivary();
		},
		methods: {
			//获取隐私政策 
			getPrivary() {
				this.$request('/common/static-content/get/type/2', {

				}, 'GET').then(res => {
					this.content = res.content
				});
			}

		}
	}
</script>

<style scoped lang="scss">
	.privacy {
		background-color: #FFFFFF;
		padding: 24upx 32rpx;

		rich-text {
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 32upx;
			color: #000000;
			width: 100%;

		}
	}
</style>
