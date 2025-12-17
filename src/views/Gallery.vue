<template>
  <div class="gallery">
    <div class="header">
      <h1>糖豆相册</h1>
      <p>记录糖豆的每一个可爱瞬间</p>
    </div>
    
    <div class="fab" @click="triggerFileInput">
      <span>+</span>
    </div>
    
    <div class="upload-section" v-if="showUpload">
      <h2>上传新照片</h2>
      <div class="upload-area" @dragover.prevent @drop.prevent="handleDrop">
        <input type="file" ref="fileInput" @change="handleFileSelect" accept="image/*" style="display: none;">
        <div class="upload-prompt" @click="triggerFileInput">
          <p>点击选择照片或拖拽照片到此处</p>
          <p class="small">支持 JPG, PNG, GIF 格式</p>
        </div>
      </div>
      <div class="upload-actions">
        <button @click="showUpload = false" class="cancel-btn">取消</button>
      </div>
    </div>
    
    <div class="photo-grid">
      <div class="photo-item" v-for="photo in photos" :key="photo.id">
        <div class="photo-container">
          <img :src="photo.url" :alt="photo.caption">
          <div class="photo-overlay">
            <button @click="deletePhoto(photo.id)" class="delete-btn">×</button>
          </div>
        </div>
        <div class="photo-caption">
          <p>{{ photo.caption }}</p>
          <p class="date">{{ photo.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

// 照片数据
const photos = ref([])
const showUpload = ref(false)

// 从localStorage加载数据
const loadPhotos = () => {
  // 清除旧的图片数据以确保使用最新的本地图片
  localStorage.removeItem('babyPhotos');
  
  // 默认使用本地图片
  photos.value = [
    {
      id: 1,
      url: '/images/WechatIMG605.jpeg',
      caption: '糖豆的可爱瞬间',
      date: '2025-10-15'
    },
    {
      id: 2,
      url: '/images/WechatIMG613.jpeg',
      caption: '糖豆的第一个微笑',
      date: '2025-11-15'
    },
    {
      id: 3,
      url: '/images/WechatIMG614.jpeg',
      caption: '糖豆在探索世界',
      date: '2025-11-25'
    },
    {
      id: 4,
      url: '/images/WechatIMG616%201.jpeg',
      caption: '糖豆的小手小脚',
      date: '2025-12-05'
    },
    {
      id: 5,
      url: '/images/WechatIMG616.jpeg',
      caption: '糖豆的舒适时光',
      date: '2025-12-10'
    },
    {
      id: 6,
      url: '/images/WechatIMG617.jpeg',
      caption: '糖豆的好奇时刻',
      date: '2025-12-12'
    }
  ]
}

// 保存数据到localStorage
const savePhotos = () => {
  localStorage.setItem('babyPhotos', JSON.stringify(photos.value))
}

// 组件挂载时加载数据
onMounted(() => {
  loadPhotos()
})

// 监听数据变化并保存
watch(photos, () => {
  savePhotos()
}, { deep: true })

// 文件输入引用
const fileInput = ref(null)

// 触发文件选择
const triggerFileInput = () => {
  showUpload.value = true
  setTimeout(() => {
    fileInput.value.click()
  }, 100)
}

// 处理文件选择
const handleFileSelect = (event) => {
  const files = event.target.files
  if (files.length > 0) {
    addPhoto(files[0])
  }
  showUpload.value = false
}

// 处理拖拽上传
const handleDrop = (event) => {
  const files = event.dataTransfer.files
  if (files.length > 0 && files[0].type.startsWith('image/')) {
    addPhoto(files[0])
  }
  showUpload.value = false
}

// 添加照片
const addPhoto = (file) => {
  // 在实际应用中，这里会将图片上传到服务器
  // 这里我们只是模拟添加过程
  const reader = new FileReader()
  reader.onload = (e) => {
    photos.value.unshift({
      id: Date.now(), // 使用时间戳作为唯一ID
      url: e.target.result,
      caption: '新上传的照片',
      date: new Date().toLocaleDateString('zh-CN')
    })
  }
  reader.readAsDataURL(file)
}

// 删除照片
const deletePhoto = (id) => {
  const index = photos.value.findIndex(photo => photo.id === id)
  if (index !== -1) {
    photos.value.splice(index, 1)
  }
}
</script>

<style scoped>
.gallery {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 80px;
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

.upload-section {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}

.upload-section h2 {
  color: #ff6b9d;
  margin-top: 0;
  font-size: 1.3rem;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 10px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s;
  margin-bottom: 20px;
}

.upload-area:hover {
  border-color: #ff6b9d;
}

.upload-prompt p {
  margin: 10px 0;
}

.upload-prompt .small {
  font-size: 0.9rem;
  color: #999;
}

.upload-actions {
  display: flex;
  justify-content: flex-end;
}

.cancel-btn {
  padding: 10px 20px;
  background: #f0f0f0;
  color: #666;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.3s;
}

.cancel-btn:hover {
  background: #e0e0e0;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

.photo-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.photo-container {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1/1;
}

.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.photo-overlay {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0,0,0,0.5);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.photo-container:hover .photo-overlay {
  opacity: 1;
}

.delete-btn {
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}

.photo-caption {
  padding: 10px;
}

.photo-caption p {
  margin: 3px 0;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.photo-caption .date {
  color: #999;
  font-size: 0.7rem;
}

.fab {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 56px;
  height: 56px;
  background-color: #ff6b9d;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
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
  .photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .photo-caption {
    padding: 8px;
  }
  
  .photo-caption p {
    font-size: 0.75rem;
  }
  
  .fab {
    bottom: 80px;
  }
}
</style>