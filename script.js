//sin-up bar

var offerBar = document.querySelector(".sign-up")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

//side navbar

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


//login

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

//slider

var sliderleftbutton = document.getElementById("left-action")
var sliderrightbutton =document.getElementById("right-action")
var sliderimage= document.querySelector(".slider-images")
var slidermargin=0


sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)





//like button

var likebutton=document.querySelectorAll(".like")

likebutton.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("Black-Heart")>0)
        {
            e.target.src="images/Red-heart.png"
        }
        else{
            e.target.src="images/Black-Heart.png"
        }
    })
})


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
