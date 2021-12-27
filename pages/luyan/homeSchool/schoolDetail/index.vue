<template>
	<view class="content">
		<u-navbar title="学校详情" :border="true"></u-navbar>
		<view class="main">
			<view class="info">
				<view class="school_name">{{dataVal.schoolName}}</view>
				<view class="title">
					<view class="school_type">{{dataVal.schoolTypeName}}</view>
					<view class="school_public">{{dataVal.educationName}}</view>
				</view>
				<view class="imgPath" v-if="dataVal.pictures && dataVal.pictures.length > 0">
					<image :src="dataVal.pictures[0]" mode="aspectFill"></image>
				</view>
				<view class="adress">
					<image src="../../../../static/luyan/images/icon_school_adress.png" mode="aspectFit"></image>
					<view class="">{{dataVal.address}}</view>
				</view>
				<view class="phone">
					<image src="../../../../static/luyan/images/icon_school_phone.png" mode="aspectFit"></image>
					<view class="">{{dataVal.telNo}}</view>
				</view>
			</view>
			<view class="serviceArea">
				<view class="title">服务区域</view>
				<view class="list">
					<view v-for="(item,i) in dataVal.serviceAreaList" :key="i">{{item}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataVal:{},
				educationList:[],
				schoolTypeList:[],
				serviceList:[
					{name:'梁平区正龙社区香漫林小区1-5栋'},
					{name:'梁平区正龙社区老车坝片区'},
					{name:'梁平区正龙社区香漫林小区1-5栋'},
					{name:'梁平区正龙社区香漫林小区1-5栋'}
				]
			};
		},
		onLoad(op) {
			this.getType('办学模式');
			this.getType('学校类别');
			this.getDetail(op.id);
		},
		methods: {
			// 获取类型
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
					// this.typeList = res.data;
					// return res.data 办学模式 学校类别
					if(val == '办学模式'){
						this.educationList = res.data;
					}else if(val == '学校类别'){
						this.schoolTypeList = res.data;
					}
				})
			},
			getDetail(id) {
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				let that = this;
				this.$api.to_http('school/detail/' + id, 'GET','',false).then((res) => {
					uni.hideLoading();
					res = res.data;
					console.log(res)
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					that.educationList.forEach(itemChild=>{
						if(res.data.educationCode == itemChild.value){
							res.data.educationName = itemChild.display;
						}
					})
					that.schoolTypeList.forEach(itemChild=>{
						if(res.data.schoolClassCode == itemChild.value){
							res.data.schoolTypeName = itemChild.display;
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
					that.dataVal = res.data;
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		.main{
			width: 100%;
			padding: 24upx;
			box-sizing: border-box;
			.info{
				width: 100%;
				padding: 16upx 24upx;
				box-sizing: border-box;
				background: #FFFFFF;
				box-shadow: 0 0 32upx rgba(28, 45, 70, 0.04);
				border-radius: 4upx;
				.school_name{
					width: 100%;
					font-family: 'PingFang SC';
					font-weight: 600;
					font-size: 40upx;
					color: #222222;
					word-break:break-all;
				}
				.title{
					width: 100%;
					margin-top: 20upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					
					.school_type{
						width: 40%;
						font-family: 'PingFang SC';
						font-size: 32upx;
						color: #F2994A;
						text-align: left;
					}
					.school_public{
						width: 40%;
						font-family: 'PingFang SC';
						font-size: 32upx;
						color: #2F80ED;
						text-align: right;
					}
				}
				.imgPath{
					width: 100%;
					margin-top: 24upx;
					image{
						width: 100%;
						height: 462upx;
					}
				}
				.adress{
					width: 100%;
					margin-top: 30upx;
					display: flex;
					align-items: center;
					font-family: 'PingFang SC';
					font-weight: 500;
					font-size: 24upx;
					color: #666666;
					image{
						width: 32upx;
						height: 32upx;
						margin-right: 16upx;
					}
				}
				.phone{
					width: 100%;
					margin-top: 20upx;
					display: flex;
					align-items: center;
					font-family: 'PingFang SC';
					font-size: 24upx;
					color: #666666;
					image{
						width: 32upx;
						height: 32upx;
						margin-right: 12upx;
					}
				}
			}
			.serviceArea{
				width: 100%;
				margin-top: 24upx;
				padding: 24upx;
				box-sizing: border-box;
				background: #FFFFFF;
				box-shadow: 0 0 32upx rgba(28, 45, 70, 0.04);
				border-radius: 4upx;
				.title{
					font-family: 'PingFang SC';
					font-weight: 600;
					font-size: 32upx;
					color: #222222;
				}
				.list{
					width: 100%;
					margin-top: 24upx;
					view{
						width:auto; 
						display:inline-block !important; 
						display:inline;
						padding: 8upx 32upx;
						margin-bottom: 20upx;
						box-sizing: border-box;
						background: #EDF6FF;
						border-radius: 4upx;
						font-family: 'PingFang SC';
						font-weight: 500;
						font-size: 24upx;
						color: #1989FA;
					}
				}
			}
		}
	}
</style>
