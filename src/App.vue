<template>
  <div class="position-relative">
    <main class="nav-main">
      <!-- ==============Offers Section================= -->
      <div class="w-100 p-2 text-center top-blackFriday-div">Black Friday Sale For All Swim And Free Express Delivery - OFF 50%! <router-link to="" class="ml-4" style="color: rgba(229, 23, 66, 1); text-decoration: underline">ShopNow</router-link></div>
      <!-- ==============Nav Tools Section================= -->
      <nav class="navbar navbar-expand-lg secound-nav shadow">
        <a href="/" class="navbar-brand fs-1"><img src="../public/img/KO-01.png" class="img-fluid" width="150" alt="logo" /></a>
        <div class="d-lg-none d-flex justify-content-between align-items-center">
          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.04 0-3.922.47-5.322 1.27C5.3 14.308 4.25 15.51 4.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27s3.922-.47 5.322-1.27c1.378-.788 2.428-1.99 2.428-3.48s-1.05-2.692-2.428-3.48c-1.4-.8-3.283-1.27-5.322-1.27M5.75 17c0-.72.517-1.517 1.672-2.177c1.134-.648 2.751-1.073 4.578-1.073s3.444.425 4.578 1.073c1.155.66 1.672 1.458 1.672 2.177s-.517 1.517-1.672 2.177c-1.134.648-2.751 1.073-4.578 1.073s-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17" clip-rule="evenodd" /></svg>
            <span class="d-flex flex-column">
              <b>Hello,</b>
              <small class="icon"><router-link to="login">Signin</router-link> or <router-link to="register">Signup</router-link></small>
            </span>
          </div>
          <div>
            <a href="#">
              <span class="position-relative p-0 cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 56 56"><path fill="#000336" d="M.953 6.719c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414H47.36c.913 0 1.71-.75 1.71-1.757c0-1.008-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7 7 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899h-38.25l-.469-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76M18.04 47.242c0 2.133 1.688 3.797 3.82 3.797a3.766 3.766 0 0 0 3.797-3.797a3.78 3.78 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797m21.914 0c0 2.133 1.711 3.797 3.82 3.797c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797" /></svg>
                <circle-cart class="text-center circle-cart">0</circle-cart>
              </span>
            </a>
          </div>
        </div>

        <ul class="navbar-nav d-lg-flex d-none align-items-center">
          <li class="nav-item flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 16 16"><path fill="#E51742" d="M8 2a4 4 0 0 0-4 4c0 .808.483 1.793 1.203 2.785c.705.972 1.576 1.867 2.224 2.48c.327.31.819.31 1.146 0c.648-.613 1.519-1.508 2.224-2.48C11.518 7.793 12 6.808 12 6a4 4 0 0 0-4-4M3 6a5 5 0 0 1 10 0c0 1.144-.65 2.35-1.393 3.372c-.757 1.043-1.677 1.986-2.346 2.62a1.823 1.823 0 0 1-2.522 0c-.669-.634-1.589-1.577-2.346-2.62C3.651 8.35 3 7.144 3 6m6.5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m2.445 4.575c-.233.29-.472.566-.707.827q.255.072.48.154c.466.17.808.359 1.024.545c.217.187.258.323.258.4c0 .075-.04.211-.258.398c-.216.186-.558.376-1.024.545C10.791 13.782 9.476 14 8 14s-2.79-.218-3.718-.556c-.466-.169-.808-.359-1.024-.545C3.041 12.712 3 12.576 3 12.5c0-.075.04-.212.258-.4c.216-.185.558-.375 1.024-.544q.225-.082.48-.154c-.235-.26-.474-.538-.707-.827l-.115.041c-.53.193-.993.434-1.334.726c-.339.292-.606.681-.606 1.158s.267.866.606 1.158c.34.293.805.534 1.334.726C5.003 14.771 6.439 15 8 15s2.997-.23 4.06-.616c.53-.192.993-.433 1.334-.726c.339-.292.606-.681.606-1.158s-.267-.866-.606-1.158c-.34-.292-.805-.534-1.334-.726z" /></svg><span class="d-flex flex-column"><small class="icon">Delivery to</small><b>Cairo</b></span>
          </li>

          <li class="nav-item">
            <div class="input-div d-flex align-items-center justify-content-center">
              <div class="input-group justify-content-around input-group-li mr-0 p-0">
                <div class="input-group-text bg-transparent border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 24 24"><path fill="none" stroke="#E51742" d="M18.425 18.425L23.5 23.5m-12.5-2C5.201 21.5.5 16.799.5 11S5.201.5 11 .5S21.5 5.201 21.5 11S16.799 21.5 11 21.5Z" stroke-width="2" /></svg>
                </div>
                <input type="search" name="search" id="search" placeholder="What are you looking for?" style="width: 120px" />
                <span class="input-group-text p-0 border-0">
                  <button class="btn btn-secondary rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                  <ul class="dropdown-menu">
                    <li><router-link class="dropdown-item" to="">Actionnnn</router-link></li>
                  </ul>
                </span>
              </div>
            </div>
          </li>
          <!-- this have a problem fixe it later -->
          <li class="nav-item flex position-relative" data-bs-toggle="dropdown" data-bs-target="#eng" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 64 64">
              <path fill="#ed4c5c" d="M32 2C18.9 2 7.8 10.4 3.7 22h56.6C56.2 10.4 45.1 2 32 2" />
              <path fill="#3e4347" d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62" />
              <path fill="#f9f9f9" d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10z" />
              <g fill="#fff">
                <path d="M30.6 25.1c.3-.2.5 0 .7.2c.1.2.1.8-.1 1.5c-.1.4-.4.8-.6 1.1c.4 0 .9-.1 1.4-.3c.5.2.9.3 1.4.3c-.2-.4-.4-1.2-.3-1.8c0-.9-.1-1.2-.3-1.4s-.7-.3-1-.3c-.2 0-.2.1-.2.1q-.6-.15-.9 0c-.2.2-.2.7-.1.6" />
                <path d="M37.3 28.1c-.2-1.1-1.3-.8-2.2-.3c-.4.2-.8.4-1.2.4h-.3c-.5 0-1.1-.1-1.6-.3c-.5.2-1.1.3-1.6.3h-.2c-.5 0-.9-.2-1.3-.5c-.8-.4-1.9-.7-2.2.3c.2-.1.4-.3.5-.3l-.4 9.6l.2-.2l.4-9.3c.1.1.5.5.6.5l-.3 8.1l.3-.3l.3-7.7c.1.1.4.3.5.4l-.3 6.7l.8-.7l.8-2.7c-.7-1.5-.6-2.8-.6-2.8h.2c.5 0 1.6-.3 2.1-.6c.1 0 .1-.1.2-.1c0 .1.1.1.2.2c.5.3 1.6.6 2.1.6h.2s.1 1.3-.6 2.8l.7 2.6l.8.7l-.3-6.6c.1-.1.3-.3.5-.4l.3 7.5l.3.3l-.3-8c.1-.1.5-.4.6-.5l.4 9.2l.2.2l-.4-9.5c.1.1.4.3.6.4" />
                <path d="M31.1 29.7v3.9s0 .1.1.1c.1.2.3.3.4.5l.3.3l.3-.3l.5-.5v-3.8c-.3-.1-.6-.2-.8-.4c-.1-.1-.4 0-.8.2" />
              </g>
              <path fill="#c09300" d="M36.3 37.9c0-.5-.5-.5-.9-.4c-.1 0-.1 0-.2.1l-.6-2.2l3.3 3.2l-.4-10.4c-.1-1.6-1.4-1.2-2.3-.6c-.5.3-.9.5-1.4.5c-.7-1.2-.3-2.8-.8-3.2c-.2-.2-.9-.5-1.4-.5c-.3 0-.2.2-.2.2c-.5-.1-.9-.1-1.1.1c-.2.1 0 1.1.1.9c.3-.3.4-.2.6.1s-.2 1.5-.7 2.4c-.6 0-1.1-.2-1.6-.5c-1-.6-2.3-.9-2.3.6L26 38.5l3.3-3.1l-.6 2.1c-.1 0-.1 0-.2-.1c-.4-.1-.9-.1-.9.4c-.6-.1-.8.8-.2 1c0 .3 0 .5.4.5c.9.3 2.5.4 4.1.4s3.2-.1 4.1-.4c.4-.1.4-.3.4-.5c.8-.2.5-1.1-.1-.9m-5.1-4.3q0-.15 0 0l-.1-.1v-3.8c.4-.1.7-.2.9-.4c.2.2.5.3.8.4v3.8c-.2.2-.3.4-.5.5l-.3.3l-.3-.3c-.2-.1-.3-.3-.5-.4m0-6.7c.2-.7.2-1.3.1-1.5c-.2-.2-.4-.4-.7-.2c-.1.1-.1-.4.1-.5q.3-.15.9 0s0-.2.2-.1c.3 0 .9.2 1 .3s.3.5.3 1.4c0 .6.1 1.4.3 1.8c-.4 0-.9-.1-1.4-.3c-.5.2-.9.3-1.4.3c.2-.4.5-.8.6-1.2m-2.6 8.9l.3-6.7c-.1-.1-.3-.3-.5-.4l-.4 7.6l-.3.3l.3-8.1c-.1-.1-.5-.4-.6-.5l-.4 9.3l-.2.2l.4-9.6c-.1 0-.4.1-.5.3c.3-1 1.4-.7 2.2-.2c.4.3.9.4 1.3.5h.2c.5 0 1-.1 1.6-.3c.6.2 1.1.3 1.6.3h.3c.4-.1.8-.2 1.2-.4c.9-.5 2-.8 2.2.3c-.2-.1-.5-.3-.6-.3l.4 9.5l-.2-.2l-.4-9.4c-.1.1-.5.5-.6.5l.3 8l-.3-.3l-.3-7.5c-.1.1-.4.3-.5.4l.3 6.6l-.8-.7l-.7-2.6c.7-1.5.6-2.8.6-2.8h-.2c-.5 0-1.6-.2-2.1-.6c-.1 0-.1-.1-.2-.2c0 0-.1.1-.2.1c-.5.3-1.6.6-2.1.6h-.2s-.1 1.3.6 2.8l-.8 2.7zm3.4 2h-1.1l.7-3.4c.1.1.2.2.4.3c.1-.1.3-.2.4-.3l.8 3.4z" />
            </svg>
            <b style="margin: 0 10px">English</b>
            <b
              ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="#000" d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199" /></svg
            ></b>
            <ul class="dropdown-menu" id="eng">
              <li><router-link class="dropdown-item" to="">Actionnnn</router-link></li>
            </ul>
          </li>
          |
          <li class="nav-item flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.04 0-3.922.47-5.322 1.27C5.3 14.308 4.25 15.51 4.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27s3.922-.47 5.322-1.27c1.378-.788 2.428-1.99 2.428-3.48s-1.05-2.692-2.428-3.48c-1.4-.8-3.283-1.27-5.322-1.27M5.75 17c0-.72.517-1.517 1.672-2.177c1.134-.648 2.751-1.073 4.578-1.073s3.444.425 4.578 1.073c1.155.66 1.672 1.458 1.672 2.177s-.517 1.517-1.672 2.177c-1.134.648-2.751 1.073-4.578 1.073s-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17" clip-rule="evenodd" /></svg>
            <span class="d-flex flex-column">
              <b>Hello,</b>
              <small class="icon"><router-link to="login">Signin</router-link> or <router-link to="register">Signup</router-link></small>
            </span>
          </li>
          |
          <li class="nav-item flex">
            <b><a style="color: #141414">Order</a></b>
          </li>
          |
          <li class="nav-item flex">
            <b
              ><button class="btn d-flex p-1 rounded-pill" style="color: #fff; background: #e51742">
                <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275m-5.381-5.752l5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m13 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 13a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-13-3a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0" /></svg> Affiliate
              </button></b
            >
          </li>
          |
          <li class="nav-item flex" @mouseenter="openCard" @mouseleave="closeCard">
            <span class="position-relative p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 56 56"><path fill="#000336" d="M.953 6.719c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414H47.36c.913 0 1.71-.75 1.71-1.757c0-1.008-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7 7 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899h-38.25l-.469-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76M18.04 47.242c0 2.133 1.688 3.797 3.82 3.797a3.766 3.766 0 0 0 3.797-3.797a3.78 3.78 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797m21.914 0c0 2.133 1.711 3.797 3.82 3.797c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797" /></svg>
              <circle-cart class="text-center circle-cart">{{ items.length }}</circle-cart>
            </span>
          </li>
        </ul>
      </nav>
      <!-- ==============Nav Ul Section================= -->
      <nav class="navbar navbar-expand d-flex justify-content-between align-items-center bottom-nav p-0">
        <ul class="navbar-nav nav-mobile mt-2 p-0 overflow-x-auto">
          <small class="navbar-nav d-flex align-items-center">
            <router-link to="/shop">
              <li class="nav-item d-flex mr-2 align-items-center">
                <span
                  ><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="#fff" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" /></svg
                ></span>
                <b>ALL</b>
              </li>
            </router-link>
            <li v-for="(li, index) in liNav" :key="index" :id="li.id" class="nav-item">
              <small
                ><router-link :to="{ name: 'shop', query: { category: li.category } }" class="nav-link text-light" style="white-space: nowrap">{{ li.category }}</router-link></small
              >
            </li>

            <li class="nav-item d-lg-flex d-none p-2">
              <router-link to="/shop" class="nav-link d-flex mt-1 justify-content-center bg-light p-1" style="color: #e51742; border-radius: calc(infinity * 1px); font-weight: 600"
                >See All
                <span
                  ><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 2048 2048"><path fill="#E51742" d="M1024 0h1024v1024h-128V219L93 2045l-90-90L1829 128h-805z" /></svg></span
              ></router-link>
            </li>
          </small>
        </ul>

        <div class="d-lg-flex d-none justify-content-center align-items-center m-0" style="background-color: #e51742; padding: 0 8px">
          <div class="d-flex justiy-content-center align-items-center m-2">
            <button class="btn rounded-0" style="background-color: #000336; color: #fff; font-weight: 500; white-space: nowrap">Black Friday</button>
            <button class="btn rounded-0" style="background-color: #ff960c; color: #fff; font-weight: 500">SALE</button>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center m-2">
            <h4 class="text-light m-0">20-30</h4>
            <b>November</b>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center" style="font-weight: bolder">
            <h2 class="text-light m-0">OFF 50%</h2>
          </div>
        </div>
      </nav>
    </main>
    <router-view />
    <!-- =============End Auth Section=============== -->
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
            <div class="col d-lg-flex d-none">
              <img src="https://tse1.mm.bing.net/th?id=OIP.JNlnZ9IEpcYmLMCcCwkiqAHaDx&pid=Api&P=0&h=220" width="245" height="45" alt="" />
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
    <!-- Side Cart  -->
    <div @mouseenter="openCard" @mouseleave="closeCard" class="position-fixed d-lg-flex d-none flex-column bottom-0 end-0 bg-light z-2 rounded side-cart" :class="{ 'w-25': isOpen }" id="side-cart">
      <h4 class="d-flex justify-content-between align-items-center">
        <span style="font-weight: 500; color: #000336; margin: 8px 10px"> Shopping Cart: </span>
        <span class="mb-1" @click="getItemForCart" style="cursor: pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="#e51742" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.167 1l.598 1.118c.404.755.606 1.133.472 1.295c-.133.162-.573.031-1.454-.23A9.8 9.8 0 0 0 12 2.78c-5.247 0-9.5 4.128-9.5 9.22a8.97 8.97 0 0 0 1.27 4.61M8.834 23l-.598-1.118c-.404-.756-.606-1.134-.472-1.295c.133-.162.573-.032 1.454.23c.88.261 1.815.402 2.783.402c5.247 0 9.5-4.128 9.5-9.22a8.97 8.97 0 0 0-1.27-4.609" color="#e51742" /></svg>
        </span>
      </h4>
      <center class="mt-2 mb-2" style="color: #141414; font-weight: 500">Your Subtotal: <span id="total-cart fw-bold"> $999.00</span></center>
      <center>
        <p style="color: green; font-weight: 500">
          Part Of Your Order is under <br />
          Free Shipping
        </p>
      </center>
      <center>
        <p style="color: #000336; font-weight: 500; margin-bottom: 0">Choose <span style="color: #e51742">Free Shipping </span>when</p>
      </center>
      <center>
        <small style="color: #000336; font-weight: 500"> completing the purchase.</small>
      </center>
      <router-link to="/cart">
        <center><button class="btn rounded-pill p-2 w-75 text-light mt-3" style="background-color: #e51742; font-weight: 500; margin-bottom: 0">Go Shipping Cart →</button></center>
      </router-link>
      <div class="mt-4 d-flex flex-column p-2" id="item-cart">
        <div v-for="(item, index) in items" :key="index" :id="item.id" :data-category="item.category" class="d-flex flex-column mb-4">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <img src="https://cms.dresma.com/uploads/Image_2_11cac6fa82.jpg" width="80" height="80" style="aspect-ratio: 1/1; margin: 0 8px" class="img-fluid rounded" alt="" />
              <div class="d-flex flex-column">
                <b class="text-dark">{{ item.title }}</b>
                <strong>${{ item.price || 100.0 }}</strong>
              </div>
            </div>
            <div class="rounded-circle" style="background-color: #e517421a; cursor: pointer" @click="DeleteItemLocal(item.id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="m-2" viewBox="0 0 24 24"><path fill="#e51742" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
