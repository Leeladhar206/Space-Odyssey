
let p= document.querySelector("#datetext");
let datein= document.querySelector("#date")

let name= document.querySelector("#cityname");
let search= document.querySelector("#search")
let city= document.querySelector("#city");

let price= document.querySelector("#price")

datein.addEventListener("input",function(){
    
    p.innerText= datein.value
})

search.addEventListener("click", function(){
    city.innerText= name.value;

    let c= Math.random()*1000;
    let num= Math.trunc(c)+200;
    price.innerText="$"+num+"-"+"$"+Number(num+150);
})