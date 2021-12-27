<template>
	<view class="container">
		<view class="IndustryCommittee-header" >
			<view class="IndustryCommittee-header-title" @click="godetails('/pages/vvo-yao/industry-councli/index')">{{dataObj.committeeName}}</view>
			<view class="IndustryCommittee-header-textBox">
				<text>业委会成员</text>
				<text>{{memberData.length}}人</text>
			</view>
			<view class="IndustryCommittee-header-memberBox">
				<scroll-view scroll-x>
					<!-- <view></view> -->
					<view class="IndustryCommittee-header-memberBox-itemBox">
						<view style="margin-right: 40upx;" class="IndustryCommittee-header-memberBox-item"
							v-for="(item,index) in memberData" :key="index">
							<image style="margin-bottom: 10upx;" @click="callPhone(item.phone)" :src="item.head" mode=""></image>
							<view class="item_imgs_box">
								<view class="name">{{item.name}}</view>
								<view class="occupation">{{item.post}}</view>
							</view>
						</view>
					</view>
					<!-- <view class="IndustryCommittee-header-memberBox-itemBox-textBox">
						<view class="IndustryCommittee-header-memberBox-itemBox-text" v-for="(_item,index) in textData"
							:key="index">
							<view>{{_item.name}}</view>
							<view class="text">{{_item.occupation}}</view>
						</view>
					</view> -->
				</scroll-view>
			</view>
		</view>
		<view class="IndustryCommittee-main">
			<text class="IndustryCommittee-main-title">日常事务</text>
			<view class="IndustryCommittee-main-btnBox">
				<view class="IndustryCommittee-main-btnBox-item" @click="complaint()">
					<view class="IndustryCommittee-main-btnBox-item-leftBox">
						<view class="num">{{dataObj.complaintCount}}</view>
						<image src="../../../static/images/vvo-yao/ellipse.png" mode=""></image>

					</view>
					<view class="IndustryCommittee-main-btnBox-item-title">投诉建议</view>
				</view>
				<view class="IndustryCommittee-main-btnBox-item" @click="publicity()">
					<view class="IndustryCommittee-main-btnBox-item-leftBox">
						<view class="num" ref="publicCount">{{dataObj.publicCount}}</view>
						<image src="../../../static/images/vvo-yao/ellipse.png" mode=""></image>

					</view>
					<view class="IndustryCommittee-main-btnBox-item-title">公示</view>
				</view>
				<view class="IndustryCommittee-main-btnBox-notvailableBox">
					<view class="IndustryCommittee-main-btnBox-notvailable" v-for="(item,index) in notvailableData"
						:key="index">
						<view class="IndustryCommittee-main-btnBox-notvailable-left">
							<view class="num">{{item.num}}</view>
							<image :src="item.imgurl" mode=""></image>
						</view>
						<view class="IndustryCommittee-main-btnBox-notvailable-title">{{item.title}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <u-notify ref="notify" :show="show" /> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataObj:{},
				pageId:'',
				show: true,
				listData:[],
				memberData: [],
				notvailableData: [{
						num: 0,
						imgurl: '../../../static/images/vvo-yao/Ellipse1.png',
						title: '表决'
					},
					{
						num: 0,
						imgurl: '../../../static/images/vvo-yao/Ellipse1.png',
						title: '选举'
					},
					{
						num: 0,
						imgurl: '../../../static/images/vvo-yao/Ellipse1.png',
						title: '调查'
					},
					{
						num: 0,
						imgurl: '../../../static/images/vvo-yao/Ellipse1.png',
						title: '物业'
					},
				]
			}
		},
		onLoad(option) {
			
			this.pageId=option.aheId
			// console.log(option,'asdsadsa')
			this.getInfo()
		},
		onShow() {
			this.getInfo()
		},
        onReady(){
		},
		methods: {
			godetails(){
				if(this.pageId){
					uni.navigateTo({
						url:'./index'
					})
				}
			},
			//拨打电话
			callPhone(phone){
				uni.makePhoneCall({
					phoneNumber:phone
				})
			},
			complaint() {
				uni.navigateTo({
					url: '/pages/vvo-yao/industry-council/complaint'
				})
			},
			publicity() {
				uni.navigateTo({
					url: '/pages/vvo-yao/industry-council/publicity'
				})
			},
			//根据小区id查询该小区的业委会成员
			getInfo() {
				this.$api.to_http('/committee/getInfo', {aheId:this.pageId}, 'post').then((res) => {
					// console.log(res)
					 console.log(res.data.data)
					// if(res.data.data==false){
					// 	uni.showToast({
					// 		icon:'none',
					// 		title:'暂无业委会 '
					// 	})
					// }else{
						this.dataObj=res.data.data
						res.data.data.members.forEach(item=>{
							item.head=this.baseUrl+item.head
						})
						this.memberData=res.data.data.members
						
						  uni.setStorageSync('committeeId',this.dataObj.id );
				       // console.log(this.memberData,8989)
					
					// }
					
				
				})
			},
		
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;

		.IndustryCommittee-header {
			margin: 33rpx 33rpx;
			width: 686rpx;
			height: 404rpx;
			background: url(../../../static/images/vvo-yao/Group-bg.png);

			.IndustryCommittee-header-title {
				margin: 33rpx 33rpx;
				font-size: 36rpx;
				font-weight: bold;
				color: #fff;

			}

			.IndustryCommittee-header-textBox {
				margin: 33rpx 33rpx;
				display: flex;
				justify-content: space-between;
				font-weight: bold;
				color: #DAECFF;
				font-size: 24rpx;
			}

			.IndustryCommittee-header-memberBox {
				margin: 33rpx 33rpx;


				.IndustryCommittee-header-memberBox-itemBox {
					display: flex;
					justify-content: flex-start;


					image {
						// margin-left: 40rpx;
						width: 98rpx;
						height: 98rpx;
						border-radius: 50%;
						border: 4px solid #fff;
					}

					.item_imgs_box {
						background: #3A83CC;
						border-radius: 2px;
						width: 102upx;
						height: 100upx;
						text-align: center;

						.name {
							padding-top: 12rpx;
							font-size: 28rpx;
							font-weight: bold;
							color: #fff;
						}

						.occupation {
							padding-top: 12rpx;
							color: #B0CDEB;
							font-size: 24rpx;
						}
					}

					.IndustryCommittee-header-memberBox-itemBox-text {
						// padding-left:40rpx ;
						width: 102rpx;
						height: 100rpx;
						background-color: #3A83CC;
						color: #fff;
						font-size: 24rpx;
						text-align: center;
						line-height: 50rpx;

						.text {
							font-size: 24rpx;
							color: #B0CDEB;
						}
					}
				}

				// .IndustryCommittee-header-memberBox-itemBox-textBox {
				// 	display: flex;
				// 	// justify-content: space-around;
				// 	// margin-left:40rpx ;




				// }
			}
		}

		.IndustryCommittee-main {
			margin: 33rpx;

			.IndustryCommittee-main-title {
				font-size: 36rpx;
				color: #333333;
			}

			.IndustryCommittee-main-btnBox {
				margin-top: 32rpx;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.IndustryCommittee-main-btnBox-item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 328rpx;
					height: 160rpx;
					background-color: #E2F1FF;
					border-radius: 5px;

					.IndustryCommittee-main-btnBox-item-leftBox {
						position: relative;
						top: 10rpx;
						margin-left: 40rpx;
						width: 80rpx;
						height: 100rpx;

						.num {
							font-size: 72rpx;
							font-weight: bold;
							color: #1F5D9C;
							text-align: center;
						}

						image {
							position: absolute;
							bottom: 20rpx;
							width: 76rpx;
							height: 8rpx;
						}
					}

					.IndustryCommittee-main-btnBox-item-title {
						margin-right: 32rpx;
						font-size: 36rpx;
						font-weight: bold;
						color: #333333;
					}
				}

				.IndustryCommittee-main-btnBox-notvailableBox {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;

					.IndustryCommittee-main-btnBox-notvailable {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 32rpx;
						width: 328rpx;
						height: 160rpx;
						background-color: #EEEEEE;
						border-radius: 5px;

						.IndustryCommittee-main-btnBox-notvailable-left {
							position: relative;
							top: 10rpx;
							margin-left: 40rpx;
							width: 80rpx;
							height: 100rpx;

							.num {
								font-size: 72rpx;
								font-weight: bold;
								color: #999999;
								text-align: center;
							}

							image {
								position: absolute;
								bottom: 20rpx;
								width: 76rpx;
								height: 8rpx;
							}
						}

						.IndustryCommittee-main-btnBox-notvailable-title {
							margin-right: 32rpx;
							font-size: 36rpx;
							font-weight: bold;
							color: #999999;

						}
					}
				}
			}
		}
	}
</style>
