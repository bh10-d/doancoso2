
function select() {
    document.querySelector(".drop").classList.toggle("show");
}

//dropdown for nav-mobile
function dropdownnav() {
    document.querySelector(".arrow i").classList.toggle("rotage0");
    document.querySelector(".responsive__nav--list").classList.toggle("show");
}

//login-signup
function changetosignup() {
    document.querySelector(".login__block--signup").classList.remove("hidden")
    document.querySelector(".login__block").classList.add("hidden")
    document.querySelector("title").innerHTML = "Đăng ký"
}
function changetologin() {
    document.querySelector(".login__block--signup").classList.add("hidden")
    document.querySelector(".login__block").classList.remove("hidden")
    document.querySelector("title").innerHTML = "Đăng nhập"
}