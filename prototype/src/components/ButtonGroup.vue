<template>
  <section :class="$options.name">
    <slot/>
  </section>
</template>
<script>
export default {
  name: "ButtonGroup"
};
</script>
<style lang="scss">
@import "../../../styles/components/ButtonGroup";
</style>