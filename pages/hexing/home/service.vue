  <template>
	<view class="service">
		<view class="title">
			<view class="line"></view>
			<view class="txt">
				生活服务
			</view>
		</view>
		<view class="list">
			<view class="item" @click="navigate({url: '/pages/vvo-yao/industry-council/index'})">
				<image src="@/static/hexingImg/ywh.png" mode=""></image>
				<view class="">
					业委会
				</view>
			</view>
			<view class="item" @click="navigate({url: '/pages/hexing/home/transit'})">
				<image src="@/static/hexingImg/gjdd.png" mode=""></image>
				<view class="">
					公交到达
				</view>
			</view>
			<view class="item" @click="navigate({url: '/pages/vvo-yao/product-release/release-goods'})">
				<image src="@/static/hexingImg/cpfb.png" mode=""></image>
				<view class="">
					产品发布
				</view>
			</view>
			<view class="item" @click="navigate({url: '/pages/luyan/homeSchool/homeSchool/index'})">
				<image src="@/static/hexingImg/jxgt.png" mode=""></image>
				<view class="">
					家校沟通
				</view>
			</view>
			<view class="item" @click="navigate({url: '/pages/vvo-yao/house-manage/index'})">
				<image src="@/static/hexingImg/fwzs.png" mode=""></image>
				<view class="">
					房屋租售
				</view>
			</view>
			<view class="item" @click="navigate({url: '/pages/vvo-yao/voting/list'})">
				<image src="@/static/hexingImg/tpxj.png" mode=""></image>
				<view class="">
					投票选举
				</view>
			</view>
			<view class="item">
				<image src="@/static/hexingImg/shjf.png" mode=""></image>
				<view class="">
					生活缴费
				</view>
			</view>
			<view class="item" @click="navigate({url: '/pages/luyan/onlineRepair/onlineRepair/index'})">
				<image src="@/static/hexingImg/zxbx.png" mode=""></image>
				<view class="">
					在线报修
				</view>
			</view>
			<view class="item">
				<image src="@/static/hexingImg/sgcz.png" mode=""></image>
				<view class="">
					水果采摘
				</view>
			</view>
			<view class="item"  @click="navigate({url: '/pages/jyx/company'})">
				<image src="@/static/hexingImg/qycx.png" mode=""></image>
				<view class="">
					企业查询
				</view>
			</view>
			<view class="item">
				<image src="@/static/hexingImg/zbfw.png" mode=""></image>
				<view class="">
					周边服务
				</view>
			</view>
			<view class="item">
				<image src="@/static/hexingImg/gd.png" mode=""></image>
				<view class="">
					敬请期待
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
		},
		methods: {
			navigate(params) {
				uni.navigateTo({
					...params
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #fff;
	}
	.title{
		margin-top: 32rpx;
		display: flex;
		align-items: center;
		padding: 0 32rpx;
		margin-bottom: 48rpx;
		.line{
			width: 8rpx;
			height: 24rpx;
			background-color: #1989FA;
			border-radius: 42rpx;
			margin-right: 12rpx;
		}
		.txt{
			font-size: 36rpx;
			line-height: 36rpx;
			color: #222222;
		}
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		.item{
			width: 186rpx;
			text-align: center;
			margin-bottom: 80rpx;
			image{
				width: 96rpx;
				height: 96rpx;
				margin-bottom: 20rpx;
			}
			view{
				font-size: 28rpx;
				color: #222222;
			}
		}
	}
</style>
