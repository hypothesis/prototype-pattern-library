<template>
  <main :class="$options.name">
    <section :class="[$options.name + '__nav', 'type__align--center']">
      <SegmentedController />
    </section>
    <section :class="$options.name + '__content'">
      <slot />
    </section>
  </main>
</template>
<script>
import SegmentedController from "@/components/presentational/SegmentedController";
export default {
  name: "Library",
  components: { SegmentedController }
};
</script>
<style lang="scss">
.Library {
  &__nav {
    padding: var(--size__m) 0;
    @include breakpoint(m) {
      padding: var(--size__l) 0;
    }
    .SegmentedController {
      @include breakpoint(xsl) {
        width: rem(360);
      }
    }
  }
  &__content {
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
    article {
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
  }
}
</style>