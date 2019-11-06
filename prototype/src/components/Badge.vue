<template>
  <section
    :class="[$options.name, $options.name + '--' + variant, micro ? $options.name + '--micro padding__left--xs padding__right--xs':'padding__left--s padding__right--s', 'border__all color__border--base-light']"
  >
    <section
      :class="[
      $options.name + '__label',
      micro ? 'type__size--xxs-s':'type__size--s-l'
    ]"
    >{{ label }}</section>
  </section>
</template>
<script>
export default {
  name: "Badge",
  props: {
    label: { default: "1" },
    micro: { default: true },
    variant: { default: "primary" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Badge";
</style>