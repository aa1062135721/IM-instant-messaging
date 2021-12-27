<template>
	<view class="myRelease">
		<view class="list" scroll-y="true" v-if="list && list.length">
			<view  v-for="(it,i) in list" :key="i" class="single">
				<view class="top">
					<image :src="it.head?it.head:'/static/lqImg/defaultAvatar.png'" mode=""></image>
					<view class="topRight">
						<view class="topRightTxt1">{{it.username}}</view>
						<view class="topRightTxt2">{{it.createTime}}</view>
					</view>
				</view>
				<view class="text">{{it.content}}</view>
				<view class="img" v-if="it.pictures.length > 0">
					<image v-for="(item, idx) in it.pictures" :src="imgUrl+item" :key="idx" mode="aspectFill" @click="TanPreviewImage(i, idx)"></image>
				</view>
				<!-- <view class="video" v-if="it.video !=''">
							<video :src="it.video" controls></video>
						</view> -->
			<!-- 	<view class="btnList">
					<view class="praise" @tap="getPraise(it,i)">
						<image v-if="it.likesFlag == 1" src="@/static/luyan/images/icon_vector_a.png" mode="aspectFit">
						</image>
						<image v-else src="@/static/luyan/images/icon_find_none.png" mode="aspectFit"></image>
						<view class="">{{it.likesFlag == 1?'已点赞':'点赞'}}</view>
					</view>
					<view class="discuss" @tap="getDiscuss(it.momentId,it.userId)">
						<image src="@/static/luyan/images/icon_find_discuss.png" mode="aspectFit"></image>
						<view class="">评论</view>
					</view>
					<view class="collect" @tap="getCollect(it,i)">
						<image v-if="it.collectFlag == 1" src="@/static/luyan/images/icon_find_collect.png"
							mode="aspectFit"></image>
						<image v-else src="@/static/luyan/images/icon_find_collect_none.png" mode="aspectFit"></image>
						<view class="">{{it.collectFlag == 1?'已收藏':'收藏'}}</view>
					</view>
					<view class="light">
						<image src="@/static/luyan/images/icon_find_light.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="comment" v-if="it.comments.length>0">
					<view class="commentItem" v-for="comment in it.comments"
						@tap="getDiscuss(it.momentId,comment.createUserId)">
						<view class="commentItemTop">
							<view class="commentItemUser">
								{{comment.username}}：<text style="color: #333333;">{{comment.commentContent}}</text>
							</view>
							<view class="commentItemTime">
								{{comment.createTime}}
							</view>
						</view>
						<view class="commentItemVal">
								回复<text class="commentItemUser">{{comment.replyToUserId}}</text>：{{comment.commentContent}}
							</view>
					</view>
				</view> -->
			</view>
		</view>
		<view class="noContent" v-else>
			<text>你还没有发布内容哦，快去发布吧</text>
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
				list: [],
				listId: '',
				userId: '',
				page: 1,
				noPage: false,
				isShow: false,
				discussVal: '',
				types: '2',
			}
		},
		onLoad() {
			this.getList()
		},
		onReachBottom() {
			this.getMoreList();
		},
		methods: {
			getList() {
				this.page = 1
				this.noPage = false
				this.$request('/user/moments/list', {
					pageNo: this.page,
					pageSize: 10,
					type: 1
				}, 'GET').then(res => {
					console.log(res)
					this.list = res.records
				});
			},
			getMoreList() {
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
				this.page++
				this.$request('/user/moments/list', {
					pageNo: this.page,
					pageSize: 10,
					type: 1
				}, 'GET').then(res => {
					console.log(res)
					if (res.records.length == 0) {
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						this.noPage = true
					} else {
						let arr = res.records.map(item => {
							this.list.push(item)
						})
					}
				})
			},
			// 操作
			setOperation(likesFlag, collectFlag) {
				this.$request('user/moments/interact', {
					momentId: this.listId,
					likesFlag: likesFlag,
					collectFlag: collectFlag
				}, 'POST').then(res => {

				})
			},
			// 点赞
			getPraise(val, i) {
				console.log(val)
				console.log(i)
				this.listId = val.momentId;
				let index = '';
				index = val.likesFlag == 1 ? '0' : '1';
				this.list[i].likesFlag = index;
				this.setOperation(index);
			},
			// 评论
			getDiscuss(id, uid) {
				this.listId = id;
				this.userId = uid;
				this.isShow = true;
			},
			// 提交评论
			disSub() {
				if (this.discussVal == '') {
					uni.showToast({
						title: '请输入评论内容',
						icon: 'none',
						duration: 1000
					});
					return
				}
				this.$request('/user/moments/comment', {
					momentId: this.listId,
					replyToUserId: this.userId,
					commentContent: this.discussVal
				}).then((res) => {
					this.isShow = false;
					this.discussVal = '';
					this.getList()
				})
			},
			// 收藏
			getCollect(val, i) {
				this.listId = val.momentId;
				let index = '';
				index = val.collectFlag == 1 ? '0' : '1';
				this.list[i].collectFlag = index;
				this.setOperation('', index);
			},
			
			// 预览图片
			TanPreviewImage(i, index){
				let images = []
				if (this.list[i].pictures && this.list[i].pictures.length) {
					this.list[i].pictures.map(res => {
						images.push(this.imgUrl + res)
					})
				}
				uni.previewImage({ // 预览图片  图片路径必须是一个数组 => ["http://192.168.100.251:8970/6_1597822634094.png"]
					current:index,
					urls:images,
					longPressActions: {  //长按保存图片到相册
						itemList: ['保存图片'],
						success: (data)=> {
							console.log(data, 888);
							uni.saveImageToPhotosAlbum({ //保存图片到相册
								filePath: images[index],
								success: function () {
									uni.showToast({icon:'success',title:'保存成功'})
								},
								fail: (err) => {
									uni.showToast({icon:'none',title:'保存失败，请重新尝试'})
								}
							});
						},
						fail: (err)=> {
							console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F9F9F9;
		height: 100%;
		.myRelease {
			height: 100%;
			padding: 24rpx;
		}
		.list {
			width: 100%;
			border-radius: 4rpx;
			.single {
				box-sizing: border-box;		
				margin-bottom: 20rpx;
				padding: 32rpx;
				background: #FFFFFF;
			}
			.top {
				display: flex;
				align-items: center;
				font-family: 'PingFang SC';

				image {
					width: 96rpx;
					height: 96rpx;
					margin-right: 16rpx;
					border-radius: 50%;
				}

				.topRight {
					.topRightTxt1 {
						font-size: 28rpx;
						color: #000000;
						margin-bottom: 20rpx;
					}

					.topRightTxt2 {
						font-size: 24rpx;
						color: #BDBDBD;
					}
				}

			}

			.text {
				margin-top: 40rpx;
				font-family: 'PingFang SC';
				font-size: 28rpx;
				color: #000000;
			}

			.img {
				width: 100%;
				margin-top: 20rpx;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				image {
					width: 200rpx;
					height: 260rpx;
					margin-right: 12rpx;
				}
			}

			.video {
				width: 100%;
				height: 358rpx;
				margin-top: 20rpx;

				video {
					width: 100%;
					height: 358rpx;
				}
			}

			.btnList {
				width: 100%;
				margin-top: 34rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-family: 'PingFang SC';
				font-size: 24rpx;
				color: #000000;

				view {
					display: flex;
					align-items: center;
				}

				.praise {
					image {
						width: 32rpx;
						height: 28rpx;
						margin-right: 14rpx;
					}
				}

				.discuss {
					image {
						width: 28rpx;
						height: 28rpx;
						margin-right: 14rpx;
					}
				}

				.collect {
					image {
						width: 32rpx;
						height: 30rpx;
						margin-right: 14rpx;
					}
				}

				.praise {
					image {
						width: 32rpx;
						height: 28rpx;
						margin-right: 14rpx;
					}
				}

				.light {
					image {
						width: 28rpx;
						height: 28rpx;
					}
				}
			}
		}
		
		.noContent {
			text-align: center;
			padding-top: 92rpx;
			color: #828282;
			font-size: 28rpx;
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

		.comment {
			background-color: #faf9f8;
			padding: 30rpx 20rpx 5rpx 20rpx;
			margin-top: 20rpx;
			border-radius: 4rpx;

			.commentItem {
				font-size: 24rpx;
				margin-bottom: 30rpx;

				.commentItemUser {
					color: #486a93;
					width: 420rpx;
				}

				.commentItemVal {
					display: flex;
					align-items: center;
				}

				.commentItemTop {
					display: flex;
					justify-content: space-between;
					margin-bottom: 20rpx;

					.commentItemTime {
						font-size: 22rpx;
						color: #999999;
					}
				}
			}
		}
	}
</style>
