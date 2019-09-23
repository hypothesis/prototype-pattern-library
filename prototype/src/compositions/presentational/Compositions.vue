<template>
  <article :class="$options.name">
    <ComponentWrapper array="compositions" name="AppFrame">
      <AppFrame>
        <Annotation />
      </AppFrame>
    </ComponentWrapper>
    <ComponentWrapper array="compositions" name="Annotation">
      <Annotation />
    </ComponentWrapper>
  </article>
</template>
<script>
import Annotation from "@/compositions/Annotation";
import AppFrame from "@/compositions/AppFrame";
import ComponentWrapper from "@/compositions/presentational/ComponentWrapper";
export default {
  name: "Compositions",
  components: {
    Annotation,
    AppFrame,
    ComponentWrapper
  }
};
</script>
<style lang="scss">
</style>