const baseUrl = 'http://47.111.10.36/api/'  
const request = (url = '', data = {}, type = 'POST', header = {'access-token': uni.getStorageSync('token')}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: type,
            url: baseUrl + url,
            data: data,
            header: header,
            dataType: 'json',         
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
			let [error, res] = response;   
			if(res.data.code==200){
				resolve(res.data.data);
			}else{
				console.log(res.data)
				uni.showToast({
					title: res.data.message,
					icon:"none",
					duration: 2000
				})
				// if(res.data.code==8003){
				// 	uni.clearStorageSync()
				// 	setTimeout(() => {
				// 		uni.redirectTo({
				// 			url: '../index/index'
				// 		});
				// 	}, 2500);
				// }
			}
        }).catch(error => {
			console.log(error)
			if(error){
				let [err, res] = error;
				uni.showToast({
					title: err,
					icon:"none",
					duration: 2000
				})
				reject(err)
			}
           
        })
    });
}
export default request