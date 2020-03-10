<template>
  <section
    :class="[
      $options.name,
      'border__left border__right border__top color__border--base-light padding__bottom--xs padding__left--s padding__right--s padding__top--xs'
    ]"
  >
    <section :class="$options.name + '__actions'">
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
      <button :class="$options.name + '__action'" @click="editable = !editable">
        <Icon :name="editable ? 'preview' : 'preview-filled'" />
      </button>
    </section>
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
