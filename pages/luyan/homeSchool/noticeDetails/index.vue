<template>
	<view class="content">
		<u-navbar title="通告详情" :border="true"></u-navbar>
		<view class="main">
			<u-parse :html="des"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				des:'<div style="background-color: #ffffff"><h2 style="text-align:center;margin-bottom:20px;">关于国庆节放假通知</h2><p>      一般指重庆市梁平中学。重庆市梁平中 学,建校于1907年,是重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校      一般指重庆市梁平中学。重庆市梁平中 学,建校于1907年,是重庆市重点中学、重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校、重...重庆市文明礼 仪示范学校、重庆市德育示范校、重庆市绿色学校、重...</p></div>'
			};
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		padding: 24upx;
		box-sizing: border-box;
	}
</style>
