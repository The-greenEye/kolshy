// ================Section Elements=================
let category = document.getElementById("categoris");
let productShow = document.getElementById("product-show");

// ===================Api Data======================
let FakeApi = [
  {
    id: 1,
    title: "Accessories",
    img: "http://dummyimage.com/x.png/dddddd/000000",
    descript: "Reusable tote bags for shopping and eco-friendly living.",
    category: "Home",
  },
  {
    id: 2,
    title: "Grooming",
    img: "http://dummyimage.com/x.png/dddddd/000000",
    descript: "Everything you need for maintaining a healthy beard.",
    category: "Crafts",
  },
  {
    id: 3,
    title: "Smart Home",
    img: "http://dummyimage.com/x.png/cc0000/ffffff",
    descript: "Color-changing smart LED bulbs compatible with Alexa.",
    category: "Gaming",
  },
  {
    id: 4,
    title: "Food - Snacks",
    img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
    descript: "Sweet and salty popcorn with sea salt and caramel, a tasty treat.",
    category: "Home",
  },
  {
    id: 5,
    title: "Food - Dips",
    img: "http://dummyimage.com/x.png/ff4444/ffffff",
    descript: "A creamy and flavorful hummus made with roasted red peppers.",
    category: "Food - Condiments",
  },
  {
    id: 6,
    title: "Home",
    img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
    descript: "HEPA air purifier for clean indoor air.",
    category: "Beauty",
  },
  {
    id: 7,
    title: "Food - Frozen Foods",
    img: "http://dummyimage.com/x.png/cc0000/ffffff",
    descript: "Crispy spring rolls filled with vegetables",
    category: "Outdoor",
  },
  {
    id: 8,
    title: "Clothing - Outerwear",
    img: "http://dummyimage.com/x.png/cc0000/ffffff",
    descript: "Elevate your outfit with this sophisticated velvet blazer.",
    category: "Office",
  },
  {
    id: 9,
    title: "Outdoor",
    img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
    descript: "Durable and versatile backpack for outdoor and travel use.",
    category: "Fitness",
  },
  {
    id: 10,
    title: "Food - Soups",
    img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
    descript: "Creamy and delicious soup made with real butternut squash, ready to heat.",
    category: "Fitness",
  },
  {
    id: 11,
    title: "Accessories",
    img: "http://dummyimage.com/x.png/cc0000/ffffff",
    descript: "Multiple USB ports for charging devices simultaneously.",
    category: "Food - Grains",
  },
  {
    id: 12,
    title: "Fitness",
    img: "http://dummyimage.com/x.png/cc0000/ffffff",
    descript: "Space-saving bike for indoor workouts.",
    category: "Storage",
  },
  {
    id: 13,
    title: "Clothing - Outerwear",
    img: "http://dummyimage.com/x.png/dddddd/000000",
    descript: "A cozy long cardigan designed for layering in any season.",
    category: "Home",
  },
  {
    id: 14,
    title: "Toys",
    img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
    descript: "Challenging and fun puzzle game for all ages.",
    category: "Food - Prepared Meals",
  },
  {
    id: 15,
    title: "Food - Canned Goods",
    img: "http://dummyimage.com/x.png/ff4444/ffffff",
    descript: "Concentrated tomato paste, great for sauces.",
    category: "Clothing - Tops",
  },
  {
    id: 16,
    title: "Kitchen",
    img: "http://dummyimage.com/x.png/dddddd/000000",
    descript: "Set of flexible molds for baking cakes and pastries.",
    category: "Home",
  },
  {
    id: 17,
    title: "Fitness",
    img: "http://dummyimage.com/x.png/ff4444/ffffff",
    descript: "Use this foam roller for effective post-workout recovery.",
    category: "Outdoor",
  },
  {
    id: 18,
    title: "Pets",
    img: "http://dummyimage.com/x.png/cc0000/ffffff",
    descript: "Comfortable pet carrier for travel and vet visits.",
    category: "Garden",
  },
  {
    id: 19,
    title: "Food - Produce",
    img: "http://dummyimage.com/x.png/dddddd/000000",
    descript: "Low-carb vegetable for pasta alternatives.",
    category: "Food - Produce",
  },
  {
    id: 20,
    title: "Garden",
    img: "http://dummyimage.com/x.png/5fa2dd/ffffff",
    descript: "Foldable kneeler that doubles as a seat for gardening convenience.",
    category: "Kitchen",
  },
];

// ======================Function==================
function getCategory() {
  let categoryCard = "";
  for (let i = 0; i < FakeApi.length; i++) {
    if (i < 4) {
      categoryCard += `
            <div class="card p-2 mr-1 rounded-0 border-0" style="width: 24%; height: 100%; overflow: hidden; object-fit: cover; box-shadow: 0 120px 50px 0 #fff" id="${FakeApi[i].id}" data-category="${FakeApi[i].category}">
              <b style="color: var(--secondary-color); font-weight: 500; font-size: 23px; margin: 10px 0">${FakeApi[i].title}</b>
              <img src="${FakeApi[i].img}" width="250" height="250" style="aspect-ratio: 1/1" class="card-img-top" alt="img-show" />
              <div class="card-body">
                <a href="#"
                  ><p class="card-text"><b style="color: var(--primary-color); font-size: 18px">see more →</b></p></a
                >
              </div>
            </div>
        `;
    } else {
      break;
    }
  }
  category.innerHTML = categoryCard;
}
getCategory();

function getItems() {
    let item = "";
    for (let i = 0; i < FakeApi.length; i++) {
        if (i < 8) {
            item += `
            <div class="card p-2 col-lg-3 col-12 m-0 mb-1 mt-1" style="width: 25%; height: 380px; overflow: hidden; object-fit: cover; box-shadow: 0 0 10px 0 #fccfd9" id="${FakeApi[i].id}" data-category="${FakeApi[i].category}">
            <b style="color: var(--secondary-color); font-weight: 500; font-size: 23px; margin: 10px 0">${FakeApi[i].title}</b>
            <img src="${FakeApi[i].img}" width="250" height="250" style="aspect-ratio: 1/1" class="card-img-top" alt="img-show" />
            <div class="card-body">
              <a href="#"
                ><p class="card-text"><b style="color: var(--primary-color); font-size: 18px">see more →</b></p></a
              >
            </div>
          </div>
        `;
        
            productShow.innerHTML = item;
        } else {
            break
        }
    }
}
getItems();
