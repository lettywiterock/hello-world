<template>
	<div class="shop">
	<XHeader class="shophead" >{{ getTitleName() }}</XHeader>

	
	<!-- 九宫格轮播 -->
	<swiper class="shopswiper" dots-position="center">
		<swiper-item>
			<grid :rows="4" >
			  <grid-item label="Grid" v-for="i in swiper_grid " :key="i.id" v-if="i.id<=8" :link="{name:'foodclas',params:{ name:i.name }}">
			   	<img class="grid_img" slot="icon" :src="i.img">
        		<span slot="label">{{ i.name }}</span>
			  </grid-item>
			</grid>
		</swiper-item>
		<swiper-item>
			<grid :rows="4">
			  <grid-item label="Grid" v-for="i in swiper_grid " :key="i.id" v-if="i.id>8" :link="{name:'foodclas',params:{ name:i.name }}">
			   <img class="grid_img" slot="icon" :src="i.img">
        		<span slot="label">{{ i.name }}</span>
			  </grid-item>
			</grid>
		</swiper-item>
	</swiper>
	<FoodList :grouptitle="grouptitle" :business="business"  :sheight="sheight"  :urlname="urlname"  :JsonUrl="JsonUrl"></FoodList>
	
		<!-- <h1>SHOP</h1> -->
		<!-- <x-button  @click.native="ready" type="button">button</x-button>  -->
		<AppFooter :select_home=select_home :select_shop=select_shop :select_use=select_use :dot_home=dot_home  :dot_use=dot_use :badge_shop=badge_shop style="position:fixed;"></AppFooter>
	</div>
</template>
<script>
	import AppFooter from '@/components/common/AppFooter.vue'
	import FoodList from '@/components/common/FoodList.vue'
	import { XHeader , XButton , Grid, GridItem , Swiper , SwiperItem , Group , Cell , CellBox , Divider , Scroller , Rater , LoadMore } from 'vux'
	import { setStore , getStore , removeStore } from '../common/LocalStorage'
    let JsonUrls="/static/cityshop.json"
	export default {
		name:'shop',
		components: {
		    AppFooter,
		    FoodList,
		    XHeader,
		    XButton,
		    Grid, 
		    GridItem,
		    Swiper,
		    SwiperItem,
		    Group,
			Cell,
			CellBox,
			Divider,
			Scroller,
			Rater,
			LoadMore 
	    },
	    
	    computed: {
			
	    },
	    watch:{
	    	
	    },
	      beforeCreate:
	    	function(){
	    	if(getStore("city")){
	    		this.$http.get(JsonUrls).then(response => {
		    		return this.business=  eval(response.bodyText)
		    	}, response => { 
		    		console.log("error-response")
		    		return this.business= null
		   		 	})
	    	}else{
	    		return this.business= null
	    	}


	    },
	    methods:{
	    	ready(){
	    	/*	console.log(this.$refs.aa.offsetHeight )*/
			 	console.log("接收参数"+getStore("city"))
		        console.log("id: " + this.$route.params.id+",name:"+this.$route.params.name);
		    },
		    getTitleName(){
		    	if(getStore("cityAddName")){
		    		if(this.$route.params.name){
		    			setStore("cityAddName",this.$route.params.name)
		    			
						return getStore("city")+this.$route.params.name
		    		}else{
		    			
		    			return getStore("city")+getStore("cityAddName")
		    		}
		    	}else{
		    		
		    		return getStore("city")
		    	}
		    },
		    
	    },
	   
	    data () {
		    return {
		    	select_home:false,
		    	select_shop:true,
		    	select_use:false,
		    	dot_home:false,
		    	dot_use:false,
		    	badge_shop:'2',
		    	business:[],
		    	JsonUrl:JsonUrls,
		    	grouptitle:"附近商家",
		    	urlname:'use',
		    	sheight:'420px',
		    	swiper_grid:[
		    				{ id:"1",name:"美食",img:"/static/img/Taco.png" },
		    				{ id:"2",name:"甜品饮品",img:"/static/img/Cupcake.png" },
		    				{ id:"3",name:"商店超市",img:"/static/img/Ingredients.png" },
		    				{ id:"4",name:"预定早餐",img:"/static/img/Dim Sum.png" },
		    				{ id:"5",name:"果蔬生鲜",img:"/static/img/Apple.png" },
		    				{ id:"6",name:"新店特惠",img:"/static/img/Coconut Cocktail.png" },
		    				{ id:"7",name:"准时达",img:"/static/img/Quesadilla.png" },
		    				{ id:"8",name:"夜宵",img:"/static/img/Wine Glass.png" },
		    				{ id:"9",name:"9",img:"/static/img/Taco.png" },
		    				{ id:"10",name:"10",img:"/static/img/Taco.png" },
		    				{ id:"11",name:"11",img:"/static/img/Taco.png" },
		    				{ id:"12",name:"12",img:"/static/img/Taco.png" },
		    				{ id:"13",name:"13",img:"/static/img/Taco.png" },
		    				{ id:"14",name:"14",img:"/static/img/Taco.png" },
		    				{ id:"15",name:"15",img:"/static/img/Taco.png" },
		    				{ id:"16",name:"16",img:"/static/img/Taco.png" }
		    				]

		    }
		  }
	}
