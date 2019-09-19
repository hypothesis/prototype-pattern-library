<template>
  <section
    :class="[$options.name, $options.name + '--' + variant, 'padding__left--s padding__right--s']"
  >
    <section :class="[
      $options.name + '__label',
      'type__size--xs-s'
    ]">{{ label }}</section>
  </section>
</template>
<script>
export default {
  name: "Badge",
  props: {
    label: { default: "1" },
    variant: { default: "primary" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Badge";
</style>