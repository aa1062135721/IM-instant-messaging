<template>
	<view class="">
		<view class="business-info">
			工商信息
		</view>
		<view class="deputy">
			<view class="deputy-title">法定代表人</view>
			<view class="deputy-content">
				<image src="../../static/hexingImg/cpfb.png" mode=""></image>
				<view class="">{{details.name|| '-'}}</view>
			</view>
		</view>

		<view class="pagecard">
			<view class="page-item">
				<text class="page-title">成立日期</text>
				<text>{{details.estdate.substr(0,10)|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">经营状态</text>
				<text>{{details.regStatus|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">注册资本</text>
				<text>{{details.regcap|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">实缴资本</text>
				<text>{{details.reccap || '-'}}</text>
			</view>
		</view>
		<view class="pagecard">
			<view class="page-item">
				<text class="page-title">统一社会信用代码</text>
				<text>{{details.uniscid|| '-'}}</text>
			</view>
			<view class="page-item">
				<text></text>
				<text></text>
			</view>
			<view class="page-item">
				<text class="page-title">工商注册号</text>
				<text>{{details.regno|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">组织机构代码</text>
				<text>{{details.orgcode|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">纳税人识别号</text>
				<text>{{details.taxNumber|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">纳税人资质</text>
				<text>-</text>
			</view>
		</view>
		<view class="pagecard">
			<view class="page-item">
				<text class="page-title">企业类型</text>
				<text>{{details.enttypeCn|| '-'}}</text>
			</view>
			<view class="page-item">
				<text></text>
				<text></text>
			</view>
			<view class="page-item">
				<text class="page-title">行业</text>
				<text>{{details.industryphy|| '-'}}</text>
			</view>
			<view class="page-item">
				<text></text>
				<text></text>
			</view>
			<view class="page-item">
				<text class="page-title">营业期限</text>
				<text>{{details.opto|| '-'}}</text>
			</view>
			<view class="page-item">
				<text></text>
				<text></text>
			</view>
			<view class="page-item">
				<text class="page-title">人员规模</text>
				<text>{{details.empnum|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">参保人数</text>
				<text>{{details.exenum|| '-'}}</text>
			</view>
		</view>
		<view class="pagecard">
			<view class="page-item">
				<text class="page-title">英文名称</text>
				<text>{{details.regorg|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">曾用命</text>
				<text>{{details.regorgCn|| '-'}}</text>
			</view>
		</view>
		<view class="pagecard">
			<view class="page-item">
				<text class="page-title">登记机关</text>
				<text>{{details.regorgCn|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">批准日期</text>
				<text>{{details.apprdate.substr(0,10)|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">注册地址</text>
				<text>{{details.entname|| '-'}}</text>
			</view>
			<view class="page-item">
				<text class="page-title">经营范围</text>
				<text>{{details.opscope|| '-'}}</text>
			</view>
		</view>

	</view>
</template>

<script>
export default {
		data() {
			return {
				name:'',
				details:{},
				
			}
		},
		onLoad() {
			this.details=uni.getStorageSync('details')
			console.log(this.details,'你好啊')
			// console.log(this.name)
			uni.setNavigationBarTitle({
				title:this.details.entname
			})
			// this.companyinfo()
		},
		methods: {
			// companyinfo(){
			// 	this.$api.to_http('/sczt/get/'+this.name, {}, 'POST', '', false).then((res) => {
			// 		console.log(res)
			// 		console.log(res.data)
			// 		if(res.data.code==200){
			// 			this.details=res.data.data
			// 		}
			// 	})	
				
				
				
				
				// let that = this;
				// uni.request({
				// 	url: 'http://open.api.tianyancha.com/web/services/open/ic/baseinfo/normal',
				// 	header: {
				// 			'Access-Control-Allow-Origin':'*',
				// 			'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
				// 			"Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",
				// 			"X-Powered-By":' 3.2.1',
				// 			'Content-Type': 'application/json;charset=UTF-8',
				// 	        'Authorization': 'a5d64ed9-d4fd-440a-b4c7-027f7ec8a0b2' //自定义请求头信息
				// 	},
				// 	method: 'GET',
				// 	data: {
				// 		keyword:that.name,//	搜索关键字（公司名称、公司id、注册号或社会统一信用代码）
				// 	}
				// }).then((res) => {
				// 	console.log(res)
				// 	if (res[1].data.error_code == 0) {
				// 		that.details=res[1].data.result
				// 		console.log(that.details)
				// 	}
				// })
			// }
		}
	}
</script>

<style lang="scss">
	page {
		padding: 28upx 0upx;
		background-color: #FFFFFF;
	}

	.business-info {
		padding:0 30upx;
		font-family: PingFang SC;
		font-style: normal;
		font-weight: 600;
		font-size: 32upx;
		color: #2F80ED;
		margin-bottom: 40upx;
	}

	.deputy {
		display: flex;
		flex-direction: column;
		margin-bottom: 20upx;
		padding:0 30upx;
		.deputy-title {
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 28upx;
			color: #BDBDBD;
			margin-bottom: 12upx;
		}

		.deputy-content {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 32upx;
			color: #2F80ED;

			image {
				width: 70upx;
				height: 70upx;
				border-radius: 8upx;
				margin-right: 20upx;
			}
		}
	}

	.pageCard {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding:0 30upx;
	
		.page-item {
			width: 50%;
			display: flex;
			flex-direction: column;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 28upx;
			color: #333333;
			margin-bottom: 30upx;

			.page-title {
				color: #BDBDBD;
				margin-bottom: 8upx;
			}

		}
	}

	.pagecard {
		border-top: 1upx solid #F2F2F2;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding:10upx 30upx;
		.page-item {
			width: 50%;
			display: flex;
			flex-direction: column;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 28upx;
			color: #333333;
			margin-bottom: 30upx;
			.page-title {
				color: #BDBDBD;
				margin-bottom: 8upx;
			}

		}
		&:last-of-type{
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
		}
		&:nth-last-of-type(2){
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
		}
	}
</style>
