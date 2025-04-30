const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 4499,     
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 5999,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png", 
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 4199,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 5999,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 4799,
    colors: [ 
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];
let choosenProduct = products[0];   

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});












document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_lr9tfn8", // your actual Service ID
    "template_4oz20er",
    // "template_1nugwgd", // your actual Template ID
    this
  ).then(
    function (response) {
      alert("Email sent successfully! ✅");
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("Failed to send email ❌. Please try again.");
      console.log("FAILED...", error);
    }
  );
});







const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});



// search
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const index = products.findIndex(product =>
    product.title.toLowerCase().includes(searchTerm)
  );

  if (index >= 0) {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
  
    currentProductColors.forEach((color, i) => {
      if (choosenProduct.colors[i]) {
        color.style.backgroundColor = choosenProduct.colors[i].code;
      }
    });
  
    autofillPrice(); // ✅ Add here too
  }
   else {
    alert("Product not found ❌");
  }

  searchInput.value = ""; // clear input
}

// 🔍 When button is clicked
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  handleSearch();
});

// ⌨️ When Enter is pressed in input
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});





//autofill
// Auto-fill the form price input with selected product MRP
function autofillPrice() {
  const priceInput = document.querySelector('input[name="price"]');
  if (priceInput && choosenProduct) {
    priceInput.value = choosenProduct.price;
  }
}
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });

    autofillPrice(); // ✅ Add this here
  });
});
