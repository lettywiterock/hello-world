<template>
  <div class="hello">
    <div class="bodyone">
      <h1>{{ msg }}</h1>
      <h2>Hello.vue1111111111</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
      <group title="Hello group">
        <cell title="Hello Vux" value="Hello Cool" link="/"></cell>
      </group>
    </div>
    
  </div>
</template>

<script>
import { Group, Cell, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'hello',
  components: {
    Group,
    Cell,
    Tabbar, 
    TabbarItem
  },
  data () {
    return {
      msg: 'Hello.js',
      dot_home:'null',
      dot_shop:'null',
      dot_use:'null',
      badge_shop:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bodyone h1, h2 {
  font-weight: normal;
}

.bodyone ul {
  list-style-type: none;
  padding: 0;
}

.bodyone li {
  display: inline-block;
  margin: 0 10px;
}

.bodyone a {
  color: #42b983;
}
.weui-tabbar__item span {
  color:red;
}
.weui-bar__item_on  span
{
  color:#000000;
}

</style>
