<template>
  <div class="product-detail-page">
    <!-- مسار التنقل -->
    <nav class="breadcrumb-nav">
      <span>Electronics</span> > 
      <span>Smartphones</span> > 
      <span class="current-product">iPhone 15 Pro</span>
    </nav>

    <!-- القسم الرئيسي -->
    <div class="main-content container">
      <div class="row">
        <!-- معرض الصور -->
        <div class="col-12 col-md-6">
          <div class="main-image-container">
            <img :src="mainImage" class="main-image" alt="Main product image">
            <button class="zoom-button" @click="openZoomModal">
              <i class="fas fa-search-plus"></i>
            </button>
          </div>
          <div class="thumbnail-gallery">
            <img 
              v-for="(img, index) in product.images" 
              :key="index"
              :src="img"
              @click="changeMainImage(img)"
              :class="{active: mainImage === img}"
              class="thumbnail"
            >
          </div>
        </div>

        <!-- تفاصيل المنتج -->
        <div class="col-12 col-md-6">
          <div class="product-info">
            <h1 class="product-title">{{ product.title }}</h1>
            
            <!-- التقييمات -->
            <div class="ratings-section">
              <div class="stars">
                <i v-for="n in 5" :key="n" class="fas fa-star" :class="{'filled': n <= product.rating}"></i>
              </div>
              <span class="rating-count">({{ product.reviewCount }} ratings)</span>
              <span class="question-mark" @mouseover="showRatingTooltip">
                <i class="fas fa-question-circle"></i>
              </span>
            </div>

            <!-- السعر -->
            <div class="price-section">
              <span class="current-price">EGP {{ product.price.toLocaleString() }}</span>
              <span class="original-price">EGP {{ product.originalPrice.toLocaleString() }}</span>
              <span class="discount-percent">{{ product.discount }}% off</span>
            </div>

            <!-- خيارات الشراء -->
            <div class="purchase-options">
              <div class="delivery-options">
                <i class="fas fa-map-marker-alt"></i>
                <div class="delivery-info">
                  <span class="deliver-to">Deliver to Egypt</span>
                  <span class="delivery-time">Estimated delivery: {{ product.deliveryDate }}</span>
                </div>
              </div>

              <div class="quantity-selector">
                <label>Quantity:</label>
                <select v-model="selectedQuantity" class="form-control">
                  <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                </select>
              </div>

              <button class="btn btn-add-to-cart" @click="addToCart">
                <i class="fas fa-shopping-cart"></i> Add to Cart
              </button>

              <button class="btn btn-buy-now">
                Buy Now
              </button>

              <div class="secure-payment">
                <i class="fas fa-lock"></i>
                Secure transaction
              </div>
            </div>

            <!-- الضمان -->
            <div class="warranty-section">
              <div class="warranty-item">
                <i class="fas fa-shield-alt"></i>
                <span>1 Year Warranty</span>
              </div>
              <div class="warranty-item">
                <i class="fas fa-undo"></i>
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- الأقسام الإضافية -->
      <div class="row additional-sections">
        <!-- المواصفات -->
        <div class="col-12 col-md-6">
          <div class="specs-section p-2 card" style="width: 100%">
            <h3>Product Specifications</h3>
            <table class="specs-table">
              <tr v-for="(spec, index) in product.specs" :key="index">
                <td class="spec-title">{{ spec.title }}</td>
                <td class="spec-value">{{ spec.value }}</td>
              </tr>
            </table>
          </div>
        </div>

        <!-- التقييمات -->
        <div class="col-12 col-md-6">
          <div class="reviews-section p-2 card" style="width: 100%">
            <h3>Customer Reviews</h3>
            <div class="review-summary">
              <div class="average-rating">
                {{ product.rating }}/5
              </div>
              <div class="rating-bars">
                <div v-for="n in 5" :key="n" class="rating-bar">
                  <span class="stars">{{ 6 - n }} <i class="fas fa-star"></i></span>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" :style="{width: product.ratingDistribution[5 - n] + '%'}"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- المنتجات المقترحة -->
      <div class="related-products" style="width: 100%">
        <h3>Frequently Bought Together</h3>
        <div class="products-grid">
          <div v-for="item in relatedProducts" :key="item.id" class="product-card">
            <img :src="item.image" class="img-fluid" alt="Related product">
            <div class="product-info">
              <h4>{{ item.title }}</h4>
              <div class="price">EGP {{ item.price.toLocaleString() }}</div>
              <button class="btn btn-outline-success w-100 btn-add">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- مودال التكبير -->
    <zoom-modal v-if="showZoom" :image="mainImage" @close="closeZoomModal" />
  </div>
