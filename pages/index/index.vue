<template>
	<view class="page" :style="`height: ${windowHeigh}px;overflow: hidden;`">
		<view class="" @click="backMusic">音乐{{backMusicStu?'关':'开'}}</view>
		<view style="font-size: 50rpx;" class="animate__animated animate__bounceInDown">电子木鱼</view>
		<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
			<view style="font-size: 50rpx;margin-bottom: 50rpx;" :class="['gongde',yuClick?'gongdeAN':'']">功德+1</view>
			<image :class="['img','animate__animated','animate__bounceIn',yuClick?'scale':'']" src="/static/my.png"
				mode="widthFix" @tap="$u.throttle(btnAClick, 100)"></image>
		</view>
		<view style="font-size: 36rpx;">功德数：{{gongdeNum}}</view>
		<view class="by">by 乐檬青年</view>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	const innerAudioContextBack = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				yuClick: false,
				gongdeNum:0,
				backMusicStu:true,
				windowHeigh:500,
			}
		},
		onLoad() {
			let that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.windowHeigh = res.windowHeight;
				}
			})
			innerAudioContext.src = '/static/hrxz.mp3';
			innerAudioContextBack.src = '/static/dabeizhou.mp3';
			innerAudioContextBack.loop = true;
			that.gongdeNum = uni.getStorageSync('gongdeNum') || 0;
			
		},
		onShow() {

		},
		onUnload() {
			innerAudioContext.destroy();
			innerAudioContextBack.destroy();
		},
		methods: {
			btnAClick() {
				let that = this;
				that.gongdeNum++;
				that.yuClick = true;
				innerAudioContext.play();
				
				uni.setStorageSync('gongdeNum',this.gongdeNum)
				setTimeout(() => {
					that.yuClick = false;
					innerAudioContext.stop();
				}, 100)
				console.log('dianji');
			},
			
			backMusic(){
				this.backMusicStu = !this.backMusicStu
				if(this.backMusicStu){
					innerAudioContextBack.stop();
				}else{
					innerAudioContextBack.play();
				}
				
				
			},
		}
	}
</script>

<style scoped>
	body,
	page,
	.page {
		width: 100vw;
		background-color: black;
		color: #fff;
	}

	.page {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		position: relative;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		box-sizing: border-box;
		position: relative;
	}

	.img {
		width: 70vw;
	}

	.scale {
		transform: scale(.9);
	}

	.gongde {
		opacity: 0;

	}

	.gongdeAN {
		opacity: 1;
		animation: scaleDraw 400ms linear;
	}

	@keyframes scaleDraw {
		from {
			transform: translate3d(0, 100%, 0);
			visibility: visible;
		}

		to {
			transform: translate3d(0, 0, 0);
		}

	}
	
	.by{
		position: absolute;
		right: 10px;
		bottom: 10px;
		
	}
</style>
