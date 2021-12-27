<template>
	<view class="container">
		<view class="create-row">
			<text class="create-row-title">小区名字：</text>
			<input class="create-row-text" v-model="subForm.aheName" type="text" placeholder="请输入小区名字" />
		</view>
		<view class="create-row" @tap="isData=true">
			<text class="create-row-title">小区位置：</text>
			<!-- <input type="text" v-model="subForm.districtId" class="create-row-text" value="" placeholder="请输入所在省市区"/> -->
			<!-- <text class="create-row-text">{{subForm.districtId?subForm.districtId:'请选择所在省市区'}}</text> -->
			<input type="text" v-model="subForm.address" class="create-row-text" value="" placeholder="请输入小区位置" />
		</view>
		<view class="create-row">
			<text class="create-row-title">所属街道：</text>

			<input type="text" v-model="subForm.street" class="create-row-text" value="" placeholder="请输入所属街道" />

			<!-- <text class="create-row-text">请选择所属街道办</text> -->
		</view>
		<view class="create-row">
			<text class="create-row-title">所属社区：</text>

			<input type="text" v-model="subForm.community" class="create-row-text" value="" placeholder="请输入所属社区" />
			<!-- <text class="create-row-text">请选择所属居委会</text> -->
		</view>

		<view class="create-row">
			<text class="create-row-title">小区总面积：</text>
			<input v-model="subForm.area" class="create-row-text" type="digit" placeholder="请输入" />
			<text class="create-row-unit">平方米</text>
		</view>
		<view class="create-row">
			<text class="create-row-title">小区总用户：</text>
			<input v-model="subForm.userCount" class="create-row-text" type="number" placeholder="请输入" />
			<text class="create-row-unit">户</text>
		</view>

		<view class="create-head">
			<text class="create-head-title">添加业委会人员：</text>
			<view class="create-head-itemBox">
				<!-- 	<view class="create-head-item" v-for="(item,toeny) in occupationData" :key="toeny" @click="open()">
					<image :src="item.imgurl" mode=""></image>
					<view class="create-head-item-occupation" v-if="item.occupation">{{item.occupation}}</view>
					
				</view> -->
				<view class="house-cover-main">
					<view class="house-cover-view" v-for="(item, index) in  imgArr" :key="index">
						<view style="margin: 0 32upx;">
							<image @click="openImg(item,index),isIndexOpen=true" class="house-cover" :src="imgUrl+item.path" mode="aspectFill"></image>
							<view style="display: flex;justify-content: center;" class="img_tag">{{item.post}}</view>
						</view>
						
						<u-icon class="delete" @click="toDelete(index)" name="close" color="#EEEEEE" size="20">
						</u-icon>
					</view>
					<image v-if="imgArr.length<9" class="house-cover" src="@/static/images/vvo-yao/add-house.png"
						@click="show=true,imgObj={},occupationObj={},isIndexOpen=false"></image>
				</view>

			</view>
		</view>


		<!-- 弹窗重构 -->
		<u-popup style="border-radius: 12upx;" v-model="show" mode='center'>
			<view style="width:552upx">

				<view class="portrait">
					<!-- 如果没有头像就上传 -->
					<view class="top">
						<image class="house-cover icon" v-if="imgObj.path" :src="imgUrl+imgObj.path" mode="aspectFill"></image>
						<image class="house-cover icon" v-else src="@/static/images/vvo-yao/add-house.png" @click="toUp()">
						</image>
					</view>

					<view class="form">
						<view class="form_item">
							<view class="form_iten_text">姓名</view>
							<input class="text" v-model="occupationObj.name" placeholder="请输入姓名" />
						</view>

						<view class="form_item">
							<view class="form_iten_text">职位</view>
							<input class="text" v-model="occupationObj.post" placeholder="请选择职位" />
						</view>

						<view class="form_item">
							<view class="form_iten_text">电话</view>
							<input class="text" v-model="occupationObj.phone" placeholder="请输入电话" />
						</view>

					</view>

					<view @click="confirm_save" v-if="!isIndexOpen" class="save_btn">保存</view>
					<view class="save_del_btn" v-else>
						<view @click="delItem" class="save_del_btn_item" style="color: #FF5F5F;">删除</view>
						<view class="save_del_btn_item" style="color: #1989FA;" @click="show=false,occupationObj={},imgObj={}">保存</view>
					</view>
				</view>

			</view>
		</u-popup>



		<!-- <u-button type="primary" text="确定" @click="open()"></u-button> -->
		<!-- <u-popup v-model="show" mode="center">
			<view class="popMain">
				<view class="popContent">
					<view class="head-portrait">
						<view class="house-cover-main">
							<view class="hose-cover-view" v-for="(item,idnex) in occupationObj" :key="index">
								<image class="house-cover" :src="imgUrl+item.path" mode="aspectFill"></image>
								<u-icon class="delete" @click="toDelete(index)" name="close" color="#EEEEEE" size="20">
								</u-icon>
							</view>
							<image v-if="imgArr.length<1" class="house-cover" src="@/static/images/vvo-yao/Vector.png"
								@click="toUp()"></image>
						</view>
					
					</view>
					<view class="full-name">
						<view class="name">姓名</view>
						<input class="text" v-model="occupationObj.name" placeholder="请输入姓名" />
					</view>
					<view class="occupation">
						<view class="text1">职位</view>


						<picker class="picker" :range="columns" :value="index" @change="bindChange" range-key="display">
							<view>{{columns[index].display}}</view>
						</picker>

					</view>
					<view class="contact-number">
						<view class="phone">联系电话</view>
						<input class="text" v-model="occupationObj.phone" placeholder="请输入电话" />
					</view>
				</view>
				<view class="footer-btn">
					<view class="save" v-if="" @click="close()">保存</view>
					<view class="btnBox">
						<view class="del">删除</view>
						<view class="preservation" @click="close()">保存</view>
					</view>
				</view>
			</view>
		</u-popup> -->
		<view class="submit-btn" @click="toSubmit(aheId)">
			<text class="submit-text">确认提交</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexItem:'',
				isIndexOpen:false,
				show: false,
				imgObj:{},
				index: 0,
				columns: [],
				Show: false,
				isSelect: 0,
				isData: false,
				members: {},
				isCheck: false,
				defaultArr: ['重庆市', '市辖区', '万州区'],
				occupationObj: {},
				subForm: {
					aheId:'',
				},
				imgArr: [],
				columns: [
					['美国', '日本']
				],
				index: 0,
				occupationData: [{
						imgurl: '../../../static/hexingImg/head.png',
						name: "张三",
						// occupation: '委员长',
						phone: 13223221100
					},
					{
						imgurl: '../../../static/hexingImg/head.png',
						name: '张三',
						// occupation: '副委员长',
						phone: 13223221100
					},
					{
						imgurl: '../../../static/hexingImg/head.png',
						name: '张三',
						phone: 13223221100
					},
					{
						imgurl: '../../../static/hexingImg/head.png',
						name: '张三',
						phone: 13223221100
					},
					{
						imgurl: '../../../static/hexingImg/head.png',
						name: '张三',
						phone: 13223221100
					},

				],
				
			}
		},
		onLoad(option) {
			this.aheId = option.aheId ? option.aheId : ''
			// console.log(option)
			 
			this.getcolumnsData()
		},
		methods: {
			delItem(){
				this.show=false
				this.imgArr.splice(this.indexItem,1)
			},
			openImg(item,index){
				this.show=true
				this.imgObj=item
				this.occupationObj=item
				this.indexItem=index
			},
           confirm_save(){
			  if(this.imgObj.path){
				
				Object.assign(this.imgObj,this.occupationObj)
			   this.occupationObj={}
			   this.imgArr.push(JSON.parse(JSON.stringify(this.imgObj)))
			   
			  for(let key in this.imgObj){
				  this.imgObj[key]=null
			  }
			  // this.$forceupdate()  
			  console.log(this.imgArr,9898)
			  this.show=false
			  }else{
				  uni.showToast({
					  title:'头像不能为空',
					  icon:'error'
				  })
			  }
			 
			  // console.log(this.imgObj)
		   },
			getcolumnsData() {
				this.$api.to_http('/common/getKeys', {
					keyName: '业委会成员职位'
				}, 'post', '', false).then(res => {
					// console.log(res,1111111111111111111111111)
					this.columns = res.data.data
				})
			},
			bindChange(e) {
				console.log(e)
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},

			open() {
				this.Show = true
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log(111) 
			},
			// 省市区选择
			confirmData(e) {
				this.subForm.districtId = e.province.label + e.city.label + e.area.label;
				this.defaultArr = [e.province.label, e.city.label, e.area.label]
			},
			toSelect(e) {
				this.isSelect = e
				this.subForm.isCcpMember = e
			},
			toCheck() {
				this.isCheck = !this.isCheck
				if (this.isCheck) {
					this.subForm.status = 1
				} else {
					this.subForm.status = 0
				}
			},
			//删除图片
			toDelete(index) {
				this.imgArr.splice(index, 1)
			},
			toUp() {
				// 上传图片
				let num = 9
				uni.chooseImage({
					count: num,
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						tempFilePaths.forEach(ele => {
							uni.uploadFile({
								url: this.baseUrl + '/common/file/upload',
								method: 'POST',
								filePath: ele,
								name: 'file',
								header: {
									"access-token": uni.getStorageSync('token'),
								},
								success: (res) => {
									let JsonData = JSON.parse(res.data)
									console.log(JsonData);
									let url2 = JsonData.data.path;
									let obj = {
										id: JsonData.data.id,
										path: url2
									}
									this.imgObj=obj
									// this.imgArr.push(obj)
								}
							});
						})
					}
				});
			},
			toSubmit(aheId) {
				// console.log(this.imgArr)
				// debugger
				this.subForm.aheId=aheId
				let imgarr = []
				this.imgArr.forEach(item => {
					imgarr.push(item.path)
				})

               let arr= JSON.parse(JSON.stringify(this.imgArr)) 
			   
			   arr.forEach(item=>{
				   item.head=item.path
				   delete item.id
				   delete item.path
				   
			   })
			   // console.log(arr)
				// this.occupationObj.head = imgarr.join(',')
				// this.occupationObj.post = this.columns[this.index].display ? this.columns[this.index].display : ''
				this.$api.to_http('/committee/save', {
					committee: this.subForm,
					members: arr
				}, 'POST', '', false).then((res)=>{
					// debugger
					if(res.data.code==200){
						uni.showToast({
							title:res.data.message,
							icon:'success'
						})
						setTimeout(()=>{
							uni.navigateTo({
								url: '/pages/vvo-yao/industry-council/IndustryCommittee?aheId=' + aheId
							})
						},1000)
					}else{
						uni.showToast({
							title:res.data.message,
							icon:'error'
						})
					}
					
					
				})

				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.save_del_btn{
		display: flex;
		justify-content: space-between;
		padding: 32upx 0;
		border-top: 1px solid #F2F2F2;
		.save_del_btn_item{
			display: flex;
			justify-content: center;
			flex: 1;
			font-family: PingFang SC;
			font-weight: bold;
			font-size: 32upx;
		}
	}
	.img_tag{
		background: #1989FA;
		border-radius: 2px;
		margin-left: 40upx;
		position: absolute;
		top: 150upx;
		width: 200upx;
		// width: 106upx;
	}
	.save_btn {
		border-top: 1px solid #F2F2F2;
		// padding: 32 0upx;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 96upx;
		font-family: PingFang SC;
		font-weight: bold;
		font-size: 32upx;
		color: #1989FA;
	}

	.form {
		padding: 0 64upx;

		.form_item {
			display: flex;
			justify-content: space-between;
			padding: 26upx 0;
			margin-bottom: 24upx;

			.form_iten_text {
				width: 470upx;
				font-family: PingFang SC;
				font-size: 32upx;
				color: #666666;
			}
		}
	}

	.portrait {
		.top {
			padding-top: 60upx;
			display: flex;
			justify-content: center;

			// background: #eee;
			.icon {
				width: 200upx;
				height: 200upx;
				border-radius: 50%;
				// background: #eee;
				margin-bottom: 60upx;
			}
		}
	}

	/deep/.u-mode-center-box {
		border-radius: 12upx;
	}

	.container {
		display: flex;
		flex-direction: column;
		background-color: #F9F9F9;

		.create-row {
			padding: 0 32rpx;
			height: 96rpx;
			border-bottom: 2rpx solid #F2F2F2;
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: #FFFFFF;

			.create-row-title {
				font-size: 32rpx;
				line-height: 44rpx;
				color: #222222;
				width: 232rpx;
			}

			.create-row-text {
				font-size: 28rpx;
				line-height: 40rpx;
				color: #222222;
				flex: 1;
			}

			.right {
				width: 10.5rpx;
				height: 21rpx;
			}

			.create-row-unit {
				font-size: 28rpx;
				line-height: 40rpx;
				color: #222222;
			}

			.select-row {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-right: 83rpx;

				.select-text {
					font-size: 28rpx;
					line-height: 40rpx;
					color: #222222;
				}
			}

			.select-icon {
				width: 36rpx;
				height: 36rpx;
				margin-left: 20rpx;
			}
		}

		.create-head {
			margin: 32rpx 32rpx;
			min-height: 460rpx;

			.create-head-itemBox {
				display: flex;
				flex-direction: row;
				// justify-content: space-around;
				flex-wrap: wrap;
				min-width: 390rpx;
				min-height: 300rpx;
				box-sizing: border-box;

				.create-head-item {
					position: relative;
					margin-top: 32rpx;
					margin-left: 20rpx;

					image {
						width: 148rpx;
						height: 148rpx;
						border-radius: 50%;
					}

					.create-head-item-occupation {
						position: absolute;
						bottom: -20rpx;
						width: 148rpx;
						height: 56rpx;
						background-color: #1989FA;
						text-align: center;
						line-height: 56rpx;
						color: #fff;
					}
				}

				.house-cover-main {
					margin-top: 16rpx;
					margin-left: -52rpx;
					// overflow: hidden;
					display: flex;
					flex-direction: row;
					align-items: center;
					flex-wrap: wrap;

				}

				.house-cover-view {
					margin-right: -20rpx;
					position: relative
				}

				.delete {
					position: absolute;
					top: -10rpx;
					right: -10rpx;
					// z-index: 999;
					width: 28rpx;
					height: 28rpx;
					background: rgba($color: #000000, $alpha: 0.5);
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.house-cover {
					width: 180rpx;
					height: 180rpx;
					margin-bottom: 20rpx;
					margin-left: 52rpx;
					border-radius: 50%;
				}
			}
		}

		.submit-btn {
			background: #1989FA;
			border-radius: 4rpx;
			margin: 34rpx 32rpx;
			height: 88rpx;
			line-height: 88rpx;
			text-align: center;

			.submit-text {
				color: #FFFFFF;
			}
		}

		.popMain {
			width: 552rpx;
			height: 700rpx;
			background-color: #fff;

			.head-portrait {
				margin: 60rpx 176rpx;
				position: relative;
				width: 200rpx;
				height: 200rpx;
				background-color: #EEEEEE;
				text-align: center;
				border-radius: 50%;
				box-sizing: border-box;

				.house-cover-main {
					margin-top: 16rpx;
					margin-left: -52rpx;
					// overflow: hidden;
					display: flex;
					flex-direction: row;
					align-items: center;
					flex-wrap: wrap;

				}

				.house-cover-view {
					margin-right: -20rpx;
					position: relative
				}

				.delete {
					position: absolute;
					top: -10rpx;
					right: -10rpx;
					// z-index: 999;
					width: 28rpx;
					height: 28rpx;
					background: rgba($color: #000000, $alpha: 0.5);
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.house-cover {
					width: 180rpx;
					height: 180rpx;
					margin-bottom: 20rpx;
					margin-left: 52rpx;
					border-radius: 50%;
				}




			}

			.full-name {

				margin: 0 32rpx;
				display: flex;
				align-items: center;
				width: 488rpx;
				height: 84rpx;
				background-color: #F9F9F9;

				.name {
					margin-left: 32rpx;
					flex: 1;
				}

				input {
					flex: 1;
					font-weight: bold;
					color: #333333;
				}
			}

			.occupation {
				margin: 24rpx 32rpx;
				display: flex;
				align-items: center;
				width: 488rpx;
				height: 84rpx;
				background-color: #F9F9F9;

				.text1 {
					margin-left: 32rpx;
					flex: 1;
				}

				.picker {
					z-index: 99999;
					flex: 1;
				}
			}

			.contact-number {
				margin: 0 32rpx;
				display: flex;
				align-items: center;
				width: 488rpx;
				height: 84rpx;
				background-color: #F9F9F9;

				.phone {
					margin-left: 32rpx;
					flex: 1;
				}

				.text {
					flex: 1;
				}
			}

			.footer-btn {
				margin-top: 32rpx;
				width: 100%;
				height: 96rpx;
				border-top: 2rpx solid #F2F2F2;

				.save {
					height: 96rpx;
					text-align: center;
					line-height: 96rpx;
					font-weight: bold;
					color: #1989FA;
				}

				.btnBox {
					display: flex;
					height: 96rpx;
					// align-items: center;
					justify-content: space-between;

					.del {
						margin: 0 104rpx;
						height: 96rpx;
						line-height: 96rpx;
						color: #FF5F5F;
						font-weight: bold;
						border-right: 2rpx solid #F2F2F2;
						flex: 1;
					}

					.preservation {
						flex: 1;
						height: 96rpx;
						line-height: 96rpx;
						font-weight: bold;
						color: #1989FA;
					}
				}
			}
		}



	}
</style>
