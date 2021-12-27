<template>
	<view class="container">
		<!-- 顶部导航栏 -->
		<view class="top">
			<view class="title">
				<image @click="toBack" src="@/static/hexingImg/back.png" mode=""></image>
				<view class="titleTxt1">公示</view>
				<view class="titleTxt2" @click="godetails()">发布</view>
			</view>
		</view>
		<!-- 顶部占位空盒子 -->
		<view class="" style="height: var(--status-bar-height);margin-bottom: 88rpx;"></view>
		<view class="main">
			<view  >
				<view class="publicity-crad" v-for="item in pageList"  @click="details(item.id)">
					<view class="publicity-crad-title">{{item.title}}</view>
					<view class="publicity-crad-content">{{item.content}}</view>
					<view class="publicity-crad-text">
						<view class="crad-txt1">{{item.publicUnit}}</view>
						<view class="crad-txt2">浏览{{ item.viewCount }}</view>
					</view>
					<!-- <image src="../../../static/images/vvo-yao/goods-cover.png" mode="" v-if="item.images"></image> -->
					<view class="publicity-crad-date">{{item.publicTime}}</view>
				</view>
			</view>
			<view class="no-data"> - 暂无数据 -</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNo: 1,
				pageSize: 30,
				pageList: [],
				id:'',
				nopage:false,
			}
		},
		onLoad(options) {
			//this.committeeId=options.id
			this.publicityList()
		},
		
		onShow() { 
		     this.pageNo=1
			 this.nopage=false
			 this.pageList=[]
			this.publicityList()
			
		},
		
		onReachBottom(){
			// console.log(11111111111111)
			if(this.nopage){
				uni.showToast({
					title:'没有更多了！',
					icon:'none'
				})
				return
			}else{
				this.pageNo++
				this.publicityList()
			}
		},
		onPullDownRefresh() {
			this.pageNo=1  
			this.publicityList()
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},1000)
		},
		methods: {
			toBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			details(id) {
				uni.navigateTo({
					url: '/pages/vvo-yao/industry-council/details?id='+id
				
				})
			},
			godetails() {
				uni.navigateTo({
					url: '/pages/vvo-yao/industry-council/issue'
				})
			},
			publicityList() { 
				if(this.nopage){
					return
				}
				let that = this
				// console.log(this.committeeId)
				this.$request('/committeePublic/page', {
					committeeId:uni.getStorageSync('committeeId'),
					pageNo: this.pageNo,
					pageSize:30,
				}).then(res => {
					
					// if(this.nopage){
					// 	return
					// }else{
						if(this.pageNo==1){
							 this.pageList=res.records
						}else{
							this.pageList=this.pageList.concat(res.records)
						}
						
					// }
					
					if(res.records.length<15){
						this.nopage=true
					}
					
					// that.pageList=res.records
				});
	              
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.uni-body {
		background-color: #F9F9F9 !important;
	}

	.container {
		display: flex;
		flex-direction: column;

		.top {
			position: fixed;
			top: 0;
			width: 750rpx;
			background-color: #ffffff;
			padding-top: var(--status-bar-height);

			.title {
				width: 100%;
				height: 88rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 36rpx;

				image {
					width: 30rpx;
					height: 30rpx;
				}

				.titleTxt1 {
					font-size: 36rpx;
					color: #222222;
				}

				.titleTxt2 {
					font-size: 28rpx;
					color: #1989FA;
				}
			}
		}

		.main {
			.no-data{
				padding: 30upx;
				font-size: 28upx;
				color: #333333;
				text-align: center;
			}
			.publicity-crad {
				position: relative;
				margin:32rpx 32rpx;
				width: 686rpx;
				height: 284rpx;
				background-color: #fff;
				box-sizing: border-box;
				border-radius: 4rpx;

				.publicity-crad-title {
					padding-top: 32rpx;
					padding-left: 32rpx;
					font-size: 32rpx;
					font-weight: bold;
				}

				.publicity-crad-content {
					padding-top: 24rpx;
					margin: 0 32rpx;
					font-size: 24rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.publicity-crad-text {
					padding-top: 32rpx;
					margin: 0 32rpx;
					display: flex;
					justify-content: space-between;

					.crad-txt1 {
						font-size: 24rpx;
						font-weight: bold;
						color: #1989FA;
					}

					.crad-txt2 {
						font-size: 24rpx;
						color: #26B3F0;
					}
				}

				.publicity-crad-date {
					// margin-top: 24rpx;
					position: absolute;
					bottom: 32rpx;
					right: 32rpx;
					font-size: 28rpx;
					color: #999999;
				}
			}
		}

	}
</style>
