<template>
	<view class="home">
		<!-- 顶部占位盒子 -->
		<view class="topBox"></view>
		<!-- 顶部位置、搜索框 -->
		<view class="top">
			<view class="addr">
				<image class="addrImg" src="@/static/hexingImg/wz.png" mode=""></image>
				<view class="addrTxt">
					{{location}}
				</view>
			</view>
			<view class="search" @click="navigate({url: '/pages/jyx/search/search'})">
				<image class="searchTmg" src="@/static/hexingImg/ss.png" mode=""></image>
				<input type="text" value="" disabled="" placeholder="关键词搜索房源/产品/动态等" />
				<view class="searchBtn">
					搜索
				</view>
			</view>
		</view>

		<!-- 通知框 -->
		<view class="notice" v-if="news.length>0" @click="godetails(news[0].newsId)">
			<image src="@/static/hexingImg/tz.png" mode=""></image>
			<view class="noticeTxt">
				{{news[0]?news[0].newsTitle:'- 暂无通知 -'}}
			</view>
			<view class="noticeBtn">
				展开查看
			</view>
		</view>
		<view class="" style="background-color: #FFFFFF;">
			<!-- 轮播图 -->

			<swiper circular class="banner" indicator-dots autoplay circular
				indicator-color="rgba(225, 225, 225, 0.5)" indicator-active-color="#ffffff">

				<!-- <block v-for="(item,index) in banner" :key="index">@change="swiperChang" 
					<swiper-item v-if="item.mediaType=='1' ">
						<video id="myVideo" controls :src="item.url" poster="http://47.111.10.36/upload/20211222/20211222214024597.png"></video>
					</swiper-item>
					<swiper-item v-else>
						<image :src="item.url" mode="" ></image>:style="{display:displayValue}"
					</swiper-item>
				</block> -->
				<block v-for="(item,index) in banner" :key="index">
					<swiper-item class="swiper-item" v-if="item.mediaType=='1'">
						<image src="../../../static/jyx/banner1.png" mode="aspectFill"
							class="banner_img"></image>
						<view class="play-icon" @tap.stop="playvideo('myVideo')" v-if="item.url"></view>
						<block>
							<video v-if="videoFlag" :style="{display:displayValue}" id="myVideo" :src="item.url" @fullscreenchange="fullscreenchange"
								controls poster="../../../static/jyx/banner1.png"></video>
						</block>
					</swiper-item>
					<swiper-item class="swiper-item" v-else>
						<image :src="item.url" :data-src="item.url" @click="openCarousel(item.url)"></image>
					</swiper-item>
				</block>
			</swiper>



			<!-- <u-swiper :list="banner" keyName="item" :autoplay="true" @click="openCarousel(item)"></u-swiper>

			<!-- 常用服务 -->
			<view class="service">
				<view class="title">
					<!-- <view class="line"></view>
					<view class="txt">
						常用服务
					</view> -->
				</view>
				<view class="serviceList">

					<view class="serviceItem" @click="navigate({url: '/pages/vvo-yao/product-release/release-goods'})">
						<image src="@/static/hexingImg/cpfb.png" mode=""></image>
						<view class="">
							产品发布
						</view>
					</view>
					<view class="serviceItem" @click="navigate({url: '/pages/jyx/company'})">
						<image src="@/static/hexingImg/qycx.png" mode=""></image>
						<view class="">
							企业查询
						</view>
					</view>
					<view class="serviceItem" @click="navigate({url: '/pages/vvo-yao/house-manage/list?type=1'})">
						<image src="@/static/hexingImg/fwzs.png" mode=""></image>
						<view class="">
							房屋租售
						</view>
					</view>
					<view class="serviceItem" @click="navigate({url: '/pages/hexing/home/transit'})">
						<image src="@/static/hexingImg/gjdd.png" mode=""></image>
						<view class="">
							公交到达
						</view>
					</view>
					<view class="serviceItem" @click="navigate({url: '/pages/luyan/homeSchool/homeSchool/index'})">
						<image src="@/static/hexingImg/jxgt.png" mode=""></image>
						<view class="">
							家校沟通
						</view>
					</view>

					<view class="serviceItem" @click="getInfo()">
						<!-- <view class="serviceItem" @click="navigate({url: '/pages/vvo-yao/industry-council/index'}) "> -->
						<image src="@/static/hexingImg/ywh.png" mode=""></image>
						<view class="">
							业委会
						</view>
					</view>
					<view class="serviceItem" @click="navigate({url: '/pages/luyan/onlineRepair/onlineRepair/index'})">
						<image src="@/static/hexingImg/zxbx.png" mode=""></image>
						<view class="">
							在线报修
						</view>
					</view>
					<view class="serviceItem" @click="navigate({url: '/pages/hexing/home/service'})">
						<image src="@/static/hexingImg/gd.png" mode=""></image>
						<view class="">
							更多
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="nnav" v-if="flag" @click="godetail('/pages/luyan/onlineRepair/opportunities/index')">
			<view class="nnav-title">业务机会</view>
			<view class="view">

				<image src="../../../static/jyx/Vector.png" mode=""></image>
			</view>
		</view>
		<!-- 推荐 -->
		<u-tabs :list="tabList" @change="tabChaner" inactiveColor="#969799" activeColor="#1989FA" fontSize="36"
			:scrollable="false" :current='current'></u-tabs>
		<view class="recommend">
			<!-- <view class="title">
				<view class="line"></view> 
				 <view class="txt">
					全部
				</view> 
			</view> -->
			<view class="recommendList">
				<view class="recommendItem" v-for="(item,index1) in goodlist" :key="index1"
					@click.stop="goview(item.type,item.keyId)">
					<view class="recommendItemTxt">
						<view class="recommendItemLeft">
							<view class="recommendItemLeftTxt1">{{item.typeDesc}}</view>

							<view class="recommendItemLeftTxt2">
								发布时间:
							</view>
						</view>
						<view class="recommendItemRight">
							<view class="recommendItemRightTxt1">
								{{item.title||'-'}}
							</view>

							<view class="recommendItemRightTxt2">
								{{item.createTime||'-'}}
							</view>
						</view>
					</view>
					<!-- <view class="" v-for="(item1,index1) in item.pictures">
						<image v-if="item1.pictures" :src="item1.pictures" mode="scaleToFill"></image>
					</view> -->
					<view class="img" v-if="item.pictures&& item.pictures.length > 0">
						<!-- <image v-for="item in it.pictures" :src="item" mode="aspectFill"></image> -->
						<u-image class="pic" v-for="(item1,imgIndex) in item.pictures" :key="imgIndex" :src="item1"
							mode="aspectFill" @tap="previewImg(item.pictures,imgIndex)" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
							<view slot="error" style="font-size: 24upx;">加载失败</view>
						</u-image>
					</view>

				</view>
				<view class="" style="height: 100upx;"></view>
			</view>
		</view>
		<image class="release" @click="navigate({url: '/pages/luyan/find/release/index'})"
			src="@/static/hexingImg/fb.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: [], //轮播
				location: '',
				goodlist: [], //推荐列表
				pictures: [],
				tabList: [{
						id: null,
						name: '全部'
					},
					{
						id: 1,
						name: '房源'
					},
					{
						id: 2,
						name: '动态'
					},
					{
						id: 3,
						name: '产品'
					}
				],
				noPage: false,
				pageNo: 0,
				pageSize: 10,
				current: 0,
				type: "",
				news: [], //未读消息
				flag: false,
				displayValue: 'none',
				videoFlag: false,
				videoContext: "",
				videoFlag: false,
			}
		},
		onLoad() {
			this.videoFlag = true;
			this.getLocation()
			// this.getInfo()
			//this.page()

		},
		onPageScroll(e) {
			if (e.scrollTop >= 300) {
				// this.$refs.playVideo[0].pause()
				uni.createVideoContext('myVideo', this).pause()
			}
		},
		onHide() {
			// this.$refs.playVideo.pause()
			uni.createVideoContext('myVideo', this).pause()
			// console.log(this.$refs.playVideo,666)
		},
		onShow() {

			this.login()
			this.claim();
			this.pageNo = 1;
			this.goodlist = [];
			this.getRecommend(); //推荐列表
			this.getBannerList(); //轮播图
		},
		onReachBottom() {
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
			// this.pageNo++
			this.getRecommend(); //推荐列表


		},
		methods: {
			fullscreenchange(e) {
				console.log(e)
				if (!e.detail.fullScreen) {
					this.displayValue = 'none'
					this.videoContext.pause()
					console.log(e.target.fullScreen)
				}
			},
			playvideo: function(e) {
				console.log(e)
				this.displayValue = ''
				this.videoContext = uni.createVideoContext(e, this);
				this.videoContext.play();
				this.videoContext.requestFullScreen({
					direction: 0
				});
			},
			// swiperChang(e) {
			// 	// console.log(e.detail.current)
			// 	if (e.detail.current != 0) {
			// 		uni.createVideoContext('myVideo', this).pause()
			// 	}

			// },
			//当前用户是否认领企业
			claim() {
				this.$api.to_http('/reportrepair/claim-status', {}, 'GET').then((res) => {
					// console.log(res)
					if (res.data.code == 200) {
						this.flag = res.data.data.flag
						// console.log(this.flag)
					}
				})
			},
			previewImg(arr, i) {
				console.log(arr)
				console.log(i)
				uni.previewImage({
					indicator: "none", //图片指示器样式
					current: i, //图片索引值
					urls: arr //需要预览的图片链接列表
				});
			},
			// tab切换
			tabChaner(i) {
				this.current = i;
				this.pageNo = 1;
				this.goodlist = [];
				this.type = this.current
				this.getRecommend();
			},
			navigate(params) {
				// console.log(params)
				uni.navigateTo({
					...params
				})
			},
			login() {
				this.$api.to_http('/user/userSig', {}, 'GET').then((res) => {
					if (res.data.code == 200) {
						// console.log(res.data.data)
						wx.$app.login({
							userID: res.data.data.userId,
							userSig: res.data.data.userSig
						}).then((res) => {}).catch(() => {})
					}
				})
			},
			// 获取位置
			getLocation() {
				uni.getLocation({
					type: 'wgs84',
					geocode: true,
					success: (res) => {
						console.log(res)
						// console.log(res)
						uni.setStorageSync('latitude', res.latitude) //29.582897
						uni.setStorageSync('longitude', res.longitude) //106.528576
						// console.log(uni.getStorageSync('latitude') )
						// console.log(uni.getStorageSync('longitude') )
						if (res.address) {
							let addr = res.address
							this.location = addr.poiName
							uni.setStorageSync('curLocation', this.location)
						} else {
							this.location = '无法获取位置'
						}
					},
					fail: (err) => {
						// console.log(err)
						this.location = '无法获取位置'
					}
				});
			},
			// 打开地图小程序
			toMap() {
				// wx2be1bfa1c65e826b
				plus.share.getServices(function(res) {
					var sweixin = null;
					for (var i = 0; i < res.length; i++) {
						var t = res[i];
						if (t.id == 'weixin') {
							sweixin = t;
						}
					}
					if (sweixin) {
						sweixin.launchMiniProgram({
							id: 'gh_d31d2e5e12e5',
							type: 0
						}, );
					}
				}, function(res) {
					// console.log(JSON.stringify(res));
				});
			},
			// openCarousel(item) { //轮播
			// 	console.log(111)

			// },
			//预览图片
			openCarousel: function(e) {
				// console.log(e)
				let arr = []
				this.banner.forEach((item, index) => {
					if (index != 0) {
						arr.push(item.url)
					}

				})
				var current = e.url
				uni.previewImage({
					current: current,
					urls: arr
				})
			},
			//推荐列表
			getRecommend() {
				uni.hideLoading()
				let that = this
				this.$api.to_http('/mainpage/recommend', {
					pageNo: this.pageNo++,
					pageSize: this.pageSize,
					type: this.type, //不传则默认全部
				}, 'POST', '', false).then((res) => {
					// console.log(res)s
					res = res.data
					if (res.code != 200) {
						return that.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					if (res.data.records.length > 0) {
						res.data.records.forEach(item => {
							let arr = [];
							if (item.pictures.length > 0) {
								item.pictures.forEach(itemChild => {
									let url = that.imgUrl + itemChild;
									arr.push(url)
								})
							}
							item.pictures = arr;
						})
						that.goodlist = that.goodlist.concat(res.data.records);
						// console.log(that.goodlist)
					} else {
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						that.noPage = true;
					}

				})
			},
			//轮播列表
			getBannerList() {
				this.$api.to_http('/common/media-content/get-rotation', {}, 'GET', '', false).then((res) => {

					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					let arr = [];
					if (res.data.length > 0) {
						res.data.forEach(item => {
							let obj = {}
							obj.mediaType = item.mediaType
							obj.url = this.baseUrlImg + item.url;
							arr.push(obj)
						})
					}
					this.banner = arr

					// console.log(this.banner, '我是轮播')
					//console.log(this.banner)
				})
			},
			getInfo() {
				this.$request('/user/getInfo', {}, "GET").then(res => {
					res = res.isAuth
					if (res === '未认证') {
						uni.showToast({
							icon:'none',
							title:'请先实名认证'
						})
						return;
					}
					if (res === "审核中"||res === "已驳回") {
						uni.showToast({
							icon:'none',
							title:'正在审核中,请稍候'
						})
						return;
					} else {
						this.$request('/ahe/page', {
							pageNo: this.pageNo,
							pageSize: this.pageSize
						}).then(res => {
							console.log(res)
							if (res.records !== []) {
								uni.navigateTo({
									// url: '/pages/vvo-yao/industry-council/quarters'
									url: '/pages/vvo-yao/industry-council/index'
								})
							}
						})


					}
					this.info = res
				});
			},
			goview(type, id) {
				let url = ''
				if (type == 1) { //房源
					//uni.setStorageSync('roomRsId', id)
					url = '/pages/vvo-yao/house-manage/detail?id=' + id
				} else if (type == 2) { //动态

				} else if (type == 3) { //产品
					url = '/pages/vvo-yao/product-release/goods-detail?goodsId=' + id
				}
				uni.navigateTo({
					url: url
				})
			},
			// page(pageSize, pageNo) {
			// 	this.$request('/ahe/page', {}, "POST").then(res => {
			// 		console.log(res)

			// 	})
			// },
			//未读消息
			newslist() {
				this.$api.to_http('/news/list', {}, 'GET', '', false).then((res) => {
					console.log(res)
					this.news = res.data.data
				})
			},
			godetail(url) {
				uni.navigateTo({
					url: url
				})
			},
			godetails(id) {
				if (id) {
					uni.navigateTo({
						url: '/pages/jyx/community-details?id=' + id
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: '暂无详情'
					})
					return
				}

			}

		}
	}
