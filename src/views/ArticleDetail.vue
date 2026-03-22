<template>
  <div class="article-detail" v-loading="loading">
    <div v-if="article" class="article-container">
      <div class="article-header">
        <el-button @click="$router.back()" class="back-button" text>
          <el-icon><ArrowLeft /></el-icon>
          返回
        </el-button>
        <h1 class="article-title">{{ article.title }}</h1>
        <div class="article-meta">
          <span class="category">{{ article.category }}</span>
          <span class="date">{{ article.date }}</span>
        </div>
        <div class="article-tags">
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

      <div class="article-cover">
        <img :src="article.cover" :alt="article.title" />
      </div>

      <div class="article-content" v-html="article.content"></div>

      <div class="article-images" v-if="article.images && article.images.length > 1">
        <h3>相关图片</h3>
        <div class="images-grid">
          <div v-for="(image, index) in article.images" :key="index" class="image-item">
            <img :src="image" :alt="`图片 ${index + 1}`" />
          </div>
        </div>
      </div>

      <div class="article-navigation">
        <el-button
          v-if="previousArticle"
          @click="$router.push(`/article/${previousArticle.id}`)"
          :icon="ArrowLeft"
        >
          上一篇：{{ previousArticle.title }}
        </el-button>
        <el-button
          v-if="nextArticle"
          @click="$router.push(`/article/${nextArticle.id}`)"
          :icon="ArrowRight"
          style="margin-left: auto;"
        >
          下一篇：{{ nextArticle.title }}
        </el-button>
      </div>
    </div>

    <el-empty v-else-if="!loading" description="文章不存在" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { getArticles, getArticleById } from '../api/articles.js'

const route = useRoute()
const article = ref(null)
const allArticles = ref([])
const loading = ref(true)

const previousArticle = computed(() => {
  const currentIndex = allArticles.value.findIndex(a => a.id === article.value?.id)
  if (currentIndex > 0) {
    return allArticles.value[currentIndex - 1]
  }
  return null
})

const nextArticle = computed(() => {
  const currentIndex = allArticles.value.findIndex(a => a.id === article.value?.id)
  if (currentIndex < allArticles.value.length - 1) {
    return allArticles.value[currentIndex + 1]
  }
  return null
})

onMounted(async () => {
  loading.value = true
  allArticles.value = await getArticles()
  article.value = await getArticleById(route.params.id)
  loading.value = false
})
</script>

<style scoped>
.article-detail {
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

.article-container {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.article-header {
  margin-bottom: 30px;
}

.back-button {
  margin-bottom: 20px;
  font-size: 14px;
  color: #4a4a4a;
}

.article-title {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 16px;
  color: #333;
  line-height: 1.3;
}

.article-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  font-size: 14px;
}

.category {
  color: #4a4a4a;
  font-weight: 500;
}

.date {
  color: #999;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.article-cover {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
}

.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 40px;
}

.article-content :deep(h2) {
  font-size: 28px;
  font-weight: 600;
  margin: 40px 0 20px;
  color: #333;
}

.article-content :deep(h3) {
  font-size: 24px;
  font-weight: 600;
  margin: 30px 0 16px;
  color: #333;
}

.article-content :deep(p) {
  margin-bottom: 16px;
}

.article-content :deep(code) {
  background: #f5f5f5;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.article-content :deep(img) {
  max-width: 100%;
  border-radius: 8px;
  margin: 20px 0;
}

.article-images {
  margin-bottom: 40px;
}

.article-images h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.image-item {
  border-radius: 12px;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s;
}

.image-item:hover img {
  transform: scale(1.05);
}

.article-navigation {
  display: flex;
  gap: 20px;
  padding-top: 30px;
  border-top: 1px solid #eee;
}

@media (max-width: 768px) {
  .article-container {
    padding: 20px;
  }

  .article-title {
    font-size: 24px;
  }

  .article-cover {
    height: 250px;
  }

  .article-content {
    font-size: 14px;
  }

  .article-navigation {
    flex-direction: column;
  }

  .article-navigation .el-button {
    width: 100%;
    margin-left: 0 !important;
  }
}
</style>