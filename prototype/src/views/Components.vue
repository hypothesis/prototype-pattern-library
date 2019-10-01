<template>
  <Library>
    <Head title="Components • Pattern Library • Hypothes.is" />
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
        <Card>
          <Badge label="Something bold goes here!" :micro="false" variant="contrast" />
          <figcaption>
            <p>
              <em>Contrast variant in a larger size</em>
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
            <input id="coolInput" name="coolInput" placeholder="Type into me…" type="text" />
          </Control>
          <figcaption>
            <p>
              <em>Input with label</em>
            </p>
          </figcaption>
        </Card>
        <Card>
          <Control icon="email" label="Your email address">
            <input
              id="coolEmailInput"
              name="coolEmailInput"
              placeholder="ex. cooldude@gmail.com"
              type="text"
            />
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
              id="coolURLInput"
              name="coolURLInput"
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
            <select id="coolSelect" name="coolSelect">
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
            <textarea id="coolTextarea" name="coolTextarea" placeholder="Type into me…"></textarea>
          </Control>
          <figcaption>
            <p>
              <em>Textarea</em>
            </p>
          </figcaption>
        </Card>
        <Card>
          <Control icon="search" :label="false" :reverse="true">
            <input
              id="coolSearchInput"
              name="coolSearchInput"
              type="text"
              placeholder="Search for something…"
            />
          </Control>
          <figcaption>
            <p>
              <em>Search input</em>
            </p>
          </figcaption>
        </Card>
      </ComponentWrapper>
      <ComponentWrapper name="Icon">
        <p>Need a copy of one of these icons as an SVG? Simply click the icon you’d like and it will be copied to your clipboard.</p>
        <Badge
          class="copiedIcon"
          v-if="copiedIcon"
          :label="'“' + copiedIcon + '” icon copied successfully!'"
          :micro="false"
          variant="contrast"
        />
        <section class="icons">
          <Card v-for="(icon,index) in icons" :key="index">
            <button
              :aria-label="'Click to copy the ' + icon + ' icon'"
              class="icon"
              @click.self="copyIcon"
            >
              <Icon :name="icon.name" :size="24" />
            </button>
            <figcaption>
              <p>
                <code>{{ icon.name }}</code>
              </p>
            </figcaption>
          </Card>
        </section>
      </ComponentWrapper>
      <ComponentWrapper name="Menu">
        <p>
          The
          <code>Menu</code> component is a hybrid slot/wrapper component which provides a way to wrap any matter of content with an element which controls the position of the menu that floats underneath it. You can pass an
          <code>active</code> prop to trigger the visibilty of the menu. The menu itself can accept children via a slot.
        </p>
        <Card>
          <Menu :active="controlMenuFocused" class="controlMenuFocused">
            <Control icon="search" :label="false" :reverse="true">
              <input
                type="text"
                placeholder="Search for something…"
                @focus="controlMenuFocused = !controlMenuFocused"
              />
            </Control>
            <p slot="menu" class="padding__all--m">A bunch of really cool filter stuffs</p>
          </Menu>
          <figcaption>
            <p>
              <em>
                Menu wrapping a
                <code>Control</code> component
              </em>
            </p>
          </figcaption>
        </Card>
        <Card>
          <Menu :active="buttonMenuFocused" class="type__align--center">
            <Button
              :dropdown="true"
              icon="profile"
              :iconSize="16"
              :label="false"
              variant="tertiary"
              @click.native="buttonMenuFocused = !buttonMenuFocused"
            />
            <section slot="menu" class="padding__all--s">
              <Button label="Cancel" variant="secondary" />
              <Button class="margin__left--s" icon="check" label="Save" />
            </section>
          </Menu>
          <figcaption>
            <p>
              <em>
                Menu wrapping a
                <code>Button</code> component
              </em>
            </p>
          </figcaption>
        </Card>
      </ComponentWrapper>
      <ComponentWrapper name="NavItem">
        <p>
          The
          <code>NavItem</code> compoonent shines in menus and takes many of the properties of a
          <code>Button</code> component. One of the best use cases where this particular component is flexible is with nesting children
          <code>NavItem</code> comnponents inside a parent using the
          <code>nested</code> slot.
        </p>
        <Card>
          <NavItem :dropdown="true">
            <NavItem icon="external" label="Option 1" :small="true" slot="nested" />
            <NavItem icon="copy" label="Option 2" :small="true" slot="nested" />
            <NavItem icon="leave" label="Option 3" :small="true" slot="nested" />
          </NavItem>
          <figcaption>
            <p>
              <em>NavItem with a dropdown</em>
            </p>
          </figcaption>
        </Card>
        <Card>
          <NavItem icon="settings" label="Account settings" :reverse="true" />
          <figcaption>
            <p>
              <em>
                NavItem with
                <code>reverse</code> prop
              </em>
            </p>
          </figcaption>
        </Card>
        <Card>
          <NavItem icon="plus" label="Add something" :small="true" />
          <figcaption>
            <p>
              <em>
                NavItem with
                <code>small</code> prop
              </em>
            </p>
          </figcaption>
        </Card>
      </ComponentWrapper>
      <ComponentWrapper name="Tag">
        <Card>
          <Tag path="#yep" />
          <figcaption>
            <p>
              <em>Default Tag</em>
            </p>
          </figcaption>
        </Card>
        <Card>
          <Tag icon="cancel" label="Hypothesis Reading" parent="Group" />
          <figcaption>
            <p>
              <em>
                Tag with
                <code>parent</code> and
                <code>icon</code> props
              </em>
            </p>
          </figcaption>
        </Card>
        <Card>
          <Tag :count="58" label="h-breadcrumbs" />
          <figcaption>
            <p>
              <em>
                Tag with
                <code>count</code> prop
              </em>
            </p>
          </figcaption>
        </Card>
      </ComponentWrapper>
    </article>
  </Library>
</template>
<script>
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Control from "@/components/Control";
import Icon from "@/components/Icon";
import Menu from "@/components/Menu";
import NavItem from "@/components/NavItem";
import Tag from "@/components/Tag";
import ComponentWrapper from "@/compositions/presentational/ComponentWrapper";
import Library from "@/compositions/presentational/Library";
import { icons } from "../components/icons";
export default {
  name: "Components",
  components: {
    Badge,
    Button,
    Card,
    ComponentWrapper,
    Control,
    Icon,
    Library,
    Menu,
    NavItem,
    Tag
  },
  data() {
    return {
      icons: icons,
      copiedIcon: false,
      controlMenuFocused: false,
      buttonMenuFocused: false
    };
  },
  methods: {
    copyIcon() {
      let children = event.srcElement.childNodes[0];
      let code = children.outerHTML.replace(
        new RegExp('width="24" height="24"', "g"),
        'width="16" height="16"'
      );
      let title = children.getAttribute("class").replace("Icon Icon--", "");
      let dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute("id", "dummy_id");
      document.getElementById("dummy_id").value = code;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      this.copiedIcon = title;
      setTimeout(() => {
        this.copiedIcon = false;
      }, 1500);
    }
  }
};
</script>
<style lang="scss">
.Components {
  .ComponentWrapper > .Card,
  .icons > .Card {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .Control {
      width: 100%;
    }
    figcaption {
      border-top: rem(1) solid var(--color__base-light);
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
  .copiedIcon {
    box-shadow: 0 rem(8) rem(16) rem(-8) rgba(black, 0.25);
    left: 50%;
    position: fixed;
    top: rem(72);
    transform: translateX(-50%);
  }
  .controlMenuFocused {
    width: 100%;
    .Menu__wrap {
      width: 100%;
    }
  }
}
</style>