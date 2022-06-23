<template>
  <div class="shaft reverse">
    <div
      ref="elevator"
      class="shaft__elevator"
      v-bind:class="{ action: elevatorInAction }"
    ></div>
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
      elevatorInAction: false,
    };
  },
  methods: {
    movingElevator() {
      this.$refs.elevator.style.transition =
        this.options.speedTime * this.newFloor + "s";
      this.elevatorInAction = true;
      this.$refs.elevator.style.top = this.nextFloor + "px";

      let timer = setTimeout(() => {
        this.elevatorInAction = false;
        clearInterval(timer);
      }, this.options.speedTime * 1000);
    },
    loadElevatorOptions() {
      this.$refs.elevator.style.height = this.heightFloor + "px";
      this.$refs.elevator.style.top = this.firstFloor + "px";
    },
  },
  computed: {
    nextFloor() {
      return this.heightFloor * (this.options.floors - this.newFloor);
    },
    heightFloor() {
      return window.innerHeight / this.options.floors; //76 высота этажа
    },
    firstFloor() {
      return this.heightFloor * (this.options.floors - 1); //304
    },
  },
  mounted() {
    this.loadElevatorOptions();
  },
  watch: {
    newFloor() {
      this.movingElevator();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/animations.scss";

.action {
  animation-name: action-animation;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.reverse {
  flex-direction: column-reverse;
}

.shaft {
  height: 100vh;
  width: 110px;
  border: 1px solid black;
  position: relative;
  display: flex;

  &__elevator {
    width: 100px;
    border: 1px solid black;
    position: absolute;
    transition: 1s;
  }
}
</style>
