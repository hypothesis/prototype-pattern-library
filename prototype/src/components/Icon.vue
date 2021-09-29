<template>
  <svg
    :class="[$options.name, $options.name + '--' + name]"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
  >
    <g v-for="icon in filteredIcon" :key="icon.name" fill-rule="evenodd">
      <path fill="currentColor" :d="icon.path" />
      <rect fill="none" x="0" y="0" :width="size" :height="size" />
    </g>
  </svg>
</template>
<script>
import icons from "./icons/icons.json";
export default {
  name: "Icon",
  computed: {
    filteredIcon() {
      return this.icons.filter((icon) => {
        return icon.name === this.name;
      });
    },
  },
  data() {
    return {
      icons: icons,
    };
  },
  props: {
    name: { default: "arrow-down" },
    size: { default: 14 },
  },
};
</script>
<style lang="scss">
.Icon {
  flex-shrink: 0;
  transition: stroke 0.375s ease-in;
}
</style>
