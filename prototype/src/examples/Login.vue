<template>
  <article :class="[$options.name, 'color__bg--base-ghost oomph__v--m padding__all--l']">
    <header class="oomph__v--m type__align--center">
      <router-link to="/">
        <Logo :size="32" />
      </router-link>
      <h2 class="color__type--base-mid">Login</h2>
    </header>
    <form @submit.prevent>
      <Card :padding="false">
        <section class="oomph__v--m padding__all--l">
          <Control icon="email" label="Username/Email Address">
            <input
              id="coolEmailInput"
              name="coolEmailInput"
              placeholder="ex. cooldude@gmail.com"
              required
              type="email"
            />
          </Control>
          <Control icon="lock" label="Password">
            <input
              id="coolPassword"
              name="coolPassword"
              placeholder="ex. super123Secure!"
              required
              type="password"
            />
          </Control>
          <p class="type__align--center">
            <a
              class="color__type--base-mid"
              href="https://hypothes.is/forgot-password"
              target="_blank"
            >Forgot your password?</a>
          </p>
        </section>
        <footer class="border__top color__border--base-light padding__all--m type__align--center">
          <Button icon="arrow-right" label="Log in" :reverse="true" />
        </footer>
      </Card>
    </form>
    <p class="color__type--base-mid type__align--center">
      Don’t have an account?
      <a class="color__type--base-mid" href="https://hypothes.is/signup" target="_blank">Sign up</a>
    </p>
  </article>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Control from "@/components/Control";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
export default {
  name: "Login",
  components: { Button, Card, Control, Icon, Logo }
};
</script>
<style lang="scss">
.Login {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  > * {
    max-width: rem(480);
    width: 100%;
  }
}
</style>