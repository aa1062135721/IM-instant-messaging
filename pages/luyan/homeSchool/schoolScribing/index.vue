<template>
	<view class="content">
		<u-navbar title="学区划片" :border="true"></u-navbar>
		<view class="main">
			<view class="top">
				<image src="../../../../static/luyan/images/icon_schoolScribing_top.png" mode="aspectFit"></image>
				<view class="tips">学校<text class="num">{{schoolNum}}</text>间</view>
			</view>
			<view class="listBox">
				<view class="search">
					<image src="../../../../static/luyan/images/icon_search.png" mode="aspectFit"></image>
					<u-input v-model="schoolName" confirm-type="search"
							@confirm="searchs()" placeholder="输入学校或小区名称" @clear="clearVal" />
				</view>
				<view class="listMain">
					<view class="listItem" v-for="(item,i) in dataList" :key="i" @tap="goSchoolDetail(item.schoolId)">
						<view class="title">
							<view class="left sheny">{{item.schoolName}}</view>
							<view class="right sheny">{{item.schoolTypeName}}</view>
						</view>
						<view class="text">
							<view class="left sheny">{{item.address}}</view>
							<view class="right sheny">{{item.educationName}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				schoolNum:'',
				schoolName:'',
				educationList:[],
				schoolTypeList:[],
				dataList:[],
				pageNo:1,
				pageSize:15,
				noPage:false,
			};
		},
		onLoad() {
			this.getNum();
			this.getType('办学模式');
			this.getType('学校类别');
			this.getList();
		},
		onReachBottom() {
			if (this.noPage) {
				uni.showToast({
					title: '没有更多了',
					icon: 'none',
					duration: 2000
				});
				return
			}
			uni.showLoading({
				title: '加载更多...',
				mask: true
			});
			this.pageNo++
			this.getList();
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
			goSchoolDetail(i) {
				uni.navigateTo({
					url:'/pages/luyan/homeSchool/schoolDetail/index?id='+i
				})
			},
			// 获取学校统计
			getNum(){
				this.$api.to_http('school/count-all', 'GET','',false).then((res) => {
					res = res.data;
					console.log(res)
					if (res.code != 200) {
						return this.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					this.schoolNum = res.data;
				})
			},
			// 获取学校列表
			getList(){
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				let that = this;
				console.log(that.baseUrl,'1212')
				this.$api.to_http('school/list', {
					keyword:this.schoolName,
					pageNo:this.pageNo,
					pageSize:this.pageSize
				}, 'POST','',false).then((res) => {
					uni.hideLoading();
					res = res.data
					console.log(res)
					if (res.code != 200) {
						return that.$refs.uToast.show({
							title: res.message,
							type: 'error',
						})
					}
					if(res.data.records.length > 0){
						res.data.records.forEach(item => {
							that.educationList.forEach(itemChild=>{
								if(item.educationCode == itemChild.value){
									item.educationName = itemChild.display;
								}
							})
							that.schoolTypeList.forEach(itemChild=>{
								if(item.schoolClassCode == itemChild.value){
									item.schoolTypeName = itemChild.display;
								}
							})
						})
						that.dataList = that.dataList.concat(res.data.records);
					}else{
						uni.showToast({
							title: '没有更多了',
							icon: 'none',
							duration: 2000
						});
						that.noPage = true;
					}
					// that.dataList = res.data.records;
					
					console.log(that.listData)
				})
			},
			//搜索
			searchs(e) {
				this.pageNo = 1;
				this.dataList = [];
				this.getList();
			},
			clearVal(){
				this.pageNo = 1;
				this.dataList = [];
				this.getList();
			},
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		.main{
			width: 100%;
			.top{
				width: 100%;
				padding: 22upx 70upx 34upx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				background-color: #FFFFFF;
				image{
					width: 60upx;
					height: 48upx;
					margin-right: 20upx;
				}
				.tips{
					font-family: 'PingFang SC';
					font-weight: 500;
					font-size: 28upx;
					color: #222222;
					.num{
						font-size: 36upx;
						color: #1989FA;
					}
				}
			}
			.listBox{
				width: 100%;
				padding: 24upx 32upx;
				box-sizing: border-box;
				.search{
					width: 100%;
					height: 80upx;
					padding: 24upx;
					background: #FFFFFF;
					border-radius: 76upx;
					display: flex;
					align-items: center;
					image{
						width: 32upx;
						height: 32upx;
						margin-right: 14upx;
					}
				}
				.listMain{
					width: 100%;
					margin-top: 24upx;
					.listItem{
						width: 100%;
						padding: 38upx 28upx;
						box-sizing: border-box;
						background: #FFFFFF;
						border-radius: 8upx;
						margin-bottom: 24upx;
						.title{
							width: 100%;
							margin-bottom: 40upx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							font-family: 'PingFang SC';
							font-weight: 600;
							.left{
								max-width: 460upx;
								font-size: 36upx;
								color: #666666;
							}
							.right{
								max-width: 160upx;
								font-size: 28upx;
								color: #ED6A0C;
							}
						}
						.text{
							width: 100%;
							display: flex;
							justify-content: space-between;
							align-items: center;
							font-family: 'PingFang SC';
							font-weight: 500;
							font-size: 28upx;
							.left{
								max-width: 460upx;
								color: #999999;
							}
							.right{
								max-width: 160upx;
								color: #1989FA;
							}
						}
					}
				}
			}
		}
	}
</style>
