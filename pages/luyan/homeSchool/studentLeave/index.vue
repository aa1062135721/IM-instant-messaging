<template>
	<view class="content">
		<u-navbar back-text="" title="学生请假">
			<view class="navbar-right" slot="right" v-if="slotRight">
				<view class="nav_right" @tap="goLeaveRecord">请假记录</view>
			</view>
		</u-navbar>
		<view class="main">
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>请假学生</text>
						<text class="star">*</text>
					</view>
					<u-input />
				</view>
			</view>
			<view class="item" @tap="getLeave">
				<view class="left">
					<view class="laber">
						<text>请假类型</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">{{leaveVal}}</view>
				</view>
				<view class="right">
					<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="item" @tap="getStrTime">
				<view class="left">
					<view class="laber">
						<text>开始时间</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">{{startVal}}</view>
				</view>
				<view class="right">
					<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="item" @tap="getEndTime">
				<view class="left">
					<view class="laber">
						<text>结束时间</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">{{endVal}}</view>
				</view>
				<view class="right">
					<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
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
			<view class="itemBtm">
				<view class="uploadBox">
					<image v-for="item in imgList" :src="item" mode="aspectFill"></image>
					<view class="uploadItem" @tap="uploadImg">
						<image src="../../../../static/luyan/images/icon_upload.png" mode="aspectFit"></image>
						<view class="">添加图片</view>
					</view>
				</view>
				<textarea class="textarea" placeholder="请输入请假事由.." />
				<view class="btn">提交</view>
			</view>
		</view>
		<u-picker mode='selector' v-model="isLeave" @confirm="confirm" :range="leaveType"></u-picker>
		<u-picker v-model="isStrTime" @confirm="confirmStr"></u-picker>
		<u-picker v-model="isEndTime" @confirm="confirmEnd"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				slotRight: true,
				isLeave:false,
				leaveVal:'事假',
				leaveType:[
					'事假',
					'病假',
					'其它'
				],
				isStrTime:false,
				startVal:'',
				startTime:'',
				isEndTime:false,
				endVal:'',
				endTime:'',
				imgList:[],
			};
		},
		methods: {
			// 跳转请假记录
			goLeaveRecord(){
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/leaveRecord/index'
				})
			},
			// 请假类型
			getLeave() {
				this.isLeave = true;
			},
			confirm(e){
				this.leaveVal = this.leaveType[e[0]]
			},
			// 开始时间
			getStrTime(){
				this.isStrTime = true;
			},
			confirmStr(e){
				this.startVal = e.year + '-' + e.month + '-' + e.day;
				this.startTime = e.timestamp;
			},
			// 结束时间
			getEndTime(){
				this.isEndTime = true;
			},
			confirmEnd(e){
				this.endVal = e.year + '-' + e.month + '-' + e.day;
				this.endTime = e.timestamp;
			},
			// 上传图片
			uploadImg() {
				let that = this;
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						that.imgList = that.imgList.concat(res.tempFilePaths);
				    }
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;
		.navbar-right {
			height: 44upx;
			margin-right: 24upx;
			box-sizing: border-box;
		
			.nav_right {
				font-family: 'PingFang SC';
				font-size: 32upx;
				text-align: right;
				color: #1989FA;
			}
		}
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
				.right{
					width: 14upx;
					height: 24upx;
					image{
						width: 14upx;
						height: 24upx;
					}
				}
			}
			.itemBtm{
				width: 100%;
				padding: 40upx 32upx;
				box-sizing: border-box;
				.textarea{
					width: 100%;
					height: 280upx;
					margin-top: 24upx;
					padding: 24upx;
					box-sizing: border-box;
					background: #F9F9F9;
					border-radius: 4upx;
				}
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
					.uploadItem{
						width: 120upx;
						height: 108upx;
						padding: 10upx;
						border: 1upx solid #D9DCE0;
						box-sizing: border-box;
						border-radius: 8upx;
						font-family: 'PingFang SC';
						font-size: 24upx;
						line-height: 24upx;
						color: #BFC4CB;
						text-align: center;
						image{
							width: 40upx;
							height: 36upx;
							margin-bottom: 18upx;
						}
					}
				}
				.btn{
					width: 100%;
					height: 96upx;
					margin-top: 32upx;
					background: #1989FA;
					border-radius: 4upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-family: 'PingFang SC';
					font-size: 32upx;
					color: #FFFFFF;
				}
			}
		}
	}
</style>
