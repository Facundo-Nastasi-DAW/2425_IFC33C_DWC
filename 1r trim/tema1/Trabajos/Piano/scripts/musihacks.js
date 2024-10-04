var partituras = [
    {nom: 'Himno de la alegría', 
        partitura:{ notas:[
                {nom: 'Si', tipus: 'natural'},
                {nom: 'Si', tipus: 'natural'},
                {nom: 'Do', tipus: 'natural'},
                {nom: 'Re', tipus: 'natural'},
                {nom: 'Re', tipus: 'natural'},
                {nom: 'Do', tipus: 'natural'},
                {nom: 'Si', tipus: 'natural'},
                {nom: 'Sol', tipus: 'natural'},
                {nom: 'Sol', tipus: 'natural'},
                {nom: 'La', tipus: 'natural'},
                {nom: 'Si', tipus: 'natural'},
                {nom: 'Si', tipus: 'natural'},
                {nom: 'La', tipus: 'natural'},
            ]
        }
    },
    {}
];

class Nota {
    constructor(nom, tipus) {
        this.nom = nom;
        this.tipus = tipus;
    }

    /*
        constructor(nom, tipus, tiempo) {
            this.nom = nom;
            this.tipus = tipus;
            this.tiempo = tiempo;
        }
    */
}

function addCerca(nom, tipus, cerca) {
    cerca.push(new Nota(nom, tipus));
}

function cercador(cerca){
    resultat = [];
    for (let partitura of partituras){
        if (partitura.notas.includes(cerca)){
            resultat.push(partitura);
        }
    }
    console.log(resultat);
}

function pruebas(){
    let muestra = [
                    {nom:'Re', tipus:'natural'},
                    {nom:'Do', tipus:'natural'},
                    {nom:'Si', tipus:'natural'}
                ];
    let cerca = [];
    for (let nota of muestra){
        addCerca(nota.nom, nota.tipus, cerca);
    }

    cercador(cerca);
}