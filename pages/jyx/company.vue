<template>
	<view class="content">
		<view class="search">

			<input type="text" value="" placeholder="搜索公司名称" v-model="inputValue" />
			<view class="img-box">
				<image src="../../static/lqImg/search.png" mode="" @click="search()"></image>
			</view>
			
		</view>
		<view class="list">
			<view class="list-item" v-for="(item,index) in companyList" :key="index" @click="goDetails(item.PRIPID)" >
				<view class="list-name">{{item.ENTNAME}}</view>
				<image src="../../static/jyx/right.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: '', //公司名称
				companyList: [], //公司列表
			}
		},
		onLoad() {
			console.log(uni.getStorageSync('token'))
		},
		methods: {
			onKeyInput: function(event) {
				this.inputValue = event.target.value
				console.log(this.inputValue);
				console.log(this.inputValue);
			},
			search() {
				
				this.$api.to_http(`/mainPart/search/${this.inputValue}`, {
				}, 'get', '', false,'').then((res) => {
					console.log(res,'测试')
					this.companyList=res.data.data
				})
				// let that = this;
				// var data = {
				// 	word: that.inputValue
				// }
				// console.log(that.$tycToken);
				// that.$request('/tyc/port', //天眼查接口
				// 	{
				// 		url: 'http://open.api.tianyancha.com/services/open/search/2.0?word=' + that.inputValue,
				// 		method: 'get',
				// 		token: that.$tycToken, //token

				// 		//data: JSON.stringify(data)
				// 	}, "POST").then(res => {
				// 		console.log(res.result.items)
				// 		console.log(res[1].data.result.items)
				// 		if (res[1].data.error_code == 0) {
				// 			that.companyList = res[1].data.result.items
				// 			console.log(that.companyList)
				// 		}
				// });
			},
			goDetails(id) {
				// console.log(id)
				uni.navigateTo({
					url:'company-info?id='+id
				})
			},
		}
	}
</script>

<style lang="scss">
	page {

		background-color: #f9f9f9;

	}

	.content {
		background-color: #FFFFFF;
		padding: 30upx;
	}

	.search {

		margin-top: 1upx solid #eee;
		background: #F2F2F2;
		border-radius: 100upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 16upx 20upx;
		.img-box{
			width: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 24upx 16upx;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 24upx;
			background: #1989FA;
			border-radius: 0px 40upx 40upx 0px;
			color: #FFFFFF;
			image {
				width: 28upx;
				height: 28upx;
				margin-right: 16upx;
			}
		}
		

		input {
			flex: 1;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 28upx;
			color: #333;
		}
	}

	.list {
		.list-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 28upx;
			color: #828282;
			padding: 20upx 30upx;

			image {
				width: 26upx;
				height: 26upx;
			}
		}
	}
</style>
