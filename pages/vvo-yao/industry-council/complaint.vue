<template>
	<view class="container">
		<!-- 顶部导航栏 -->
		<view class="top">
			<view class="title">
				<image @click="toBack" src="../../../static/hexingImg/back.png" mode=""></image>
				<view class="titleTxt1">投诉建议</view>
				<view class="titleTxt2" @click="to()">发布</view>
			</view>
		</view>
		<!-- 顶部占位空盒子 -->
		<view class="" style="height: var(--status-bar-height);margin-bottom: 88rpx;"></view>
		<view class="main">
			<view class="mian-news" v-for="item in pageList" v-if="pageList.length>0">
               <view class="mian-headBox" >
               	  <view class="leftBox">
               	  	<image src="../../../static/luyan/images/icon_ellipse.png" mode=""></image>
					<view class="text">张三</view>
               	  </view>
				  <view class="rigihtBox">
				  	<view class="rigihtBox-date">{{item.publicTime}}</view>
				  </view>
               </view>
			   <view class="mian-news-title">{{item.title}}</view>
			   	<view class="mian-news-content">{{item.content}}</view>
			   	<view class="mian-news-imgBox" v-if="item.images.length>0">
			   		<view class="mian-news-imgBox-item" v-for="(item,index) in item.images" :key="index">
						<image :src="imgUrl+item" mode=""></image>
					</view>
			   	</view>	
  			</view>
			<view class="no-data"> - 暂无数据 -</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				// committeeId:'1472143507329773569',
				pageNo:1,
				pageSize:10,
				pageList:[],
				noPage:false
				
			}
		},
		onShow() {
			this.pageList=[]
			this.pageNo=1
			this.noPage=false
			 this.complaint()
		},
		onLoad(options){
			
		   this.complaint()
		},
		onReachBottom(){
			console.log(1111)
			if(this.noPage){
				uni.showToast({
					title:'没有更多了！',
					icon:'none'
				})
				return
			}else{
				this.pageNo++
				this.complaint()
			}
		},
		
		methods: {
			toBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			to(){
				uni.navigateTo({
					url:'/pages/vvo-yao/industry-council/release?id='+uni.getStorageSync('committeeId')
				})
			},
			complaint(){
				if(this.noPage){
					return
				}
				let that =this
				this.$request('/complaint/page',{
					committeeId:uni.getStorageSync('committeeId'),
                    pageNo:this.pageNo,
					pageSize:this.pageSize
				}).then(res=>{
					if(res.records.length<that.pageSize){
						that.noPage=true
					}
					if(that.pageNo==1){
						that.pageList =res.records
					}else{
					that.pageList =	that.pageList.concat(res.records)
					}
					
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		.main{
			.no-data{
				padding: 30upx;
				font-size: 28upx;
				color: #333333;
				text-align: center;
			}
			.mian-news{
				margin:32rpx auto;
				width: 686rpx;
				background-color: #fff;
				border-radius: 5px;
				.mian-headBox{
					margin:32rpx;
					padding-top:32rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.leftBox{
						display: flex;
						align-items: center;
						height: 60rpx;
						image{
							margin-right:24rpx;
							width: 60rpx;
							height: 60rpx;
						}
						.text{
							font-size: 28rpx;
							font-weight: bold;
						}
					}
					.rigihtBox{
						font-size: 28rpx;
						color: #999999;
					}
				}
				.mian-news-title{
					margin-left: 32rpx;
					font-size: 36rpx;
					font-weight: bold;
					color: #333333;
				}
				.mian-news-content{
					padding: 24rpx 32rpx;
					font-size: 28rpx;
					color: #666666;
				}
				.mian-news-imgBox{
					// margin:0 32rpx;
					display: flex;
					flex-wrap: wrap;
					justify-content:flex-start;
				
					.mian-news-imgBox-item{
						margin-top: 26rpx;
							margin-right: 10upx;
						// width: 190rpx;
						// height: 190rpx;
						border-radius: 4rpx;
						display: flex;
						
						image{
							width: 190rpx;
							height: 190rpx;
							border-radius: 4rpx;
						}
					}
				}
			}
		}
	}

</style>
