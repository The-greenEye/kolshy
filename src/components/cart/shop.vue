<template>
  <div class="amazon-shop-page">
    <!-- Breadcrumb -->
    <div class="amz-breadcrumb">
      <span class="amz-breadcrumb-item">كل الفئات</span>
      <span class="amz-breadcrumb-divider">›</span>
      <span class="amz-breadcrumb-item">{{ category }}</span>
    </div>

    <div class="amz-main-container">
      <!-- Filters Section -->
      <aside class="amz-filters">
        <h3 class="amz-filter-title">تصفية حسب</h3>

        <!-- Price Filter -->
        <div class="amz-filter-group">
          <h4 class="amz-filter-subtitle">السعر</h4>
          <div class="amz-price-inputs row">
            <div class="col-6">
              <span class="amz-price-separator">From</span>
              <input type="text" :value="filters.priceRange[0]" class="amz-price-input form-control" />
            </div>
            <div class="col-6">
              <span class="amz-price-separator">To</span>
              <input type="text" :value="filters.priceRange[1]" class="amz-price-input form-control" />
            </div>
          </div>
          <div class="amz-range-slider row">
            <input type="range" v-model="filters.priceRange[0]" :min="priceLimits.min" :max="priceLimits.max" class="amz-range col form-control p-0 border-0" />
            <input type="range" v-model="filters.priceRange[1]" :min="priceLimits.min" :max="priceLimits.max" class="amz-range col form-control p-0 border-0" />
          </div>
        </div>

        <!-- Brand Filter -->
        <div class="amz-filter-group">
          <h4 class="amz-filter-subtitle">العلامة التجارية</h4>
          <div v-for="brand in brands" :key="brand" class="amz-checkbox-item">
            <label>
              <input type="checkbox" @input="change()" :value="brand" v-model="filters.brands" class="amz-checkbox" />
              <span class="amz-checkmark"></span>
              {{ brand.category }}
            </label>
          </div>
        </div>

        <!-- Delivery Filter -->
        <div class="amz-filter-group">
          <label class="amz-checkbox-item">
            <input type="checkbox" v-model="filters.prime" />
            <span class="amz-checkmark"></span>
            <span class="amz-prime-badge">توصيل أمازون</span>
          </label>
        </div>
      </aside>

      <!-- Products Grid -->
      <main class="amz-products-grid">
        <!-- Header -->
        <div class="amz-results-header">
          <h2 class="amz-results-title">{{ category }}</h2>
          <span class="amz-results-count">{{ filteredProducts.length }} نتيجة</span>
        </div>

        <!-- Products -->
        <div class="amz-products-list">
          <div v-for="product in filteredProducts" :key="product.id" class="amz-product-card">
            <!-- Product Image -->
            <div class="amz-product-image">
              <img :src="product.image" :alt="product.title" loading="lazy" />
              <button class="amz-wishlist-btn" @click="toggleFavorite(product)">♥</button>
            </div>

            <!-- Product Details -->
            <div class="amz-product-details">
              <h3 class="amz-product-title">{{ product.title.slice(0, 20) }}</h3>

              <!-- Rating -->
              <div class="amz-rating">
                <div class="amz-stars">
                  ★★★★☆
                  <span class="amz-rating-count">({{ product.rating.count }})</span>
                </div>
              </div>

              <!-- Price -->
              <div class="amz-price">
                <span class="amz-current-price">EGP {{ product.price }}</span>
                <span v-if="product.oldPrice" class="amz-old-price">EGP {{ product.oldPrice }}</span>
                <span v-if="product.discount" class="amz-discount">({{ product.discount }}% خصم)</span>
              </div>

              <!-- Prime Badge -->
              <div v-if="product.prime" class="amz-prime">
                <span class="amz-prime-badge">✔ توصيل مجاني</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      category: "أجهزة كمبيوتر",
      brand: [],
      priceLimits: { min: 0, max: 500 },
      filters: {
        priceRange: [0, 200],
        brands: [],
        prime: false,
      },
      products: [], // سيتم ملؤها من API
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((p) => (p.price >= this.filters.priceRange[0] && p.price <= this.filters.priceRange[1] && this.filters.brands.length === 0) || (this.filters.brands.includes(p.category) && (!this.filters.prime || p.prime)));
    },
    change() {
      console.log(this.$.filters.brands)
    }
  },
  methods: {
    async getProducts() {
      const category = this.$route.query.category;
      const response = await axios.get("https://fakestoreapi.com/products", {
        params: { category },
      });
      const res_update = response.data.map((item) => {
        return {
          ...item, // Keep original item properties
        };
      });

      this.products = res_update.map((item) => ({
        ...item, // Keep updated item properties
        price: Number(item.price), // Ensure price is a number
        freeShipping: item.shipping === "free", // Determine if shipping is free
      }));
      this.brands = response.data;
    },

    toggleFavorite(product) {
      product.isFavorite = !product.isFavorite;
    },
    addToCart(product) {
      // إضافة إلى السلة
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
.amazon-shop-page {
  background: #eaeded;
  padding: 20px;
  font-family: "Amazon Ember", Arial, sans-serif;
}

.amz-breadcrumb {
  color: #565959;
  font-size: 14px;
  margin-bottom: 20px;
}

.amz-breadcrumb-divider {
  margin: 0 5px;
}

.amz-main-container {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 20px;
}

.amz-filters {
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.amz-filter-title {
  font-size: 18px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.amz-filter-group {
  margin-bottom: 25px;
}

.amz-checkbox-item {
  display: flex;
  align-items: center;
  margin: 8px 0;
}

.amz-checkbox {
  margin-right: 8px;
  width: 16px;
  height: 16px;
}

.amz-products-grid {
  background: white;
  padding: 20px;
  border-radius: 4px;
}

.amz-results-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.amz-results-title {
  font-size: 24px;
  margin-right: 15px;
}

.amz-results-count {
  color: #565959;
}

.amz-products-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.amz-product-card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  transition: 0.3s;
}

.amz-product-card:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.amz-product-image {
  position: relative;
  height: 200px;
  margin-bottom: 15px;
}

.amz-product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.amz-wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.amz-price {
  margin: 10px 0;
}

.amz-current-price {
  color: #b12704;
  font-size: 18px;
  font-weight: bold;
}

.amz-old-price {
  color: #565959;
  text-decoration: line-through;
  margin-left: 10px;
}

.amz-discount {
  color: #007600;
  margin-left: 10px;
}

.amz-add-to-cart {
  background: #ffd814;
  border: none;
  width: 100%;
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

.amz-add-to-cart:hover {
  background: #f7ca00;
}

.amz-pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
}

.amz-page-btn {
  background: white;
  border: 1px solid #ddd;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .amz-main-container {
    grid-template-columns: 1fr;
  }

  .amz-filters {
    display: none;
  }

  .amz-products-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
