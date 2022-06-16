<template>
  <ShaftComponent
    v-for="(elevator, indx) in options.elevators"
    :key="indx"
    :options="options"
    >indx
  </ShaftComponent>
  <PanelControl :options="options" />
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
    };
  },
  methods: {
    loadOptions() {
      let { floors, elevators, speed } = getOptions();
      this.options.elevators = elevators;
      this.options.floors = floors;
      this.options.speedTime = speed;
    },
  },
  created() {
    this.loadOptions();
  },
};
</script>

<style scoped></style>
