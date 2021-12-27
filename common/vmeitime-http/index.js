import http from './interface'
import httpConfig from './http_config.js'

http.config.baseUrl = httpConfig.http_config.apiBaseUrl

/**
 * 需要登录的请求方法
 */
export const to_http = (url, data, method='GET',loadMsg='加载中',load_show=true) => {
	if(load_show){
		uni.showLoading({
			title:loadMsg
		})
	}
	// data.longitude = uni.getStorageSync('longitude');
	// data.latitude = uni.getStorageSync('latitude');
	// 获取token
	let token = uni.getStorageSync('token')
	http.interceptor.request = (config) => {
		config.header["access-token"]=token;
		// if(contentType!=""){
		// 	console.log(contentType);
		// 	config.header["Content-Type"]=contentType;//赋值
		// }else{
		// 	config.header["Content-Type"]="application/json;charset=UTF-8";//赋值
		// }
		// config.header = {
		// 	"access-token":token,		
		// }
		config.method = method
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		uni.hideLoading()
		if(response.data === undefined || response.data.code === undefined){
			uni.showToast({
				title:"网络异常，请检查网络",
				icon:"none"
			})
		}
		//判断返回状态 执行相应操作
		// if(response.statusCode == 401 || response.data.code == 102){
		// 	uni.showToast({
		// 		title:"您已在其他设备登录，请重新登录",
		// 		icon:"none"
		// 	})
		// 	setTimeout(()=>{
		// 		// 重新登录
		// 		uni.reLaunch({
		// 			url:"/pages/login/login"
		// 		})
		// 		return response;
		// 	},800)
		// }
		if(response.statusCode == 404){
			uni.showToast({
				title:"API_NOT，请联系管理员",
				icon:"none"
			})
		}
		
		return response;
	}
    return http.request({
        url: url,
        data: data,
    })
}

export const http_config = {
	apiBaseUrl:httpConfig.http_config.apiBaseUrl,
	imgBaseUrl:httpConfig.http_config.imgBaseUrl
}

export default {to_http,http_config}