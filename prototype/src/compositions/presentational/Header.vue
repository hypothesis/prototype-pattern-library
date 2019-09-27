<template>
  <header :class="$options.name">
    <section :class="[$options.name + '__inner', 'padding__all--m']">
      <router-link to="/" :class="$options.name + '__logo'">
        <Logo :size="32" />
        <h3>Pattern Library</h3>
      </router-link>
      <section :class="$options.name + '__toggles'">
        <Button
          v-if="$route.name != 'Example'"
          icon="contrast"
          :label="false"
          variant="secondary"
          @click.native="toggleTheme"
        />
        <Button
          v-if="$route.name != 'Example'"
          :icon="navActive ? 'cancel':'list'"
          :label="false"
          variant="secondary"
          @click.native="navActive = !navActive"
        />
      </section>
      <nav
        v-if="navActive"
        :class="[$options.name + '__nav', navActive ? $options.name + '__nav--active':'', 'padding__all--m']"
      >
        <section v-if="selected === 'Components'">
          <h4>Components</h4>
          <router-link
            v-for="component in $store.state.components"
            :key="component.title"
            :to="'#' + component.title.toLowerCase()"
          >{{ component.title }}</router-link>
        </section>
        <section v-if="selected === 'Compositions'">
          <h4>Compositions</h4>
          <router-link
            v-for="composition in $store.state.compositions"
            :key="composition.title"
            :to="'#' + composition.title.toLowerCase()"
          >{{ composition.title }}</router-link>
        </section>
        <section v-if="selected === 'Helpers'">
          <h4>Helpers</h4>
          <h5>Color</h5>
          <section :class="$options.name + '__nav--indent'">
            <router-link to="#color-base-palette">Base palette</router-link>
            <router-link to="#color-helper-classes">Helper classes</router-link>
          </section>
          <h5>Type</h5>
          <section :class="$options.name + '__nav--indent'">
            <router-link to="#type-family">Family</router-link>
            <router-link to="#type-size">Size</router-link>
            <router-link to="#type-alignment">Alignment</router-link>
          </section>
          <h5>Position</h5>
          <section :class="$options.name + '__nav--indent'">
            <router-link to="#margin">Margin</router-link>
            <router-link to="#oomph">Oomph</router-link>
            <router-link to="#padding">Padding</router-link>
          </section>
          <h5>Utility</h5>
          <section :class="$options.name + '__nav--indent'">
            <router-link to="#border">Border</router-link>
          </section>
        </section>
      </nav>
    </section>
  </header>
</template>
<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Logo from "@/components/presentational/Logo";
export default {
  name: "Header",
  components: { Button, Icon, Logo },
  computed: {
    selected() {
      return this.$store.state.selected;
    },
    theme() {
      return this.$store.state.theme;
    }
  },
  data() {
    return {
      navActive: false
    };
  },
  methods: {
    checkTheme() {
      let root = document.getElementsByTagName("html")[0];
      root.setAttribute("data-theme", this.theme);
    },
    toggleTheme() {
      let root = document.getElementsByTagName("html")[0];
      if (this.theme === "light") {
        this.$store.dispatch("themeSwitch", "dark");
        root.setAttribute("data-theme", "dark");
      } else {
        this.$store.dispatch("themeSwitch", "light");
        root.setAttribute("data-theme", "light");
      }
    }
  },
  mounted() {
    this.checkTheme();
  },
  props: {
    section: { default: "helpers" }
  }
};
</script>
<style lang="scss">
.Header {
  background-color: var(--color__brand);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 500;
  &__inner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: rem(360);
    width: 100%;
    @include breakpoint(xsl) {
      max-width: rem(640);
    }
    @include breakpoint(m) {
      max-width: rem(960);
    }
  }
  &__logo {
    align-items: center;
    color: white;
    display: inline-flex;
    > * + * {
      margin-left: var(--size__m);
    }
  }
  &__toggles {
    > * + * {
      margin-left: var(--size__s);
    }
    .Button {
      border: none;
      color: var(--color__brand);
      border-radius: 50%;
      &:focus,
      &:hover {
        transform: scale(1.0625);
      }
    }
  }
  &__nav {
    background-color: var(--color__contrast);
    border-left: rem(1) solid var(--color__base-ghost);
    bottom: 0;
    overflow: hidden;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: rem(72);
    transform: translateX(100%);
    width: rem(240);
    [data-theme="dark"] & {
      background-color: var(--color__contrast-extra);
    }
    &--active {
      box-shadow: rem(-16) 0 rem(32) rem(-16) rgba(black, 0.125);
      transform: translateX(0);
    }
    > section > * + * {
      margin-top: var(--size__s);
    }
    &--indent {
      border-left: rem(1) solid var(--color__base-ghost);
      margin-top: var(--size__m);
      padding-left: var(--size__m);
    }
    h5 {
      color: var(--color__base-mid);
      margin-top: var(--size__m);
      text-transform: uppercase;
    }
    a {
      color: var(--color__brand);
      font-size: var(--typeSize__m);
      line-height: var(--typeLineheight__l);
      display: block;
    }
  }
}
</style>