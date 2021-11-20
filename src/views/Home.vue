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
    console.log(process.env)
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
