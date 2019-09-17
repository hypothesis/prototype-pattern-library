<template>
  <main :class="$options.name">
    <SegmentedController
      :options="['Components', 'Helpers']"
      :selected="selected"
      @segmentSelected="$store.dispatch('updateSelected', $event)"
    />
    <Components v-if="selected === 'Components'" />
    <Helpers v-if="selected === 'Helpers'" />
  </main>
</template>
<script>
import SegmentedController from "@/components/SegmentedController";
import Components from "@/compositions/Components";
import Helpers from "@/compositions/Helpers";
export default {
  name: "Home",
  components: { Components, Helpers, SegmentedController },
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
    max-width: rem(960);
    padding: var(--size__l);
    width: 100%;
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
    margin-left: auto;
    margin-right: auto;
    margin-top: var(--size__l);
    max-width: rem(320);
  }
}
</style>