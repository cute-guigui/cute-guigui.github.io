<template>
  <div class="sidebar">
    <div class="logo">
      <div class="avatar-container">
        <img src="https://cdn4.winhlb.com/2026/03/21/69bea1155c14f.jpg" alt="头像" />
      </div>
      <h2>可爱鼠鼠</h2>
    </div>

    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapsed"
      @select="handleSelect"
      class="sidebar-menu"
    >
      <el-menu-item index="/">
        <el-icon><HomeFilled /></el-icon>
        <template #title>首页</template>
      </el-menu-item>

      <el-menu-item index="/articles">
        <el-icon><Document /></el-icon>
        <template #title>文章列表</template>
      </el-menu-item>

      <el-menu-item index="/projects">
        <el-icon><Folder /></el-icon>
        <template #title>项目列表</template>
      </el-menu-item>

      <el-menu-item index="/about">
        <el-icon><User /></el-icon>
        <template #title>关于我</template>
      </el-menu-item>

      <el-menu-item index="/contact">
        <el-icon><Message /></el-icon>
        <template #title>联系方式</template>
      </el-menu-item>

      <el-menu-item index="/friends">
        <el-icon><Link /></el-icon>
        <template #title>友情链接</template>
      </el-menu-item>
    </el-menu>

    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-icon">
          <el-icon><Document /></el-icon>
        </div>
        <div class="stat-info">
          <div class="stat-number">{{ stats.articles }}</div>
          <div class="stat-label">文章</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <el-icon><Folder /></el-icon>
        </div>
        <div class="stat-info">
          <div class="stat-number">{{ stats.projects }}</div>
          <div class="stat-label">项目</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <el-icon><Link /></el-icon>
        </div>
        <div class="stat-info">
          <div class="stat-number">{{ stats.friends }}</div>
          <div class="stat-label">友情链接</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <el-icon><PriceTag /></el-icon>
        </div>
        <div class="stat-info">
          <div class="stat-number">{{ stats.tags }}</div>
          <div class="stat-label">标签总数</div>
        </div>
      </div>
    </div>

    <div class="sidebar-footer">
      <p>&copy; 2024 我的博客</p>
    </div>
  </div>

  <el-drawer
    v-model="drawerVisible"
    direction="ltr"
    :size="280"
    class="mobile-drawer"
  >
    <template #header>
      <div class="drawer-header">
        <div class="drawer-avatar">
          <img src="https://cdn4.winhlb.com/2026/03/21/69bea1155c14f.jpg" alt="头像" />
        </div>
        <h2>可爱鼠鼠</h2>
      </div>
    </template>

    <el-menu
      :default-active="activeMenu"
      @select="handleDrawerSelect"
      class="drawer-menu"
    >
      <el-menu-item index="/">
        <el-icon><HomeFilled /></el-icon>
        <template #title>首页</template>
      </el-menu-item>

      <el-menu-item index="/articles">
        <el-icon><Document /></el-icon>
        <template #title>文章列表</template>
      </el-menu-item>

      <el-menu-item index="/projects">
        <el-icon><Folder /></el-icon>
        <template #title>项目列表</template>
      </el-menu-item>

      <el-menu-item index="/about">
        <el-icon><User /></el-icon>
        <template #title>关于我</template>
      </el-menu-item>

      <el-menu-item index="/contact">
        <el-icon><Message /></el-icon>
        <template #title>联系方式</template>
      </el-menu-item>
    </el-menu>

    <div class="drawer-stats">
      <div class="stat-item">
        <div class="stat-icon">
          <el-icon><Document /></el-icon>
        </div>
        <div class="stat-info">
          <div class="stat-number">{{ stats.articles }}</div>
          <div class="stat-label">文章</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <el-icon><Folder /></el-icon>
        </div>
        <div class="stat-info">
          <div class="stat-number">{{ stats.projects }}</div>
          <div class="stat-label">项目</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <el-icon><Link /></el-icon>
        </div>
        <div class="stat-info">
          <div class="stat-number">{{ stats.friends }}</div>
          <div class="stat-label">友情链接</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">
          <el-icon><PriceTag /></el-icon>
        </div>
        <div class="stat-info">
          <div class="stat-number">{{ stats.tags }}</div>
          <div class="stat-label">标签总数</div>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { HomeFilled, Document, User, Message, Folder, PriceTag, Link } from '@element-plus/icons-vue'
import { getArticles } from '../api/articles.js'
import { getProjects } from '../api/projects.js'
import { getFriends } from '../api/friends.js'

const route = useRoute()
const router = useRouter()
const drawerVisible = ref(false)
const isCollapsed = ref(false)

const stats = ref({
  articles: 0,
  projects: 0,
  friends: 0,
  tags: 0
})

const activeMenu = computed(() => route.path)

