<template>
  <fieldset :class="[$options.name, disabled ? $options.name + '--disabled':'']">
    <label
      v-if="label"
      :for="labelID"
      :class="[
        $options.name + '__label',
        'color__type--base-mid margin__bottom--s type__size--xs-m'
      ]"
    >{{ label }}</label>
    <section :class="[$options.name + '__wrap', reverse ? $options.name + '__wrap--reversed':'']">
      <slot />
      <button
        v-if="action && icon"
        :class="[$options.name + '__action', $options.name + '__icon']"
        :aria-label="icon + ' action'"
      >
        <Icon :name="icon" :size="16" />
      </button>
      <section v-if="!action && icon" :class="$options.name + '__icon'">
        <Icon :name="icon" :size="16" />
      </section>
    </section>
  </fieldset>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  name: "Control",
  components: { Icon },
  computed: {
    labelID() {
      let id = this.$slots.default[0].data.attrs.id;
      if (id) {
        return id;
      } else {
        console.log(
          "You should consider adding an ID and name value for proper form control accessiblity."
        );
        return false;
      }
    }
  },
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