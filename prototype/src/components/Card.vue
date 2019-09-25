<template>
  <section
    :class="[$options.name, padding ? 'padding__all--m':'', 'border__all color__bg--contrast color__border--base-ghost']"
  >
    <slot />
  </section>
</template>
<script>
export default {
  name: "Card",
  props: {
    padding: { default: true }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Card";
</style>