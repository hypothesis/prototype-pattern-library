<template>
  <article :class="$options.name">
    <h2>Color</h2>
    <router-link class="section" to="#color-base-palette">
      <Icon name="link" :size="16" />
      <h3 id="color-base-palette">Base palette</h3>
    </router-link>
    <p>It’s helpful in a color palette to strive for as much color contrast as possible. For text items in the interface stick with those that pass color-contrast tests. For borders and backgrounds, those that fail are still acceptable.</p>
    <section :class="$options.name + '__grid'">
      <Card v-for="(color,index) in colors" :key="index" :class="$options.name + '__color'">
        <span :class="[$options.name + '__color--bg', 'color__bg--' + color.name]"></span>
        <span :class="$options.name + '__color--label'">
          <code>--{{ color.name }}</code>
        </span>
        <span :class="$options.name + '__color--contrast'">
          <Icon name="contrast" :size="14" />
          {{ color.ratio + ':1'}} • {{ color.pass }}
        </span>
      </Card>
    </section>
    <router-link class="section" to="#color-helper-classes">
      <Icon name="link" :size="16" />
      <h3 id="color-helper-classes">Helper classes</h3>
    </router-link>
    <h4>.color__bg--value</h4>
    <p>
      When you need to apply a
      <code>background-color</code> value to elements.
    </p>
    <section :class="$options.name + '__rows'">
      <Card v-for="(color,index) in colors" :key="index" :class="$options.name + '__row'">
        <span :class="[$options.name + '__row--bg', 'color__bg--' + color.name]"></span>
        <span :class="$options.name + '__row--label'">
          <code>.color__bg--{{ color.name }}</code>
        </span>
      </Card>
    </section>
    <h4>.color__border--value</h4>
    <p>
      When you need to apply a
      <code>border-color</code> value to elements.
    </p>
    <section :class="[$options.name + '__rows', $options.name + '__rows--border']">
      <Card v-for="(color,index) in colors" :key="index" :class="$options.name + '__row'">
        <span
          :class="[$options.name + '__row--bg', 'color__border--' + color.name, color.name === 'contrast' ? 'color__bg--brand':'']"
        ></span>
        <span :class="$options.name + '__row--label'">
          <code>.color__border--{{ color.name }}</code>
        </span>
      </Card>
    </section>
    <h4>.color__type--value</h4>
    <p>
      When you need to apply a
      <code>color</code> value to elements.
    </p>
    <section :class="[$options.name + '__rows', $options.name + '__rows--type']">
      <Card v-for="(color,index) in colors" :key="index" :class="$options.name + '__row'">
        <span
          :class="[$options.name + '__row--example', 'color__type--' + color.name, color.name === 'contrast' ? 'color__bg--brand':'']"
        >
          <p>
            I’m
            <code>{{color.name}}</code> colored type!
          </p>
        </span>
        <span :class="$options.name + '__row--label'">
          <code>.color__type--{{ color.name }}</code>
        </span>
      </Card>
    </section>
    <h2>Type</h2>
    <router-link class="section" to="#type-family">
      <Icon name="link" :size="16" />
      <h3 id="type-family">Family</h3>
    </router-link>
    <p>
      We predominantly rely on the
      <code>system</code> type family for the main application, but most marketing materials load the
      <code>sans</code> type family for a bit of brand punch.
    </p>
    <section :class="[$options.name + '__rows', $options.name + '__rows--type']">
      <Card v-for="item in typeFamilies" :key="item" :class="$options.name + '__row'">
        <span :class="[$options.name + '__row--example', 'type__family--' + item]">
          <p>
            I’m type set in the
            <code>{{item}}</code> family!
          </p>
        </span>
        <span :class="$options.name + '__row--label'">
          <code>.type__family--{{ item }}</code>
        </span>
      </Card>
    </section>
    <router-link class="section" to="#type-size">
      <Icon name="link" :size="16" />
      <h3 id="type-size">Size</h3>
    </router-link>
    <p>
      Many standard elements like paragraph tags and headline tags are already mapped to specific type sizes, however, it’s always useful to be able use a standard class for the same function. To make this utility as useful as possible you can combine any
      <em>font-size</em> with a separate
      <em>line-height</em>. For example, a class of
      <code>.type__size--m-l</code> would result in the font-size being size
      <code>m</code> with a respective line-height being
      <code>l</code>
    </p>
    <h4>font-size</h4>
    <p>
      Options include:
      <code>xxs, xs, s, m, l, xl, xxl</code>
    </p>
    <h4>line-height</h4>
    <p>
      Options include:
      <code>s, m, l, xl</code>
    </p>
    <section :class="[$options.name + '__rows', $options.name + '__rows--type']">
      <Card v-for="(item, index) in typeSizes" :key="index" :class="$options.name + '__row'">
        <span :class="$options.name + '__row--example'">
          <p :class="'type__size--' + item.fontSize + '-' + item.lineHeight">
            I’m
            <code>{{item.fontSize}}</code> sized type
            with a
            <code>{{ item.lineHeight}}</code> line-height!
          </p>
        </span>
        <span :class="$options.name + '__row--label'">
          <code>.type__size--{{ item.fontSize }}-{{ item.lineHeight}}</code>
        </span>
      </Card>
    </section>
    <router-link class="section" to="#type-alignment">
      <Icon name="link" :size="16" />
      <h3 id="type-alignment">Alignment</h3>
    </router-link>
    <p>
      A simple utility to align type. One plus of mapping this to a specific class instead of inlining
      <code>text-align</code> is that we could map other global styles for center-aligned type for example.
    </p>
    <section :class="[$options.name + '__rows', $options.name + '__rows--type']">
      <Card v-for="(item, index) in typeAlignments" :key="index" :class="$options.name + '__row'">
        <span :class="[$options.name + '__row--example', 'type__align--' + item]">
          <p>
            I’m
            <code>{{item}}</code> aligned type!
          </p>
        </span>
        <span :class="$options.name + '__row--label'">
          <code>.type__align--{{ item }}</code>
        </span>
      </Card>
    </section>
    <h2>Position</h2>
    <p>
      Both of the following properties take a standard set of size variables as an argument
      <code>xs, s, m, l, xl</code>. These values are defined globally and help standardize the size and position of boxes.
    </p>
    <router-link class="section" to="#margin">
      <Icon name="link" :size="16" />
      <h3 id="margin">Margin</h3>
    </router-link>
    <p>
      The CSS
      <code>margin</code> property is predominantly used for adjusting how far away a box is from another box and can be very useful when defining a vertical rhythm within a container.
    </p>
    <h4>.margin__all--size</h4>
    <p>Places equal margin around the entire item.</p>
    <section :class="[$options.name + '__grid', $options.name + '__grid--position']">
      <Card v-for="size in sizes" :key="size" :class="[$options.name + '__marginItem', 'type__align--center']">
        <span :class="$options.name + '__marginItem--bg'">
          <span :class="['margin__all--' + size, $options.name + '__marginItem--shape']"></span>
        </span>

        <span :class="$options.name + '__marginItem--label'">
          <code>.margin__all--{{ size }}</code>
        </span>
      </Card>
    </section>
    <h4>.margin__direction--size</h4>
    <p>Places margin based on a direction and size argument.</p>
    <section
      v-for="size in sizes"
      :key="size"
      :class="[$options.name + '__grid', $options.name + '__grid--position']"
    >
      <Card
        v-for="direction in directions"
        :key="direction"
        :class="$options.name + '__marginItem'"
      >
        <section :class="$options.name + '__marginItem--bg'">
          <section
            :class="['margin__' + direction + '--' + size, $options.name + '__marginItem--shape']"
          ></section>
        </section>
        <section :class="$options.name + '__marginItem--label'">
          <code>.margin__{{ direction }}--{{ size }}</code>
        </section>
      </Card>
    </section>
    <router-link class="section" to="#padding">
      <Icon name="link" :size="16" />
      <h3 id="padding">Padding</h3>
    </router-link>
    <p>
      The CSS
      <code>padding</code> property is predominantly used for adjusting how much spacing there is within a box and can help establish minimal click areas and general sizes for elements.
    </p>
    <h4>.padding__all--size</h4>
    <p>Places equal padding within an item.</p>
    <section :class="[$options.name + '__grid', $options.name + '__grid--position']">
      <Card v-for="(size,index) in sizes" :key="index" :class="$options.name + '__paddingItem'">
        <span :class="$options.name + '__paddingItem--bg'">
          <span :class="['padding__all--' + size, $options.name + '__paddingItem--shape']"></span>
        </span>

        <span :class="$options.name + '__paddingItem--label'">
          <code>.padding__all--{{ size }}</code>
        </span>
      </Card>
    </section>
    <h4>.padding__direction--size</h4>
    <p>Places padding based on a direction and size argument.</p>
    <section
      v-for="(size,index) in sizes"
      :key="index"
      :class="[$options.name + '__grid', $options.name + '__grid--position']"
    >
      <Card
        v-for="direction in directions"
        :key="direction"
        :class="$options.name + '__paddingItem'"
      >
        <span :class="$options.name + '__paddingItem--bg'">
          <span
            :class="['padding__' + direction + '--' + size, $options.name + '__paddingItem--shape']"
          ></span>
        </span>

        <span :class="$options.name + '__paddingItem--label'">
          <code>.padding__{{ direction }}--{{ size }}</code>
        </span>
      </Card>
    </section>
  </article>
