<template>
  <article :class="$options.name">
    <header
      :class="[$options.name + '__header', 'border__bottom color__bg--contrast color__border--base-light padding__all--m']"
    >
      <SearchWeb />
    </header>
    <section :class="[$options.name + '__content', 'border__bottom color__border--base-light']">
      <h4 class="color__type--base-mid padding__all--m">Last 7 days</h4>
      <SearchItemWeb
        v-for="(item,index) in annotations"
        :key="index"
        :annotators="annotators"
        :tags="tags"
        :title="item.title"
        :url="item.url"
      >
        <Annotation
          v-for="(item,index) in item.comments"
          :key="index"
          :edited="false"
          role="public"
          :user="item.user"
          :created="item.date"
          :group="item.group"
          :quote="item.quote"
          :excerpt="item.comment"
          :tags="item.tags"
        />
      </SearchItemWeb>
    </section>
  </article>
</template>
<script>
import Annotation from "@/compositions/Annotation";
import SearchWeb from "@/compositions/SearchWeb";
import SearchItemWeb from "@/compositions/SearchItemWeb";
export default {
  name: "Search",
  components: { Annotation, SearchWeb, SearchItemWeb },
  computed: {
    annotators() {
      let array = [];
      let users = this.annotations[0].comments;
      users.forEach(item => {
        array.push(item.user);
      });
      if (array.length) {
        let cleaned = new Set(array);
        return Array.from(cleaned);
      } else {
        return [];
      }
    },
    tags() {
      let array = [];
      let users = this.annotations[0].comments;
      users.forEach(item => {
        item.tags ? array.push(item.tags) : "";
      });
      if (array.length) {
        let cleaned = new Set(array.flat());
        return Array.from(cleaned);
      } else {
        return [];
      }
    }
  },
  data() {
    return {
      annotations: [
        {
          title: "The Teenage Brain: Spock Vs. Captain Kirk",
          url:
            "https://www.npr.org/sections/ed/2015/03/11/391864852/the-teenage-brain-spock-vs-captain-kirk#annotations:I8fKVOPREemW4K9OuX91ew",
          comments: [
            {
              comment: `From my own perspective when I was younger, I loved being around other kids. Since I am an only child the only time I really saw my friends were in school or at sports practices. I loved the feeling of being able to see them and just talk which made me love school. When I did not go to school it was like weight on my shoulders and it made me upset. So this sentence makes sense to me because I can see how adolescents get a "high" from being around their friends and classmates.`,
              date: `September 30, 2019`,
              group: `Public`,
              quote: `kind of high simply by being around other adolescents`,
              user: `domenica.lerch`
            },
            {
              comment: `This makes sense to me because looking at my younger cousin who is in this age group, she rather get something in return for doing good rather than just doing it because it is the right thing to do.`,
              date: `September 30, 2019`,
              group: `Public`,
              quote: `reward-seeking warp speed.`,
              user: `domenica.lerch`,
              tags: ["CoolTag", "AnotherCoolTag"]
            },
            {
              comment: `In my own experiences, when I am driving with my friends I seem to be more cautious rather than myself being alone. For example, driving through a yellow light I do when I'm by myself but when I am with a group of friends or just another person in the car I stop instead of running through it. Just for my own personal experience I am more cautious in the car with my friends rather than just myself.`,
              date: `September 30, 2019`,
              group: `Public`,
              quote: `an adolescent's weakness is other adolescents.`,
              user: `domenica.lerch`
            },
            {
              comment: `I agree with this statement because just being around my friends (people who I trust) makes me feel safe and secure where I feel less anxious about a situation. It allows me to relax when hard times are coming my way. As well as getting peer pressured to do what my friends do because if they are doing it then it ok for me to as well.`,
              date: `September 30, 2019`,
              group: `Public`,
              quote: `The mere presence of peers makes them less cautious.`,
              user: `domenica.lerch`
            },
            {
              comment: `The prefrontal cortex isn't completely done growing till you are around 25, it is one of the last areas of brain to completely mature. It is the voice of reason and I think that is why young adolescents get into trouble or make bad choices, along with the prefrontal cortex not being able to catch up with the limbic system. I agree adolescence is all about the long view, because when you are a young adolescent and growing it isn't complete in a short amount of time. It takes a long time and during that period you have many views of different situations and experiences.`,
              date: `September 30, 2019`,
              group: `Public`,
              quote: `The prefrontal cortex is still a work-in-progress. And it serves a vital role in our decision-making.`,
              user: `kendall.castro`
            },
            {
              comment: `I thought this was interesting about the prefrontal cortex not being able to keep up with the limbic system and in the recording it says that the limbic system doesn't just flag rewards like sex and alcohol, for a 12 year old, they can get a kind of high simply from being around other adolescence while seeking others out for developing skills, to protect themselves and overall, grow up which can involve risky business and bad decisons.`,
              group: `Public`,
              quote: `Here's the problem. For kids in adolescence, the prefrontal cortex is still developing, and it can't keep up with the limbic system as it goes into reward-seeking warp speed.`,
              user: `kendall.castro`
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.Search {
  min-height: 100vh;
  .SearchWeb,
  &__content {
    margin-left: auto;
    margin-right: auto;
    max-width: rem(360);
    width: 100%;
    @include breakpoint(xsl) {
      max-width: rem(640);
    }
    @include breakpoint(m) {
      max-width: rem(960);
    }
    @include breakpoint(xl) {
      max-width: rem(1280);
    }
  }
}
</style>