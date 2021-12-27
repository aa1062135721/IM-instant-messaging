import Vue from 'vue'

export default {
	install: Vue => {
		/**
		 * 路由跳转
		 * @return void
		 * */
		Vue.prototype.$navigate = ({url, events, animationType, animationDuration, success, fail, compile}) => {
			if (success === void 0) { success = null }
			if (fail === void 0) { fail = null }
			if (compile === void 0) { compile = null }
			uni.navigateTo({
				url,
				events,
				animationType: animationType || 'pop-in',
				animationDuration: animationDuration || 300,
				success: res => success && success(res),
				fail: err => fail && fail(err),
				compile: res => compile && compile(res)
			})	
		},
		
		Vue.prototype.goBack = (delta) => {
			uni.navigateBack({delta: delta || 1})
		}
	}
}