<template>
	<view class="">
		<view
			class="u-steps"
			:style="{
				flexDirection: direction
			}"
		>
			<view class="u-steps__item" 
				:class="['u-steps__item--' + direction]" 
				v-for="(item, index) in list" :key="index"
				@tap="clickStep(index)"
			>
				<view
					class="u-steps__item__num"
					v-if="mode == 'number'"
					:style="{
						backgroundColor: current < index ? 'transparent' : activeColor,
						borderColor: current < index ? unActiveColor : activeColor
					}"
				>
					<text v-if="current < index" :style="{
						color: current < index ? unActiveColor : activeColor,
					}">
						{{ index + 1 }}
					</text>
					<u-icon v-else size="22" color="#ffffff" :name="icon"></u-icon>
				</view>
				<view class="u-steps__item__dot" v-if="mode == 'dot'">
					<image v-if="index <= current" src="../../static/luyan/images/icon_onlineRepair_line.png" mode="aspectFit"></image>
					<image v-else src="../../static/luyan/images/icon_vector_active.png" mode="aspectFit"></image>
				</view>
				<view class="u-line-1" :class="['u-steps__item__text--' + direction]">
					
					<view class="">{{ item.time }}</view>
					<view class="" v-if="item.repair_name">报修人：{{ item.repair_name }}</view>
					<view class="" v-if="item.handle_name">处理人：{{ item.handle_name }}</view>
					<view class="">状   态：
						<text class="" style="color: #D40000;" v-if="item.status == 1">未处理 </text>
						<text class="" style="color: #2DA641;" v-if="item.status == 2">待处理</text>
						<text class="" style="color: #1989FA;" v-if="item.status == 3">已完成</text>
					</view>
					<view class="" v-if="item.text && item.status == 3">处理内容：{{ item.text }}</view>
					<view class="" v-if="item.imgPath && item.status == 3">
						<text>现场照片：</text>
						<view class="imgBox">
							<image v-for="itemChild in item.imgPath" :src="itemChild" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="u-steps__item__line" :class="['u-steps__item__line--' + mode]" v-if="index < list.length - 1">
					<u-line :direction="direction" length="100%" :hair-line="false" :color="unActiveColor"></u-line>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
/**
 * steps 步骤条
 * @description 该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。
 * @tutorial https://www.uviewui.com/components/steps.html
 * @property {String} mode 设置模式（默认dot）
 * @property {Array} list 数轴条数据，数组。具体见上方示例
 * @property {String} type type主题（默认primary）
 * @property {String} direction row-横向，column-竖向（默认row）
 * @property {Number String} current 设置当前处于第几步
 * @property {String} active-color 已完成步骤的激活颜色，如设置，type值会失效
 * @property {String} un-active-color 未激活的颜色，用于表示未完成步骤的颜色（默认#606266）
 * @event {Function} change 点击触发事件
 * @example <u-steps :list="numList" active-color="#fa3534"></u-steps>
 */
export default {
	name: 'u-steps',
	props: {
		// 步骤条的类型，dot|number
		mode: {
			type: String,
			default: 'dot'
		},
		// 步骤条的数据
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		// 主题类型, primary|success|info|warning|error
		type: {
			type: String,
			default: 'primary'
		},
		// 当前哪一步是激活的
		current: {
			type: [Number, String],
			default: 0
		},
		// 激活步骤的颜色
		activeColor: {
			type: String,
			default: '#2979ff'
		},
		// 未激活的颜色
		unActiveColor: {
			type: String,
			default: '#1989FA'
		},
		// 自定义图标
		icon: {
			type: String,
			default: 'checkmark'
		},
		// step的排列方向，row-横向，column-竖向
		direction: {
			type: String,
			default: 'row'
		}
	},
	data() {
		return {};
	},
	methods: {
		// 点击某一个步骤
		clickStep(index) {
			// 发送事件给父组件
			this.$emit('change', index);
		},
	},
};
</script>

<style lang="scss" scoped>
// 定义混入指令，用于在非nvue环境下的flex定义，因为nvue没有display属性，会报错
@mixin vue-flex($direction: row) {
	/* #ifndef APP-NVUE */
	display: flex;
	flex-direction: $direction;
	/* #endif */
}
$u-steps-item-number-width: 44rpx;
$u-steps-item-dot-width: 20rpx;

.u-steps {
	@include vue-flex;
	
	.u-steps__item {
		flex: 1;
		// text-align: center;
		position: relative;
		min-width: 100rpx;
		font-size: 26rpx;
		color: #8799a3;
		@include vue-flex;
		justify-content: center;
		flex-direction: column;
		// align-items: center;
		
		&--row {
			@include vue-flex;
			flex-direction: column;
			
			.u-steps__item__line {
				position: absolute;
				z-index: 0;
				left: 75%;
				width: 50%;
				
				&--dot {
					top: calc(#{$u-steps-item-dot-width} / 2);
				}
				
				&--number {
					top: calc(#{$u-steps-item-number-width} / 2);
				}
			}
		}
		
		&--column {
			@include vue-flex;
			flex-direction: row;
			justify-content: flex-start;
			min-height: 120rpx;
			
			.u-steps__item__line {
				position: absolute;
				z-index: 0;
				height: 90%;
				top: 28rpx;
				// top: 75%;
				
				&--dot {
					left: 14rpx;
					// left: calc(#{$u-steps-item-dot-width} / 2);
				}
				
				&--number {
					left: calc(#{$u-steps-item-number-width} / 2);
				}
			}
		}
		
		&__num {
			@include vue-flex;
			align-items: center;
			justify-content: center;
			width: $u-steps-item-number-width;
			height: $u-steps-item-number-width;
			border: 1px solid #8799a3;
			border-radius: 50%;
			overflow: hidden;
		}
		
		&__dot {
			// width: $u-steps-item-dot-width;
			// height: $u-steps-item-dot-width;
			width: 28rpx;
			height: 28rpx;
			@include vue-flex;
			border-radius: 50%;
			image{
				width: 28rpx;
				height: 28rpx;
			}
		}
		
		&__text--row {
			margin-top: 14rpx;
		}
		
		&__text--column {
			margin-left: 14rpx;
			padding: 0 34rpx 40rpx;
			box-sizing: border-box;
			font-family: 'PingFang SC';
			font-weight: 500;
			font-size: 28rpx;
			line-height: 40rpx;
			color: #222222;
			view{
				display: flex;
				margin: 10rpx 0;
				
			}
			.imgBox{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				image{
					width: 200rpx;
					height: 180rpx;
					margin: 0 10rpx 10rpx 0;
				}
			}
		}
	}
}
</style>
