<template>
  <div class="hello">
    <div>FirrstDemo</div>
    <section>
      <p>
        1.路由router 
        2.网络请求
        3.初始化JS
        4.elementUI
        5.Vuex 存储
        6.开发
        7.适配移动端
        8.界面UICS 
      </p>
      <div @click="gotext">跳转到learn测试</div>
      <div @click="goreport1">跳转到report1</div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
       
    }
  },
  methods:{
      gotext(){
        this.$router.push('/test')
      },
      goreport1(){
         this.$router.push('/inspectReport')
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
