showProducts();

async function showProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  data.forEach((element) => {
    document.getElementById("cards").innerHTML += `
     <div class="d-flex flex-column justify-content-between border shadow card">
      <div class="">
        <img
          src="${element.image}"
          alt=" ${element.title}"
          width="170px"
          height="180px"
          class="object-fit-contain border w-100 p-2 bg-body-tertiary rounded-top"
        />
      </div>
      <div class="p-3 ">
        <h6 class = "fs-5">
          ${element.title}
        </h6>
         <p class ="">${element.description.slice(0 , 50)}.....</p>
        <p class = "fw-bold">Ratings : ${element.rating.rate}/5 (${element.rating.count})</p>
        <h3> Price : <sup>₹</sup>${element.price*100}</h3>
      </div>
      <div class ="d-flex justify-content-around">
      <button class="btn btn-warning m-3">ADD to Cart</button>
      <button class="btn btn-warning m-3">Buy Now</button>
      </div>
       </div>`;
  });




  
}
