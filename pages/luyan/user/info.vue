<template>
	<view class="info">
		<view class="head">
			<image :src="info.head" mode=""></image>
		</view>
		
		<view class="infoItem">
			<view class="txt1">
				昵称
			</view>
			<view class="txt2">
				{{info.userName||''}}
			</view>
		</view>
		<view class="">
			<view class="infoItem" @click="goPage('firendRemarks')" v-if="isFriend">
				<view class="txt1">
					备注名
				</view>
				<view class="txt2">
					{{remark}}
				</view>
			</view>
			<view class="infoItem">
				<view class="txt1">
					性别
				</view>
				<view class="txt2">{{info.userGenderDisplay}}</view>
			</view>
			<view class="infoItem">
				<view class="txt1">
					出生日期
				</view>
				<view class="txt2">{{info.birthday}}</view>
			</view>
			<view class="infoItem">
				<view class="txt1">
					居住地
				</view>
				<view class="txt2">{{info.address}}</view>
			</view>
		</view>
		<!-- <view class="addBox" v-if="!isFriend">
			<view class="" @tap="addFriend">添加好友</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFriend:true,
				friendId:'',
				info:{},//用户信息
				remark:''
			}
		},
		onLoad(op) {
			this.friendId = op.id;
			if(op.id == op.userId){
				this.isFriend = false;
			}else{
				this.isFriend = true;
			}
		},
		onShow() {
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			this.getInfo(this.friendId);
		},
		methods: {
			// navigate(params) {
			// 	uni.navigateTo({
			// 		...params 
			// 	})
			// },
			// 获取用户详细资料
			getInfo(id){
				this.$api.to_http('msg/friendCheck',{
					userId:id
				},'POST','',false).then((res) => {
					console.log(res)
					uni.hideLoading();
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.getFriendProfile(this.friendId);
					// if(res.data.isFriend){
					// 	this.isFriend = true;
					// }else{
					// 	this.isFriend = false;
					// }
					this.info = res.data.userInfo;
					uni.showToast({
					    title: res.message,
					    duration: 1000,
						icon:"none"
					});
					// location.reload();
					// setTimeout(()=>{
					// 	uni.navigateBack();
					// },1000)
					// this.typeList = res.data;
				})
			},
			// 获取用户备注名
			getFriendProfile (id) {
				wx.$app.getFriendProfile({
				  userIDList: [id] // 请注意：即使只拉取一个用户的资料，也需要用数组类型，例如：userIDList: ['user1']
				}).then(res => {
					console.log(res, 5555)
					if (res.code) return
					// this.personalData = res.data.friendList
					this.remark = res.data.friendList[0].remark;
				}).catch(function(imError) {
				  console.warn('获取用户资料失败:', imError); // 获取其他用户资料失败的相关信息
				})				
			},
			addFriend(){
				this.$api.to_http('msg/friendAdd',{
					userId:this.friendId
				},'POST','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					uni.showToast({
					    title: res.message,
					    duration: 1000,
						icon:"none"
					});
					// location.reload();
					// setTimeout(()=>{
					// 	uni.navigateBack();
					// },1000)
					// this.typeList = res.data;
				})
			},
			goPage (url) {
				uni.navigateTo({
					url: `/pages/ly-lq/chat/${url}?userID=${this.friendId}&remark=${this.remark}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
page {
	height: 100%;
	background-color: #F9F9F9;
	.head{
		width: 750rpx;
		height: 240rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
		border-top: 2rpx solid #F2F2F2;
		image{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			background-color: #dedede;
		}
	}
	.infoItem{
		height: 96rpx;
		border-top: 2rpx solid #F2F2F2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 32rpx;
		padding: 0 32rpx;
		background-color: #ffffff;
		.txt1{
			color: #999999;
		}
		.txt2{
			color: #222222;
		}
		image{
			width: 13rpx;
			height: 24rpx;
		}
	}
	.date{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 999;
		top: 0;
	}
	.addBox{
		width: 100%;
		padding: 0 32upx;
		margin-top: 50upx;
		box-sizing: border-box;
		view{
			width: 100%;
			height: 96upx;
			background: #1989FA;
			border-radius: 4upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: 'PingFang SC';
			font-weight: bold;
			font-size: 32upx;
			color: #FFFFFF;
		}
	}
}
</style>
