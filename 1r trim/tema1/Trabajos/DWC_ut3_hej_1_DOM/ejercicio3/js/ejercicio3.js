const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];
const lista = document.createElement("ul");

document.querySelector("body").appendChild(lista);

let li;
for (let nombre of nombres){
    li = document.createElement("li");
    li.innerText = nombre;
    lista.appendChild(li);
}