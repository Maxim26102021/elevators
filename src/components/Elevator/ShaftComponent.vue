<template>
  <div class="shaft">
    <div class="shaft__elevator">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShaftComponent",
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    order: {},
  },
};
</script>

<style scoped></style>
