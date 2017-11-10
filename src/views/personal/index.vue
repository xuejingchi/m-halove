
<template>
    <router-view ></router-view>
</template>
<script type="text/javascript">
	 export default{
		 	data () {
					return {
					
					}
			},
      created(){
        this.$dispatch('isshowfooter', false);
      },
			ready () {
				
			},

			beforeDestroy(){
        this.$dispatch('isshowfooter', true);
      }

	 }
</script>


