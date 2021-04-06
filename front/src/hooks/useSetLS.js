function setLocalStorage(id, name , price , img, quantity) {
    let cart = [];
    let product = { 'productId': id, 'name': name, 'price': price, 'img': img , 'quantity': quantity ? quantity: 1 };
 
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    let exists = false;
    cart.forEach((item, index) =>{
        if(item.productId === id) {
            cart[index] = product
            exists = true
        }
    })
    !exists && cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export default setLocalStorage;