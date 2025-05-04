<template>
  <div class="home">
    <!-- Main Slider -->
    <div class="main-slider">
      <Splide :options="mainSliderOptions">
        <SplideSlide v-for="(slide, index) in mainSlides" :key="index">
          <img :src="slide.image" class="slider-image img-fluid" :alt="slide.alt" />
        </SplideSlide>
      </Splide>
    </div>

    <!-- Category Cards -->
    <div class="category-grid container-fluid">
      <h2 class="section-title">Shop by Category</h2>
      <div class="row g-3">
        <div v-for="(category, index) in uniqueCategories" :key="index" class="col-6 col-md-3">
          <div class="category-card">
            <img :src="category.image" class="img-fluid" :alt="category.title" />
            <div class="category-content">
              <h3>{{ category.title }}</h3>
              <router-link :to="`/category/${category.slug}`" class="shop-link">Shop now</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Products -->
    <div class="product-grid container-fluid">
      <h2 class="section-title">Featured Products</h2>
      <div class="row g-3">
        <div v-for="(product, index) in featuredProducts" :key="index" class="col-6 col-md-3">
          <div class="product-card">
            <div class="product-image-container">
              <img :src="product.image" class="img-fluid" :alt="product.title" />
              <button class="wishlist-btn" @click="toggleWishlist(product)">
                ♥
              </button>
            </div>
            <div class="product-content">
              <h3>{{ product.title }}</h3>
              <div class="price">${{ product.price }}</div>
              <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Daily Deals Slider -->
    <div class="deals-section container-fluid">
      <h2 class="section-title">Today's Deals</h2>
      <Splide :options="dealsSliderOptions">
        <SplideSlide v-for="(deal, index) in uniqueDeals" :key="index">
          <div class="deal-card">
            <div class="deal-badge">-{{ deal.discount }}%</div>
            <img :src="deal.image" class="img-fluid" :alt="deal.title" />
            <div class="deal-content">
              <div class="deal-price">
                <span class="current-price">${{ deal.price }}</span>
                <span class="original-price">${{ deal.originalPrice }}</span>
              </div>
              <div class="deal-time">Ends in {{ deal.timeLeft }}</div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { useRouter } from 'vue-router';

