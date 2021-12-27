<template>
	<view class="agreement">
		<rich-text :nodes="content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:""
			}
		},
		onLoad() {
			this.getagreement();
		},
		methods: {
			//获取用户协议
			getagreement(){
				this.$request('/common/static-content/get/type/1',{
					
				},'GET').then(res => {
					this.content=res.content
				});
			}
			
		}
	}
</script>

<style scoped lang="scss">
	.agreement {
		background-color: #FFFFFF;
		padding:24upx 32rpx;
		rich-text{
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 32upx;
			color: #000000;
			width: 100%;
			
		}
	}
</style>
