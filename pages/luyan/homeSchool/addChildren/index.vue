<template>
	<view class="content">
		<u-navbar back-text="" title="新增小孩信息">
			<view class="navbar-right" slot="right" v-if="slotRight">
				<view class="nav_right" @tap="submit">保存</view>
			</view>
		</u-navbar>
		<view class="main">
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>姓名</text>
						<text class="star">*</text>
					</view>
					<u-input v-model="userInfo.name" placeholder="请输入姓名" />
				</view>
			</view>
			<view class="item" @tap="isData = true">
				<view class="left">
					<view class="laber">
						<text>出生年月</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">{{userInfo.date || '请选择出生年月'}}</view>
				</view>
				<view class="right">
					<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="item" @tap="isSex = true">
				<view class="left">
					<view class="laber">
						<text>性别</text>
						<text class="star">*</text>
					</view>
					<view class="labVal">{{userInfo.sex || '请选择性别'}}</view>
				</view>
				<view class="right">
					<image src="../../../../static/luyan/images/icon_right.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>家长称谓</text>
						<text class="star">*</text>
					</view>
					<u-input v-model="userInfo.parent_name" placeholder="请输入" />
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>手机号</text>
						<text class="star">*</text>
					</view>
					<u-input v-model="userInfo.phone" placeholder="请输入手机号码" />
				</view>
				<view class="mailList">通讯录</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>所在学校</text>
						<text class="star">*</text>
					</view>
					<u-input v-model="userInfo.school_name" placeholder="请输入所在学校" />
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>所在年级</text>
						<text class="star">*</text>
					</view>
					<u-input v-model="userInfo.grade_name" placeholder="请输入所在年级" />
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="laber">
						<text>所在班级</text>
						<text class="star">*</text>
					</view>
					<u-input v-model="userInfo.class_name" placeholder="请输入所在班级" />
				</view>
			</view>
			<view class="item">
				<view class="itemLeft">
					<image src="../../../../static/luyan/images/icon_user.png" mode="aspectFit"></image>
					<view class="laber">
						<text>所在学校小孩人脸信息录入</text>
						<text class="star">*</text>
					</view>
				</view>
				<view class="itemight">未录入</view>
			</view>
			<view class="remarks">
				<view class="title">备注</view>
				<textarea class="textarea" placeholder="请输入备注.." />
			</view>
		</view>
		<u-picker v-model="isData" @confirm="confirmData"></u-picker>
		<u-picker mode='selector' v-model="isSex" @confirm="confirm" :range="sexType"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				slotRight: true,
				isData: false,
				isSex: false,
				sexType: [
					'男',
					'女'
				],
				userInfo: {
					name: '',
					date: '',
					sex: '',
					parent_name: '',
					school_name: '',
					grade_name: '',
					class_name: '',
				},
				rules: {
					'name': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.date': {
						type: 'string',
						required: true,
						message: '请填写出生年月',
						trigger: ['blur', 'change']
					},
					'userInfo.sex': {
						type: 'string',
						required: true,
						message: '请填写性别',
						trigger: ['blur', 'change']
					}
				}
			};
		},
		methods: {
			// 性别选择
			confirm(e) {
				this.userInfo.sex = this.sexType[e[0]]
			},
			// 年月日选择
			confirmData(e) {
				this.userInfo.date = e.year + '-' + e.month + '-' + e.day;
			},
			// 保存
			submit() {
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;

		.navbar-right {
			height: 44upx;
			margin-right: 24upx;
			box-sizing: border-box;

			.nav_right {
				font-family: 'PingFang SC';
				font-size: 32upx;
				text-align: right;
				color: #1989FA;
			}
		}

		.main{
			width: 100%;
			.item{
				width: 100%;
				padding: 34upx 32upx;
				border-bottom: 1upx solid #F2F2F2;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					display: flex;
					align-items: center;
					.laber{
						width: 150upx;
						margin-right: 20upx;
						font-family: 'PingFang SC';
						font-size: 32upx;
						color: #222222;
						.star{
							color: #d40000;
						}
					}
					.labVal{
						width: 300upx;
						font-family: 'PingFang SC';
						font-size: 32upx;
						color: #666666;
		
					}
				}
				.right{
					width: 14upx;
					height: 24upx;
					image{
						width: 14upx;
						height: 24upx;
					}
				}
				.mailList{
					padding-left: 50upx;
					border-left: 1upx solid #E0E0E0;
					box-sizing: border-box;
					font-family: 'PingFang SC';
					font-weight: 500;
					font-size: 32upx;
					line-height: 44upx;
					color: #1989FA;
				}
				.itemLeft{
					display: flex;
					align-items: center;
					image{
						width: 40upx;
						height: 40upx;
						margin-right: 12upx;
					}
					.laber{
						margin-right: 20upx;
						font-family: 'PingFang SC';
						font-size: 32upx;
						color: #222222;
						.star{
							color: #d40000;
						}
					}
				}
				.itemight{
					font-family: 'PingFang SC';
					font-weight: 500;
					font-size: 28upx;
					color: #999999;
				}
			}
			.remarks{
				width: 100%;
				padding: 0 32upx 30upx;
				margin-top: 24upx;
				box-sizing: border-box;
				.title{
					font-family: 'PingFang SC';
					font-weight: bold;
					font-size: 32upx;
					color: #222222;
				}
				.textarea{
					width: 100%;
					height: 330upx;
					margin-top: 16upx;
					background: #F9F9F9;
					border-radius: 4upx;
					padding: 24upx;
					box-sizing: border-box;
				}
			}
		}

	}
</style>
