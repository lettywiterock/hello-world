<template>
<div class="foodlist">
	<group class="addgroup" :title="grouptitle" :gutter="gutter">
		<scroller v-if="business.length!=0" lock-x scrollbar-y :height="sheight" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" 
		:scroll-bottom-offst="0">
			<div>
				<cell-box class="addgroupcell" v-for=" bus in business  " 
				:key="bus.id" 
				:link=" { name: urlname, params: { id:bus.id ,name:bus.name}} ">
					<img class="titleimg"  :src="bus.img" style="height:60px;"/>
					<div class="div1" >
						<div class="div1_1" ><span v-if="bus.brand==1" class="brand">品牌</span>{{ bus.name }}</div>
						<div class="div1_2" >
							<span class="star"><rater class="starrater" :max="5" :value="parseInt(bus.star)" :font-size="12"></rater>{{ bus.star }}</span>
							<span class="volume">月售{{ bus.volume }}单</span></div>
						<div class="div1_3" ><span class="send">￥{{ bus.send }}起送/配送费￥{{ bus.sendCost }}</span></div>
					</div>
					<div solt="value" class="div2">
						<div class="div2_1" >&nbsp;
						<span v-if="bus.life==1" class="invoice">保</span>
						<span v-if="bus.ontime==1" class="invoice">准</span>
						<span v-if="bus.invoice==1" class="invoice">票</span>
						</div>
						<div class="div2_2" >&nbsp;<span class="span_FNS" v-if="">蜂鸟送</span><span class="span_ZSD" v-if="">准时达</span></div>
						<div class="div2_3" ><span class="distance">{{ bus.distance }}/<span class="duration">{{ bus.duration }}分钟</span></span></div>
					</div>
				</cell-box> 
				<load-more tip="加载更多"></load-more>
			</div>
		</scroller>
		<cell  v-if="!business">没有更多数据</cell>
	</group>
</div>
</template>
<script>
import { Group, Cell, CellBox, Scroller, Rater, LoadMore } from 'vux'
import { setStore , getStore , removeStore } from '../common/LocalStorage'
export default {
	name:'FoodList',
 	components: {
 		Group,
	    Cell, 
	    CellBox,
	    Scroller,
	    Rater,
	    LoadMore
  },

  methods:{
  	onScrollBottom(){
		    	if (this.onFetching) {
			        // do nothing
			      } else {
			      	this.onFetching = true
			      	setTimeout(() => {
					    		console.log("onScrollBottom")
					    		this.$http.get(this.JsonUrl).then(response => {
					    			eval(response.bodyText).forEach((arry)=>{
					    				this.business.push(arry)
					    			})
						    		 console.log(this.business)
						    	}, response => { 
						    		console.log("error-response")
						   		 	})
					    		this.onFetching = false
					    	},2000)
					    }
					    this.$nextTick(() => {
				            this.$refs.scrollerBottom.reset()
				          })
			      }
  },
  data () {
    return {
    	onFetching:false
    }
  },

  props:['grouptitle','business','scrollerBottom','urlname','sheight','JsonUrl','gutter']
}
</script>
<style>
	.foodlist
	.addgroup
	{
		background-color: #ffffff;
	}
	.foodlist
	.addgroupcell
	{
		height: 80px;
	}
	.foodlist
	.addgroupcell
	.titleimg
	{	
		float: left;
		margin-right: 10px;
	}
	.foodlist
	.addgroupcell
	.div1
	{
		overflow:hidden;
		width: 200px;
		text-align: left;
		float: left;
	}
	.foodlist
	.addgroupcell
	.div1
	.div1_1
	{
		margin-bottom: 5px;
		font-size: 16px;
		font-weight:bolder ;
	}
	.foodlist
	.addgroupcell
	.div1
	.brand
	{
		font-size: 12px;
		margin-right: 5px;
		color:#000;
		background-color:#ffff00;
	}
	.foodlist
	.addgroupcell
	.div1
	.div1_2
	{
		margin-bottom: 5px;
		font-size: 12px;
	}
	.foodlist
	.addgroupcell
	.div1
	.div1_2
	.volume
	{
		color:#888888;
	}
	.foodlist
	.addgroupcell
	.div1
	.div1_2
	.star
	{
		color:#ff8800;
	}
	.foodlist
	.addgroupcell
	.div1
	.div1_3
	{
		margin-bottom: 5px;
		font-size: 12px;
	}
	.foodlist
	.addgroupcell
	.div2
	{
		position:fixed;
		text-align: right;
		float: right;
		right: 30px;
	}
	.foodlist
	.addgroupcell
	.div2
	.invoice
	{
		font-size: 10px;
		padding: 1px;
		color:#888888;
		border-radius: 2px;
		border: 1px solid #dddddd;
	}
	.foodlist
	.addgroupcell
	.div2
	.div2_1
	{
		margin-bottom: 5px;
		font-size: 16px;
	}
	.foodlist
	.addgroupcell
	.div2
	.div2_2
	{
		margin-bottom: 5px;
		font-size: 12px;
	}
	.foodlist
	.addgroupcell
	.div2
	.div2_2
	.span_FNS
	{
		color:#fff;
		background-color: #009fcc;
		border:1px solid #009fcc;
		border-radius: 5px;
		margin-right: 1px;
		margin-top: 2px;
		margin-bottom: 2px;
		padding-left: 2px;
		padding-right: 2px;
	}
	.foodlist
	.addgroupcell
	.div2
	.div2_2
	.span_ZSD
	{
		color:#009fcc;
		background-color: #fff;
		border:1px solid #009fcc;
		border-radius: 5px;
		margin-top: 2px;
		margin-bottom: 2px;
		padding-left: 2px;
		padding-right: 2px;
	}
	.foodlist
	.addgroupcell
	.div2
	.div2_3
	{
		margin-bottom: 5px;
		font-size: 10px;
	}
	.foodlist
	.addgroupcell
	.div2
	.div2_3
	.distance
	{

	}
	.foodlist
	.addgroupcell
	.div2
	.div2_3
	.distance
	.duration
	{
		color:#009fcc;
	}
</style>