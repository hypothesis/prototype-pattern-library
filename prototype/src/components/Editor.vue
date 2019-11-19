<template>
  <section
    :class="[
      $options.name,
      'border__left border__right border__top color__border--base-light padding__all--s'
    ]"
  >
    <section :class="[$options.name + '__actions', 'oomph__h--s']">
      <button :class="$options.name + '__action'">
        <Icon name="editor-type-bold" />
      </button>
      <button :class="$options.name + '__action'">
        <Icon name="editor-type-italic" />
      </button>
      <button :class="$options.name + '__action'">
        <Icon name="editor-quote" />
      </button>
      <button :class="$options.name + '__action'">
        <Icon name="link" />
      </button>
      <button :class="$options.name + '__action'">
        <Icon name="image" />
      </button>
      <button :class="$options.name + '__action'">
        <Icon name="editor-latex" />
      </button>
      <button :class="$options.name + '__action'">
        <Icon name="list-ordered" />
      </button>
      <button :class="$options.name + '__action'">
        <Icon name="list-unordered" />
      </button>
    </section>
    <Button
      class="margin__left--s"
      :icon="editable ? 'preview' : 'preview-filled'"
      :label="editable ? 'Preview' : 'Write'"
      variant="secondary"
      @click.native="editable = !editable"
    />
  </section>
</template>
<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
export default {
  name: "Editor",
  data() {
    return {
      editable: true
    };
  },
  components: { Button, Icon }
};
</script>
<style lang="scss">
@import "../../../styles/components/Editor";
</style>
