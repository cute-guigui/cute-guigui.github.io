<template>
  <div class="about-page" v-loading="loading">
    <div v-if="aboutInfo" class="about-container">
      <div class="profile-section">
        <div class="avatar">
          <img :src="aboutInfo.avatar" :alt="aboutInfo.name" />
        </div>
        <div class="profile-info">
          <h1 class="name">{{ aboutInfo.name }}</h1>
          <p class="title">{{ aboutInfo.title }}</p>
          <p class="bio">{{ aboutInfo.bio }}</p>
        </div>
      </div>

      <div class="tech-stack-section">
        <h2 class="section-title">技术栈</h2>
        <div class="tech-grid">
          <div v-for="tech in aboutInfo.techStack" :key="tech.name" class="tech-card">
            <span class="tech-icon">{{ tech.icon }}</span>
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <div class="learning-section">
        <h2 class="section-title">学习经历</h2>
        <div class="learning-list">
          <div v-for="(item, index) in aboutInfo.learning" :key="index" class="learning-item">
            <div class="learning-year">{{ item.year }}</div>
            <div class="learning-content">
              <h3 class="learning-title">{{ item.title }}</h3>
              <p class="learning-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hobbies-section">
        <h2 class="section-title">个人爱好</h2>
        <div class="hobbies-grid">
          <div v-for="hobby in aboutInfo.hobbies" :key="hobby.name" class="hobby-card">
            <span class="hobby-icon">{{ hobby.icon }}</span>
            <div class="hobby-info">
              <h3 class="hobby-name">{{ hobby.name }}</h3>
              <p class="hobby-description">{{ hobby.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAboutInfo } from '../api/about.js'

const aboutInfo = ref(null)
const loading = ref(true)

onMounted(async () => {
  aboutInfo.value = await getAboutInfo()
  loading.value = false
})
</script>

<style scoped>
.about-page {
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

.about-container {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eee;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  flex: 1;
}

.name {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px;
  color: #333;
}

.title {
  font-size: 18px;
  color: #4a4a4a;
  margin: 0 0 16px;
  font-weight: 500;
}

.bio {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 24px;
  color: #333;
}

.tech-stack-section {
  margin-bottom: 40px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}

.tech-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s;
}

.tech-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
  border-color: rgba(102, 126, 234, 0.3);
}

.tech-icon {
  font-size: 24px;
}

.tech-name {
  font-weight: 500;
  color: #333;
}

.learning-section {
  margin-bottom: 40px;
}

.learning-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.learning-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border-left: 4px solid #4a4a4a;
  transition: all 0.3s;
}

.learning-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.learning-year {
  flex-shrink: 0;
  font-size: 24px;
  font-weight: 700;
  color: #4a4a4a;
  min-width: 80px;
}

.learning-content {
  flex: 1;
}

.learning-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #333;
}

.learning-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.hobbies-section {
  margin-bottom: 40px;
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.hobby-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s;
}

.hobby-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
  border-color: rgba(102, 126, 234, 0.3);
}

.hobby-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.hobby-info {
  flex: 1;
}

.hobby-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 6px;
  color: #333;
}

.hobby-description {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin: 0;
}

@media (max-width: 768px) {
  .about-container {
    padding: 20px;
  }

  .profile-section {
    flex-direction: column;
    text-align: center;
  }

  .avatar {
    width: 120px;
    height: 120px;
  }

  .name {
    font-size: 24px;
  }

  .section-title {
    font-size: 20px;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .learning-item {
    flex-direction: column;
  }

  .learning-year {
    min-width: auto;
    margin-bottom: 8px;
  }

  .hobbies-grid {
    grid-template-columns: 1fr;
  }
}
</style>