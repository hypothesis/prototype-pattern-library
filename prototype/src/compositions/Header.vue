<template>
  <header :class="$options.name">
    <section :class="$options.name + '__inner'">
      <router-link to="/" :class="$options.name + '__logo'">
        <Logo :size="32" />
        <h3>Pattern Library</h3>
      </router-link>
      <section :class="$options.name + '__toggles'">
        <button
          v-if="$route.name === 'Home'"
          :class="$options.name + '__toggle'"
          @click="toggleTheme"
        >
          <Icon name="contrast" />
        </button>
        <button
          v-if="$route.name === 'Home'"
          :class="$options.name + '__toggle'"
          @click="navActive = !navActive"
        >
          <Icon :name="navActive ? 'cancel':'list'" />
        </button>
      </section>
      <nav
        v-if="navActive && $route.name === 'Home'"
        :class="[$options.name + '__nav', navActive ? $options.name + '__nav--active':'']"
      >
        <section v-if="selected === 'Components'">
          <h4>Components</h4>
          <router-link
            v-for="component in $store.state.components"
            :key="component.title"
            :to="'#' + component.title.toLowerCase()"
          >{{ component.title }}</router-link>
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
            <router-link to="#padding">Padding</router-link>
          </section>
        </section>
      </nav>
    </section>
  </header>
</template>
<script>
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
export default {
  name: "Header",
  components: { Icon, Logo },
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
      colors: [],
      navActive: false
    };
  },
  methods: {
    checkTheme() {
      let root = document.getElementsByTagName("html")[0];
      root.setAttribute("data-theme", this.theme);
    },
    generateColors() {
      this.colors = [];
      let colors = [
        "base",
        "base-mid",
        "base-light",
        "base-ghost",
        "brand",
        "contrast"
      ];
      colors.forEach((color, i) => {
        let bg = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--color__contrast")
          .replace("#", "");
        let hex = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--color__" + color)
          .replace("#", "");
        fetch(
          "https://webaim.org/resources/contrastchecker/?fcolor=" +
            bg +
            "&bcolor=" +
            hex +
            "&api"
        ).then(response =>
          response.json().then(value =>
            this.colors.push({
              index: i,
              name: color,
              pass: value.AA,
              ratio: value.ratio
            })
          )
        );
        this.$store.dispatch("updateColors", this.colors);
      });
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
      this.generateColors();
    }
  },
  mounted() {
    this.checkTheme();
    this.generateColors();
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
  z-index: 100;
  &__inner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: rem(960);
    padding: var(--size__l);
    width: 100%;
  }
  &__logo {
    align-items: center;
    color: var(--color__contrast);
    display: inline-flex;
    > * + * {
      margin-left: var(--size__m);
    }
  }
  &__toggles {
    > * + * {
      margin-left: var(--size__s);
    }
  }
  &__toggle {
    @include smooth;
    align-items: center;
    background-color: var(--color__contrast);
    border-radius: 50%;
    color: var(--color__brand);
    display: inline-flex;
    flex-shrink: 0;
    height: var(--size__l);
    justify-content: center;
    transform-origin: center;
    width: var(--size__l);
    &:focus,
    &:hover {
      transform: scale(1.0625);
    }
  }
  &__nav {
    background-color: var(--color__contrast);
    border-left: rem(1) solid var(--color__base-ghost);
    bottom: 0;
    padding: var(--size__m);
    overflow: hidden;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: rem(96);
    transform: translateX(100%);
    width: rem(240);
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