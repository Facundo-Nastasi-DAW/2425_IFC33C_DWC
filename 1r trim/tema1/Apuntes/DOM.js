var v2 = document.getElementsByName("sexo");
console.log("getElementsByName('sexo')", v2)

var V3 = document.getElementsByTagName("input")
console.log("getElementsByTagName('input')", V3)

var v4 = document.getElementsByClassName("sexo");
console.log('document.getElementsByClassName("sexo")', v4)

var v0 = document.getRootNode();

var v1 = document.getElementsByTagName("body");

console.log(v1[0]);
console.log(v1[0].childNodes);
console.log(v1[0].children);
console.log(v1[0].parentElement);
console.log(v1[0].children[0].nextSibling);

var v6 = document.createElement("h2");
v6.innerHTML = "Hola <span style='color: red'>tú</span>"
v1[0].appendChild(v6);