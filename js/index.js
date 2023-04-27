const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.content');




tabs.forEach((tab,index)=> {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        //var line = document.querySelector('.line');
//line.style.width = e.target.offsetWidth + "px";
//line.style.left = e.target.offsetLeft+ "px";
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');
    })
})



const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces__menu');
const barras = document.querySelectorAll('.ham span');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');


ham.addEventListener('click', ()=> {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    logo.classList.toggle('fuera');
});
enlaces.addEventListener('click', ()=> {
    enlaces.classList.toggle('desactivado');
});
/*Nav background scroll*/

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("abajo", window.scrollY>100);
})


