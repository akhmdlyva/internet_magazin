let baseUrl = window.location.href
let url = new URL(baseUrl)
let search = new URLSearchParams(url.search)
let category = search.get("category")
let endpoint = "https://fakestoreapi.com/products"

if (category != null)
    endpoint += "/category/" + category


async function getAllProducts() {
    try {
        const response = await fetch(endpoint)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function basic() {
    const products = await getAllProducts()
    let items = document.getElementById('items')
    for (let i = 0; i < products.length; i++) {
        items.innerHTML += `
   <div class="col-3 mb-5">
   <div class="card border-0">
   <div class="d-flex p-3 justify-content-center">
   <a href="product.html?id=${products[i].id}">
   <img class="card-img" 
   style="width: 200px;height: 200px"
   src="${products[i].image}" alt="">
</a>
</div>
  <div class="py-2 fs-5 text-center bg-dark text-white rounded-bottom-2">
  <span class="bi bi-cart"></span>
  Add To Cart
</div>
</div>
<div class="fs-4 fw-bold px-2">
    <div class="text-one-line mt-2">
          ${products[i].title}
     </div>
     <div class="text-danger mt-2">
      ${products[i].price}
     </div>
     <div style="color:orange;" class="mt-2">
     ${calculateRating(products[i].rating.rate)}
     <span>
     (${products[i].rating.count})
     </span>
     </div>
</div>
</div>
   `
    }

}

basic()

function calculateRating(rate) {
    let rateNumber = parseInt(rate)
    if (rateNumber < 2) {
        return `
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star"><span        
          <span class="bi bi-star"><span        
          <span class="bi bi-star"><span        
          <span class="bi bi-star"><span        
        `

    }
    if (rateNumber < 3) {
        return `
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star"><span        
          <span class="bi bi-star"><span        
          <span class="bi bi-star"><span        
        
        `
    }
    if (rateNumber < 4) {
        return `
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star"><span        
          <span class="bi bi-star"><span        
        
    `
    }
    if (rateNumber < 5) {
        return `
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star"><span
     `
    }
    if (rateNumber >= 5) {
        return `
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span        
          <span class="bi bi-star-fill"><span
     `
    }
}