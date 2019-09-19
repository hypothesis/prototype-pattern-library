<template>
  <section :class="[$options.name, active ? $options.name + '--active':'']">
    <slot />
    <Card :class="$options.name + '__wrap'">
      <slot name="menu" />
    </Card>
  </section>
</template>
<script>
import Card from "@/components/Card";
export default {
  name: "Menu",
  components: { Card },
  props: {
    active: { default: false }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Menu";
</style>