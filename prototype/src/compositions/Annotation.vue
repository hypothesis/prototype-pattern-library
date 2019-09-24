<template>
  <Card :class="[$options.name, 'type__family--system']" :padding="false">
    <header
      :class="[$options.name + '__header', 'padding__bottom--s padding__left--m padding__right--s padding__top--xs']"
    >
      <section :class="$options.name + '__header--primary'">
        <p>
          <strong>{{ username }}</strong>
        </p>
        <Menu :active="editMenu" direction="right" :class="$options.name + '__editMenu'">
          <Button
            icon="ellipsis"
            :label="false"
            variant="tertiary"
            @click.native="editMenu = !editMenu"
          />
          <NavItem slot="menu" icon="flag" label="Flag" :reverse="true" />
          <NavItem slot="menu" icon="edit" label="Edit" :reverse="true" />
          <NavItem slot="menu" icon="trash" label="Delete" :reverse="true" />
          <p
            slot="menu"
            v-if="edited"
            class="color__type--base-mid padding__bottom--xs padding__left--m padding__right--m padding__top--xs type__size--s-l"
          >
            <em>Edited {{ edited}}</em>
          </p>
        </Menu>
      </section>
      <section :class="$options.name + '__header--secondary'">
        <p class="color__type--base-mid margin__right--m type__size--s-m">
          {{ created }}
          <span v-if="edited">(edited)</span>
        </p>
        <Button icon="groups" :label="group" variant="tertiary" />
      </section>
    </header>
    <section :class="[$options.name + '__content', 'padding__all--m']">
      <blockquote :class="[$options.name + '__quote', 'color__type--base-mid padding__left--m']">
        <p>
          <em>{{ quote }}</em>
        </p>
      </blockquote>
      <p :class="[$options.name + '__excerpt', 'margin__top--m']">{{ excerpt }}</p>
    </section>
    <footer
      :class="[$options.name + '__footer', 'padding__bottom--xs padding__left--s padding__right--s padding__top--xs']"
    >
      <Button icon="reply" :label="false" variant="tertiary" />
      <Button icon="external" :label="false" variant="tertiary" />
      <Button icon="share" :label="false" variant="tertiary" />
    </footer>
  </Card>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Menu from "@/components/Menu";
import NavItem from "@/components/NavItem";
export default {
  name: "Annotation",
  components: { Button, Card, Menu, NavItem },
  data() {
    return {
      editMenu: false
    };
  },
  props: {
    created: { default: "September 22, 2019" },
    edited: { default: "1 day ago" },
    excerpt: { default: `This is a really great quote!` },
    group: { default: "Public" },
    locked: { default: false },
    options: { default: () => ["reply", "external", "share"], type: Array },
    quote: {
      default: `Users can already "mute" — as in, hide from view — accounts they find offensive. But now, Twitter is expanding the "mute" function to apply to particular words, phrases or conversations, giving users greater control over posts they don't want to encounter even if those posts specifically name them.`
    },
    tags: { default: () => [], type: Array },
    username: { default: "username" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/Annotation";
</style>