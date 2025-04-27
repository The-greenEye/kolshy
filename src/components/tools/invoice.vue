<template>
  <div class="invoice-page container">
    <!-- رأس الصفحة -->
    <div class="invoice-header row mb-4" style="width: 100%">
      <div class="col-md-6">
        <h2 class="invoice-title">فاتورة #{{ invoice.id }}</h2>
        <p class="invoice-date">تاريخ الفاتورة: {{ invoice.date }}</p>
      </div>
      <div class="col-md-6 text-md-right">
        <img src="https://kolshy.ae/wp-content/uploads/2025/02/Untitled-3000-x-750-px.gif" 
             class="company-logo" 
             alt="Company Logo">
      </div>
    </div>

    <!-- معلومات الطرفين -->
    <div class="row parties-section mb-4" style="width: 100%">
      <div class="col-md-6 customer-info">
        <div class="card" style="width: 100%">
          <h5><i class="fas fa-user"></i> معلومات العميل</h5>
          <p>{{ customer.name }}</p>
          <p>{{ customer.email }}</p>
          <p>{{ customer.phone }}</p>
        </div>
      </div>
      <div class="col-md-6 vendor-info">
        <div class="card" style="width: 100%">
          <h5><i class="fas fa-store"></i> معلومات البائع</h5>
          <p>Amazon Inc.</p>
          <p>support@amazon.com</p>
          <p>+1 (206) 266-1000</p>
        </div>
      </div>
    </div>

    <!-- جدول المنتجات -->
    <div class="products-table card mb-4" style="width: 100%">
      <table class="table">
        <thead>
          <tr>
            <th>المنتج</th>
            <th>السعر</th>
            <th>الكمية</th>
            <th>المجموع</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in invoice.items" :key="index">
            <td>
              <div class="product-item">
                <img :src="item.image" class="product-image">
                <span>{{ item.name }}</span>
              </div>
            </td>
            <td>EGP {{ item.price.toLocaleString() }}</td>
            <td>{{ item.quantity }}</td>
            <td>EGP {{ (item.price * item.quantity).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- الملخص المالي -->
    <div class="row summary-section" style="width: 100%">
      <div class="col-md-6 payment-method">
        <div class="card" style="width: 100%">
          <h5><i class="fas fa-credit-card"></i> طريقة الدفع</h5>
          <div class="border p-2 mt-3 rounded">
          <p>{{ payment.method }}</p>
          <p>حالة الدفع: 
            <span :class="payment.status">{{ payment.status }}</span>
          </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 totals">
        <div class="card" style="width: 100%">
          <div class="total-row">
            <span>المجموع الفرعي:</span>
            <span>EGP {{ invoice.subtotal.toLocaleString() }}</span>
          </div>
          <div class="total-row">
            <span>الشحن:</span>
            <span>EGP {{ invoice.shipping.toLocaleString() }}</span>
          </div>
          <div class="total-row">
            <span>الضرائب:</span>
            <span>EGP {{ invoice.tax.toLocaleString() }}</span>
          </div>
          <div class="total-row grand-total">
            <span>المجموع الكلي:</span>
            <span>EGP {{ invoice.total.toLocaleString() }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- أزرار التحكم -->
    <div class="action-buttons mt-4">
      <button class="btn m-4 btn-print" @click="printInvoice">
        <i class="fas fa-print"></i> طباعة
      </button>
      <button class="btn m-4 btn-download" @click="downloadPDF">
        <i class="fas fa-download"></i> تحميل PDF
      </button>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  name: 'InvoicePage',
  data() {
    return {
      invoice: {
        id: 'INV-20240215-001',
        date: '15 فبراير 2024',
        items: [
          {
            name: 'سماعات لاسلكية',
            price: 599.99,
            quantity: 2,
            image: 'https://wallpaperaccess.com/full/6173939.jpg'
          },
          {
            name: 'شاحن لاسلكي',
            price: 299.99,
            quantity: 1,
            image: 'https://wallpaperaccess.com/full/6173939.jpg'
          }
        ],
        subtotal: 1499.97,
        shipping: 50.00,
        tax: 224.99,
        total: 1774.96
      },
      customer: {
        name: 'محمد أحمد',
        email: 'mohamed@example.com',
        phone: '+201234567890'
      },
      payment: {
        method: 'بطاقة ائتمان (**** 1234)',
        status: 'مدفوع'
      }
    }
  },
  setup() {
    const toast = useToast()
    return { toast }
  },
  methods: {
    printInvoice() {
      window.print();
    },
    downloadPDF() {
      // تنفيذ تحويل إلى PDF هنا
      this.toast.warning("للأسف هذا الحدث غير متاح في النسخه التجريبية سوف يتم تفعيلها بنهاية", { timeout: false, closeOnClick: true })
    }
  }
}
</script>

<style scoped>
.invoice-page {
  background-color: #ffffff;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.invoice-title {
  color: #232f3e;
  font-weight: 600;
}

.company-logo {
  max-height: 80px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.products-table {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f7f7f7;
  color: #232f3e;
  padding: 15px;
  text-align: right;
}

td {
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.product-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.product-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.grand-total {
  font-size: 1.2em;
  font-weight: 600;
  color: #b12704;
  border-top: 2px solid #eee;
  padding-top: 15px;
}

.btn-print {
  background-color: #f0c14b;
  border-color: #a88734;
  color: #111;
  margin-left: 10px;
}

.btn-download {
  background-color: #232f3e;
  color: white;
}

.payment-method span[class="مدفوع"] {
  color: #007600;
  background-color: #cfedd8;
  padding: 5px 10px;
  border-radius: 4px;
}

@media print {
  .action-buttons {
    display: none;
  }
  
  .invoice-page {
    padding: 0;
  }
  
  .card {
    border: none;
    box-shadow: none;
  }
}
</style>