
//This is for showing different product images on product page
const productImages = document.querySelectorAll(".product-images img");
const productActiveImage = document.querySelector(".active-image .active");

let activeImage = 0;//default selected images which is the first one

productImages.forEach((item, i) => {
    item.addEventListener('click', () =>{
        productImages[activeImage].classList.remove('active');
        item.classList.add('active');
        productActiveImage.src = item.src;
        activeImage = i;
    })
})

//This is for selecting radio size button

const sizebtn = document.querySelectorAll('.size-radio-button');
let checkedbtn = 0;//default selected button which is the first one

sizebtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizebtn[checkedbtn].classList.remove('check');
        item.classList.add('check');
        checkedbtn = i;
    })
})

//for profile name and login logout display
const profileimagebtn = document.getElementById("profileimg");
const profilePopup = document.querySelector(".login-logout-popup");
const popuptext = document.querySelector(".account-name");
const loginOutBtn = document.querySelector(".login-out-btn");

profileimagebtn.addEventListener('click', () => {
  if (profilePopup.style.display == 'none'){
    profilePopup.style.display  = "block";
  }
  else{
    profilePopup.style.display = "none";
  }
})

window.onload = () => {
  let Username = localStorage.getItem("username")
  if (Username != null){
    popuptext.innerHTML = `Hi, ${Username}`;
    loginOutBtn.innerHTML = 'Log out';
    loginOutBtn.addEventListener('click', () => {
      localStorage.removeItem("username")
      window.location.reload(); 
    })
  }
  else{
    popuptext.innerHTML = 'Log in in order to place order';
    loginOutBtn.innerHTML = 'Log in';
    loginOutBtn.addEventListener('click', () => {
      location.href = '/Signin.html'
    })

  }
}


const image = document.querySelectorAll(".product-images img");
const activeIMG = document.querySelectorAll(".active-image img");
const productname = document.querySelector(".details .product-name");
const productprice = document.querySelector(".details .product-price");
const productoriginalprice = document.querySelector(".details .product-original-price");
const productdesc = document.querySelectorAll(".desc-list .desc-line");

image[0].src = localStorage.getItem("src1");
image[1].src = localStorage.getItem("src2");
activeIMG[0].src = localStorage.getItem("src1");
productname.innerHTML = localStorage.getItem("name");
productprice.innerHTML = localStorage.getItem("price");
productoriginalprice.innerHTML = localStorage.getItem("Originalprice");
productdiscount.innerHTML = localStorage.getItem("discount");

//Change the product desc
productdesc[0].children[1].innerHTML = localStorage.getItem("color");
productdesc[1].children[1].innerHTML = localStorage.getItem("size&fit");
productdesc[2].children[1].innerHTML = localStorage.getItem("material");