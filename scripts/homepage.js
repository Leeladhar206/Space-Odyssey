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
});

search.addEventListener("click", function () {
  city.innerText = to.value;
  tocity.innerText = name.value;

  let c = Math.random() * 1000;
  let num = Math.trunc(c) + 200;
  price.innerText = "$" + num + "-" + "$" + Number(num + 150);
});
exbutton.addEventListener("click", function () {
  window.location.href =
    "https://www.google.com/search?q=cities+to+explore+in+india&rlz=1C1ONGR_enIN1035IN1035&sxsrf=APwXEde9IDGgPyrDMKna9z92lea9fmP6PA%3A1686907912530&ei=CCyMZPiFILaQ4-EP3KCJqAM&oq=cities+to+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMggIABCKBRCRAjIHCAAQigUQQzIHCAAQigUQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6CggAEIoFELADEEM6CgguEIoFELADEEM6BwgjEIoFECc6CwguEIAEEMcBEK8BOgoIABCABBAUEIcCOgcIIxDqAhAnOg0ILhDHARDRAxDqAhAnOg8IABCKBRDqAhC0AhBDGAE6DwguEIoFEOoCELQCEEMYAToVCAAQAxCPARDqAhC0AhCMAxDlAhgCOhUILhADEI8BEOoCELQCEIwDEOUCGAI6DQguEMcBENEDEIoFECc6BAgjECc6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToZCC4QxwEQ0QMQigUQlwUQ3AQQ3gQQ4AQYAzoNCC4QigUQxwEQ0QMQQzoLCAAQigUQsQMQgwE6CwguEIAEELEDENQCOg4ILhCABBCxAxDHARCvAToRCC4QigUQsQMQgwEQxwEQrwE6FgguEIoFEMcBEK8BEJgFEJ4FEJkFEEM6EwguEIoFELEDEIMBEMcBENEDEEM6CggAEIoFELEDEEM6CgguELEDEIoFEEM6CAgAEIoFELEDSgQIQRgAUJw2WMBgYPODAWgCcAF4BIAB5AGIAcwUkgEGMC4xNS4ymAEAoAEBsAEUwAEByAEK2gEGCAEQARgB2gEGCAIQARgL2gEGCAMQARgU&sclient=gws-wiz-serp&bshm=ncc/1";
});