<template>
  <Card :class="[$options.name, 'type__family--system']" :padding="false">
    <header
      :class="[
        $options.name + '__header',
        'border__bottom color__border--base-light padding__bottom--s padding__left--m padding__right--s padding__top--xs'
      ]"
    >
      <section :class="$options.name + '__header--primary'">
        <p>
          <strong>{{ user }}</strong>
        </p>
      </section>
      <section :class="[$options.name + '__header--secondary', 'oomph__h--m']">
        <p class="color__type--base-mid type__size--s-m">
          {{ created }}
          <span v-if="edited">(edited)</span>
        </p>
        <Button icon="groups" :label="group" variant="tertiary" />
      </section>
    </header>
    <section
      :class="[$options.name + '__content', 'oomph__v--s padding__all--m']"
    >
      <blockquote
        :class="[
          $options.name + '__quote',
          'color__type--base-mid padding__left--m'
        ]"
      >
        <p class="type__size--s-m">
          <em>{{ quote }}</em>
        </p>
      </blockquote>
      <p :class="$options.name + '__excerpt'">{{ excerpt }}</p>
      <section v-if="tags.length" :class="$options.name + '__tags'">
        <Tag
          v-for="(tag, index) in tags"
          :key="index"
          :label="typeof tag === 'object' ? tag.label : tag"
          :path="typeof tag === 'object' ? tag.path : false"
          class="margin__all--xs"
        />
      </section>
    </section>
    <AnnotationReply
      v-if="edit"
      actionText="Save changes"
      :comment="excerpt"
      :group="group"
      :tags="tags"
      :user="user"
      @reply="edit = !edit"
    />
    <AnnotationReply
      v-if="reply"
      :group="group"
      :user="user"
      @reply="replyAction"
    />
    <footer
      :class="[
        $options.name + '__footer',
        'border__top color__border--base-light padding__bottom--xs padding__left--s padding__right--s padding__top--xs'
      ]"
    >
      <nav :class="$options.name + '__actions'">
        <Button
          v-if="editable"
          icon="edit"
          :iconSize="16"
          :label="false"
          variant="tertiary"
          @click.native="[(edit = !edit), (reply = false)]"
        />
        <Menu
          :active="deleteMenu"
          direction="right"
          :reverse="true"
          v-click-outside="hideDeleteMenu"
        >
          <Button
            v-if="editable"
            icon="trash"
            :iconSize="16"
            :label="false"
            variant="tertiary"
            @click.native="deleteMenu = !deleteMenu"
          />
          <NavItem
            icon="trash"
            label="Delete annotation"
            :reverse="true"
            @click.native="hideDeleteMenu"
            slot="menu"
          />
          <NavItem
            icon="cancel"
            label="Cancel"
            :reverse="true"
            @click.native="hideDeleteMenu"
            slot="menu"
          />
        </Menu>
        <Button
          icon="reply"
          :iconSize="16"
          :label="false"
          variant="tertiary"
          @click.native="[(reply = !reply), (edit = false)]"
        />
        <Menu
          :active="shareMenu"
          direction="right"
          :reverse="true"
          :class="$options.name + '__shareMenu'"
          v-click-outside="hideShareMenu"
        >
          <Button
            icon="share"
            :iconSize="16"
            :label="false"
            variant="tertiary"
            @click.native="shareMenu = !shareMenu"
          />
          <ShareIndividual slot="menu" :group="group" />
        </Menu>
        <Button
          v-if="!editable"
          icon="flag"
          :iconSize="16"
          :label="false"
          variant="tertiary"
        />
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
import AnnotationReply from "@/compositions/AnnotationReply";
import ShareIndividual from "@/compositions/ShareIndividual";
export default {
  name: "Annotation",
  components: {
    AnnotationReply,
    Button,
    Card,
    Menu,
    NavItem,
    ShareIndividual,
    Tag
  },
  data() {
    return {
      deleteMenu: false,
      edit: false,
      editMenu: false,
      shareMenu: false,
      reply: false
    };
  },
  methods: {
    hideDeleteMenu() {
      this.deleteMenu = false;
    },
    hideEditMenu() {
      this.editMenu = false;
    },
    hideShareMenu() {
      this.shareMenu = false;
    },
    replyAction(value) {
      if (value === "success") {
        console.log("Reply posted successfully!");
      } else {
        this.reply = false;
        console.log("Reply cancelled");
      }
    }
  },
  props: {
    actions: {
      default: () => ["reply", "external", "share"],
      type: Array
    },
    created: { default: "September 22, 2019" },
    edited: { default: "1 day ago" },
    editable: { default: false },
    excerpt: { default: `This is a really great quote!` },
    group: { default: "Public" },
    locked: { default: false },
    quote: {
      default: `Users can already "mute" — as in, hide from view — accounts they find offensive. But now, Twitter is expanding the "mute" function to apply to particular words, phrases or conversations, giving users greater control over posts they don't want to encounter even if those posts specifically name them.`
    },
    tags: { default: () => [], type: Array / Object },
    user: { default: "username" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/Annotation";
</style>
