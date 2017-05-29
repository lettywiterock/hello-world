<template>
	<div class="cityselect">
		<XHeader class="cityhead" :left-options="leftOptions" :right-options="rightOptions"  @on-click-title="titleClick">{{ getName(cityvalue) }}
		<a slot="right" @click="showPopupPicker = true" >切换城市</a>
	  </XHeader>
	    <div class="citydiv1">
		    <group class="cityxgroup1">
		    	<x-input class="group1input"  v-model="value1" :max="16" @on-change="input1OnChange" :debounce="1000" placeholder="名称，地址"></x-input>
		    	<x-button class="group1button" @click.native="value1Click(value1)" type="button">提交</x-button>
		    </group>
	    </div>
	    <div>
	    	<group>
	    		<scroller v-if="provinces.length!=0" lock-x scrollbar-y height="540px">
	    			<div >
					      <cell v-for="province in provinces " :key="provinces.id" :title="province.name" 
					      :link=" { name: 'shop', params: { id: province.id ,name:province.name}} " :inline-desc="province.add">
					      <div slot="value">{{ "ID="+province.id }}</div></cell>
			        </div>
			    </scroller>
    			  <cell  v-if="provinces.length===0 && !getHistory()">没有更多数据</cell>
    		</group>
    		<group v-if="provinces.length===0 && getHistory()" title="搜索历史">
    		  	<scroller v-if="getHistory().length!=0" lock-x scrollbar-y height="500px">
    		  		<div > 
		    			<cell v-for="historycity in getHistory() " 
					      :key="historycity.id" :title="historycity.name" 
					      :link=" { name: 'shop', params: { id: historycity.id ,name:historycity.name}} " 
					      :inline-desc="historycity.add">
					      <div slot="value">{{ "ID="+historycity.id }}</div>
					    </cell>
				     </div>
				</scroller>
    		</group>
	    </div>
	    <!-- <h1 style="display:none">CitySelect</h1> -->
   
	    <!-- 城市弹出系统 -->
		<group>
	       <popup-picker :columns="3" :show="showPopupPicker" show-name :show-cell="false" title="CITYPOP" :data="addressData" v-model="cityvalue" @on-hide="showPopupPicker=false"></popup-picker>
	    </group>
	</div>
</template>
<script>
import { XHeader , PopupPicker, Group, XInput, XButton , Cell , ChinaAddressData , Value2nameFilter as value2name , Scroller} from 'vux'
import { setStore , getStore , removeStore } from '../common/LocalStorage'
function citysget(){
					/*console.log(getStore("city"),"get")*/
		    		return getStore("city")
					}
function citysset(cityname){
					setStore("city",cityname)
					/*console.log(getStore("city"),"set")*/
					/*this.$router.push('/home')*/
					}
function citysrem(){
					removeStore("city")
					/*console.log(getStore("city"))*/
					/*this.$router.push('/shop')*/
					}
	export default {
		name:'cityselect',
		components: {
			PopupPicker,
			Group,
			XInput,
			XButton,
			Cell,
			XHeader,
			Scroller
	    },
	    computed: {
    	
    		
    		
	    },
	    watch:{
	    	
	    },
	    methods: { 
	    	getHistory(){
	    		if(getStore("HistoryCity")){
	    			console.log(typeof(eval(getStore("HistoryCity"))))
	    			return eval(getStore("HistoryCity"))
	    		}else{
	    			return null
	    		}
    		},
		titleClick (){
					 citysrem() 
					} ,
		getName (cityvalue) {
				if(!citysget()){
					if(!value2name(cityvalue, ChinaAddressData).split(' ')[2]){
						return "请选择城市"
					}else{
						citysset(value2name(cityvalue, ChinaAddressData).split(' ')[2]);
			      		return citysget()
					}
				  
				}else{
						if(!value2name(cityvalue, ChinaAddressData).split(' ')[2]){
							return citysget()
						}else{
							citysset(value2name(cityvalue, ChinaAddressData).split(' ')[2]);
				            return citysget()
						}
						
					}
				
		    },

		    input1OnChange (val) {
		    	if(!val){
		    		return null
		    	}
		    	
		    	console.log("input="+val)
		    },
		    value1Click(value){
		    	//传递城市信息，拉取地址json
		    	 this.$http.get('/static/cityjson.json' ,{ cityGet:citysget() }).then(response => {
		    	 	this.someData= eval(response.bodyText)
				    this.provinces=[]
				    // console.log(typeof(value))
				    setStore("HistoryCity",null)
				    if(value!=""){
				    	this.someData.forEach((arry)=>{
				    		if( arry.pid.length==3 && arry.name===citysget() ){
				    			let id=arry.id
				    			this.someData.forEach((arry1)=>{
				    				if(arry1.pid == id && (arry1.name.indexOf(value)>=0 || arry1.add.indexOf(value)>=0)){
				    					this.provinces.push(arry1)
				    					
				    				}else{
				    					console.log("else1")
				    				}
				    			})

				    		}else{
				    			console.log("else")
				    		}
				    	})
				    	if(this.provinces[0]!= null){
							setStore("HistoryCity",this.provinces)
				    	}
				    }else{
				    	console.log("value is null")
				    }
				    
				    console.log(this.provinces)
				  }, response => {
				    // error callback
				    console.log("error-response")
				  });
		    },
	    },
	    
	    data () {
		    return {
		    	cityvalue: [],
		    	value1:'',
		    	leftOptions:{showBack: true,backText:"",preventGoBack:false},
		    	rightOptions:{showMore:false},
		    	addressData: ChinaAddressData,
		    	showPopupPicker: false,
		    	provinces:[],
		    }
		  }
	}
</script>
<style>
	.cityselect	{
		background-color: #fbf9fe;	
		font-family: "微软雅黑", Helvetica, Arial, sans-serif;
	}
	.cityselect	
	.cityhead
	{
		background-color: #007FFF;
	}
	.cityselect
	.citydiv1{
		background-color: #fff;
		/* padding-top: 1px; */
		/* margin-top: 10px; */
	}
	.cityselect
	.cityxgroup1{
		margin:5% 5% ;
	}

	.cityselect
	.cityxgroup1
	.group1input{
		height:16px;
		border: 1px solid #ccc;
		margin-bottom: 10px;
		margin-top: 10px;
	}
	.cityselect
	.cityxgroup1
	.group1button{
		height: 35px;
		text-align: center;
		margin-bottom: 10px;
		background-color:#007FFF;
	}
	.cityselect
	.cityxgroup1
	.group1button:active{
		background-color:#0072e5;
		color:#ccc;
	}
	
</style>