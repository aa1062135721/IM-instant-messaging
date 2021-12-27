<template>
	<view class="container">
		<!-- 顶部导航栏 -->
		<view class="top">
			<view class="title">
				<image @click="toBack" src="@/static/hexingImg/back.png" mode=""></image>
				<view class="titleTxt1">添加产品</view>
				<view class="titleTxt2" @click="godetails()">产品管理</view>
			</view>
		</view>
		<!-- 顶部占位空盒子 -->
		<view class="" style="height: var(--status-bar-height);margin-bottom: 88rpx;"></view>
		<view class="box"
			style="padding: 24upx 32upx;background-color: #F9F9F9;box-sizing: border-box;overflow: hidden;">
			<view class="goods-cover-card">
				<view class="main-goods-picture" v-for="(item,index) in mainPicture" :key="index"
					@click="toUp('source1')">
					<image :src="imgUrl+item" mode="aspectFill"></image>
				</view>
				<image v-if="mainPicture.length==0" class="add-goods" src="@/static/images/vvo-yao/add-goods.png"
					@click="toUp('source1')"></image>
			</view>

			<view class="goods-info-card">
				<view class="goods-info-row">
					<view class="goods-info-left">
						<text class="goods-info-id">*</text>
						<text class="goods-info-title">产品名称：</text>
					</view>

					<input class="goods-info-text" v-model="goodsName" type="text" placeholder="请输入产品名称" />
				</view>

				<view class="goods-info-row">
					<view class="goods-info-left">
						<text class="goods-info-id">*</text>
						<text class="goods-info-title">价格：</text>
					</view>

					<input class="goods-info-text" v-model="price" type="text" placeholder="请输入价格" />
				</view>

				<view class="goods-info-row">
					<view class="goods-info-left">
						<!-- <text class="goods-info-id">*</text> -->
						<text class="goods-info-title">优惠价：</text>
					</view>

					<input class="goods-info-text" v-model="priceDiscount" type="text" placeholder="请输入优惠价" />
				</view>

				<view class="goods-info-row">
					<view class="goods-info-left">
						<!-- <text class="goods-info-id">*</text> -->
						<text class="goods-info-title">产品分类：</text>
					</view>
					<picker @change="bindPickerChange"  :range="array" :value="index"  range-key="display">
						<view v-if="array">{{array.length<=0?"":array[index].display}}</view>
						<view class="" v-else>请选择产品分类</view>
					</picker>
					<!-- <input class="goods-info-text" v-model="goodsClassCode" type="text" placeholder="请输入产品分类" /> -->
				</view>

				<view class="goods-info-row">
					<view class="goods-info-left">
						<text class="goods-info-id">*</text>
						<text class="goods-info-title">库存：</text>
					</view>

					<input class="goods-info-text" v-model="putStockCount" type="text" placeholder="请输入库存" />
				</view>

				<view class="goods-info-row">
					<view class="goods-info-left">
						<text class="goods-info-id">*</text>
						<text class="goods-info-title">电话：</text>
					</view>

					<input class="goods-info-text" v-model="phone" type="number" placeholder="请输入电话" />
				</view>

				<view class="goods-info-row">
					<view class="goods-info-left">
						<!-- <text class="goods-info-id">*</text> -->
						<text class="goods-info-title">地址：</text>
					</view>

					<input class="goods-info-text" v-model="address" type="text" placeholder="请输入地址" />
				</view>
			</view>

			<view class="goods-img-text-view">
				<text class="goods-info-id">*</text>
				<text class="goods-img-text">产品图文描述</text>
			</view>

			<view class="img-text-input">
				<textarea class="textarea-style" v-model="goodsDesc" placeholder="请输入产品描述"></textarea>
				<view class="imgBox">
					<view class="goods-desc-img" v-for="(img,index1) in descPicture" :key="index1">
						<image :src="imgUrl+img" mode="aspectFill"></image>
						<u-icon class="delete" @click="toDelete(index1)" name="close" color="#ffffff" size="20">
						</u-icon>
					</view>
					<image v-if="descPicture.length<9" class="add-desc-img"
						src="@/static/images/vvo-yao/add-desc-img.png" @click="toUp('source2')"></image>
				</view>

			</view>

			<view class="btn-row">
				<view class="btn-item" @click="saveGoods(1)">
					<text class="btn-text">保存</text>
				</view>

				<view class="btn-item" @click="saveGoods(2)">
					<text class="btn-text">放入仓库</text>
				</view>
			</view>

			<view class="submit-btn" @click="saveGoods(3)">
				<text class="submit-text">立即上架</text>
			</view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mainPicture: [], //主图
				descPicture: [], //描述图片
				goodsName: '',
				price: '',
				priceDiscount: '',
				goodsClassCode: '',
				putStockCount: '',
				phone: '',
				address: '',
				goodsDesc: '',
				statusCode: 0,
				array: [], //商品分类
				index: 0,
			}
		},
		onLoad() {
			// this.getCode()
			this.getList()
		},
		methods: {
			// 商品类型
			getList(){
				this.$api.to_http('/common/getKeys', {
					keyName:'商品分类'
				}, 'POST','',false).then((res) => {
					console.log(res)
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.array = res.data
				})
			},
			toUp(type) {
				// 上传图片
				let num
				if (type == "source1") {
					num = 1
				} else {
					num = 9
				}
				uni.chooseImage({
					count: 1,
					success: (chooseImageRes) => {
						// let images = []
						// for(let x=0;x<chooseImageRes.tempFiles.length;x++){
						// 	let file = {name:"image" + x,uri:chooseImageRes.tempFiles[x].path}
						// 	images.push(file)
						// }
						const tempFilePaths = chooseImageRes.tempFilePaths;
						tempFilePaths.forEach(ele => {
							uni.uploadFile({
								url: this.baseUrl + '/common/file/upload',
								method: 'POST',
								filePath: ele,
								name: 'file',
								// files:images,
								header: {
									"access-token": uni.getStorageSync('token'),
								},
								success: (res) => {
									let JsonData = JSON.parse(res.data)
									console.log(JsonData);
									let url2 = JsonData.data.path;
									if (type == 'source1') {
										this.mainPicture.push(url2)
									}
									if (type == 'source2') {
										this.descPicture.push(url2)
										console.log(this.descPicture);
									}
								}
							});
						})


					}
				});
			},
			//删除图片
			toDelete(index) {
				this.descPicture.splice(index, 1)
			},
			//产品保存
			saveGoods(status) {
				this.goodsClassCode=this.array[this.index].display
				if (this.mainPicture.length == 0) {
					return this.$refs.uToast.show({
						title: "产品主图不能为空",
						type: 'error',
					})
				}
				if (!this.goodsName || !this.price || !this.goodsClassCode || !this.putStockCount) {
					return this.$refs.uToast.show({
						title: "产品信息请填写完整",
						type: 'error',
					})
				}
				if (!this.phone) {
					return this.$refs.uToast.show({
						title: '请先输入手机号',
						type: 'error',
					})
				}
				//console.log(!/^1[3456789]\d{9}$/.test(this.phone))
				if (!/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(this.phone)) {
					return this.$refs.uToast.show({
						title: '请输入正确的手机号码',
						type: 'error',
					})
				}
				this.$api.to_http('/goods/save', {
					latitude:uni.getStorageSync('latitude'),
					longitude:uni.getStorageSync('longitude'),
					publicAddress:uni.getStorageSync('curLocation'),
					goodsName: this.goodsName,
					price: this.price,
					priceDiscount: this.priceDiscount,
					goodsClassCode: this.goodsClassCode,
					putStockCount: this.putStockCount,
					phone: this.phone,
					address: this.address,
					goodsDesc: this.goodsDesc,
					statusCode: status,
					mainPicture: this.mainPicture,
					descPicture: this.descPicture
				}, 'POST').then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.$refs.uToast.show({
						title: res.message,
						type: 'success',
					})
					setTimeout(() => {
						uni.navigateTo({
							url: 'goods-manage'
						});
					}, 800)
				})
			},
			toBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			godetails() {
				uni.navigateTo({
					url: '/pages/vvo-yao/product-release/goods-manage'
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		.top {
			position: fixed;
			top: 0;
			width: 750rpx;
			background-color: #ffffff;
			padding-top: var(--status-bar-height);

			.title {
				width: 100%;
				height: 88rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 36rpx;

				image {
					width: 30rpx;
					height: 30rpx;
				}

				.titleTxt1 {
					font-size: 36rpx;
					color: #222222;
				}

				.titleTxt2 {
					font-size: 28rpx;
					color: #1989FA;
				}
			}
		}

		.goods-cover-card {
			margin-bottom: 20rpx;
			background-color: #FFFFFF;
			padding: 11rpx 16rpx;

			.main-goods-picture {
				width: 240rpx;
				height: 240rpx;

				image {
					width: 240rpx;
					height: 240rpx;
				}
			}

			.add-goods {
				width: 240rpx;
				height: 240rpx;
			}
		}

		.goods-info-card {
			background-color: #FFFFFF;
			padding: 0rpx 16rpx 20rpx 16rpx;

			.goods-info-row {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding-top: 40rpx;
				padding-bottom: 16rpx;
				border-bottom: 2rpx solid #F2F2F2;
			}

			.goods-info-left {
				width: 232rpx;
				height: 36rpx;
				line-height: 32rpx;

				.goods-info-title {
					font-size: 32rpx;
					color: #000000;
				}
			}

			.goods-info-text {
				padding: 0;
				margin: 0;
				font-size: 24rpx;
				color: #666666;
				line-height: 32rpx;
			}
			picker{
				flex: 1;
				padding: 0;
				margin: 0;
				font-size: 24rpx;
				color: #666666;
				line-height: 32rpx;
			}
		}

		.goods-info-id {
			font-size: 32rpx;
			color: #D40000;
		}

		.goods-img-text-view {
			margin-top: 44rpx;

			.goods-img-text {
				font-size: 32rpx;
				color: #000000;
			}
		}

		.img-text-input {
			background: #FFFFFF;
			border-radius: 4rpx;
			padding: 0 10rpx 10rpx 10rpx;
			display: flex;
			flex-direction: column;
			margin-top: 20rpx;

			.textarea-style {
				padding: 0;
				font-size: 24rpx;
				line-height: 32px;
				color: #666666;
			}

			.imgBox {
				display: flex;
				flex-wrap: wrap;

				.goods-desc-img {
					position: relative;

					image {
						width: 186rpx;
						height: 186rpx;
						margin-right: 15rpx;
					}

					.delete {
						position: absolute;
						top: -10rpx;
						right: 0rpx;
						// z-index: 999;
						width: 28rpx;
						height: 28rpx;
						background: rgba($color: #000000, $alpha: 0.5);
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}

			.add-desc-img {
				width: 186rpx;
				height: 186rpx;
			}
		}

		.btn-row {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-top: 56rpx;

			.btn-item {
				border: 2rpx solid #ED6A0C;
				box-sizing: border-box;
				border-radius: 8rpx;
				width: 332rpx;
				height: 88rpx;
				line-height: 88rpx;
				text-align: center;

				.btn-text {
					font-size: 32rpx;
					color: #ED6A0C;
				}
			}
		}

		.submit-btn {
			background: #1989FA;
			border-radius: 4rpx;
			height: 88rpx;
			line-height: 88rpx;
			text-align: center;
			margin-top: 20rpx;

			.submit-text {
				font-size: 32rpx;
				color: #FFFFFF;
			}
		}
	}
</style>
