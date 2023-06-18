
let regp = document.querySelector("#regp");

let profile = localStorage.getItem("profile");
if (profile === null) {
  profile = [];
} else {
  profile = JSON.parse(profile);
}

regp.innerText= profile.toUpperCase();


let p = document.querySelector("#datetext");
let datein = document.querySelector("#date");

let name = document.querySelector("#cityname");
let search = document.querySelector("#search");
let city = document.querySelector("#city");
let to = document.querySelector("#to");
let tocity = document.querySelector("#tocity");
let price = document.querySelector("#price");
let exbutton = document.querySelector("#exbutton");

datein.addEventListener("input", function () {
  p.innerText = datein.value;
  let c = Math.random() * 1000;
  let num = Math.trunc(c) + 200;
  price.innerText = "₹" + Number(num+50) + "-" + "₹" + Number(num + 100);
});

search.addEventListener("click", function () {
  city.innerText = to.value;
  tocity.innerText = name.value;

  let c = Math.random() * 1000;
  let num = Math.trunc(c) + 200;
  price.innerText = "₹" + num + "-" + "₹" + Number(num + 150);
});

exbutton.addEventListener("click", function () {
  window.location.href="./explore.html"
});