<template>
  <div class="home">
    <div class="header">
      <h1>糖豆的成长日记</h1>
      <p>记录你成长的每一个美好瞬间</p>
    </div>
    
    <div class="baby-profile-card">
      <div class="baby-avatar">
        <img src="/images/WechatIMG654.jpeg" alt="糖豆" class="baby-avatar-img">
      </div>
      <div class="baby-info">
        <h2>糖豆</h2>
        <p>年龄：{{ age }}</p>
        <p>性别：女</p>
        <p>出生日期：2025年10月15日</p>
      </div>
    </div>
    
    <div class="section-title">
      <h2>最近的成长里程碑</h2>
    </div>
    
    <div class="milestone-list">
      <div class="milestone-card" v-for="milestone in recentMilestones" :key="milestone.id">
        <div class="milestone-date">{{ milestone.date }}</div>
        <div class="milestone-content">
          <h3>{{ milestone.title }}</h3>
        </div>
      </div>
    </div>
    
    <div class="quick-actions">
      <router-link to="/growth" class="action-button">
        <i class="icon-add-milestone"></i>
        <span>添加里程碑</span>
      </router-link>
      <router-link to="/gallery" class="action-button">
        <i class="icon-add-photo"></i>
        <span>添加照片</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 糖豆的年龄（假设现在是2025年12月）
const age = ref('2个月')

// 最近的成长里程碑
const recentMilestones = ref([
  { id: 1, date: '2025-11-15', title: '第一次微笑' },
  { id: 2, date: '2025-11-20', title: '能够短暂抬头' },
  { id: 3, date: '2025-12-01', title: '开始咿呀学语' }
])
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 1.8rem;
  color: #ff6b9d;
  margin-bottom: 10px;
}

.header p {
  font-size: 1rem;
  color: #666;
}

.baby-profile-card {
  display: flex;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}

.baby-avatar {
  margin-right: 20px;
}

.baby-avatar-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.baby-info h2 {
  margin-top: 0;
  color: #333;
  font-size: 1.5rem;
}

.baby-info p {
  margin: 5px 0;
  color: #666;
  font-size: 0.9rem;
}

.section-title {
  margin: 30px 0 20px;
}

.section-title h2 {
  color: #ff6b9d;
  font-size: 1.4rem;
  margin: 0;
}

.milestone-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.milestone-card {
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
}

.milestone-date {
  background-color: #ff6b9d;
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 15px;
  white-space: nowrap;
}

.milestone-content h3 {
  margin: 0;
  color: #333;
  font-size: 1rem;
}

.quick-actions {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.action-button {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  text-decoration: none;
  color: #333;
  transition: transform 0.2s;
}

.action-button:hover {
  transform: translateY(-5px);
}

.action-button i {
  font-size: 2rem;
  margin-bottom: 10px;
}

.action-button span {
  font-weight: 500;
}

.icon-add-milestone::before {
  content: "📝";
}

.icon-add-photo::before {
  content: "📸";
}

@media (max-width: 768px) {
  .baby-profile-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .baby-avatar {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .quick-actions {
    flex-direction: column;
  }
}
</style>