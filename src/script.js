document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".sliderWrapper");
  const menuItems = document.querySelectorAll(".menuItem");
  const totalItems = menuItems.length;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100;
    wrapper.style.transform = `translateX(${translateValue}vw)`;
  }

  setInterval(nextSlide, 5000);

  const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
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
      item: {
        img: "img/air.png",
        title: "AIR FORCE",
      },
      details: {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque obcaecati asperiores vero sunt laudantium debitis voluptas maxime facilis aperiam.",
        sizes: [42, 43, 44],
      },
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "gray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
      item: {
        img: "img/jordan.png",
        title: "AIR JORDAN",
      },
      details: {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque obcaecati asperiores vero sunt laudantium debitis voluptas maxime facilis aperiam.",
        sizes: [42, 43, 44],
      },
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "gray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
      item: {
        img: "img/blazer.png",
        title: "BLAZER",
      },
      details: {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque obcaecati asperiores vero sunt laudantium debitis voluptas maxime facilis aperiam.",
        sizes: [42, 43, 44],
      },
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "gray",
          img: "./img/crater2.png",
        },
      ],
      item: {
        img: "img/crater.png",
        title: "CRATER",
      },
      details: {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque obcaecati asperiores vero sunt laudantium debitis voluptas maxime facilis aperiam.",
        sizes: [42, 43, 44],
      },
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
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
      item: {
        img: "img/hippie.png",
        title: "HIPPIE",
      },
      details: {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque obcaecati asperiores vero sunt laudantium debitis voluptas maxime facilis aperiam.",
        sizes: [42, 43, 44],
      },
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
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      choosenProduct = products[index];

      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;

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
});

// payment
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
