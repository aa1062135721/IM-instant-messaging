<template>
	<view class="content">
		<u-navbar title="联系老师" :border="true"></u-navbar>
		<view class="main">
			<view class="items" v-for="(item,i) in dataList" :key="i" @tap="goChat(i)">
				<view class="left">
					<image :src="item.header" mode="aspectFit"></image>
					<view class="">
						<view class="title">{{item.name}}</view>
						<view class="text">{{item.teacher}}</view>
					</view>
				</view>
				<view class="right" v-if="item.num > 0">
					<view>{{item.num}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[
					{header:'../../../../static/luyan/images/icon_header.png',name:'苏风',teacher:'喂鱼的化学老师',num:8},
					{header:'../../../../static/luyan/images/icon_header.png',name:'苏风',teacher:'喂鱼的化学老师',num:0},
					{header:'../../../../static/luyan/images/icon_header.png',name:'苏风',teacher:'喂鱼的化学老师',num:0},
					{header:'../../../../static/luyan/images/icon_header.png',name:'苏风',teacher:'喂鱼的化学老师',num:0},
					{header:'../../../../static/luyan/images/icon_header.png',name:'苏风',teacher:'喂鱼的化学老师',num:0},
					{header:'../../../../static/luyan/images/icon_header.png',name:'苏风',teacher:'喂鱼的化学老师',num:0}
				]
			};
		},
		methods: {
			goChat(i) {
				let id = i + 2;
				console.log(id)
				// uni.navigateTo({
				// 	url:'/pages/luyan/homeSchool/addChildren/index'
				// })
				this.$store.dispatch('checkoutConversation', 'C2Cuser' + id)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		.main{
			width: 100%;
			.items{
				width: 100%;
				padding: 32upx 26upx;
				border-bottom: 1upx solid #F2F2F2;
				box-sizing: border-box;
				background-color: #FFFFFF;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					display: flex;
					align-items: center;
					image{
						width: 120upx;
						height: 120upx;
						margin-right: 26upx;
					}
					.title{
						font-family: 'PingFang SC';
						font-weight: bold;
						font-size: 32upx;
						color: #222222;
						margin-bottom: 16upx;
					}
					.text{
						font-family: 'PingFang SC';
						font-size: 28upx;
						color: #666666;
					}
				}
				.right{
					view{
						width: 40upx;
						height: 40upx;
						border-radius: 50%;
						background: #D40000;
						display: flex;
						justify-content: center;
						align-items: center;
						font-family: 'PingFang SC';
						font-size: 24upx;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>
