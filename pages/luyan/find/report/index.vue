<template>
	<view class="content">
		<u-navbar title="举报" :border="true"></u-navbar>

		<view class="main">
			<view class="picker" v-for="(item,index) in array" :key="index">
				<view class="picker-item" :class="{'picker-active':item.checked}" @click="appointment(index)">
					{{item.display}}
				</view>
			</view>

			<textarea class="textarea" v-model="dec" placeholder="请输入举报理由.." />
			<view class="btn" @tap="submit">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				momentsId: '',
				dec: ' ',
				//reportType: 0,
				array: [],
				checkedArrey: []
			};
		},
		onLoad(op) {
			this.momentsId = op.id;
			this.getList()
		},
		methods: {
			// 举报类型
			getList() {
				this.$api.to_http('/common/getKeys', {
					keyName: '用户举报动态类型'
				}, 'POST', '', false).then((res) => {
					console.log(res)
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					// this.array = res.data
					var array = res.data; //获取服务标签
					for (let i in array) {
						this.array.push({
							value: parseInt(array[i].value),
							display: array[i].display,
							checked: false
						});
					}
					console.log(this.array)
				})
			},
			appointment(index) {
				console.log(index)
				this.array[index].checked = !this.array[index].checked;
				
			},
			// 提交
			submit() {
				
				this.checkedArrey=[]
				for(var i in this.array){
					if(this.array[i].checked){
						this.checkedArrey.push(this.array[i].value)
					}
				}
				console.log(this.checkedArrey)
				this.$api.to_http('user/moments/report', {
					momentsId: this.momentsId,
					reportType: this.checkedArrey,
					reportDetail: this.dec
				}, 'POST', '', false).then((res) => {
					console.log(res)
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
						icon: "none"
					});
					setTimeout(() => {
						uni.navigateBack({
							delta:1
						})
					}, 1000)
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;

		.main {
			width: 100%;
			padding: 26upx 32upx;
			box-sizing: border-box;

			.textarea {
				width: 100%;
				height: 280upx;
				padding: 24upx;
				box-sizing: border-box;
				background: #F9F9F9;
				border-radius: 4upx;
			}

			.picker {
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				align-items: center;
				padding: 20upx;

				.picker-item {
					padding: 24upx 70upx;
					Font-family: PingFang SC;
					Font-style: Bold;
					Font-size: 36upx;
					Align: Center;
					background-color: #EDF6FF;
					color: #666666;
				}

				.picker-active {
					color: #fff !important;
					background: #1989FA !important;

				}
			}

			.uploadBox {
				width: 100%;
				margin-top: 24upx;
				display: flex;
				flex-wrap: wrap;

				.imgBox {
					width: 120upx;
					height: 108upx;
					margin-right: 10upx;
					margin-bottom: 10upx;
					border-radius: 8upx;
					position: relative;

					image {
						width: 120upx;
						height: 108upx;
						border-radius: 8upx;
					}

					.del {
						width: 28upx;
						height: 28upx;
						position: absolute;
						right: 0;
						top: 0;
						z-index: 232;
					}
				}

				.uploadItem {
					width: 120upx;
					height: 108upx;
					padding: 10upx;
					border: 1upx solid #D9DCE0;
					box-sizing: border-box;
					border-radius: 8upx;
					font-family: 'PingFang SC';
					font-size: 24upx;
					line-height: 24upx;
					color: #BFC4CB;
					text-align: center;

					image {
						width: 40upx;
						height: 36upx;
						margin-bottom: 18upx;
					}
				}
			}

			.btn {
				width: 100%;
				height: 96upx;
				margin-top: 32upx;
				background: #1989FA;
				border-radius: 4upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: 'PingFang SC';
				font-size: 32upx;
				color: #FFFFFF;
			}
		}
	}
</style>
