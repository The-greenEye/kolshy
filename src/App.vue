<template>
  <div>
    <topBar />
    <router-view />
    <section>
      <div class="w-100 text-center p-2 d-flex justify-content-center align-items-center" style="font-weight: 800; background-color: #e517421a; color: #e51742; cursor: pointer" onclick="window.scrollTo(0,0)">
        <b>Back to top</b
        ><span class="mt-2"
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="#E51742" d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0a33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176a28.913 28.913 0 0 1-42.647 0l-219.618-233.23z" /></svg
        ></span>
      </div>
      <footer class="w-100 position-relative" style="background-color: #000336">
        <div class="container w-100" style="padding: 70px 20px">
          <div class="row p-2">
            <div class="col-12 d-lg-flex">
              <img src="https://kolshy.ae/wp-content/uploads/2025/02/Untitled-3000-x-750-px.gif" class="img-fluid" alt="" />
            </div>
            <div class="col d-lg-flex flex-column d-none" style="color: var(--text-color-secondary)">
              <b>Get To Know Us</b>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">About Kolshy</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Careers</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Kolshy Sence</router-link>
                </li>
              </ul>
            </div>
            <div class="col" style="color: var(--text-color-secondary)">
              <b>Shop With Us</b>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Your Account</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Your orders</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Your Addresses</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Your Lists</router-link>
                </li>
              </ul>
            </div>
            <div class="col d-lg-flex flex-column d-none" style="color: var(--text-color-secondary)">
              <b>Make Monay With Us</b>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Protect and build your brand</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Sell on Kolshy</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Fulfillment by Amazon</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Advertise Your Products</router-link>
                </li>
              </ul>
            </div>
            <div class="col" style="color: var(--text-color-secondary)">
              <b>Let Us Help You</b>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Help</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Shipping & Delivery</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Returns & Replacements</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="" class="nav-link text-light">Recalls and Product Safety Alerts</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center w-100 p-4 border-bottom border-top border-secondary">
            <button class="btn border border-light d-flex justify-content-center align-items-center mr-4" style="font-weight: 600; background: rgba(229, 23, 66, 0.1); color: var(--text-color-secondary)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                <mask id="circleFlagsEg0"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
                <g mask="url(#circleFlagsEg0)">
                  <path fill="#eee" d="m0 144l256-32l256 32v224l-256 32L0 368Z" />
                  <path fill="#d80027" d="M0 0h512v144H0Z" />
                  <path fill="#333" d="M0 368h512v144H0Z" />
                  <path fill="#ff9811" d="M250 191c-8 0-17 4-22 14c5-3 16-1 16 13c0 4-2 8-5 10c-8 0-14-14-29-14c-10 0-19 7-19 17v69l46-7l-14 27h66l-14-27l46 7v-69c0-10-9-17-19-17c-15 0-21 14-29 14c8-23-7-37-23-37" />
                </g></svg
              >Ar
            </button>
            <button class="btn border border-light d-flex justify-content-center align-items-center" style="font-weight: 600; background: rgba(229, 23, 66, 0.1); color: var(--text-color-secondary)" onclick="document.getElementById('eng3').classList.toggle('show')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                <mask id="circleFlagsGbEng0"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
                <g mask="url(#circleFlagsGbEng0)">
                  <path fill="#eee" d="M0 0h208l48 32l48-32h208v208l-32 48l32 48v208H304l-48-32l-48 32H0V304l32-48l-32-48Z" />
                  <path fill="#d80027" d="M208 0v208H0v96h208v208h96V304h208v-96H304V0z" />
                </g></svg
              >En
            </button>
          </div>
          <div class="bg-transparent p-2 text-center text-secondary mt-4" style="font-weight: 600">© Copyright 2024. All Rights Reserved</div>
        </div>
      </footer>
    </section>
    <!-- Reload Screen -->
    <div class="reload-screen">
      <img src="https://kolshy.ae/wp-content/uploads/2025/02/Untitled-3000-x-750-px.gif" class="img-fluid" alt="">
    </div>
  </div>
</template>

<script>
import topBar from '@/components/tools/top-bar.vue';
export default {
  name: 'app',
  components: {
    topBar,
  },
  data() {
    return {
      name: "",
      type: "",
      store_name: "",
      profile_image: "",
    }
  },
}
</script>

<style>
:root {
  --primary-color: #e51742;
  --primary-color-hover: #000336;
  --secondary-color: #000336;
  --color-platform: #fff;
  --text-color: #000;
  --text-color-secondary: #fff;
  --success: #4cdb4a;
  --warning: #ff960c;
  --error: #ed284f;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::-webkit-scrollbar {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

h1,
h2,
h3,
h4,
h5,
a {
  color: #141414;
  text-decoration: none;
}
body {
  background-color: #f0f0f0;
  width: 100%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
button {
  cursor: pointer;
  background-color: #e51742;
  transition: all 0.3s ease-in-out;
}
button:hover {
  background-color: #000336;
}
.top-blackFriday-div {
  background-color: #000336;
  color: #fff;
  font-weight: 400;
}
.secound-nav {
  background-color: #fff;
  /* padding: 0 300px; */
}
.icon {
  color: #e51742;
}
.input-group-li {
  margin: 0 40px;
  background-color: #f5f5f5;
  padding: 7px 20px;
  border-radius: 16px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group-li input {
  background-color: transparent;
  border: none;
  outline: none;
}
.input-group-li .span {
  background-color: #f5f5f5;
  padding: 7px 20px;
  border-radius: 16px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.flex {
  margin: 0px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
svg {
  margin: 0 10px;
}
.circle-cart {
  background-color: #e51742;
  position: absolute;
  top: -4px;
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
input::placeholder {
  font-weight: 600;
}
.bottom-nav {
  background: #000336;
  width: 100%;
  padding: 0px 20px;
  color: #fff;
}
.home-page {
  background-color: #fff;
  padding: 0 20px;
  width: 90%;
  margin: 0 auto;
}
.slide {
  height: 900px;
  width: 90%;
  margin: 0 auto;
}
.cards-pro {
  width: 320px;
  height: 380px;
  margin: 12px 0;
  overflow: hidden;
  object-fit: cover;
  box-shadow: 0 0 10px 0 #fccfd9;
}
.side-cart {
  border-left: 2px solid #e51742;
  border-top: 2px solid #e51742;
  width: 0;
  padding: 0;
  height: 85%;
  overflow-x: hidden;
  transition: all 0.3s cubic-bezier(0, 0, 0.96, -0.48); /* css transition cb tool */
}
@media (max-width: 664px) and (min-width: 320px) {
  .slide {
    height: 750px;
    width: 100%;
    margin: 0 auto;
  }
  .nav-mobile {
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: between;
    padding: 0 8px;
  }
  .cards-pro {
    width: 95%;
    height: 380px;
    margin: 10px 0;
    overflow: hidden;
    object-fit: cover;
    box-shadow: 0 0 10px 0 #fccfd9;
  }
}
.reload-screen {
  position: absolute;
position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #e6e6e633;
    backdrop-filter: blur(30px);
    z-index: 999;
    animation: hide-reloade 5s forwards ease-out;
}
@keyframes hide-reloade {
  0% {
    opacity: 1;
    display: block
  }
  100%{
    opacity: 0;
    display: none
  }
}
.reload-screen img {
  width: 90%;
  margin: auto;
  width: 20%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 43%;
}

</style>
