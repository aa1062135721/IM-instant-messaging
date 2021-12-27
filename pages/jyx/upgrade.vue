<template>
	<view class="">
		<app-update ref="app_update" :force="true" :tabbar="false"></app-update>
	</view>
</template>

<script>
	import appUpdate from "@/components/yzhua006-update/app-update.vue"
	export default {
		components: {
			appUpdate
		},
		mounted() {
			this.$refs.app_update.update(); //调用子组件 检查更新
		},
	}
</script>

<style>
</style>
