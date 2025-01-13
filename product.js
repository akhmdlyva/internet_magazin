let baseUrl = window.location.href
let url = new URL(baseUrl)
let search = new URLSearchParams(url.search)
let category = search.get("category")
let id = search.get("id")
let endpoint = "https://fakestoreapi.com/products/" + id

if (category != null)
    endpoint += "/category/" + category

async function getProducts() {
    try {
        const response = await fetch(endpoint)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function basic() {
    let product = await getProducts()
    document.getElementById('image').src = product.image
    document.getElementById('title').innerText = product.title
    document.getElementById('price').innerText = product.price
    document.getElementById('comment').innerText = product.Comment
    document.getElementById('count').innerText = product.count
    document.getElementById('star').innerHTML = calculateRating(product.rating.rate)

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