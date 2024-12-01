import {products} from "./products.js";


//sign-up

var offerBar = document.querySelector(".sign-up")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)


var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
const elements = [
    document.getElementById("new-arrival1"),
    document.getElementById("most-wanted1"),
    document.getElementById("side-navbar-close")
];

sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})


elements.forEach(element => {
    if (element) { 
        element.addEventListener("click", () => {
            document.querySelector(".side-navbar").style.marginLeft = "-60%";
        });
    }
});



var login=document.getElementById("login")
var loginpopup= document.querySelector(".login")
var loginclose=document.getElementById("loginclose")
var login2=document.getElementById("login2")

login.addEventListener("click", function(){
    loginpopup.style.display="flex";
})

login2.addEventListener("click", function(){
    loginpopup.style.display="flex";
})

loginclose.addEventListener("click", function(){
    loginpopup.style.display="none";
})



var container=document.querySelector(".products")
products.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img style="width: 20vw;" src="images/${product.src}">
    <h2>${product.name}</h2>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})

var filterList =[]
var tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }

        
       
    })
})



function update() {
    var enteredValue = search.value.toUpperCase(); // Get the search input value
    var productList = document.querySelectorAll(".product");

    productList.forEach((product) => {
        var check = false;

        // Check tag filters
        var tagsElement = product.querySelector("tags").innerHTML;
        const tempFilterArray = tagsElement.split(',');

        filterList.forEach((j) => {
            if (tempFilterArray.includes(j)) {
                check = true;
            }
        });

        // Check search input
        var productNameElement = product.querySelector("h2");
        var matchesSearch = true;

        if (productNameElement) {
            var productName = productNameElement.textContent || "";
            matchesSearch = productName.toUpperCase().indexOf(enteredValue) >= 0;
        }

        // Apply visibility based on both filters
        if ((!check && filterList.length > 0) || !matchesSearch) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
}



var search = document.getElementById("search");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    // Select all product elements
    var productList = document.querySelectorAll(".product");

    productList.forEach((product) => {
        var productNameElement = product.querySelector("h2");

        if (productNameElement) {
            var productName = productNameElement.textContent || "";

            // Check if entered value matches product name
            if (productName.toUpperCase().indexOf(enteredValue) < 0) {
                product.style.display = "none";
            } else {
                product.style.display = "block";
            }
        }
    });
});

// Select the cart icon by its ID
//var cartIcon = document.getElementById("cartIcon");

// Add a click event listener
//cartIcon.addEventListener("click", function () {
//    alert("Your cart is empty!");
//});


var modal = document.getElementById("cart");

var closeBtn = document.getElementById("close-btn");


var cartIcons = [document.getElementById("cartIcon"), document.getElementById("cart-Icon")];

cartIcons.forEach(function (icon) {
  if (icon) {
    icon.addEventListener("click", function () {
      modal.style.display = "block";
    });
  } 
});

  


closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});


