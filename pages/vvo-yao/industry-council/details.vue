<template>
	<view class="container">
		<view class="main">
			<view class="publicity-crad">
				<view class="publicity-crad-Company">
					<view class="publicity-crad-text1">发布单位</view>
					<view class="publicity-crad-text2">{{details.publicUnit}}</view>	
				</view>
				<view class="publicity-crad-date">
					<view class="publicity-crad-text1">发布时间</view>
					<view class="publicity-crad-text2">{{details.publicTime}}</view>	
				</view>	
				<view class="publicity-crad-browse">浏览{{details.viewCount}}</view>
			</view>
			<view class="publicity-content">
				<view class="publicity-content-title">{{details.title}}</view>
				<view class="publicity-content-text">{{details.content}}</view>
			</view>
			<view style="display: flex;flex-wrap: wrap;" class="publicity-crad-imgBox">
			 <view style="margin:0 10upx 10upx 0;" class="publicity-crad-img" v-for="(item,index) in arr" :key="index">
			 	<image  :src="item.url" mode=""></image>
			 </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				arr:[],
				details:{},
				id:0
			}
		},
		onLoad(options){
			console.log(options.id)
			this.id=options.id//公示id
			this.getInfo()
		
		
			
		},
		methods: {
			getInfo(){
				this.$api.to_http('/committeePublic/getInfo',{id:this.id},'POST','',false).then(res=>{
					console.log(res.data.data,8989)
					this.details=res.data.data
					this.arr=[]
					this.details.images.forEach(item=>{
						let obj={}
						obj.url='http://47.111.10.36/'+item
						this.arr.push(obj)
					})
					
					console.log(this.arr,999999)
				})
			}
		}
	
	}
</script>

<style lang="scss" scoped>
	.container{
		display: flex;
		flex-direction: column;
		.main{
			margin-top:32rpx;
			.publicity-crad{
				position: relative;
				margin: auto;
				width: 686rpx;
				height: 224rpx;
				background-color: #fff;
				box-sizing: border-box;
				border-radius: 4rpx;
				.publicity-crad-Company{
					padding: 32rpx;
					display: flex;
					justify-content: space-between;
				}
				.publicity-crad-text1{
					font-size: 36rpx;
				}
				.publicity-crad-text2{
					font-size: 36rpx;
					font-weight: bold;
				}
				.publicity-crad-date{
					margin: 0 32rpx;
					display: flex;
					justify-content: space-between;
				}
				.publicity-crad-browse{
					position: absolute;
					bottom: 32rpx;
					right: 32rpx;
					font-size: 24rpx;
					color: #26B3F0;
				}
			}
			.publicity-content{
			    margin: 32rpx;
				width: 686rpx;
				height: 340rpx;
				background-color: #fff;
				.publicity-content-title{
					padding-top:32rpx;
					padding-left: 32rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #333333;
				}
				.publicity-content-text{
					margin: 24rpx 32rpx;
					font-size: 24rpx;
					color: #666666;
				}
			}
			.publicity-crad-imgBox{
				margin: 32rpx;
				.publicity-crad-img{
					width: 210rpx;
					height: 210rpx;
					border-radius:4rpx;
					image{
						width: 210rpx;
						height: 210rpx;
						border-radius:4rpx;
					}
				}
			}
			
		}
	}
</style>
