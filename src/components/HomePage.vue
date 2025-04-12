<template>
  <div class="homePage">
    <!-- ==============Container Section================= -->
    <section>
      <div class="container-fluid home-page mb-4 p-0">
        <div class="slider-div position-relative">
          <div id="top-slider" class="carousel slide position-relative" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://s3u.tmimgcdn.com/1600x0/2172785-1604509681213_cover-presentational-image.jpg"
                  class="d-block w-100"
                  height="720"
                  alt="Slide 1"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://s3u.tmimgcdn.com/1600x0/2172785-1604509681213_cover-presentational-image.jpg"
                  class="d-block w-100"
                  height="720"
                  alt="Slide 2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://s3u.tmimgcdn.com/1600x0/2172785-1604509681213_cover-presentational-image.jpg"
                  class="d-block w-100"
                  height="720"
                  alt="Slide 3"
                />
              </div>
            </div>
            <button
              class="position-absolute d-lg-flex d-none justify-content-center align-items-center border-0"
              type="button"
              data-target="#top-slider"
              data-slide="prev"
              style="height: 60px; width: 60px; border-radius: 50%; left: -25px; top: 30%; background-color: #e51742; color: var(--text-color-secondary)"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button
              class="position-absolute d-lg-flex d-none justify-content-center align-items-center border-0"
              type="button"
              data-target="#top-slider"
              data-slide="next"
              style="height: 60px; width: 60px; border-radius: 50%; right: -25px; top: 30%; background-color: #e51742; color: var(--text-color-secondary)"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
          <!-- Items displayed in the slider area -->
          <div
            class="d-lg-flex d-none p-2 justify-content-between align-items-center position-absolute bg-transparent w-100"
            style="bottom: 50px"
          >
            <div
              v-for="(item, index) in itemsCategorys"
              :key="index"
              class="card p-2 mr-1 rounded-0 border-0"
              style="width: 24%; height: 100%; overflow: hidden; object-fit: cover; box-shadow: 0 120px 50px 0 #fff"
              :id="item.id"
              :data-category="item.category"
            >
              <b
                style="color: #000336; font-weight: 500; font-size: 23px; margin: 10px 0"
              >{{ item.title }}</b>
              <img
                :src="item.img"
                width="250"
                height="250"
                style="aspect-ratio: 1/1"
                class="card-img-top"
                alt="img-show"
              />
              <div class="card-body">
                <a href="#">
                  <p class="card-text">
                    <b style="color: #e51742; font-size: 18px">see more →</b>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row bg-light justify-content-start align-items-center bg-transparent w-100"
          style="margin: auto"
          id="product-show"
        >
          <!-- Additional content goes here -->
            <div v-for="(item, index) in items" :key="index" class="card p-2 col-lg-3 col-12 m-0 mb-1 mt-1" style="width: 25%; height: 380px; overflow: hidden; object-fit: cover; box-shadow: 0 0 10px 0 #fccfd9" :id="item.id" :data-category="item.cetagory">
            <b style="color: var(--secondary-color); font-weight: 500; font-size: 23px; margin: 10px 0">{{ item.title }}</b>
            <img :src="item.img" width="250" height="250" style="aspect-ratio: 1/1" class="card-img-top" alt="img-show" />
            <div class="card-body">
              <a href="#"
                ><p class="card-text"><b style="color: var(--primary-color); font-size: 18px">see more →</b></p></a
              >
            </div>
          </div>
        </div>
        <div
          class="d-lg-flex d-none flex-column justify-content-center align-items-center p-3"
          style="background-color: white; box-shadow: 0 0 10px 0 #fccfd9; width: 95%; margin: 20px auto; border-radius: 8px"
          id="slider-item"
        >
          <span class="d-flex justify-content-between align-items-center p-2 w-100">
            <h3
              style="color: #000336; font-weight: 500; font-size: 40px; margin: 10px 0"
            >
              Pop products here
            </h3>
            <a href="#">
              <p class="card-text">
                <b style="color: #e51742; font-size: 24px">see more →</b>
              </p>
            </a>
          </span>
          <div class="mt-3 d-flex justify-content-between align-items-center p-2 slider-item">
            <!-- Slider items here -->
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
      itemsCategorys: [] ,// Initialize itemsCategorys as an empty array.
      items : []
    };
  },
  async mounted() {
    const api = "http://localhost:3000/item";
    try {
      let res = await axios.get(api);
      this.itemsCategorys = res.data.slice(0, 4);
      this.items = res.data.slice(0, 8);
      console.log("Fetched itemsCategorys:", this.itemsCategorys);
    } catch (error) {
      console.error("Error fetching itemsCategorys:", error);
    }
  }
};
</script>