<template>
	<view class="container">
		<view class="detail-card">
			<view class="detail-top-row">
				<text class="detail-title">{{info.voteName}}</text>
				<text class="detail-time">{{info.voteEndDate}}</text>
			</view>
			
			<text class="content">{{info.voteContent}}</text>
			
			<view class="imgBox">
				<view class="voting-cover-view" v-for="(item, index) in info.votePictures" :key="index">
					<image :src="imgUrl+item" mode="aspectFill"></image>
				</view>
			</view>
			
		</view>
		
		<view style="height: 16rpx;"></view>
		<!-- 如果单选 -->
		<template v-if="info.multipleChoice==0&&info.voteStatus==2">
			<view class="detail-cell" @click="toCheck(index1,item1.voteOptionId)" :class="{active:isCheck==index1}" v-for="(item1, index1) in info.options" :key="index1">
				<text class="detail-cell-text" :class="{active:isCheck==index1}">{{item1.voteOptionName}}</text>
				<text class="detail-cell-text" :class="{active:isCheck==index1}">{{item1.count}}人</text>
			</view>
		</template>
		<!-- 如果多选 -->
		<template v-if="info.multipleChoice==1&&info.voteStatus==2">
			<view class="detail-cell" @click="toChange(index1)" :class="{active:item1.isCheck}" v-for="(item1, index1) in info.options" :key="index1">
				<text class="detail-cell-text" :class="{active:item1.isCheck}">{{item1.voteOptionName}}</text>
				<text class="detail-cell-text" :class="{active:item1.isCheck}">{{item1.count}}人</text>
			</view>
		</template>
		<template v-if="info.voteStatus==1">
			<view class="detail-cell" v-for="(item1, index1) in info.options" :key="index1">
				<text class="detail-cell-text" :class="{active:item1.isCheck}">{{item1.voteOptionName}}</text>
				<text class="detail-cell-text" :class="{active:item1.isCheck}">{{item1.count}}人</text>
			</view>
		</template>
		<template v-if="info.voteStatus==3">
			<view class="detail-cell" v-for="(item1, index1) in info.options" :key="index1">
				<text class="detail-cell-text" :class="{active:item1.isCheck}">{{item1.voteOptionName}}</text>
				<text class="detail-cell-text" :class="{active:item1.isCheck}">{{item1.count}}人</text>
			</view>
		</template>
		<!-- <view class="detail-cell active">
			<text class="detail-cell-text active">方案二</text>
			<text class="detail-cell-text active">66人</text>
		</view>
		
		<view class="detail-cell">
			<text class="detail-cell-text">方案三</text>
			<text class="detail-cell-text">66人</text>
		</view> -->
		
		<view class="bottom-view" v-if="info.voteStatus==2" @click="submit()">
			<text class="bottom-text">立即投票</text>
		</view>
		<view class="bottom-view-yi" v-if="info.voteStatus==1" @click="submit">
			<text class="bottom-text">已投票</text>
		</view>
		<view class="bottom-view-yi" v-if="info.voteStatus==3">
			<text class="bottom-text">已过期</text>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				voteId:'',
				info:'',
				isCheck:0,
				voteOptionIdList:[]
			}
		},
		onLoad(e) {
			this.voteId=e.voteId
			this.getData()
		},
		methods: {
			getResult(){
				let arr = []
				arr=this.info.voteResult.split(',')
				let nameArr=[]
				this.info.options.forEach(ele1=>{
					arr.forEach(ele2=>{
						if(ele1.voteOptionName==ele2){
							ele1.isCheck=true
							
						}
					})
					nameArr.push(ele1)
				})
				this.info.options=nameArr
			},
			toCheck(index){
				this.isCheck=index
			},
			getData(){
				let voteId=this.voteId
				this.$api.to_http('/vote/detail/'+voteId, {
				}, 'GET','',false).then((res) => {
					res = res.data
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.info = res.data
					
					if(this.info.multipleChoice==1){
						let arr=[]
						this.info.options.forEach(ele=>{
							ele.isCheck=false
							arr.push(ele)
						})
						this.info.options=arr
					}
					if(this.info.voteResult){
						this.getResult()
					}
				})
			},
			//多选
			toChange(i){
				let arr=[]
					this.info.options.forEach((ele,index)=>{
						if(index==i){
							ele.isCheck=!ele.isCheck
						}
						arr.push(ele)
					})
				this.info.options=arr
			},
			submit(){
				this.voteOptionIdList=[]
				if(this.info.multipleChoice==0){
					let id = this.info.options[this.isCheck].voteOptionId
					this.voteOptionIdList.push(id)
				}else{
					this.info.options.forEach(ele=>{
						if(ele.isCheck==true){
							this.voteOptionIdList.push(ele.voteOptionId)
						}
					})
					if(this.voteOptionIdList.length==0){
						return this.$refs.uToast.show({
							title: "至少选择一项投票",
							type: 'error',
						})
					}
				}
				
				this.$api.to_http('/vote/choose', {
					voteId:this.voteId,
					voteOptionIdList:this.voteOptionIdList,
					anonymous:this.info.anonymous
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
				})
			}
		}
	}
</script>
<style>
	page {
		height: 100%;
		background: #F9F9F9;
	}
</style>
<style lang="scss" scoped>
	uni-page-body {
		height: 100%;
	}
	.container {
		width: 100%;
		min-height: 100%;
		overflow: scroll;
		background-color: #F9F9F9;
		display: flex;
		flex-direction: column;
		.detail-card {
			margin: 24rpx;
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			.detail-top-row {
				background: #FFFFFF;
				box-shadow: 0px 0px 16rpx rgba(28, 45, 70, 0.04);
				border-radius: 4rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 24rpx;
				.detail-title {
					font-size: 32rpx;
					color: #222222;
				}
				.detail-time {
					font-size: 24rpx;
					color: #999999;
				}
			}
			.content {
				font-size: 28rpx;
				color: #222222;
				padding: 0 50rpx;
			}
			.imgBox{
				display: flex;
				flex-wrap: wrap;
				margin-top: 60rpx;
				padding: 0 20rpx;
				.voting-cover-view {
					margin-right: 10rpx;
					image{
						width: 210rpx;
						height: 164rpx;
						border-radius: 4rpx;
						
					}
				}
			}
			
		}
		
		.detail-cell {
			height: 92rpx;
			margin: 0 32rpx;
			padding: 0 24rpx;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2rpx solid #F2F2F2;
			&.active {
				background-color: rgba(25, 137, 250, 0.1);
			}
			.detail-cell-text {
				font-size: 32rpx;
				color: #222222;
				&.active {
					color: #1989FA;
				}
			}
		}
		
		.bottom-view {
			margin: 100rpx 32rpx 20rpx 32rpx;
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
		.bottom-view-yi {
			margin: 100rpx 32rpx 20rpx 32rpx;
			background: #FFFFFF;
			border-radius: 4rpx;
			height: 96rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.bottom-text {
				font-size: 32rpx;
				color: #222222;
			}
		}
	}
</style>
