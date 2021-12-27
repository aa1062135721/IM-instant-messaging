 <template>
	<view class="chat" id="chat" @longpress="handleLongPress"
	 @touchmove="handleTouchMove" @touchstart="handleTouchStart"  @touchcancel="handleTouchEnd" @touchend="handleTouchEnd">
	 <view :class="isRecording ? '' : 'modal-display'" class="record-modal">
	 	<view class="wrapper">
	 		<view class="modal-loading"></view>
	 	</view>
	 	<view class="modal-title">
	 		{{title}}
	 	</view>
	 </view>
		<view class="content">
			<view class="message">
				<view class="single" @longpress="handleMessage(item)" v-for="(item, index) in currentMessageList" :key="index" :class="singleStyle(item)">
					<image class="image" @click="goPage(item)" v-if="item.avatar && item.type !== 'TIMGroupTipElem'" :src="item.avatar" mode="aspectFill"></image>
					<image class="image" @click="goPage(item)" v-else-if="!item.avatar && item.type !== 'TIMGroupTipElem'" src="/static/lqImg/defaultAvatar.png"></image>
					<view v-if="item.type === 'TIMTextElem'">
						<view class="text-message">
							<view class="text-message-info" v-for="(div, index2) in item.virtualDom" :key="index2">
								<text v-if="div.name === 'span'">{{div.text}}</text>
								<image v-if="div.name === 'img'" :src="div.src" style="width:20px;height:20px;" />
							</view>
						</view>
					</view>
					<view v-else-if="item.type === 'TIMCustomElem'" class="TIMCustomElem">
						<view class="text-message">
							<text class="text-message-info">
								<text v-if="item.payload.data === 'group_create' ">{{ item.nick ? item.nick + '创建了群组' : item.payload.extension}}</text>
							</text>
						</view>
					</view>
					<view v-else-if="item.type === 'TIMImageElem'" class="TIMImageElem">
						<image class="image-message"  :src="item.payload.imageInfoArray[1].url"
						 mode='heightFix'  @click="previewImage(item.payload.imageInfoArray[1].url)" />
					</view>
					<view v-else-if="item.type === 'TIMGroupTipElem'" class="TIMGroupTipElem">
						<!-- <view class="text-message">
							<text class="text-message-info">
								<text>{{ (item.nick || item.payload.operatorID ) + '修改了群名称为'+ item.payload.newGroupProfile.groupName}}</text>
							</text>
						</view> -->
						<view class="text-message">
							<text v-for="(div, index1) in item.virtualDom" :key="index1">
								<text v-if="div.name === 'groupTip' || 'system'">{{div.text}}</text>
							</text>
						</view>
					</view>
					<view v-else-if="item.type === 'TIMSoundElem'" class="TIMSoundElem" >
						<view class="audio-message">
							<button @click.stop="openAudio(item)" :class="item.flow === 'in' ? 'button-left' : 'button-right'" style="background-color: #FFFFFF; border: none;" >
								<view v-if="item.flow === 'in'" class="soundElem">
									<text>{{item.payload.second}}</text>
									<view >
										<view class="box box_left">
											<view class="wifi-symbol">
												<view class="wifi-circle first"></view>
												<view class="wifi-circle second" :class="item.audioPlayFlag ? 'playSecond': '' "></view>
												<view class="wifi-circle third" :class="item.audioPlayFlag ? 'playthird': '' "></view>
											</view>
										</view>
									</view>
								</view>
								
								<view v-else class="soundElem">
									<view class="box box_right">
										<view class="wifi-symbol-right">
											<view class="wifi-circle first"></view>
											<view class="wifi-circle second" :class="item.audioPlayFlag ? 'playSecond': '' "></view>
											<view class="wifi-circle third" :class="item.audioPlayFlag ? 'playthird': '' "></view>
										</view>
									</view>
									<text>{{item.payload.second}}</text>
								</view>
							</button>
							<view class="dot" v-if="!item.isRead"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 120rpx; width: 80%;"></view>
		<u-modal v-model="revokeModal" :show-cancel-button="true" @confirm="revokeMessage" @cancel="revokeModal=false" :content="content"></u-modal>
		<view class="footer">
			<view class="bottom-input">
				<view class="footer-left">
					<view class="uni-icon uni-icon-mic" @click="isVoice = !isVoice; isEmojiOpen=false">
						<image :src="isVoice ? '/static/lqImg/voice.png' : '/static/lqImg/keyboard.png'"></image>
					</view>
				</view>
				<view class="footer-center">
					<u-input @confirm='sendMessage'  @blur="conserveText"  class="u-input" placeholder="" :clearable="false" v-model.lazy:value="inputValue"  maxlength="200" :focus="isFocus" height="45" type="textarea" v-if="isVoice"></u-input>
					<view class="voice record" id="record" v-else>
						<template v-if="!isRecording">
							按住 说话
						</template>
						<template v-if="isRecording">
							抬起 停止
						</template>
					</view>
				</view>
				<view class="footer-emotion" @click="handleEmoji">
					<image :src="showPannel ? '/static/lqImg/keyboard.png' : '/static/lqImg/smiling-face.png'"></image>
				</view>
				<view class="footer-right">
					<view class="send" @click="sendMessage" v-if="inputValue.length !== 0">
						发送
					</view>
					<image @click="sendPhoto('camera')" src="/static/lqImg/icon-chat-add.png" v-else></image>
				</view>				
			</view>
			<!-- emoji部分-->
			<view class="bottom-emoji" v-if="isEmojiOpen">
				<view class="emojis" >
					<view v-for="(emojiItem, index3) in emojiName"   class="emoji" :key="index3" @click="chooseEmoji(emojiItem)">
						<image :src="emojiUrl + emojiMap[emojiItem]" style="width:100%;height:100%" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { emojiName, emojiMap, emojiUrl } from '../../../utils/emojiMap.js'
	import { mapState, mapGetters } from 'vuex'
	import { throttle } from '../../../utils/index.js'
	import API from '../../../common/vmeitime-http/index.js'
	const audioContext = uni.createInnerAudioContext()
	const recorderManager = uni.getRecorderManager()
	const recordOptions = {
		duration: 60000,
		sampleRate: 44100,
		format: 'mp3' // 音频格式，选择此格式创建的音频消息，可以在即时通信 IM 全平台（Android、iOS、微信小程序和Web）互通
	}
	export default {
		data () {
			return {
				type: '', // 1为用户消息， 2为群消息
				inputValue: '',
				focus: '',
				isVoice: true,
				showPannel: false,
				info: {},
				height: 0,
				isFocus: false,
				isShow: true,
				revokeModal: false,
				content: '确定要撤回本消息吗？',
				revokeMessageObj: {},
				messageList: [], // 接收到的群组消息
				emojiName: emojiName,
				emojiMap: emojiMap,
				emojiUrl: emojiUrl,
				isEmojiOpen: false,
				canSend: true,
				title: '正在录音',
				isRecording: false,
				audioTime: 0,
				censusAudioTime: null,
				message: ''
			}
		},
		computed: {
			...mapState({
				currentMessageList: state => {
					let list = state.conversation.currentMessageList
					// 对list中的表情包消息进行预处理，template中无法执行js语法
					for (let i = 0; i < list.length; i++) {
						if (list[i].type === 'TIMFaceElem') {
							let data = list[i].payload.data
							list[i].payload.data = data.indexOf('@2x') > 0 ? data : `${data}@2x`
						}
					}
					list = list.filter(res => !res.isRevoked )
					console.log(list)
					return list
				},
				currentConversation: state => state.conversation.currentConversation,
				myInfo: state => state.user.myInfo
			})
		},
		
		onBackPress(e){
			this.setMessageRead() // 将消息设置为已读
			if (uni.getStorageSync('myGroup')) {
				uni.navigateTo({
					url: '/pages/ly-lq/mailList/myGroup'
				})
				uni.setStorageSync('myGroup', false)
				return true;
			} else {				
				uni.switchTab({
					url:"/pages/ly-lq/home/home"
				})	
				 return true;
				// 此处一定要return为true，否则页面不会返回到指定路径
			}
		},
		
		// 点击原生导航右上角
		onNavigationBarButtonTap() {
			let url = ''
			if (this.$store.getters.currentConversationType === 'C2C') {
				url = `/pages/ly-lq/chat/friendMessage?userID=${this.info.id}`
			} else {
				url = `/pages/ly-lq/chat/groupMessage`
			}
			uni.navigateTo({
				url:url
			})
		},		
		
		// 下拉刷新
		onPullDownRefresh() {
			throttle(this.getMessageList, 1000)()
		},
		
		onLoad(option) {
			console.log(111)
			this.info = option
			uni.setNavigationBarTitle({
				title: this.info.remark || this.info.name || this.info.userID || this.info.id
			})
			this.height = ''
			let query = uni.createSelectorQuery()
			let that = this
			wx.$app.on(this.TIM.EVENT.MESSAGE_RECEIVED, (e) => {
				query.select('#chat').boundingClientRect(function(res) {
					that.scrollToBottom()
				}).exec()
			})
			let interval = setInterval(() => {
				if (this.currentMessageList.length !== 0) {
					this.$nextTick(_ => {
						uni.pageScrollTo({
							scrollTop: 2000000,
							duration: 0
						})							
					})
					setTimeout(_ => {
						uni.pageScrollTo({
							scrollTop: 2000000,
							duration: 0
						})							
					}, 100)
					clearInterval(interval)
				}
			}, 30)
			recorderManager.onStart(() => {
				console.log('recorder start')
			})
			recorderManager.onPause(() => {
				console.log('recorder pause')
			})
			recorderManager.onStop((res) => {
				clearInterval(this.censusAudioTime)
				uni.hideLoading()
				if (this.canSend) {
					if (this.audioTime < 1) {
						this.$store.commit('showToast', {
							title: '录音时间太短'
						})
					} else {
						uni.uploadFile({
							url: `${API.http_config.apiBaseUrl}common/file/upload`, //仅为示例，非真实的接口地址
							filePath: res.tempFilePath,
							name: 'file',
							header:{
							    'access-token': uni.getStorageSync('token')
							},
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								this.handleTouchEnd()
								let data = JSON.parse(uploadFileRes.data).data
								if (this.$store.getters.currentConversationType === 'C2C') {
									this.sendAudioMessage(data)
								} else {
									console.log(444)
									this.sendGroupAudioMessage(data)
								}
							}
						})
					}
				}
			})
		},
		
		onShow() {
			let title = ''
			let info = this.$store.getters
			if (info.currentConversationType == 'GROUP' && info.toName) {
				title = info.toName
			} else if (info.currentConversationType == 'C2C' && info.currentConversation.remark) {
				title = info.currentConversation.remark
			}
			if (title) uni.setNavigationBarTitle({title})
			this.currentMessageList.map(res => {
				this.$set(res, 'audioPlayFlag', false)
			})
		},
		
		onUnload () {
			audioContext.pause()
			audioContext.seek(0)
			this.currentMessageList.map(res => {
				res.audioPlayFlag = false
			})
		},
		
		onHide () {
			audioContext.pause()
			this.currentMessageList.map(res => {
				res.audioPlayFlag = false
			})
		},
		
		methods: {
			goPage (item) {
				let id = ''
				if (item.from === '@TIM#SYSTEM') {
					id = item.payload.operatorID
				} else {
					id = item.from
				}
				uni.navigateTo({
					url: `/pages/ly-lq/chat/friendMessage?userID=${id}`
				})
			},
			setMessageRead () {
				wx.$app.setMessageRead({conversationID: this.currentConversation.conversationID}).then((res) => {
				  // 已读上报成功，指定 ID 的会话的 unreadCount 属性值被置为0
				  console.log('消息已读', res)
				}).catch((imError) => {
				  // 已读上报失败
				  console.warn('setMessageRead error:', imError);
				});				
			},
			
			singleStyle (item) {
				let style = ''
				if (item.flow === 'in' && item.type !== 'TIMGroupTipElem') {
					style = 'single-left'
				} else if (item.flow === 'out') {
					style = 'single-right'
				} else if (item.type === 'TIMGroupTipElem') {
					style = 'single-center'
				}
				return style
			},
			
			sendAudioMessage (data) {
				let msgSeq = Math.round(Math.random()*(99999999 - 10000000)+ 10000000)
				let random = Math.round(Math.random()*(4294967295-0) + 0)
				let now = this.dayjs(new Date()).unix()
				this.$api.to_http('/msg/sendMsg', {
					SyncOtherMachine: 1,
					From_Account: this.myInfo.userID,
					To_Account: this.$store.getters.toAccount,
					MsgLifeTime: 604800,
					MsgSeq: msgSeq,
					MsgRandom: random,
					MsgTimeStamp: now,
					MsgBody: [
						{
							MsgType: 'TIMSoundElem',
							MsgContent: {
								Url: API.http_config.imgBaseUrl + data.path,
								UUID: data.id,
								Size: data.fileSize * 1,
								Second: this.audioTime,
								Download_Flag: 2
							}
						}
					],
					CloudCustomData: 'your cloud custom data',
					OfflinePushInfo: {
						PushFlag: 1,
						Title:"这是推送标题",
						Desc: "这是离线推送内容",
						Ext: "这是透传的内容",
						AndroidInfo: { 
						    Sound: "android.mp3",
						    OPPOChannelID: "test_OPPO_channel_id",
						    VIVOClassification: 1
						},
						ApnsInfo: {
						    Sound: "apns.mp3",
						    BadgeMode: 1,
							Title:"apns title",
						    SubTitle:"apns subtitle",
						    Image:"www.image.com",
						    MutableContent: 1
						}
					}
				}, 'POST').then((res) => {
					console.log('语音发送状态', res)
				})
			},
			
			sendGroupAudioMessage (data) {
				let msgSeq = Math.round(Math.random()*(99999999 - 10000000)+ 10000000)
				let random = Math.round(Math.random()*(4294967295-0) + 0)
				let now = this.dayjs(new Date()).unix()
				this.$api.to_http('/msg/sendGroupMsg', {
					GroupId: this.$store.getters.toAccount,
					Random: random,
					MsgBody: [
						{
							MsgType: 'TIMSoundElem',
							MsgContent: {
								Url: API.http_config.imgBaseUrl + data.path,
								UUID: data.id,
								Size: data.fileSize * 1,
								Second: this.audioTime,
								Download_Flag: 2
							}
						}
					],
					From_Account: this.myInfo.userID,
					CloudCustomData: 'your cloud custom data',
					OfflinePushInfo: {
						PushFlag: 1,
						Desc: "这是离线推送内容",
						Ext: "这是透传的内容",
						AndroidInfo: { 
						    Sound: "android.mp3"
						},
						ApnsInfo: {
						    Sound: "apns.mp3",
						    BadgeMode: 1,
							Title:"apns title",
						    SubTitle:"apns subtitle",
						    Image:"www.image.com"
						}
					}
				}, 'POST').then((res) => {
					console.log('语音发送状态', res)
				})
			},
			
			
			// 获取消息
			getMessageList() {
				this.$store.dispatch('getMessageList')
				uni.stopPullDownRefresh()
			},
			
			// 点击emoji
			handleEmoji () {
				this.isEmojiOpen = !this.isEmojiOpen
				this.isVoice = true
			},
			// 发消息选中emoji
			chooseEmoji(item) {
				this.inputValue += item
			},
			
			// 长按消息触发是否撤回
			handleMessage(message) {
				if (message.from === this.myInfo.userID) {
					const revokeTimeout = 2 * 60 * 1000
					const now = new Date().getTime()
					if (now - message.time * 1000 < revokeTimeout) {
						this.revokeModal = true
						this.revokeMessageObj = message
					}
				}
			},
			
			
			revokeMessage() {
				console.log(this.revokeMessageObj)
				wx.$app.revokeMessage(this.revokeMessageObj).then((res) => {
				  // 消息撤回成功
				  console.log(res)
				}).catch(function(imError) {
				  // 消息撤回失败
				  console.warn('revokeMessage error:', imError);
				});
			},
			
			isnull(content) {
				if (content === '') {
					return true
				}
				const reg = '^[ ]+$'
				const re = new RegExp(reg)
				return re.test(content)
			},
			
			// 滚动到列表bottom
			scrollToBottom() {
				if (this.isShow) {
					setTimeout(() => {
						uni.pageScrollTo({
							scrollTop: 99999
						})						
					}, 200)
				}
			},
			
			sendPhoto(name) {
				let self = this
				// debugger	
				if (name === 'album') {
					this.chooseImage(name)
				} else if (name === 'camera') {
					this.chooseImage(name)
				}
			},
			
			// 提示前往设置页
			toSettingPage(options) {
				uni.showModal({
					title: '授权提示',
					content: options.content,
					success: (tipRes) => {
						if (tipRes.confirm) {
							uni.openSetting({
								success: (settingRes) => {
									options.suc && options.suc(settingRes)
								},
								fail: () => {
									options.fail && options.fail()
								}
							})
						} else {
							options.cancel && options.cancel()
						}
					}
				})
			},
			
			// 长按录音，监听在页面最外层div，如果是放在button的话，手指上划离开button后获取距离变化有bug
			handleLongPress(e) {
				this.startPoint = e.touches[0]
				if (e.target.id === 'record') {
					this.audioTime = 0
					this.title = '正在录音'
					this.isRecording = true
					this.startRecording()
					this.canSend = true
				}
			},
			
			// 播放音频
			openAudio(audio) {
				this.currentMessageList.map(res => {
					if (res.ID !== audio.ID) {
						res.audioPlayFlag = false
					} else {
						audio.audioPlayFlag = !audio.audioPlayFlag
					}
				})
				this.$forceUpdate()
				if (audio.audioPlayFlag) {
					audio.isRead = true
					let that = this
					audioContext.src = audio.payload.url
					audioContext.play()
					audioContext.onEnded(() => {
						audio.audioPlayFlag = false
						uni.hideToast()
						this.$forceUpdate()
					})
					audioContext.onError((err) => {
						console.log(err, 4444555)
						that.$store.commit('showToast', {
							title: '小程序暂不支持播放该音频格式',
							icon: 'none',
							duration: 2000
						})
					})					
				} else {
					audioContext.pause()
				}
			},			
			// 开始录音
			startRecording() {
				this.censusAudioTime = setInterval(() => {
					this.audioTime++
				}, 1000)
				recorderManager.start(recordOptions)
			},
			
			// 录音时的手势上划移动距离对应文案变化
			handleTouchMove(e) {
				console.log('手指移动', 5555)
				if (this.isRecording) {
					if (this.startPoint.clientY - e.touches[e.touches.length - 1].clientY > 100) {
						this.title = '松开手指，取消发送'
						this.canSend = false
					} else if (this.startPoint.clientY - e.touches[e.touches.length - 1].clientY > 20) {
						this.title = '上划可取消'
						this.canSend = true
					} else {
						this.title = '正在录音'
						this.canSend = true
					}
				}
			},
			
			handleTouchStart(e) {
				// e.preventDefault()
				console.log('触摸开始')
			},
			
			// 手指离开页面滑动
			handleTouchEnd() {
				console.log('手指离开页面')
				this.isRecording = false
				uni.hideLoading()
				recorderManager.stop()
			},
			
			// 选择图片
			
			chooseImage(name) {
				let _this = this
				uni.chooseImage({
					// sourceType:[name],
					sourceType: ['album', 'camera'],
					sizeType: ['original'/* , 'compressed' */], //可以指定是原图还是压缩图，默认二者都有
					success: async (res)=>{
						if (res.tempFilePaths.length > 1) {
							for (let i = 0; i < res.tempFilePaths.length; i++) {
								let file = {
									errMsg: res.errMsg,
									tempFilePaths: [res.tempFilePaths[i]],
									tempFiles: [res.tempFiles[i]]
								}
								let message = wx.$app.createImageMessage({
								  to:  _this.$store.getters.toAccount,
								  conversationType: _this.$store.getters.currentConversationType,
								  payload: { file: file },
								  onProgress: function(event) { console.log('file uploading:', event) }
								});
								_this.$store.commit('sendMessage', message)
								await wx.$app.sendMessage(message).then(() => {
									_this.percent = 0
								}).catch((err) => {
									uni.showToast({
										title: err.message,
										icon: 'none',
										duration: 2000
									})
								})
							}							
						} else {
							let message = wx.$app.createImageMessage({
							  to:  _this.$store.getters.toAccount,
							  conversationType: _this.$store.getters.currentConversationType,
							  payload: { file: res },
							  onProgress: function(event) { console.log('file uploading:', event) }
							});
							_this.$store.commit('sendMessage', message)
							await wx.$app.sendMessage(message).then(() => {
								console.log(message, '44444444444')
								_this.percent = 0
							}).catch((err) => {
								console.log(err)
							})
						}
					}
				})
				this.handleClose()
			},
			
			// 选项卡关闭
			handleClose() {
				this.isFocus = false
				this.isEmojiOpen = false
			},
			
			previewImage(src) {
				uni.previewImage({
					current: src, // 当前显示图片的http链接
					urls: [src]
				})
			},
			
			// 发送消息
			sendMessage() {
				if (!this.isnull(this.inputValue)) {
					const message = wx.$app.createTextMessage({
						to: this.$store.getters.toAccount,
						conversationType: this.$store.getters.currentConversationType,
						payload: {
							text: this.inputValue
						}
					})
					let index = this.$store.state.conversation.currentMessageList.length
					this.$store.commit('sendMessage', message)
					wx.$app.sendMessage(message).catch(() => {
						this.$store.commit('changeMessageStatus', index)
					})
				} else {
					this.$store.commit('showToast', {
						title: '消息不能为空'
					})
				}
				this.isEmojiOpen = false
				setTimeout(_ => {
					
					this.inputValue = ''
				}, 300)
				this.$nextTick(_ => {
					this.$forceUpdate()
				})
			},
			
			// 保存文本信息
			conserveText(e) {
				this.inputValue = e
			}
		}
	}
