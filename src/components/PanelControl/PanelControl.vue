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

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;

  &__btn {
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:active {
      background-color: #019281;
    }
  }
}
</style>
