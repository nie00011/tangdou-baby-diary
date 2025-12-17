<template>
  <div class="growth">
    <div class="header">
      <h1>成长里程碑</h1>
      <p>记录糖豆的每一个重要时刻</p>
    </div>
    
    <div class="timeline">
      <div class="milestone" v-for="milestone in milestones" :key="milestone.id">
        <div class="milestone-date">{{ milestone.date }}</div>
        <div class="milestone-content">
          <h3>{{ milestone.title }}</h3>
          <p>{{ milestone.description }}</p>
          <div class="milestone-image" v-if="milestone.image">
            <img :src="milestone.image" :alt="milestone.title">
          </div>
        </div>
      </div>
    </div>
    
    <div class="fab" @click="showForm = !showForm">
      <span v-if="!showForm">+</span>
      <span v-else>×</span>
    </div>
    
    <div class="add-milestone" v-if="showForm">
      <h2>添加新的里程碑</h2>
      <form @submit.prevent="addMilestone">
        <div class="form-group">
          <label for="title">标题:</label>
          <input type="text" id="title" v-model="newMilestone.title" required>
        </div>
        
        <div class="form-group">
          <label for="date">日期:</label>
          <input type="date" id="date" v-model="newMilestone.date" required>
        </div>
        
        <div class="form-group">
          <label for="description">描述:</label>
          <textarea id="description" v-model="newMilestone.description" rows="3"></textarea>
        </div>
        
        <div class="form-actions">
          <button type="button" @click="showForm = false" class="cancel-btn">取消</button>
          <button type="submit" class="submit-btn">添加</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

// 成长里程碑数据
const milestones = ref([])
const showForm = ref(false)

// 从localStorage加载数据
const loadMilestones = () => {
  const savedMilestones = localStorage.getItem('babyMilestones')
  if (savedMilestones) {
    milestones.value = JSON.parse(savedMilestones)
  } else {
    // 默认数据
    milestones.value = [
      {
        id: 1,
        date: '2025-10-15',
        title: '出生',
        description: '糖豆来到这个世界，体重3.2公斤，身长50厘米。',
        image: ''
      },
      {
        id: 2,
        date: '2025-11-15',
        title: '第一次微笑',
        description: '糖豆今天第一次露出了甜甜的微笑，融化了所有人的心。',
        image: ''
      },
      {
        id: 3,
        date: '2025-11-20',
        title: '能够短暂抬头',
        description: '在趴着的时候，糖豆能够短暂地抬起头来观察周围的世界。',
        image: ''
      },
      {
        id: 4,
        date: '2025-12-01',
        title: '开始咿呀学语',
        description: '糖豆开始发出一些简单的音节，像是在和我们对话一样。',
        image: ''
      }
    ]
  }
}

// 保存数据到localStorage
const saveMilestones = () => {
  localStorage.setItem('babyMilestones', JSON.stringify(milestones.value))
}

// 组件挂载时加载数据
onMounted(() => {
  loadMilestones()
})

// 监听数据变化并保存
watch(milestones, () => {
  saveMilestones()
}, { deep: true })

// 新的里程碑表单数据
const newMilestone = ref({
  title: '',
  date: '',
  description: ''
})

// 添加新的里程碑
const addMilestone = () => {
  if (newMilestone.value.title && newMilestone.value.date) {
    milestones.value.unshift({
      id: Date.now(), // 使用时间戳作为唯一ID
      date: newMilestone.value.date,
      title: newMilestone.value.title,
      description: newMilestone.value.description,
      image: ''
    })
    
    // 重置表单
    newMilestone.value = {
      title: '',
      date: '',
      description: ''
    }
    
    // 隐藏表单
    showForm.value = false
  }
}
</script>

<style scoped>
.growth {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  padding-bottom: 80px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 1.5rem;
  color: #ff6b9d;
  margin-bottom: 8px;
}

.header p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.timeline {
  position: relative;
  padding-left: 0;
  margin-bottom: 30px;
}

.timeline::before {
  display: none;
}

.milestone {
  position: relative;
  margin-bottom: 20px;
  padding: 0;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.milestone-date {
  flex-shrink: 0;
  width: 70px;
  padding: 6px 8px;
  background-color: #ff6b9d;
  color: white;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  word-break: break-word;
}

.milestone-content {
  flex: 1;
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.milestone-content h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.milestone-content p {
  color: #666;
  line-height: 1.4;
  font-size: 0.9rem;
  margin: 0;
}

.milestone-image {
  margin-top: 10px;
}

.milestone-image img {
  max-width: 100%;
  border-radius: 8px;
}

.add-milestone {
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}

.add-milestone h2 {
  color: #ff6b9d;
  margin-top: 0;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.9rem;
  box-sizing: border-box;
}

.form-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 10px;
}

.cancel-btn, .submit-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.3s;
}

.cancel-btn {
  background: #f0f0f0;
  color: #666;
}

.submit-btn {
  background: #ff6b9d;
  color: white;
}

.cancel-btn:hover {
  background: #e0e0e0;
}

.submit-btn:hover {
  background: #ff5a8d;
}

.fab {
  position: fixed;
  bottom: 80px;
  right: 15px;
  width: 50px;
  height: 50px;
  background-color: #ff6b9d;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  cursor: pointer;
  z-index: 90;
  transition: transform 0.2s, background-color 0.3s;
}

.fab:hover {
  background-color: #ff5a8d;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .growth {
    padding: 10px;
  }
  
  .header h1 {
    font-size: 1.4rem;
  }
  
  .header p {
    font-size: 0.85rem;
  }
  
  .milestone {
    gap: 8px;
  }
  
  .milestone-date {
    width: 65px;
    font-size: 0.65rem;
    padding: 5px 6px;
  }
  
  .milestone-content {
    padding: 12px;
  }
  
  .milestone-content h3 {
    font-size: 1rem;
  }
  
  .milestone-content p {
    font-size: 0.85rem;
  }
  
  .add-milestone {
    padding: 12px;
  }
  
  .add-milestone h2 {
    font-size: 1.1rem;
  }
  
  .form-group label {
    font-size: 0.85rem;
  }
  
  .form-group input,
  .form-group textarea {
    font-size: 0.85rem;
    padding: 8px;
  }
  
  .cancel-btn, .submit-btn {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
  
  .fab {
    bottom: 70px;
    right: 10px;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
}
</style>