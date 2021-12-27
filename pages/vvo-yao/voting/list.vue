<template>
	<view class="container">
		<scroll-view class="scroll-view" scroll-y>
			<view class="cell" v-for="(item, index) in list" :key="index" @click.stop="toDetail(item.voteId)">
				<view class="cell-left">
					<text class="cell-left-title">{{item.voteName}}</text>
					<view class="cell-center">
						<text class="cell-center-left">投票结果</text>
						<text class="cell-center-right">{{item.voteResult}}</text>
					</view>
					<text class="cell-time">{{item.voteEndDate}}</text>
				</view>
				
				<view class="tag-view active" v-if="item.voteStatus==2">
					<text class="tag-text active">未投</text>
				</view>
				<view class="tag-view" v-if="item.voteStatus==1">
					<text class="tag-text">已投</text>
				</view>
				<view class="tag-view-guo" v-if="item.voteStatus==3">
					<text class="tag-text">已过期</text>
				</view>
			</view>
			
			<!-- <view class="cell" @click="navigate({url: '/pages/vvo-yao/voting/detail'})">
				<view class="cell-left">
					<text class="cell-left-title">关于绿化改造方案投票</text>
					<view class="cell-center">
						<text class="cell-center-left">投票结果</text>
						<text class="cell-center-right">方案一</text>
					</view>
					<text class="cell-time">2021-10-01</text>
				</view>
				
				<view class="tag-view">
					<text class="tag-text">已投</text>
				</view>
			</view> -->
		</scroll-view>
		
		<view class="bottom-view" @click="navigate({url: '/pages/vvo-yao/voting/voting'})">
			<text class="bottom-text">发起投票</text>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getList()
		},
		methods: {
			navigate(params) {
				uni.navigateTo({
					...params
				})
			},
			getList(){
				this.$api.to_http('/vote/page', {}, 'GET').then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.list = res.data.records;
				})
			},
			toDetail(voteId){
				uni.navigateTo({
					url:'./detail?voteId='+voteId
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
		background-color: #F9F9F9;
		.scroll-view {
			flex: 1;
			margin-top: 8rpx;
			.cell {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 24rpx 13rpx;
				margin: 16rpx 32rpx 0 32rpx;
				background-color: #FFFFFF;
				box-shadow: 0px 0px 32rpx rgba(28, 45, 70, 0.04);
				border-radius: 4rpx;
				.cell-left-title {
					font-size: 32rpx;
					color: #222222;
				}
				.cell-center {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-top: 12rpx;
					.cell-center-left {
						font-size: 28rpx;
						color: #222222;
					}
					.cell-center-right {
						margin-left: 24rpx;
						font-size: 28rpx;
						color: #1989FA;
					}
				}
				.cell-time {
					margin-top: 12rpx;
					font-size: 24rpx;
					color: #999999;
				}
				.tag-view {
					background-color: #EDF6FF;
					border-radius: 2.5rpx;
					width: 80rpx;
					height: 40rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					&.active {
						background: rgba(212, 0, 0, 0.08);
					}
					.tag-text {
						font-size: 28rpx;
						color: #1989FA;
						&.active {
							color: #D40000;
						}
					}
				}
				.tag-view-guo{
					background-color: #f2f2f2;
					border-radius: 2.5rpx;
					padding: 0 10rpx;
					height: 40rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					.tag-text{
						font-size: 28rpx;
						color: #999999;
					}
				}
			}
		}
	
		.bottom-view {
			margin: 20rpx 32rpx 20rpx 32rpx;
			background: #1989FA;
			border-radius: 4rpx;
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.bottom-text {
				font-size: 32rpx;
				color: #FFFFFF;
			}
		}
	}
</style>