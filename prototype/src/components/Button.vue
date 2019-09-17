<template>
  <button
    :class="[
    $options.name,
    $options.name + '--' + variant,
    reverse ? $options.name + '--reversed':''
  ]"
  >
    <section v-if="icon" :class="$options.name + '__icon'">
      <Icon :name="icon" :size="iconSize" />
    </section>
    <section
      v-if="label"
      :class="[
      $options.name + '__label',
      'type__size--m-l'
    ]"
    >{{ label }}</section>
    <section v-if="dropdown" :class="$options.name + '__dropdown'">
      <Icon name="caret-down" :size="12" :width="3" />
    </section>
  </button>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  name: "Button",
  components: { Icon },
  props: {
    dropdown: { default: false },
    icon: { default: false },
    iconSize: { default: 14 },
    label: { default: "Button label" },
    reverse: { default: false },
    variant: { default: "primary" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Button";
</style>