</template>

<script>
import ZoomModal from '@/components/cart/ZoomModal.vue'

export default {
    name: "pageDatlis",
  components: { ZoomModal },
  data() {
    return {
      mainImage: '',
      selectedQuantity: 1,
      showZoom: false,
      product: {
        title: 'Apple iPhone 15 Pro Max (256GB) - Titanium Black',
        price: 75999,
        originalPrice: 84999,
        discount: 11,
        rating: 4.7,
        reviewCount: 2356,
        deliveryDate: 'Thursday, 15 Feb',
        images: [
          'https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg',
          'https://wallpapers.com/images/hd/jordan-shoes-4k-ebfnd3563olc5t0k.jpg',
          'https://i5.walmartimages.com/seo/Newborn-Toddler-Baby-Girl-Boy-Hooded-Romper-Jumpsuit-Winter-Outfits-Clothes_4b57dea6-2aaf-4fe2-be37-2489b526bd2d.95598c195350f097f604fd718d86f606.jpeg'
        ],
        specs: [
          { title: 'Brand', value: 'Apple' },
          { title: 'Model', value: 'iPhone 15 Pro Max' },
          { title: 'Storage', value: '256GB' },
          { title: 'Color', value: 'Titanium Black' }
        ],
        ratingDistribution: [5, 15, 25, 35, 20]
      },
      relatedProducts: [
        {
          id: 1,
          title: 'Apple MagSafe Charger',
          price: 1999,
          image: 'https://wallpapers.com/images/hd/jordan-shoes-4k-ebfnd3563olc5t0k.jpg'
        },
        {
          id: 2,
          title: 'Silicone Case',
          price: 1499,
          image: 'https://wallpapers.com/images/hd/jordan-shoes-4k-ebfnd3563olc5t0k.jpg'
        }
      ]
    }
  },
  created() {
    this.mainImage = this.product.images[0]
  },
  methods: {
    changeMainImage(img) {
      this.mainImage = img
    },
    openZoomModal() {
      this.showZoom = true
    },
    closeZoomModal() {
      this.showZoom = false
    },
    addToCart() {
      // إضافة منطق إضافة إلى السلة
    }
  }
}
</script>

<style scoped>
.product-detail-page {
  background-color: #f7f7f7;
  padding: 20px 0;
}

.breadcrumb-nav {
  font-size: 14px;
  color: #565959;
  padding: 10px 30px;
  background: #fff;
  margin-bottom: 20px;
}

.main-image-container {
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-image {
  width: 100%;
  height: 500px;
  object-fit: contain;
}

.zoom-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0,0,0,0.7);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
}

.thumbnail-gallery {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 4px;
}

.thumbnail.active {
  border-color: #e47911;
}

.product-info {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-title {
  font-size: 28px;
  font-weight: 400;
  color: #0f1111;
  margin-bottom: 15px;
}

.ratings-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.stars .filled {
  color: #ffa41c;
}

.rating-count {
  color: #007185;
  font-size: 14px;
}

.price-section {
  background: #fafafa;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.current-price {
  font-size: 28px;
  color: #b12704;
  font-weight: 500;
  margin-right: 15px;
}

.original-price {
  text-decoration: line-through;
  color: #565959;
}

.discount-percent {
  color: #007600;
  margin-left: 10px;
}

.purchase-options {
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

.delivery-options {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
}

.deliver-to {
  font-weight: 500;
}

.delivery-time {
  color: #565959;
  font-size: 14px;
}

.btn-add-to-cart {
  background: #ffd814;
  border-color: #fcd200;
  color: #0f1111;
  width: 100%;
  margin: 10px 0;
  padding: 12px;
}

.btn-buy-now {
  background: #ffa41c;
  border-color: #ff8f00;
  color: #0f1111;
  width: 100%;
  padding: 12px;
}

.secure-payment {
  color: #007600;
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
}

.warranty-section {
  display: flex;
  gap: 30px;
  margin-top: 20px;
  padding: 15px 0;
  border-top: 1px solid #ddd;
}

.warranty-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #007185;
}

.additional-sections {
  margin-top: 30px;
}

.specs-table {
  width: 100%;
}

.spec-title {
  font-weight: 500;
  padding: 8px 0;
}

.spec-value {
  color: #565959;
  padding-left: 20px;
}

.related-products {
  margin-top: 40px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .main-image {
    height: 300px;
  }
  
  .product-title {
    font-size: 22px;
  }
  
  .current-price {
    font-size: 24px;
  }
}
</style>