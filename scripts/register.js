let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let text = document.querySelector("p");

let userdata = localStorage.getItem("user-data");
if (userdata === null) {
  userdata = [];
} else {
  userdata = JSON.parse(userdata);
}

form.addEventListener("submit", function () {
  event.preventDefault();

  data = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  //   console.log(data);
  //   console.log(userdata);

  if (name.value == "") {
    alert("Please fill the name");
    text.innerText = "please fill the name";
  } else if (email.value == "") {
    alert("Please fill the email");
  } else if (password.value == "") {
    alert("Please fill the password");
  } else {
    let flag = false;

    for (let i = 0; i < userdata.length; i++) {
      if (userdata[i].email == data.email) {
        flag = true;
      }
    }

    if (flag) {
      alert("email already registered");
    } else {
      userdata.push(data);

      localStorage.setItem("user-data", JSON.stringify(userdata));
      alert("Successfully registerd");
      window.location.href = "./index.html";
    }
  }
});
