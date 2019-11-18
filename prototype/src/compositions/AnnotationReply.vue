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
      <Control label="Your Comment">
        <textarea
          id="coolTextarea"
          name="coolTextarea"
          placeholder="Type into me…"
          :value="comment"
        ></textarea>
      </Control>
      <Control label="Tags">
        <section :class="$options.name + '__tags'">
          <section
            v-if="tagsDynamic.length"
            :class="[
              $options.name + '__tags--wrap',
              'oomph__h--xs padding__left--s'
            ]"
          >
            <Tag
              v-for="(tag, index) in tagsDynamic"
              :key="index"
              :label="tag.label"
              icon="cancel"
              @click.native="tags.pop(1)"
            />
          </section>
          <input
            id="coolTagsInput"
            name="coolTagsInput"
            placeholder="Add tags…"
            type="text"
            v-model="tagInput"
            @keyup="addTag"
            @keyup.enter="addTagCommaless"
          />
        </section>
      </Control>
      <Control icon="caret-down" label="Post to">
        <select id="coolSelect" name="coolSelect" v-model="replyScope">
          <option selected>{{ group }}</option>
          <option>Only me</option>
        </select>
      </Control>
    </section>
    <footer
      v-if="replyActive"
      :class="[
        $options.name + '__footer',
        'border__top color__border--base-light oomph__h--s padding__all--m'
      ]"
    >
      <Button :label="actionText" @click.native="$emit('reply', 'success')" />
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
import CC from "@/components/CC";
import Control from "@/components/Control";
import Tag from "@/components/Tag";
export default {
  name: "AnnotationReply",
  components: { Button, CC, Control, Tag },
  data() {
    return {
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
    }
  },
  props: {
    actionText: { default: "Submit reply"},
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
