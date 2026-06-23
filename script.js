const allBtn = document.getElementById("all-cookies");
if (allBtn) {
  allBtn.addEventListener("click", () => {
    window.location.href = "shop.html";
  });
}

const cartBtn = document.getElementById("shopnow");
if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    window.location.href = "cart-page.html";
  });
}
const backBtns=document.querySelectorAll(".backBtn");
backBtns.forEach(btn=>{

  btn.addEventListener("click",()=>{
    window.history.back();

  });
});

const addCartBtns= document.querySelectorAll(".cart");

  addCartBtns.forEach(btn=>{
  btn.addEventListener("click", () => {
    window.location.href = "cart-page.html";
  });
});
const hamburger=document.getElementById("hamburger");
const menu=document.getElementById("menu");
if(hamburger && menu){
  hamburger.addEventListener("click", () =>{
   if (menu.style.display=menu.style.display==="none" || menu.style.display===""){
    menu.style.display="block";
   }else{
    menu.style.display="none";
   }
   }
  );
}






