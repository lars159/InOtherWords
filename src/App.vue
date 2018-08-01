<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
 
<style lang="scss">
 
   @import 'assets/main.scss';
  h1 {
      text-align: center;
  }
  #app {
     margin-top: 30px;
  }
  
</style>
