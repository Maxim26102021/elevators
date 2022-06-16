<template>
  <div class="app">
    <ContainerComponent />
  </div>
</template>

<script>
import ContainerComponent from "@/view/ContainerComponent";

export default {
  name: "App",
  components: {
    ContainerComponent,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}

.app {
  height: 100vh;
  display: flex;
}
</style>
