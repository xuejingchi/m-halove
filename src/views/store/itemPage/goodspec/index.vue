<template src="./tpl.html"></template>

<script type="text/javascript">
    export default {
        props: {
            goodSpec: {
                type: Object
            }
        },
        data(){
                return {
                    currentIndex: 0
                }
            }
        ,
        components:{

        },
        methods:{
            changeSpec(index){
                this.goodSpec.itemSpecs[this.currentIndex].actived = 0;
                this.currentIndex = index;
                this.goodSpec.itemSpecs[index].actived = 1;
                this.$dispatch('changeSpec',index);

    //            this.goodsSkus = val.goodsInfoObject.goodsSkus;
    //            this.phoneColor = this.goodsSkus[index].pic;
    //            this.changeColor(index);
            }
        }
    }

</script>
