let body = document.querySelector("#hotels");

let data = [
  {
    img: "https://a0.muscache.com/im/pictures/airflow/Hosting-1112254/original/e6bed0e6-6190-4119-bd80-d12d369cea19.jpg?im_w=1200",
    city: "Visakhapatnam",
    ratings: 4,
    type: "Luxury",
    price: 500,
  },
  {
    img: "https://a0.muscache.com/im/pictures/e5815a06-600c-4b3e-a17b-f7ec10ba0ef9.jpg?im_w=1200",
    city: "Bangalore",
    ratings: 3.75,
    type: "Deluxe",
    price: 750,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-746919020186561409/original/11e5a727-e1ac-4069-b5c5-35cf054bed27.jpeg?im_w=720",
    city: "Hyderabad",
    ratings: 3.25,
    type: "Luxury",
    price: 750,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-761521121343082881/original/d334c373-bf21-4fce-aff6-0dc085f7bd28.jpeg?im_w=1200",
    city: "Visakhapatnam",
    ratings: 4.25,
    type: "Deluxe",
    price: 1000,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-761521121343082881/original/701d22ed-7e29-45f8-89b4-808ac66ce7e6.jpeg?im_w=720",
    city: "Bangalore",
    ratings: 4,
    type: "Luxury",
    price: 650,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-791091294541743329/original/72e6e374-1305-41e5-a901-774df9a12ef9.jpeg?im_w=1200",
    city: "Visakhapatnam",
    ratings: 3.75,
    type: "Deluxe",
    price: 450,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-795310126786581682/original/6f8d6fe6-7891-4a5d-a5b8-7bf7acdaff33.jpeg?im_w=1200",
    city: "Bangalore",
    ratings: 4,
    type: "Luxury",
    price: 600,
  },
  {
    img: " https://a0.muscache.com/im/pictures/miso/Hosting-746919020186561409/original/98f1a8c7-a263-46a8-8757-1f5d9d39f8bb.jpeg?im_w=1200",
    city: "Hyderabad",
    ratings: 4.25,
    type: "Deluxe",
    price: 800,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-622270733741689942/original/ea5e431e-2aa5-4759-b18f-84ac5199cfdd.jpeg?im_w=1200",
    city: "Visakhapatnam",
    ratings: 4.5,
    type: "Luxury",
    price: 1200,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-622270733741689942/original/1b947a93-34d4-4d38-b952-bcc13a756aaf.jpeg?im_w=720",
    city: "Bangalore",
    ratings: 4.25,
    type: "Deluxe",
    price: 900,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-30439495/original/b4ac6c62-4c91-4b3d-827e-1129dfa6de9a.jpeg?im_w=1200",
    city: "Hyderabad",
    ratings: 4.5,
    type: "Luxury",
    price: 1500,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-12394542/original/f374257d-c629-48f4-9986-0d43c76af217.jpeg?im_w=1200",
    city: "Visakhapatnam",
    ratings: 3,
    type: "Deluxe",
    price: 300,
  },
];

display(data);

let search = document.querySelector("#search");
let filter = document.querySelector("#filter");
let sort = document.querySelector("#sort");

search.addEventListener("input", function () {
  let searchdata = data.filter((e) => {
    if (e.city.toUpperCase().includes(search.value.toUpperCase())) {
      return e;
    }
  });
  display(searchdata);
});

filter.addEventListener("change", function () {
  if (filter.value == "") {
    display(data);
  } else {
    let filtered = data.filter((e) => {
      if (filter.value == e.type) {
        return e;
      }
    });
    display(filtered);
  }
});

sort.addEventListener("change", function () {
  if (sort.value === "lh") {
    let sorted = data.slice().sort((a, b) => {
      return a.price - b.price;
    });
    display(sorted);
  } else if (sort.value === "hl") {
    let sorted = data.slice().sort((a, b) => {
      return b.price - a.price;
    });
    display(sorted);
  } else {
    display(data);
  }
});

function display(data) {
  body.innerHTML = "";

  data.forEach((a) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    const city = document.createElement("h4");
    const type = document.createElement("h4");
    const price = document.createElement("h5");
    const ratings = document.createElement("p");
    const book = document.createElement("button");

    image.setAttribute("src", a.img);
    city.innerText = a.city;
    price.innerText = "₹" + a.price + "/day";
    type.innerText = a.type;
    ratings.innerText = a.ratings + "/5";
    book.innerText = "Book Now";
    div.append(image, city, ratings, type, price, book);
    body.append(div);
  });
}
