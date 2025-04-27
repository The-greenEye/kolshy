<template>
  <div class="contact-page">
    <!-- شكل موجات الخلفية -->
    <div class="wave-bg">
      <svg viewBox="0 0 1440 320">
        <path fill="#f8f9fa" fill-opacity="1" 
          d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,112C672,117,768,171,864,170.7C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>
      </svg>
    </div>

    <div class="container">
      <div class="contact-container">
        <!-- العنوان مع أنيميشن -->
        <h1 class="section-title animate_animated animate_fadeInDown">
          تواصل معنا
          <span class="title-icon">📩</span>
        </h1>

        <!-- محتوى الصفحة -->
        <div class="contact-content">
          <!-- نموذج الاتصال -->
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group animate_animated animate_fadeInLeft">
              <label>الاسم الكامل</label>
              <div class="input-container">
                <i class="fas fa-user icon"></i>
                <input type="text" v-model="formData.name" required>
              </div>
            </div>

            <div class="form-group animate_animated animate_fadeInRight">
              <label>البريد الإلكتروني</label>
              <div class="input-container">
                <i class="fas fa-envelope icon"></i>
                <input type="email" v-model="formData.email" required>
              </div>
            </div>

            <div class="form-group animate_animated animate_fadeInLeft">
              <label>الرسالة</label>
              <div class="input-container">
                <i class="fas fa-comment-dots icon"></i>
                <textarea v-model="formData.message" rows="5" required></textarea>
              </div>
            </div>

            <button class="submit-btn animate_animated animate_fadeInUp">
              إرسال الرسالة
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>

          <!-- معلومات الاتصال -->
          <div class="contact-info animate_animated animate_fadeIn">
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>العنوان</h3>
              <p>123 شارع المدينة المنورة<br>القاهرة، مصر</p>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-phone"></i>
              </div>
              <h3>الهاتف</h3>
              <p>+20 123 456 789<br>+20 987 654 321</p>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-envelope-open-text"></i>
              </div>
              <h3>البريد الإلكتروني</h3>
              <p>info@example.com<br>support@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification'
export default {
    name: "contectus",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
    },
    setup() {
        const toast = useToast();
        return { toast }
  },
  methods: {
    submitForm() {
      // إرسال النموذج هنا
      this.toast.success('تم إرسال الرسالة بنجاح!')
      this.formData = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
  position: relative;
  padding: 100px 0;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.wave-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.wave-bg svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  position: relative;
}

.title-icon {
  display: inline-block;
  margin-right: 15px;
  animation: float 3s ease-in-out infinite;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 30px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  color: #34495e;
  font-weight: 500;
}

.input-container {
  position: relative;
}

.input-container .icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #e74c3c;
}

input, textarea {
  width: 100%;
  padding: 15px 20px 15px 50px;
  border: 2px solid #ecf0f1;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #e74c3c;
  box-shadow: 0 0 15px rgba(231,76,60,0.1);
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(231,76,60,0.3);
}

.contact-info {
  display: grid;
  gap: 30px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.info-icon {
  width: 60px;
  height: 60px;
  background: #e74c3c;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  input, textarea {
    padding: 12px 15px 12px 40px;
  }
  
  .icon {
    left: 15px;
    font-size: 14px;
  }
  
  .submit-btn {
    padding: 12px 30px;
    font-size: 16px;
  }
}
</style>