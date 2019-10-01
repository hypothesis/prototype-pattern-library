<template>
  <div id="app">
    <Header v-if="$route.name != 'ExampleActual'" />
    <router-view />
  </div>
</template>
<script>
import SegmentedController from "@/components/presentational/SegmentedController";
import Header from "@/compositions/presentational/Header";
export default {
  name: "App",
  components: { Header }
};
</script>
<style lang="scss">
@import "../../styles/reset";
@import "../../styles/base";
@import "../../styles/helpers";
main {
  padding-top: rem(112);
  @include breakpoint(xsl) {
    padding-top: rem(72);
  }
}
</style>