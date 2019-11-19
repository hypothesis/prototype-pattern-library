<template>
  <section
    :class="[
      $options.name,
      replyActive ? 'border__left color__border--base-light' : '',
      'margin__bottom--m margin__left--m'
    ]"
  >
    <header
      :class="[
        $options.name + '__header',
        replyActive ? 'border__bottom color__border--base-light' : '',
        'padding__bottom--s padding__left--m padding__right--s padding__top--xs'
      ]"
    >
      <Button
        :class="$options.name + '__toggle'"
        :icon="replyActive ? 'caret-down' : 'caret-right'"
        :label="false"
        variant="tertiary"
        @click.native="replyActive = !replyActive"
      />
      <section :class="$options.name + '__header--primary'">
        <p>
          <strong>{{ user }}</strong>
        </p>
      </section>
      <section :class="$options.name + '__header--secondary'">
        <Button
          :icon="replyScope === 'Only me' ? 'lock' : 'groups'"
          :label="replyScope"
          variant="tertiary"
        />
      </section>
    </header>
    <section
      v-if="replyActive"
      :class="[$options.name + '__content', 'oomph__v--s padding__all--m']"
    >
      <section>
        <Control label="Your Comment">
          <Editor slot="editor" />
          <textarea
            id="coolTextarea"
            name="coolTextarea"
            placeholder="Type into me…"
            :value="comment"
          ></textarea>
        </Control>
      </section>
      <Control label="Tags" :hasTags="true">
        <Tag
          v-if="tagsDynamic.length"
          v-for="(tag, index) in tagsDynamic"
          :key="index"
          :label="tag.label"
          icon="cancel"
          class="margin__all--xs"
          @click.native="tags.pop(1)"
          slot="tags"
        />
        <input
          id="coolTagsInput"
          name="coolTagsInput"
          placeholder="Add tags…"
          type="text"
          v-model="tagInput"
          @keyup="addTag"
          @keyup.enter="addTagCommaless"
        />
      </Control>
    </section>
    <footer
      v-if="replyActive"
      :class="[
        $options.name + '__footer',
        'border__top color__border--base-light oomph__h--s padding__all--m'
      ]"
    >
      <ButtonGroup>
        <Button :label="actionText" @click.native="$emit('reply', 'success')" />
        <Menu :active="postOptions" v-click-outside="hidePostOptions">
          <Button
            class="border__left color__border--base-mid"
            :dropdown="true"
            :label="false"
            @click.native="postOptions = !postOptions"
          />
          <NavItem
            :active="replyScope === group"
            icon="globe"
            :label="'Post to ' + group"
            :reverse="true"
            @click.native="replyScope = group"
            slot="menu"
          />
          <NavItem
            :active="replyScope === 'Only me'"
            icon="lock"
            label="Only me"
            :reverse="true"
            @click.native="replyScope = 'Only me'"
            slot="menu"
          />
        </Menu>
      </ButtonGroup>
      <Button
        icon="cancel"
        label="Cancel"
        variant="secondary"
        @click.native="$emit('reply', 'cancel')"
      />
    </footer>
    <section
      v-if="replyActive"
      class="border__top color__border--base-light padding__bottom--s padding__left--m padding__right--m padding__top--s"
    >
      <CC />
    </section>
  </section>
</template>
<script>
import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import CC from "@/components/CC";
import Control from "@/components/Control";
import Editor from "@/components/Editor";
import Menu from "@/components/Menu";
import NavItem from "@/components/NavItem";
import Tag from "@/components/Tag";
export default {
  name: "AnnotationReply",
  components: { Button, ButtonGroup, CC, Control, Editor, Menu, NavItem, Tag },
  data() {
    return {
      postOptions: false,
      replyActive: true,
      replyScope: this.group,
      tagsDynamic: this.tags,
      tagInput: ""
    };
  },
  methods: {
    addTag() {
      if (this.tagInput && this.tagInput.includes(",")) {
        let tag = this.tagInput.split(",");
        this.tagsDynamic.push({ label: tag[0] });
        this.tagInput = "";
      } else {
        console.log("Hey dude, there’s nothing in this input!");
      }
    },
    addTagCommaless() {
      if (this.tagInput) {
        this.tagsDynamic.push({ label: this.tagInput });
        this.tagInput = "";
      } else {
        console.log("Hey dude, there’s nothing in this input!");
      }
    },
    hidePostOptions() {
      this.postOptions = false;
    }
  },
  props: {
    actionText: { default: "Submit reply" },
    comment: { default: "" },
    group: { default: "Public" },
    tags: { default: () => [], type: Array / Object },
    user: { default: "username" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/AnnotationReply";
</style>
