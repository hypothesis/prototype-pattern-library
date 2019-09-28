<template>
  <Menu :active="menuActive" direction="left" :class="$options.name">
    <Button
      :class="'margin__left--xs'"
      :dropdown="true"
      icon="groups"
      :label="currentlySelected"
      variant="tertiary"
      @click.native="menuActive = !menuActive"
    />
    <section slot="menu" :class="$options.name + '__inner'">
      <header
        :class="[$options.name + '__innerHeader', 'padding__bottom--xs padding__left--s padding__right--s padding__top--s']"
      >
        <h5>My Groups</h5>
      </header>
      <section :class="$options.name + '__innerContent'">
        <NavItem
          v-for="item in groups"
          :key="item.title"
          :active="currentlySelected === item.title"
          :dropdown="true"
          :label="item.title"
          :offset="true"
          @NavItem="currentlySelected = $event"
        >
          <Logo v-if="item.img" slot="img" />
          <NavItem icon="external" label="Group activity" :small="true" slot="nested" />
          <NavItem icon="copy" label="Copy link" :small="true" slot="nested" />
          <NavItem icon="leave" label="Leave group" :small="true" slot="nested" />
        </NavItem>
      </section>
      <footer
        :class="[$options.name + '__innerFooter', 'border__top color__border--base-light padding__left--s padding__right--s']"
      >
        <Button icon="plus" label="New private group" variant="tertiary" />
      </footer>
    </section>
  </Menu>
</template>
<script>
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import NavItem from "@/components/NavItem";
export default {
  name: "Groups",
  components: { Button, Logo, Menu, NavItem },
  data() {
    return {
      currentlyExpanded: false,
      currentlySelected: this.groups[0].title,
      menuActive: false
    };
  },
  methods: {
    updateSelected(item) {
      this.currentlySelected = item;
      this.$emit("groupSelected", item);
    }
  },
  props: {
    groups: {
      default: () => [
        { title: "Public", img: true },
        { title: "Logoless", img: false },
        { title: "Unscoped Is Dope", img: true }
      ],
      type: Array
    }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/Groups";
</style>