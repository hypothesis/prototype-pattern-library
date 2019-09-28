<template>
  <Library>
    <Head title="Compositions • Pattern Library • Hypothes.is" />
    <article :class="$options.name">
      <ComponentWrapper array="compositions" name="AppFrame">
        <AppFrame height="100%">
          <Annotation />
        </AppFrame>
      </ComponentWrapper>
      <ComponentWrapper array="compositions" name="Annotation">
        <Annotation :tags="['Cool tag 1', 'Another great tag', 'A really long tag']" />
      </ComponentWrapper>
    </article>
  </Library>
</template>
<script>
import Annotation from "@/compositions/Annotation";
import AppFrame from "@/compositions/AppFrame";
import ComponentWrapper from "@/compositions/presentational/ComponentWrapper";
import Library from "@/compositions/presentational/Library";
export default {
  name: "Compositions",
  components: {
    Annotation,
    AppFrame,
    ComponentWrapper,
    Library
  }
};
</script>