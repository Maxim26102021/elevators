<template>
  <ShaftComponent />
  <PanelControl />
</template>

<script>
import ShaftComponent from "@/components/Elevator/ShaftComponent";
import PanelControl from "@/components/PanelControl/PanelControl";

export default {
  name: "ContainerComponent",
  components: {
    ShaftComponent,
    PanelControl,
  },
};
</script>

<style scoped></style>
