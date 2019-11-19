<template>
  <section :class="$options.name">
    <Logo :size="32" />
    <Menu
      :active="searchActive"
      :class="[$options.name + '__search', 'margin__left--s margin__right--s']"
      v-click-outside="hideSearchMenu"
    >
      <Control icon="search" :label="false" :reverse="true" :hasTags="true">
        <Tag
          v-if="tags.length"
          v-for="(tag, index) in tags"
          :key="index"
          :parent="tag.parent"
          :label="tag.label"
          icon="cancel"
          @click.native="tags.pop(1)"
          slot="tags"
          class="margin__all--xs"
        />
        <input
          id="search"
          type="text"
          placeholder="Search for something…"
          v-model="searchValue"
          @focus="searchActive = !searchActive"
          @change="addTag"
        />
        <Button
          v-if="searchValue"
          icon="cancel"
          :label="false"
          variant="tertiary"
          @click.native="clearSearch"
        />
      </Control>
      <section slot="menu" :class="$options.name + '__searchHelp'">
        <button
          v-for="(item, index) in help"
          :key="index"
          @click="focusTag(item)"
        >
          <span>{{ item.label }}</span>
          <p>{{ item.text }}</p>
        </button>
      </section>
    </Menu>
    <nav :class="$options.name + '__nav'">
      <p v-if="!loggedIn">
        <a href="#" @click="loggedIn = !loggedIn">Log in</a>
      </p>
      <p v-if="!loggedIn" class="margin__left--s">
        <a href="https://hypothes.is/signup">Sign up</a>
      </p>
      <Menu
        v-if="loggedIn"
        :active="groupsMenu"
        direction="right"
        v-click-outside="hideGroupsMenu"
      >
        <Button
          :dropdown="true"
          icon="groups"
          :label="false"
          variant="tertiary"
          @click.native="groupsMenu = !groupsMenu"
        />
        <h5
          slot="menu"
          class="border__bottom color__border--base-light color__type--base-mid padding__all--s"
        >
          Groups
        </h5>
        <NavItem slot="menu" label="Hypothesis Reading" />
        <NavItem
          slot="menu"
          icon="plus"
          label="Create new group"
          :reverse="true"
        />
      </Menu>
      <Menu
        v-if="loggedIn"
        class="margin__left--s"
        :active="settingsMenu"
        direction="right"
        v-click-outside="hideSettingsMenu"
      >
        <Button
          :dropdown="true"
          icon="settings"
          :label="false"
          variant="tertiary"
          @click.native="settingsMenu = !settingsMenu"
        />
        <h5
          slot="menu"
          class="border__bottom color__border--base-light color__type--base-mid padding__all--s"
        >
          Settings
        </h5>
        <NavItem slot="menu" label="Account details" />
        <NavItem slot="menu" label="Edit profile" />
        <NavItem slot="menu" label="Notifications" />
        <NavItem slot="menu" label="Developer" />
        <NavItem
          slot="menu"
          icon="logout"
          label="Sign out"
          :reverse="true"
          @click.native="loggedIn = !loggedIn"
        />
      </Menu>
    </nav>
  </section>
</template>
<script>
import Button from "@/components/Button";
import Control from "@/components/Control";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import NavItem from "@/components/NavItem";
import Tag from "@/components/Tag";
export default {
  name: "SearchWeb",
  components: { Button, Control, Logo, Menu, NavItem, Tag },
  data() {
    return {
      groupsMenu: false,
      help: [
        {
          label: "user:",
          text: `search by username`
        },
        {
          label: "tag:",
          text: `search for annotations with a tag`
        },
        {
          label: "url:",
          text: `search by URL (for domain level search, ap a trailing “/*”, e.g. “example.com/*”`
        },
        {
          label: "group:",
          text: `show annotations associate with a group`
        }
      ],
      loggedIn: true,
      searchActive: false,
      searchValue: "",
      settingsMenu: false,
      tags: []
    };
  },
  methods: {
    clearSearch() {
      this.searchActive = false;
      this.searchValue = "";
    },
    addTag() {
      if (this.searchValue) {
        let tag = this.searchValue.split(": ");
        this.tags.push({ parent: tag[0], label: tag[1] });
        this.searchValue = "";
      } else {
        console.log("Hey dude, there’s nothing in this input!");
      }
    },
    focusTag(value) {
      this.searchValue = value.label + " ";
      document.getElementById("search").focus();
    },
    hideGroupsMenu() {
      this.groupsMenu = false;
    },
    hideSettingsMenu() {
      this.settingsMenu = false;
    },
    hideSearchMenu() {
      this.searchActive = false;
    }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/SearchWeb";
</style>
