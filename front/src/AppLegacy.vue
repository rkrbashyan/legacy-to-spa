<template>
  <div id="legacy-app">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
#legacy-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  gap: 20px;
}
</style>
