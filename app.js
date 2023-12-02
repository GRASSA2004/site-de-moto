 var menu_toogle = document.querySelector(".menu_toogle");
 var menu = document.querySelector(".menu");
 var menu_toogle_span = document.querySelector(".menu_toogle span");

menu_toogle.addEventListener("click",()=>{
    menu_toogle.classList.toggle('active');
    menu_toogle_span.classList.toggle('active');
    menu.classList.toggle('responsive');
});