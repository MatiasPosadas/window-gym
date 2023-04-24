const btnZumba = document.getElementById("btn-zumba");
const btnBachata = document.getElementById("btn-bachata");
const zumba = document.getElementById("zumba");
const bachata = document.getElementById("bachata");
const clases = document.querySelector('.horarios');


btnZumba.addEventListener("click", ()=> {
        zumba.classList.add("verHorario");
});

btnBachata.addEventListener("click", ()=> {
    bachata.classList.toggle("verHorario");
});
