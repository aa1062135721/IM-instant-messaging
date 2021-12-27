<template>
	<view class="content">
		<u-navbar back-text="" title="家校沟通">
			<view class="navbar-right" slot="right" v-if="slotRight">
				<view class="nav_right" @tap="goNews">
					<image src="../../../../static/luyan/images/icon_vector.png" mode="aspectFit"></image>
					<u-badge size="mini" type="error" :offset="[-18,-20]" count="99"></u-badge>
				</view>
			</view>
		</u-navbar>
		<view class="top">
			<view class="top_info">
				<view class="top_info_left">
					<view class="header">
						<image src="../../../../static/luyan/images/icon_header.png" mode="aspectFit"></image>
					</view>
					<view class="text">
						<view class="title sheny">苏鱼</view>
						<view class="sheny">梁平区梁平中学高2021级3班</view>
					</view>
				</view>
				<view class="top_info_right" @tap="showAdd">
					<image src="../../../../static/luyan/images/icon_polygon_down.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="top_add" v-if="isShow">
				<view class="top_add_item" @tap="goAddChild">添加小孩</view>
				<view class="top_add_item" @tap="goInviteRelatives">邀请亲人</view>
			</view>
		</view>
		<view class="swiperBox">
			<swiper class="swiper-box" :indicator-dots="indicatorDots" indicator-color="rgba(255, 255, 255, 0.4)" indicator-active-color="#FFFFFF" :autoplay="true" circular="true">
				<swiper-item v-for="(item, index) in 3" :key="index">
					<view class="swiperBoxs">
						<image src="../../../../static/luyan/images/icon_unsplash.png" mode="aspectFit"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="menu_list">
			<view class="" @tap="goNotice">
				<image src="../../../../static/luyan/images/icon_home_group1.png" mode="aspectFit"></image>
				<view class="">校园通告</view>
			</view>
			<view class="" @tap="goCurrentCourse">
				<image src="../../../../static/luyan/images/icon_home_group2.png" mode="aspectFit"></image>
				<view class="">本期课程</view>
			</view>
			<view class="" @tap="goStudentLeave">
				<image src="../../../../static/luyan/images/icon_home_group3.png" mode="aspectFit"></image>
				<view class="">学生请假</view>
			</view>
			<view class="" @tap="goContactTeacher">
				<image src="../../../../static/luyan/images/icon_home_group4.png" mode="aspectFit"></image>
				<view class="">联系老师</view>
			</view>
			<view class="" @tap="goSchoolScribing">
				<image src="../../../../static/luyan/images/icon_home_group5.png" mode="aspectFit"></image>
				<view class="">学区划片</view>
			</view>
		</view>
		<view class="main_list">
			<view class="item" v-for="(it,index) in 2" :key="index">
				<view class="item_top">
					<view class="item_top_left">
						<image src="../../../../static/luyan/images/icon_ellipse.png" mode="aspectFit"></image>
						<view class="">张老师</view>
					</view>
					<view class="item_top_right">
						<chunLei-popups v-model="isMenu" direction="row" :popData="menuData" @tapPopup="tapPopup" placement="top-end">
						        </chunLei-popups>
						<image src="../../../../static/luyan/images/icon_home_more.png" @tap="isMenu=!isMenu" mode="aspectFit"></image>
					</view>
				</view>
				<view class="item_text" :class="{allshe3:showAll}">
					幼儿园秋季大扫除清洁活动，给孩子一个良好的生活环境幼儿园秋季大扫除清洁活动，给孩子一个良好的生活环境境幼儿园秋季大扫除清洁活动儿园秋季大扫除清洁活动
				</view>
				<view class="item_img">
					<image src="../../../../static/luyan/images/icon_unsplash_1.png" mode="aspectFill" v-for="(item,i) in 3" :key="i"></image>
				</view>
				<view class="item_time">
					<view class="item_time_left">
						<text>2021-10-31</text>
						<text>10:10</text>
					</view>
					<view class="item_time_right" @tap="showAll=!showAll">全文</view>
				</view>
				<view class="iten_assist">
					<view class="iten_assist_left">
						<image src="../../../../static/luyan/images/icon_vector_a.png" mode="aspectFit"></image>
						<view class="">3</view>
					</view>
					<view class="iten_assist_right sheny">小祁妈妈、小苏妈妈、小苏妈妈..</view>
				</view>
				<view class="item_comment">
					<view class="item_comment_main">
						<view class="left">小祁妈妈：</view>
						<view class="right">真是个好活动啊</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import chunLeiPopups from '@/components/chunLei-popups/chunLei-popups.vue';
	export default {
		components: {
			chunLeiPopups
		},
		data() {
			return {
				title: 'Hello',
				slotRight: true,
				indicatorDots: true,
				isShow: true,
				showAll: true,
				isMenu: false,
				menuData:[
					{id:1,title:'点赞'},
					{id:2,title:'评论'},
				]
			}
		},
		onLoad() {

		},
		methods: {
			// 跳转消息页
			goNews(){
				uni.switchTab({
					url:'/pages/ly-lq/home/home'
				})
			},
			// 展开操作
			showAdd(){
				this.isShow = !this.isShow;
			},
			// 添加小孩
			goAddChild(){
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/addChildren/index'
				})
			},
			// 邀请亲人
			goInviteRelatives(){
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/inviteRelatives/index'
				})
			},
			// 校园通告
			goNotice(){
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/campusNotice/index'
				})
			},
			// 本期课程
			goCurrentCourse(){
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/currentCourse/index'
				})
			},
			// 学生请假
			goStudentLeave(){
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/studentLeave/index'
				})
			},
			// 联系老师
			goContactTeacher(){
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/contactTeacher/index'
				})
			},
			// 学区划片
			goSchoolScribing(){
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/schoolScribing/index'
				})
			},
			tapPopup(val){
				console.log(val)
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		width: 100%;

		.navbar-right {
			// width: 44upx;
			// height: 44upx;
			margin-right: 24upx;
			box-sizing: border-box;

			.nav_right {
				position: relative;

				image {
					width: 36upx;
					height: 38upx;
				}
			}
		}

		.top {
			width: 100%;
			padding: 38upx 28upx;
			box-sizing: border-box;
			background-color: #FFFFFF;

			.top_info {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.top_info_left {
					display: flex;
					align-items: center;

					.header {
						flex: 1;
						margin-right: 24upx;

						image {
							width: 120upx;
							height: 120upx;
						}
					}

					.text {
						width: 520upx;
						font-family: 'PingFang SC';
						font-size: 28upx;
						color: #666666;

						.title {
							// width: 100%;
							font-size: 32upx;
							color: #222222;
							margin-bottom: 12upx;
						}
					}
				}

				.top_info_right {
					width: 24upx;

					image {
						width: 24upx;
						height: 16upx;
					}
				}
			}

			.top_add {
				width: 100%;
				margin-top: 24upx;
				display: flex;
				justify-content: flex-end;

				.top_add_item {
					border: 3upx solid #1989FA;
					padding: 12upx;
					margin-left: 16upx;
					box-sizing: border-box;
					font-family: 'PingFang SC';
					font-size: 28upx;
					color: #1989FA;

				}
			}
		}

		.swiperBox {
			width: 100%;
			padding: 24upx;
			box-sizing: border-box;

			.swiperBoxs {
				width: 100%;
				height: 300upx;

				image {
					width: 100%;
					height: 300upx;
					border-radius: 8upx;
				}
			}
		}
		.menu_list{
			width: 100%;
			padding: 24upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-around;
			align-items: center;
			text-align: center;
			font-family: 'PingFang SC';
			font-size: 28upx;
			color: #000000;
			image{
				width: 88upx;
				height: 88upx;
			}
		}
		.main_list{
			width: 100%;
			margin-top: 48upx;
			padding: 0 24upx 24upx;
			box-sizing: border-box;
			.item{
				width: 100%;
				padding: 24upx;
				margin-bottom: 16upx;
				border-radius: 4upx;
				background-color: #FFFFFF;
				box-sizing: border-box;
				.item_top{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.item_top_left{
						display: flex;
						align-items: center;
						font-family: 'PingFang SC';
						font-size: 28upx;
						color: #222222;
						image{
							width: 56upx;
							height: 56upx;
							margin-right: 16upx;
						}
					}
					.item_top_right{
						position: relative;
						image{
							width: 34upx;
							height: 6upx;
						}
					}
				}
				.item_text{
					width: 100%;
					margin: 24upx 0 16upx;
					font-family: 'PingFang SC';
					font-size: 28upx;
					color: #666666;
				}
				.item_img{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					image{
						width: 214upx;
						height: 206upx;
					}
				}
				.item_time{
					width: 100%;
					margin-top: 16upx;
					padding-bottom: 24upx;
					border-bottom: 1upx solid #F2F2F2;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-family: 'PingFang SC';
					font-size: 24upx;
					.item_time_left{
						color: #999999;
					}
					.item_time_right{
						color: #1989FA;
					}
				}
				.iten_assist{
					width: 100%;
					margin-top: 28upx;
					display: flex;
					align-items: center;
					.iten_assist_left{
						margin-right: 16upx;
						display: flex;
						align-items: center;
						font-family: 'PingFang SC';
						font-size: 24upx;
						color: #1989FA;
						image{
							width: 32upx;
							height: 28upx;
							margin-right: 4upx;
						}
					}
					.iten_assist_right{
						font-family: 'PingFang SC';
						font-size: 24upx;
						color: #999999;
					}
				}
				.item_comment{
					width: 100%;
					margin-top: 36upx;
					.item_comment_main{
						width: 100%;
						display: flex;
						align-items: center;
						margin: 24upx 0;
						font-family: 'PingFang SC';
						font-size: 28upx;
						.left{
							color: #1989FA;
						}
						.right{
							color: #000000;
						}
					}
				}
			}
		}

	}
</style>
