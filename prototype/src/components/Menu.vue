<template>
  <section :class="[$options.name, active ? $options.name + '--active' : '']">
    <slot />
    <Card
      :padding="false"
      :class="[
        $options.name + '__wrap',
        $options.name + '__wrap--' + direction,
        reverse ? $options.name + '__wrap--up' : $options.name + '__wrap--down'
      ]"
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
    direction: { default: "center" },
    reverse: { default: false }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Menu";
</style>
