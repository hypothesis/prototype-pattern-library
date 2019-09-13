<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/compositions/Header";
export default {
  name: "App",
  components: { Header }
};
</script>
<style lang="scss">
@import "assets/css/reset";
@import "assets/css/base";
@import "assets/css/helpers";
main {
  padding-top: rem(96);
}
</style>