</template>
<script>
import axios from "axios";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
export default {
  name: "Helpers",
  computed: {
    colors() {
      let colors = this.$store.state.colors;
      colors.sort((a, b) => {
        if (a.index < b.index) {
          return -1;
        }
        if (a.index > b.index) {
          return 1;
        }
        return 0;
      });
      return colors;
    }
  },
  components: { Card, Icon },
  data() {
    return {
      directions: ["bottom", "left", "right", "top"],
      sizes: ["xs", "s", "m", "l", "xl"],
      typeFamilies: ["sans", "system", "mono"],
      typeAlignments: ["center", "left", "right"],
      typeSizes: [
        { fontSize: "s", lineHeight: "m" },
        { fontSize: "m", lineHeight: "l" },
        { fontSize: "l", lineHeight: "l" },
        { fontSize: "xl", lineHeight: "xl" }
      ]
    };
  }
};
</script>
<style lang="scss">
.Helpers {
  &__grid {
    display: grid;
    grid-gap: var(--size__l);
    grid-template-columns: repeat(auto-fit, minmax(rem(160), 1fr));
    &--position {
      align-items: start;
    }
  }
  &__color {
    padding: 0;
    overflow: hidden;
    &--bg {
      border-bottom: rem(1) solid var(--color__base-ghost);
      display: block;
      padding: var(--size__l);
    }
    &--label,
    &--contrast {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: var(--size__s);
      text-align: center;
    }
    &--contrast {
      padding-top: 0;
      .Icon {
        margin-right: var(--size__s);
      }
    }
  }
  &__rows {
    > * + * {
      margin-top: var(--size__l);
    }
  }
  &__row {
    align-items: stretch;
    display: flex;
    height: var(--size__xl);
    overflow: hidden;
    padding: 0;
    .Helpers__rows--type & {
      height: auto;
      flex-wrap: wrap;
    }
    &--bg {
      display: inline-flex;
      height: var(--size__xl);
      width: var(--size__xl);
      .Helpers__rows--border & {
        border-style: solid;
        border-width: var(--size__xs);
      }
    }
    &--example {
      border-bottom: rem(1) solid var(--color__base-ghost);
      padding: var(--size__m);
      width: 100%;
    }
    &--label {
      align-items: center;
      display: inline-flex;
      border-left: rem(1) solid var(--color__base-ghost);
      padding: var(--size__m);
      .Helpers__rows--type & {
        border-left: none;
      }
    }
  }
  &__marginItem {
    overflow: hidden;
    padding: 0;
    &--bg {
      border-bottom: rem(1) solid var(--color__base-ghost);
      display: block;
      padding: var(--size__s);
    }
    &--label {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: var(--size__s);
      text-align: center;
    }
    &--shape {
      background-color: var(--color__base-ghost);
      display: inline-block;
      height: var(--size__l);
      width: var(--size__l);
    }
  }
  &__paddingItem {
    overflow: hidden;
    padding: 0;
    &--bg {
      border-bottom: rem(1) solid var(--color__base-ghost);
      display: flex;
      justify-content: center;
      padding: var(--size__s);
    }
    &--label {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: var(--size__s);
      text-align: center;
    }
    &--shape {
      align-items: stretch;
      border: rem(1) solid var(--color__base-ghost);
      background-color: var(--color__base-ghost);
      display: inline-flex;
      &:after {
        background-color: var(--color__contrast);
        content: "";
        display: inline-block;
        height: var(--size__l);
        width: var(--size__l);
      }
    }
  }
}
</style>