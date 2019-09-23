<template>
  <section :class="[$options.name, active ? $options.name + '--active':'']">
    <slot />
    <Card
      :padding="false"
      :class="[$options.name + '__wrap', $options.name + '__wrap--' + direction]"
    >
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
    active: { default: false },
    direction: { default: "center" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Menu";
</style>