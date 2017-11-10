<template src="./tpl.html"></template>
<script type="text/javascript">
  import Util from 'UTIL/index'
  export default{
    props:['title'],

    data(){
      return{

      }
    },

    methods:{
      back(){
        Util.historyBack(this.$router);
      }
    }
  }
</script>
