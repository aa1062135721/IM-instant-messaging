<template>
	<view class="content">
		<u-navbar title="邀请亲人" :border="true"></u-navbar>
		<view class="top_box">
			<view class="top">
				<view class="left">与孩子关系</view>
				<view class="right" @tap="filiation">
					<view class="">请选择</view>
					<view class="">
						<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="top">
				<u-input placeholder="请输入手机号" />
				<view class="mailList">通讯录</view>
			</view>
		</view>
		<view class="addBtnBox">
			<view class="addBtn">添加</view>
		</view>
		<view class="main">
			<view class="title">亲人列表</view>
			<view class="listBox">
				<view class="listItem" v-for="(item,i) in familyList" :key="i">
					<view class="left">
						<image :src="item.header" mode="aspectFit"></image>
						<view class="">{{item.name}}</view>
					</view>
					<view class="right">
						<image v-if="item.isAttestation" src="../../../../static/luyan/images/icon_vector_active.png" mode="aspectFit"></image>
						<image v-else src="../../../../static/luyan/images/icon_vector_none.png" mode="aspectFit"></image>
						<view :class="{'active':item.isAttestation}">{{item.isAttestation?'已认证':'未认证'}}</view>
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="isModel" mode="bottom">
			<view class="popMain">
				<view class="listBox">
					<view class="listItem" v-for="(item,i) in relationList" :key="i">{{item.name}}</view>
				</view>
				<view class="btn" @tap="isModel=false">取消</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isModel:false,
				familyList:[
					{name:'我',header:'../../../../static/luyan/images/icon_header_list1.png',isAttestation:true},
					{name:'妈妈',header:'../../../../static/luyan/images/icon_header_list2.png',isAttestation:true},
					{name:'爷爷',header:'../../../../static/luyan/images/icon_header_list3.png',isAttestation:false},
					{name:'奶奶',header:'../../../../static/luyan/images/icon_header_list4.png',isAttestation:false},
					{name:'叔叔',header:'../../../../static/luyan/images/icon_header_list5.png',isAttestation:false},
				],
				relationList:[
					{name:'爸爸'},
					{name:'妈妈'},
					{name:'爷爷'},
					{name:'奶奶'},
					{name:'外公'},
					{name:'外婆'},
					{name:'叔叔'},
					{name:'阿姨'}
				]
				
			};
		},
		methods: {
			filiation() {
				console.log(1212)
				this.isModel = true;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		.top_box{
			width: 100%;
			background-color: #FFFFFF;
			.top{
				width: 100%;
				padding: 26upx 32upx;
				border-bottom: 1upx solid #F2F2F2;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					font-family: 'PingFang SC';
					font-size: 32upx;
					color: #222222;
				}
				.right{
					display: flex;
					align-items: center;
					font-family: 'PingFang SC';
					font-size: 32upx;
					color: #999999;
					image{
						width: 14upx;
						height: 24upx;
						margin-left: 24upx;
					}
				}
				.mailList{
					width: 164upx;
					text-align: right;
					border-left: 1upx solid #E0E0E0;
					box-sizing: border-box;
					font-family: 'PingFang SC';
					font-weight: 500;
					font-size: 32upx;
					line-height: 44upx;
					color: #1989FA;
					margin-left: 100upx;
				}
			}
		}
		.addBtnBox{
			width: 100%;
			margin-top: 24upx;
			padding: 0 32upx;
			box-sizing: border-box;
			.addBtn{
				width: 100%;
				height: 96upx;
				background-color: #1989FA;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: 'PingFang SC';
				font-size: 32upx;
				color: #FFFFFF;
			}
		}
		.main{
			width: 100%;
			margin-top: 24upx;
			.title{
				width: 100%;
				padding: 32upx;
				box-sizing: border-box;
				font-family: 'PingFang SC';
				font-size: 32upx;
				color: #222222;
			}
			.listBox{
				width: 100%;
				background-color: #FFFFFF;
				.listItem{
					width: 100%;
					padding: 32upx 48upx 32upx 26upx;
					border-bottom: 1upx solid #F2F2F2;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left{
						display: flex;
						align-items: center;
						font-family: 'PingFang SC';
						font-size: 32upx;
						color: #222222;
						image{
							width: 120upx;
							height: 120upx;
							margin-right: 26upx;
							border-radius: 50%;
						}
					}
					.right{
						display: flex;
						align-items: center;
						font-family: 'PingFang SC';
						font-weight: bold;
						font-size: 24upx;
						color: #999999;
						image{
							width: 28upx;
							height: 28upx;
							margin-right: 12upx;
						}
						.active{
							color: #1989FA;
						}
					}
				}
			}
		}
		.popMain{
			width: 100%;
			padding: 36upx;
			box-sizing: border-box;
			.listBox{
				width: 100%;
				display: flex;
				// justify-content: space-around;
				flex-wrap: wrap;
				.listItem{
					padding: 10upx 35upx;
					border: 4upx solid rgb(189,189,189);
					border-radius: 10upx;
					box-sizing: border-box;
					font-family: PingFang SC;
					font-size: 28upx;
					color: #222222;
					margin-right: 34upx;
					margin-bottom: 64upx;
				}
			}
			.btn{
				width: 100%;
				height: 96upx;
				margin-top: 50upx;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 1upx solid #F2F2F2;
				box-sizing: border-box;
				border-radius: 4upx;
				font-family: 'PingFang SC';
				font-size: 32upx;
				color: #222222;
			}
		}
	}
</style>
