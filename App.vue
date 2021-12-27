<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
		/*每个页面公共css */
	@import "main.css";
	// *{
	// 	box-sizing: border-box;
	// 	margin: 0;
	// 	padding: 0;
	// }
	/deep/.uni-body{
		background-color: #F9F9F9 !important;
	}
</style>
