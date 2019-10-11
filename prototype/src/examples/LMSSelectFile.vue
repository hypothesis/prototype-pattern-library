<template>
  <article :class="[$options.name, 'color__bg--base-ghost oomph__v--m padding__all--m']">
    <header class="oomph__v--m type__align--center">
      <router-link to="/examples">
        <Logo :size="32" />
      </router-link>
      <h3 class="color__type--base-mid">Select web page or PDF</h3>
      <p>You can select content for your assignment from one of the following sources:</p>
    </header>
    <form @submit.prevent>
      <Card :padding="false" class="type__align--center">
        <section class="oomph__v--m padding__all--l">
          <p>URL of web page or PDF</p>
          <Control :label="false">
            <input
              id="coolURL"
              name="coolURL"
              placeholder="ex. coolwebsite.com"
              type="url"
            />
            <Button slot="actionRight" icon="check" label="Select URL"/> 
          </Control>
        </section>
        <section class="border__top color__border--base-light oomph__v--m padding__all--l">
          <p>Or PDF from Google Drive</p>
          <Button icon="copy" label="Select PDF"/> 
        </section>
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
  name: "LMSSelectFile",
  components: { Button, Card, Control, Icon, Logo }
};
</script>
<style lang="scss">
.LMSSelectFile {
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