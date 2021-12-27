<template>
	
	<view class="content">
		<u-navbar title="报修详情" :background="bageVal" :borderBottom="false" :backIconColor='titleColor' :titleColor='titleColor'></u-navbar>
		<view class="top">
			<image src="../../../../static/luyan/images/icon_onlineRepair_top_bg.png" mode="aspectFit"></image>
		</view>
		<view class="main">
			<view class="info">
				<view class="itemTitle">
					<view class="left sheny">{{dataVal.reportTitle}}</view>
					<view class="right">
						<view class="error" v-if="dataVal.handleStatusCode == '1'">待处理</view>
						<view class="error" v-else-if="dataVal.handleStatusCode == '2'">已处理</view>
					</view>
				</view>
				<view class="infoList">
					<view class="left">报修类别</view>
					<view class="right itemSuccess sheny">{{dataVal.reportTypeCodeName}}</view>
				</view>
				<view class="infoList">
					<view class="left">报修类型</view>
					<view class="right sheny">{{dataVal.categoryCodeName}}</view>
				</view>
				<view class="infoList">
					<view class="left">报修小区</view>
					<view class="right sheny">{{dataVal.reportPlace}}</view>
				</view>
				<view class="infoList">
					<view class="left">报修时间</view>
					<view class="right sheny">{{dataVal.reportTime}}</view>
				</view>
				<view class="infoList">
					<view class="left">报修人</view>
					<view class="right sheny">{{dataVal.reporter}}</view>
				</view>
				<view class="infoList">
					<view class="left">手机号</view>
					<view class="right sheny">{{dataVal.telNo}}</view>
				</view>
				<view class="itemTitle mt48">
					<view class="left sheny">报修内容</view>
				</view>
				<view class="text">{{dataVal.reportContent}}</view>
				<view class="imgList">
					<image v-for="item in dataVal.pictures" :src="item" mode="aspectFill"></image>
				</view>
			</view>
			<view class="statusTitle">报修处理</view>
			<view class="statuList" >
				<lsd-steps 
				direction="column" 
				:current="0" 
				:list="steps" 
				></lsd-steps>
			</view>
			<view class="callphone" v-if="type==2" @click="callPhone()">
				立即联系
			</view>
		</view>
	</view>
</template>

<script>
	import lsdSteps from '@/components/lsd-steps/lsd-steps.vue'
	export default {
		components: {
			lsdSteps
		},
		data() {
			return {
				bageVal:{backgroundColor:'transparent'},
				titleColor:'#FFFFFF',
				status: 0,
				type:0,
				dataVal:{},
				typeList:[],
				categoryList:[],
				id:0,
				steps:[
					// {
					// 	time:'2021-05-31 10:01:45',
					// 	repair_name:'祁天1',
					// 	status:'1',
					// },{
					// 	time:'2021-05-31 10:01:45',
					// 	handle_name:'祁天2',
					// 	status:'2',
					// },{
					// 	time:'2021-05-31 10:01:45',
					// 	handle_name:'祁天3',
					// 	status:'3',
					// 	text:'更换路灯灯泡',
					// 	imgPath:'../../../../static/luyan/images/icon_onlineRepair_stop.png'
					// }
				]
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
		onLoad(op) {
			this.id=op.id
			this.type=op.type,
			this.getType('报修类别');
			this.getType('报修类型');
			this.getDetail(op.id)
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
						this.typeList = res.data;
					}else if(val == '家电报修子类'){
						this.categoryList = res.data;
					}else if(val == '房屋报修子类'){
						this.categoryList = res.data;
					}
					// this.typeList = res.data;
					// return res.data
					// if(val == 'report_type'){
					// 	this.categoryList = res.data;
					// }else if(val == 'report_classify'){
						// this.typeList = res.data;
					// }else{
					// 	this.statusList = res.data;
					// }
				})
			},
			getDetail(id){
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				let that = this;
				this.$api.to_http('reportrepair/detail/' + id, 'GET','',false).then((res) => {
					uni.hideLoading();
					res = res.data;
					console.log(res)
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.typeList.forEach(item=>{
						if(item.value == res.data.reportTypeCode){
							res.data.reportTypeCodeName = item.display
						}
					})
					this.categoryList.forEach(item=>{
						if(item.value == res.data.reportClassCode){
							res.data.categoryCodeName = item.display
						}
					})
					let arr = []
					if(res.data.pictures.length > 0){
						res.data.pictures.forEach(item=>{
							let url = that.baseUrlImg + item;
							arr.push(url)
						})
					}
					res.data.pictures = arr;
					let stepArr = [];
					if(res.data.solveList.length > 0){
						res.data.solveList.forEach(item => {
							let arr = [];
							if(item.pictures.length > 0){
								item.pictures.forEach(its=>{
									let url = that.baseUrlImg + its;
									arr.push(url)
								})
							}
							let obj = {
								time:item.reportTime,
								handle_name:item.handler,
								status:item.handleStatusCode,
								text:item.handleBack,
								imgPath:arr
							}
							stepArr.push(obj)
						})
					}
					this.steps = stepArr.reverse();
					this.dataVal = res.data;
				})
			},
			//标记已打过该报修人电话
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:this.dataVal.telNo
				})
				this.$api.to_http('/reportrepair/mark-called',{
					reportRepairId:this.id
				},'POST','',false).then((res) => {
					console.log(res)
				})
				
			}
		},
	}
