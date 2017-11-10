<template src="./tpl.html"></template>

<script type="text/javascript">
  import "./style.less"
  import HomeService from 'SERVICE/home'
  import Util from 'UTIL'

   export default{

      data(){
        return{
          list: [],
        }
      },

      ready () {
        this.$dispatch('isshowfooter', true);
        this.getData();
        Util.statistics();
      },

      methods:{
        getData(){
          HomeService
          .fetchData('goodsList',{},'get')
          .then((res) => {
            this.list = res.list;
          });
        }
      },
      detached(){
        this.$dispatch('isshowfooter', false);
      },
   }
</script>
