<template>
  <div class="home">
    <!-- Main Slider -->
    <div class="position-relative Slid_Header">
    <div class="main-slider d-lg-block d-none">
      <Splide :options="mainSliderOptions">
        <SplideSlide>
          <img src="https://wallpapercave.com/wp/wp9032309.jpg" class="slider-image" alt="Promo Banner" />
          <img src="https://wallpapercave.com/wp/wp9032309.jpg" class="slider-image" alt="Promo Banner" />
          <img src="https://wallpapercave.com/wp/wp9032309.jpg" class="slider-image" alt="Promo Banner" />
        </SplideSlide>
      </Splide>
    </div>

    <!-- Category Grid -->
    <div class="category-section w-100 position-absolute">
      <div class="container ">
        <div class="d-flex  overflow-x-auto">
          <div class="col">
            <div class="category-card m-3  bg-light" style="width: 18rem">
              <img src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d" alt="Monitors" />
              <div class="category-content text-center">
                <h4>Monitors</h4>
                <a href="#" class="shop-now-btn">Shop Now →</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="category-card m-3  bg-light" style="width: 18rem">
              <img src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d" alt="Keyboards" />
              <div class="category-content">
                <h4>Keyboards</h4>
                <a href="#" class="shop-now-btn">Shop Now →</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="category-card m-3  bg-light" style="width: 18rem">
              <img src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d" alt="Women's Collections" />
              <div class="category-content">
                <h4>Women's Collections</h4>
                <a href="#" class="shop-now-btn">Shop Now →</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="category-card m-3  bg-light" style="width: 18rem">
              <img src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d" alt="Mobile Phones" />
              <div class="category-content">
                <h4>Mobile Phones</h4>
                <a href="#" class="shop-now-btn">Shop Now →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>      
    </div>


    <!-- Featured Section -->
    <div class="featured-section">
      <div class="container">
        <div class="section-header">
          <h2>WOMEN'S COLLECTIONS</h2>
          <a href="#" class="view-all">See More →</a>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="featured-card">
              <img src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d" alt="Serving Division" />
              <div class="featured-content">
                <h3>Serving Division</h3>
                <a href="#" class="shop-now-btn">Shop Now →</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="featured-card">
              <img src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d" alt="Home Essentials" />
              <div class="featured-content">
                <h3>Shop for your home essentials</h3>
                <a href="#" class="discover-more-btn">Discover more →</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="featured-card">
              <img src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d" alt="Beauty & Health" />
              <div class="featured-content">
                <h3>Beauty & Health</h3>
                <a href="#" class="shop-now-btn">Shop Now →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="products-section">
      <div class="container">
        <div class="section-header">
          <h2>Popular Products in Electronics</h2>
          <a href="#" class="view-all">See More →</a>
        </div>
        <div class="row g-4">
          <div class="col-md-3" v-for="(product, index) in products" :key="index">
            <div class="product-card">
              <div class="product-badge" v-if="product.discount">-{{ product.discount }}%</div>
              <img :src="product.image" :alt="product.name" />
              <div class="product-content">
                <div class="product-rating">
                  <span v-for="star in 5" :key="star">★</span>
                  <span>({{ product.reviews }})</span>
                </div>
                <h4>{{ product.name }}</h4>
                <div class="product-price">
                  <span class="current-price">${{ product.price }}</span>
                  <span class="original-price" v-if="product.originalPrice">${{ product.originalPrice }}</span>
                </div>
                <button class="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

export default {
  components: { Splide, SplideSlide },
  data() {
    return {
      mainSliderOptions: {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        arrows: false,
        pagination: false,
        height: '500px'
      },
      products: [
        {
          name: "Apple iPhone 15 Pro Max 256GB / 512GB / 1TB ROM 8GB",
          image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d",
          price: "999.00",
          originalPrice: "1099.00",
          discount: 10,
          reviews: 45
        },
        {
          name: "PlayStation 5 512GB / 1TB ROM 8GB",
          image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d",
          price: "399.00",
          originalPrice: "499.00",
          discount: 20,
          reviews: 36
        },
        {
          name: "Apple iPhone 15 Pro 256GB / 512GB / 1TB ROM 8GB",
          image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d",
          price: "899.00",
          reviews: 28
        },
        {
          name: "Samsung Galaxy 12 Pro 256GB / 512GB / 1TB ROM 8GB",
          image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d",
          price: "799.00",
          reviews: 32
        }
      ]
    };
  }
};
</script>

<style scoped>
.home {
  font-family: 'Arial', sans-serif;
  color: #333;
}

/* Main Slider */
.Slid_Header {
  height: 700px;
  width: 100%
}

.main-slider {
  margin-bottom: 20px;
}

.slider-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

/* Promo Banner */
.promo-banner {
  background-color: #f8f9fa;
  padding: 15px 0;
  margin-bottom: 30px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

.promo-banner h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

/* Category Section */
.category-section {
  margin-bottom: 40px;
  bottom: -20px
}

.category-card {
  border: 1px solid #e0e0e0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.category-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.category-card img {
  width: 100%;
  max-width: 350px;
  height: 200px;
  object-fit: cover;
}

.category-content {
  padding: 15px;
  text-align: center;
}

.category-content h4 {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
}

.shop-now-btn {
  color: #e51742;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 10px;
}

/* Featured Section */
.featured-section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #e51742;
  padding-bottom: 10px;
}

.section-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: #000336;
  margin: 0;
  text-transform: uppercase;
}

.view-all {
  color: #e51742;
  text-decoration: none;
  font-weight: 600;
}

.featured-card {
  border: 1px solid #e0e0e0;
  position: relative;
}

.featured-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.featured-content {
  padding: 20px;
  text-align: center;
}

.featured-content h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
}

.discover-more-btn {
  color: #000336;
  text-decoration: none;
  font-weight: 600;
}

/* Products Section */
.products-section {
  margin-bottom: 50px;
}

.product-card {
  border: 1px solid #e0e0e0;
  position: relative;
  padding: 15px;
  transition: all 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #e51742;
  color: white;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 3px;
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 15px;
}

.product-content {
  text-align: center;
}

.product-rating {
  color: #ffc107;
  margin-bottom: 10px;
  font-size: 14px;
}

.product-rating span:last-child {
  color: #666;
  margin-left: 5px;
}

.product-card h4 {
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 500;
  min-height: 40px;
}

.product-price {
  margin-bottom: 15px;
}

.current-price {
  font-size: 18px;
  font-weight: 700;
  color: #e51742;
}

.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  margin-left: 8px;
}

.add-to-cart-btn {
  background-color: #000336;
  color: white;
  border: none;
  padding: 8px 15px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart-btn:hover {
  background-color: #001a5e;
}

/* Responsive Design */
@media (max-width: 992px) {
  .slider-image {
    height: 400px;
  }
  
  .category-card img,
  .featured-card img {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .slider-image {
    height: 300px;
  }
  
  .section-header h2 {
    font-size: 20px;
  }
  
  .promo-banner h3 {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .slider-image {
    height: 200px;
  }
  
  .category-card,
  .featured-card,
  .product-card {
    margin-bottom: 20px;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .view-all {
    margin-top: 10px;
  }
}
</style>
