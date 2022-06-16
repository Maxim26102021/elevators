<template>
  <div class="shaft reverse">
    <div ref="elevator" class="shaft__elevator">
      <slot></slot>
      {{ firstFloor }}
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
    newFloor: {
      type: Number,
      default: () => 1,
    },
  },
  data() {
    return {
      currentFloor: 1,
    };
  },
  computed: {
    nextFloor() {
      return this.heightFloor * (this.options.floors - this.newFloor);
    },
    heightFloor() {
      return window.innerHeight / this.options.floors; //76
    },
    maxPos() {
      return this.heightFloor * this.options.floors; //380
    },
    firstFloor() {
      return this.heightFloor * (this.options.floors - 1); //304
    },
  },
  mounted() {
    this.$refs.elevator.style.height = this.heightFloor + "px";
    this.$refs.elevator.style.top = this.firstFloor + "px";
  },
  updated() {
    console.log(this.$props);
    this.$refs.elevator.style.top = this.currentFloor = this.nextFloor + "px";
  },
};
</script>

<style lang="scss" scoped>
.reverse {
  flex-direction: column-reverse;
}

.shaft {
  height: 100vh;
  width: 100px;
  border: 1px solid black;
  position: relative;
  display: flex;

  &__elevator {
    width: 100px;
    border: 1px solid black;
    position: absolute;
    transition: 3s;
  }
}
</style>
