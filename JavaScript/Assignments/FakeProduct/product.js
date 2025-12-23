async function pro() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  data.forEach((element) => {
    document.getElementById("hori").innerHTML += `
    <div class="row border mb-3 shadow">
        <div class="col-4 p-2 d-flex justify-content-center bg-body-tertiary">
          <img
          src="${element.image}"
          alt="product Image" width=200px" height="250px" 
          class = "rounded object-fit-contain"/>
        </div>
        <div class="col-8 p-4">
          <h4>${element.title}</h4>
          <p>
            ${element.description.slice(0, 50)}.....
          </p>
          <p>Ratings : ${element.rating.rate}/5 (${element.rating.count})</p>
          <p class="fs-5 fw-bold">Price : <sup>₹</sup> ${
            element.price * 100
          }</p>
          <div>
            <button class="btn btn-warning">Add to Cart</button>
            <button class="btn btn-warning">Buy Now</button>
          </div>
        </div>
      </div>
      
      `;
  });
}

pro();
