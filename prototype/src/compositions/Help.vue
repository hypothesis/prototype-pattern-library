<template>
  <Card :class="[$options.name, 'type__family--system']" :padding="false">
    <header
      :class="[$options.name + '__header', 'border__bottom color__border--base-light padding__bottom--s padding__left--m padding__right--m padding__top--s']"
    >
      <p :class="[$options.name + '__header--label', 'color__type--base-mid margin__right--s']">
        <strong>Need some help?</strong>
      </p>
      <Button icon="cancel" label="Close" variant="muted" @click.native="$emit('helpClose',false)" />
    </header>
    <nav :class="[$options.name + '__nav', 'border__bottom color__border--base-light']">
      <section class="padding__bottom--xs padding__top--xs type__align--center">
        <Button icon="external" label="Help topics" :reverse="true" variant="tertiary" />
      </section>
      <section
        class="border__left border__top color__border--base-light padding__bottom--xs padding__top--xs type__align--center"
      >
        <Button icon="plus" label="New support ticket" :reverse="true" variant="tertiary" />
      </section>
    </nav>
    <section :class="[$options.name + '__content', 'padding__all--m']">
      <dl>
        <dt>Version</dt>
        <dd>1.200.0</dd>
        <dt>User Agent</dt>
        <dd>Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36</dd>
        <dt>URL</dt>
        <dd>https://www.npr.org/</dd>
        <dt>Username</dt>
        <dd>jaredpdesigns</dd>
        <dt>Date</dt>
        <dd>28 Sep 2019 12:58:29 -1000</dd>
      </dl>
    </section>
    <footer
      :class="[$options.name + '__footer', 'border__top color__border--base-light padding__all--xs type__align--center']"
    >
      <Button icon="copy" label="Copy version history" :reverse="true" variant="tertiary" />
    </footer>
  </Card>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Control from "@/components/Control";
export default {
  name: "Help",
  components: { Button, Card, Control },
  props: {
    group: { default: "Group name" }
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/Help";
</style>