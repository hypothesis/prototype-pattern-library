<template>
  <svg
    :class="[
      $options.name,
      $options.name + '--' + name
    ]"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
  >
    <g v-for="icon in filteredIcon" :key="icon.name" fill-rule="evenodd">
      <rect fill="none" stroke="none" x="0" y="0" :width="size" :height="size" />
      <path
        v-if="icon.stroke"
        fill="none"
        stroke="currentColor"
        :stroke-linecap="rounded ? 'round':'square'"
        :stroke-linejoin="rounded ? 'round':'miter'"
        :stroke-width="width"
        :d="icon.stroke"
      />
      <path v-else fill="currentColor" stroke="none" :d="icon.path" />
    </g>
  </svg>
</template>
<script>
export default {
  name: "Icon",
  computed: {
    filteredIcon() {
      return this.icons.filter(icon => {
        return icon.name === this.name;
      });
    },
    rounded() {
      return this.$store.state.round;
    }
  },
  data() {
    return {
      icons: this.$store.state.icons
    };
  },
  props: {
    name: { default: "arrow-down" },
    size: { default: 14 },
    width: { default: 2 }
  }
};
</script>
<style lang="scss">
.Icon {
  flex-shrink: 0;
  stroke: currentColor;
  transition: stroke 0.375s ease-in;
}
</style>