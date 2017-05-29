<template>
	<tabbar class="tabone" >
      <tabbar-item  :selected="select_home" :show-dot="dot_home" link="home">
        <i slot="icon" class="iconfont icon-home" style="color:#707070"></i>
        <i slot="icon-active" class="iconfont icon-home" style="color:#000000"></i>
        <span slot="label" class="text" >home</span>
      </tabbar-item>
      
      <tabbar-item :selected="select_shop" :badge="badge_shop"  link="shop">
        <i slot="icon" class="iconfont icon-iconshop" style="color:#707070"></i>
        <i slot="icon-active" class="iconfont icon-iconshop" style="color:#000000"></i>
        <span slot="label" class="text" >shop</span>
      </tabbar-item>
      
      <tabbar-item :selected="select_use" :show-dot="dot_use" link="use">
        <i slot="icon" class="iconfont icon-Use" style="color:#707070"></i>
        <i slot="icon-active" class="iconfont icon-Use" style="color:#000000"></i>
        <span slot="label" class="text" >use</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
	name:'AppFooter',
 	components: {
	    Tabbar, 
	    TabbarItem
  },
  data () {
    return {
    }
  },
  props:['select_home','select_shop','select_use','dot_home','dot_use','badge_shop']
}
</script>
<style>
.weui-tabbar__item .text {
  color:#707070;
}
.weui-bar__item_on  .text {
  color:#000000;
}
@import '../../font/iconfont.css';
</style>