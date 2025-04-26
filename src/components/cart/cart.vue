<template>
  <div class="amazon-cart container-fluid py-3">
    <!-- العنوان الرئيسي -->
    <div class="row">
      <div class="col-12">
        <h1 class="amazon-header mb-0">
          <span class="cart-count">{{ products.length }} items</span> in your Cart
        </h1>
      </div>
    </div>

    <div class="row mt-3">
      <!-- قائمة المنتجات -->
      <div class="col-12 col-lg-8">
        <div class="cart-items bg-white p-3 shadow-sm">
          <div v-for="product in products" :key="product.id" class="cart-item row align-items-center py-3 border-bottom">
            <!-- صورة المنتج -->
            <div class="col-3 col-md-2">
              <img :src="product.image" class="img-fluid product-image" alt="Product" />
            </div>

            <!-- تفاصيل المنتج -->
            <div class="col-9 col-md-10 pl-md-0">
              <div class="d-flex flex-column flex-md-row justify-content-between">
                <div class="product-details">
                  <h3 class="product-title mb-1">{{ product.name }}</h3>
                  <p class="product-seller mb-1">Sold by: Amazon</p>
                  <div class="d-flex align-items-center">
                    <span class="product-instock text-success">In Stock</span>
                    <span class="product-shipping ml-2">FREE Delivery</span>
                  </div>

                  <!-- تحكم الكمية -->
                  <div class="quantity-control mt-2">
                    <div class="d-flex align-items-center">
                      <button @click="decreaseQuantity(product)" class="btn border-0 p-0" :disabled="product.quantity === 1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 50"><path fill="#000" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/><path fill="#000" d="M16 24h18v2H16z"/><path fill="#000" d="M24 16h2v18h-2z"/></svg></button>
                      <input type="number" v-model.number="product.quantity" min="1" class="quantity-input mx-2 text-center" />
                      <button @click="increaseQuantity(product)" class="btn border-0 p-0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="none" stroke="#141414" d="M4 8h8m2.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z" stroke-width="0.4"/></svg></button>
                      <span class="divider mx-2">|</span>
                      <button @click="removeItem(product.id)" class="btn btn-outline-danger">Delete</button>
                    </div>
                  </div>
                </div>

                <!-- السعر -->
                <div class="product-pricing text-right">
                  <p class="product-price mb-0">EGP {{ product.price.toFixed(2) }}</p>
                  <small class="text-muted">EGP {{ (product.price * product.quantity).toFixed(2) }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ملخص الشحن -->
        <div class="shipping-summary bg-white mt-3 p-3 shadow-sm">
          <h5 class="amazon-subheader">Order Details</h5>
          <div class="d-flex justify-content-between">
            <span>Subtotal ({{ products.length }} items):</span>
            <span>EGP {{ subtotal.toFixed(2) }}</span>
          </div>
        </div>
      </div>

      <!-- ملخص الدفع -->
      <div class="col-12 col-lg-4 mt-3 mt-lg-0">
        <div class="checkout-summary bg-white p-3 shadow-sm">
          <h5 class="amazon-subheader">Order Summary</h5>
          <div class="d-flex justify-content-between mb-2">
            <span>Subtotal:</span>
            <span>EGP {{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Shipping:</span>
            <span>EGP {{ shipping.toFixed(2) }}</span>
          </div>
          <div class="d-flex justify-content-between mb-3">
            <span>Total:</span>
            <span class="text-amazon">EGP {{ total.toFixed(2) }}</span>
          </div>
          <button class="btn btn-amazon w-100 py-2">Proceed to Checkout</button>

          <!-- قسم الدفع الآمن -->
          <div class="secure-payment mt-3 text-center">
            <i class="fas fa-lock text-amazon"></i>
            <span class="ml-2 text-muted">Secure transaction</span>
          </div>
        </div>
      </div>
    </div>

    <!-- المنتجات المقترحة -->
    <div class="row mt-4">
      <div class="col-12">
        <h5 class="amazon-subheader">Frequently bought together</h5>
        <div class="suggested-products bg-white p-3 shadow-sm">
          <!-- إضافة منتجات مقترحة هنا -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 599.99,
          image: "https://wallpaperaccess.com/full/6173939.jpg",
          quantity: 1,
        },
        {
          id: 2,
          name: "Smart Watch",
          price: 899.99,
          image: "https://img.freepik.com/premium-photo/traditional-clothes-design-concepts-inspiring-ideas-fashion-shop-web-items-tshirt-4k_655090-1107162.jpg",
          quantity: 2,
        },
        {
          id: 3,
          name: "Bluetooth Speaker",
          price: 299.99,
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
          quantity: 1,
        },
      ],
      shipping: 50.0,
      tax: 75.0,
    };
  },
  computed: {
    subtotal() {
      return this.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    },
    total() {
      return this.subtotal + this.shipping + this.tax;
    },
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    increaseQuantity(product) {
      product.quantity++;
    },
    decreaseQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
    removeItem(productId) {
      this.products = this.products.filter((product) => product.id !== productId);
      this.toast.success("The item removed")
    },
  },
};
</script>

<style scoped>
.amazon-cart {
  background-color: #eaeded;
  min-height: 100vh;
}

.amazon-header {
  color: #0f1111;
  font-size: 28px;
  font-weight: 400;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.cart-count {
  color: #565959;
  font-weight: 500;
}

.product-image {
  max-height: 160px;
  object-fit: contain;
}

.product-title {
  font-size: 18px;
  color: #0f1111;
  font-weight: 500;
}

.product-seller {
  font-size: 12px;
  color: #565959;
}

.product-instock {
  font-size: 14px;
  font-weight: 500;
}

.product-shipping {
  font-size: 14px;
  color: #565959;
}

.btn-quantity {
  width: 32px;
  height: 32px;
  border: 1px solid #d5d9d9;
  border-radius: 4px;
  background-color: #f0f2f2;
  color: #0f1111;
}

.btn-quantity:hover {
  background-color: #e3e6e6;
}

.quantity-input {
  width: 50px;
  height: 32px;
  border: 1px solid #d5d9d9;
  border-radius: 4px;
}

.text-amazon {
  color: #b12704;
  font-weight: 600;
}

.btn-amazon {
  background: #ffd814;
  border-color: #fcd200;
  color: #0f1111;
  font-weight: 500;
  border-radius: 8px;
}

.btn-amazon:hover {
  background: #f7ca00;
}

.secure-payment {
  font-size: 14px;
}

.amazon-subheader {
  color: #0f1111;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
}

.divider {
  color: #ddd;
}
</style>
