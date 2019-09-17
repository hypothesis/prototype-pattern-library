<template>
  <article :class="$options.name">
    <ComponentWrapper name="Badge">
      <Card>
        <Badge />
        <figcaption>
          <p>
            <em>Primary variant</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Badge label="New" variant="brand" />
        <figcaption>
          <p>
            <em>Brand variant</em>
          </p>
        </figcaption>
      </Card>
    </ComponentWrapper>
    <ComponentWrapper name="Button">
      <Card>
        <Button icon="share" :iconSize="16" :label="false" variant="tertiary" />
        <figcaption>
          <p>
            <em>Icon only (tertiary)</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Button :dropdown="true" icon="profile" :iconSize="16" :label="false" variant="tertiary" />
        <figcaption>
          <p>
            <em>Icon + dropdown (tertiary)</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Button icon="notes" :iconSize="16" :label="false" variant="secondary" />
        <figcaption>
          <p>
            <em>Icon only (secondary)</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Button />
        <figcaption>
          <p>
            <em>Label only (primary)</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Button label="Get Started" variant="brand" />
        <figcaption>
          <p>
            <em>Label only (brand)</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Button icon="cancel" label="Clear search" />
        <figcaption>
          <p>
            <em>Label + icon (primary)</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Button icon="filter" label="Only selected student" variant="secondary" />
        <figcaption>
          <p>
            <em>Label + icon (secondary)</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Button icon="plus" label="New private group" variant="tertiary" />
        <figcaption>
          <p>
            <em>Label + icon (tertiary)</em>
          </p>
        </figcaption>
      </Card>
    </ComponentWrapper>
    <ComponentWrapper name="Card">
      <Card>
        <p>
          The
          <code>Card</code> component is what we call a “slot” component—it’s purpose is to wrap any matter of content in a reusable, predictable structure. We can control the content more globally and structure reusable props if we’d like. I’m currently using the component to wrap all the presentation layers of this Pattern Library—neat huh?
        </p>
      </Card>
    </ComponentWrapper>
    <ComponentWrapper name="Control">
      <p>
        The
        <code>Control</code> component provides a dynamic wrapper element around common control inputs. By using a combination of
        <code>action</code>&nbsp;
        <code>icon</code> and
        <code>reverse</code> props we can achieve a consistent look for our controls using one component.
      </p>
      <Card>
        <Control>
          <input placeholder="Type into me…" type="text" />
        </Control>
        <figcaption>
          <p>
            <em>Input with label</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Control icon="email" label="Your email address">
          <input placeholder="ex. cooldude@gmail.com" type="text" />
        </Control>
        <figcaption>
          <p>
            <em>Input with label + icon</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Control :action="true" icon="copy" :label="false">
          <input
            placeholder="Type into me…"
            value="https://somereallylongurl.withsome.1202020?"
            type="text"
          />
        </Control>
        <figcaption>
          <p>
            <em>Input + action button</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Control icon="caret-down" label="What’s your favorite…">
          <select>
            <option selected>Please choose…</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </Control>
        <figcaption>
          <p>
            <em>Select</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Control label="Your comment">
          <textarea placeholder="Type into me…"></textarea>
        </Control>
        <figcaption>
          <p>
            <em>Textarea</em>
          </p>
        </figcaption>
      </Card>
      <Card>
        <Control icon="search" :label="false" :reverse="true">
          <input type="search" placeholder="Search for something…" />
        </Control>
        <figcaption>
          <p>
            <em>Search input</em>
          </p>
        </figcaption>
      </Card>
    </ComponentWrapper>
    <ComponentWrapper name="Icon">
      <section class="icons">
        <Card v-for="(icon,index) in icons" :key="index" class="icon">
          <Icon :name="icon.name" :size="24" />
          <figcaption>
            <p>
              <code>{{ icon.name }}</code>
            </p>
          </figcaption>
        </Card>
      </section>
    </ComponentWrapper>
  </article>
</template>
<script>
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Control from "@/components/Control";
import Icon from "@/components/Icon";
import ComponentWrapper from "@/compositions/ComponentWrapper";
import { icons } from "../components/icons";
export default {
  name: "Components",
  components: {
    Badge,
    Button,
    Card,
    ComponentWrapper,
    Control,
    Icon
  },
  data() {
    return {
      icons: icons
    };
  }
};
</script>
<style lang="scss">
.Components {
  .Card {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .Control {
      width: 100%;
    }
    figcaption {
      border-top: rem(1) solid var(--color__base-ghost);
      margin-left: rem(-16);
      margin-right: rem(-16);
      margin-top: var(--size__m);
      padding-top: var(--size__s);
      text-align: center;
      width: calc(100% + (var(--size__m) * 2));
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