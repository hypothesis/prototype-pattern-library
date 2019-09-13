<template>
  <section :class="$options.name">
    <button
      v-for="item in options"
      :key="item"
      :class="[
        $options.name + '__item',
        currentlySelected === item ? 'color__bg--base-mid color__border--base-mid color__type--contrast':'color__bg--contrast color__border--base-light color__type--base-mid']"
      @click="updateSelected(item)"
    >
      <span :class="[$options.name + '__item--label', 'type__size--m-l']">{{ item }}</span>
    </button>
  </section>
</template>
<script>
export default {
  name: "SegmentedController",
  data() {
    return {
      currentlySelected: this.selected
    };
  },
  methods: {
    updateSelected(item) {
      this.currentlySelected = item;
      this.$emit("segmentSelected", item);
    }
  },
  props: {
    options: {
      default: () => ["Option 1", "Option 2", "Option 3"],
      type: Array
    },
    selected: { default: "Option 1" }
  }
};
</script>
<style lang="scss">
.SegmentedController {
  align-items: stretch;
  display: flex;
  &__item {
    align-items: center;
    border-right-width: 0;
    border-style: solid;
    border-width: rem(1);
    display: inline-flex;
    flex: 1 0 rem(160);
    height: rem(40);
    justify-content: center;
    &:first-child {
      border-bottom-left-radius: var(--size__xs);
      border-top-left-radius: var(--size__xs);
    }
    &:last-child {
      border-bottom-right-radius: var(--size__xs);
      border-right-width: rem(1);
      border-top-right-radius: var(--size__xs);
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