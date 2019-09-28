<template>
  <section :class="$options.name">
    <button
      v-for="item in options"
      :key="item"
      :class="[
        $options.name + '__item',
        currentlySelected === item ? $options.name + '__item--selected':'',
        'padding__left--s padding__right--s']"
      @click="updateSelected(item)"
    >
      <span :class="[$options.name + '__item--label', 'type__size--m-l']">{{ item }}</span>
    </button>
  </section>
</template>
<script>
export default {
  name: "SegmentedController",
  computed: {
    currentlySelected() {
      return this.$store.state.selected;
    }
  },
  data() {
    return {
      options: ["Components", "Compositions", "Helpers"]
    };
  },
  methods: {
    updateSelected(item) {
      this.$store.dispatch("updateSelected", item);
      if (item === "Components") {
        this.$router.push("/");
      } else {
        this.$router.push("/" + item.toLowerCase());
      }
    }
  }
};
</script>
<style lang="scss">
.SegmentedController {
  align-items: stretch;
  background-color: var(--color__contrast);
  border-radius: rem(20);
  display: inline-flex;
  [data-theme="dark"] & {
    background-color: var(--color__contrast-extra);
  }
  &__item {
    align-items: center;
    border: rem(1) solid var(--color__base-light);
    border-right-width: 0;
    color: var(--color__base-mid);
    display: inline-flex;
    flex: 1 0;
    height: rem(40);
    justify-content: center;
    &:focus,
    &:hover {
      background-color: var(--color__base-ghost);
    }
    &:first-child {
      border-bottom-left-radius: rem(20);
      border-top-left-radius: rem(20);
    }
    &:last-child {
      border-bottom-right-radius: rem(20);
      border-right-width: rem(1);
      border-top-right-radius: rem(20);
    }
    &--selected {
      background-color: var(--color__brand);
      border-color: var(--color__brand);
      box-shadow: 0 rem(2) rem(4) rem(-2) rgba(black, 0.1),
        0 rem(8) rem(16) rem(-8) rgba(black, 0.25);
      color: white;
      &:focus,
      &:hover {
        background-color: var(--color__brand);
      }
    }
    &__label {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>