<template>
  <article :class="$options.name">
    <header
      :class="[$options.name + '__header', 'padding__bottom--s padding__left--m padding__right--m padding__top--s']"
    >
      <section :class="[$options.name + '__titles', 'padding__right--m']">
        <h1 class="type__size--m-m">
          <span>Really ridiculously long assignment title that goes on for quite a bit</span>
        </h1>
        <p class="color__type--base-mid type__size--s-m">
          <span>Super Great Course</span>
        </p>
      </section>
      <form @submit.prevent :class="$options.name + '__grader'">
        <Control icon="caret-down" :inline="true" label="Student (1 of 3)">
          <Button slot="actionLeft" icon="arrow-left" :label="false" variant="muted" />
          <select id="coolSelect" name="coolSelect">
            <option>Please choose…</option>
            <option selected>Student 1</option>
            <option>Student 2</option>
            <option>Student 3</option>
          </select>
          <Button slot="actionRight" icon="arrow-right" :label="false" variant="muted" />
        </Control>
        <Control
          :inline="true"
          label="Grade (out of 10)"
          :status="grade >= 0 && grade <= 10 ? '':'invalid'"
          :statusLabel="grade >= 0 && grade <= 10 ? '':'Must be less than 10'"
        >
          <input id="readingGrade" placeholder="ex. 9" type="text" v-model="grade" />
          <Button slot="actionRight" icon="check" label="Submit grade" variant="muted" />
        </Control>
      </form>
    </header>
    <section :class="$options.name + '__content'">
      <iframe
        width="100%"
        height="100%"
        src="https://via.hypothes.is/https://drive.google.com/uc?id=1XDjcEbVfIIgzCGeKS1wijmfl_J7J-MnS&amp;export=download&amp;via.open_sidebar=1&amp;via.request_config_from_frame=https%3A%2F%2Flms.hypothes.is"
      ></iframe>
    </section>
  </article>
</template>
<script>
import Button from "@/components/Button";
import Control from "@/components/Control";
import Icon from "@/components/Icon";
export default {
  name: "LMSGrader",
  components: { Button, Control, Icon },
  data() {
    return {
      grade: ""
    };
  }
};
</script>
<style lang="scss">
.LMSGrader {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &__header {
    align-items: center;
    background-color: var(--color__contrast);
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: rem(64);
    @include breakpoint(l) {
      flex-wrap: nowrap;
    }
    > * + * {
      margin-top: var(--size__m);
      @include breakpoint(l) {
        margin-top: 0;
      }
    }
  }
  &__titles {
    flex: 1 1 rem(320);
    overflow: hidden;
    span {
      display: block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  &__grader {
    display: inline-flex;
    flex-grow: 1;
    flex-wrap: wrap;
    max-width: rem(960);
    @include breakpoint(xsl) {
      flex-wrap: nowrap;
    }
    > * + * {
      @include breakpoint(xs) {
        margin-top: var(--size__s);
      }
      @include breakpoint(xsl) {
        margin-left: var(--size__m);
        margin-top: 0;
      }
    }
    .Control__wrap {
      @include breakpoint(xsl) {
        min-width: rem(320);
      }
    }
  }
  &__content {
    background-color: var(--color__base-ghost);
    flex: 1 1;
  }
}
</style>