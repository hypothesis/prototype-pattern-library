<template>
  <section
    :class="[$options.name, collapsed ? $options.name + '--collapsed':'', searchActive ? $options.name + '--searched':'', 'type__family--system']"
    :style="{ height: height, maxWidth: width }"
  >
    <header
      :class="[$options.name + '__top', 'border__bottom border__left color__bg--contrast color__border--base-light padding__right--s']"
    >
      <nav :class="$options.name + '__nav'">
        <Button
          :class="[$options.name + '__nav--collapse', 'margin__right--s']"
          :icon="collapsed ? 'expand':'collapse'"
          :iconSize="16"
          :label="false"
          variant="tertiary"
          @click.native="collapse"
        />
        <section :class="$options.name + '__nav--secondary'">
          <Button icon="notes" :label="false" variant="secondary" />
          <Button class="margin__top--s" icon="hide" :label="false" variant="secondary" />
        </section>
        <Groups v-if="!collapsed" />
        <section v-if="!collapsed" :class="$options.name + '__nav--top'">
          <Button icon="search" :label="false" variant="tertiary" @click.native="search" />
          <Menu :class="$options.name + '__sortMenu'" :active="sortMenu" direction="right">
            <Button
              icon="sort"
              :label="false"
              variant="tertiary"
              @click.native="sortMenu = !sortMenu"
            />
            <NavItem
              slot="menu"
              :active="sortValue === 'Newest' ? 'check':''"
              label="Newest"
              :reverse="true"
              @NavItem="sortValue = $event"
            />
            <NavItem
              slot="menu"
              :active="sortValue === 'Oldest' ? 'check':''"
              label="Oldest"
              :reverse="true"
              @NavItem="sortValue = $event"
            />
            <NavItem
              slot="menu"
              :active="sortValue === 'Location' ? 'check':''"
              label="Location"
              :reverse="true"
              @NavItem="sortValue = $event"
            />
          </Menu>
          <Button
            icon="share"
            :label="false"
            variant="tertiary"
            @click.native="shareActive = !shareActive"
          />
          <Button
            icon="help"
            :label="false"
            variant="tertiary"
            @click.native="helpActive = !helpActive"
          />
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
    <section
      :class="[$options.name + '__inner', 'color__bg--base-ghost padding__bottom--m padding__left--l oomph__v--m padding__right--m padding__top--s']"
    >
      <form
        v-on:submit.prevent
        v-if="searchActive && !collapsed"
        :class="$options.name + '__search'"
      >
        <Control icon="search" :label="false" :reverse="true">
          <input type="text" placeholder="Search for something…" v-model="searchValue" />
          <Button
            v-if="searchValue"
            icon="cancel"
            :label="false"
            variant="tertiary"
            @click.native="searchValue = ''"
          />
        </Control>
      </form>
      <Share v-if="shareActive && !collapsed" @share="shareActive = $event" />
      <Card v-if="helpActive && !collapsed">
        <p>
          <strong>Help card</strong>
        </p>
      </Card>
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
import Control from "@/components/Control";
import Groups from "@/compositions/Groups";
import Menu from "@/components/Menu";
import NavItem from "@/components/NavItem";
import Share from "@/compositions/Share";
import Tabs from "@/compositions/Tabs";
export default {
  name: "AppFrame",
  components: { Button, Card, Control, Groups, Menu, NavItem, Share, Tabs },
  data() {
    return {
      collapsed: false,
      helpActive: false,
      searchActive: false,
      searchValue: "",
      shareActive: false,
      sortMenu: false,
      sortValue: "Newest",
      userMenu: false
    };
  },
  methods: {
    collapse() {
      this.collapsed = !this.collapsed;
      this.helpActive = false;
      this.searchActive = false;
      this.shareActive = false;
      this.sortMenu = false;
      this.userMenu = false;
    },
    search() {
      this.searchActive = !this.searchActive;
      this.searchValue = "";
    }
  },
  props: {
    height: { default: "30rem" },
    width: { default: "30rem" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/AppFrame";
</style>