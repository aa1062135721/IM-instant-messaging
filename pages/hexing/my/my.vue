<template>
	<view class="my">
		<!-- 顶部信息 -->
		<view class="top">
			<image class="topBg1" src="@/static/hexingImg/wdbg1.png" mode=""></image>
			<image class="topBg2" src="@/static/hexingImg/wdbg2.png" mode=""></image>
			<view class="info" @click="toInfo">
				<image v-if="info.head" class="head" :src="info.head" mode="scaleToFill"></image>
				<image v-else class="head" src='@/static/hexingImg/headImg.jpg' mode="scaleToFill"></image>
				<view class="infoTxt">
					<view class="name" v-if="info">
						{{info.userName||'点击设置个人信息'}}
					</view>
					<view class="name" v-else>
						点击登录
					</view>
					<view class="tel" v-if="info">
						{{tPhone(info.phone)}} >
					</view>
				</view>
			</view>
		</view>

		<!-- 中间我的四个选项 -->
		<view class="mine">
			<view class="mineItem" @click="navigate({url: '/pages/hexing/my/myRelease'})">
				<image src="@/static/hexingImg/wdfb.png" mode=""></image>
				<view class="">
					我的发布
				</view>
			</view>
			<!-- navigate({url: '/pages/hexing/my/myConcern'}) -->
			<view class="mineItem" @click="navigate({url: '../../jyx/myfocus'})">
				<image src="@/static/hexingImg/wdgz.png" mode=""></image>
				<view class="">
					我的关注
				</view>
			</view>
			<!-- navigate({url: '/pages/hexing/my/concernMe'}) -->
			<view class="mineItem" @click="navigate({url: '../../jyx/myenterprise'})">
				<image src="@/static/hexingImg/gzwd.png" mode=""></image>
				<view class="">
					我的企业
				</view>
			</view>

			<view class="mineItem" @click="navigates({url: '/pages/hexing/my/authentication'})">
				<image src="@/static/hexingImg/smrz.png" mode=""></image>
				<view class="">
					实名认证
				</view>
				<view class="status" v-if="info.isAuth">
					{{info.isAuth}}
				</view>
			</view>
		</view>
		<!-- 下方导航列表 -->
		<view class="navList">
			<!-- <view class="navItem">
				<image class="navImg" src="@/static/hexingImg/qyrz.png" mode=""></image>
				<view class="">
					企业认证
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view>
			<view class="navItem">
				<image class="navImg" src="@/static/hexingImg/qyhgl.png" mode=""></image>
				<view class="">
					企业号管理
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view>
			<view class="navItem">
				<image class="navImg" src="@/static/hexingImg/wddt.png" mode=""></image>
				<view class="">
					我的动态
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view>
			<view class="navItem">
				<image class="navImg" src="@/static/hexingImg/cpfw.png" mode=""></image>
				<view class="">
					产品服务
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view> -->
			<!-- <view class="navItem" @click="navigate({url: '/pages/hexing/my/match'})" style="margin: 16rpx 0;">
				<image class="navImg" src="@/static/hexingImg/wdpp.png" mode=""></image>
				<view class="">
					我的匹配
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view> -->
			<!-- <view class="navItem">
				<image class="navImg" src="@/static/hexingImg/wdqb.png" mode=""></image>
				<view class="">
					我的钱包
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view> -->
			<view class="navItem" @click="navigate({url: '/pages/hexing/my/collection'})">
				<image class="navImg" src="@/static/hexingImg/sc.png" mode=""></image>
				<view class="">
					我的收藏
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view>
			<view class="navItem" @click="navigate({url: '/pages/jyx/community'})">
				<image class="navImg" src="@/static/hexingImg/sc.png" mode=""></image>
				<view class="">
					社区消息
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view>
			<!-- <view class="navItem">
				<image class="navImg" src="@/static/hexingImg/kb.png" mode=""></image>
				<view class="">
					卡包
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view> -->
			<view class="navItem" @click="toSet">
				<image class="navImg" src="@/static/hexingImg/sz.png" mode=""></image>
				<view class="">
					设置
				</view>
				<image class="navBtn" src="@/static/hexingImg/icon.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '',
				info: '', //用户信息
			}
		},
		onShow() {
			this.info = ''
			uni.getStorage({
				key: 'token',
				success: (token) => {
					this.token = token.data
					this.getInfo()
			 },
				fail() {}
			});
			this.getUserInfo()
		},
		onLoad() {},
		methods: {
			navigate(params) {
				if (!uni.getStorageSync('token')) {
					uni.showToast({
						title: '请先登录',
						icon: 'none',
						duration: 2000
					});
					return
				}
				uni.navigateTo({
					...params
				})
			},
			
			// 获取用户头像等信息
			getUserInfo () {
				this.$api.to_http('/user/getInfo', {}, 'GET').then((res) => {
					console.log(res, 4444)
					if (res.data.code == 200) {
						let info = res.data.data
						wx.$app.updateMyProfile({
						  nick: info.userName || '',
						  avatar: info.head  || '',
						  gender: this.TIM.TYPES.GENDER_FEMALE,
						  selfSignature: '',
						  allowType: this.TIM.TYPES.ALLOW_TYPE_NEED_CONFIRM
						}).then((res) => {
						  console.log(res); // 更新资料成功
						}).catch((imError) => {
						  console.warn('updateMyProfile error:', imError); // 更新资料失败的相关信息
						});
					}
				})
			},
			
			navigates(params) {
				if (!uni.getStorageSync('token')) {
					uni.showToast({
						title: '请先登录',
						icon: 'none',
						duration: 2000
					});
					return
				}
				if (this.info.isAuth === "审核中") {
					uni.showToast({
						icon: 'none',
						title: '正在审核中'
					})
					return;
				} else if (this.info.isAuth === "已认证") {
					uni.showToast({
						icon: 'none',
						title: '已实名认证'
					})
					return;
				} else {
					uni.navigateTo({
						...params
					})
				}

			},
			getInfo() {
				this.$request('/user/getInfo', {}, "GET").then(res => {
					console.log(res)
					this.info = res
				});
			},
			toInfo() {
				if (!this.info) {
					uni.navigateTo({
						url: '/pages/hexing/index/index'
					})
				} else {
					uni.navigateTo({
						url: '/pages/hexing/my/info'
					})
				}
			},
			//将电话中间4位变成*
			tPhone(tel) {
				tel = tel + ''
				return tel.substr(0, 3) + "****" + tel.substr(7);
			},
			toSet() {
				uni.navigateTo({
					url: '/pages/hexing/my/set'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		background-color: #F9F9F9;
	
	.top {
			position: relative;
			padding-top: 128rpx;
			background-color: #1989FA;
			width: 750rpx;
			height: 342rpx;
			overflow: hidden;

			.topBg1 {
				position: absolute;
				width: 400rpx;
				height: 1200rpx;
				left: 150rpx;
				top: -100rpx;
				transform: rotate(-15deg)
			}

			.topBg2 {
				position: absolute;
				width: 400rpx;
				height: 1200rpx;
				right: -60rpx;
				top: -100rpx;
				transform: rotate(-15deg)
			}

			.info {
				padding: 0 40rpx;
				display: flex;
				align-items: center;
				z-index: 999;

				.head {
					width: 136rpx;
					height: 136rpx;
					border-radius: 50%;
					margin-right: 32rpx;
					background-color: #dedede;
				}

				.infoTxt {
					z-index: 999;

					.name {
						font-size: 32rpx;
						color: #ffffff;
					}

					.tel {
						color: rgba(255, 255, 255, 0.6);
						font-size: 28rpx;
					}
				}

			}
		}

		.mine {
			position: relative;
			width: 750rpx;
			height: 188rpx;
			background-color: #ffffff;
			margin-top: -20rpx;
			border-radius: 20rpx 20rpx 0rpx 0rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.mineItem {
				width: 120rpx;
				text-align: center;
				font-size: 28rpx;
				color: #000000;
				position: relative;
				top: 0;
				right: 0;
				display: flex;
				flex-direction: column;
				align-items: center;

				image {
					width: 50rpx;
					height: 50rpx;
					margin-bottom: 20rpx;
				}

				.status {
					position: absolute;
					top: 35%;
					padding: 2upx 4upx;
					background: #326BFF;
					border-radius: 18upx;
					font-family: PingFang SC;
					font-style: normal;
					font-weight: normal;
					font-size: 18upx;
					color: #FFFFFF;

				}
			}
		}

		.navList {
			.navItem {
				height: 96rpx;
				padding: 0 30rpx;
				display: flex;
				align-items: center;
				background-color: #ffffff;
				border: 2rpx solid #F2F2F2;

				.navImg {
					width: 34rpx;
					height: 36rpx;
					margin-right: 20rpx;
				}

				view {
					font-size: 32rpx;
					color: #222222;
				}

				.navBtn {
					width: 11rpx;
					height: 21rpx;
					margin-left: auto;
				}
			}
		}
	}
</style>
