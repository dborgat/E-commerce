function removeProduct(productId){
    let storageCart = JSON.parse(localStorage.getItem('cart'));
    let products = storageCart.filter(product => product.productId !== productId );
    localStorage.setItem('cart', JSON.stringify(products));
}
export default removeProduct;