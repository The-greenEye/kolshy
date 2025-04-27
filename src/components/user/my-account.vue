<template>
  <div class="account-page">
    <div class="container-fluid">
      <div class="row">
        <!-- القائمة الجانبية -->
        <div class="col-md-3 col-12 sidebar">
          <div class="account-header p-3">
            <h4>مرحبا، {{ user.name }}</h4>
            <p class="text-muted">{{ user.email }}</p>
          </div>
          
          <nav class="account-nav">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="{active: activeTab === tab.id}"
              class="nav-btn"
            >
              <i :class="tab.icon"></i>
              {{ tab.label }}
            </button>
          </nav>
        </div>

        <!-- المحتوى الرئيسي -->
        <div class="col-md-9 col-12 main-content">
          <!-- قسم معلومات الحساب -->
          <div v-show="activeTab === 'account'" class="account-section card p-4" style="width: 100%">
            <h3 class="section-title"><i class="fas fa-user-circle"></i> معلومات الحساب</h3>
            
            <div class="account-type mb-4">
              <label>نوع الحساب:</label>
              <select v-model="user.accountType" class="form-control w-50">
                <option value="customer">عميل</option>
                <option value="vendor">بائع</option>
              </select>
            </div>

            <form @submit.prevent="updateAccount">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>الاسم الكامل</label>
                    <input type="text" v-model="user.name" class="form-control">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>البريد الإلكتروني</label>
                    <input type="email" v-model="user.email" class="form-control">
                  </div>
                </div>
              </div>
              
              <button type="submit" class="btn btn-save">حفظ التغييرات</button>
            </form>
          </div>

          <!-- قسم المفضلة -->
          <div v-show="activeTab === 'wishlist'" class="wishlist-section card p-4" style="width: 100%">
            <h3 class="section-title"><i class="fas fa-heart"></i> قائمة المفضلة</h3>
            
            <div v-if="wishlist.length === 0" class="empty-state">
              <i class="fas fa-heart-broken"></i>
              <p>لا يوجد منتجات في قائمة المفضلة</p>
            </div>

            <div class="row">
              <div 
                v-for="product in wishlist" 
                :key="product.id" 
                class="col-md-4 col-6 mb-4"
              >
                <div class="product-card">
                  <img :src="product.image" class="product-image">
                  <div class="product-details">
                    <h5 class="product-title">{{ product.title }}</h5>
                    <p class="product-price">EGP {{ product.price.toLocaleString() }}</p>
                    <button @click="removeFromWishlist(product.id)" class="btn btn-remove">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- قسم الطلبات السابقة -->
          <div v-show="activeTab === 'orders'" class="orders-section card p-4" style="width: 100%">
            <h3 class="section-title"><i class="fas fa-shopping-bag"></i> طلباتي</h3>
            
            <div class="order" v-for="order in orders" :key="order.id">
              <div class="order-header">
                <div class="order-info">
                  <span class="order-id">رقم الطلب: {{ order.id }}</span>
                  <span class="order-date">{{ order.date }}</span>
                </div>
                <span class="order-status" :class="order.status">{{ order.status }}</span>
              </div>
              
              <div class="order-items">
                <div 
                  v-for="(item, index) in order.items" 
                  :key="index" 
                  class="order-item"
                >
                  <img :src="item.image" class="item-image">
                  <div class="item-details">
                    <h6>{{ item.title }}</h6>
                    <p>الكمية: {{ item.quantity }}</p>
                  </div>
                </div>
              </div>
              
              <button class="btn btn-view-all">عرض التفاصيل الكاملة</button>
            </div>
          </div>

          <!-- قسم الأمان -->
          <div v-show="activeTab === 'security'" class="security-section card p-4" style="width: 100%">
            <h3 class="section-title"><i class="fas fa-shield-alt"></i> الأمان</h3>
            
            <form @submit.prevent="changePassword">
              <div class="form-group">
                <label>كلمة المرور الحالية</label>
                <input type="password" v-model="security.currentPassword" class="form-control">
              </div>
              
              <div class="form-group">
                <label>كلمة المرور الجديدة</label>
                <input type="password" v-model="security.newPassword" class="form-control">
              </div>
              
              <button type="submit" class="btn btn-save">تغيير كلمة المرور</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
  data() {
    return {
      activeTab: 'account',
      tabs: [
        { id: 'account', label: 'معلومات الحساب', icon: 'fas fa-user' },
        { id: 'orders', label: 'طلباتي', icon: 'fas fa-box' },
        { id: 'wishlist', label: 'المفضلة', icon: 'fas fa-heart' },
        { id: 'security', label: 'الأمان', icon: 'fas fa-shield-alt' }
      ],
      user: {
        name: 'محمد أحمد',
        email: 'mohamed@example.com',
        accountType: 'customer'
      },
      wishlist: [
        {
          id: 1,
          title: 'تيشيرت أسود',
          price: 599.99,
          image: 'https://wallpaperaccess.com/full/6173939.jpg'
        },
        {
          id: 2,
          title: 'تيشيرت أسود',
          price: 599.99,
          image: 'https://wallpaperaccess.com/full/6173939.jpg'
        },
        {
          id: 3,
          title: 'تيشيرت أسود',
          price: 599.99,
          image: 'https://wallpaperaccess.com/full/6173939.jpg'
        },
        {
          id: 4,
          title: 'تيشيرت أسود',
          price: 599.99,
          image: 'https://wallpaperaccess.com/full/6173939.jpg'
        },
        {
          id: 5,
          title: 'تيشيرت أسود',
          price: 599.99,
          image: 'https://wallpaperaccess.com/full/6173939.jpg'
        }
      ],
      orders: [
        {
          id: 'ORD-12345',
          date: '15 فبراير 2024',
          status: 'تم التوصيل',
          items: [
            {
              title: 'هاتف ذكي',
              image: 'https://wallpaperaccess.com/full/6173939.jpg',
              quantity: 1,
              price: 75999
            }
          ]
        }
      ],
      security: {
        currentPassword: '',
        newPassword: ''
      }
    }
  },
  methods: {
    updateAccount() {
      // إرسال التحديثات إلى الخادم
    },
    removeFromWishlist(productId) {
      this.wishlist = this.wishlist.filter(item => item.id !== productId)
    },
    changePassword() {
      // تغيير كلمة المرور
    }
  }
}
</script>

