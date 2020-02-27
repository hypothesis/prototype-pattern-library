<template>
  <Library>
    <Head title="Helpers • Pattern Library • Hypothes.is" />
    <article :class="$options.name">
      <h2>Color</h2>
      <router-link class="section" to="#color-base-palette">
        <Icon name="link" :size="16" />
        <h3 id="color-base-palette">Base palette</h3>
      </router-link>
      <p>It’s helpful in a color palette to strive for as much color contrast as possible. For text items in the interface stick with those that pass color-contrast tests. For borders and backgrounds, those that fail are still acceptable.</p>
      <p class="tip">
        <Badge label="Tip" :micro="false" variant="brand" />Need a copy of the HEX value for any of the following colors? Click the color to copy to your clipboard.
      </p>
      <Badge v-if="timer" class="status" :label="timer" :micro="false" variant="contrast" />
      <section :class="$options.name + '__grid'">
        <Card
          v-for="(color,index) in colors"
          :key="'color' + index"
          :class="$options.name + '__color'"
        >
          <button
            :class="[$options.name + '__color--bg', 'color__bg--' + color]"
            @click="copyColor(color)"
          ></button>
          <span :class="$options.name + '__color--label'">
            <code>{{ color }}</code>
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
        <Card
          v-for="(color,index) in colors"
          :key="'colorBG' + index"
          :class="$options.name + '__row'"
        >
          <span :class="[$options.name + '__row--bg', 'color__bg--' + color]"></span>
          <span :class="$options.name + '__row--label'">
            <code>.color__bg--{{ color }}</code>
          </span>
        </Card>
      </section>
      <h4>.color__border--value</h4>
      <p>
        When you need to apply a
        <code>border-color</code> value to elements.
      </p>
      <section :class="[$options.name + '__rows', $options.name + '__rows--border']">
        <Card
          v-for="(color,index) in colors"
          :key="'colorBorder' + index"
          :class="$options.name + '__row'"
        >
          <span
            :class="[$options.name + '__row--bg', 'color__border--' + color, color === 'contrast' ? 'color__bg--brand':'']"
          ></span>
          <span :class="$options.name + '__row--label'">
            <code>.color__border--{{ color }}</code>
          </span>
        </Card>
      </section>
      <h4>.color__type--value</h4>
      <p>
        When you need to apply a
        <code>color</code> value to elements.
      </p>
      <section :class="[$options.name + '__rows', $options.name + '__rows--type']">
        <Card
          v-for="(color,index) in colors"
          :key="'colorType' + index"
          :class="$options.name + '__row'"
        >
          <span
            :class="[$options.name + '__row--example', 'color__type--' + color, color === 'contrast' ? 'color__bg--brand':'']"
          >
            <p>
              I’m
              <code>{{color}}</code> colored type!
            </p>
          </span>
          <span :class="$options.name + '__row--label'">
            <code>.color__type--{{ color }}</code>
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
        <Card
          v-for="(item, index) in typeSizes"
          :key="'typeSize' + index"
          :class="$options.name + '__row'"
        >
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
        <Card
          v-for="(item, index) in typeAlignments"
          :key="'typeAlign' + index"
          :class="$options.name + '__row'"
        >
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
        The following classes take a standard set of size variables as an argument
        <code>xs, s, m, l, xl</code>. These values are defined globally and help standardize the size and position of elements.
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
        <Card
          v-for="(size,index) in sizes"
          :key="'marginAll' + index"
          :class="[$options.name + '__marginItem', 'type__align--center']"
        >
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
        v-for="(size,index) in sizes"
        :key="'marginDirection' + index"
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
      <router-link class="section" to="#oomph">
        <Icon name="link" :size="16" />
        <h3 id="oomph">Oomph</h3>
      </router-link>
      <p>
        This class helps establish horizontal or vertical rhythm for the children of an element. This property can easily be offset by applying a
        <code>margin__direction--size</code> on the child element itself.
      </p>
      <h4>.oomph__h--size</h4>
      <Card
        v-for="(size,index) in sizes"
        :key="'oomphH' + index"
        :class="$options.name + '__oomphItem'"
      >
        <section :class="[$options.name + '__oomphItem--wrap', 'oomph__h--' + size]">
          <span :class="$options.name + '__oomphItem--shape'"></span>
          <span :class="$options.name + '__oomphItem--shape'"></span>
          <span :class="$options.name + '__oomphItem--shape'"></span>
        </section>
        <span :class="$options.name + '__oomphItem--label'">
          <p>
            <code>.oomph__h--{{ size }}</code>
          </p>
        </span>
      </Card>
      <h4>.oomph__v--size</h4>
      <Card
        v-for="(size,index) in sizes"
        :key="'oomphV' + index"
        :class="[$options.name + '__oomphItem', $options.name + '__oomphItem--vertical']"
      >
        <section :class="[$options.name + '__oomphItem--wrap', 'oomph__v--' + size]">
          <span :class="$options.name + '__oomphItem--shape'"></span>
          <span :class="$options.name + '__oomphItem--shape'"></span>
          <span :class="$options.name + '__oomphItem--shape'"></span>
        </section>
        <span :class="$options.name + '__oomphItem--label'">
          <p>
            <code>.oomph__v--{{ size }}</code>
          </p>
        </span>
      </Card>
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
        <Card
          v-for="(size,index) in sizes"
          :key="'padding' + index"
          :class="$options.name + '__paddingItem'"
        >
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
        :key="'padding' + index"
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
      <h2>Utility</h2>
      <p>The following classes serve as utilities and take the burden off commonly repeated CSS.</p>
      <router-link class="section" to="#border">
        <Icon name="link" :size="16" />
        <h3 id="border">Border</h3>
      </router-link>
      <p>
        This class makes it easy to apply a border either directionally or around an entire element. It does not take an argument for the color of the border, you should use the
        <code>.color__border--color</code> class listed above.
      </p>
      <h4>.border__all</h4>
      <section :class="[$options.name + '__grid', $options.name + '__grid--position']">
        <Card :class="$options.name + '__borderItem'">
          <span :class="$options.name + '__borderItem--bg'">
            <span :class="['border__all', $options.name + '__borderItem--shape']"></span>
          </span>
          <span :class="$options.name + '__borderItem--label'">
            <code>.border__all</code>
          </span>
        </Card>
      </section>
      <h4>.border__direction</h4>
      <section :class="[$options.name + '__grid', $options.name + '__grid--position']">
        <Card
          v-for="direction in directions"
          :key="direction"
          :class="$options.name + '__borderItem'"
        >
          <span :class="$options.name + '__borderItem--bg'">
            <span :class="['border__' + direction, $options.name + '__borderItem--shape']"></span>
          </span>

          <span :class="$options.name + '__borderItem--label'">
            <code>.border__{{ direction }}</code>
          </span>
        </Card>
      </section>
    </article>
  </Library>
