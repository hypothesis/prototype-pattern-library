<template>
  <main :class="$options.name">
    <section class="margin__top--m type__align--center">
      <SegmentedController
        :options="['Components', 'Compositions', 'Helpers']"
        :selected="selected"
        @segmentSelected="$store.dispatch('updateSelected', $event)"
      />
    </section>
    <Components v-if="selected === 'Components'" />
    <Compositions v-if="selected === 'Compositions'" />
    <Helpers v-if="selected === 'Helpers'" />
  </main>
</template>
<script>
import SegmentedController from "@/components/presentational/SegmentedController";
import Components from "@/compositions/presentational/Components";
import Compositions from "@/compositions/presentational/Compositions";
import Helpers from "@/compositions/presentational/Helpers";
export default {
  name: "Home",
  components: { Components, Compositions, Helpers, SegmentedController },
  computed: {
    selected() {
      return this.$store.state.selected;
    }
  }
};
</script>
<style lang="scss">
.Home {
  article {
    margin-left: auto;
    margin-right: auto;
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
    > * + * {
      margin-top: var(--size__l);
    }
    > * + h2 {
      margin-top: var(--size__xl);
    }
    h2 {
      text-align: center;
      &:after {
        color: var(--color__brand);
        content: ".";
      }
    }
    h4 {
      color: var(--color__brand);
      + p {
        margin-top: var(--size__s);
      }
    }
  }
  .section {
    align-items: center;
    display: flex;
    @include breakpoint(xsl) {
      margin-left: rem(-24);
    }
    .Icon {
      color: var(--color__base-mid);
      margin-right: var(--size__s);
    }
    + p {
      margin-top: var(--size__m);
    }
  }
  .SegmentedController {
    @include breakpoint(xsl) {
      width: rem(360);
    }
  }
}
</style>