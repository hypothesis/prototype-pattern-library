<template>
  <section
    :class="[
      $options.name,
      disabled ? $options.name + '--disabled' : '',
      inline ? $options.name + '--inline' : '',
      status ? $options.name + '--' + status : '',
      icon ? $options.name + '--icon' : ''
    ]"
  >
    <label
      v-if="label"
      :for="labelID"
      :class="[
        $options.name + '__label',
        inline ? 'margin__right--s' : 'margin__bottom--s',
        'color__type--base-mid type__size--xs-m'
      ]"
      >{{ label }}</label
    >
    <slot name="editor" />
    <section
      :class="[
        $options.name + '__wrap',
        hasTags ? $options.name + '__wrap--tags' : '',
        reverse ? $options.name + '__wrap--reversed' : '',
        'border__all color__bg--contrast color__border--base-light'
      ]"
    >
      <section
        v-if="$slots.actionLeft"
        :class="$options.name + '__action--left'"
      >
        <slot name="actionLeft"></slot>
      </section>
      <section v-if="status" :class="$options.name + '__status'">
        <Icon :name="status === 'invalid' ? 'cancel' : 'check'" :size="14" :width="3" />
      </section>
      <section v-if="$slots.tags" :class="$options.name + '__tags'">
        <slot name="tags" />
      </section>
      <slot />
      <section
        v-if="$slots.actionRight"
        :class="$options.name + '__action--right'"
      >
        <slot name="actionRight"></slot>
      </section>
      <section
        v-if="icon"
        :class="[$options.name + '__icon', 'color__type--base-semi']"
      >
        <Icon :name="icon" :size="14" />
      </section>
      <Badge
        v-if="statusLabel && inline"
        :label="statusLabel"
        :micro="false"
        variant="contrast"
      />
    </section>
    <Badge
      class="margin__top--s"
      v-if="statusLabel && !inline"
      :label="statusLabel"
      :micro="false"
      variant="contrast"
    />
  </section>
</template>
<script>
import Badge from "@/components/Badge";
import Icon from "@/components/Icon";
export default {
  name: "Control",
  components: { Badge, Icon },
  computed: {
    labelID() {
      if (this.label) {
        return this._uid + "_" + this.label;
      } else {
        return this._uid + "_control-label";
      }
    }
  },
  data() {
    return {
      dynamicValue: this.value
    };
  },
  props: {
    disabled: { default: false },
    icon: { default: false },
    inline: { default: false },
    label: { default: "Control label" },
    reverse: { default: false },
    status: { default: false },
    statusLabel: { default: false },
    hasTags: { default: false }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Control";
</style>
