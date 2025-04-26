<template>
  <div class="shop">
    <b class="d-flex align-items-start justify-content-start m-4" style="color: #000336; font-weight: 500">
      Home /Shop /<span style="color: #e51742">{{ category }}</span>
    </b>
    
    <div class="row w-100 p-4">
      <!-- Filters Section -->
      <div class="col-3 d-lg-block d-none border-end border-secondary mr-2 h-100">
        <h3 style="color: #000336; font-weight: 500">Filter Results</h3>

        <!-- Free Shipping -->
        <p style="color: #e51742; font-weight: 500" class="mt-2">Eligible for free delivery</p>
        <div class="d-flex align-items-center text-start">
          <input type="checkbox" v-model="filters.shipping" @change="applyFilters" />
          <p style="color: #000336; font-weight: 500; margin: 0 8px">Free Shipping</p>
        </div>

        <!-- Delivery Day -->
        <p style="color: #e51742; font-weight: 500" class="mt-2">Delivery Day</p>
        <div class="d-flex align-items-center text-start">
          <input type="checkbox" v-model="filters.deliveryDay" @change="applyFilters" />
          <p style="color: #000336; font-weight: 500; margin: 0 8px">Get It by Tomorrow</p>
        </div>

        <!-- Price Range -->
        <p style="color: #e51742; font-weight: 500">Price</p>
        <div class="d-flex align-items-center justify-content-around w-75">
          <label style="color: #e51742; font-weight: 500">
            <p class="text-secondary">From:</p>
            ${{ filters.priceRange[0] }}
          </label>
          <label style="color: #e51742; font-weight: 500">
            <p class="text-secondary">To:</p>
            ${{ filters.priceRange[1] }}
          </label>
        </div>
        <div class="rangeslider">
          <input 
            type="range" 
            v-model="filters.priceRange[0]" 
            min="0" 
            max="350" 
            @input="applyFilters" 
          />
          <input 
            type="range" 
            v-model="filters.priceRange[1]" 
            min="0" 
            max="350" 
            @input="applyFilters" 
          />
        </div>

        <!-- Brands -->
        <p style="color: #e51742; font-weight: 500" class="mt-2">Brands</p>
        <div class="d-flex flex-column justify-content-start align-items-start">
          <div v-for="brand in brands" :key="brand" class="d-flex align-items-center text-start">
            <input 
              type="checkbox" 
              :id="brand" 
              :value="brand" 
              v-model="filters.brands" 
              @change="applyFilters" 
            />
            <label :for="brand" style="color: #000336; font-weight: 500; margin: 0 8px">{{ brand }}</label>
          </div>
        </div>

        <!-- Reset Button -->
        <center>
          <button 
            class="btn rounded-pill mt-3" 
            style="color: #fff; font-weight: 500; background: #e51742; padding: 5px 35px"
            @click="resetFilters"
          >
            Reset Filters
          </button>
        </center>
      </div>

      <!-- Products Section -->
      <div class="col-lg-9 col-12 p-0 d-flex flex-column justify-content-start align-items-center">
        <div class="d-flex justify-content-between align-items-center p-4 rounded-0 bg-secondary w-100">
          <center><i><h3 class="text-light fw-bold">Set Ade Here</h3></i></center>
        </div>
        <hr />

        <!-- Products Grid -->
        <div v-if="filteredProducts.length" class="d-flex flex-wrap p-0" style="width: 95%; margin: auto">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id" 
            class="card p-0 m-2 d-flex flex-column justify-content-between shop-pro"
          >
            <img :src="product.image" class="card-img-top" alt="product-image" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description.slice(0,30) }}...</p>
              <p class="card-text fw-bold">{{ product.price }} EGP</p>
              <button class="btn btn-primary" @click="addCart">Add to Cart</button>
            </div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-else class="alert alert-warning mt-4 w-100 text-center">
          No products found matching your filters
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { debounce } from 'lodash';
import { useToast } from "vue-toastification";
export default {
  name: "ShopPage",
  data() {
    return {
      selection: [],
      category: "",
      brands: ['SAMSUNG', 'Xiaomi', 'Apple', 'OPPO', 'HONOR', 'Itel', 'Infinix'],
      filters: {
        shipping: false,
        deliveryDay: false,
        priceRange: [0, 200],
        brands: [],
        condition: 'all',
        reviews: false,
        priceGroup: null,
        deals: 'all',
        os: []
      }
    };
  },
  setup() {
    const toast = useToast();
    return { toast }
  },
    computed: {
    filteredProducts() {
      return this.selection.filter(product => {
        const priceMatch = product.price >= this.filters.priceRange[0] && 
                          product.price <= this.filters.priceRange[1];
        const shippingMatch = !this.filters.shipping || product.freeShipping;
        const brandMatch = this.filters.brands.length === 0 || 
                          this.filters.brands.includes(product.brand);
        
        return priceMatch && shippingMatch && brandMatch;
      });
    }
  },
  mounted() {
    this.getProducts();
  },
  watch: {
    "$route.query.category": "getProducts",
  },
  methods: {
    applyFilters: debounce(function() {
      this.$forceUpdate();
    }, 300),

    resetFilters() {
      this.filters = {
        shipping: false,
        deliveryDay: false,
        priceRange: [0, 50000],
        brands: [],
        condition: 'all',
        reviews: false,
        priceGroup: null,
        deals: 'all',
        os: []
      };
    },

    async getProducts() {
        const category = this.$route.query.category;
        const response = await axios.get("https://fakestoreapi.com/products", {
          params: { category }
        });
        this.selection = response.data.map(item => ({
          ...item,
          price: Number(item.price),
          freeShipping: item.shipping === 'free'
        }));
 
    },

    addCart() {
      this.toast.success("Added successfully!")
      setTimeout(() => {
      location.pathname = 'page-detalist'
      }, 5500)
    }
  }
};
</script>

<style>
.card {
  transition: all 0.3s ease;
  min-height: 400px;
  width: 200px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.input-ranges[type="range"]::-webkit-slider-thumb {
  background: #e51742;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .col-3 {
    display: none !important;
  }
  
  .shop-pro {
    width: 100%;
    margin: 10px 0;
  }
}
</style>