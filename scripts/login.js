let form = document.querySelector("form");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let text = document.querySelector("p");


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
  let name=null;
  for (let i = 0; i < userdata.length; i++) {
    if (
      email.value == userdata[i].email &&
      password.value == userdata[i].password
    ) {
      flag = true;
      name=userdata[i].name;
    }
  }

  if (flag == true) {
    alert("Sign in Successful");
    window.location.href = "./logout.html";
    localStorage.setItem("profile", JSON.stringify(name));

  } else {
    // alert("Wrong Credentials");
    text.innerText = "Wrong credentials";
    text.style.color="#FC541D"
  }
});
