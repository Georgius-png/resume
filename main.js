let about = document.querySelector(".about"); 
let secondSection = document.querySelector(".section-second")
let firstSection = document.querySelector(".section-first")
let hamburger = document.querySelector(".hamburger-menu")
let closeSecondSection = document.querySelector(".close")
let navBar = document.querySelector(".nav-items")
let header = document.querySelector(".header")
var showMenu = false;

var change = document.querySelector(".change")


hamburger.addEventListener("click", function(){
   if(!showMenu){
       showMenu = true; 
        navBar.style.display = "flex"
        navBar.style.visibility = "visible"

   }
       else {
        showMenu = false ;
        navBar.style.display = "none"
        navBar.style.visibility = "hidden"
       }
       header.classList.toggle("change")
       
})

// about.addEventListener("click", function() {
//     change.classList.toggle("change")
// })

