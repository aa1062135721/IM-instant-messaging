<template>
	<view class="container">
		<input class="voting-title" v-model="voteName" type="text" placeholder="投票标题" />
		
		<textarea class="voting-desc" v-model="voteContent" placeholder="请输入描述"></textarea>
		
		<view class="imgBox">
			<view class="voting-img" v-for="(item, img) in votePictures" :key="img">
				<image :src="imgUrl+item" mode="aspectFill"></image>
				<u-icon class="delete" @click="toDelete(img)" name="close" color="#ffffff" size="20"></u-icon>
			</view>
			<image v-if="votePictures.length<9" class="add-voting" src="@/static/images/vvo-yao/add-voting.png" @click="toUp()"></image>
		</view>
		
		
		<view class="voting-row" v-for="(el, index) in voteOptions1" :key="index">
			<image class="reduce" src="@/static/images/vvo-yao/reduce.png" @click="deleteCard(index)"></image>
			<view class="voting-row border-bottom">
				<view class="bg"></view>
				<input type="text" v-model="el.val" placeholder="输入选项"/>
			</view>
		</view>
		<!-- <view class="voting-row">
			<image class="reduce" src="@/static/images/vvo-yao/reduce.png"></image>
			<view class="voting-row border-bottom">
				<view class="bg"></view>
				<input type="text" placeholder="输入选项" />
			</view>
		</view> -->
		
		<view class="voting-row top20" style="margin-bottom: 30rpx;" @click="addCard()">
			<image class="reduce" src="@/static/images/vvo-yao/add.png"></image>
			<text class="add-text">添加选项</text>
		</view>
		
		<view style="width: 750rpx; height: 16rpx; background-color: #F9F9F9;"></view>
		
		<view class="voting-cell">
			<text class="voting-cell-text">可多选</text>
			<switch class="voting-cell-switch" @change="change"></switch>
		</view>
		
		<view class="voting-cell">
			<text class="voting-cell-text">允许匿名</text>
			<switch class="voting-cell-switch" @change="changeAnonymous"></switch>
		</view>
		
		<view class="voting-cell" @click="show=true">
			<text class="voting-cell-text">截止时间</text>
			<input type="text" v-model="voteEndDate" class="voting-cell-input" value="" placeholder="请选择"/>
		</view>
		
		<view class="bottom-view" @click="submit">
			<text class="bottom-text">发起投票</text>
		</view>
		<u-picker mode="time" v-model="show" :params="params" @confirm="confirm" start-year="2021"></u-picker>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				voteOptions1:[{
					val:''
				}],
				votePictures:[],
				voteName:'',
				voteContent:'',
				isChange:false,
				isMultipleChoice:0,
				isCheck:false,
				isAnonymous:0,
				voteEndDate:'',
				show:false,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				},
			}
		},
		onLoad() {
	
		},
		onReady() {
			
		},
		methods: {
			confirm(e){
				let tim_str = e.year+'-'+e.month+'-'+e.day+' '+ e.hour +':' + e.minute + ':'+ e.second
				this.voteEndDate = tim_str
			},
			addCard(){
				this.voteOptions1.push({
					val:''
				})
			},
			deleteCard(i) {
				i && this.voteOptions1.splice(i, 1)
			},
			toUp(){
				// 上传图片
				let num = 9
				uni.chooseImage({
					count:num,
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						tempFilePaths.forEach(ele=>{
							uni.uploadFile({
								url: this.baseUrl+'/common/file/upload', 
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
									this.votePictures.push(url2)
							    }
							});
						})
						
				       
				    }
				});
			},
			//删除图片
			toDelete(img) {
				this.votePictures.splice(img, 1)
			},
			change(){
				this.isChange=!this.isChange
				if(this.isChange){
					this.isMultipleChoice=1
				}else{
					this.isMultipleChoice=0
				}
			},
			changeAnonymous(){
				this.isCheck=!this.isCheck
				if(this.isCheck){
					this.isAnonymous=1
				}else{
					this.isAnonymous=0
				}
			},
			submit(){
				if(!this.voteName){
					return this.$refs.uToast.show({
						title: "请输入投票标题",
						type: 'error',
					})
				}
				if(!this.voteContent){
					return this.$refs.uToast.show({
						title: "请输入投票内容",
						type: 'error',
					})
				}
				if(this.voteOptions1.length<2){
					return this.$refs.uToast.show({
						title: "投票选项至少填两项",
						type: 'error',
					})
				}
				if(this.votePictures.length==0){
					return this.$refs.uToast.show({
						title: "请添加图片",
						type: 'error',
					})
				}
				if(!this.voteEndDate){
					return this.$refs.uToast.show({
						title: "请标注投票截止日期",
						type: 'error',
					})
				}
				let arr=[]
				this.voteOptions1.forEach(ele=>{
					arr.push(ele.val)
				})
				this.$api.to_http('/vote/submit', {
					voteName:this.voteName,
					voteContent:this.voteContent,
					voteOptions:arr,
					votePictures:this.votePictures,
					isMultipleChoice:this.isMultipleChoice,
					isAnonymous:this.isAnonymous,
					voteEndDate:this.voteEndDate
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
						uni.navigateBack({
						    delta: 1
						});
					}, 800)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 32rpx 0;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		.voting-title {
			background: #F9F9F9;
			border-radius: 4rpx;
			height: 100rpx;
			padding: 0 24rpx;
			font-size: 28rpx;
			color: #333333;
			margin: 0 32rpx;
		}
		.voting-desc {
			padding: 24rpx;
			background: #F9F9F9;
			border-radius: 4rpx;
			font-size: 28rpx;
			color: #333333;
			margin: 24rpx 32rpx 0 32rpx;
		}
		.imgBox{
			display: flex;
			flex-wrap: wrap;
			margin: 32rpx 32rpx 16rpx 32rpx;
			.voting-img{
				position: relative;
				image{
					width: 178rpx;
					height: 160rpx;
					margin-right: 15rpx;
				}
				.delete{
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
		.add-voting {
			width: 178rpx;
			height: 160rpx;
			// margin: 32rpx 32rpx 16rpx 32rpx;
		}
		.voting-row {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: 0 32rpx;
			.reduce {
				width: 32rpx;
				height: 32rpx;
			}
			
			.bg {
				width: 100rpx;
				height: 100rpx;
				background-color: #C4C4C4;
				border-radius: 4rpx;
				margin-left: 16rpx;
				margin-right: 32rpx;
			}
			
			.add-text {
				margin-left: 17rpx;
				font-size: 28rpx;
				color: #1989FA;
			}
			
			&.top20 {
				margin-top: 20rpx;
			}
		}
		.border-bottom {
			border-bottom: 2rpx solid #F2F2F2;
			padding-bottom: 24rpx;
			padding-top: 32rpx;
		}
		
		.voting-cell {
			padding: 0rpx 32rpx;
			height: 96rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2rpx solid #F2F2F2;
			.voting-cell-text {
				font-size: 32rpx;
				color: #222222;
			}
			.voting-cell-input{
				font-size: 32rpx;
				color: #222222;
				text-align: right;
			}
			.voting-cell-switch {
				transform: scale(0.8)
			}
			.voting-cell-time {
				font-size: 32px;
				color: #222222;
			}
		}
		
		.bottom-view {
			margin: 32rpx 32rpx 20rpx 32rpx;
			background: #1989FA;
			border-radius: 4rpx;
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.bottom-text {
				font-size: 32rpx;
				color: #FFFFFF;
			}
		}
	}
</style>
