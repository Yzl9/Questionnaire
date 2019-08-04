<template>
	<section class="wrp">
		<div id="" class="cj">
			<div class="cj_wrp">
				<header>
					<span id="" class="score">{{score}}</span>
					<span id="">分！</span>
				</header>
				<p>{{scoreTips}}</p>
			</div>
		</div>
		<div id="" class="fengxian" @click="handleShow"></div>
		<div id="" class="foot">
			<span id="">
				关注我获取答案
			</span>
			<div id="" class="ma">
				
			</div>
		</div>	
		<div id="" class="fengx"  @click="handleShow" v-show="fenshow">
			<img src="../../assets/images/5-2.png"/>
		</div>
	</section>
</template>

<script>
	import item from '@/components/item'
	import {mapState} from 'vuex'
	export default {
		name:"home",
		data(){
			return {
				fenshow:false,
				score:0,
				rightAnswer:[2,7,12,13,18],
				scoreTips:'x',//分数提示,
           		scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！']
			}
		},
		components:{
			item
		},
		computed:{
			...mapState([
				'answerid'
			])
		},
		methods:{
			computedScore(){
				this.rightAnswer.forEach((item, index)=>{
					if(item==this.answerid[index]){
						this.score+=20
					}
				})
			},
			sc(){
				var cc=this.score/20-1
				this.scoreTips=this.scoreTipsArr[cc]
			},
			handleShow(){
				this.fenshow=!this.fenshow;
			}
		},
		created(){
			document.body.style.backgroundImage="url("+require("../../assets/images/4-1.jpg")+")";
			this.computedScore();
			this.sc();
		}
	}
</script>

<style scoped="scoped" lang="less">
.wrp{
	position:relative;
	.cj{
		position:relative;
		top: .55rem;
		left: 0;
		width: 64%;
		margin: auto;
		height: 6rem;
		display: flex;
		background: url(../../assets/images/4-2.png) center 50% no-repeat;
		background-size: 100%;
		z-index: 99;
		.cj_wrp{
			position:absolute;
			bottom: 1.2rem;
			left: 0;
			text-align: center;
			width: 110%;
			margin: auto;
			span{
	            width: 100%;
	            font-size: .7rem;
	            font-weight: 900;
	            -webkit-text-stroke: 0.05rem #412318;
	            font-family: 'Microsoft YaHei';
                color: #a51d31;
			}
			.score{
				padding-left: .3rem;
			}
			p{
				color: #3e2415;
	            font-size: .3rem;
	            text-align: center;
	            padding: .2rem .1rem .1rem 0;
			}
		}
	}
	.fengxian{
		background: url(../../assets/images/4-3.png) center 50% no-repeat;
		background-size: 100%;
		width: 3rem;
		height: 1.5rem;
		margin-top: 1rem;
		margin: auto;
	}
	.foot{
		padding-top: .2rem;
		width: 64%;
		height:4rem;
		margin: auto;
		text-align: center;
		span{
			padding: .15rem 0rem;
			display: inline-block;
			color: #664718;
		}
		.ma{
			width: 3rem;
			height: 3rem;
			background: url(../../assets/images/4-4.png) center 50% no-repeat;
			background-size: 100%;
			margin: auto;
			
		}
	}
	.fengx{
		position: absolute;
		width:100%;
		height: 150%;
		top:0;
		left: 0;
		z-index: 100;
		background-color: rgba(0,0,0,.7);
		img{
			display: block;
			width: 80%;
			margin: auto;
		}
	}
	
	
}
</style>