/**
 * Vue Component for App.vue
 *
 * @description Manages the side cart functionality and data retrieval
 *
 * @data {Object} Component data properties
 * @property {boolean} isOpen - Tracks the open/closed state of the side cart
 * @property {Array} items - Stores cart items retrieved from localStorage
 * @property {Array} liNav - Stores product categories fetched from API
 *
 * @methods
 * @method openCard() - Toggles the side cart's open state
 * @method closeCard() - Closes the side cart
 *
 * @lifecycle mounted() - Initializes data on component mount
 * - Fetches product categories from local API
 * - Retrieves cart items from localStorage
 * - Handles potential nested cart arrays
 *
 * @api {GET} http://localhost:3000/items Fetch product categories
 * @apiSuccess {Array} liNav First 12 items from API response
 *
 * @error Logs any API fetch errors to console
 */
export default {
  data() {
    return {
      isOpen: false, // To track the card's open state
      items: [], // To hold cart items from localStorage
      liNav: [], // Get Categorys products for nav
    };
  },
  methods: {
    openCard() {
      this.isOpen = !this.isOpen;
    },
    closeCard() {
      this.isOpen = false;
    },
    getItemForCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (Array.isArray(cart[0])) {
        cart = cart.flat();
      }
      this.items = cart;
    },
    DeleteItemLocal(dl) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let newCart = cart.filter((item) => item.id === dl);
      localStorage.setItem("cart", JSON.stringify(newCart));
      this.item = newCart;
    },
  },
  async mounted() {
    const api = "http://localhost:3000/items"; // Replace with your API endpoint
    try {
      let res = await axios.get(api);
      this.liNav = res.data.slice(0, 12); // Get All items
    } catch (error) {
      console.error("Error fetching nav:", error); // Log any errors
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (Array.isArray(cart[0])) {
      cart = cart.flat();
    }
    this.items = cart;
    this.DeleteItemLocal();
  },
};
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
  padding: 0 300px;
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
  right: -4px;
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
.rating {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.2rem;
  scale: 0.8;
  --stroke: #666;
  --fill: #ffc73a;
}

