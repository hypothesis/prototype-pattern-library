<template>
  <section :class="$options.name">
    <button
      v-for="item in options"
      :key="item"
      :class="[
        $options.name + '__item',
        currentlySelected === item ? $options.name + '__item--selected' : ''
      ]"
      @click="updateSelected(item)"
    >
      <section
        :class="[
          $options.name + '__item--label',
          'padding__left--s padding__right--s type__align--center type__size--s-m'
        ]"
      >
        <strong>{{ item }}</strong>
      </section>
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
  background-color: var(--color__base-ghost);
  border-radius: var(--size__s);
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
  max-width: rem(480);
  width: 100%;
  [data-theme="dark"] & {
    background-color: var(--color__contrast-extra);
  }
  &__item {
    @include smooth;
    align-items: center;
    color: var(--color__base-mid);
    display: inline-flex;
    flex: 1 0;
    height: rem(40);
    justify-content: center;
    &:focus,
    &:hover {
      color: var(--color__base);
    }
    &:first-child {
      border-bottom-left-radius: var(--size__s);
      border-top-left-radius: var(--size__s);
      .SegmentedController__item--label {
        border-left: none;
      }
    }
    &:last-child {
      border-bottom-right-radius: var(--size__s);
      border-top-right-radius: var(--size__s);
    }
    &--selected {
      background-color: var(--color__contrast);
      border-radius: var(--size__s);
      box-shadow: 0 rem(2) rem(4) rem(-2) rgba(black, 0.1),
        0 rem(8) rem(16) rem(-8) rgba(black, 0.25);
      color: var(--color__base);
      &:focus,
      &:hover {
        color: var(--color__brand);
      }
      .SegmentedController__item--label,
      + .SegmentedController__item .SegmentedController__item--label {
        border-left: none;
      }
    }
    &--label {
      @include smooth;
      border-left: rem(1) solid var(--color__base-light);
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
  }
}
</style>
