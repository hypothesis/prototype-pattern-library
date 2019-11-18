<template>
  <Card :class="[$options.name, 'type__family--system']" :padding="false">
    <header
      :class="[
        $options.name + '__header',
        'border__bottom color__border--base-light padding__bottom--xs padding__left--s padding__right--s padding__top--xs'
      ]"
    >
      <p
        :class="[
          $options.name + '__header--label',
          'color__type--base-mid margin__right--s type__size--s-m'
        ]"
      >
        <strong>Share This Annotation</strong>
      </p>
    </header>
    <section :class="[$options.name + '__content', 'padding__all--s']">
      <Control :label="false">
        <input
          id="coolURLInput"
          name="coolURLInput"
          placeholder="Type into me…"
          value="https://somereallylongurl.withsome.1202020?"
          type="text"
        />
        <Button slot="actionRight" icon="copy" label="Copy" variant="muted" />
      </Control>
      <p class="color__type--base-mid margin__top--xs type__size--s-m">
        Only members of the group
        <em>{{ group }}</em> may view this annotation.
      </p>
    </section>
    <footer
      :class="[
        $options.name + '__footer',
        'border__top color__border--base-light padding__left--s padding__right--s'
      ]"
    >
      <Button
        icon="social-twitter"
        :iconSize="20"
        :label="false"
        variant="tertiary"
      />
      <Button
        icon="social-facebook"
        :iconSize="20"
        :label="false"
        variant="tertiary"
      />
      <Button icon="email" :iconSize="20" :label="false" variant="tertiary" />
    </footer>
  </Card>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Control from "@/components/Control";
export default {
  name: "ShareIndividual",
  components: { Button, Card, Control },
  props: {
    group: { default: "Group name" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/Share";
</style>
