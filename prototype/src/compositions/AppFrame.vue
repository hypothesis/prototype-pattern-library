<template>
  <section
    :class="[
      $options.name,
      collapsed ? $options.name + '--collapsed' : '',
      searchActive ? $options.name + '--searched' : '',
      'type__family--system'
    ]"
    :style="{ height: height, maxWidth: width }"
  >
    <header
      :class="[
        $options.name + '__top',
        'border__bottom border__left color__bg--contrast color__border--base-light padding__right--s'
      ]"
    >
      <nav :class="$options.name + '__nav'">
        <Button
          :class="[$options.name + '__nav--collapse', 'margin__right--s']"
          :icon="collapsed ? 'expand' : 'collapse'"
          :iconSize="16"
          :label="false"
          variant="tertiary"
          @click.native="collapse"
        />
        <section :class="[$options.name + '__nav--secondary', 'oomph__v--s']">
          <Button
            :icon="highlights ? 'hide' : 'show'"
            :label="false"
            variant="secondary"
            @click.native="highlights = !highlights"
          />
          <Button icon="notes" :label="false" variant="secondary" />
        </section>
        <Groups v-if="!collapsed" />
        <section v-if="!collapsed" :class="$options.name + '__nav--top'">
          <Button
            icon="search"
            :label="false"
            variant="tertiary"
            @click.native="searchActive = !searchActive"
          />
          <Menu
            :class="$options.name + '__sortMenu'"
            :active="sortMenu"
            direction="right"
            v-click-outside="hideSortMenu"
          >
            <Button
              icon="sort"
              :label="false"
              variant="tertiary"
              @click.native="sortMenu = !sortMenu"
            />
            <NavItem
              slot="menu"
              :active="sortValue === 'Newest' ? 'check' : ''"
              label="Newest"
              :reverse="true"
              @NavItem="sortValue = $event"
            />
            <NavItem
              slot="menu"
              :active="sortValue === 'Oldest' ? 'check' : ''"
              label="Oldest"
              :reverse="true"
              @NavItem="sortValue = $event"
            />
            <NavItem
              slot="menu"
              :active="sortValue === 'Location' ? 'check' : ''"
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
          <Menu
            :class="$options.name + '__userMenu'"
            :active="userMenu"
            direction="right"
            v-click-outside="hideUserMenu"
          >
            <Button
              :dropdown="true"
              icon="profile"
              :label="false"
              variant="tertiary"
              @click.native="userMenu = !userMenu"
            />
            <NavItem
              slot="menu"
              icon="profile"
              label="Jared Pendergraft"
              :reverse="true"
            />
            <NavItem
              slot="menu"
              icon="settings"
              label="Account settings"
              :reverse="true"
            />
            <NavItem
              slot="menu"
              icon="logout"
              label="Log out"
              :reverse="true"
            />
          </Menu>
        </section>
      </nav>
    </header>
    <section
      :class="[
        $options.name + '__inner',
        'color__bg--base-ghost padding__bottom--m padding__left--l oomph__v--m padding__right--m padding__top--s'
      ]"
    >
      <SearchCard
        v-if="searchActive && !collapsed"
        @searchClose="searchActive = $event"
      />
      <Share
        v-if="shareActive && !collapsed"
        @shareClose="shareActive = $event"
      />
      <Help v-if="helpActive && !collapsed" @helpClose="helpActive = $event" />
      <Tabs v-if="!collapsed" />
      <section v-if="!collapsed" :class="$options.name + '__innerContent'">
        <slot>
          <Card>
            <p>
              There are no annotations in this group. Create one by selecting
              some text.
            </p>
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
import Help from "@/compositions/Help";
import Menu from "@/components/Menu";
import NavItem from "@/components/NavItem";
import SearchCard from "@/compositions/SearchCard";
import Share from "@/compositions/Share";
import Tabs from "@/compositions/Tabs";
export default {
  name: "AppFrame",
  components: {
    Button,
    Card,
    Control,
    Groups,
    Help,
    Menu,
    NavItem,
    SearchCard,
    Share,
    Tabs
  },
  data() {
    return {
      collapsed: false,
      helpActive: false,
      highlights: true,
      searchActive: false,
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
      this.hideSortMenu();
      this.hideUserMenu();
    },
    hideSortMenu() {
      this.sortMenu = false;
    },
    hideUserMenu() {
      this.userMenu = false;
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
