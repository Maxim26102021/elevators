<template>
  <ShaftComponent
    v-for="(elevator, indx) in options.elevators"
    :key="indx"
    :options="options"
    :newFloor="currentFloor"
    >indx
  </ShaftComponent>
  <PanelControl
    @call-elevator="(newFloor) => this.moveElevator(newFloor)"
    :options="options"
  />
</template>

<script>
import ShaftComponent from "@/components/Elevator/ShaftComponent";
import PanelControl from "@/components/PanelControl/PanelControl";
import getOptions from "@/api/getOptions";

export default {
  name: "ContainerComponent",
  components: {
    ShaftComponent,
    PanelControl,
  },
  data() {
    return {
      options: {
        floors: 5,
        elevators: 1,
        speedTime: 3,
      },
      currentFloor: 1,
    };
  },
  methods: {
    loadOptions() {
      let { floors, elevators, speed } = getOptions();
      this.options.elevators = elevators;
      this.options.floors = floors;
      this.options.speedTime = speed;
    },
    moveElevator(newFloor) {
      this.currentFloor = newFloor;
    },
  },
  created() {
    this.loadOptions();
  },
};
</script>

<style scoped></style>
