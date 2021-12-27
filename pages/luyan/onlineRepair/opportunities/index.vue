<template>
	<view class="content">
		<!-- <u-navbar title="业务机会" :background="bageVal" :borderBottom="false" :backIconColor='titleColor' :titleColor='titleColor'></u-navbar> -->
		<!-- <view class="top">
			<image src="../../../../static/luyan/images/icon_onlineRepair_top_bg.png" mode="aspectFit"></image>
		</view> -->
		<view class="main">
			<view class="listBox">
				<view class="listItem" v-for="(item,i) in listData" :key="i">
					<view class="itemTitle">
						<view class="left sheny">{{item.reportTitle}}</view>
						<view class="right">
							<view class="error" v-if="item.handleStatusCode == '1'">待处理</view>
							<view class="error" v-else-if="item.handleStatusCode == '2'" >已处理</view>
							<!-- @click="goRepair(item.reportRepairId)" -->
						</view>
					</view>
					<view class="tagBox">
						<view>{{item.reportClassCodeName}}</view>
						<view>{{item.reportTypeCodeName}}</view>
					</view>
					<view class="text">{{item.reportContent}}</view>
					<view class="imgList">
						<!-- <image v-for="itemChild in item.pictures" :src="itemChild" mode="aspectFit"></image> -->
						<u-image class="pic" v-for="itemChild in item.pictures" :src="itemChild" mode="aspectFill" :lazy-load="true">
							<u-loading slot="loading"></u-loading>
							<view slot="error" style="font-size: 24upx;">加载失败</view>
						</u-image>
						<!-- <image v-for="item in item.pictures" src="../../../../static/luyan/images/icon_onlineRepair_img.png" mode="aspectFit"></image> -->
					</view>
					<view class="itemBtm">
						<view class="left">{{item.reportTime}}</view>
						<view class="right" @tap="goDetail(item.reportRepairId)">报修详情</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bageVal:{backgroundColor:'transparent'},
				titleColor:'#FFFFFF',
				categoryList:[],//类别
				typeList:[],//类型
				statusList:[],//
				listData:[],
				pageNo:1,
				pageSize:15,
				noPage:false
			};
		},
		onPageScroll(e) {
			// 传入scrollTop值并触发所有easy-loadimage组件下的滚动监听事件
			if(e.scrollTop > 10){
				this.bageVal = {backgroundColor:'#FFFFFF'};
				this.titleColor = '#000000';
			}else{
				this.bageVal = {backgroundColor:'transparent'};
				this.titleColor = '#FFFFFF';
			}
		},
		onLoad() {
			this.getType('报修类别');
			this.getType('家电报修子类');
			this.getType('房屋报修子类');
			// this.getType('report_repair_status');
		},
		onShow() {
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			this.pageNo = 1;
			this.listData = [];
			this.getList();
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
			// 获取报修类型
			getType(val){
				this.$api.to_http('common/getKeys',{
					keyName:val
				}, 'POST','',false).then((res) => {
					res = res.data;
					// console.log(res)
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					if(val == '报修类型'){
						this.categoryList = res.data;
					}else if(val == '家电报修子类'){
						this.typeList = res.data;
					}else if(val == '房屋报修子类'){
						this.statusList = res.data;
					}
				})
			},
			
			// 获取报修列表
			getList(){
				let that = this;
				console.log(that.baseUrl,'1212')
				this.$api.to_http('/reportrepair/claim-list', {
					pageNo:this.pageNo,
					pageSize:this.pageSize
				}, 'POST','',false).then((res) => {
					uni.hideLoading();
					// console.log(res)
					res = res.data
					if (res.code != 200) {
						return that.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					if(res.data.records.length > 0){
						res.data.records.forEach(item => {
							that.categoryList.forEach(itemChild=>{
								if(item.reportClassCode == itemChild.value){
									item.reportClassCodeName = itemChild.display;
								}
							})
							if(that.typeList){
								that.typeList.forEach(itemChild=>{
									if(item.reportTypeCode == itemChild.value){
										item.reportTypeCodeName = itemChild.display;
									}
								})
							}
							if(that.statusList){
								that.statusList.forEach(itemChild=>{
									if(item.reportTypeCode == itemChild.value){
										item.reportTypeCodeName = itemChild.display;
									}
								})
							}
							let arr = [];
							if(item.pictures.length > 0){
								item.pictures.forEach(itemChild=>{
									let url = that.baseUrlImg + itemChild;
									arr.push(url)
								})
							}
							item.pictures = arr;
						})
						that.listData = that.listData.concat(res.data.records);
						console.log(that.listData)
					}else{
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						that.noPage = true;
					}
					
					console.log(that.listData)
				})
			},
			// 报修详情
			goDetail(i){
				uni.navigateTo({
					url:'/pages/luyan/onlineRepair/repairDetail/index?id='+i+"&type=2"
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		position: relative;
		.top{
			width: 100%;
			// height: 408upx;
			position: absolute;
			top: 0;
			left: 0;
			// border-radius: 0 0 50% 50%;
			// background-color: #1989FA;
			image{
				width: 100%;
				height: 522upx;
			}
		}
		.main{
			width: 100%;
			padding: 0 32upx;
			padding-top: var(--status-bar-height);
			box-sizing: border-box;
			position: absolute;
			// top: 120upx;
			left: 0;
			z-index: 22;
			
			.listBox{
				width: 100%;
				margin-top: 26upx;
				.listItem{
					width: 100%;
					padding: 24upx;
					box-sizing: border-box;
					background-color: #FFFFFF;
					box-shadow: 0 0 32upx rgba(28, 45, 70, 0.04);
					border-radius: 4upx;
					margin-bottom: 16upx;
					.itemTitle{
						width: 100%;
						padding-bottom: 32upx;
						border-bottom: 1upx solid #F2F2F2;
						box-sizing: border-box;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.left{
							width: 508upx;//540
							font-family: 'PingFang SC';
							font-weight: 600;
							font-size: 32upx;
							color: #222222;
						}
						.right{
							view{
								padding: 12upx 24upx;
								box-sizing: border-box;
								font-family: 'PingFang SC';
								font-size: 24upx;
								color: #FFFFFF;
								border-radius: 6upx;
							}
							.error{
								background-color: #D40000;
							}
							.success{
								background-color: #1989FA;
							}
						}
					}
					.tagBox{
						width: 100%;
						margin-top: 24upx;
						display: flex;
						flex-wrap: wrap;
						view{
							padding: 8upx 16upx;
							background: #EDF6FF;
							border-radius: 4upx;
							font-family: 'PingFang SC';
							font-size: 24upx;
							color: #1989FA;
							margin-right: 16upx;
							margin-bottom: 10upx;
						}
					}
					.text{
						width: 100%;
						margin-top: 22upx;
						background: #F9F9F9;
						border-radius: 4upx;
						padding: 24upx;
						box-sizing: border-box;
						font-family: 'PingFang SC';
						font-size: 28upx;
						letter-spacing: -0.6upx;
						color: #222222;
					}
					.imgList{
						width: 100%;
						margin-top: 16upx;
						display: flex;
						flex-wrap: wrap;
						.pic{
							width: 204upx !important;
							height: 160upx !important;
							margin-right: 8upx;
							margin-bottom: 10upx;
							border-radius: 4upx;
							img {
								width: 204upx;
								height: 160upx;
								border-radius: 4upx;
							}
						}
						// image{
						// 	width: 204upx;
						// 	height: 160upx;
						// 	margin-right: 8upx;
						// 	margin-bottom: 10upx;
						// 	border-radius: 4upx;
						// }
					}
					.itemBtm{
						width: 100%;
						margin-top: 32upx;
						padding-top: 24upx;
						border-top: 1upx solid #F2F2F2;
						box-sizing: border-box;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-family: 'PingFang SC';
						font-size: 24upx;
						letter-spacing: -0.6upx;
						.left{
							color: #999999;
						}
						.right{
							color: #1989FA;
						}
					}
				}
			}
		}
	}
</style>
