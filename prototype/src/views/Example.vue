<template>
  <main v-if="path" :class="$options.name">
    <Head :title="path + ' • Example • Hypothes.is'" />
    <AppFrame
      v-if="path === 'AppFrame'"
      height="100vh"
      :style="{ position: 'absolute', right: 0 }"
    >
      <Annotation
        :tags="[
          { label: 'Cool tag title', path: '#coolurl' },
          { label: 'Another great tag', path: '#coolurl' },
          {
            label: 'A reallyl long, but equally important tag',
            path: '#coolurl'
          }
        ]"
      />
    </AppFrame>
    <LMSCredentials v-if="path === 'LMSCredentials'" />
    <LMSGrader v-if="path === 'LMSGrader'" />
    <LMSSelectFile v-if="path === 'LMSSelectFile'" />
    <Login v-if="path === 'Login'" />
    <Search v-if="path === 'Search'" />
    <Tagcloud v-if="path === 'Tagcloud'" />
    <AnnotationVariations v-if="path === 'AnnotationVariations'" />
  </main>
  <main v-else :class="$options.name">
    <section :class="[$options.name + '__inner', 'oomph__v--m']">
      <h2>Various UI composition examples</h2>
      <router-link
        v-for="(example, index) in examples"
        :key="index"
        :to="'/examples/' + example"
        :class="$options.name + '__item'"
      >
        <Card>
          <h3>{{ example }}</h3>
          <Icon name="arrow-right" :size="16" />
        </Card>
      </router-link>
    </section>
  </main>
</template>
<script>
import Annotation from "@/compositions/Annotation";
import AppFrame from "@/compositions/AppFrame";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import AnnotationVariations from "@/examples/AnnotationVariations";
import LMSCredentials from "@/examples/LMSCredentials";
import LMSGrader from "@/examples/LMSGrader";
import LMSSelectFile from "@/examples/LMSSelectFile";
import Login from "@/examples/Login";
import Search from "@/examples/Search";
import Tagcloud from "@/examples/Tagcloud";
export default {
  name: "Example",
  components: {
    Annotation,
    AnnotationVariations,
    AppFrame,
    Card,
    Icon,
    LMSCredentials,
    LMSGrader,
    LMSSelectFile,
    Login,
    Search,
    Tagcloud
  },
  computed: {
    path() {
      return this.$route.params.path;
    }
  },
  data() {
    return {
      examples: [
        "AppFrame",
        "LMSCredentials",
        "LMSGrader",
        "LMSSelectFile",
        "Login",
        "Search",
        "Tagcloud",
        "AnnotationVariations"
      ]
    };
  }
};
</script>
<style lang="scss">
.Example {
  padding-top: 0;
  &__inner {
    margin-left: auto;
    margin-right: auto;
    margin-top: rem(72);
    max-width: rem(360);
    padding: var(--size__m);
    width: 100%;
    @include breakpoint(xsl) {
      max-width: rem(640);
    }
    @include breakpoint(m) {
      max-width: rem(960);
      padding: var(--size__l);
    }
  }
  &__item {
    @include smooth;
    display: block;
    h3 {
      @include smooth;
    }
    .Card {
      align-items: center;
      display: flex;
      justify-content: space-between;
      .Icon {
        color: var(--color__base-mid);
        flex-shrink: 0;
      }
    }
    &:focus,
    &:hover {
      transform: scale(1.0125);
      h3 {
        color: var(--color__brand);
      }
    }
  }
}
</style>
