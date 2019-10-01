<template>
  <article :class="[$options.name, 'color__bg--base-ghost oomph__v--m padding__all--m']">
    <header class="oomph__v--m type__align--center">
      <router-link to="/examples">
        <Logo :size="32" />
      </router-link>
      <h2 class="color__type--base-mid">Hypothesis Installation</h2>
      <p class="type__align--left">
        Register here to receive a
        <strong>Consumer Key</strong> and
        <strong>Shared Secret</strong> for installing the Hypothesis LTI app. For installation instructions for your LMS see our
        <a
          href="https://web.hypothes.is/help/installing-the-hypothesis-lms-app/"
          target="_blank"
        >Hypothesis LMS Documentation</a>.
      </p>
    </header>
    <form @submit.prevent>
      <Card :padding="false">
        <section class="oomph__v--m padding__all--l">
          <Control icon="globe" label="LMS Domain">
            <input
              id="coolDomainEmail"
              name="coolDomainEmail"
              placeholder="ex. coolwebsite.com"
              required
              type="text"
            />
          </Control>
          <Control icon="email" label="Your email address">
            <input
              id="coolEmailInput"
              name="coolEmailInput"
              placeholder="ex. cooldude@gmail.com"
              required
              type="email"
            />
          </Control>
        </section>
        <section class="border__top color__border--base-light oomph__v--m padding__all--l">
          <h3>Canvas File Picker Integration</h3>
          <p class="color__type--base-mid">
            <em>The following fields are only needed if you are using the Canvas LMS and would like to enable the file picker.</em>
          </p>
          <Control label="Canvas Developer ID (optional)">
            <input id="CDID" name="CDID" type="text" />
          </Control>
          <Control label="Canvas Developer Key (optional)">
            <input id="CDK" name="CDK" type="text" />
          </Control>
        </section>
        <footer class="border__top color__border--base-light padding__all--m type__align--center">
          <Button icon="arrow-right" label="Generate credentials" :reverse="true" />
        </footer>
      </Card>
    </form>
  </article>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Control from "@/components/Control";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
export default {
  name: "LMS",
  components: { Button, Card, Control, Icon, Logo }
};
</script>
<style lang="scss">
.LMS {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  > * {
    max-width: rem(640);
    width: 100%;
  }
}
</style>