const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menu.onclick=()=>{
nav.classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link=>{
link.onclick=()=>{
nav.classList.remove("active");
}
});

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".7s";

});
