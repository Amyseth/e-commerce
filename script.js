const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");


// if (bar){
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//         console.log("clicked");
//     })
// }
// if (close){
//     close.addEventListener('click', () => {
//         nav.classList.remove('active');
//     })
// }
function handleBarClick() {
    if (nav) {
        nav.classList.add('active');
    }
}
function handleCloseClick() {
    if (nav) {
        nav.classList.remove('active');
    }
}
if (bar) {
    bar.addEventListener('click', handleBarClick);
}
if (close) {
    close.addEventListener('click', handleCloseClick);
}
fetch('products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product_id');

    if (productId === null) {
      console.error('Product ID is missing');
      return;
    }

    const product = data[productId];

    if (product === undefined) {
      console.error('Product not found');
      return;
    }

    document.getElementById('product-name').innerHTML = product.name;
    document.getElementById('product-description').innerHTML = product.description;
    document.getElementById('product-image').src = product.image;
  })
  .catch(error => console.error('Error:', error));