</template>
<script>
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Library from "@/compositions/presentational/Library";
export default {
  name: "Helpers",
  components: { Badge, Card, Icon, Library },
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
      ],
      timer: false
    };
  },
  methods: {
    copyColor(value) {
      this.timer = false;
      let color = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--color__" + value);
      let dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute("id", "dummy_id");
      document.getElementById("dummy_id").value = color.replace("#", "").trim();
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      this.timer = "Copied “" + value + "” HEX value";
      setTimeout(() => {
        this.timer = false;
      }, 3000);
    }
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
      border-bottom: rem(1) solid var(--color__base-light);
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
      border-bottom: rem(1) solid var(--color__base-light);
      padding: var(--size__m);
      width: 100%;
    }
    &--label {
      align-items: center;
      display: inline-flex;
      padding: var(--size__m);
      .Helpers__rows--type & {
        border-left: none;
      }
    }
  }
  &__borderItem {
    padding: 0;
    &--bg {
      border-bottom: rem(1) solid var(--color__base-light);
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
      background-color: var(--color__contrast);
      border-color: var(--color__brand);
      display: inline-flex;
      height: var(--size__l);
      width: var(--size__l);
      [data-theme="dark"] & {
        background-color: var(--color__contrast-extra);
      }
    }
  }
  &__marginItem {
    overflow: hidden;
    padding: 0;
    &--bg {
      border-bottom: rem(1) solid var(--color__base-light);
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
      background-color: var(--color__brand);
      display: inline-block;
      height: var(--size__l);
      width: var(--size__l);
    }
  }
  &__oomphItem {
    padding: 0;
    &--wrap {
      padding: var(--size__s);
    }
    &--label {
      align-items: center;
      border-top: rem(1) solid var(--color__base-light);
      display: flex;
      justify-content: center;
      padding: var(--size__s);
      text-align: center;
    }
    &--shape {
      align-items: stretch;
      background-color: var(--color__brand);
      display: inline-flex;
      height: var(--size__l);
      width: var(--size__l);
    }
    &--vertical {
      .Helpers__oomphItem--wrap {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  &__paddingItem {
    overflow: hidden;
    padding: 0;
    &--bg {
      border-bottom: rem(1) solid var(--color__base-light);
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
      border: rem(1) solid var(--color__brand);
      background-color: var(--color__brand);
      display: inline-flex;
      &:after {
        background-color: var(--color__contrast);
        content: "";
        display: inline-block;
        height: var(--size__l);
        width: var(--size__l);
        [data-theme="dark"] & {
          background-color: var(--color__contrast-extra);
        }
      }
    }
  }
}
</style>