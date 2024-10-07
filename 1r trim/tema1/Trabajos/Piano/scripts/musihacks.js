class Nota {
    constructor(nom, tipus) {
        this.nom = nom;
        this.tipus = tipus;
    }

    equals(nota) {
        return this.nom == nota.nom && this.tipus == nota.tipus;
    }

    /*
        constructor(nom, tipus, tempo) {
            this.nom = nom;
            this.tipus = tipus;
            this.tempo = tempo;
        }
    */
}

const partitures = [
    {   
        nom: 'Himno de la alegría', 
        notes:[
            new Nota('Si', 'natural'),
            new Nota('Si', 'natural'),
            new Nota('Do', 'natural'),
            new Nota('Re', 'natural'),
            new Nota('Re', 'natural'),
            new Nota('Do', 'natural'),
            new Nota('Si', 'natural'),
            new Nota('La', 'natural'),
            new Nota('Sol', 'natural'),
            new Nota('Sol', 'natural'),
            new Nota('La', 'natural'),
            new Nota('Si', 'natural'),
            new Nota('Si', 'natural'),
            new Nota('La', 'natural'),
            {nom:'Re', estat:'natural'},
            {nom:'Do', estat:'natural'},
            {nom:'Si', estat:'natural'},
        ]
    }
];

function addCerca(nom, tipus, cerca) {
    cerca.push(new Nota(nom, tipus));
}

function cercador(cerca){
    resultat = [];
    for (let partitura of partitures){
        console.log(partitura.notes);
        console.log(cerca);
        if (partitura.notes.includes(cerca)){ // no se mete al if. Por algun motivo, al crear notas identicas y compararlas, el método includes las declara distintas.
            resultat.push(partitura);
        }
        /* Para comparar con el metodo equals de la clase Nota, deberia hacer una clase Partitura, con un método contains, que simule el funcionamiento de includes */
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