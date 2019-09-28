<template>
  <main>
    <Head title="Uh-oh! • Pattern Library • Hypothes.is" />
    <article :class="[$options.name, 'type__align--center']">
      <h2>Uh-oh, something weird happened</h2>
      <p>
        <router-link to="/">
          <Icon name="arrow-left" :size="24" />Return home
        </router-link>
      </p>
    </article>
  </main>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  name: "Error",
  components: { Icon }
};
</script>
<style lang="scss">
.Error {
  margin-left: auto;
  margin-right: auto;
  max-width: rem(960);
  padding: var(--size__l);
  width: 100%;
  > * + * {
    margin-top: var(--size__l);
  }
  h2:after {
    content: ".";
    color: var(--color__brand);
  }
  a {
    align-items: center;
    display: inline-flex;
  }
  .Icon {
    margin-right: var(--size__s);
  }
}
</style>