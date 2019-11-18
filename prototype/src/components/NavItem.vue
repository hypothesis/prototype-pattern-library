<template>
  <section
    :class="[
    $options.name,
    active ? $options.name + '--active':'',
    expanded ? 'color__bg--base-ghost':'',
    reverse ? $options.name + '--reversed':'',
    small ? $options.name + '--small':''
  ]"
  >
    <button
      :class="[$options.name + '__top', 'padding__left--s padding__right--s']"
      @click="$emit('NavItem', label)"
    >
      <section v-if="$slots.img" :class="[$options.name + '__img', 'margin__right--s']">
        <slot name="img" />
      </section>
      <section
        v-if="label"
        :class="[
      $options.name + '__label', small ? 'type__size--s-m':'type__size--s-l', offset ? $options.name + '__label--offset':'', reverse && icon ? 'margin__left--s':''
    ]"
      >{{ label }}</section>
      <section
        v-if="icon"
        :class="[$options.name + '__icon', reverse ? '':'color__type--base-mid margin__left--s']"
      >
        <Icon :name="icon" :size="14" />
      </section>
      <section
        v-if="dropdown"
        :class="[$options.name + '__dropdown', 'color__bg--base-ghost color__type--base-mid margin__left--s']"
      >
        <Icon :name="expanded ? 'caret-up':'caret-down'" :size="12" :width="3" />
      </section>
    </button>
    <section
      v-if="expanded"
      :class="[$options.name + '__nested', offset ? $options.name + '__nested--offset':'', 'padding__bottom--xs padding__right--s' ]"
    >
      <slot name="nested" />
    </section>
  </section>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  name: "NavItem",
  components: { Icon },
  props: {
    active: { default: false },
    dropdown: { default: false },
    expanded: { default: false },
    icon: { default: false },
    label: { default: "NavItem label" },
    offset: { default: false },
    reverse: { default: false },
    small: { default: false }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/NavItem";
</style>