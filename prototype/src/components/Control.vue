<template>
  <fieldset :class="[$options.name, disabled ? $options.name + '--disabled':'']">
    <label
      v-if="label"
      :class="[
        $options.name + '__label',
        'color__type--base-mid margin__bottom--s type__size--xs-m'
      ]"
    >{{ label }}</label>
    <section :class="[$options.name + '__wrap', reverse ? $options.name + '__wrap--reversed':'']">
      <slot />
      <button v-if="action && icon" :class="[$options.name + '__action', $options.name + '__icon']">
        <Icon :name="icon" :size="14" />
      </button>
      <section v-if="!action && icon" :class="$options.name + '__icon'">
        <Icon :name="icon" :size="14" />
      </section>
    </section>
  </fieldset>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  name: "Control",
  components: { Icon },
  data() {
    return {
      dynamicValue: this.value
    };
  },
  props: {
    action: { default: false },
    disabled: { default: false },
    icon: { default: false },
    label: { default: "Control label" },
    reverse: { default: false }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Control";
</style>