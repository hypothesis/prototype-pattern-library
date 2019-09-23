<template>
  <section :class="[$options.name, padding ? 'padding__all--m':'']">
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