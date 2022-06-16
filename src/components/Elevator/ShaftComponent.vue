<template>
  <div class="shaft">
    <div ref="elevator" class="shaft__elevator">
      <slot></slot>
      {{ startPos }}
      {{ heightFloor }}
      {{ maxPos }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ShaftComponent",
  props: {
    options: {
      type: Object,
      default: () => ({
        floors: 5,
        elevators: 1,
        speedTime: 3,
      }),
    },
  },
  data() {
    return {
      heightLevelPos: 0, //max
    };
  },
  computed: {
    heightFloor() {
      return window.innerHeight / this.options.floors; //76
    },
    maxPos() {
      return this.heightFloor * this.options.floors; //380
    },
    startPos() {
      return this.heightFloor * (this.options.floors - 1); //304
    },
  },
  mounted() {
    this.$refs.elevator.style.height = this.heightFloor + "px";
    this.$refs.elevator.style.top = this.startPos + "px";
  },
};
</script>

<style lang="scss" scoped>
.shaft {
  height: 100vh;
  width: 100px;
  border: 1px solid black;
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  &__elevator {
    width: 100px;
    border: 1px solid black;
    position: absolute;
  }
}
</style>
