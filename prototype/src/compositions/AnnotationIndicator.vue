<template>
  <section :class="$options.name">
    <slot />
    <section
      :class="[
        $options.name + '__item',
        'border__all color__bg--base-ghost color__border--base-light color__type--base-mid'
      ]"
    >
      <Icon :name="icon" :size="12" />
    </section>
  </section>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  name: "AnnotationIndicator",
  components: {
    Icon
  },
  props: {
    icon: { default: "reply" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/AnnotationIndicator";
</style>
