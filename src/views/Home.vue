<template>
  <div class="home">
    <div class="hero-section" :class="{ 'typing-complete': isTypingComplete }">
      <h1 class="hero-title">{{ typedTitle }}</h1>
      <p class="hero-subtitle">{{ typedSubtitle }}</p>
      <el-button type="primary" size="large" @click="$router.push('/articles')" class="hero-button">
        浏览文章
      </el-button>
    </div>

    <div class="featured-section">
      <h2 class="section-title">精选文章</h2>
      <div class="featured-grid">
        <div v-for="article in featuredArticles" :key="article.id" class="featured-card" @click="$router.push(`/article/${article.id}`)">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getArticles } from '../api/articles.js'

const featuredArticles = ref([])
const typedTitle = ref('')
const typedSubtitle = ref('')
const titleText = '欢迎来到我的博客'
const subtitleText = '探索技术，分享知识，共同成长'
const isTypingComplete = ref(false)

const typeText = (text, targetRef, delay = 100) => {
  let index = 0
  const interval = setInterval(() => {
    if (index < text.length) {
      targetRef.value += text[index]
      index++
    } else {
      clearInterval(interval)
      checkTypingComplete()
    }
  }, delay)
}

const checkTypingComplete = () => {
  if (typedTitle.value.length === titleText.length && typedSubtitle.value.length === subtitleText.length) {
    isTypingComplete.value = true
  }
}

onMounted(async () => {
  const articles = await getArticles()
  featuredArticles.value = articles.slice(0, 3)
  
  typeText(titleText, typedTitle, 150)
  typeText(subtitleText, typedSubtitle, 100)
})
</script>

<style scoped>
.home {
  animation: fadeIn 0.8s ease-out;
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

.hero-section {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 255, 0.9) 100%);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  margin-bottom: 60px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
}

.hero-section.typing-complete {
  animation: borderPulse 2s ease-in-out infinite;
}

@keyframes borderPulse {
  0%, 100% {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  }
  50% {
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2);
  }
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 20px;
}

.hero-subtitle {
  font-size: 20px;
  color: #666;
  margin: 0 0 40px;
}

.hero-button {
  padding: 15px 40px;
  font-size: 16px;
  border-radius: 25px;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  border: none;
  box-shadow: 0 4px 15px rgba(74, 74, 74, 0.4);
  transition: transform 0.3s, box-shadow 0.3s;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(74, 74, 74, 0.5);
}

.featured-section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #333;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.featured-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.featured-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.featured-card:hover .card-image img {
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
  margin: 0;
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .section-title {
    font-size: 24px;
  }
}
</style>