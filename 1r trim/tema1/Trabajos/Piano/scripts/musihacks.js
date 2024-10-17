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

    /*
    No funciona correctamente.
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
    */

    contains(notes) {
        let trobat;
        for (let p = 0; p < this.notes.length - notes.length; p++){
            trobat = true;
            for (let c = 0; c < notes.length; c++){
                if(!this.notes[p + c].equals(notes[c])){
                    trobat = false;
                    break;
                }
            }
        }
        return trobat;
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
    ),
    new Partitura(
        'La Balaguera',
        [
            new Nota("DO", "natural"),
            new Nota("RE", "natural"),
            new Nota("MI", "natural"),
            new Nota("FA", "natural"),
            new Nota("SOL", "natural"),
            new Nota("SOL", "natural"),
            new Nota("LA", "natural"),
            new Nota("LA", "natural")
        ]
    ),
    new Partitura(
        'Happy Birthday',
        [
            new Nota("Do", "natural"),
            new Nota("Do", "natural"),
            new Nota("Re", "natural"),
            new Nota("Do", "natural"),
            new Nota("Fa", "natural"),
            new Nota("Mi", "natural"),
            new Nota("Do", "natural"),
            new Nota("Do", "natural"),
            new Nota("Re", "natural"),
            new Nota("Do", "natural"),
            new Nota("Sol", "#"),
            new Nota("Fa", "#")
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