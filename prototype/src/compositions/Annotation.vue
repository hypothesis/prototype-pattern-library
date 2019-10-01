<template>
  <Card :class="[$options.name, 'type__family--system']" :padding="false">
    <header
      :class="[$options.name + '__header', 'border__bottom color__border--base-light padding__bottom--s padding__left--m padding__right--s padding__top--xs']"
    >
      <section :class="$options.name + '__header--primary'">
        <p>
          <strong>{{ user }}</strong>
        </p>
        <Menu
          :active="editMenu"
          direction="right"
          :class="$options.name + '__editMenu'"
          v-click-outside="hideMenu"
        >
          <Button
            icon="ellipsis"
            :label="false"
            variant="tertiary"
            @click.native="editMenu = !editMenu"
          />
          <NavItem slot="menu" icon="flag" label="Flag" :reverse="true" />
          <NavItem v-if="role === 'user'" slot="menu" icon="edit" label="Edit" :reverse="true" />
          <NavItem v-if="role === 'user'" slot="menu" icon="trash" label="Delete" :reverse="true" />
          <p
            slot="menu"
            v-if="edited"
            class="border__top color__border--base-light color__type--base-mid padding__bottom--xs padding__left--m padding__right--m padding__top--xs type__size--s-l"
          >
            <em>Edited {{ edited}}</em>
          </p>
        </Menu>
      </section>
      <section :class="[$options.name + '__header--secondary', 'oomph__h--m']">
        <p class="color__type--base-mid type__size--s-m">
          {{ created }}
          <span v-if="edited">(edited)</span>
        </p>
        <Button icon="groups" :label="group" variant="tertiary" />
      </section>
    </header>
    <section :class="[$options.name + '__content', 'oomph__v--m padding__all--m']">
      <blockquote :class="[$options.name + '__quote', 'color__type--base-mid padding__left--m']">
        <p>
          <em>{{ quote }}</em>
        </p>
      </blockquote>
      <p :class="$options.name + '__excerpt'">{{ excerpt }}</p>
      <section v-if="tags.length" :class="$options.name + '__tags'">
        <Tag
          v-for="(tag, index) in tags"
          :key="index"
          :label="typeof tag === 'object' ? tag.label:tag"
          :path="typeof tag === 'object' ? tag.path:false"
          class="margin__all--xs"
        />
      </section>
    </section>
    <footer
      :class="[$options.name + '__footer', 'border__top color__border--base-light padding__bottom--xs padding__left--s padding__right--s']"
    >
      <nav :class="$options.name + '__actions'">
        <Button
          v-if="role === 'user'"
          icon="reply"
          :iconSize="16"
          :label="false"
          variant="tertiary"
        />
        <Button icon="external" :iconSize="16" :label="false" variant="tertiary" />
        <Button icon="share" :iconSize="16" :label="false" variant="tertiary" />
      </nav>
    </footer>
  </Card>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Menu from "@/components/Menu";
import NavItem from "@/components/NavItem";
import Tag from "@/components/Tag";
export default {
  name: "Annotation",
  components: { Button, Card, Menu, NavItem, Tag },
  data() {
    return {
      editMenu: false
    };
  },
  methods: {
    hideMenu() {
      this.editMenu = false;
    }
  },
  props: {
    actions: {
      default: () => ["reply", "external", "share"],
      type: Array
    },
    created: { default: "September 22, 2019" },
    edited: { default: "1 day ago" },
    excerpt: { default: `This is a really great quote!` },
    group: { default: "Public" },
    locked: { default: false },
    quote: {
      default: `Users can already "mute" — as in, hide from view — accounts they find offensive. But now, Twitter is expanding the "mute" function to apply to particular words, phrases or conversations, giving users greater control over posts they don't want to encounter even if those posts specifically name them.`
    },
    role: { default: "user" },
    tags: { default: () => [], type: Array / Object },
    user: { default: "username" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/Annotation";
</style>