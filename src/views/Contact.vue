<template>
  <div class="contact-page" v-loading="loading">
    <div v-if="contactInfo" class="contact-container">
      <div class="contact-header">
        <div class="contact-avatar">
          <img src="https://cdn4.winhlb.com/2026/03/21/69bea1155c14f.jpg" alt="头像" />
        </div>
        <h1 class="page-title">联系方式</h1>
        <p class="page-subtitle">欢迎与我联系，交流技术，分享经验</p>
      </div>

      <div class="contact-info">
        <div class="info-card">
          <el-icon class="info-icon"><Message /></el-icon>
          <h3>邮箱</h3>
          <p>{{ contactInfo.email }}</p>
        </div>

        <div class="info-card">
          <el-icon class="info-icon"><ChatDotRound /></el-icon>
          <h3>QQ</h3>
          <p>{{ contactInfo.qq }}</p>
        </div>

        <div class="info-card">
          <el-icon class="info-icon"><User /></el-icon>
          <h3>QQ群</h3>
          <p>{{ contactInfo.qqGroup }}</p>
        </div>

        <div class="info-card">
          <el-icon class="info-icon"><Location /></el-icon>
          <h3>地址</h3>
          <p>{{ contactInfo.location }}</p>
        </div>
      </div>

      <div class="social-links">
        <h3>社交媒体</h3>
        <div class="social-icons">
          <a :href="contactInfo.social.github" target="_blank" class="social-link">
            <el-icon size="24"><Link /></el-icon>
            <span>GitHub</span>
          </a>
          <a :href="contactInfo.social.bilibili" target="_blank" class="social-link">
            <el-icon size="24"><Link /></el-icon>
            <span>Bilibili</span>
          </a>
          <a :href="contactInfo.social.csdn" target="_blank" class="social-link">
            <el-icon size="24"><Link /></el-icon>
            <span>CSDN</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Message, ChatDotRound, User, Location, Link } from '@element-plus/icons-vue'
import { getContactInfo } from '../api/contact.js'

const contactInfo = ref(null)
const loading = ref(true)

onMounted(async () => {
  contactInfo.value = await getContactInfo()
  loading.value = false
})
</script>

<style scoped>
.contact-page {
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

.contact-container {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.contact-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 24px;
  box-shadow: 
    0 0 0 3px rgba(102, 126, 234, 0.3),
    0 0 0 6px rgba(102, 126, 234, 0.1),
    0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  position: relative;
}

.contact-avatar::before {
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

.contact-avatar:hover {
  box-shadow: 
    0 0 0 3px rgba(102, 126, 234, 0.5),
    0 0 0 6px rgba(102, 126, 234, 0.2),
    0 0 20px rgba(102, 126, 234, 0.4),
    0 4px 15px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.contact-avatar:hover::before {
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

.contact-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px;
  color: #333;
}

.page-subtitle {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.info-card {
  background: rgba(255, 255, 255, 0.6);
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.info-icon {
  font-size: 32px;
  color: #4a4a4a;
  margin-bottom: 12px;
}

.info-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #333;
}

.info-card p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.social-links {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #eee;
}

.social-links h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 20px;
  color: #333;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  color: #4a4a4a;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(74, 74, 74, 0.2);
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
  background: rgba(102, 126, 234, 0.1);
}

@media (max-width: 768px) {
  .contact-container {
    padding: 20px;
  }

  .page-title {
    font-size: 24px;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .social-icons {
    flex-direction: column;
    align-items: center;
  }

  .social-link {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>