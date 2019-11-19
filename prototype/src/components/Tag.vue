<template>
  <button
    :class="[
      $options.name,
      micro ? $options.name + '--micro' : '',
      'border__all color__bg--base-ghost color__border--base-light'
    ]"
  >
    <a
      v-if="path"
      :href="path"
      target="_blank"
      :class="[
        $options.name + '__label',
        micro ? 'type__size--xs-s' : 'type__size--s-m'
      ]"
    >
      {{ label }}
    </a>
    <section
      v-else
      :class="[
        $options.name + '__label',
        parent ? $options.name + '__label--parent' : '',
        micro ? 'type__size--xs-s' : 'type__size--s-m'
      ]"
    >
      <strong v-if="parent" class="margin__right--xs">{{ parent }}:</strong>
      {{ label }}
    </section>
    <Badge
      v-if="count"
      :class="[$options.name + '__count', 'margin__right--xs']"
      :label="count"
      variant="primary"
    />
    <button
      v-if="icon"
      :class="[
        $options.name + '__action',
        'border__left color__border--base-light color__type--base-mid'
      ]"
      @click="$emit('tagAction', callback)"
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
    micro: { default: false },
    parent: { default: false },
    path: { default: false }
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/Tag";
</style>
