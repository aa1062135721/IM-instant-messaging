<template>
	<view class="">
		<view class="container" v-if="list.length<0">
			<view class="ywh-card">
				<image class="ywh-cover" src="@/static/images/vvo-yao/ywh-cover.png"></image>

				<text class="ywh-desc">小区未成立业委会</text>

				<view class="ywh-btn" @click="navigate({url: '/pages/vvo-yao/industry-council/create'})">
					<text class="ywh-text">成立业委会</text>
				</view>
			</view>
		</view>

	
		<view class="ywh-card" v-else>
			<view @click="gocreate(item)" v-for="(item,index) in  list" :key="index" class="pageList">
				<view>
					{{item.comminityName}}
				</view>
				<view style="margin:30upx 0;">
					{{item. address }}
				</view>
				<view>
					{{item.aheName}}
				</view>
			</view>
		</view>
		<!-- <u-notify :show="show" ref="news" /> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{},
				list: [],
				pageNo: 1,
				show: true,
			}
		},
		onLoad() {
			this.getInfo()
			
		},

		methods: {
			getInfo() {
				this.$request('/user/getInfo', {}, "GET").then(res => {
					console.log(res)
					this.info = res
					this.getaheLiust()
				});
			},
			navigate(url){
				if(this.info.committeePublic){
					uni.navigateTo({
						url:url
					})
				}else{
					uni.showModal({
						title:'',
						content:'你没有操作权限，请联系管理员!',
						success(e) {
							console.log(e)
						},
						fail(e) {
							console.log(e)
						}
					})
					return;
				}
			},
			gocreate(item) {
				this.$api.to_http('/committee/isExist', {
					aheId: item.aheId
				}, 'POST', '', false).then(res => {
				
 					// if (res.data.data) {
						uni.navigateTo({
							url: '/pages/vvo-yao/industry-council/IndustryCommittee?aheId=' + item.aheId +
								'&comminityName=' + item
								.comminityName + '&address=' + item.address + '&aheName=' + item.aheName
						})
					// }else{
					// 	uni.navigateTo({
					// 		url:'./create?aheId='+item.aheId
					// 	}) 
					// }
				})


			},
			getaheLiust() {
				this.$api.to_http('/ahe/page', {
					pageNo: this.pageNo,
					pageSize: 15
				}, 'post', false, '').then(res => {
					console.log(res.data.data.records)
					this.list = res.data.data.records
					console.log(this.list, )

				})
			},



		}
	}
	// export default {
	//
	// 	onLoad() {
	// 		// this.getInfo()
	// 		this.getaheLiust()
	// 		this.authentication()
	// 	},
	// 	methods: {
	// 		gocreate(item){
	// 			uni.navigateTo({
	// 				url:'/pages/vvo-yao/industry-council/create?aheId='+item.aheId+'&comminityName='+item.comminityName+'&address='+item.address+'&aheName='+item.aheName
	// 			})
	// 		},
	// 		getaheLiust(){
	// 				this.$api.to_http('/ahe/page', {pageNo:this.pageNo,pageSize:15}, 'post',false,'').then(res=>{
	// 					console.log(res.data.data.records)
	// 					this.list=res.data.data.records
	// 					console.log(this.list,)

	// 				})
	// 		},
	// 		authentication(){
	// 			let that =this
	// 			this.$api.to_http('/userAuth/getInfo',{},'GET',false,'').then(res=>{
	// 				console.log(res)
	// 				if(res.code !==200){
	// 					that.$refs.news.show({
	// 						top:10,
	// 						type:'success',
	// 						message
	// 						safeAreaInsetTop:true,
	// 					})
	// 				}
	// 			})
	// 		}
	// 		getInfo(){
	// 			this.$api.to_http('/committee/getInfo', {}, 'post').then((res) => {
	// 				res = res.data
	// 				if (res.code != 200) {
	// 					return this.$refs.uToast.show({
	// 						title: res.message,
	// 						type: 'error',
	// 					})
	// 				}
	// 				this.list=res.data
	// 			})
	// 		}
	// 	}
	// }
</script>

<style lang="scss" scoped>
	.pageList {
		margin-bottom: 60upx;
		padding: 30upx;
		background: #03A9F4;
		color: #fff;

	}

	.container {
		display: flex;
		flex-direction: column;
		background-color: #F9F9F9;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		flex: 1;

		.ywh-card {
			margin: 22rpx 24rpx;
			height: 608rpx;
			background-color: #FFFFFF;
			border-radius: 8rpx;
			display: flex;
			flex-direction: column;
			align-items: center;

			.ywh-cover {
				width: 394rpx;
				height: 286rpx;
				margin-top: 20rpx;
			}

			.ywh-desc {
				font-weight: 500;
				font-size: 40rpx;
				line-height: 32rpx;
				color: #000000;
				margin-top: 12rpx;
			}

			.ywh-btn {
				width: 592rpx;
				height: 88rpx;
				background: #1989FA;
				border-radius: 4rpx;
				line-height: 88rpx;
				text-align: center;
				margin-top: 84rpx;

				.ywh-text {
					font-weight: 600;
					font-size: 36rpx;
					line-height: 32rpx;
					color: #FFFFFF;
				}
			}

			.homeSpace {
				width: 800rpx;
				height: 200rpx;
				background: red;
			}
		}
	}
</style>
