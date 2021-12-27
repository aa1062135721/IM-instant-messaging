<template>
	<view class="content">
		<!-- 顶部占位盒子 -->
		<view class="header_status"></view>
		<view class="header">
			<u-tabs :list="tabList" @change="tabChaner" inactiveColor="#969799" activeColor="#1989FA" fontSize="28"
				:scrollable="false" :current='current'></u-tabs>
			<view class="right" @tap="goRelease">
				<image src="../../../../static/luyan/images/icon_fint_build.png" mode="aspectFit"></image>
			</view>
		</view>
		<!--  附近-->
		<view class="main" v-if="current==1"> 
			<!-- 商品 -->
			<view class="list" v-for="(it,i) in dataList" :key="i">
				 <view v-if="it.type==3">
					<view class="top">
						<view class="left" @tap="goUser(it.goods.goodsId)">
							<view class="">
								<view class="title">{{it.goods.goodsName}}</view>
								<view class="text">{{it.goods.createTime}}</view>
							</view>
						</view>
					</view>
					<!-- <view class="text">{{it.content}}</view> -->
					<view class="img" v-if="it.goods.pictures && it.goods.pictures.length > 0">
						
						<u-image class="pic" v-for="(item,imgIndex) in it.goods.pictures" :src="imgUrl+item" mode="aspectFill"
							@tap="previewImg(it.pictures,imgIndex)" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
							<view slot="error" style="font-size: 24upx;">加载失败</view>
						</u-image>
					</view>
				</view>
				<!-- 房源 -->
				<view v-if="it.type==1">
					<view class="top">
						<view class="left" @tap="goUser(it.roomRs.roomId)">
							<view class="">
								<view class="title">{{it.roomRs.aheName}}</view>
								<view class="text">{{it.roomRs.createTime}}</view>
							</view>
						</view>
					</view>
					<!-- <view class="text">{{it.content}}</view> -->
					<view class="img" v-if="it.roomRs.pictures && it.roomRs.pictures.length > 0">
						<u-image class="pic" v-for="(item,imgIndex) in it.roomRs.pictures" :src="imgUrl+item" mode="aspectFill"
							@tap="previewImg(it.roomRs.pictures,imgIndex)" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
							<view slot="error" style="font-size: 24upx;">加载失败</view>
						</u-image>
					</view>
				</view>
				<!-- 动态 -->
				<view v-if="it.type==2">
					<view class="top">
						<view class="left" @tap="goUser(it.moment.momentId)">
							<image v-if="it.head && it.head != '' && it.head != null" :src="it.head" mode="aspectFill">
							</image>
							<image v-else src="../../../../static/lqImg/defaultAvatar.png" mode="aspectFill"></image>
							<view class="">
								<view class="title">{{it.moment.username}}</view>
								<view class="text">{{it.moment.createTime}}</view>
							</view>
						</view>
						<view class="light" @tap="goReport(it.moment.momentId)">
							<text>举报</text>
							<image src="../../../../static/luyan/images/icon_find_light.png" mode="aspectFit"></image>
						</view>
					</view>
					<view class="text">{{it.moment.content}}</view>
					<view class="img" v-if="it.moment.pictures && it.moment.pictures.length > 0">
						
						<u-image class="pic" v-for="(item,imgIndex) in it.moment.pictures" :src="imgUrl+item" mode="aspectFill"
							@tap="previewImg(it.moment.pictures,imgIndex)" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
							<view slot="error" style="font-size: 24upx;">加载失败</view>
						</u-image>
					</view>
				</view> 
			</view>
		</view>
		<!-- 好友动态 -->
		<view class="main"  v-if="current==0||current==2">
			<view class="list" v-for="(it,i) in dataList" :key="i">
				<!-- 动态 -->
					<view class="top">
						<view class="left" @tap="goUser(it.userId)">
							<image v-if="it.head && it.head != '' && it.head != null" :src="it.head" mode="aspectFill">
							</image>
							<image v-else src="../../../../static/lqImg/defaultAvatar.png" mode="aspectFill"></image>
							<view class="">
								<view class="title">{{it.username}}</view>
								<view class="text">{{it.createTime}}</view>
							</view>
						</view>
						<view class="light" @tap="goReport(it.momentId)">
							<text>举报</text>
							<image src="../../../../static/luyan/images/icon_find_light.png" mode="aspectFit"></image>
						</view>
						<!-- <view class="right cncerned" v-if="it.isfollow" @tap="getFollow(i)">已关注</view>
						<view class="right" v-else @tap="getFollow(i)">关注</view> -->
					</view>
					<view class="text">{{it.content}}</view>
					<view class="img" v-if="it.pictures && it.pictures.length > 0">
						<!-- <image v-for="item in it.pictures" :src="item" mode="aspectFill"></image> -->
						<u-image class="pic" v-for="(item,imgIndex) in it.pictures" :src="item" mode="aspectFill"
							@tap="previewImg(it.pictures,imgIndex)" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
							<view slot="error" style="font-size: 24upx;">加载失败</view>
						</u-image>
					</view>
					<view class="video" v-if="it.video && it.video !=''">
						<video :src="it.video" controls></video>
					</view>
					<view class="btnList">
						<view class="discuss" v-if="it.isDiscuss" @tap="getDiscuss(i)">
							<image src="../../../../static/luyan/images/icon_find_discuss_active.png" mode="aspectFit">
							</image>
							<view class="openCls">收起</view>
						</view>
						<view class="discuss" v-else @tap="getDiscuss(i)">
							<image src="../../../../static/luyan/images/icon_find_discuss.png" mode="aspectFit"></image>
							<view class="">评论（{{it.comments.length}}）</view>
						</view>
						<view class="praise" @tap="getPraise(it,i)">
							<image v-if="it.likesFlag == 1" src="../../../../static/luyan/images/icon_vector_a.png"
								mode="aspectFit"></image>
							<image v-else src="../../../../static/luyan/images/icon_find_none.png" mode="aspectFit">
							</image>
							<view class="">{{it.likesFlag == 1?'已点赞':'点赞'}}</view>
						</view>
						<!-- <view class="collect" @tap="getCollect(it,i)">
							<image v-if="it.collectFlag == 1" src="../../../../static/luyan/images/icon_find_collect.png" mode="aspectFit"></image>
							<image v-else src="../../../../static/luyan/images/icon_find_collect_none.png" mode="aspectFit"></image>
							<view class="">{{it.collectFlag == 1?'已收藏':'收藏'}}</view>
						</view>
						<view class="light">
							<image src="../../../../static/luyan/images/icon_find_light.png" @tap="goReport(it.momentId)" mode="aspectFit"></image>
						</view> -->
					</view>
					<view class="discuss_box" v-if="it.isDiscuss">
						<view class="discuss_list">
							<view class="discuss_item" v-for="(item,ix) in it.comments" :key="ix">
								<view class="" v-if="ix > (it.comments.length - 6)">
									{{item.username}}：{{item.commentContent}}</view>
							</view>
						</view>
						<view class="discuss_inp">
							<u-input placeholder="输入内容评论" v-model="it.discussVal" />
							<view class="btns" @tap="disSub(it,i)">评论</view>
						</view>
					</view>
				
			</view>
		</view>
		
		<u-popup v-model="isShow" mode="center" :round="10">
			<view class="popMain">
				<view class="popContent">
					<view class="title">评论内容：</view>
					<textarea class="text" v-model="discussVal" placeholder="请输入..." />
				</view>
			</view>
			<view class="popBtn">
				<view class="" @tap="isShow=false">取消</view>
				<view class="right" @tap="disSub">确认</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {},
				current: 0,
				tabList: [{
					name: '推荐',
				}, {
					name: '附近',
				}, {
					name: '好友动态'
				}],
				listId: '',
				userId: '',
				pageNo: 1,
				pageSize: 15,
				noPage: false,
				isShow: false,
				discussVal: '',
				types: '2',
				dataList: []
			};
		},
		onLoad() {
			this.getInfo();
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			this.pageNo = 1;
			this.dataList = [];
			this.getList();
		},
		onShow() {
			
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
			this.pageNo++
			this.getList();
		},
		methods: {
			getInfo() {
				this.$request('/user/getInfo', {}, "GET").then(res => {
					console.log(res, '112')
					this.info = res;
				});
			},
			// tab切换
			tabChaner(i) {
				this.current = i;
				this.pageNo = 1;
				this.dataList = [];
				if (i == 0) {
					this.types = '3';
					this.getList();
				}
				if (i == 1) {
					this.getNearby()
				}
				if (i == 2) {
					this.types = '2';
					this.getList();
				}

			},
			//附近
			getNearby() {
				let that = this;

				this.$api.to_http('/mainpage/nearby', {
					lng: uni.getStorageSync('longitude'),
					lat: uni.getStorageSync('latitude'),
					pageNo: this.pageNo,
					pageSize: this.pageSize
				}, 'POST', '', false).then((res) => {
					console.log(uni.getStorageSync('longitude'))
					console.log(uni.getStorageSync('latitude'))
					uni.hideLoading();
					console.log(res)
					res = res.data
					if (res.code != 200) {
						return that.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					if (res.data.records.length > 0) {
					// 	res.data.records.forEach(item => {
					// 		let arr = [];
					// 		if (item.pictures.length > 0) {
					// 			item.pictures.forEach(itemChild => {
					// 				let url = that.baseUrlImg + itemChild;
					// 				arr.push(url)
					// 			})
					// 		}
					// 		item.pictures = arr;
					// 		item.discussVal = '';
					// 		item.isDiscuss = false;
					// 	})
						that.dataList = that.dataList.concat(res.data.records);
						console.log(that.dataList)
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
			// 获取列表
			getList() {
				let that = this;
				console.log(that.baseUrl, '1212')
				this.$api.to_http('user/moments/list', {
					type: this.types,
					pageNo: this.pageNo,
					pageSize: this.pageSize
				}, 'GET', '', false).then((res) => {
					uni.hideLoading();
					console.log(res)
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
							item.discussVal = '';
							item.isDiscuss = false;
						})
						that.dataList = that.dataList.concat(res.data.records);
						console.log(that.dataList)
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
			// 跳转发布
			goRelease() {
				uni.navigateTo({
					url: '/pages/luyan/find/release/index'
				})
			},
			// 跳转举报
			goReport(i) {
				uni.navigateTo({
					url: '/pages/luyan/find/report/index?id=' + i
				})
			},
			// 操作
			setOperation(likesFlag, collectFlag) {
				this.$api.to_http('user/moments/interact', {
					momentId: this.listId,
					likesFlag: likesFlag,
					collectFlag: collectFlag
				}, 'POST', '', false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					// this.getList();
					uni.showToast({
						title: res.message,
						icon: 'none',
						duration: 1000
					});
				})
			},
			// 关注
			getFollow(i) {
				this.dataList[i].isfollow = !this.dataList[i].isfollow;
			},
			// 点赞
			getPraise(val, i) {
				this.listId = val.momentId;
				let index = '';
				index = val.likesFlag == 1 ? '0' : '1';
				this.dataList[i].likesFlag = index;
				this.setOperation(index);
			},
			// 评论
			getDiscuss(i) {
				this.dataList[i].isDiscuss = !this.dataList[i].isDiscuss;
				// this.listId = val.momentId;
				// this.userId = val.userId;
				// this.isShow = true;
			},
			// 提交评论
			disSub(val, i) {
				if (val.discussVal == '') {
					uni.showToast({
						title: '请输入评论内容',
						icon: 'none',
						duration: 1000
					});
					return
				}
				this.$api.to_http('user/moments/comment', {
					momentId: val.momentId,
					replyToUserId: val.userId,
					commentContent: val.discussVal
				}, 'POST', '', false).then((res) => {
					res = res.data
					// this.isShow = false;
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					let obj = {
						username: this.info.userName,
						commentContent: val.discussVal
					}
					this.dataList[i].comments.push(obj);
					this.dataList[i].discussVal = '';

					uni.showToast({
						title: res.message,
						icon: 'none',
						duration: 1000
					});
				})
			},
			// 收藏
			getCollect(val, i) {
				this.listId = val.momentId;
				let index = '';
				index = val.collectFlag == 1 ? '0' : '1';
				this.dataList[i].collectFlag = index;
				this.setOperation('', index);
			},
			previewImg(arr, i) {
				// uni.previewImage({
				// 	current: i,
				// 	urls: arr,
				// 	indicator: 'number',
				// 	loop: true
				// });
				uni.previewImage({
					indicator: "none", //图片指示器样式
					current: i, //图片索引值
					urls: arr //需要预览的图片链接列表
				});
			},
			// 用户信息
			goUser(i) {
				this.$api.to_http('msg/friendCheck', {
					userId: i
				}, 'POST', '', false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					if (res.data.isFriend) {
						uni.navigateTo({
							url: '/pages/luyan/user/info?id=' + i + '&userId=' + this.info.id
						})
					} else {
						uni.navigateTo({
							url: '/pages/ly-lq/chat/friendMessage?userID=' + i + '&isUsers=2'
						})
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;

		.header {
			width: 100%;
			background-color: #FFFFFF;
			padding-right: 38upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.right {
				width: 32upx;
				height: 32upx;

				image {
					width: 32upx;
					height: 32upx;
				}
			}
		}

		.main {
			width: 100%;
			padding: 24upx;
			box-sizing: border-box;

			.list {
				width: 100%;
				padding: 32upx;
				box-sizing: border-box;
				background: #FFFFFF;
				border-radius: 4upx;
				margin-bottom: 16upx;

				.top {
					width: 100%;
					display: flex;
					justify-content: space-between;
					// align-items: center;
					font-family: 'PingFang SC';

					.left {
						display: flex;
						align-items: center;

						image {
							width: 96upx;
							height: 96upx;
							margin-right: 16upx;
							border-radius: 50%;
						}

						.title {
							font-size: 28upx;
							line-height: 36upx;
							color: #000000;
						}

						.text {
							font-size: 24upx;
							color: #BDBDBD;
						}
					}

					.right {
						padding: 6upx 10upx;
						background: #EDF6FF;
						border-radius: 3upx;
						box-sizing: border-box;
						font-size: 28upx;
						color: #1989FA;

					}

					.cncerned {
						background: #FFFFFF;
						color: #222222;
						border: 2upx solid rgb(242, 242, 242);
					}
				}

				.text {
					margin-top: 40upx;
					font-family: 'PingFang SC';
					font-size: 28upx;
					color: #000000;
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

				.video {
					width: 100%;
					height: 358upx;
					margin-top: 20upx;

					video {
						width: 100%;
						height: 358upx;
					}
				}

				.btnList {
					width: 100%;
					margin-top: 34upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-family: 'PingFang SC';
					font-size: 24upx;
					color: #000000;

					view {
						display: flex;
						align-items: center;
					}

					.praise {
						image {
							width: 32upx;
							height: 28upx;
							margin-right: 14upx;
						}
					}

					.discuss {
						image {
							width: 28upx;
							height: 28upx;
							margin-right: 14upx;
						}

						.openCls {
							color: #1989FA;
						}
					}

					.collect {
						image {
							width: 32upx;
							height: 30upx;
							margin-right: 14upx;
						}
					}

					.praise {
						image {
							width: 32upx;
							height: 28upx;
							margin-right: 14upx;
						}
					}
				}

				.light {
					image {
						width: 28upx;
						height: 28upx;
						margin-left: 10upx;
					}

				}

				.discuss_box {
					width: 100%;
					margin-top: 6upx;

					.discuss_item {
						font-family: 'PingFang SC';
						font-size: 28upx;
						color: #666666;
						margin: 14upx 0;
					}

					.discuss_inp {
						width: 100%;
						height: 60upx;
						margin-top: 20upx;
						padding: 6upx 6upx 6upx 16upx;
						background: #F9F9F9;
						border-radius: 30upx;
						box-sizing: border-box;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.btns {
							width: 120upx;
							height: 48upx;
							background: #1989FA;
							border-radius: 28upx;
							display: flex;
							justify-content: center;
							align-items: center;
							font-family: 'PingFang SC';
							font-weight: bold;
							font-size: 28upx;
							color: #FFFFFF;
						}
					}
				}
			}
		}

		.popMain {
			width: 100%;
			padding: 30upx 30upx 0;
			box-sizing: border-box;

			.popContent {
				width: 100%;

				.title {
					font-family: 'PingFang SC';
					font-weight: bold;
					font-size: 32upx;
					color: #222222;
				}

				.text {
					// width: 100%;
					height: 330upx;
					padding: 20upx;
					box-sizing: border-box;
					margin-top: 30upx;
					background: #F9F9F9;
					border-radius: 4upx;
				}
			}
		}

		.popBtn {
			width: 100%;
			margin-top: 30upx;
			display: flex;

			view {
				width: 50%;
				height: 80upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: 'PingFang SC';
				font-size: 32upx;
				text-align: center;
				color: #222222;
			}

			.right {
				background: #1989FA;
				color: #FFFFFF;
			}
		}
	}
</style>
