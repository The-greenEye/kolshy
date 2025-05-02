<template>
  <div class="home">
    <!-- Main Slider -->
    <div class="main-slider" style="height: 810px">
      <Splide :options="{ rewind: true }">
        <SplideSlide v-for="(slide, index) in mainSlides" :key="index">
          <img :src="slide.image" class="slider-image img-fluid" :alt="slide.alt" />
        </SplideSlide>
      </Splide>
    </div>

    <!-- Category Cards -->
    <div class="category-grid container-fluid">
      <div class="row g-3">
        <div v-for="(category, index) in categories" :key="index" class="col-6 col-md-3 z-2">
          <div class="category-card">
            <h3>{{ category.title }}</h3>
            <img :src="category.image" class="img-fluid" width="250" height="300" :alt="category.title" />
            <a href="#" class="shop-link">Shop now</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="product-grid container-fluid">
      <div class="row g-3">
        <div v-for="(product, index) in products" :key="index" class="col-6 col-md-3">
          <div class="category-card-4">
            <h3>{{ product.title }}</h3>
            <img :src="product.image" class="img-fluid" width="250" height="300" :alt="product.title" />
            <a href="#" class="shop-link">Shop now</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Deals Slider -->
    <div class="deals-slider bg-light p-2 m-2">
      <h2 class="section-title">العروض اليومية</h2>
      <Splide :options="{ perPage: 4, breakpoints: { 768: { perPage: 2 }, 576: { perPage: 1 } } }">
        <SplideSlide v-for="(deal, index) in deals" :key="index" class="z-2">
          <div class="deal-card">
            <img :src="deal.image" class="img-fluid" :alt="deal.title" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="deals-slider bg-light p-2 m-2">
      <h2 class="section-title">العروض اليومية</h2>
      <Splide :options="{ perPage: 4, breakpoints: { 768: { perPage: 2 }, 576: { perPage: 1 } } }">
        <SplideSlide v-for="(deal, index) in deals" :key="index">
          <div class="deal-card">
            <img :src="deal.image" class="img-fluid" :alt="deal.title" />
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <!-- Product Grid -->
    <div class="product-grid container-fluid">
      <div class="row g-3">
        <div v-for="(product, index) in products" :key="index" class="col-6 col-md-3">
          <div class="category-card-4">
            <h3>{{ product.title }}</h3>
            <img :src="product.image" class="img-fluid" width="250" height="300" :alt="product.title" />
            <a href="#" class="shop-link">Shop now</a>
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
      mainSlides: [
        {
          image: "https://wallpapercave.com/wp/wp9032309.jpg",
          alt: "Ladys Day Special",
        },
        {
          image: "https://wallpapercave.com/wp/wp5962747.jpg",
          alt: "Mother’s Day Special",
        },
        {
          image: "https://rare-gallery.com/uploads/posts/345566-Celine-Farach-American-Model-Celebrity-Women-Girls-Beautiful.jpg",
          alt: "Mother’s Day Special",
        },
        // Add more slides
      ],
      categories: [
        {
          title: "Women wear",
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          title: "Kids wear",
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        {
          title: "Women wear",
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          title: "Kids wear",
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        // Add more categories
      ],
      products: [
        {
          title: "Women wear",
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          title: "Kids wear",
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        {
          title: "Women wear",
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          title: "Kids wear",
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        {
          title: "Women wear",
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          title: "Kids wear",
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        {
          title: "Women wear",
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          title: "Kids wear",
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        // Add more products
      ],
      deals: [
        {
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        {
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        {
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        {
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        {
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        {
          image: "https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg",
        },
        {
          image: "https://wallpaperaccess.com/full/6173939.jpg",
        },
        // Add more deals
      ],
    };
  },
  setup() {
    const options = {
      rewind: true,
      gap: "1rem",
    };

    return { options };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background: #eaeded;
}

/* Main Slider */
.slider-image {
  width: 100%;
  height: 700px;
  position: relativ;
}

/* Category Cards */
.category-card {
  background: white;
  padding: 15px;
  text-align: center;
  border-radius: 4px;
  transition: transform 0.3s;
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: -290px;
}
.category-card-4 {
  background: white;
  padding: 15px;
  text-align: center;
  border-radius: 4px;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
}

.category-card,
.category-card-4:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .slider-image {
    height: 200px;
  }

  .product-card .image-container {
    height: 180px;
  }
}
</style>