export default {
  components: { Splide, SplideSlide },
  setup() {
    const router = useRouter();
    
    const mainSliderOptions = {
      type: 'loop',
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      rewind: true,
      arrows: true,
      pagination: true,
      height: '600px',
      cover: true
    };

    const dealsSliderOptions = {
      perPage: 4,
      gap: '1rem',
      breakpoints: { 
        992: { perPage: 3 },
        768: { perPage: 2 }, 
        576: { perPage: 1 } 
      },
      arrows: true,
      pagination: false
    };

    return { 
      mainSliderOptions,
      dealsSliderOptions,
      router
    };
  },
  data() {
    return {
      mainSlides: [
        {
          image: "https://wallpapercave.com/wp/wp9032309.jpg",
          alt: "Ladys Day Special",
        },
        {
          image: "https://wallpapercave.com/wp/wp5962747.jpg",
          alt: "Mother's Day Special",
        },
        {
          image: "https://rare-gallery.com/uploads/posts/345566-Celine-Farach-American-Model-Celebrity-Women-Girls-Beautiful.jpg",
          alt: "Summer Collection",
        }
      ],
      categories: [
        {
          title: "Women's Wear",
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
          slug: "womens-wear"
        },
        {
          title: "Kids Wear",
          image: "https://wallpaperaccess.com/full/6173939.jpg",
          slug: "kids-wear"
        },
        {
          title: "Men's Fashion",
          image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d",
          slug: "mens-fashion"
        },
        {
          title: "Accessories",
          image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
          slug: "accessories"
        }
      ],
      products: [
        {
          id: 1,
          title: "Summer Dress",
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
          price: 49.99,
          category: "Women's Wear",
          isFavorite: false
        },
        {
          id: 2,
          title: "Kids T-Shirt",
          image: "https://wallpaperaccess.com/full/6173939.jpg",
          price: 19.99,
          category: "Kids Wear",
          isFavorite: false
        },
        {
          id: 3,
          title: "Men's Shirt",
          image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d",
          price: 39.99,
          category: "Men's Fashion",
          isFavorite: false
        },
        {
          id: 4,
          title: "Stylish Watch",
          image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
          price: 89.99,
          category: "Accessories",
          isFavorite: false
        },
        {
          id: 5,
          title: "Elegant Blouse",
          image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
          price: 34.99,
          category: "Women's Wear",
          isFavorite: false
        },
        {
          id: 6,
          title: "Kids Jeans",
          image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
          price: 29.99,
          category: "Kids Wear",
          isFavorite: false
        },
        {
          id: 7,
          title: "Men's Jacket",
          image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
          price: 79.99,
          category: "Men's Fashion",
          isFavorite: false
        },
        {
          id: 8,
          title: "Fashion Necklace",
          image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
          price: 24.99,
          category: "Accessories",
          isFavorite: false
        }
      ],
      deals: [
        {
          id: 1,
          title: "Summer Special",
          image: "https://wallpaperaccess.com/full/6173939.jpg",
          price: 39.99,
          originalPrice: 59.99,
          discount: 33,
          timeLeft: "12:45:23"
        },
        {
          id: 2,
          title: "Kids Collection",
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
          price: 24.99,
          originalPrice: 34.99,
          discount: 29,
          timeLeft: "08:30:15"
        },
        {
          id: 3,
          title: "Men's Deal",
          image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d",
          price: 49.99,
          originalPrice: 69.99,
          discount: 29,
          timeLeft: "15:20:45"
        },
        {
          id: 4,
          title: "Accessory Pack",
          image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
          price: 19.99,
          originalPrice: 29.99,
          discount: 33,
          timeLeft: "06:15:30"
        },
        {
          id: 5,
          title: "Women's Special",
          image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
          price: 29.99,
          originalPrice: 44.99,
          discount: 33,
          timeLeft: "09:45:12"
        }
      ]
    };
  },
  computed: {
    uniqueCategories() {
      return [...new Set(this.categories.map(item => JSON.stringify(item)))]
        .map(item => JSON.parse(item));
    },
    featuredProducts() {
      return this.products.slice(0, 8);
    },
    uniqueDeals() {
      return [...new Set(this.deals.map(item => JSON.stringify(item)))]
        .map(item => JSON.parse(item));
    }
  },
  methods: {
    toggleWishlist(product) {
      product.isFavorite = !product.isFavorite;
      // In a real app, you would update this in the backend
    },
    addToCart(product) {
      // In a real app, you would add to cart logic here
      console.log(`Added ${product.title} to cart`);
      alert(`${product.title} added to cart!`);
    },
    checkAuth() {
      if (!localStorage.tokenkolshy && !localStorage.tokenkolshyvendor) {
        this.router.push('/login');
      }
    }
  },
  mounted() {
    this.checkAuth();
  }
};
</script>

<style scoped>
.home {
  background: #f8f9fa;
  padding-bottom: 50px;
}

/* Section Titles */
.section-title {
  font-size: 24px;
  font-weight: 600;
  margin: 30px 0 20px;
  color: #2c3e50;
  text-align: center;
}

/* Main Slider */
.main-slider {
  margin-bottom: 30px;
}

.slider-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

/* Category Cards */
.category-grid {
  margin-bottom: 40px;
}

.category-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.category-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.category-content {
  padding: 15px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.category-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.shop-link {
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.3s;
}

.shop-link:hover {
  background: #2980b9;
}

/* Product Cards */
.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-image-container {
  position: relative;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #ccc;
}

.wishlist-btn:hover, 
.product-card .isFavorite {
  color: #e74c3c;
}

.product-content {
  padding: 15px;
  text-align: center;
}

.product-card h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
}

.add-to-cart {
  display: block;
  width: 100%;
  background: #2ecc71;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.add-to-cart:hover {
  background: #27ae60;
}

/* Deals Section */
.deals-section {
  margin-top: 40px;
}

.deal-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  margin: 0 10px;
}

.deal-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #e74c3c;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
}

.deal-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.deal-content {
  padding: 15px;
}

.deal-price {
  margin-bottom: 5px;
}

.current-price {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
}

.original-price {
  font-size: 14px;
  color: #95a5a6;
  text-decoration: line-through;
  margin-left: 8px;
}

.deal-time {
  font-size: 12px;
  color: #7f8c8d;
}

/* Responsive Design */
@media (max-width: 992px) {
  .slider-image {
    height: 400px;
  }
  
  .category-card img,
  .product-card img {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .slider-image {
    height: 300px;
  }
  
  .section-title {
    font-size: 20px;
  }
}

@media (max-width: 576px) {
  .slider-image {
    height: 200px;
  }
  
  .category-card h3,
  .product-card h3 {
    font-size: 14px;
  }
  
  .shop-link,
  .add-to-cart {
    font-size: 12px;
    padding: 6px 10px;
  }
}
</style>
