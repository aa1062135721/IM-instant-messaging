<template>
	<view class="content">
		<u-navbar title="请假记录" :border="true"></u-navbar>
		<view class="main">
			 <u-row class="items" v-for="(item,i) in dataList" :key="i">
				<u-col span="2">
					<view class="title">{{item.type == 1 ? '事假' : '病假'}}</view>
				</u-col>
				<u-col span="4" textAlign="center">
					<view class="time">{{item.time}}</view>
				</u-col>
				<u-col span="2" textAlign="center">
					<view class="data">
						<text class="num">{{item.num}}</text>
						<text>天</text>
					</view>
				</u-col>
				<u-col span="4" textAlign="right">
					<view class="info" @tap="goDetail(i)">查看详情</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'2',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
					{type:'1',time:'2021-10-12',num:'1'},
				]
			};
		},
		methods: {
			// 跳转详情
			goDetail(i) {
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/leaveDetail/index?id='+i
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;
		.main{
			width: 100%;
			.items{
				width: 100%;
				padding: 34upx 32upx;
				border-bottom: 1upx solid #F2F2F2;
				box-sizing: border-box;
				font-family: 'PingFang SC';
				font-size: 32upx;
				.title{
					color: #222222;
				}
				.time{
					color: #666666;
				}
				.data{
					color: #666666;
					.num{
						color: #ED6A0C;
					}
				}
				.info{
					font-size: 28upx;
					color: #1989FA;
				}
			}
		}
	}
</style>
