<template>
  <section :class="$options.name">
    <slot />
  </section>
</template>
<script>
export default {
  name: "Card"
};
</script>
<style lang="scss">
@import "../../../styles/components/Card";
</style>