</script>
<style>
	.shop{
		background-color: #fbf9fe;	
		font-family: "微软雅黑", Helvetica, Arial, sans-serif;
	}
	.shop
	.shopswiper,
	.shop
	.addgroup
	{
		background-color: #ffffff;
	}
	.shop
	.shopswiper
	{
		height: 190px;
	}
	.shop	
	.shophead
	{
		background-color: #007FFF;
	}

	.shop
	.grid_img
	{
		width: 40px;
		height: 40px;
	}
	.shop
	.weui-grid__icon
	{
		width: 40px;
	}
	.shop
	.addgroup
	{
		margin-bottom: 49px;
		margin-top: 10px;
	}
	/* list */
	.shop
	.addgroup
	.addgroupcell
	{
		height: 80px;
	}
	.shop
	.addgroup
	.addgroupcell
	.titleimg
	{	
		float: left;
		margin-right: 10px;
	}
	.shop
	.addgroup
	.addgroupcell
	.div1
	{
		overflow:hidden;
		width: 200px;
		text-align: left;
		float: left;
	}
	.shop
	.addgroup
	.addgroupcell
	.div1
	.div1_1
	{
		margin-bottom: 5px;
		font-size: 16px;
		font-weight:bolder ;
	}
	.shop
	.addgroup
	.addgroupcell
	.div1
	.brand
	{
		font-size: 12px;
		margin-right: 5px;
		color:#000;
		background-color:#ffff00;
	}
	.shop
	.addgroup
	.addgroupcell
	.div1
	.div1_2
	{
		margin-bottom: 5px;
		font-size: 12px;
	}
	.shop
	.addgroup
	.addgroupcell
	.div1
	.div1_2
	.volume
	{
		color:#888888;
	}
	.shop
	.addgroup
	.addgroupcell
	.div1
	.div1_2
	.star
	{
		color:#ff8800;
	}
	.shop
	.addgroup
	.addgroupcell
	.div1
	.div1_3
	{
		margin-bottom: 5px;
		font-size: 12px;
	}
	.shop
	.addgroup
	.addgroupcell
	.div2
	{
		position:fixed;
		text-align: right;
		float: right;
		right: 30px;
	}
	.shop
	.addgroup
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
	.shop
	.addgroup
	.addgroupcell
	.div2
	.div2_1
	{
		margin-bottom: 5px;
		font-size: 16px;
	}
	.shop
	.addgroup
	.addgroupcell
	.div2
	.div2_2
	{
		margin-bottom: 5px;
		font-size: 12px;
	}
	.shop
	.addgroup
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
	.shop
	.addgroup
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
	.shop
	.addgroup
	.addgroupcell
	.div2
	.div2_3
	{
		margin-bottom: 5px;
		font-size: 10px;
	}
	.shop
	.addgroup
	.addgroupcell
	.div2
	.div2_3
	.distance
	{

	}
	.shop
	.addgroup
	.addgroupcell
	.div2
	.div2_3
	.distance
	.duration
	{
		color:#009fcc;
	}
	/* scroller */
	.shop
	.scroller
	{
		/* margin-bottom: 49px; */
		/* margin-top: 46px; */
	}
	.shop
	.scroller
	.scrollerdiv
	{
		/* overflow : hidden; */
	}
</style>