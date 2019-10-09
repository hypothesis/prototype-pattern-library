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
.status {
  left: 50%;
  position: fixed;
  top: rem(128);
  transform: translateX(-50%) !important;
  z-index: 500;
  @include breakpoint(xsl) {
    top: rem(72);
  }
}
.tip {
  background-color: var(--color__base-ghost);
  border: rem(1) solid var(--color__base-light);
  border-radius: var(--size__s);
  margin-left: rem(-8);
  margin-right: rem(-8);
  padding: var(--size__s);
  .Badge {
    margin-right: var(--size__s);
  }
}
</style>