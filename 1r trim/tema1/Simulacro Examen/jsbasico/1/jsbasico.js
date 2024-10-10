let obj = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2020,
    secretBase: "Super tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};

function barras(){
    return "-------";
}

function titulo(escuadron, ciudad, fecha) {
    let resultado = "";
    resultado = resultado.concat(barras(), barras(), barras());
    resultado = resultado.concat(escuadron);
    resultado = resultado.concat(barras(), barras(), barras(), "\n");

    resultado = resultado.concat(barras());
    resultado = resultado.concat("Ciudad de origen: ", ciudad);
    resultado = resultado.concat(" // Fecha de origen: ", fecha);
    resultado = resultado.concat(barras(), "\n");
    return resultado;
}

function cuerpo(members) {
    let resultado = "";
    for (let member of members) {
        resultado = resultado.concat("Nombre: ", member.name, "\n");
        resultado = resultado.concat("Edad:", member.age, "\n");
        resultado = resultado.concat("Identidad secreta:", member.secretIdentity, "\n");
        resultado = resultado.concat("Poderes: " + member.powers[0]);

        for (let current = 1; current < member.powers.length; current++) {
            resultado = resultado.concat(", " + member.powers[current]);
        }
        resultado = resultado.concat("\n", barras(), barras(), barras(), "\n");
    }
    return resultado;
}

function main(){
    let resultado = titulo(obj.squadName, obj.homeTown, obj.formed);
    resultado = resultado.concat(cuerpo(obj.members));
    console.log(resultado);
}

window.onload = main;