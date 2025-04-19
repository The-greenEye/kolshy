<template>
  <div>
    <h3 style="color: #000336; font-weight: 500">Filter Results</h3>
    <p style="color: #e51742; font-weight: 500" class="mt-2">Eligible for free delivery</p>
    <div class="d-flex align-items-center text-start">
      <input type="checkbox" name="shipping" id="shipping" />
      <p style="color: #000336; font-weight: 500; margin: 0 8px">Free Shipping</p>
    </div>
    <p style="color: #e51742; font-weight: 500" class="mt-2">Delivery Day</p>
    <div class="d-flex align-items-center text-start">
      <input type="checkbox" name="tomorrow" id="tomorrow" />
      <p style="color: #000336; font-weight: 500; margin: 0 8px">Get It by Tomorrow</p>
    </div>
    <p style="color: #e51742; font-weight: 500">price</p>
    <div data-range="#third" data-value-1="#second" data-value-0="#first" class="d-flex align-items-center justify-content-around w-75">
      <label class="label-min-value" style="color: #e51742; font-weight: 500"
        ><p class="text-secondary">From:</p>
        ${{ rang1 }}</label
      >
      <label class="label-max-value" style="color: #e51742; font-weight: 500"
        ><p class="text-secondary">To:</p>
        ${{ rang2 }}</label
      >
    </div>
    <div class="rangeslider">
      <input class="min input-ranges" v-model="rang1" name="range_1" type="range" min="1" max="50000" />
      <input class="max input-ranges" v-model="rang2" name="range_1" type="range" min="1" max="50000" />
    </div>
    <center><button class="btn rounded-pill" style="color: #fff; font-weight: 500; background: #e51742; padding: 5px 35px">Apply</button></center>
    <p style="color: #e51742; font-weight: 500" class="mt-2">Brands</p>
    <div class="d-flex flex-column justify-content-start align-items-start">
      <div class="d-flex align-items-center text-start">
        <input type="checkbox" name="SAMSUNG" id="SAMSUNG" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">SAMSUNG</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="checkbox" name="Xiaomi" id="Xiaomi" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">Xiaomi</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="checkbox" name="Apple" id="Apple" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">Apple</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="checkbox" name="OPPO" id="OPPO" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">OPPO</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="checkbox" name="HONOR" id="HONOR" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">HONOR</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="checkbox" name="Itel" id="Itel" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">Itel</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="checkbox" name="Infinix" id="Infinix" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">Infinix</p>
      </div>
    </div>
    <p style="color: #e51742; font-weight: 500" class="mt-2">Condition</p>
    <div class="d-flex align-items-center text-start">
      <input type="radio" name="Condition" id="Condition" checked />
      <p style="color: #000336; font-weight: 500; margin: 0 8px">All</p>
    </div>
    <div class="d-flex align-items-center text-start">
      <input type="radio" name="Condition" id="Condition" />
      <p style="color: #000336; font-weight: 500; margin: 0 8px">New</p>
    </div>
    <div class="d-flex align-items-center text-start">
      <input type="radio" name="Condition" id="Condition" />
      <p style="color: #000336; font-weight: 500; margin: 0 8px">Used</p>
    </div>
    <p style="color: #e51742; font-weight: 500" class="mt-2">Customer Reviews</p>
    <div class="d-flex align-items-center text-start">
      <input type="checkbox" name="Reviews" id="Reviews" />
      <p style="color: #000336; font-weight: 500; margin: 0 8px">4.0 and up</p>
    </div>
    <p style="color: #e51742; font-weight: 500" class="mt-2">Price</p>
    <div class="d-flex flex-column justify-content-start align-items-start">
      <div class="d-flex align-items-center text-start">
        <input type="radio" name="price" id="SAMSUNG" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">up to 999 EGP</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="radio" name="price" id="price-select" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">1000 up to 1999 EGP</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="radio" name="price" id="price-select" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">2000 up to 2999 EGP</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="radio" name="price" id="price-select" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">3000 up to 4999 EGP</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="radio" name="price" id="price-select" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">5000 up to 6999 EGP</p>
      </div>
      <div class="d-flex align-items-center text-start">
        <input type="radio" name="price" id="price-select" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">8000 up to above EGP</p>
      </div>
    </div>
    <p style="color: #e51742; font-weight: 500" class="mt-2">Deals & Discounts</p>
    <div class="d-flex align-items-center text-start">
      <input type="radio" name="Deals" id="Discounts" checked />
      <p style="color: #000336; font-weight: 500; margin: 0 8px">All Discounts</p>
    </div>
    <div class="d-flex align-items-center text-start">
      <input type="radio" name="Deals" id="Today's-Deals" />
      <p style="color: #000336; font-weight: 500; margin: 0 8px">Today's Deals</p>
    </div>
    <p style="color: #e51742; font-weight: 500" class="mt-2">Operating System </p>
    <div class="d-flex flex-column justify-content-start align-items-start">
      <div class="d-flex align-items-center text-start">
        <input type="checkbox" name="SAMSUNG" id="SAMSUNG" />
        <p style="color: #000336; font-weight: 500; margin: 0 8px">Android 10.0</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filterTools",
  data() {
    return {
      rang1: 200,
      rang2: 700,
    };
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
