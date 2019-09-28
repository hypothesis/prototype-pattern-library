<template>
  <main :class="$options.name">
    <Head :title="path + ' • Example • Hypothes.is'" />
    <AppFrame v-if="path === 'AppFrame'" height="100vh" :style="{ position: 'absolute', right: 0 }">
      <Annotation :tags="['Cool tag 1', 'Another great tag', 'A really long tag']" />
    </AppFrame>
    <LMS v-if="path === 'LMS'"/>
    <Login v-if="path === 'Login'"/>
  </main>
</template>
<script>
import Annotation from "@/compositions/Annotation";
import AppFrame from "@/compositions/AppFrame";
import LMS from "@/examples/LMS";
import Login from "@/examples/Login";
export default {
  name: "Example",
  components: { Annotation, AppFrame, LMS, Login },
  computed: {
    path() {
      return this.$route.params.path;
    }
  }
};
</script>
<style lang="scss">
.Example {
  padding-top: 0;
}
</style>