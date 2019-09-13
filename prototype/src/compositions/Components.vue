<template>
  <article :class="$options.name">
    <ComponentWrapper name="Button">
      <figure>
        <Button icon="share" :iconSize="16" :label="false" variant="tertiary" />
        <figcaption>
          <p>
            <em>Icon only (tertiary)</em>
          </p>
        </figcaption>
      </figure>
      <figure>
        <Button :dropdown="true" icon="profile" :iconSize="16" :label="false" variant="tertiary" />
        <figcaption>
          <p>
            <em>Icon + dropdown (tertiary)</em>
          </p>
        </figcaption>
      </figure>
      <figure>
        <Button icon="notes" :iconSize="16" :label="false" variant="secondary" />
        <figcaption>
          <p>
            <em>Icon only (secondary)</em>
          </p>
        </figcaption>
      </figure>
      <figure>
        <Button />
        <figcaption>
          <p>
            <em>Label only (primary)</em>
          </p>
        </figcaption>
      </figure>
      <figure>
        <Button icon="cancel" label="Clear search" />
        <figcaption>
          <p>
            <em>Label + icon (primary)</em>
          </p>
        </figcaption>
      </figure>
      <figure>
        <Button icon="filter" label="Only selected student" variant="secondary" />
        <figcaption>
          <p>
            <em>Label + icon (secondary)</em>
          </p>
        </figcaption>
      </figure>
      <figure>
        <Button icon="plus" label="New private group" variant="tertiary" />
        <figcaption>
          <p>
            <em>Label + icon (tertiary)</em>
          </p>
        </figcaption>
      </figure>
    </ComponentWrapper>
    <ComponentWrapper name="Icon">
      <section class="icons">
        <figure v-for="(icon,index) in icons" :key="index" class="icon">
          <Icon :name="icon.name" :size="24" />
          <figcaption>
            <p>
              <code>{{ icon.name }}</code>
            </p>
          </figcaption>
        </figure>
      </section>
    </ComponentWrapper>
  </article>
</template>
<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import ComponentWrapper from "@/compositions/ComponentWrapper";
export default {
  name: "Components",
  components: { Button, Icon, ComponentWrapper },
  data() {
    return {
      icons: this.$store.state.icons
    };
  }
};
</script>
<style lang="scss">
.Components {
  figure {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--size__m);
    figcaption {
      margin-top: var(--size__m);
    }
  }
  .icons {
    align-content: start;
    align-items: start;
    display: grid;
    grid-gap: rem(16);
    grid-template-columns: repeat(auto-fit, minmax(rem(160), 1fr));
    @include breakpoint(s) {
      grid-template-columns: repeat(auto-fit, minmax(rem(240), 1fr));
    }
  }
}
</style>