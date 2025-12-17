<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-brand">糖豆的成长日记</div>
    </nav>
    <div class="tab-bar">
      <router-link to="/" class="tab-item" :class="{ active: $route.path === '/' }">
        <i class="icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/growth" class="tab-item" :class="{ active: $route.path === '/growth' }">
        <i class="icon-growth"></i>
        <span>成长</span>
      </router-link>
      <router-link to="/gallery" class="tab-item" :class="{ active: $route.path === '/gallery' }">
        <i class="icon-gallery"></i>
        <span>相册</span>
      </router-link>
    </div>
    <RouterView />
  </div>
</template>
<style scoped>
#app {
  min-height: 100vh;
  background-color: #fff8f0;
  padding-bottom: 60px;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #ff6b9d;
  color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 100;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  color: #999;
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s;
}

.tab-item.active {
  color: #ff6b9d;
}

.tab-item i {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

/* 图标样式 */
.icon-home::before {
  content: "🏠";
}

.icon-growth::before {
  content: "📈";
}

.icon-gallery::before {
  content: "📷";
}
</style>
