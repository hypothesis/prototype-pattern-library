<template>
  <a
    :class="[
      $options.name,
      'color__type--base-mid oomph__h--xs type__size--s-m'
    ]"
    href="http://creativecommons.org/publicdomain/zero/1.0/"
    title="View more information about the Creative Commons Public Domain dedication"
    target="_blank"
  >
    <Icon name="cc-std" class="margin__right--xs" />
    <Icon name="cc-zero" class="margin__right--xs" />
    Annotations can be freely reused by anyone for any purpose.
  </a>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  name: "CC",
  components: { Icon }
};
</script>
<style lang="scss">
.CC {
  &:focus,
  &:hover {
    color: var(--color__brand);
    text-decoration: underline;
  }
}
</style>
