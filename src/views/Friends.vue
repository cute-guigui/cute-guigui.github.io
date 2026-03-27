<template>
  <div class="friends-page" v-loading="loading">
    <div class="friends-container">
      <div class="page-header">
        <h1 class="page-title">友情链接</h1>
        <p class="page-subtitle">这里收录了一些优秀的网站和资源</p>
      </div>

      <div class="search-bar">
        <el-input
          v-model="searchKeyword"
          placeholder="搜索友情链接..."
          :prefix-icon="Search"
          clearable
          @input="handleSearch"
        />
      </div>

      <div class="friends-grid">
        <div v-for="friend in filteredFriends" :key="friend.id" class="friend-card">
          <a :href="friend.url" target="_blank" rel="noopener noreferrer" class="friend-link">
            <div class="friend-avatar">
              <img :src="friend.avatar" :alt="friend.name" />
            </div>
            <div class="friend-info">
              <h3 class="friend-name">{{ friend.name }}</h3>
              <p class="friend-description">{{ friend.description }}</p>
              <div class="friend-tags">
                <span v-for="tag in friend.tags" :key="tag" class="friend-tag">{{ tag }}</span>
              </div>
            </div>
            <div class="friend-arrow">
              <el-icon><ArrowRight /></el-icon>
            </div>
          </a>
        </div>
      </div>

      <div v-if="filteredFriends.length === 0" class="empty-state">
        <el-icon><DocumentDelete /></el-icon>
        <p>没有找到相关链接</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Search, ArrowRight, DocumentDelete } from '@element-plus/icons-vue'
import { getFriends } from '../api/friends.js'

const friends = ref([])
const loading = ref(true)
const searchKeyword = ref('')

const filteredFriends = computed(() => {
  if (!searchKeyword.value) {
    return friends.value
  }
  const keyword = searchKeyword.value.toLowerCase()
  return friends.value.filter(friend => 
    friend.name.toLowerCase().includes(keyword) ||
    friend.description.toLowerCase().includes(keyword) ||
    friend.tags.some(tag => tag.toLowerCase().includes(keyword))
  )
})

onMounted(async () => {
  friends.value = await getFriends()
  loading.value = false
})

const handleSearch = () => {
  
}
</script>

<style scoped>
.friends-page {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.friends-container {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.search-bar {
  margin-bottom: 30px;
}

.search-bar :deep(.el-input__wrapper) {
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.search-bar :deep(.el-input__wrapper:hover) {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-bar :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.friends-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.friend-card {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  overflow: hidden;
}

.friend-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(102, 126, 234, 0.2);
}

.friend-link {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  text-decoration: none;
  color: inherit;
}

.friend-avatar {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.friend-avatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
}

.friend-info {
  flex: 1;
  min-width: 0;
}

.friend-name {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.friend-description {
  font-size: 14px;
  color: #666;
  margin: 0 0 12px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.friend-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.friend-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.friend-arrow {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  transition: all 0.3s;
  flex-shrink: 0;
}

.friend-card:hover .friend-arrow {
  background: rgba(102, 126, 234, 0.2);
  transform: translateX(3px);
}

.friend-arrow .el-icon {
  font-size: 18px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-state .el-icon {
  font-size: 64px;
  margin-bottom: 16px;
  color: #ddd;
}

.empty-state p {
  font-size: 16px;
  margin: 0;
}

@media (max-width: 768px) {
  .friends-container {
    padding: 20px;
  }

  .page-title {
    font-size: 24px;
  }

  .page-subtitle {
    font-size: 14px;
  }

  .friends-grid {
    grid-template-columns: 1fr;
  }

  .friend-link {
    padding: 16px;
  }

  .friend-avatar {
    width: 48px;
    height: 48px;
  }

  .friend-name {
    font-size: 16px;
  }

  .friend-description {
    font-size: 13px;
  }
}
</style>