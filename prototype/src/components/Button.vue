<template>
  <button
    :class="[
    $options.name,
    $options.name + '--' + variant,
    reverse ? $options.name + '--reversed':''
  ]"
    :aria-label="label ? '':'Button with ' + icon + ' action'"
  >
    <section v-if="icon" :class="[$options.name + '__icon', reverse ? 'margin__left--s':'']">
      <Icon :name="icon" :size="iconSize" />
    </section>
    <section
      v-if="label"
      :class="[
      $options.name + '__label',
      'type__size--s-l'
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