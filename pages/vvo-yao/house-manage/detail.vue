<template>
	<view class="container">
		<swiper
			class="swiper"
			:indicator-dots="true"
			indicator-color="#E0E0E0"
			indicator-active-color="#FFFFFF"
			:autoplay="true" 
			:interval="3000"
			:duration="500"
		 >
			<swiper-item v-for="(item, index) in info.images" :key="index">
				
				<image class="swiper-cover" :data-src="imgUrl+item.path" :src="imgUrl+item.path"  @click="previewImage"/>
			</swiper-item>
		</swiper>
		
		<view class="house-title-desc-view">
			<view class="house-title-desc">
				<text class="house-title">{{room.aheName}} {{room.houseU}}</text>
				<text class="house-desc">{{room.fitUp}} 朝向{{room.buildingHead}}</text>
			</view>
			
			<view class="collect-view" @click="iscollection">
				<u-icon class="collect-icon" v-if="!isCollect" name="star" color="#999999" size="30" ></u-icon>
				<image v-else class="collect-icon" src="@/static/images/vvo-yao/collect-active.png"></image>
				<text class="collect-text">收藏</text>
			</view>
		</view>
		
		<view class="house-info">
			<view class="house-info-top">
				<view class="house-info-top-item" v-if="room.rsTypeCode==1">
					<text class="house-info-top-item-title">{{room.price}}{{room.rpricePer}}</text>
					<text class="house-info-top-item-desc">租价</text>
				</view>
				<view class="house-info-top-item" v-else>
					<text class="house-info-top-item-title">{{room.price}}{{room.rpricePer}}</text>
					<text class="house-info-top-item-desc">售价</text>
				</view>
				<view class="house-info-top-item">
					<text class="house-info-top-item-title">{{room.roomType}}</text>
					<text class="house-info-top-item-desc">户型</text>
				</view>
				<view class="house-info-top-item">
					<text class="house-info-top-item-title">{{room.coveredArea}}/m²</text>
					<text class="house-info-top-item-desc">面积</text>
				</view>
			</view>
			
			<view class="house-info-bottom">
				<text class="house-info-bottom-item" v-if="room.rsTypeCode==1">单价：{{room.price}}{{room.rpricePer}}m²</text>
				<!-- <text class="house-info-bottom-item" v-else>单价：18919元/平</text> -->
				<text class="house-info-bottom-item">房号：{{room.house}}</text>
				<text class="house-info-bottom-item">装修：{{room.decorate}}</text>
				<text class="house-info-bottom-item">朝向：{{room.buildingHead}}</text>
				<text class="house-info-bottom-item">年代：{{room.roomBuildTime?room.roomBuildTime.substr(0,4):''}}</text>
				<text class="house-info-bottom-item">类型：{{room.roomUse}}</text>
				<text class="house-info-bottom-item">小区：{{room.aheName}}</text>
			</view>
		</view>
		
		<view class="orter">其他描述：</view>
		<view class="otherDesc">{{room.otherDesc}}</view>
		
		<text style="margin-top: 62upx;padding: 0 30upx;margin-bottom: 30upx;" class="location-title">地理位置</text>
		
		<view style="padding: 0 30upx;">
				<map style="width: 100%;" :latitude="room.latitude" :longitude="room.longitude"></map>
		</view>
		
		<view class="orter">房源介绍：</view>
		<view class="otherDesc">{{room.roomDesc}}</view>
		
		<view class="house-info">
		
		
			
			<view class="location-row">
				<image class="location-icon" src="@/static/images/vvo-yao/location-icon1.png"></image>
				<image class="location-icon" src="@/static/images/vvo-yao/location-icon2.png"></image>
				<image class="location-icon" src="@/static/images/vvo-yao/location-icon3.png"></image>
				<image class="location-icon" src="@/static/images/vvo-yao/location-icon4.png"></image>
				<image class="location-icon" src="@/static/images/vvo-yao/location-icon5.png"></image>
				<image class="location-icon" src="@/static/images/vvo-yao/location-icon6.png"></image>
				<image class="location-icon" src="@/static/images/vvo-yao/location-icon7.png"></image>
			</view>
		</view>
		
	<!-- 	<view class="list-view">
			<text class="house-title1">周边二手房</text>
			<view v-if="list.length > 0">
				<view class="house-cell" v-for="(item, index) in list" :key="index" @click="goDetail(item.room.roomRsId)">
					<image class="house-cover" :src="item.images.length > 0 ? item.images[0].path : ''"></image>
					<view class="house-right" v-if="item.room">
						<text class="house-title">{{item.room.aheName}}{{item.room.roomOwnerName}}</text>
						<text class="house-desc">{{item.room.aheAddress}}</text>
						<view class="label-row">
							<view class="label-view active" v-if="item.room.rsTypeCode==1">
								<text class="label-text active">在租</text>
							</view>
							<view class="label-view active" v-if="item.room.rsTypeCode==2">
								<text class="label-text active">在售</text>
							</view>
							
							<view class="label-view">
								<text class="label-text">{{item.room.houseU}}</text>
							</view>
							
							<view class="label-view">
								<text class="label-text">{{item.room.fitUp}}</text>
							</view>
						</view>
						
						<view class="house-bottom">
							<text class="house-price">{{item.room.price}}{{item.room.rpricePer}}</text>
							<text class="house-area">建面{{item.room.areaBuild}}平</text>
						</view>
					</view>
				</view>
			</view>
			<view class="noList" v-else>
				<u-empty text="暂无房源" mode="list"></u-empty>
			</view> -->
			<view class="consult-btn" @click="getTel(room.linktel)">在线咨询</view>
		<!-- </view> -->
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCollect:false,
				info:'',
				room:'',
				pageNo:1,
				pageSize:10,
				list:[],
				noPage:false,
				pageId:''
			}
		},
		onLoad(options) {
			this.pageId=options.id
			this.getData()
			// console.log(options,999)
			
		},
		onReachBottom() {
			if(this.list.length>0){
				this.getMoreOrder();
			}
		},
		methods: {
			
			// 收藏
			iscollection(){
				if(this.isCollect){
					
					this.$api.to_http('/house/cancelCollect', {id:this.pageId}, 'post','',false).then(res=>{
					 if(res.data.code==200){
						 uni.showToast({
							 title:'操作成功',
							 icon:'success'
						 })
					 }
					 this.getData()
					})
					
				}else{
					this.$api.to_http('/house/collect', {id:this.pageId}, 'post','',false).then(res=>{
					 if(res.data.code==200){
						 uni.showToast({
							 title:'操作成功',
							 icon:'success'
						 })
					 }
					 this.getData()
					})
				}
			},
			//预览图片
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.info.images
				})
			},
			getTel(i){
				//调取手机拨打电话
				uni.makePhoneCall({
				    phoneNumber: i 
				});
			},
			getData(){
				// let roomRsId = uni.getStorageSync('roomRsId')
				let that=this
				this.$api.to_http('/house/getInfo', {id:that.pageId}, 'post','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					
					this.isCollect=res.data.isCollect
					this.info = res.data
					this.room=res.data.room
					// this.getList()
				})
			},
			//二手房列表
			// getList(){
			// 	let that = this;
			// 	this.$api.to_http('/roomRs/esPage', {
			// 		pageNo:this.pageNo,
			// 		pageSize:this.pageSize,
			// 		roomRsId:uni.getStorageSync('roomRsId'),
			// 		roomType:this.room.rsTypeCode
			// 	}, 'POST','',false).then((res) => {
			// 		res = res.data
			// 		if (res.code != 200) {
			// 			return this.$refs.uToast.show({
			// 				title: res.message,
			// 				type: 'error',
			// 			})
			// 		}
			// 		if(res.data.records.length > 0){
			// 			res.data.records.forEach(item=>{
			// 				if(item.images && item.images.length > 0){
			// 					item.images.forEach(itemChild=>{
			// 						itemChild.path = that.baseUrlImg + itemChild.path;
			// 					})
			// 				}
			// 			})
			// 			that.list=that.list.concat(res.data.records);
			// 		}
			// 		console.log(that.list)
			// 		that.$forceUpdate();
			// 	})
			// },
			getMoreOrder() {
				if (this.noPage) {
					uni.showToast({
						title: '没有更多了',
						icon: 'none',
						duration: 2000
					});
					return
				}
				uni.showLoading({
					title: '加载更多...',
					mask: true
				});
				this.pageNo++
				this.$api.to_http('/roomRs/esPage', {
					pageNo:this.pageNo,
					pageSize:this.pageSize,
					roomRsId:uni.getStorageSync('roomRsId'),
					roomType:this.room.rsTypeCode
				}, 'POST', '', false).then(res => {
					if (res.data.data.records.length == 0) {
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						this.noPage = true
					} else {
						let arr = res.data.data.records.map(item => {
							if(item.images && item.images.length > 0){
								item.images.forEach(itemChild=>{
									itemChild.path = that.baseUrlImg + itemChild.path;
								})
							}
							this.list.push(item)
						})
					}
				})
			},
			//收藏
			getCollection(){
				let roomRsId = uni.getStorageSync('roomRsId')
				this.$api.to_http('/roomRs/collection/'+roomRsId, {
					
				}, 'GET','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.$refs.uToast.show({
						title: '收藏成功',
						type: 'success',
					})
					this.getData()
				})
			},
			cancelCollection(){
				let roomRsId = uni.getStorageSync('roomRsId')
				this.$api.to_http('/roomRs/cancelCollection/'+roomRsId, {
					
				}, 'GET','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.$refs.uToast.show({
						title: '取消收藏',
						type: 'success',
					})
					this.getData()
				})
				
				
			},
			
			// 跳转详情
			goDetail(roomRsId,roomType){
				uni.setStorageSync('roomRsId', roomRsId)
				uni.navigateTo({
					url:'./detail'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.orter{
		padding: 0 30upx;
		font-family: PingFang SC;
		font-size: 28upx;
		// line-height: 20px;
		margin-top: 40upx;
		margin-bottom: 16upx;
	}
	.otherDesc{
		padding: 0 30upx;
		font-family: PingFang SC;
		font-size: 28upx;
	}
	.container {
		display: flex;
		flex-direction: column;
		background-color: #F9F9F9;
		.swiper {
			width: 750rpx;
			height: 554rpx;
			.swiper-cover {
				width: 750rpx;
				height: 554rpx;
			}
		}
		
		.house-title-desc-view {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 32rpx;
			background-color: #FFFFFF;
			.house-title-desc {
				display: flex;
				flex-direction: column;
				.house-title {
					font-size: 36rpx;
					color: #222222;
				}
				.house-desc {
					margin-top: 10rpx;
					font-size: 28rpx;
					color: #ED6A0C;
				}
			}
			.collect-view {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.collect-icon {
					width: 29.76rpx;
					height: 28.24rpx;
				}
				.collect-text {
					font-size: 28rpx;
					color: #3F434A;
				}
			}
		}
	
		.house-info {
			margin-top: 20rpx;
			background-color: #FFFFFF;
			padding-bottom: 20rpx;
			display: flex;
			flex-direction: column;
			.house-info-top {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx;
				padding-bottom: 20rpx;
				border-bottom: 2rpx solid #EEEEEE;
			}
			.house-info-top-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.house-info-top-item-title {
					font-weight: 600;
					font-size: 52rpx;
					color: #ED6A0C;
				}
				.house-info-top-item-desc {
					font-size: 28rpx;
					color: #3F434A;
				}
			}
		
			.house-info-bottom {
				margin-top: 24rpx;
				margin-bottom: -15rpx;
				padding: 0 30rpx;
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				align-items: center;
			}
			.house-info-bottom-item {
				width: 50%;
				font-size: 28rpx;
				margin-bottom: 20rpx;
				color: #3F434A;
			}
			
			.location-title {
				font-weight: 600;
				font-size: 28rpx;
				color: #3F434A;
				margin-left: 30rpx;
				margin-top: 20rpx;
			}
			
			.location-cover {
				width: 688rpx;
				height: 240rpx;
				margin-left: 32rpx;
				margin-top: 16rpx;
			}
			
			.location-row {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: 32rpx;
				margin-right: 32rpx;
				margin-top: 40rpx;
				margin-bottom: 20rpx;
				justify-content: space-between;
				.location-icon {
					width: 56rpx;
					height: 94rpx;
				}
			}
			
		}
	
		.list-view {
			background-color: #FFFFFF;
			margin-top: 20rpx;
			display: flex;
			flex-direction: column;
			.house-title1 {
				font-weight: 600;
				font-size: 28rpx;
				color: #3F434A;
				margin-left: 32rpx;
				margin-top: 20rpx;
			}
			.noList{
				padding: 28rpx 32rpx;
			}
			.house-cell {
				display: flex;
				flex-direction: row;
				padding: 28rpx 32rpx;
				border-bottom: 2rpx solid #F2F2F2;
				background-color: #FFFFFF;
				.house-cover {
					width: 188rpx;
					height: 188rpx;
					border-radius: 16rpx;
				}
				.house-right {
					flex: 1;
					margin-left: 16rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.house-title {
						font-size: 28rpx;
						color: #222222;
						overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
					}
					.house-desc {
						font-size: 24rpx;
						color: #666666;
						overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
					}
					.label-row {
						display: flex;
						flex-direction: row;
						align-items: center;
						flex-wrap: wrap;
						margin-left: -28rpx;
						.label-view {
							padding: 0 13rpx;
							// height: 32rpx;
							background-color: #F2F2F2;
							border-radius: 4rpx;
							margin-left: 28rpx;
							line-height: 32rpx;
							&.active {
								background-color: #1989FA;
							}
							.label-text {
								font-size: 24rpx;
								color: #999999;
								&.active {
									color: #FFFFFF;
								}
							}
						}
					}
					.house-bottom {
						display: flex;
						flex-direction: row;
						align-items: flex-end;
						justify-content: space-between;
						.house-price {
							font-weight: 600;
							font-size: 40rpx;
							color: #ED6A0C;
							line-height: 40rpx;
						}
						.house-area {
							font-size: 24rpx;
							color: #666666;
						}
					}
				}
			}
		
		}
	}
	
	.consult-btn{
		margin: 0 30upx;
		// width: 100%;
		// height: 88rpx;
		background: #ED6A0C;
		border-radius: 2px;
		font-family: PingFang SC;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 88rpx;
		// margin: 44rpx auto;
		margin-bottom: 50upx;
	}
</style>
