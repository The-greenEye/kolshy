/** * HomePage Component * * A responsive home page component that displays: * - A main carousel slider (desktop view) * - Featured product categories * - Product listings in both desktop and mobile views * - Popular products section with ratings and pricing * * The component fetches product data from an API endpoint and displays different * subsets of products in various sections of the page. It includes responsive * layouts that adapt to desktop and mobile viewports using Bootstrap classes. * * @component */

<template>
  <div class="homePage">
    <!-- ==============Container Section================= -->
    <section>
      <div class="container-fluid home-page mb-4 p-0">
        <div class="slider-div position-relative">
          <div id="top-slider" class="carousel slide position-relative d-lg-block d-none" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://s3u.tmimgcdn.com/1600x0/2172785-1604509681213_cover-presentational-image.jpg" class="d-block w-100" height="720" alt="Slide 1" />
              </div>
              <div class="carousel-item">
                <img src="https://s3u.tmimgcdn.com/1600x0/2172785-1604509681213_cover-presentational-image.jpg" class="d-block w-100" height="720" alt="Slide 2" />
              </div>
              <div class="carousel-item">
                <img src="https://s3u.tmimgcdn.com/1600x0/2172785-1604509681213_cover-presentational-image.jpg" class="d-block w-100" height="720" alt="Slide 3" />
              </div>
            </div>
            <button class="position-absolute d-lg-flex d-none justify-content-center align-items-center border-0" type="button" data-target="#top-slider" data-slide="prev" style="height: 60px; width: 60px; border-radius: 50%; left: -25px; top: 30%; background-color: #e51742; color: var(--text-color-secondary)">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="position-absolute d-lg-flex d-none justify-content-center align-items-center border-0" type="button" data-target="#top-slider" data-slide="next" style="height: 60px; width: 60px; border-radius: 50%; right: -25px; top: 30%; background-color: #e51742; color: var(--text-color-secondary)">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
          <!-- Mode Slider Mobile -->
          <div class="d-lg-none d-flex justify-content-center align-items-center p-3 border-0" style="background-color: white; box-shadow: 0 0 10px 0 #fccfd9; width: 100%; margin: 0px 0px 15px 0px" id="slider-item">
          <div class="d-flex overflow-x-auto w-100" style="height: 600px">
            <div v-for="(slider, index) in sliderItem" :key="index" :id="slider.id" class="d-flex position-relative p-2 flex-column border-0 justify-content-between align-items-start w-100" style="width: 260px; height: 330px; margin: 0 50px">
              <div class="position-relative p-0" style="background: gray; width: 100%; height: 360px">
                <!-- Slider items in home page -->
                <p class="rounded text-center position-absolute top-0 start-0 m-1" style="background: #e51742; color: #fff; padding: 4px 8px">{{ slider.is_best_seller == true ? 'Best Seller' : 'New Seller'}}</p>
                <img :src="slider.product_photo" width="320" height="360" style="aspect-ratio: 1/1" alt="img-slider" />
              </div>
              <div class="d-flex-flex-column justify-content-between align0items-center" style="width: 100%; height: 100%">
                <h4 style="color: #e51742; font-weight: 500; font-size: 30px; margin: 10px 0">
                  {{ slider.currency === 'USD' ? '$' : 'EGY' }}{{ slider.product_original_price }}<i><sup style="color: gray; text-decoration: line-through; font-size: 20px">{{ slider.currency == 'USD' ? '$' : 'EGY' }}{{ slider.product_minimum_offer_price }}</sup></i>
                </h4>
                <div class="rating">
                  <small>{{ slider.product_num_ratings }}</small>
                  <input type="radio" id="star-1" name="star-radio" value="star-1" />
                  <label for="star-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-2" name="star-radio" value="star-1" />
                  <label for="star-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-3" name="star-radio" value="star-1" />
                  <label for="star-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-4" name="star-radio" value="star-1" />
                  <label for="star-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-5" name="star-radio" value="star-1" />
                  <label for="star-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <b class="text-dark">{{ slider.product_star_rating }}</b>
                </div>
                <p style="color: #000336; font-weight: 500; font-size: 18px; margin: 10px 0; padding: 0 10px">{{ slider.delivery.slice(0, 40) }} ....</p>
                <p style="color: #000336; font-weight: 500; font-size: 10px; margin: 10px 0; padding: 0 10px">{{ slider.sales_volume}}</p>
              </div>
              <button class="btn rounded-pill p-2 w-100 align-content-center" style="background-color: #e51742; color: #fff; font-weight: 500; margin: 10px auto" @click="fetchProducts(slider.id)">Add To Cart</button>
            </div>
          </div>
          </div>
          <!-- Items displayed in the slider area -->
          <div class="d-lg-flex d-none p-2 justify-content-between align-items-center position-absolute bg-transparent w-100" style="bottom: 50px">
            <div v-for="(item, index) in itemsCategorys" :key="index" class="card p-2 mr-1 rounded-0 border-0" style="width: 24%; height: 100%; overflow: hidden; object-fit: cover; box-shadow: 0 120px 50px 0 #fff" :id="item.id" :data-category="item.category">
              <b style="color: #000336; font-weight: 500; font-size: 23px; margin: 10px 0">{{ item.product_title.slice(0,20) }}</b>
              <img :src="item.product_photo" width="250" height="250" style="aspect-ratio: 1/1" class="card-img-top" alt="img-show" />
              <div class="card-body">
                <router-link :to="'/' + item.category">
                  <p class="card-text">
                    <b style="color: #e51742; font-size: 18px">see more →</b>
                  </p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-start align-items-center bg-transparent w-100" style="margin: auto" id="product-show">
          <!-- Additional content goes here -->
          <div v-for="(item, index) in items" :key="index" class="card d-lg-block d-none p-2 col-lg-3 col-12 cards-pro" :id="item.id" :data-category="item.cetagory">
            <b style="color: var(--secondary-color); font-weight: 500; font-size: 23px; margin: 10px 0">{{ item.product_title.slice(0,20) }}</b>
            <img :src="item.product_photo" width="250" height="250" style="aspect-ratio: 1/1" class="card-img-top" alt="img-show" />
            <div class="card-body">
              <router-link to="/shop">
                <p class="card-text"><b style="color: var(--primary-color); font-size: 18px">see more →</b></p>
              </router-link>
            </div>
          </div>
          <!-- Mode Mobile -->
          <div v-for="(item, index) in items" :key="index" class="card d-lg-none d-block p-2 col-12 cards-pro" :id="item.id" :data-category="item.cetagory">
            <img :src="item.product_photo" style="aspect-ratio: 1/1" class="card-img-top img-fluid" alt="img-show" />
            <div class="card-body">
              <p class="card-text">
                <b style="color: var(--primary-color); font-size: 28px">{{ item.product_title.slice(0,20) }}</b>
              </p>
            </div>
          </div>
        </div>
        <div class="d-lg-flex d-none flex-column justify-content-center align-items-center p-3 border-0" style="background-color: white; box-shadow: 0 0 10px 0 #fccfd9; width: 95%; margin: 20px auto" id="slider-item">
          <span class="d-flex justify-content-between align-items-center p-2 w-100">
            <h3 style="color: #000336; font-weight: 500; font-size: 40px; margin: 10px 0">Pop products here</h3>
            <a href="#">
              <p class="card-text">
                <b style="color: #e51742; font-size: 24px">see more →</b>
              </p>
            </a>
          </span>
          <div class="d-flex overflow-x-auto w-100" style="height: 600px">
            <div v-for="(slider, index) in sliderItem" :key="index" :id="slider.id" class="d-flex position-relative p-2 flex-column border-0 justify-content-between align-items-start w-100" style="width: 260px; height: 330px; margin: 0 50px">
              <div class="position-relative p-0" style="background: gray; width: 100%; height: 360px">
                <!-- Slider items in home page -->
                <p class="rounded text-center position-absolute top-0 start-0 m-1" style="background: #e51742; color: #fff; padding: 4px 8px">{{ slider.is_best_seller == true ? 'Best Seller' : 'New Seller'}}</p>
                <img :src="slider.product_photo" width="320" height="360" style="aspect-ratio: 1/1" alt="img-slider" />
              </div>
              <div class="d-flex-flex-column justify-content-between align0items-center" style="width: 100%; height: 100%">
                <h4 style="color: #e51742; font-weight: 500; font-size: 30px; margin: 10px 0">
                  {{ slider.currency === 'USD' ? '$' : 'EGY' }}{{ slider.product_original_price }}<i><sup style="color: gray; text-decoration: line-through; font-size: 20px">{{ slider.currency == 'USD' ? '$' : 'EGY' }}{{ slider.product_minimum_offer_price }}</sup></i>
                </h4>
                <div class="rating">
                  <small>{{ slider.product_num_ratings }}</small>
                  <input type="radio" id="star-1" name="star-radio" value="star-1" />
                  <label for="star-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-2" name="star-radio" value="star-1" />
                  <label for="star-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-3" name="star-radio" value="star-1" />
                  <label for="star-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-4" name="star-radio" value="star-1" />
                  <label for="star-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-5" name="star-radio" value="star-1" />
                  <label for="star-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <b class="text-dark">{{ slider.product_star_rating }}</b>
                </div>
                <p style="color: #000336; font-weight: 500; font-size: 18px; margin: 10px 0; padding: 0 10px">{{ slider.delivery.slice(0, 40) }} ....</p>
                <p style="color: #000336; font-weight: 500; font-size: 10px; margin: 10px 0; padding: 0 10px">{{ slider.sales_volume}}</p>
              </div>
              <button class="btn rounded-pill p-2 w-100 align-content-center" style="background-color: #e51742; color: #fff; font-weight: 500; margin: 10px auto" @click="fetchProducts(slider.id)">Add To Cart</button>
            </div>
          </div>
        </div>
        <!-- Mode Slider Mobile -->
        <div class="d-lg-none d-flex justify-content-center align-items-center p-3 border-0" style="background-color: white; box-shadow: 0 0 10px 0 #fccfd9; width: 100%; margin: 0px 0px 15px 0px" id="slider-item">
          <div class="d-flex overflow-x-auto w-100" style="height: 600px">
            <div v-for="(slider, index) in sliderItem" :key="index" :id="slider.id" class="d-flex position-relative p-2 flex-column border-0 justify-content-between align-items-start w-100" style="width: 260px; height: 330px; margin: 0 50px">
              <div class="position-relative p-0" style="background: gray; width: 100%; height: 360px">
                <!-- Slider items in home page -->
                <p class="rounded text-center position-absolute top-0 start-0 m-1" style="background: #e51742; color: #fff; padding: 4px 8px">{{ slider.is_best_seller == true ? 'Best Seller' : 'New Seller'}}</p>
                <img :src="slider.product_photo" width="320" height="360" style="aspect-ratio: 1/1" alt="img-slider" />
              </div>
              <div class="d-flex-flex-column justify-content-between align0items-center" style="width: 100%; height: 100%">
                <h4 style="color: #e51742; font-weight: 500; font-size: 30px; margin: 10px 0">
                  {{ slider.currency === 'USD' ? '$' : 'EGY' }}{{ slider.product_original_price }}<i><sup style="color: gray; text-decoration: line-through; font-size: 20px">{{ slider.currency == 'USD' ? '$' : 'EGY' }}{{ slider.product_minimum_offer_price }}</sup></i>
                </h4>
                <div class="rating">
                  <small>{{ slider.product_num_ratings }}</small>
                  <input type="radio" id="star-1" name="star-radio" value="star-1" />
                  <label for="star-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-2" name="star-radio" value="star-1" />
                  <label for="star-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-3" name="star-radio" value="star-1" />
                  <label for="star-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-4" name="star-radio" value="star-1" />
                  <label for="star-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <input type="radio" id="star-5" name="star-radio" value="star-1" />
                  <label for="star-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                  </label>
                  <b class="text-dark">{{ slider.product_star_rating }}</b>
                </div>
                <p style="color: #000336; font-weight: 500; font-size: 18px; margin: 10px 0; padding: 0 10px">{{ slider.delivery.slice(0, 40) }} ....</p>
                <p style="color: #000336; font-weight: 500; font-size: 10px; margin: 10px 0; padding: 0 10px">{{ slider.sales_volume}}</p>
              </div>
              <button class="btn rounded-pill p-2 w-100 align-content-center" style="background-color: #e51742; color: #fff; font-weight: 500; margin: 10px auto" @click="fetchProducts(slider.id)">Add To Cart</button>
            </div>
          </div>
        </div>
        <div class="row justify-content-start align-items-center bg-transparent w-100" style="margin: auto" id="product-show">
          <!-- Additional content goes here -->
          <div v-for="(item, index) in items" :key="index" class="card d-lg-block d-none p-2 col-lg-3 col-12 cards-pro" :id="item.id" :data-category="item.cetagory">
            <b style="color: var(--secondary-color); font-weight: 500; font-size: 23px; margin: 10px 0">{{ item.product_title.slice(0,20) }}</b>
            <img :src="item.product_photo" width="250" height="250" style="aspect-ratio: 1/1" class="card-img-top" alt="img-show" />
            <div class="card-body">
              <router-link to="/shop">
                <p class="card-text"><b style="color: var(--primary-color); font-size: 18px">see more →</b></p>
              </router-link>
            </div>
          </div>
          <!-- Mode Mobile -->
          <div v-for="(item, index) in items" :key="index" class="card d-lg-none d-block p-2 col-12 cards-pro" :id="item.id" :data-category="item.cetagory">
            <img :src="item.product_photo" style="aspect-ratio: 1/1" class="card-img-top img-fluid" alt="img-show" />
            <div class="card-body">
              <p class="card-text">
                <b style="color: var(--primary-color); font-size: 28px">{{ item.product_title.slice(0,20) }}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      itemsCategorys: [], // Initialize itemsCategorys as an empty array.
      items: [], // Initialize items as an empty array.
      sliderItem: [],
    };
  },
  methods: {
    // async fetchProducts(pd) {
    //   let loc = await axios
    //     .get(`http://localhost:3000/items?id=${pd}`)
    //     .then((res) => {
    //       let cartItem = res.data;
    //       let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //       cart.push(cartItem);
    //       localStorage.setItem("cart", JSON.stringify(cart));
    //       console.log("تمت اضافة المنتج بنجاح");
    //     })
    //     .catch((err) => {
    //       console.error("حدث خطاء اثناء العملية");
    //     });
    // },
  },
async mounted() {

const options = {
  method: 'GET',
  url: 'https://real-time-amazon-data.p.rapidapi.com/seller-products',
  params: {
    seller_id: 'A02211013Q5HP3OMSZC7W',
    country: 'US',
    page: '1',
    sort_by: 'RELEVANCE'
  },
  headers: {
    'x-rapidapi-key': 'c8e3eec22bmsha4281676e28f517p14b1fbjsnbcb6cf05d21a',
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  this.items = response.data.data.seller_products.slice(0,8)
  this.itemsCategorys = response.data.data.seller_products.slice(0,4)
  this.sliderItem = response.data.data.seller_products
  console.log(response.data.data)
} catch (error) {
	console.error(error);
}
  },
};
</script>