<style scoped>
.account-page {
  background-color: #f7f7f7;
  min-height: 100vh;
  padding: 30px 0;
}

.sidebar {
  background: white;
  border-right: 1px solid #ddd;
  min-height: 100vh;
}

.account-header {
  border-bottom: 1px solid #eee;
}

.nav-btn {
  width: 100%;
  padding: 15px;
  text-align: right;
  border: none;
  background: none;
  border-radius: 4px;
  margin: 5px 0;
  transition: all 0.2s;
}

.nav-btn:hover, .nav-btn.active {
  background-color: #f0f2f2;
  color: #e47911;
}

.nav-btn i {
  margin-left: 10px;
}

.section-title {
  color: #0f1111;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.product-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-3px);
}

.product-image {
  height: 200px;
  object-fit: contain;
}

.btn-save {
  background: #f0c14b;
  border-color: #a88734;
  color: #111;
  margin: 10px
}

.btn-save:hover {
  background: #ddb347;
}

.order {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.order-status {
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: 500;
}

.order-status.تم\ التوصيل {
  background: #cfedd8;
  color: #007600;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.empty-state {
  text-align: center;
  padding: 50px 0;
  color: #565959;
}

.empty-state i {
  font-size: 50px;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .sidebar {
    min-height: auto;
    border-right: none;
  }
  
  .nav-btn {
    text-align: center;
  }
  
  .product-image {
    height: 150px;
  }
}
</style>