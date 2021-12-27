<template>
	<view class="content">
		<u-navbar title="请假详情" :border="true"></u-navbar>
		<view class="main">
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>请假学生</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">白泽</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>请假类型</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">事假</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>开始时间</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">2021-11-01</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>结束时间</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">2021-11-02</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>请假天数</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">1天</view>
				</view>
			</view>
			<view class="btm">
				<view class="uploadBox">
					<image v-for="item in imgList" :src="item" mode="aspectFill"></image>
				</view>
				<view class="textMain">我需要请假</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[
					'../../../../static/luyan/images/icon_leave_img.png',
					'../../../../static/luyan/images/icon_leave_img.png',
					'../../../../static/luyan/images/icon_leave_img.png'
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;
		.main{
			width: 100%;
			.item{
				width: 100%;
				padding: 34upx 32upx;
				border-bottom: 1upx solid #F2F2F2;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					display: flex;
					align-items: center;
					.laber{
						margin-right: 48upx;
						font-family: 'PingFang SC';
						font-size: 32upx;
						color: #222222;
						.star{
							color: #d40000;
						}
					}
					.labVal{
						width: 300upx;
						font-family: 'PingFang SC';
						font-size: 32upx;
						color: #666666;
			
					}
				}
			}
			.btm{
				width: 100%;
				margin-top: 40upx;
				padding: 0 32upx;
				box-sizing: border-box;
				.uploadBox{
					width: 100%;
					display: flex;
					image{
						width: 120upx;
						height: 108upx;
						margin-right: 10upx;
						margin-bottom: 10upx;
						border-radius: 8upx;
					}
				}
				.textMain{
					width: 100%;
					height: 330upx;
					margin-top: 32upx;
					padding: 24upx 18upx;
					box-sizing: border-box;
					background: #F9F9F9;
					border-radius: 4upx;
					font-family: 'PingFang SC';
					font-weight: 500;
					font-size: 28upx;
					color: #222222;
				}
			}
		}
	}
</style>
