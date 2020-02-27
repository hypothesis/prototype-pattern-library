<template>
  <Card :class="[$options.name, 'type__family--system']" :padding="false">
    <header
      :class="[
        $options.name + '__header',
        'border__bottom color__border--base-light padding__bottom--s padding__left--m padding__right--m padding__top--s'
      ]"
    >
      <p
        :class="[
          $options.name + '__header--label',
          'color__type--base-mid margin__right--s'
        ]"
      >
        <strong>Share Annotations in {{ group }}</strong>
      </p>
      <Button
        icon="cancel"
        label="Close"
        variant="muted"
        @click.native="$emit('shareClose', false)"
      />
    </header>
    <section :class="[$options.name + '__content', 'padding__all--m']">
      <p class="type__size--s-m">
        <strong>Use this link to share these annotations with anyone:</strong>
      </p>
      <Control class="margin__top--m" :label="false">
        <input
          id="coolURLInput"
          name="coolURLInput"
          placeholder="Type into me…"
          value="https://somereallylongurl.withsome.1202020?"
          type="text"
        />
        <Button slot="actionRight" icon="copy" label="Copy" variant="muted" />
      </Control>
      <p class="color__type--base-mid margin__top--m type__size--s-m">
        Anyone using this link may view the annotations in the group
        <em>{{ group }}</em
        >. Private annotations are only visible to you.
      </p>
    </section>
    <footer
      :class="[
        $options.name + '__footer',
        'border__top color__border--base-light padding__bottom--xs padding__left--s padding__right--s padding__top--xs'
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
  name: "Share",
  components: { Button, Card, Control },
  props: {
    group: { default: "Group name" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/Share";
</style>
