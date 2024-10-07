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

class Partitura {
    constructor(nom, notes) {
        this.nom = nom;
        this.notes = notes;
    }

    contains(notes) {
        let index = 0;
        for (let nota of this.notes){
            if (nota.equals(notes[index])){
                index++;
                if (index == notes.length) return true;
                continue
            }
            index = 0;
            if (nota.equals(notes[index])) index++;
        }
        return false;
    }
}

const partitures = [
    new Partitura(
        'Himno de la alegría',
        [
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
        ]
    )
];

function addCerca(nom, tipus, cerca) {
    cerca.push(new Nota(nom, tipus));
}

function cercador(cerca){
    resultat = [];
    for (let partitura of partitures){
        if (partitura.contains(cerca)){
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