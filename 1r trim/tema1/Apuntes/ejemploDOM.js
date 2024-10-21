class Marca {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Modelo {
    constructor(nombre, marca) {
        this.nombre = nombre;
        this.marca = marca;
    }
}

var ford = new Marca("Ford");
var citroen = new Marca("Citroen");
var seat = new Marca("Seat");

var ffocus = new Modelo(ford, "Focus");
var fiesta = new Modelo(ford, "Fiesta");
var saxo = new Modelo(citroen, "Saxo");
var c4 = new Modelo(citroen, "C4");

var coches = [ffocus, fiesta, saxo, c4];

// console.log(coches);

var div = document.querySelector("#app");

var table = document.createElement("table");
table.id = "coches";

// console.log(table);

var thead = document.createElement("thead");

table.appendChild(thead);

var tr = document.createElement("tr");
thead.appendChild(tr);

var encabezado = ["Marca", "Modelo"];

var th;

for (valor of encabezado){
    th = document.createElement("th");
    th.innerText = valor;
    tr.appendChild(th);
}

var tbody = document.createElement("tbody");

table.appendChild(tbody);

var td;

for (let coche of coches){
    tr = document.createElement("tr");
    tbody.appendChild(tr)
    
    /*
    for (let atributo in coche){
        td = document.createElement("td");
        if (typeof(coche[atributo]) === "object") td.innerText = coche[atributo].nombre;
        else td.innerText = coche[atributo];
        tr.appendChild(td);
    }
    */

    for (let [clave, valor] of Object.entries(coche)) {
        td = document.createElement("td");
        if (typeof(valor) === "object") td.innerText = valor.nombre;
        else td.innerText = valor;
        tr.appendChild(td);
    }
    
}


document.querySelector("body").appendChild(table);