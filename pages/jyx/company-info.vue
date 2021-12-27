<template>
	<view class="">



		<u-popup style="width:100%;" v-model="show" mode="center" >
			<view class="modTitle">
				认领企业
			</view>
			<view style="display: flex;justify-content: space-around;">
				<view >行业</view>
				  <picker  @change="bindPickerChange" :value="index" :range="array" range-key="display">
			        <view class="uni-input">{{array.length<=0?"":array[index].display}}</view>
			    </picker>
			</view>
			<view @click="claim" class="modBtn">确定</view>
		</u-popup>



		<view class="commany">
			<image src="../../static/hexingImg/cpfb.png" mode=""></image>
			<view class="com-content">
				<view class="comany-name">{{details.entname}}</view>
				<view class="tag">
					<view class="subsist">存续</view>
					<view class="orders">曾用命</view>
					<view class="small">小微企业</view>
					<view class="browse">浏览:2万＋</view>
				</view>
			</view>
		</view>
		<view class="cont">
			<text>简介:</text>{{details.opscope||'-'}}
		</view>
		<view class="dis-f">
			<view class="">
				<text>法定代表人</text>
				<text class="name">{{details.name||'-'}}</text>
			</view>
			<view class="">
				<text>注册资本</text>
				<text class="data">{{details.regcap||'-'}}</text>
			</view>
			<view class="">
				<text>成立日期</text>
				<text class="data">{{details.estdate?details.estdate.substr(0,10):''||'-'}}</text>
			</view>
		</view>
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navlist" :key="index" @click="goDetails(item.url)">
				<image :src="item.img" mode=""></image>
				<view class="">{{item.title}}</view>
			</view>
		</view>
		<!-- 操作按钮 -->
		<view class="operation_btn">
			<view @click="focus" :style="{color:isFocus?'#666':'',border:isFocus?'1px solid #666666':''}"
				class="focus_on">{{isFocus?'取消关注':'关注'}}</view>
			<view :style="{color:isClaim?'#666':'',background:isClaim?'#eee':''}" @click="clainCompany" class="claim">{{isClaim?'取消认领':'认领企业'}}</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
			
				show: false,
				isFocus: false,
				isClaim: false,
				details: {},
				navlist: [{
						img: '../../static/jyx/sui.png',
						title: '公司信息',
						url: "/pages/jyx/company-infolist"
					},
					{
						img: '../../static/jyx/Vector11.png',
						title: '主要人员',
						url: "/pages/jyx/keyPersonnel"
					},
					{
						img: '../../static/jyx/user.png',
						title: '股东信息',
						url: "/pages/jyx/shareholderInfo"
					},
					{
						img: '../../static/jyx/yicang.png',
						title: '经营异常'
					},
					{
						img: '../../static/jyx/yica.png',
						title: '行政处罚'
					},
					{
						img: '../../static/jyx/wei.png',
						title: '严重违法'
					},
					{
						img: '../../static/jyx/xuke.png',
						title: '行政许可'
					},
					{
						img: '../../static/jyx/zhengshu.png',
						title: '资质证书'
					},
				],
				id: 0,
				array: [],
				index: 0,

			}
		},
		onLoad(options) {
			this.id = options.id
			this.companyinfo()
			this.getDataDictionary()
			
		},
		methods: {
			claim(){
				let value=this.array[this.index].value
				this.$api.to_http('/mainPart/claim/' + this.id+'/'+value, {}, 'get', '', false).then(()=>{
					uni.showToast({
						icon: 'none',
						title: '认领成功'
					})
					this.companyinfo()
					this.show=false
				})
			},
			// 获取数据字典
			getDataDictionary() {
				this.$api.to_http('/common/getKeys', {
					keyName: '服务范围'
				}, 'post', '', false).then(res => {
					// console.log(res.data.data,'我是服务范围')
					this.array = res.data.data
				})
			},
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value

			},

			//认领企业
			clainCompany() {
				if(this.isClaim){
					let that=this
					uni.showModal({
						title: '提示',
						content: '确定取消认领吗',
						success: function(res) {
							if (res.confirm) {
								//企业id
								that.$api.to_http('/mainPart/cancelClaim/' + that.id, {}, 'get', '', false)
									.then((
										res) => {
										if (res.data.code == 200) {
											uni.showToast({
												icon: 'none',
												title: '操作成功'
											})
											that.companyinfo()
										}
									})
							}
						}
					})
				}else{
					this.show = true
				}
				
				//企业id
				// this.$api.to_http('/mainPart/claim/' + this.id, {}, 'get', '', false).then((
				// 	res) => {
				// 	console.log(res)
				// 	console.log(res.data)
				// 	if (res.data.code == 200) {
				// 		uni.showToast({
				// 			icon: 'none',
				// 			title: '认领成功'
				// 		})
				// 		this.companyinfo()
				// 	}
				// })
			},

			focus() {
				let that = this
				if (this.isFocus) {

					uni.showModal({
						title: '提示',
						content: '确定取消关注公司吗',
						success: function(res) {
							if (res.confirm) {
								//企业id
								that.$api.to_http('/mainPart/cancelFocus/' + that.id, {}, 'get', '', false)
									.then((
										res) => {
										if (res.data.code == 200) {
											uni.showToast({
												icon: 'none',
												title: '操作成功'
											})
											that.companyinfo()
										}
									})
							}
						}
					})

				} else {
					uni.showModal({
						title: '提示',
						content: '确定关注公司吗',
						success: function(res) {
							if (res.confirm) {

								//企业id
								that.$api.to_http('/mainPart/focus/' + that.id, {}, 'get', '', false).then((
									res) => {
									console.log(res)
									console.log(res.data)
									if (res.data.code == 200) {
										uni.showToast({
											icon: 'none',
											title: '关注成功'
										})
										that.companyinfo()
									}
								})
							}
						}
					})
				}

			},
			goDetails(url) {
				var that = this
				uni.setStorageSync('details', that.details)
				uni.navigateTo({
					url: url
				})
			},
			//企业信息
			companyinfo() {
				this.$api.to_http('/mainPart/getInfo/' + this.id, {}, 'get', '', false, 'application/json').then((res) => {
					console.log(res)
					console.log(res.data)
					if (res.data.code == 200) {
						this.details = res.data.data.mainPart
						this.isFocus = res.data.data.isFocus
						this.isClaim = res.data.data.isClaim
					}
				})





				// 	let that = this;
				// 	var data = {
				// 		keyword: that.details.name, //	搜索关键字（公司名称、公司id、注册号或社会统一信用代码）
				// 	}
				// 	console.log(that.$tycToken);
				// 	that.$request('tyc/port', //天眼查接口
				// 		{
				// 			url: 'http://open.api.tianyancha.com/web/services/open/ic/baseinfo/normal',
				// 			method: 'get',
				// 			token: that.$tycToken, //token
				// 			data: JSON.stringify(data)
				// 		}, "POST").then(res => {
				// 		if (res[1].data.error_code == 0) {
				// 			that.companyList = res[1].data.result.items
				// 			console.log(that.companyList)
				// 		}
				// 	});

			},


		}
	}
