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
        <strong>Search</strong>
      </p>
      <Button
        icon="cancel"
        label="Close"
        variant="muted"
        @click.native="$emit('searchClose', false)"
      />
    </header>
    <section :class="[$options.name + '__content', 'padding__all--m']">
      <Control icon="search" :label="false" :reverse="true">
        <input type="text" placeholder="Search term…" v-model="searchValue" />
        <Button
          v-if="searchValue"
          icon="cancel"
          :label="false"
          variant="tertiary"
          @click.native="searchValue = ''"
        />
      </Control>
    </section>
  </Card>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Control from "@/components/Control";
export default {
  name: "SearchCard",
  components: { Button, Card, Control },
  data() {
    return {
      searchValue: ""
    };
  }
};
</script>
<style lang="scss">
@import "../../../styles/compositions/SearchCard";
</style>
