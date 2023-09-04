(() => {
let btnOpen = document.getElementById("btnOpen");
let btnClose = document.getElementById("btnClose");
btnOpen.onclick = () => {
    let login = document.getElementById("login");

    if(login.classList.contains("login-hidden")){
        login.classList.remove("login-hidden")
        login.classList.add("login-visible")
    }
    else{
        login.classList.remove("login-visible")
        login.classList.add("login-hidden")
    }
}
btnClose.onclick = () => {
    let login = document.getElementById("login");

    if(login.classList.contains("login-hidden")){
        login.classList.remove("login-hidden")
        login.classList.add("login-visible")
    }
    else{
        login.classList.remove("login-visible")
        login.classList.add("login-hidden")
    }
}
let btnCart = document.getElementById("btnCart");
let btnCartClose = document.getElementById("btnCartClose");

btnCart.onclick = () => {
    let cart = document.getElementById("cart");

    if(cart.classList.contains("cart-hidden")){
        cart.classList.remove("cart-hidden")
        cart.classList.add("cart-visible")
    }
    else{
        cart.classList.remove("cart-visible")
        cart.classList.add("cart-hidden")
    }
}
btnCartClose.onclick = () => {
    let cart = document.getElementById("cart");

    if(cart.classList.contains("cart-hidden")){
        cart.classList.remove("cart-hidden")
        cart.classList.add("cart-visible")
    }
    else{
        cart.classList.remove("cart-visible")
        cart.classList.add("cart-hidden")
    }
}
})()