</script>

<style lang="scss" scoped>
	.mt48 {
		margin-top: 48upx;
	}

	.content {
		width: 100%;
		position: relative;

		.top {
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;

			image {
				width: 100%;
				height: 522upx;
			}
		}

		.main {
			width: 100%;
			padding: 0 32upx 20upx;
			padding-top: var(--status-bar-height);
			box-sizing: border-box;
			position: absolute;
			top: 120upx;
			left: 0;
			z-index: 22;

			.info {
				width: 100%;
				padding: 24upx;
				box-sizing: border-box;
				background-color: #FFFFFF;
				box-shadow: 0 0 32upx rgba(28, 45, 70, 0.04);
				border-radius: 4upx;

				.itemTitle {
					width: 100%;
					padding-bottom: 32upx;
					border-bottom: 1upx solid #F2F2F2;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.left {
						width: 508upx; //540
						font-family: 'PingFang SC';
						font-weight: 600;
						font-size: 32upx;
						color: #222222;
					}

					.right {
						view {
							padding: 12upx 24upx;
							box-sizing: border-box;
							font-family: 'PingFang SC';
							font-size: 24upx;
							color: #FFFFFF;
							border-radius: 6upx;
						}

						.error {
							background-color: #D40000;
						}

						.success {
							background-color: #1989FA;
						}
					}
				}

				.infoList {
					width: 100%;
					padding: 24upx 0;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-family: 'PingFang SC';
					font-size: 28upx;
					line-height: 40upx;
					letter-spacing: -0.6upx;

					.left {
						text-align: left;
						font-weight: 500;
						color: #666666;
					}

					.right {
						max-width: 480upx;
						text-align: right;
						color: #222222;
					}

					.itemSuccess {
						color: #1989FA;
					}
				}

				.text {
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

				.imgList {
					width: 100%;
					margin-top: 16upx;
					display: flex;
					flex-wrap: wrap;

					image {
						width: 204upx;
						height: 160upx;
						margin-right: 8upx;
						margin-bottom: 10upx;
						border-radius: 4upx;
					}
				}
			}

			.statusTitle {
				width: 100%;
				margin: 30upx 0;
				font-family: 'PingFang SC';
				font-size: 32upx;
				color: #222222;
			}

			.statuList {
				width: 100%;
				padding: 60upx 50upx;
				box-sizing: border-box;
				background-color: #FFFFFF;
				box-shadow: 0 0 32upx rgba(28, 45, 70, 0.04);
				border-radius: 4upx;
			}
			.callphone{
				width: 100%;
				margin: 20upx auto;
				padding: 20upx 0;
				background: #1989FA;
				border-radius: 4upx;
				font-family: PingFang SC;
				font-style: normal;
				font-weight: bold;
				font-size: 32upx;
				text-align: center;
				color: #FFFFFF;
			}
		}
	}
</style>
