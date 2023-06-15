let form = document.querySelector("form");
let password = document.querySelector("#password");
let email = document.querySelector("#email");

let userdata = localStorage.getItem("user-data");
if (userdata === null) {
  userdata = [];
} else {
  userdata = JSON.parse(userdata);
}

form.addEventListener("submit", function () {
  event.preventDefault();

  console.log("hi");
  let flag = false;

  for (let i = 0; i < userdata.length; i++) {
    if (
      email.value == userdata[i].email &&
      password.value == userdata[i].password
    ) {
      flag = true;
    }
  }

  if (flag == true) {
    alert("Sign in Successful");
    window.location.href = "./index.html";
  } else {
    alert("Wrong Credentials");
  }
});
