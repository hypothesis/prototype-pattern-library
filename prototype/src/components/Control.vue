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
    <section
      :class="[$options.name + '__wrap', reverse ? $options.name + '__wrap--reversed':'', 'border__all color__bg--contrast color__border--base-light']"
    >
      <slot />
      <button
        v-if="action && icon"
        :class="[$options.name + '__action', $options.name + '__icon', 'border__left color__bg--base-ghost color__border--base-light color__type--base-mid']"
        :aria-label="icon + ' action'"
      >
        <Icon :name="icon" :size="14" />
        <span
          v-if="actionLabel"
          :class="[$options.name + '__action--label', 'margin__left--s type__size--s-m']"
        >
          <strong>{{ actionLabel }}</strong>
        </span>
      </button>
      <section v-if="!action && icon" :class="[$options.name + '__icon', 'color__type--base-mid']">
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
    actionLabel: { default: false },
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