</script>

<style lang="scss" scoped>	
	.chat {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 104px);
		position: relative;
		background-color: #f9f9f9;
		.nav {
			.nav_right {
				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}				
			}
		}
	}
	
	.record-modal {
		height: 150px;
		width: 60vw;
		background-color: black;
		opacity: 0.8;
		position: fixed;
		top: 200px;
		z-index: 9999;
		left: 20vw;
		border-radius: 12px;
		display: flex;
		flex-direction: column;

		.wrapper {
			display: flex;
			height: 100px;
			box-sizing: border-box;
			padding: 10vw;

			.modal-loading {
				opacity: 1;
				width: 20px;
				height: 8px;
				border-radius: 2px;
				background-color: #f7f7f7;
				animation: loading 2s cubic-bezier(.17, .37, .43, .67) infinite;
			}
		}

		.modal-title {
			text-align: center;
			color: white;
		}
	}

	@-webkit-keyframes loading {
		0% {
			transform: translate(0, 0);
		}


		50% {
			transform: translate(30vw, 0);
			background-color: #f5634a;
			width: 40px;
		}

		100% {
			transform: translate(0, 0);
		}
	}
	
	.modal-display {
		display: none;
	}
	
	.content {
		.message {
			.single {
				display: flex;
				align-items: center;
				min-height: 20rpx;
				padding: 30rpx;
				box-sizing: border-box;
				.image {
					min-width: 80rpx;
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}
				.text-message {
					background-color: #FFFFFF;
					padding: 6rpx 24rpx;
					box-sizing: border-box;
					border-radius: 8rpx;
					line-height: 50rpx;
					border: 1px solid #e8e8e8;
					display: flex;
					align-items: center;
					.text-message-info {
						image {
							margin-top: 10rpx;
						}
					}
					.soundElem {
						display: flex;
						align-items: center;
						image {
							width: 30rpx;
							height: 30rpx;
						}
					}
				}
				.audio-message {
					display: flex;
					align-items: center;
					.text-message-info {
						image {
							margin-top: 10rpx;
						}
					}
					.button-left {
						padding-right: 1rpx !important;
					}
					.button-right {
						padding-left: 1rpx !important;
					}
					.soundElem {
						display: flex;
						align-items: center;
						justify-content: space-between;
						height: 60rpx;
						font-size: 28rpx;
						// image {
						// 	width: 30rpx;
						// 	height: 30rpx;
						// }
						.box {
							width: 36rpx;
							height: 60rpx;
							margin-top: 10rpx;
							box-sizing: border-box;
							position: relative;
						}
						.box_left {
							margin-left: 20rpx;
						}
						.box_right {
							margin-right: 25rpx;
						}
						.wifi-symbol {
							width: 50rpx;
							height: 50rpx;
							box-sizing: border-box;
							overflow: hidden;
							transform: rotate(135deg);
				 
						}
						.wifi-symbol-right {
							width: 50rpx;
							height: 50rpx;
							box-sizing: border-box;
							overflow: hidden;
							transform: rotate(315deg);
						}
						.wifi-circle {
							border: 5rpx solid #999999;
							border-radius: 50%;
							position: absolute;
						}
				 
						.first {
							width: 5rpx;
							height: 5rpx;
							background: #cccccc;
							top: 45rpx;
							left: 45rpx;
						}
				 
						.second {
							width: 25rpx;
							height: 25rpx;
							top: 35rpx;
							left: 35rpx;
						}
						
						.playSecond {
							animation: fadeInOut 1s infinite 0.2s;
						}
						.playthird {
							animation: fadeInOut 1s infinite 0.4s;
						}
						.third {
							width: 40rpx;
							height: 40rpx;
							top: 25rpx;
							left: 25rpx;
						}
				 
						@keyframes fadeInOut {
							0% {
								opacity: 0; /*初始状态 透明度为0*/
							}
							100% {
								opacity: 1; /*结尾状态 透明度为1*/
							}
						}
					}
					.dot {
						width: 10rpx;
						height: 10rpx;
						background: red;
						border-radius: 50%;
						margin-left: 4rpx;
					}
				}
				.image-message {
					max-height: 180rpx;
				}
			}
			.single-left {
				justify-content: flex-start;
				>image {
					margin-right: 20rpx;
				}
			}
			.single-center {
				justify-content: center;
			}
			.single-right {
				flex-direction: row-reverse;
				>image {
					margin-left: 20rpx;
				}
			}
		}
	}
	.footer {
		height: auto;
		min-height: 80rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	
	.bottom-input {
		display: flex;
		flex-direction: row;
		padding: 20rpx 5rpx;
	}
	
	.footer-left {
		align-self: flex-end;
		width: 80upx;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 10rpx;
		image {
			width: 50rpx;
			height: 50rpx;
		}
	}
	
	.footer-right {
		align-self: flex-end;
		width: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 6rpx;
		padding-right: 6rpx;
		image {
			width: 58rpx;
			height: 58rpx;
		}
		.send {
			font-size: 28rpx;
			background-color: #007AFF;
			color: white;
			border-radius: 4px;
			height: fit-content;
			padding: 6px;
			margin-left: 12rpx;
			text-align: center;
		}
	}
	
	.footer-emotion {
		align-self: flex-end;
		display: flex;
		align-items: center;
		padding-bottom: 10rpx;
		image {
			width: 52rpx;
			height: 52rpx;
		}
	}
	
	.footer-center {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 30rpx;
		.voice {
			width: 100%;
			height: 100%;
			background: #f9f9f9;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #333333;
		}
	}
	
	.footer-center .u-input {
		flex: 1;
		background: #f9f9f9;
		padding: 10upx !important;
		font-family: verdana !important;
		overflow: hidden;
		border-radius: 15upx;
	}
	
	.bottom-emoji {
		position: relative;
		width: 100%;
		.emojis {
			height: 180px;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			overflow-y: scroll;
			box-sizing: border-box;

			.emoji {
				height: 12.5vw;
				width: 12.5vw;
				padding: 8px;
				box-sizing: border-box;
			}

			.bigemoji {
				height: 20vw;
				width: 20vw;
				padding: 10px;
				box-sizing: border-box;
			}
		}
	}

</style>
