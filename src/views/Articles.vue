<template>
  <div class="articles-page">
    <div class="search-section">
      <el-input
        v-model="searchKeyword"
        placeholder="搜索文章..."
        prefix-icon="Search"
        size="large"
        clearable
        @input="handleSearch"
        class="search-input"
      />
    </div>

    <div class="filter-section">
      <el-radio-group v-model="selectedCategory" @change="handleCategoryChange">
        <el-radio-button
          v-for="category in categories"
          :key="category"
          :label="category"
        />
      </el-radio-group>
    </div>

    <div class="articles-list" v-loading="loading">
      <div v-for="article in filteredArticles" :key="article.id" class="article-card" @click="$router.push(`/article/${article.id}`)">
        <div class="card-image">
          <img :src="article.cover" :alt="article.title" />
        </div>
        <div class="card-content">
          <div class="card-meta">
            <span class="category">{{ article.category }}</span>
            <span class="date">{{ article.date }}</span>
          </div>
          <h3 class="card-title">{{ article.title }}</h3>
          <p class="card-summary">{{ article.summary }}</p>
          <div class="card-tags">
            <el-tag
              v-for="tag in article.tags"
              :key="tag"
              size="small"
              type="info"
            >
              {{ tag }}
            </el-tag>
          </div>
        </div>
      </div>
    </div>

    <el-empty v-if="filteredArticles.length === 0 && !loading" description="暂无文章" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticles, searchArticles, getArticlesByCategory } from '../api/articles.js'
import { categories } from '../data/articles.js'

const route = useRoute()
const articles = ref([])
const filteredArticles = ref([])
const searchKeyword = ref('')
const selectedCategory = ref('全部')
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  articles.value = await getArticles()
  
  const searchParam = route.query.search
  if (searchParam) {
    searchKeyword.value = searchParam
    filteredArticles.value = await searchArticles(searchParam)
  } else {
    filteredArticles.value = articles.value
  }
  
  loading.value = false
})

const handleSearch = async () => {
  if (searchKeyword.value.trim()) {
    loading.value = true
    filteredArticles.value = await searchArticles(searchKeyword.value)
    loading.value = false
  } else {
    filteredArticles.value = articles.value
  }
}

const handleCategoryChange = async (category) => {
  loading.value = true
  filteredArticles.value = await getArticlesByCategory(category)
  loading.value = false
}
</script>

<style scoped>
.articles-page {
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

.articles-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.article-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
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

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.article-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 24px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
}

.category {
  color: #4a4a4a;
  font-weight: 500;
}

.date {
  color: #999;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px;
  color: #333;
  line-height: 1.4;
}

.card-summary {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 768px) {
  .articles-list {
    grid-template-columns: 1fr;
  }

  .card-image {
    height: 180px;
  }
}
</style>