</script>


<style scoped lang="scss">
	page {
		height: 100%;
		background-color: #F9F9F9;

		.home {}

		.topBox {
			width: 750rpx;
			height: var(--status-bar-height);
			background-color: #ffffff;
		}

		.top {
			padding: 30rpx 20rpx;
			display: flex;
			justify-content: space-between;
			background: #FFFFFF;

			.addr {
				width: 350rpx;
				display: flex;
				align-items: center;

				.addrImg {
					width: 40rpx;
					height: 34rpx;
					margin-right: 18rpx;
				}

				.addrTxt {
					width: 280rpx;
					font-size: 27rpx;
					color: #000000;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					// margin: auto 0;
				}
			}

			.search {
				width: 392rpx;
				height: 72rpx;
				background: #F9F9F9;
				border-radius: 76px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.searchTmg {
					width: 27rpx;
					height: 27rpx;
					margin-left: 15rpx;
				}

				input {
					width: 230rpx;
					font-size: 24rpx;
				}

				.searchBtn {
					width: 80rpx;
					line-height: 72rpx;
					font-size: 24rpx;
					background: #1989FA;
					color: #ffffff;
					text-align: center;
					border-radius: 0rpx 40rpx 40rpx 0rpx;
				}
			}
		}

		.notice {
			width: 750rpx;
			height: 64rpx;
			color: #ED6A0C;
			background: #FDF0E7;
			display: flex;
			align-items: center;
			padding: 0 34rpx;
			box-sizing: border-box;

			image {
				width: 30rpx;
				height: 32rpx;
				margin-right: 18rpx;
			}

			.noticeTxt {
				font-size: 24rpx;
			}

			.noticeBtn {
				margin-left: auto;
				width: 112rpx;
				height: 40rpx;
				color: #ED6A0C;
				font-size: 24rpx;
				border: 2rpx solid #ED6A0C;
				box-sizing: border-box;
				border-radius: 4rpx;
				text-align: center;
			}
		}

		.banner {
			padding-top: 30rpx;
			margin: 0 auto;
			width: 690upx;
			height: 360rpx;
			overflow: hidden;
			box-sizing: border-box;

			.swiper-item {
				position: sticky;
				z-index: -1;
				width: 690upx;
				height: 360rpx;
				overflow: hidden;
				box-sizing: border-box;

				.play-icon {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
					background: url(../../../static/jyx/play.png) no-repeat center/100% 100%;
					width: 100rpx;
					height: 100rpx;
					z-index: 99;
				}

				image {
					width: 100%;
					height: 100%;
					position: relative;
					z-index: 0;
				}

				video {
					width: 100%;
					height: 100%;
					position: relative;
					z-index: 0;
				}

				#myVideo {
					position: static !important;
				}
			}
		}

		.title {
			margin-top: 32rpx;
			display: flex;
			align-items: center;
			padding: 0 32rpx;
			margin-bottom: 48rpx;

			.line {
				width: 8rpx;
				height: 24rpx;
				background-color: #1989FA;
				border-radius: 42rpx;
				margin-right: 12rpx;
			}

			.txt {
				font-size: 36rpx;
				line-height: 36rpx;
				color: #222222;
			}
		}

		.service {
			.serviceList {
				display: flex;
				flex-wrap: wrap;
				padding: 0 32rpx;

				.serviceItem {
					width: 170rpx;
					text-align: center;
					margin-bottom: 50rpx;

					image {
						width: 96rpx;
						height: 96rpx;
						margin-bottom: 20rpx;
					}

					view {
						font-size: 28rpx;
						color: #222222;
					}
				}
			}
		}

		.recommend {
			.recommendList {
				.recommendItem {
					width: 700rpx;
					// height: 184rpx;
					margin: 22rpx auto;
					background-color: #ffffff;
					padding: 24rpx;
					font-size: 24rpx;

					.recommendItemTxt {
						display: flex;
						line-height: 40rpx;

						.recommendItemLeft {
							width: 150rpx;

							.recommendItemLeftTxt1 {
								font-size: 24rpx;
								width: 100rpx;
								text-align: center;
								color: #1989FA;
								background: #EDF6FF;
								margin-bottom: 15rpx;
								//margin-right: 10upx;
							}

							.recommendItemLeftTxt2 {
								color: #666666;
							}
						}

						.recommendItemRight {
							flex: 1;

							.recommendItemRightTxt1 {
								overflow: hidden;
								text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 1;
								color: #222222;
								font-size: 28rpx;
								margin-bottom: 15rpx;
							}

							.recommendItemRightTxt2 {
								color: #666666
							}
						}
					}

					.img {
						width: 100%;
						margin-top: 20upx;
						display: flex;
						flex-wrap: wrap;

						.pic {
							width: 208upx !important;
							height: 200upx !important;
							margin-right: 4upx;
							margin-bottom: 4upx;
							border-radius: 4upx;

							img {
								width: 208upx;
								height: 200upx;
								border-radius: 4upx;

							}
						}
					}

					.recommendItemImg {
						width: 650rpx;
						height: 360rpx;
						border-radius: 4rpx;
						margin-top: 15rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					// .recommendItemTitle{
					// 	margin-bottom: 24rpx;
					// 	display: flex;
					// 	align-items: center;
					// 	font-size: 24rpx;
					// 	.recommendItemTitleTxt1{
					// 		width: 120rpx;
					// 		text-align: center;
					// 		color: #1989FA;	
					// 		background: #EDF6FF;
					// 	}
					// 	.recommendItemTitleTxt2{
					// 		color: #222222
					// 	}
					// }
					// .recommendItemTxt{
					// 	margin-bottom: 20rpx;
					// 	font-size: 24rpx;
					// 	color: #666666;
					// }
					// .recommendItemImg{
					// 	width: 654rpx;
					// 	height: 360rpx;
					// }
				}
			}
		}

		.release {
			width: 108rpx;
			height: 108rpx;
			position: fixed;
			right: 40rpx;
			bottom: 194rpx;
		}
	}

	.nnav {
		display: flex;
		background-color: #fff;
		margin: 24upx;
		box-sizing: border-box;
		padding: 8upx;

		.nnav-title {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 36upx;
			color: #1989FA;
			font-weight: bold;
		}

		.view {
			display: flex;
			justify-content: flex-end;
			align-items: center;

			image {
				width: 24upx;
				height: 24upx;

			}
		}

	}
</style>
