<template>
  <button :class="[
    $options.name,
    $options.name + '--' + variant
  ]">
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
    variant: { default: "primary" }
  }
};
</script>
<style lang="scss">
.Button {
  @include smooth;
  align-items: center;
  border: rem(1) solid transparent;
  border-radius: var(--size__xs);
  cursor: pointer;
  display: inline-flex;
  min-height: var(--size__l);
  min-width: var(--size__l);
  width: auto;
  &__dropdown {
    display: inline-flex;
    flex-shrink: 0;
  }
  &__icon {
    display: inline-flex;
    flex-shrink: 0;
    + .Button__dropdown {
      margin-left: rem(2);
    }
    + .Button__label {
      margin-left: var(--size__s);
    }
  }
  &--primary, &--secondary {
    padding-left: var(--size__s);
    padding-right: var(--size__s);
  }
  &--primary {
    background-color: var(--color__base-mid);
    color: var(--color__contrast);
    &:focus,
    &:hover {
      background-color: var(--color__base);
    }
  }
  &--secondary {
    background-color: var(--color__contrast);
    border-color: var(--color__base-light);
    color: var(--color__base-mid);
    &:focus,
    &:hover {
      border-color: var(--color__base-mid);
      color: var(--color__base);
    }
  }
  &--tertiary {
    color: var(--color__base-light);
    &:focus,
    &:hover {
      color: var(--color__base);
    }
  }
}
</style>