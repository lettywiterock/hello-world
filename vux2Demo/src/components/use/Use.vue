<template>
	<div class="use">
		<h1>USE</h1>
		<AppFooter :select_home=select_home :select_shop=select_shop :select_use=select_use :dot_home=dot_home  :dot_use=dot_use :badge_shop=badge_shop></AppFooter>
	</div>
</template>
<script>
	import AppFooter from '@/components/common/AppFooter.vue'
	export default {
		name:'use',
		components: {
		    AppFooter
	    },
	    data () {
		    return {
		    	select_home:false,
		    	select_shop:false,
		    	select_use:true,
		    	dot_home:false,
		    	dot_use:false,
		    	badge_shop:'3'
		    }
		  }
	}
</script>