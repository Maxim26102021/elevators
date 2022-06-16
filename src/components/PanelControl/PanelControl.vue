<template>
  <div class="panel">
    <button
      v-for="(btn, indx) in options.floors"
      :key="indx"
      class="panel__btn"
    >
      {{ indx + 1 }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PanelControl",
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped></style>
