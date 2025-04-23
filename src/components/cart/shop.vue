<template>
  <div class="shop">
    <b class="d-flex align-items-start justify-content-start m-4" style="color: #000336; font-weight: 500"
      >Home /Shop /<span style="color: #e51742">{{ category }}</span></b
    >
    <div class="row w-100 p-4">
      <div class="col-3 border-end border-secondary mr-2 h-100">
        <filterTools class="d-lg-block d-none" />
      </div>
      <div class="col-9 d-flex flex-column justify-content-start align-items-c"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import filterTools from "./filter.vue";
export default {
  name: "ShopPage",
  components: {
    filterTools,
  },
  data() {
    return {
      selection: [],
      category: "",
    };
  },
  mounted() {
    this.getUserSelect();
  },
  watch: {
    "$route.query.category": "getUserSelect",
  },
  methods: {
    async getUserSelect() {
      this.category = this.$route.query.category;
      if (this.category) {
        console.log(this.category);
        let res = await axios
          .get(`http://localhost:3000/items?category=${this.category}`)
          .then((response) => {
            this.selection = response.data;
          })
          .catch((err) => {
            console.error("We've a problem here please try agin", err);
          });
      } else {
        console.error("We've a problem in link or api here please try agin");
      }
    },
  },
};
</script>

<style>
input[type="radio"]:active {
  color: #e51742;
  background: #e51742;
}

.card-content .current-range {
  display: block;
  color: #e51742;
  margin-top: 8px;
  font-size: 14px;
}

.card-content .slider {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 0.6em;
  color: #e51742;
}

/* Range Slider */
.input-ranges[type="range"] {
  width: 100%;
  height: 30px;
  overflow: hidden;
  outline: none;
}

.input-ranges[type="range"],
.input-ranges[type="range"]::-webkit-slider-runnable-track,
.input-ranges[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: none;
}

.input-ranges[type="range"]::-webkit-slider-runnable-track {
  width: 200px;
  height: 3.5px;
  background: #e2e2e2;
}

.input-ranges[type="range"]:nth-child(2)::-webkit-slider-runnable-track {
  background: none;
}

.input-ranges[type="range"]::-webkit-slider-thumb {
  position: relative;
  height: 15px;
  width: 15px;
  margin-top: -7px;
  background: #fff;
  border: 1px solid #e51742;
  border-radius: 25px;
  cursor: pointer;
  z-index: 1;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.input-ranges[type="range"]::-webkit-slider-thumb:hover {
  background: #e51742;
  border: 1px solid var(--color-primary);
  outline: 0.5px solid #141414;
}

.input-ranges[type="range"]::-webkit-slider-thumb:active {
  cursor: grabbing;
}

.input-ranges[type="range"]:nth-child(1)::-webkit-slider-thumb {
  z-index: 2;
}

.rangeslider {
  font-family: sans-serif;
  font-size: 14px;
  position: relative;
  height: 20px;
  width: 100%;
  display: inline-block;
  margin-top: -5px;
}

.rangeslider input {
  position: absolute;
}

.rangeslider span {
  position: absolute;
  margin-top: 20px;
  left: 0;
}

.rangeslider .right {
  position: relative;
  float: right;
  margin-right: -5px;
}
</style>
