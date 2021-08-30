//bars
// function bars() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }




//dropdown for nav-mobile

// let listnav = document.querySelector(".responsive_nav_list_e");
function dropdownnav() {
    document.querySelector(".arrow i").classList.toggle("rotage0");
    document.querySelector(".responsive__nav--list").classList.toggle("show");
}