<template>
  <article
    :class="[$options.name, 'border__all color__border--base-light margin__all--m padding__bottom--s padding__left--s padding__right--s padding__top--xs']"
  >
    <p class="color__type--brand oomph__h--s">
      <strong>Top tags</strong>
      <Badge :label="tags.length" variant="brand" />
    </p>
    <section :class="$options.name + '__wrap'">
      <Tag
        v-for="(tag,index) in tags"
        :key="index"
        :label="tag.label"
        :count="tag.count"
        :micro="true"
        class="margin__right--xs margin__top--xs"
      />
    </section>
  </article>
</template>
<script>
import Badge from "@/components/Badge";
import Tag from "@/components/Tag";
export default {
  name: "Tagcloud",
  components: { Badge, Tag },
  data() {
    return {
      tags: [
        { label: "recipe", count: 22 },
        { label: "HypothesisRelated", count: 18 },
        { label: "ACTION", count: 16 },
        { label: "JournalEntry", count: 11 },
        { label: "TOS", count: 11 },
        { label: "Phase1", count: 9 },
        { label: "alt_language", count: 9 },
        { label: "Immigration", count: 8 },
        { label: "thanksgiving", count: 8 },
        { label: "Hypothesis", count: 6 },
        { label: "Trump", count: 6 },
        { label: "TTIP", count: 5 },
        { label: "Tag1", count: 5 },
        { label: "annotation", count: 5 },
        { label: "blah", count: 5 },
        { label: "crypto", count: 5 },
        { label: "DenialOfJustice", count: 4 },
        { label: "ISDS", count: 4 },
        { label: "Identify contact", count: 4 },
        { label: "Meet", count: 4 },
        { label: "Phase 3", count: 4 },
        { label: "Printed", count: 4 },
        { label: "Ready", count: 4 },
        { label: "Schedule followup", count: 4 },
        { label: "call", count: 4 },
        { label: "issue", count: 4 },
        { label: "soup", count: 4 },
        { label: "stuffing", count: 4 },
        { label: "turkey", count: 4 },
        { label: "Math", count: 3 },
        { label: "SpellingError", count: 3 },
        { label: "Typography", count: 3 },
        { label: "annotations", count: 3 },
        { label: "btc", count: 3 },
        { label: "chicken", count: 3 },
        { label: "education", count: 3 },
        { label: "ico", count: 3 },
        { label: "marketing", count: 3 },
        { label: "sausage", count: 3 },
        { label: "Agreement", count: 2 },
        { label: "BOD", count: 2 },
        { label: "Copyright", count: 2 },
        { label: "EME", count: 2 },
        { label: "FMD", count: 2 },
        { label: "Finished", count: 2 },
        { label: "Genius", count: 2 },
        { label: "Good", count: 2 },
        { label: "Homicides", count: 2 },
        { label: "PLANNING", count: 2 },
        { label: "Privacy", count: 2 }
      ]
    };
  }
};
</script>
<style lang="scss">
.Tagcloud {
  margin-left: auto;
  margin-right: auto;
  max-width: rem(260);
  > p:first-child {
    align-items: center;
    display: flex;
  }
}
</style>