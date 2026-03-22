<template>
  <div class="projects-page">
    <div class="search-section">
      <el-input
        v-model="searchKeyword"
        placeholder="搜索项目..."
        prefix-icon="Search"
        size="large"
        clearable
        @input="handleSearch"
        class="search-input"
      />
    </div>

    <div class="filter-section">
      <el-radio-group v-model="selectedStatus" @change="handleStatusChange">
        <el-radio-button label="all">全部</el-radio-button>
        <el-radio-button label="completed">已完成</el-radio-button>
        <el-radio-button label="in-progress">进行中</el-radio-button>
        <el-radio-button label="planned">计划中</el-radio-button>
      </el-radio-group>
    </div>

    <div class="projects-list" v-loading="loading">
      <div v-for="project in filteredProjects" :key="project.id" class="project-card">
        <div class="project-image">
          <img :src="project.image" :alt="project.name" />
          <div class="project-status" :class="`status-${project.status}`">
            {{ getStatusText(project.status) }}
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">{{ project.name }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            <el-tag
              v-for="tag in project.tags"
              :key="tag"
              size="small"
              type="info"
            >
              {{ tag }}
            </el-tag>
          </div>
          <div class="project-actions">
            <el-button
              v-if="project.demoUrl"
              type="primary"
              size="small"
              @click="openLink(project.demoUrl)"
            >
              <el-icon><View /></el-icon>
              演示
            </el-button>
            <el-button
              v-if="project.githubUrl"
              size="small"
              @click="openLink(project.githubUrl)"
            >
              <el-icon><Link /></el-icon>
              源码
            </el-button>
            <el-button
              v-if="project.downloadUrl"
              size="small"
              @click="openLink(project.downloadUrl)"
            >
              <el-icon><Download /></el-icon>
              下载
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <el-empty v-if="filteredProjects.length === 0 && !loading" description="暂无项目" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { getProjects, searchProjects, getProjectsByStatus } from '../api/projects.js'
import { projectStatus } from '../data/projects.js'
import { View, Link, Download } from '@element-plus/icons-vue'

const projects = ref([])
const filteredProjects = ref([])
const searchKeyword = ref('')
const selectedStatus = ref('all')
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  projects.value = await getProjects()
  filteredProjects.value = projects.value
  loading.value = false
})

const handleSearch = async () => {
  if (searchKeyword.value.trim()) {
    loading.value = true
    filteredProjects.value = await searchProjects(searchKeyword.value)
    loading.value = false
  } else {
    filteredProjects.value = projects.value
  }
}

const handleStatusChange = async (status) => {
  if (status === 'all') {
    filteredProjects.value = projects.value
  } else {
    loading.value = true
    filteredProjects.value = await getProjectsByStatus(status)
    loading.value = false
  }
}

const getStatusText = (status) => {
  return projectStatus[status] || status
}

const openLink = (url) => {
  if (url && url !== '#') {
    window.open(url, '_blank')
  } else {
    ElMessage.info('链接暂未配置')
  }
}
</script>

<style scoped>
.projects-page {
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

.search-section {
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
}

.search-input {
  max-width: 600px;
  width: 100%;
}

.search-input :deep(.el-input__wrapper) {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  padding: 4px 16px;
}

.search-input :deep(.el-input__wrapper:hover) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border-color: rgba(74, 74, 74, 0.2);
}

.search-input :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 4px 20px rgba(74, 74, 74, 0.15);
  border-color: #4a4a4a;
}

.search-input :deep(.el-input__inner) {
  font-size: 15px;
  color: #333;
}

.search-input :deep(.el-input__inner::placeholder) {
  color: #999;
}

.search-input :deep(.el-input__prefix) {
  color: #666;
}

.filter-section {
  margin-bottom: 40px;
  text-align: center;
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
}

.project-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-status {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: white;
}

.status-completed {
  background: linear-gradient(135deg, #67c23a 0%, #85ce61 100%);
}

.status-in-progress {
  background: linear-gradient(135deg, #e6a23c 0%, #ebb563 100%);
}

.status-planned {
  background: linear-gradient(135deg, #909399 0%, #a6a9ad 100%);
}

.project-content {
  padding: 24px;
}

.project-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px;
  color: #333;
  line-height: 1.4;
}

.project-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 16px;
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.project-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.project-actions .el-button {
  flex: 1;
  min-width: 80px;
}

@media (max-width: 768px) {
  .projects-list {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 180px;
  }
}
</style>