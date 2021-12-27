<template>
	<view class="container">
		<view class="noList" v-if="list.length==0">
			<u-empty text="暂无房源" mode="list"></u-empty>
		</view>
		<template v-else>
			<view class="cell" v-for="(item, index) in list" :key="index" @click="toDetail(item.roomId)">
				<view class="row">
					<text class="title">{{item.aheName}}</text>
					<text class="address">{{item.provinceName}}{{item.cityName}}{{item.countyName}}</text>
				</view>
				<view class="row top10">
					<text class="detail-address">{{item.buildingName}} {{item.roomNumber}}</text>
					<text class="status" :class="{active:item.roomStatus==2||item.roomStatus==4||item.roomStatus==5}">{{item.roomStatus}}</text>
				</view>
			</view>
		</template>
		
		
		<!-- <view class="cell" @click="$navigate({url: '/pages/vvo-yao/house-manage/input-info'})">
			<view class="row">
				<text class="title">明珠.上海城</text>
				<text class="address">重庆梁平</text>
			</view>
			<view class="row top10">
				<text class="detail-address">C区2栋 10-2</text>
				<text class="status active">已出售</text>
			</view>
		</view> -->
		<!-- <view class="btn" v-show="!list">添加房产</view> -->
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNo:1,
				pageSize:20,
				list:[],
				noPage:false,
				status:''
			}
		},
		onLoad(e) {
			this.status=e.check;
			console.log(this.status)
			// this.getList()
			
			
		},
		onShow() {
			// status 1、出租  2、出售
			let url = '';
			if(this.status == 1){
				url = 'room/rent/page';
			}else{
				url = 'room/buy/page';
			}
			this.pageNo = 1;
			this.list = [];
			this.getList(url);
		},
		onReachBottom() {
			if(this.list.length>0){
				this.getMoreOrder();
			}
		},
		methods: {
			toDetail(roomId){
				uni.navigateTo({
					url:'./input-info?roomId='+roomId + '&type=' + this.status
				})
			},
			getList(url){
				this.$api.to_http(url, {
					pageNo:this.pageNo,
					pageSize:this.pageSize
				}, 'GET','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.list=res.data.records ? res.data.records : [];
				})
			},
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
				this.$api.to_http('/room/page', {
					pageNo:this.pageNo,
					pageSize:this.pageSize,
					status:this.status
				}, 'GET', '', false).then(res => {
					if (res.data.data.records.length == 0) {
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						this.noPage = true
					} else {
						let arr = res.data.data.records.map(item => {
							this.list.push(item)
						})
					}
				})
			},
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
		background-color: #F9F9F9;
		.noList{
			padding: 100rpx 32rpx 0;
			box-sizing: border-box;
		}
		.cell {
			height: 140rpx;
			border-bottom: 2rpx solid #F2F2F2;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 32rpx;
			background-color: #FFFFFF;
			.row {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				.title {
					font-weight: 600;
					font-size: 28rpx;
					color: #000000;
				}
				.address {
					font-size: 28rpx;
					color: #000000;
				}
				.detail-address {
					font-size: 24rpx;
					color: #666666;
				}
				.status {
					font-size: 24rpx;
					color: #1989FA;
					&.active {
						color: #ED6A0C;
					}
				}
			}
			.top10 {
				margin-top: 10rpx;
			}
		}
		.btn{
			position: fixed;
			bottom: 30rpx;
			width: 690rpx;
			height: 98rpx;
			background: #7ABFFF;
			text-align: center;
			line-height: 98rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
			margin: 32rpx 30rpx 0;
		}
	}
</style>
