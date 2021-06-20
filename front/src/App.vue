<template>
  <div id="app">
    <Sidebar />

    <div class="app-content">
      <router-view />
    </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  gap: 20px;

  .app-content {
    padding: 20px 0;
  }
}
</style>