</script>

<style lang="scss">
	.modBtn{
		// position:relative;
		// bottom: 30upx;
		// left: 0;
		margin-top: 208upx;
		display: flex;
		justify-content: center;
		font-family: PingFang SC;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		color: #1989FA;
		padding: 30upx 0;
		border-top: 1px solid #F2F2F2;;
	}
	// .modContent {
	// 	display: flex;
	// 	justify-content: space-between;
	// }

	.modTitle {
		padding: 40upx 60upx;
		display: flex;
		justify-content: center;
		font-family: PingFang SC;
		font-style: normal;
		font-weight: normal;
		font-size: 36upx;
		color: #333;
	}

	/deep/.u-drawer__scroll-view {
		width: 276px;
		min-height: 472upx;
		
	}

	.operation_btn {
		padding: 0 30rpx;
		position: fixed;
		bottom: 40rpx;
		display: flex;
		width: 100%;
		justify-content: space-between;

		.focus_on {
			width: 330upx;
			height: 96upx;
			border: 1px solid #ED6A0C;
			box-sizing: border-box;
			border-radius: 2px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: PingFang SC;
			font-size: 16px;
			text-align: center;
			color: #ED6A0C;
		}

		.claim {
			width: 330upx;
			height: 96upx;
			box-sizing: border-box;
			border-radius: 2px;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #1989FA;
			color: #fff;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 16px;
		}
	}

	.page {
		background-color: #fff;
	}

	.commany {
		display: flex;
		justify-content: flex-start;
		align-content: center;
		padding: 28upx 32upx 34upx 32upx;

		image {
			width: 120upx;
			height: 120upx;
			margin-right: 20upx;
			
		}

		.com-content {
			display: flex;
			flex-direction: column;
			align-content: center;
			flex: 1;
			.comany-name {
				
				font-family: PingFang SC;
				font-style: normal;
				font-weight: 600;
				font-size: 32upx;
				color: #222222;
				margin-bottom: 34upx;
			}

			.tag {
				
				display: flex;
				justify-content: flex-start;
				align-items: center;

				view {
					margin-right: 16upx;
				}

				.subsist {
					font-family: PingFang SC;
					font-style: normal;
					font-weight: 300;
					font-size: 24upx;
					background: #D5FFD5;
					border-radius: 4upx;
					color: #0BC73F;
					padding: 4upx 12upx;
				}

				.orders {
					font-family: PingFang SC;
					font-style: normal;
					font-weight: 300;
					font-size: 24upx;
					color: #F4980D;
					background: #FFF6DE;
					border-radius: 4upx;
					padding: 4upx 12upx;
				}

				.small {
					font-family: PingFang SC;
					font-style: normal;
					font-weight: 300;
					font-size: 24upx;
					color: #D16DF4;
					background: #F7F0FF;
					border-radius: 4upx;
					padding: 4upx 12upx;
				}

				.browse {
					font-family: PingFang SC;
					font-style: normal;
					font-weight: 300;
					font-size: 24upx;
					color: #828282;
				}
			}

		}
	}

	.cont {

		font-family: PingFang SC;
		font-style: normal;
		font-weight: 500;
		font-size: 28upx;
		color: #333;
		padding: 0upx 32upx;

		text {

			color: #BDBDBD;
		}
	}

	.dis-f {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1upx solid #F2F2F2;
		font-family: PingFang SC;
		font-style: normal;
		font-weight: normal;
		font-size: 28upx;
		color: #828282;
		padding: 32upx 0;

		view {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 28upx;
			color: #828282;

			.name {
				color: #2F80ED;
				margin-top: 12upx;
			}

			.data {
				margin-top: 12upx;
				color: #333;
			}
		}

	}

	.nav {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.nav-item {
			margin-top: 60upx;
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 26upx;
			color: #BDBDBD;

			image {
				width: 50upx;
				height: 50upx;
				margin-bottom: 16upx;
			}

			&:nth-of-type(1) {
				color: #4F4F4F;
			}

			&:nth-of-type(2) {
				color: #4F4F4F;
			}

			&:nth-of-type(3) {
				color: #4F4F4F;
			}
		}
	}
</style>