.rating input {
  appearance: unset;
}

.rating label {
  cursor: pointer;
}

.rating svg {
  width: 25px;
  height: 25px;
  overflow: visible;
  fill: transparent;
  stroke: var(--stroke);
  stroke-linejoin: bevel;
  stroke-dasharray: 12;
  animation: idle 4s linear infinite;
  transition: stroke 0.2s, fill 0.5s;
}

@keyframes idle {
  from {
    stroke-dashoffset: 24;
  }
}

.rating label:hover svg {
  stroke: var(--fill);
}

.rating input:checked ~ label svg {
  transition: 0s;
  animation: idle 4s linear infinite, yippee 0.75s backwards;
  fill: var(--fill);
  stroke: var(--fill);
  stroke-opacity: 0;
  stroke-dasharray: 0;
  stroke-linejoin: miter;
  stroke-width: 8px;
}

@keyframes yippee {
  0% {
    transform: scale(1);
    fill: var(--fill);
    fill-opacity: 0;
    stroke-opacity: 1;
    stroke: var(--stroke);
    stroke-dasharray: 10;
    stroke-width: 1px;
    stroke-linejoin: bevel;
  }

  30% {
    transform: scale(0);
    fill: var(--fill);
    fill-opacity: 0;
    stroke-opacity: 1;
    stroke: var(--stroke);
    stroke-dasharray: 10;
    stroke-width: 1px;
    stroke-linejoin: bevel;
  }

  30.1% {
    stroke: var(--fill);
    stroke-dasharray: 0;
    stroke-linejoin: miter;
    stroke-width: 8px;
  }

  60% {
    transform: scale(1.2);
    fill: var(--fill);
  }
}
</style>
