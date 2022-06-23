<template>
  <div class="panel">
    <button
      v-for="(btn, indx) in options.floors"
      :key="indx"
      @click="this.$emit('call-elevator', btn)"
      class="panel__btn"
    >
      {{ btn }}
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;

  &__btn {
    border: none;
    cursor: pointer;

    &:active {
      background-color: #019281;
    }
  }
}
</style>
