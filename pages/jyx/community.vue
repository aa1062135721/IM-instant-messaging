<template>
	<view class="">
		<view class="pageCard" v-for="(item,index) in pageList" :key="index" @click="godetails(item.newsId)">
			<view class="">{{item.newsTitle}}</view>
			<view class="">{{item.createTime}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNo:1,
				pageSize:10,
				pageList: []
			}
		},
		onLoad() {
			this.getnewsList()
		},
		methods: {
			//社区消息列表
			getnewsList() {
				let that=this
				// this.$api.to_http('/news/page?pageNo='+that.pageNo+'&pageSize='+that.pageSize,{}, 'GET', '', false).then((res) => {
				// 	console.log(res)
				// 	that.pageList = res.data.records
				// })
				this.$request('/news/page', {
					pageNo: this.pageNo,
					pageSize: this.pageSize
				}).then(res => {
					console.log(res)
					that.pageList = res.records
				});
			},
			godetails(id){
				uni.navigateTo({
					url:'community-details?id='+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pageCard{
		background-color: #FFFFFF;
		padding: 30upx;
		margin-bottom: 30upx;
		.title{
			font-size: 32upx;
			color: #000000;
		}
		.content{
			font-size: 28upx;
			color: #999999;
		}
	}
</style>
