<template>
  <div id="app">
    <Menu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Menu from "./components/template/Menu";
import Footer from "./components/template/Footer";

export default {
  name: "app",
  components: {
    Menu,
    Footer,
  }
};
</script>

<style>
</style>
