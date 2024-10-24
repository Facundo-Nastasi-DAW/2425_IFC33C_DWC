/**
 * Classifica una persona segons la seva edat.
 * @param {number} edat - L'edat de la persona.
 * @returns {string} - La classificació de la persona.
 */
function classificarPerEdat(edat) {
    let classificacio;

    // AÑADIR EL CÓDIGO DEL PUNT 1 AQUÍ

    /*
        if (edat < 0){
            classificacio = "Edat no vàlida";
        }
        else if (edat <= 12){
            classificacio = "Nena/o";
        }
        else if (edat <= 17){
            classificacio = "Adolescent";
        }
        else if (edat <= 64){
            classificacio = "Adult";
        }
        else {
            classificacio = "Persona gran";
        }
    */

    switch(true){
        case(edat < 0):
            classificacio = "Edat no vàlida";
            break;
        case(edat <= 12):
            classificacio = "Nena/o";
            break;
        case(edat <= 17):
            classificacio = "Adolescent";
            break;
        case(edat <= 64):
            classificacio = "Adult";
            break;
        default:
            classificacio = "Persona gran";
    }

    return classificacio;
}

// Array d'objectes que representen pacients
const pacients = [
    { nom: "Laura", edat: 5 },
    { nom: "Javier", edat: 15 },
    { nom: "Rosa", edat: 25 },
    { nom: "Antonio", edat: 70 },
    { nom: "Sofia", edat: -3 },
];

// Classificació i impressió de cada pacient
let pacientString;
for (const pacient of pacients) {
    // AÑADIR EL CÓDIGO DEL PUNTO 2 AQUÍ

    pacientString = "A la pacient ";
    pacientString = pacientString.concat(pacient.nom, " (edat: ", pacient.edat, ")");
    pacientString = pacientString.concat(", la classificació és: ", classificarPerEdat(pacient.edat));
    console.log(pacientString);
}