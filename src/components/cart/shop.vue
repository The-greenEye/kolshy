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
        <h3 class="amz-filter-title">Filters</h3>

        <!-- Price Filter -->
        <div class="amz-filter-group">
          <h4 class="amz-filter-subtitle">Price</h4>
          <div class="amz-price-inputs row">
            <div class="col-6">
              <span class="amz-price-separator">From</span>
              <input 
                type="number" 
                v-model="filters.priceRange[0]" 
                :min="priceLimits.min" 
                :max="filters.priceRange[1]" 
                class="amz-price-input form-control" 
              />
            </div>
            <div class="col-6">
              <span class="amz-price-separator">To</span>
              <input 
                type="number" 
                v-model="filters.priceRange[1]" 
                :min="filters.priceRange[0]" 
                :max="priceLimits.max" 
                class="amz-price-input form-control" 
              />
            </div>
          </div>
          <div class="amz-range-slider">
            <input 
              type="range" 
              v-model="filters.priceRange[0]" 
              :min="priceLimits.min" 
              :max="filters.priceRange[1]" 
              class="amz-range form-control" 
            />
            <input 
              type="range" 
              v-model="filters.priceRange[1]" 
              :min="filters.priceRange[0]" 
              :max="priceLimits.max" 
              class="amz-range form-control" 
            />
          </div>
        </div>

        <!-- Brand Filter -->
        <div class="amz-filter-group">
          <h4 class="amz-filter-subtitle">Brands</h4>
          <div v-for="brand in uniqueBrands" :key="brand" class="amz-checkbox-item">
            <label>
              <input 
                type="checkbox" 
                :value="brand" 
                v-model="filters.brands" 
                class="amz-checkbox" 
              />
              <span class="amz-checkmark"></span>
              {{ brand }}
            </label>
          </div>
        </div>

        <!-- Delivery Filter -->
        <div class="amz-filter-group">
          <label class="amz-checkbox-item">
            <input type="checkbox" v-model="filters.prime" />
            <span class="amz-checkmark"></span>
            <span class="amz-prime-badge">Delivery From Amazon</span>
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
              <button 
                class="amz-wishlist-btn" 
                @click="toggleFavorite(product)"
                :style="{ color: product.isFavorite ? 'red' : 'gray' }"
              >
                ♥
              </button>
            </div>

            <!-- Product Details -->
            <div class="amz-product-details">
              <h3 class="amz-product-title">{{ product.title.slice(0, 20) }}</h3>

              <!-- Rating -->
              <div class="amz-rating">
                <div class="amz-stars">
                  {{ generateStars(product.rating.rate) }}
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

              <!-- Add to Cart Button -->
              <button class="amz-add-to-cart" @click="addToCart(product)">
                أضف إلى السلة
              </button>
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
      category: "Kolshy",
      priceLimits: { min: 0, max: 1000 },
      filters: {
        priceRange: [0, 1000],
        brands: [],
        prime: false,
      },
      products: [],
    };
  },
  computed: {
    uniqueBrands() {
      const brands = new Set();
      this.products.forEach(product => {
        brands.add(product.category);
      });
      return Array.from(brands);
    },
    filteredProducts() {
      return this.products.filter(product => {
        // Price range filter
        const priceInRange = product.price >= this.filters.priceRange[0] && 
                           product.price <= this.filters.priceRange[1];
        
        // Brand filter
        const brandMatch = this.filters.brands.length === 0 || 
                         this.filters.brands.includes(product.category);
        
        // Prime filter
        const primeMatch = !this.filters.prime || product.prime;
        
        return priceInRange && brandMatch && primeMatch;
      });
    },
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data.map(item => ({
          ...item,
          price: Math.round(item.price * 30), // Convert to EGP
          oldPrice: Math.round(item.price * 30 * 1.2), // Add 20% as old price
          discount: 20, // Static discount for example
          prime: Math.random() > 0.5, // Random prime eligibility
          isFavorite: false,
        }));
        
        // Set price limits based on actual products
        if (this.products.length > 0) {
          const prices = this.products.map(p => p.price);
          this.priceLimits.min = Math.min(...prices);
          this.priceLimits.max = Math.max(...prices);
          this.filters.priceRange = [this.priceLimits.min, this.priceLimits.max];
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    
    generateStars(rating) {
      const fullStars = '★'.repeat(Math.floor(rating));
      const halfStar = rating % 1 >= 0.5 ? '½' : '';
      const emptyStars = '☆'.repeat(5 - Math.ceil(rating));
      return fullStars + halfStar + emptyStars;
    },
    
    toggleFavorite(product) {
      product.isFavorite = !product.isFavorite;
    },
    
    addToCart(product) {
      // In a real app, you would dispatch to Vuex or send to backend
      console.log("Added to cart:", product.title);
      alert(`${product.title} added to cart`);
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
  direction: rtl;
}

.amz-breadcrumb {
  color: #565959;
  font-size: 14px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
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
  text-align: right;
}

.amz-filter-group {
  margin-bottom: 25px;
}

.amz-checkbox-item {
  display: flex;
  align-items: center;
  margin: 8px 0;
  text-align: right;
}

.amz-checkbox {
  margin-left: 8px;
  width: 16px;
  height: 16px;
}

.amz-price-inputs {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.amz-price-input {
  width: 100%;
  padding: 5px;
}

.amz-range-slider {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.amz-range {
  width: 100%;
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
  justify-content: space-between;
}

.amz-results-title {
  font-size: 24px;
}

.amz-results-count {
  color: #565959;
  font-size: 14px;
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
  text-align: right;
}

.amz-product-card:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
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
  left: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: 14px;
}

.amz-discount {
  color: #007600;
  margin-left: 10px;
  font-size: 14px;
}

.amz-add-to-cart {
  background: #ffd814;
  border: none;
  width: 100%;
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

.amz-add-to-cart:hover {
  background: #f7ca00;
}

.amz-prime-badge {
  color: #007600;
  font-size: 14px;
}

.amz-rating {
  margin: 8px 0;
  color: #ffa41c;
}

.amz-rating-count {
  color: #565959;
  font-size: 12px;
}

@media (max-width: 768px) {
  .amz-main-container {
    grid-template-columns: 1fr;
  }

  .amz-products-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .amz-products-list {
    grid-template-columns: 1fr;
  }
}
</style>
