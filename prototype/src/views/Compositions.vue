<template>
  <Library>
    <Head title="Compositions • Pattern Library • Hypothes.is" />
    <article :class="$options.name">
      <ComponentWrapper array="compositions" name="Annotation">
        <Annotation
          :tags="[{ label: 'Cool tag title', path: '#coolurl'}, { label: 'Another great tag', path: '#coolurl'}, { label: 'A reallyl long, but equally important tag', path: '#coolurl'}]"
        />
      </ComponentWrapper>
      <ComponentWrapper array="compositions" name="AppFrame">
        <AppFrame height="40rem">
          <Annotation />
        </AppFrame>
      </ComponentWrapper>
      <ComponentWrapper array="compositions" name="SearchWeb">
        <SearchWeb />
      </ComponentWrapper>
      <ComponentWrapper array="compositions" name="SearchItemWeb">
        <SearchItemWeb>
          <Annotation :edited="false" role="public" />
        </SearchItemWeb>
      </ComponentWrapper>
    </article>
  </Library>
</template>
<script>
import Annotation from "@/compositions/Annotation";
import AppFrame from "@/compositions/AppFrame";
import ComponentWrapper from "@/compositions/presentational/ComponentWrapper";
import Library from "@/compositions/presentational/Library";
import SearchWeb from "@/compositions/SearchWeb";
import SearchItemWeb from "@/compositions/SearchItemWeb";
export default {
  name: "Compositions",
  components: {
    Annotation,
    AppFrame,
    ComponentWrapper,
    Library,
    SearchWeb,
    SearchItemWeb
  }
};
</script>