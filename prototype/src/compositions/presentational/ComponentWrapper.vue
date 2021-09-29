<template>
  <section :class="$options.name">
    <router-link class="section" :to="'#' + name.toLowerCase()">
      <Icon name="link" :size="16" />
      <h3 :id="name.toLowerCase()">{{ name }}</h3>
    </router-link>
    <slot />
    <footer v-if="getProps.length" :class="$options.name + '__props'">
      <h4>Props</h4>
      <section
        v-for="prop in getProps"
        :key="prop.name"
        :class="$options.name + '__props--wrapper'"
      >
        <p>
          <code>{{ prop.name }}</code>
        </p>
        <section :class="$options.name + '__props--group'">
          <h5>Default</h5>
          <p>
            <code class="color__bg--base-ghost color__type--base-mid">{{
              prop.default
            }}</code>
          </p>
        </section>
        <section v-if="prop.notes" :class="$options.name + '__props--group'">
          <h5>Notes</h5>
          <p v-html="prop.notes"></p>
        </section>
        <section v-if="prop.options" :class="$options.name + '__props--group'">
          <h5>Options</h5>
          <p>
            <code
              v-for="option in prop.options"
              :key="option"
              class="margin__right--xs"
              >{{ option }}</code
            >
          </p>
        </section>
        <section :class="$options.name + '__props--group'">
          <h5>Type</h5>
          <p>{{ prop.type }}</p>
        </section>
      </section>
    </footer>
  </section>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  name: "ComponentWrapper",
  components: { Icon },
  computed: {
    getProps() {
      let array = this.$store.state.components;
      if (this.array === "compositions") {
        array = this.$store.state.compositions;
      }
      let filtered = array.filter((item) => {
        return item.title === this.name;
      });
      let props = filtered.map((item) => item.props).flat();
      return props;
    },
  },
  props: {
    array: { default: "components" },
    name: { default: "Button" },
  },
};
</script>
<style lang="scss">
.ComponentWrapper {
  > * + * {
    margin-top: var(--size__m);
  }
  h5 {
    color: var(--color__base-mid);
    text-transform: uppercase;
  }
  &__props {
    &--wrapper {
      align-items: flex-start;
      border-bottom: rem(1) solid var(--color__base-ghost);
      display: flex;
      flex-wrap: wrap;
      margin-top: var(--size__m);
      padding-bottom: var(--size__m);
      p:first-child {
        flex-basis: 100%;
      }
      p {
        align-items: center;
        display: inline-flex;
        flex-wrap: wrap;
      }
      a {
        color: var(--color__brand);
        text-decoration: underline;
        &:before,
        &:after {
          content: "";
          display: inline-block;
          width: var(--size__xs);
        }
      }
    }
    &--group {
      flex: 1 0 rem(320);
      margin-top: var(--size__m);
      > * + * {
        margin-top: var(--size__s);
      }
      p code {
        background-color: var(--color__base-ghost);
        color: var(--color__base);
      }
    }
  }
}
</style>
