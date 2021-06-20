<template>
  <div class="app-sidebar">
    <div
      v-for="(menuItem, index) in menuItems"
      :key="index"
      class="menu-item"
      :class="{ 'menu-item__active': menuItem.isActive }"
    >
      <template v-if="menuItem.isLegacy">
        <a :href="menuItem.url">{{ menuItem.label }}</a>
      </template>
      <template v-else>
        <router-link
          :data-url="menuItem.url"
          class="spa-menu-item"
          :to="menuItem.url"
        >
          {{ menuItem.label }}
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { menuItems } from "@/config";
export default {
  data() {
    return {
      menuItems: [],
    };
  },
  created() {
    this.menuItems = menuItems.map((item) => ({
      ...item,
      isActive: this.$route.path?.startsWith(item.url),
    }));
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler(path) {
        this.menuItems = this.menuItems.map((item) => ({
          ...item,
          isActive: path.startsWith(item.url),
        }));
      },
    },
  },
};
</script>

<style lang="scss">
.app-sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: lightgrey;
  width: 300px;
  padding: 20px;
}

.menu-item {
  margin-bottom: 20px;
}

.menu-item__active {
  a {
    color: tomato;
    font-weight: 900;
  }

  a::after {
    content: "[ACTIVE]";
  }
}
</style>