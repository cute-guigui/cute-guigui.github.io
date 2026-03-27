<template>
  <div id="app">
    <Sidebar ref="sidebarRef" />
    
    <!-- 移动端导航按钮 -->
    <div class="mobile-nav-btn" @click="toggleDrawer">
      <el-icon><Menu /></el-icon>
    </div>
    
    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from '@element-plus/icons-vue'
import Sidebar from './components/Sidebar.vue'

const sidebarRef = ref(null)

const toggleDrawer = () => {
  if (sidebarRef.value) {
    sidebarRef.value.toggleDrawer()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  min-height: 100vh;
  color: #333;
}

#app {
  min-height: 100vh;
}

.main-content {
  margin-left: 260px;
  padding: 40px;
  min-height: 100vh;
}

.mobile-nav-btn {
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.mobile-nav-btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.05);
}

.mobile-nav-btn .el-icon {
  font-size: 24px;
  color: #4a4a4a;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding: 20px;
  }
  
  .mobile-nav-btn {
    display: flex;
  }
}
</style>