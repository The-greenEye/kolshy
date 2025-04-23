<template>
  <div class="home">
    <div class="position-relative">
      <div class="slider-section category">
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
          <SplideSlide>
            <img src="https://wallpapercave.com/wp/wp9032309.jpg" class="img-fluid" alt="Sample 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://wallpapercave.com/wp/wp5962747.jpg" class="img-fluid" alt="Sample 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://rare-gallery.com/uploads/posts/345566-Celine-Farach-American-Model-Celebrity-Women-Girls-Beautiful.jpg" class="img-fluid" alt="Sample 3" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://wallpaperaccess.com/full/1503376.jpg" class="img-fluid" alt="Sample 4" />
          </SplideSlide>
        </Splide>
      </div>
      <div class="position-absolute d-lg-flex align-items-center justify-content-between p-4 d-none" style="bottom: -260px; width: 95%; margin: 0 auto 0 30px">
        <div class="card rounded-0 d-flex flex-column justify-content-between p-2 shadow-lg" style="height: 440px">
          <img src="https://freckledflower.com/wp-content/uploads/2016/02/child-model-red-butterfly-closet-dress-photography-2048x1152.jpg" width="350" height="400" alt="" class="img-fluid" />
          <div class="crad-body">
            <h3 class="card-title">Kids wear</h3>
            <a href="./cart/shop.vue"><p class="card-text">See More</p></a>
          </div>
        </div>
        <div class="card z-2 rounded-0 d-flex flex-column justify-content-between p-2 shadow-lg m-2" style="height: 440px">
          <img src="https://i.pinimg.com/474x/0f/62/eb/0f62ebde5de45c085fcee79d9e4dba8a.jpg" width="350" height="360" alt="" class="img-fluid" />
          <div class="crad-body">
            <h3 class="card-title">Man Hat</h3>
            <a href="./cart/shop.vue"><p class="card-text">See More</p></a>
          </div>
        </div>
        <div class="card rounded-0 d-flex flex-column justify-content-between p-2 shadow-lg m-2" style="height: 440px">
          <img src="https://wallpaperaccess.com/full/4571410.jpg" width="350" height="400" alt="" class="img-fluid" />
          <div class="crad-body">
            <h3 class="card-title">Accessories</h3>
            <a href="./cart/shop.vue"><p class="card-text">See More</p></a>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-wrap p-4" style="width: 95%;margin: auto">
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://wallpaperaccess.com/full/6173939.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://img.freepik.com/premium-photo/traditional-clothes-design-concepts-inspiring-ideas-fashion-shop-web-items-tshirt-4k_655090-1107162.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://i.pinimg.com/originals/83/c9/75/83c975c73060160fe07b9d70612ff281.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>

      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://i5.walmartimages.com/seo/Newborn-Toddler-Baby-Girl-Boy-Hooded-Romper-Jumpsuit-Winter-Outfits-Clothes_4b57dea6-2aaf-4fe2-be37-2489b526bd2d.95598c195350f097f604fd718d86f606.jpeg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://i.pinimg.com/originals/92/71/ef/9271ef026ae8cd8abffdca34e9fdb797.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://img.freepik.com/premium-photo/running-shoes-realistic-4k-white-background_839182-6779.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://wallpapers.com/images/hd/jordan-shoes-4k-ebfnd3563olc5t0k.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
    </div>      

    <div class="d-flex border-0 overflow-x-auto p-4" style="height: 660px; width: 92%; margin: auto">
      <div class="card p-0 rounded-0 m-2 shadow-lg" style="width: 420px; min-width: 400px">
        <img src="https://cdn.wallpapersafari.com/52/9/Slw2pZ.jpg" class="rounded-0" style="height: 280px; object-fit: cover" alt="" />
        <div class="card-body">
          <h2 class="card-title">Shoes Man</h2>
          <h3 style="color: #e51742">$22.49</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam veritatis eligendi, repellendus suscipit quod dolore, assumenda magnam dolorem esse officia porro, possimus incidunt dolorum exercitationem ipsum!...</p>
          <center><button class="btn rounded-pill w-75" style="background: #e51742; color: #fff; font-weight: 500">Add To Cart</button></center>
        </div>
      </div>
      <div class="card p-0 rounded-0 m-2 shadow-lg" style="width: 420px; min-width: 400px">
        <img src="https://wallpaperaccess.com/full/5733588.jpg" class="rounded-0" style="height: 280px; object-fit: cover" alt="" />
        <div class="card-body">
          <h2 class="card-title">Shoes Man</h2>
          <h3 style="color: #e51742">$22.49</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam veritatis eligendi, repellendus suscipit quod dolore, assumenda magnam dolorem esse officia porro, possimus incidunt dolorum exercitationem ipsum!...</p>
          <center><button class="btn rounded-pill w-75" style="background: #e51742; color: #fff; font-weight: 500">Add To Cart</button></center>
        </div>
      </div>
      <div class="card p-0 rounded-0 m-2 shadow-lg" style="width: 420px; min-width: 400px">
        <img src="https://img.kwcdn.com/product/1d6586ab48/bd0d2d36-e447-4271-8534-df449cb14a08_1350x1800.jpeg.a.jpg" class="rounded-0" style="height: 280px; object-fit: cover" alt="" />
        <div class="card-body">
          <h2 class="card-title">Shoes Man</h2>
          <h3 style="color: #e51742">$22.49</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam veritatis eligendi, repellendus suscipit quod dolore, assumenda magnam dolorem esse officia porro, possimus incidunt dolorum exercitationem ipsum!...</p>
          <center><button class="btn rounded-pill w-75" style="background: #e51742; color: #fff; font-weight: 500">Add To Cart</button></center>
        </div>
      </div>
      <div class="card p-0 rounded-0 m-2 shadow-lg" style="width: 420px; min-width: 400px">
        <img src="https://rare-gallery.com/uploads/posts/341801-Gigi-Hadid-American-Model-Celebrity-Girls-Women-Fashion-Model-Photoshoot-Photo-Shoot.jpg" class="rounded-0" style="height: 280px; object-fit: cover" alt="" />
        <div class="card-body">
          <h2 class="card-title">Shoes Man</h2>
          <h3 style="color: #e51742">$22.49</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam veritatis eligendi, repellendus suscipit quod dolore, assumenda magnam dolorem esse officia porro, possimus incidunt dolorum exercitationem ipsum!...</p>
          <center><button class="btn rounded-pill w-75" style="background: #e51742; color: #fff; font-weight: 500">Add To Cart</button></center>
        </div>
      </div>
      <div class="card p-0 rounded-0 m-2 shadow-lg" style="width: 420px; min-width: 400px">
        <img src="https://i.pinimg.com/736x/61/a7/89/61a789cff6041c67e44232779eef3353.jpg" class="rounded-0" style="height: 280px; object-fit: cover" alt="" />
        <div class="card-body">
          <h2 class="card-title">Shoes Man</h2>
          <h3 style="color: #e51742">$22.49</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam veritatis eligendi, repellendus suscipit quod dolore, assumenda magnam dolorem esse officia porro, possimus incidunt dolorum exercitationem ipsum!...</p>
          <center><button class="btn rounded-pill w-75" style="background: #e51742; color: #fff; font-weight: 500">Add To Cart</button></center>
        </div>
      </div>
    </div>
     <div class="d-flex flex-wrap p-4" style="width: 95%;margin: auto">
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://wallpaperaccess.com/full/6173939.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://img.freepik.com/premium-photo/traditional-clothes-design-concepts-inspiring-ideas-fashion-shop-web-items-tshirt-4k_655090-1107162.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://i.etsystatic.com/23584971/r/il/f6c68d/5733725392/il_1080xN.5733725392_mvox.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://i.pinimg.com/originals/83/c9/75/83c975c73060160fe07b9d70612ff281.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>

      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://i5.walmartimages.com/seo/Newborn-Toddler-Baby-Girl-Boy-Hooded-Romper-Jumpsuit-Winter-Outfits-Clothes_4b57dea6-2aaf-4fe2-be37-2489b526bd2d.95598c195350f097f604fd718d86f606.jpeg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://i.pinimg.com/originals/92/71/ef/9271ef026ae8cd8abffdca34e9fdb797.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://img.freepik.com/premium-photo/running-shoes-realistic-4k-white-background_839182-6779.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
      <div class="card p-0 m-2 d-flex flex-column justify-content-between" style="width: 280px">
        <img src="https://wallpapers.com/images/hd/jordan-shoes-4k-ebfnd3563olc5t0k.jpg" class="card-img-top" alt="product-image" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium vero iste...</p>
          <a href="./cart/shop.vue">See More</a>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

export default {
  name: "HomePage",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.my-slider-progress {
  background: #ccc;
}

.my-slider-progress-bar {
  background: greenyellow;
  height: 2px;
  transition: width 400ms ease;
  width: 0;
}
.category {
  margin-bottom: 300px;
}
@media (max-width: 422px) {
  .category {
    margin: 0;
  }
}
</style>
