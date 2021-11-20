<template>
  <div class="box"></div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      
    }
  },
  mounted () {
    console.log(this.$style)
    console.log(process.env)
    let fn=()=>{
      console.log('ie兼容')
    }
    fn()
  }
};
</script>
<style scoped lang="scss">
.box{
  width: 100px;
  height: 100px;
  background-color: $color;
}
</style>
