<template>
  <svg
    :class="$options.name"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
  >
    <g fill-rule="evenodd">
      <path
        fill="black"
        d="M9.75 13.875L8 16l-1.75-2.125H2.17c-.646 0-1.17-.53-1.17-1.185V1.186C1 .53 1.524 0 2.17 0h11.66C14.476 0 15 .53 15 1.185V12.69c0 .654-.524 1.185-1.17 1.185H9.75z"
      ></path>
      <path
        fill="white"
        d="M4.785 2.133v4.202c.564-1.2.57-1.2 1.702-1.2 1.138 0 2.29.598 2.29 2.463v4.135h-1.71V8.135c0-1.165-.58-1.197-1.149-1.202-.473.006-1.133.003-1.133 1.802v2.998h-1.71v-9.6h1.71zm7.104 9.6c-.573 0-1.037-.477-1.037-1.066 0-.59.464-1.067 1.037-1.067s1.037.478 1.037 1.067-.464 1.066-1.037 1.066z"
      ></path>
      <rect fill="none" stroke="none" x="0" y="0" :width="size" :height="size"></rect>
    </g>
  </svg>
</template>
<script>
export default {
  name: "Logo",
  props: {
    size: { default: 16 }
  }
};
</script>
<style lang="scss">
.Logo {
  flex-shrink: 0;
}
</style>