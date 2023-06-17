

const url = 'https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=Berlin&countryName=Germany';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f031a51ca3mshd94546e5ba7b5acp1e16b8jsnc3583561d118',
    'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
  }
};
call();
async function call(){

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function display(data) {
    container.innerHTML = "";

    data.results.forEach((a) => {
      const div = document.createElement("div");
      const title = document.createElement("h3");
      const price = document.createElement("h4");
      const description = document.createElement("p");
      const category = document.createElement("p");
      const image = document.createElement("img");
      const cart = document.createElement("button");
      // const rating= document.createElement("p");

      title.innerText = a.id;
    //   price.innerText = a.price;
    //   description.innerText = a.description;
    //   category.innerText = category.id;
    //   image.setAttribute("src", a.image);
    //   cart.innerText = "Add to Cart";
      // rating.innerText= a.rating;

      
        lsdata.push(a);
        localStorage.setItem("ecommerse", JSON.stringify(lsdata));
    

      div.append(title);
      container.append(div);
    });
  }