<template>
	<view class="authentication">
		<!-- 顶部导航栏 -->
		<view class="top">
			<view class="title">
				<image @click="toBack" src="@/static/hexingImg/back.png" mode=""></image>
				<view class="titleTxt1">实名认证</view>
				<view class="titleTxt2" @click="toSave">完成</view>
			</view>
		</view>
		<!-- 顶部占位空盒子 -->
		<view class="" style="height: var(--status-bar-height);margin-bottom: 88rpx;"></view>
		<view class="item">
			<view class="itemLabel">
				姓 名
			</view>
			<input type="text" value="" v-model="name"/>
		</view>
		<view class="item">
			<view class="itemLabel">
				身份证
			</view>
			<input type="idcard" maxlength="18" value="" v-model="idNumber"/>
		</view>
		<!-- <view class="item">
			<view class="itemLabel">
				电话号码:
			</view>
			<input type="text" value=""/>
		</view> -->
		<view class="upload">
			<view class="uploadLabel">
				上传身份证
			</view>
			<view class="uploadItem">
				<view class="uploadItemBox" @click="uploadImg(1)">
					<image   v-if="frontFile" :src="frontFile" mode="heightFix"></image>
					<image v-else src="../../../static/hexingImg/add.png" mode="" class="add_img"></image>
					<view class="">
						点击上传身份证国徽面
					</view>
				</view>
			</view>
			<view class="uploadItem">
				<view class="uploadItemBox" @click="uploadImg(2)">
					<image v-if="versoFile" :src="versoFile" mode="heightFix"></image>
					<image v-else src="../../../static/hexingImg/add.png" mode="" class="add_img"></image>
					<view class="">
						点击上传身份证反面照
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="show" mode="center">
			<view class="checkPhone">
				<view class="title">验证手机</view>
				<view class="input">
					<input v-model="smsCode" type="number" value="" placeholder="请输入验证码" />
					<view>
						<view class="codeBtn" v-if="showCode" @click="getCode">获取验证码</view>
						<view class="codeBtn codeBtn2" v-if="!showCode">重新发送[{{ count }}]</view>
					</view>
				</view>
				<view class="btn">
					<u-button @click="submit" type="primary" :custom-style="{'borderRadius':'4rpx' }">提交</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				idNumber:'',
				frontFile:'',
				versoFile:'',
				show: false,
				smsCode: '',
				showCode: true,
				count: '' ,//发送验证码倒计时
				phone: ''
			}
		},
		onLoad() {
			this.getInfo()
			this.getUserTel()
		},
		methods: {
			navigate(params) {
				uni.navigateTo({
					...params 
				})
			},
			
			toBack(){
				uni.navigateBack({
					delta:1
				})
			},
			
			getCode() {
				this.$request('/user/getSmscode',{
						type: 4,
						phone: this.phone
					},'GET').then(res => {
					const TIME_COUNT = 60; //倒计时初始时间60s
					if (!this.timer) {
						uni.showToast({
							title:'发送成功，请注意接收'
						})
						this.count = TIME_COUNT;
						this.showCode = false;
						this.timer = setInterval(() => {
							if (this.count > 0 && this.count <= TIME_COUNT) {
								this.count--;
							} else {
								this.showCode = true;
								clearInterval(this.timer); //清除计时器
								this.timer = null;
							}
						}, 1000);
					}
				});
			},
			
			// 提交实名认证信息
			submit() {
				this.$request('/userAuth/real',{
					name:this.name,
					idNumber:this.idNumber,
					frontFile:this.frontFile,
					versoFile:this.versoFile,
					smsCode: this.smsCode
				}).then(res => {
					uni.showToast({
						icon:'none',
						title: '预计1-2个工作日反馈审核结果',
						duration: 2000
					});
					setTimeout(() => {
						this.toBack()
					}, 800)
				});
			},
			
			getInfo(){
				this.$request('/userAuth/getInfo',{},"GET").then(res => {
					if (res) {
						this.name = res.name
						this.idNumber = res.idNumber
						this.frontFile = res.frontFile
						this.versoFile = res.versoFile						
					}
				});
			},
			
			getUserTel () {
				this.$request('/user/getInfo',{},"GET").then(res => {
					this.phone = res.phone
					this.isAuth = res.isAuth
					// console.log(res)
				})
			},
						
			uploadImg(i){
				// console.log(i,11111111111111111)
				let that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都
					sourceType: ['album','camera'],//相册选择图片
					success: (res) => {
						console.log(res)
						let tempFilePath = res.tempFilePaths[0]
				        uni.uploadFile({
				          url: this.baseUrl+'/common/file/upload', // 开发者服务器的URL。
				          filePath: tempFilePath,
				          name: 'file', // 必须填file。
						  header:{
							  'access-token': uni.getStorageSync('token')
						  },
				          success: (res) => {
							  uni.showToast({
							  	title: '上传成功'
							  })  
							  if(i==1){
								  that.frontFile = this.imgUrl+JSON.parse(res.data).data.path
							  }else{
								  that.versoFile = this.imgUrl+JSON.parse(res.data).data.path
							  }
				          },
				          fail: err => {
				            console.log('err:'+err);
				          }
				        });
					}
				})
			},
			
			toSave(){
				if (this.isAuth === '是') {
					uni.showToast({
						title: '亲，你已完成认证哦',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(!this.name){//判断是否输入姓名
					uni.showToast({
						title: '请输入姓名',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(!this.idNumber){//判断是否输入身份证号
					uni.showToast({
						title: '请输入身份证号',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(!this.frontFile){//判断是否传身份证国徽面
					uni.showToast({
						title: '请上传身份证国徽面',
						icon:"none",
						duration: 2000
					});
					return
				}
				if(!this.versoFile){//判断是否传身份证反面照
					uni.showToast({
						title: '请上传身份证反面照',
						icon:"none",
						duration: 2000
					});
					return
				}
				this.show = true
				// console.log(this.name)
				// console.log(this.idNumber)
				// console.log(this.frontFile)
				// console.log(this.versoFile)
			}
		}
	}
</script>

<style scoped lang="scss">
page{
	background-color: #F9F9F9;
	.top{
		position: fixed;
		top: 0;
		width: 750rpx;
		background-color: #ffffff;
		padding-top: var(--status-bar-height);
		.title{
			width: 100%;
			height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 36rpx;
			image{
				width: 30rpx;
				height: 30rpx;
			}
			.titleTxt1{
				font-size: 36rpx;
				color: #222222;
			}
			.titleTxt2{
				font-size: 28rpx;
				color: #1989FA;
			}
		}
	}
	.item{
		display: flex;
		align-items: center;
		height: 96rpx;
		background-color: #ffffff;
		border-top: 2rpx solid #F2F2F2;
		padding: 0 32rpx;
		.itemLabel{
			color: #333333;
			font-size: 32rpx;
			width: 150rpx;
			border-right: 1upx solid #E2F1FF;
			margin-right: 20upx;
		}
		input{
			font-size: 32rpx;
		}
	}
	.upload{
		.uploadLabel{
			color: #333333;
			font-size: 36rpx;
			line-height: 96rpx;
			margin-left: 32rpx;
		}
		.uploadItem{
			width: 686rpx;
			height: 380rpx;
			background: #FFFFFF;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto 20rpx auto;
			.uploadItemBox{
				width: 646rpx;
				height: 340rpx;
				border: 1rpx dashed #E0E0E0;
				border-radius: 8rpx;
				text-align: center;
				padding-top: 74rpx;
				image{
					height: 132rpx;
					margin-bottom: 30rpx;
				}
				.add_img {
					width: 132rpx;
					height: 120rpx;
				} 
				view{
					font-size: 28rpx;
					color: #828282;
				}
			}
				
			
		}
	}
	.checkPhone {
		padding: 20rpx;
		.title {
			color: #000000;
			font-size: 28rpx;
			text-align: center;
		}
		.input {
			display: flex;
			align-items: center;
			background-color: #F9F9F9;
			margin: 40rpx 0;
			input {
				padding: 0 24rpx;
				font-size: 28rpx;
				color: #333333;
				height: 80rpx;
				box-sizing: border-box;
				/deep/ .uni-input-wrapper {
					height: 80rpx;
				}
			}
			.input-placeholder {
				color: #BDBDBD;
			}
			.codeBtn {
				background-color: #3F87D0;
				color: #FFFFFF;
				padding: 10rpx 42rpx;
			}
			.codeBtn2 {
				background-color: #3F87D0;
			}
		}
	}
}
</style>
