<template>
	<view class="">
		<view class="content">{{details.newsTitle}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsId:0,
				details: {}
			}
		},
		onLoad(options) {
			this.newsId=options.id
			this.getList()
		},
		methods: {
			//社区消息列表
			getList() {
				this.$api.to_http('/news/getInfo/'+this.newsId, {}, 'get', '', false).then((res) => {
					console.log(res)
					this.details = res.data.data.news
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 30upx;
		font-size: 28upx;
		color: #999;
	}
</style>
