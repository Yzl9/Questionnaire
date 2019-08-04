<template>
	<section class="wrp">
		<header class="top_tips">
			<span class="top_span" id="" v-if="page==='home'">{{level}}</span>
			<span class="top_span" id="" v-if="page==='item'">题目{{itemNum}}</span>
		</header>
		<div id="" class="home_wrp" v-if="page==='home'">
			<div id="" class="home_img"></div>
			<router-link to="item" class="str_btn"></router-link>
		</div>
		<div id="" class="item_wrp" v-if="page==='item'">
			<div class="item_wrp_bg">
				<div id="" class="item_wrp_qus">
					<h1>题目一</h1>
					<ul>
						<li class="item_qus_item" v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="handleChange(index,item.topic_answer_id)">
							<span id="" class="item_wrp_qus_cir" :class="{'has_change':choosedNum==index}">{{chose(index)}} </span>
							<span id="" class="item_wrp_sel">{{item.answer_name}}</span>
						</li>
					</ul>
				</div>
				
			</div>
			<input type="button" v-if="itemNum<itemDetail.length" @click="nextItem" class="str_btn" value="" />
			<input type="button" v-else @click="submitAnswer" class="str_btn end" value="" />
		</div>
	</section>
</template>

<script>
	import { mapState , mapActions } from 'vuex'
	export default {
		name: 'item',
		props: ['page'],
		data() {
			return {
				choosedNum:null,
				choosedId:null
			}
		},
		computed: {
			...mapState([
				'level',//第几周
				'itemDetail', //题目详情
				'itemNum',//第几题
			])
		},
		methods:{
			...mapActions([
				'entNext',//下一题
			]),
			chose(type){
				switch(type){
					case 0:return 'A';
					case 1:return 'B';
					case 2:return 'C';
					case 3:return 'D';
				}
			},
			handleChange(val,id){
				this.choosedNum=val;
				this.choosedId=id;
			},
			nextItem(){
				//点击下一题 记录答案
				if(this.choosedNum!=null){
					this.choosedNum = null;
					this.entNext(this.choosedId);
				}else{
					alert('您还没有选择答案')
				}
			},
			submitAnswer(){
				if(this.choosedNum!=null){
					this.entNext(this.choosedId);
					this.$router.push('scure');
					
				}else{
					alert('您还没有选择答案')
				}
			}
		},
		created() {
			document.body.style.backgroundImage = "url(" + require("../assets/images/1-1.jpg")+')';
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
.wrp{
	position:relative;
	.top_tips{
		position: absolute;
		top: 0;
		right: 1rem;
		height: 3rem;
		width: 1.5rem;
		background:url(../assets/images/WechatIMG2.png);
		background-size:100%;
		.top_span{
			width: 100%;
			height: .5rem;
			position: absolute;
			bottom: .3rem;
			left: 0;
			color: #a57c50;
			line-height: .5rem;
			text-align: center;
		}
	}
	.home_wrp{
		position: relative;
		.home_img{
			position: relative;
			width: 80%;
			margin: auto;
			height: 5.5rem;
			top: 2.2rem;
			background: url(../assets/images/1-2.png) center 50% no-repeat;
			background-size: 100%;
		}
		.str_btn{
			position: relative;
			top: 2rem;
			display: block;
			width: 2rem;
			height: 1rem;
			margin: auto;
			background: url(../assets/images/1-4.png);
			background-size: 100%;
		}
	}
	.item_wrp{
		position: relative;
		.item_wrp_bg{
			position: relative;
			width: 80%;
			margin: auto;
			height: 5.5rem;
			top: 2.2rem;
			background: url(../assets/images/2-1.png) center 50% no-repeat;
			background-size: 100%;
			.item_wrp_qus{
				padding: .8rem .8rem 1rem 1.2rem;
				color: #00e;
				.item_qus_item{
					padding:.1rem 0;
					.item_wrp_qus_cir{
						display: inline-block;
						border: 1px white solid;
						width: .4rem;
						height: .4rem;
						border-radius: 50%;
						text-align: center;
						line-height: .4rem;
						font-size: 16px;
						margin-right:.2rem ;
					}
					.has_change{
						background: burlywood;
					}
				}
				
			}
		}
		.str_btn{
			position: relative;
			top: 2rem;
			display: block;
			width: 2rem;
			height: 1rem;
			margin: auto;
			background: url(../assets/images/2-2.png);
			background-size: 100%;
		}
		.end{
			background: url(../assets/images/3-1.png);
			background-size: 100% 100%;
		}
		
	}
}
</style>