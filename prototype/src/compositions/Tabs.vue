<template>
  <section :class="$options.name">
    <button
      v-for="item in items"
      :key="item.title"
      :class="[$options.name + '__item', currentlySelected === item ? $options.name + '__item--selected':'', 'type__size--m-m']"
      @click="updateSelected(item)"
    >
      {{ item.title }}
      <Badge v-if="item.count > 0" class="margin__left--xs" :label="item.count" />
    </button>
  </section>
</template>
<script>
import Badge from "@/components/Badge";
export default {
  name: "Tabs",
  components: { Badge },
  data() {
    return {
      currentlySelected: this.items[0]
    };
  },
  methods: {
    updateSelected(item) {
      this.currentlySelected = item;
      this.$emit("tabSelected", item);
    }
  },
  props: {
    items: {
      default: () => [
        { title: "Annotations", count: 24 },
        { title: "Page Notes", count: 0 }
      ],
      type: Array
    }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/Tabs";
</style>