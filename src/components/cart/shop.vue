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
          <input type="range" v-model="filters.priceRange[0]" min="0" max="350" @input="applyFilters" />
          <input type="range" v-model="filters.priceRange[1]" min="0" max="350" @input="applyFilters" />
        </div>

        <!-- Brands -->
        <p style="color: #e51742; font-weight: 500" class="mt-2">Brands</p>
        <div class="d-flex flex-column justify-content-start align-items-start">
          <div v-for="brand in brands" :key="brand" class="d-flex align-items-center text-start">
            <input type="checkbox" :id="brand" :value="brand" v-model="filters.brands" @change="applyFilters" />
            <label :for="brand" style="color: #000336; font-weight: 500; margin: 0 8px">{{ brand }}</label>
          </div>
        </div>

        <!-- Reset Button -->
        <center>
          <button class="btn rounded-pill mt-3" style="color: #fff; font-weight: 500; background: #e51742; padding: 5px 35px" @click="resetFilters">Reset Filters</button>
        </center>
      </div>

      <!-- Products Section -->
      <div class="col-lg-9 col-12 p-0 d-flex flex-column justify-content-start align-items-center">
        <div class="d-flex justify-content-between align-items-center p-4 rounded-0 bg-secondary w-100">
          <center>
            <i><h3 class="text-light fw-bold">Set Ade Here</h3></i>
          </center>
        </div>
        <hr />

        <!-- Products Grid -->
        <div v-if="filteredProducts.length" class="d-flex flex-wrap p-0" style="width: 95%; margin: auto">
          <div v-for="product in filteredProducts" :key="product.id" :id="product.id" class="card p-0 m-2 d-flex flex-column justify-content-between shop-pro">
            <img :src="product.image" class="card-img-top" alt="product-image" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description.slice(0, 40) }}...</p>
              <p class="card-text fw-bold">{{ product.price }} EGP</p>
              <button class="btn w-100 btn-primary" @click="addCart()">Add to Cart</button>
              <div class="d-flex align-items-center mt-2 w-100">
                <span @click="toggleFavorite(product)" style="cursor: pointer">
                  <svg v-if="product.favorit_list === 'Unactive'" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#141414" d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.828q-1.601-1.593-2.528-2.81t-1.296-2.2T3 8.15q0-1.908 1.296-3.204T7.5 3.65q1.32 0 2.475.675T12 6.289Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296T21 8.15q0 .996-.368 1.98q-.369.986-1.296 2.202t-2.519 2.809q-1.592 1.592-4.06 3.828zm0-1.354q2.4-2.17 3.95-3.716t2.45-2.685t1.25-2.015Q20 9.006 20 8.15q0-1.5-1-2.5t-2.5-1q-1.194 0-2.204.682T12.49 7.385h-.978q-.817-1.39-1.817-2.063q-1-.672-2.194-.672q-1.48 0-2.49 1T4 8.15q0 .856.35 1.734t1.25 2.015t2.45 2.675T12 18.3m0-6.825" /></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#f00" d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.828q-1.601-1.593-2.528-2.81t-1.296-2.2T3 8.15q0-1.908 1.296-3.204T7.5 3.65q1.32 0 2.475.675T12 6.289Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296T21 8.15q0 .996-.368 1.98q-.369.986-1.296 2.202t-2.519 2.809q-1.592 1.592-4.06 3.828z" /></svg>
                </span>
                <span style="cursor: pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#141414" d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22m0-2q.425 0 .713-.287T18 19t-.288-.712T17 18t-.712.288T16 19t.288.713T17 20M5 13q.425 0 .713-.288T6 12t-.288-.712T5 11t-.712.288T4 12t.288.713T5 13m12-7q.425 0 .713-.288T18 5t-.288-.712T17 4t-.712.288T16 5t.288.713T17 6m0-1" /></svg>
                </span>
                <span style="cursor: pointer" @click="hideProduct(product.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#141414" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13" /></svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-else class="alert alert-warning mt-4 w-100 text-center">No products found matching your filters</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { debounce } from "lodash";
import { useToast } from "vue-toastification";
export default {
  name: "ShopPage",
  data() {
    return {
      selection: [],
      category: "",
      brands: ["SAMSUNG", "Xiaomi", "Apple", "OPPO", "HONOR", "Itel", "Infinix"],
      filters: {
        shipping: false,
        deliveryDay: false,
        priceRange: [0, 200],
        brands: [],
        condition: "all",
        reviews: false,
        priceGroup: null,
        deals: "all",
        os: [],
      },
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  computed: {
    filteredProducts() {
      return this.selection.filter((product) => {
        const priceMatch = product.price >= this.filters.priceRange[0] && product.price <= this.filters.priceRange[1];
        const shippingMatch = !this.filters.shipping || product.freeShipping;
        const brandMatch = this.filters.brands.length === 0 || this.filters.brands.includes(product.brand);

        return priceMatch && shippingMatch && brandMatch;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
  watch: {
    "$route.query.category": "getProducts",
  },
  methods: {
    applyFilters: debounce(function () {
      this.$forceUpdate();
    }, 300),

    resetFilters() {
      this.filters = {
        shipping: false,
        deliveryDay: false,
        priceRange: [0, 50000],
        brands: [],
        condition: "all",
        reviews: false,
        priceGroup: null,
        deals: "all",
        os: [],
      };
    },

    async getProducts() {
      const category = this.$route.query.category;
      const response = await axios.get("https://fakestoreapi.com/products", {
        params: { category },
      });
      const res_update = response.data.map((item) => {
        return {
          ...item, // Keep original item properties
          favorit_list: "Unactive", // Add the 'favorit_list' property
        };
      });

      this.selection = res_update.map((item) => ({
        ...item, // Keep updated item properties
        price: Number(item.price), // Ensure price is a number
        freeShipping: item.shipping === "free", // Determine if shipping is free
      }));
    },

    addCart() {
      this.toast.success("Added successfully!");
    },

    toggleFavorite(product) {
      product.favorit_list = product.favorit_list === "Unactive" ? "active" : "Unactive";
    },

    hideProduct(product) {
      document.getElementById(product).classList.add("hide_item");
      setTimeout(() => {
        document.getElementById(product).classList.add("d-none");
      }, 500);
    },
  },
};
</script>

<style>
.card {
  transition: all 0.3s ease;
  min-height: 400px;
  width: 200px;
}

.hide_item {
  animation: hide_items 0.5s ease-in-out forwards;
}

@keyframes hide_items {
  0% {
    scale: 1;
    opacity: 1;
  }
  100% {
    scale: 0;
    opacity: 0;
  }
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.input-ranges[type="range"]::-webkit-slider-thumb {
  background: #e51742;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
