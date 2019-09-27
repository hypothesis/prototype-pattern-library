<template>
  <button
    v-else
    :class="[$options.name, 'border__all color__bg--base-ghost color__border--base-light']"
  >
    <section
      v-if="parent"
      :class="[
      $options.name + '__parent',
      'border__right color__border--base-light color__type--base padding__left--s padding__right--s type__size--xs-m'
    ]"
    >
      <strong>{{ parent }}</strong>
    </section>
    <router-link
      v-if="path"
      :to="path"
      :class="[
      $options.name + '__label',
      'padding__left--s padding__right--s type__size--xs-m'
    ]"
    >{{ label }}</router-link>
    <section
      v-else
      :class="[
      $options.name + '__label',
      'padding__left--s padding__right--s type__size--xs-m'
    ]"
    >{{ label }}</section>
    <Badge
      v-if="count"
      :class="[$options.name + '__count', 'margin__right--s']"
      :label="count"
      variant="contrast"
    />
    <button
      v-if="icon"
      :class="[$options.name + '__action', 'color__bg--base-mid color__type--contrast color__type--base-mid']"
      @click="$emit('tagAction',callback)"
    >
      <Icon :name="icon" />
    </button>
  </button>
</template>
<script>
import Badge from "@/components/Badge";
import Icon from "@/components/Icon";
export default {
  name: "Tag",
  components: { Badge, Icon },
  props: {
    callback: { default: "Callback value" },
    count: { default: false },
    icon: { default: false },
    label: { default: "Tag label" },
    parent: { default: false },
    path: { default: false }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Tag";
</style>