<template>
  <section
    :class="[$options.name, expanded ? 'color__bg--base-ghost':'', 'border__top color__border--base-light']"
  >
    <button
      :class="[$options.name + '__header', 'padding__bottom--s padding__left--m padding__right--m padding__top--s type__align--left']"
      @click="expanded = !expanded"
    >
      <section :class="$options.name + '__header--label'">
        <p class="url color__type--base-mid margin__right--s type__size--s-m">
          <a :href="url" target="_blank">{{ urlShort}}</a>
        </p>
        <p class="title type__size--m-m">
          <strong>{{ title }}</strong>
        </p>
      </section>
      <Badge class="margin__left--s margin__top--xs" :label="count" />
    </button>
    <section
      v-if="expanded"
      :class="[$options.name + '__inner', 'border__top color__border--base-light padding__bottom--m padding__left--m padding__right--m']"
    >
      <section :class="[$options.name + '__content', 'margin__top--m oomph__v--m']">
        <slot>
          <h1>Awesome annotations go here!</h1>
        </slot>
      </section>
      <Card :padding="false" :class="[$options.name + '__nav', 'margin__top--m oomph__v--xs padding__bottom--s padding__left--m padding__right--m padding__top--s']">
        <section :class="$options.name + '__nav--item'">
          <header>
            <Icon name="external" />
            <p class="type__size--s-l">
              <a :href="url" target="_blank">View in context</a>
            </p>
          </header>
        </section>
        <section v-if="annotators.length" :class="$options.name + '__nav--item'">
          <header>
            <Icon name="profile" />
            <p class="type__size--s-l">
              <strong>Annotators</strong>
            </p>
          </header>
          <section class="oomph__h--xs">
            <Tag
              v-for="(person,index) in annotators"
              :key="index"
              :label="person"
              :path="'https://hypothes.is/search?q=user%3A' + person"
            />
          </section>
        </section>
        <section v-if="tags.length" :class="$options.name + '__nav--item'">
          <header>
            <Icon name="tag" />
            <p class="type__size--s-l">
              <strong>Tags</strong>
            </p>
          </header>
          <section class="oomph__h--xs">
            <Tag
              v-for="(tag,index) in tags"
              :key="index"
              :label="tag"
              :path="'https://hypothes.is/search?q=tag%3A' + tag"
            />
          </section>
        </section>
        <section :class="$options.name + '__nav--item'">
          <header>
            <Icon name="link" />
            <p class="type__size--s-l">
              <strong>URL</strong>
            </p>
          </header>
          <p class="url type__size--s-m">
            <a :href="url" target="_blank">{{ urlFull }}</a>
          </p>
        </section>
      </Card>
    </section>
  </section>
</template>
<script>
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Tag from "@/components/Tag";
export default {
  name: "SearchItemWeb",
  components: { Badge, Card, Icon, Tag },
  computed: {
    count() {
      if(this.$slots.default) {
        return this.$slots.default.length;
      } else {
        return 0;
      }
    },
    urlFull() {
      let url = this.url.replace("https://www.", "");
      return url;
    },
    urlShort() {
      let url = this.url.replace("https://www.", "");
      let split = url.split("/");
      return split[0];
    }
  },
  data() {
    return {
      expanded: false
    };
  },
  props: {
    annotators: { default: () => ["cool.user", "totes.mcgoats"], type: Array },
    tags: { default: () => ["greatTag", "wowsers"], type: Array / Object },
    title: { default: "Article title" },
    url: { default: "https://www.website.com/really-long-article-title" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/SearchItemWeb";
</style>