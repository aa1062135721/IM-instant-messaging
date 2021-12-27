<template>
	<view class="container">
		<image class="house-cover" src="@/static/images/vvo-yao/house-cover.png"></image>

		<view class="search-view">
			<view class="search-left" @tap="isData=true">
				<text class="city-name">{{adrVal.province}}</text>
				<image class="down" src="@/static/images/vvo-yao/down-gray.png"></image>
			</view>

			<view class="border"></view>
			<u-input class="search-text" v-model="adrVal.village" placeholderStyle="font-size: 36upx;color:#666666;" placeholder="你想住那？" />
			<!-- <text class="search-text">{{province}}</text> -->
		</view>

		<view class="house-card-view">
			<view class="house-card">
				<image @click="toRent(1)" class="house-icon"
					src="@/static/images/vvo-yao/house-icon1.png"></image>
				<image @click="toBuy(2)" class="house-icon"
					src="@/static/images/vvo-yao/house-icon2.png"></image>
				<image @click="toRent(2)" class="house-icon"
					src="@/static/images/vvo-yao/house-icon3.png"></image>
				<image @click="toBuy(1)" class="house-icon"
					src="@/static/images/vvo-yao/house-icon4.png"></image>
			</view>
		</view>
		<u-pickers v-model="isData" mode="region" :defaultRegion="[adrVal.province]" @confirm="confirmData"></u-pickers>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				isData:false,
				province:'重庆市',
				adrVal:{
					province:'重庆市',
					village:''
				}
			}
		},
		onShow() {
			uni.getLocation({
				geocode:true,
				type: 'gcj02',
				success: (res) => {
					console.log(res)
					uni.setStorageSync('ay_latitude', res.latitude)
					uni.setStorageSync('ay_longitude', res.longitude)
					this.adrVal.province = res.address ? res.address.province : '重庆市'
				}
			});
			
		},
		methods: {
			// 省份选择
			confirmData(e) {
				console.log(e)
				this.adrVal.province = e.province.label;
				// this.userInfo.date = e.year + '-' + e.month + '-' + e.day;
			},
			toRent(status){
				uni.setStorageSync('status', status);
				uni.setStorageSync('aheName', this.adrVal.village)
				uni.setStorageSync('provinceName', this.adrVal.province);
				uni.navigateTo({
					url:'./list?type='+status
				})
			},
			toBuy(check){
				uni.navigateTo({
					url:'./my-house?check='+check
				})
			},
			navigate(params) {
				uni.navigateTo({
					...params
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: #F9F9F9;

		.house-cover {
			width: 750rpx;
			height: 400rpx;
		}

		.search-view {
			width: 644rpx;
			height: 124rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 0rpx 8rpx rgba(0, 0, 0, 0.08);
			border-radius: 110rpx;
			align-self: center;
			margin-top: -62rpx;
			z-index: 1;
			display: flex;
			flex-direction: row;
			align-items: center;

			.search-left {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: 54rpx;

				.city-name {
					font-size: 36rpx;
					color: #000000;
				}

				.down {
					width: 24rpx;
					height: 16rpx;
					margin-left: 20rpx;
					margin-top: 8rpx;
				}
			}

			.border {
				width: 2rpx;
				height: 64rpx;
				background-color: #E0E0E0;
				margin: 0 20rpx;
			}

			.search-text {
				font-size: 36rpx;
				color: #666666;
			}
		}

		.house-card-view {
			overflow: hidden;
			margin: 40rpx 32rpx;
		}

		.house-card {
			background-color: #FFFFFF;
			margin-left: -144rpx;
			padding: 42rpx 144rpx;
			border-radius: 8rpx;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;

			.house-icon {
				width: 100rpx;
				height: 146rpx;
				margin-bottom: 52rpx;
				margin-left: 144rpx;
			}
		}
	}
</style>
