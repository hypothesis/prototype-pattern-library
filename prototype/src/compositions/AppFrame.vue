<template>
  <section
    :class="[$options.name, collapsed ? $options.name + '--collapsed':'', 'type__family--system']"
  >
    <header :class="[$options.name + '__top', 'color__bg--contrast padding__right--s']">
      <nav :class="$options.name + '__nav'">
        <Button
          :class="$options.name + '__nav--collapse'"
          :icon="collapsed ? 'expand':'collapse'"
          :iconSize="16"
          :label="false"
          variant="tertiary"
          @click.native="collapsed = !collapsed"
        />
        <section :class="$options.name + '__nav--secondary'">
          <Button icon="notes" :label="false" variant="secondary" />
          <Button class="margin__top--s" icon="hide" :label="false" variant="secondary" />
        </section>
        <Groups v-if="!collapsed" />
        <section v-if="!collapsed" :class="$options.name + '__nav--top'">
          <Button icon="search" :label="false" variant="tertiary" />
          <Button icon="sort" :label="false" variant="tertiary" />
          <Button icon="share" :label="false" variant="tertiary" />
          <Button icon="help" :label="false" variant="tertiary" />
          <Menu :class="$options.name + '__userMenu'" :active="userMenu" direction="right">
            <Button
              :dropdown="true"
              icon="profile"
              :label="false"
              variant="tertiary"
              @click.native="userMenu = !userMenu"
            />
            <NavItem slot="menu" icon="profile" label="Jared Pendergraft" :reverse="true" />
            <NavItem slot="menu" icon="settings" label="Account settings" :reverse="true" />
            <NavItem slot="menu" icon="logout" label="Log out" :reverse="true" />
          </Menu>
        </section>
      </nav>
    </header>
    <section :class="[$options.name + '__inner', 'color__bg--base-ghost padding__all--m']">
      <Tabs v-if="!collapsed" />
      <section v-if="!collapsed" :class="$options.name + '__innerContent'">
        <slot>
          <Card>
            <p>There are no annotations in this group. Create one by selecting some text.</p>
          </Card>
        </slot>
      </section>
    </section>
  </section>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Groups from "@/compositions/Groups";
import Menu from "@/components/Menu";
import NavItem from "@/components/NavItem";
import Tabs from "@/compositions/Tabs";
export default {
  name: "AppFrame",
  components: { Button, Card, Groups, Menu, NavItem, Tabs },
  data() {
    return {
      collapsed: false,
      userMenu: false
    };
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/AppFrame";
.AppFrame {
  max-width: rem(480);
  min-height: rem(480);
}
</style>