onMounted(async () => {
  const articles = await getArticles()
  const projects = await getProjects()
  const friends = await getFriends()
  
  const allTags = new Set()
  articles.forEach(article => {
    article.tags.forEach(tag => allTags.add(tag))
  })
  projects.forEach(project => {
    project.tags.forEach(tag => allTags.add(tag))
  })
  friends.forEach(friend => {
    friend.tags.forEach(tag => allTags.add(tag))
  })
  
  stats.value = {
    articles: articles.length,
    projects: projects.length,
    friends: friends.length,
    tags: allTags.size
  }
})

const handleSelect = (index) => {
  router.push(index)
}

const handleDrawerSelect = (index) => {
  router.push(index)
  drawerVisible.value = false
}

defineExpose({
  toggleDrawer: () => {
    drawerVisible.value = !drawerVisible.value
  }
})
</script>

<style scoped>
.sidebar {
  width: 260px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.02);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(74, 74, 74, 0.3);
  border-radius: 3px;
  transition: background 0.3s;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(74, 74, 74, 0.5);
}

.logo {
  padding: 30px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.avatar-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 
    0 0 0 3px rgba(74, 74, 74, 0.3),
    0 0 0 6px rgba(74, 74, 74, 0.1),
    0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  position: relative;
}

.avatar-container::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -1;
  animation: glow 2s ease-in-out infinite;
}

.avatar-container:hover {
  box-shadow: 
    0 0 0 3px rgba(74, 74, 74, 0.5),
    0 0 0 6px rgba(74, 74, 74, 0.2),
    0 0 20px rgba(74, 74, 74, 0.4),
    0 4px 15px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.avatar-container:hover::before {
  opacity: 1;
}

@keyframes glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.02);
  }
}

.avatar-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sidebar-menu {
  flex: 0 0 auto;
  border: none;
  background: transparent;
  padding: 20px 0;
}

.sidebar-menu :deep(.el-menu-item) {
  margin: 4px 12px;
  border-radius: 8px;
  transition: all 0.3s;
  height: 48px;
  line-height: 48px;
}

.sidebar-menu :deep(.el-menu-item:hover) {
  background: rgba(74, 74, 74, 0.1);
}

.sidebar-menu :deep(.el-menu-item.is-active) {
  background: linear-gradient(135deg, rgba(74, 74, 74, 0.15) 0%, rgba(42, 42, 42, 0.15) 100%);
  color: #4a4a4a;
  font-weight: 600;
}

.sidebar-menu :deep(.el-menu-item .el-icon) {
  font-size: 20px;
}

.stats-section {
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(74, 74, 74, 0.05);
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.3s;
}

.stat-item:last-child {
  margin-bottom: 0;
}

.stat-item:hover {
  background: rgba(74, 74, 74, 0.1);
  transform: translateX(5px);
}

.stat-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.stat-icon .el-icon {
  font-size: 18px;
}

.stat-info {
  flex: 1;
}

.stat-number {
  font-size: 18px;
  font-weight: 700;
  color: #4a4a4a;
  line-height: 1.2;
}

.stat-label {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  flex-shrink: 0;
}

.sidebar-footer p {
  margin: 0;
  font-size: 12px;
  color: #999;
}

.drawer-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.drawer-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 
    0 0 0 3px rgba(74, 74, 74, 0.3),
    0 0 0 6px rgba(74, 74, 74, 0.1),
    0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  position: relative;
}

.drawer-avatar::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -1;
  animation: glow 2s ease-in-out infinite;
}

.drawer-avatar:hover {
  box-shadow: 
    0 0 0 3px rgba(74, 74, 74, 0.5),
    0 0 0 6px rgba(74, 74, 74, 0.2),
    0 0 20px rgba(74, 74, 74, 0.4),
    0 4px 15px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.drawer-avatar:hover::before {
  opacity: 1;
}

@keyframes glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.02);
  }
}

.drawer-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.drawer-header h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.drawer-menu {
  border: none;
}

.drawer-menu :deep(.el-menu-item) {
  margin: 4px 12px;
  border-radius: 8px;
  height: 48px;
  line-height: 48px;
}

.drawer-menu :deep(.el-menu-item:hover) {
  background: rgba(74, 74, 74, 0.1);
}

.drawer-menu :deep(.el-menu-item.is-active) {
  background: linear-gradient(135deg, rgba(74, 74, 74, 0.15) 0%, rgba(42, 42, 42, 0.15) 100%);
  color: #4a4a4a;
  font-weight: 600;
}

.drawer-stats {
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.drawer-stats .stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(74, 74, 74, 0.05);
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.3s;
}

.drawer-stats .stat-item:last-child {
  margin-bottom: 0;
}

.drawer-stats .stat-item:hover {
  background: rgba(74, 74, 74, 0.1);
  transform: translateX(5px);
}

.drawer-stats .stat-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.drawer-stats .stat-icon .el-icon {
  font-size: 18px;
}

.drawer-stats .stat-info {
  flex: 1;
}

.drawer-stats .stat-number {
  font-size: 18px;
  font-weight: 700;
  color: #4a4a4a;
  line-height: 1.2;
}

.drawer-stats .stat-label {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>