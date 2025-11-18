const dropdownbar = document.querySelector(".dropdown-list");
const productLists = document.querySelector(".product-lists");
const heroSection = document.querySelector(".hero-section");
const discountSection = document.querySelector(".Discount-section");
const productSection = document.querySelector(".products-section");
const catagorySection = document.querySelector(".Catagory-section");
const footerSection = document.querySelector(".footer-section");
const catagoryProductList = document.querySelector(".catagories-products");
const catagory = "";

const ItemsArray = [
  {
    // GAMING MOUSE
    productName: "GAMING MOUSE",
    Picture: "./assets/mouse picture.webp",
    About:
      "ATK Blazing Sky X1 Series Wireless Mouse with Great connectivity and polling rate",
    Price: 29,
    Stockinfo: "In Stock",
    catagory: "Computer Accessories",
  },
  {
    // AIRPODS PRO 2
    productName: "AIRPODS PRO 2",
    Picture: "./assets/airpods pic.jpg",
    About:
      "Active noice cancellation Airpods generation 2 with great sound quality and high base",
    Price: 149,
    Stockinfo: "In Stock",
    catagory: "Music",
  },
  {
    // GAMING KEYBOARD
    productName: "GAMING KEYBOARD",
    Picture: "./assets/keyboard picture.avif",
    About:
      "HERMES high end gaming keyboard mechanical and responsivness on next level",
    Price: 299,
    Stockinfo: "In Stock",
    catagory: "Computer Accessories",
  },
  {
    // WIRELESS HEADPHONES
    productName: "WIRELESS HEADPHONES",
    Picture: "./assets/headphone image.png",
    About:
      "Wireless headphone high quality audio and comfort specially design for music",
    Price: 99,
    Stockinfo: "In Stock",
    catagory: "Music",
  },
  {
    // SMART WATCH
    productName: "SMART WATCH",
    Picture: "./assets/smart watch picture.jpg",
    About:
      "Next Gen watch is here with new exciting features about health activity and much more",
    Price: 185,
    Stockinfo: "In Stock",
    catagory: "life Accessories",
  },
  {
    // SMART TV
    productName: "SMART TV",
    Picture: "./assets/tv picture.jfif",
    About:
      "Smart Tv 50inches high quality OLED display sharp and bright colors and attractive.",
    Price: 550,
    Stockinfo: "In Stock",
    catagory: "life Accessories",
  },
];

loadProducts();

function loadProducts() {
  for (let i = 0; i < 6; i++) {
    createProductElements(productLists, i);
  }
}
function loadCatagorySectionProducts() {
  for (let i = 0; i < ItemsArray.length; i++) {
    createProductElements(catagoryProductList, i);
  }
}

function openCatagorySection() {
  heroSection.classList.add("display-none");
  discountSection.classList.add("display-none");
  productSection.classList.add("display-none");
  footerSection.classList.add("display-none");
  catagorySection.classList.remove("display-none");
  loadCatagorySectionProducts();
}
function createProductElements(elementsToBeAddedIn, i) {
  // Elements creating
  let productBox = document.createElement("div");
  let imgBox = document.createElement("div");
  let imgElement = document.createElement("img");
  let itemName = document.createElement("h1");
  let itemAbout = document.createElement("p");
  let itemPrice = document.createElement("h2");
  let itemStockInfo = document.createElement("p");
  let AddToCartBtn = document.createElement("button");

  // Elements naming and class assigning

  productBox.className = "product-box";
  imgBox.className = "img-box";
  imgElement.src = ItemsArray[i].Picture;
  itemName.textContent = ItemsArray[i].productName;
  itemAbout.textContent = ItemsArray[i].About;
  itemPrice.textContent = `$${ItemsArray[i].Price}`;
  itemStockInfo.textContent = ItemsArray[i].Stockinfo;
  AddToCartBtn.textContent = `ADD TO CART`;

  // Elements appending to their parent Nodes

  imgBox.appendChild(imgElement);
  productBox.appendChild(imgBox);
  elementsToBeAddedIn.appendChild(productBox);
  productBox.appendChild(itemName);
  productBox.appendChild(itemAbout);
  productBox.appendChild(itemPrice);
  productBox.appendChild(itemStockInfo);
  productBox.appendChild(AddToCartBtn);
}

function ComAcc() {
  catagoryProductList.innerHTML = "";
  for (let i = 0; i < ItemsArray.length; i++) {
    if (ItemsArray[i].catagory == "Computer Accessories") {
      createProductElements(catagoryProductList, i);
    }
  }
}

function lifAcc() {
  catagoryProductList.innerHTML = "";
  for (let i = 0; i < ItemsArray.length; i++) {
    if (ItemsArray[i].catagory == "life Accessories") {
      createProductElements(catagoryProductList, i);
    }
  }
}
function music() {
  catagoryProductList.innerHTML = "";
  for (let i = 0; i < ItemsArray.length; i++) {
    if (ItemsArray[i].catagory == "Music") {
      createProductElements(catagoryProductList, i);
    }
  }
}
function ShowAll() {
  catagoryProductList.innerHTML = "";
  for (let i = 0; i < ItemsArray.length; i++) {
    createProductElements(catagoryProductList, i);
  }
}

function backToHome() {
  heroSection.classList.remove("display-none");
  discountSection.classList.remove("display-none");
  productSection.classList.remove("display-none");
  footerSection.classList.remove("display-none");
  catagorySection.classList.add("display-none");
  catagoryProductList.innerHTML = "";
}

function dropdown() {
  dropdownbar.style.top = "0";
}

function backUp() {
  dropdownbar.style.top = "-25vh";
}
