<template>
  <div id="app">
    <Header v-if="$route.name != 'Example'" />
    <main :class="$options.name">
      <section v-if="$route.name != 'Error'" :class="[$options.name + '__nav','type__align--center']">
        <SegmentedController
          :options="['Components', 'Compositions', 'Helpers']"
          @segmentSelected="updateSelected"
        />
      </section>
      <section :class="$options.name + '__content'">
        <router-view />
      </section>
    </main>
  </div>
</template>
<script>
import SegmentedController from "@/components/presentational/SegmentedController";
import Header from "@/compositions/presentational/Header";
export default {
  name: "App",
  components: { Header, SegmentedController },
  methods: {
    updateSelected(value) {
      this.$store.dispatch("updateSelected", value);
      if (value === "Components") {
        this.$router.push("/");
      } else {
        this.$router.push(value.toLowerCase());
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../styles/reset";
@import "../../styles/base";
@import "../../styles/helpers";
.App {
  padding-top: rem(72);
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  &__nav {
    flex-shrink: 0;
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
    flex: 1 1;
    margin-left: auto;
    margin-right: auto;
    max-width: rem(360);
    overflow: hidden;
    overflow-y: auto;
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