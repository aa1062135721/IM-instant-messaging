<template>
	<view class="steps">
		<!-- <view class="step" v-for="it in 2"> -->
		<view class="step" v-for="(it, i) in list" :key="i">
			<!-- 左侧 -->
			<view class="step_left">{{ it.name }}</view>
			<!-- 中部 -->
			<view class="">
				<view class="" v-for="(item,i1) in it.child" :key="i1">
					<view class="flex">
						<view class="step_mid">
							<view class="step_dot" :style="{ backgroundColor: activeColor }">{{ stepType === 'number' ? i + 1 : '' }}</view>
							<template>
								<view class="step_line" :style="{ backgroundColor: '#EDF6FF' }"></view>
							</template>
						</view>
						<!-- 右侧 -->
						<view class="">
							<view class="step_right" v-for="itemChild in item.child">
								<view class="step_name">{{itemChild.title}}</view>
								<view class="step_idea">{{itemChild.text}}</view>
							</view>
						</view>
					</view>
					<view class="step_tips" v-if="i == 0 && i1 == 0">课间操</view>
					<view class="step_tips" v-if="i == 0 && i1 == 1">午餐/午休</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 步骤条格式 数字或者为点
		stepType: {
			type: String,
			default: 'dot'
		},
		// 激活颜色
		activeColor: {
			type: String,
			default: '#1989FA'
		},
		// 数据列表
		list: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.steps {
	.step {
		display: flex;
		.step_left {
			width: 140rpx;
			margin-top: -14rpx;
			text-align: right;
			font-family: 'PingFang SC';
			font-weight: bold;
			font-size: 32rpx;
			color: #1989FA;
		}
		.step_mid {
			width: 50rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			margin: 0 25rpx;
			.step_dot {
				width: 20rpx;
				height: 20rpx;
				background: #1989FA;
				// border: 5rpx solid #f5f5f5;
				border-radius: 50%;
				color: #ffffff;
				font-size: 28rpx;
				text-align: center;
				line-height: 40rpx;
			}
			.active_dot {
				background: #1989FA;
				border: 5rpx solid #e3ebff;
			}
			.step_line {
				width: 4rpx;
				height: 90%;
				background-color: #eeeeee;
			}
			.active_line {
				background: #1989FA;
			}
		}
		.step_right {
			width: 430rpx;
			height: fit-content;
			// padding: 25rpx 30rpx;
			margin-top: -14rpx;
			margin-bottom: 32upx;
			// background-color: #f8f8f8;
			border-radius: 10rpx;
			display: flex;
			flex-wrap: wrap;
			align-content: center;

			view {
				width: 100%;
			}
			.step_name {
				margin-bottom: 10rpx;
				font-family: 'PingFang SC';
				font-size: 36rpx;
				color: #222222;
			}
			.step_idea {
				color: #999999;
				font-family: 'PingFang SC';
				font-weight: 500;
				font-size: 32rpx;
				color: #666666;
			}
		}
		.step_tips{
			width: 100%;
			padding: 32rpx 0;
			box-sizing: border-box;
			text-align: center;
			font-family: 'PingFang SC';
			font-weight: 500;
			font-size: 28rpx;
			color: #999999;
		}
	}
}
</style>
