<template>
  <article :class="[$options.name, 'padding__all--l']">
    <AnnotationAlt :edited="false" user="User Annotation" />
    <AnnotationAlt
      :editable="true"
      excerpt="Uh-oh, more Coronavirus bad news. Time to rethink my trip to the Italian Riveria!"
      quote="The quarantine includes the cities of Milan and Venice, as well as the entire northern region of Lombardy, Italy's financial heart. It affects more than 16 million people in coronavirus hotbed areas and is scheduled to remain"
      user="My Annotation"
    />
    <AnnotationAlt
      created="20200102"
      :editable="true"
      :edited="false"
      excerpt="What exactly is a page note and how does it differentiate itself from an annotation? Hmm…"
      indicator="notes"
      :quote="false"
      type="note"
      user="Page Note"
    />
    <AnnotationAlt
      created="20200309"
      :edited="false"
      excerpt="Yep, agree with this!"
      quote="”It was the sense of being in a village, and a sense of us against the world,” he says. ”You know who everybody is, you know who not to mess with.”"
      user="User Annotation"
    >
      <AnnotationAlt
        created="20200309"
        :edited="false"
        excerpt="Cool reply #1"
        :quote="false"
        user="Standard Reply"
      />
      <AnnotationAlt
        created="20200309"
        :edited="false"
        excerpt="Cool reply #2"
        :quote="false"
        user="Standard Reply"
      >
        <AnnotationAlt
          created="20200309"
          :edited="false"
          excerpt="I agree with Standard Reply!"
          indicator="reply"
          :quote="false"
          user="Nested Reply"
        />
      </AnnotationAlt>
    </AnnotationAlt>
  </article>
</template>
<script>
import AnnotationAlt from "@/compositions/AnnotationAlt";
export default {
  name: "AnnotationVariations",
  components: { AnnotationAlt }
};
</script>
<style lang="scss" scoped>
.AnnotationVariations {
  align-items: start;
  display: grid;
  grid-gap: var(--size__l);
  grid-template-columns: repeat(auto-fit, minmax(rem(320), rem(416)));
  justify-content: center;
}
</style>
