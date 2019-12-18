<template>
  <div id="app">
    <el-container style="background:#f1f1f1; ">
      <!-- 导航栏 -->
      <el-header class="fixed" style='padding: 0;-webkit-box-shadow: 0 0 10px 0px rgba(0,0,0,.1);' >
        <header-nav></header-nav>
      </el-header>
      <!-- Body -->
      <el-main  style ="padding: 70px 0px 0px; background: #f1f1f1;">
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
<!--    <el-footer style='padding: 0;background: black;-webkit-box-shadow: 0 0 10px 0px rgba(0,0,0,.1);height: 100px;width: 100%' >-->

<!--    </el-footer>-->
  </div>
</template>

<script>
    import Login from './components/Login'
    import MdEditor from "./components/MdEditor";
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    export default {
        name: 'App',
        components: {
            'MdEditor': MdEditor,
            'Login': Login,
            'Footer': Footer,
            headerNav: Header,

        },
        data() {
            return {}
        }
    }
</script>
<style>
  #app {

  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  text-align: center;
    background: #f1f1f1;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  }
  .fixed{
    position: fixed;
    top: 0px;
    z-index: 99;
    width: 100%;
  }
  html,body,#app,.el-container,.el-main{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }

</style>
