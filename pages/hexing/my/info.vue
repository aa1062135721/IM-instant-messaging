<template>
	<view class="info">
		<view class="head">
			<image :src="info.head" @click="changeHead" mode=""></image>
		</view>
		
		<view class="infoItem" @click="navigate({url: '/pages/hexing/my/info-name'})">
			<view class="txt1">
				昵称
			</view>
			<view class="txt2">
				{{info.userName||'您还未设置昵称'}}
			</view>
		</view>
		<!-- <view class="infoItem">
			<view class="txt1">
				备注名
			</view>
			<view class="txt2">
				
			</view>
		</view> -->
		<view class="infoItem">
			<view class="txt1">
				性别
			</view>
			<picker @change="getSex" :value="sexIndex" :range="sexArr">
				<view class="txt2">{{sexArr[sexIndex]}}</view>
			</picker>
		</view>
		<view class="infoItem" @click="navigate({url: '/pages/hexing/my/myCode'})">
			<view class="txt1">
				我的二维码
			</view>
			<image src="@/static/hexingImg/icon.png" mode=""></image>
		</view>
		<view class="infoItem">
			<view class="txt1">
				出生日期
			</view>
			
				<gpp-date-picker class="txt2" @onConfirm="getBirth" :startDate="startDate" :endDate="endDate" :defaultValue="birthday">
					<view class="" v-if="birthday">
							{{birthday}}
					</view>
					<view class="txt2" v-else>
						请选择
					</view>
				</gpp-date-picker>
			
			
		</view>
		<view class="infoItem">
			<view class="txt1">
				居住地
			</view>
			<pickers @address="getAddress" :defaultAddress="defaultAddress">
				<view class="txt2" v-if="address">{{address}}</view>
				<view class="txt2" v-else>请选择地区</view>
			</pickers>
			<!-- <region-picker @change="getAddress" :value="addressIndex">
				<view class="txt2" v-if="address">{{address}}</view>
				<view class="txt2" v-else>请选择地区</view>
			</region-picker> -->
		</view>
		<!-- <view class="infoItem">
			<view class="txt1">
				手机号
			</view>
			<view class="txt2">
				139****5678
			</view>
		</view>
		<view class="infoItem">
			<view class="txt1">
				所在位置
			</view>
			<image src="@/static/hexingImg/icon.png" mode=""></image>
		</view> -->
	</view>
</template>

<script>
	import gppDatePicker from "@/components/gpp-datePicker/gpp-datePicker.vue"
	// import regionPicker from "@/components/region-picker/region-picker.vue"
	import pickers from "@/components/ming-picker/ming-picker.vue"
	export default {
		data() {
			return {
				info:'',//用户信息
				birthIndex:0,
				birthday:'2000-01-01',//生日
				addressIndex:0,
				address:'',
				defaultAddress:["重庆市", "市辖区", "梁平区"],
				sexArr:['女','男'],
				sexIndex:1,
				sex:'男',
				img:''
			}
		},
		components:{
		    gppDatePicker,
			pickers
		},
		onShow() {
			this.getInfo()
		},
		onLoad() {
			// this.getInfo()
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			navigate(params) {
				uni.navigateTo({
					...params 
				})
			},
			getInfo(){
				this.$request('/user/getInfo',{},"GET").then(res => {
						this.info = res
						this.birthday = this.info.birthday
						this.address = this.info.address
						console.log(this.info)
						if(this.info.userGender=='男'){
							this.sexIndex = 1
						}else{
							this.sexIndex = 0
						}
				});
			},
			changeHead(){
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
							  let img = this.imgUrl+JSON.parse(res.data).data.path
							  that.$request('/user/updateHead',{
								  head:img
							  }).then(res => {
								  console.log(res)
								  that.getInfo()
							  });
				          },
				          fail: err => {
				            console.log('err:'+err);
				          }
				        });
					}
				})
			},
			getDate(type){
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				
				if (type === 'start') {
					year = year - 100;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			getBirth(e){
				this.birthday = e.dateValue
				this.$request('/user/updateBirthday',{
					birthday:this.birthday
				}).then(res => {
					this.getInfo()
				});
			},
			getAddress(e){
				console.log(e)
				// this.address = e.detail.value[0]+' '+e.detail.value[1]+' '+e.detail.value[2]
				this.address = e.value[0]+' '+e.value[1]+' '+e.value[2]
				this.$request('/user/updateAddress',{
					address:this.address
				}).then(res => {
					this.getInfo()
				});
			},
			getSex(e){
				console.log(e)
				this.sexIndex = e.detail.value
				this.$request('/user/updateGender',{
					userGender:this.sexIndex
				}).then(res => {
					this.getInfo()
				});
			},
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
}
</style>
