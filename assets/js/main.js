function scrollToElement(elementSelector, instance=0){
    const elements = document.querySelectorAll(elementSelector);

    if(elements.length>instance){
        elements[instance].scrollIntoView({ behavior: "smooth" });
    }
}
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");


link1.addEventListener("click", () => {
  scrollToElement(".abtcnt1");
});

link2.addEventListener("click", () => {
  scrollToElement(".frontendtech");
});

link3.addEventListener("click", () => {
  scrollToElement(".heading");
});
link4.addEventListener("click", () => {
  scrollToElement(".contact");
});
link5.addEventListener("click", () => {
  scrollToElement(".header");
});


function HandleBar(){
    let bar = document.getElementById('bars');
    let navbar = document.getElementById('navbar')
    let closenav = document.getElementById("closenav");
        navbar.style.display='flex'
        bar.style.display='none'
        closenav.style.display = "inline";
        navbar.style.transition='all 0.3s ease'
}
function CloseBar(){
    let closenav = document.getElementById('closenav');
    let navbar = document.getElementById("navbar");
    let bar = document.getElementById("bars");
       navbar.style.display = "none";
       closenav.style.display = "none";
       bar.style.display = "block";
     
}
