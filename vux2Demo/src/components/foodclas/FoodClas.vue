<template>
	<div class="foodclas">
		<XHeader class="head" :left-options="leftOptions">{{ getTitleName() }}</XHeader>
		<FoodList  :business="business"  :sheight="sheight"  :urlname="urlname"  :JsonUrl="JsonUrl" :gutter="gutter"></FoodList>
	</div>
</template>
<script>
	import { XHeader , Group  } from 'vux'
	import FoodList from '@/components/common/FoodList.vue'
	import { setStore , getStore , removeStore } from '@/components/common/LocalStorage'
	let JsonUrls="/static/cityshop.json"
	export default {
		name:'foodclas',
		components:{
			FoodList,
			XHeader,
			Group
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
		getTitleName(){
			if(typeof(this.$route.params.name)=='string'){
				setStore("foodclassname",this.$route.params.name)
				return getStore("foodclassname")
			}
			if(getStore("foodclassname")){
				return getStore("foodclassname")
			}
			
		}
	},
	data () {
		return {
			leftOptions:{showBack: true,backText:"",preventGoBack:false},
			business:[],
	    	JsonUrl:JsonUrls,
	    	gutter:"0",
	    	sheight:'-29',
	    	urlname:'use'
		}
	}
	}
</script>
<style>
	.foodclas
	{
		background-color: #fbf9fe;	
		font-family: "微软雅黑", Helvetica, Arial, sans-serif;
	}
	.foodclas
	.head
	{
		background-color: #007FFF;
	}
</style>