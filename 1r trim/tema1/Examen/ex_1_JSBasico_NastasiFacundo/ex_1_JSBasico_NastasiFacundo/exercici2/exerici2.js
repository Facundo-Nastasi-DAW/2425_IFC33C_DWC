const llibres = [
    {
        títol: "El Petit Príncep",
        autor: {
            nombre: "Antoine",
            apellidos: "de Saint-Exupéry"
        },
        preu: 15.50,
        ISBN: "978-3-16-148410-0",
        editorial: "Editorial Juventud",
        numeroDeEdicio: 1,
        anyDePublicacio: 1943,
        generos: ["Infantil", "Filosofia"]
    },
    {
        títol: "1984",
        autor: {
            nombre: "George",
            apellidos: "Orwell"
        },
        preu: 12.30,
        ISBN: "978-0-452-28423-4",
        editorial: "Signet Classics",
        numeroDeEdicio: 1,
        anyDePublicacio: 1949,
        generos: ["Ficció", "Dystopia"]
    },
    {
        títol: "La casa dels esperits",
        autor: {
            nombre: "Isabel",
            apellidos: "Allende"
        },
        preu: 18.00,
        ISBN: "978-84-204-8276-8",
        editorial: "Plaza & Janés",
        numeroDeEdicio: 2,
        anyDePublicacio: 1982,
        generos: ["Ficció", "Realisme Màgic"]
    },
    {
        títol: "Cien años de soledad",
        autor: {
            nombre: "Gabriel",
            apellidos: "García Márquez"
        },
        preu: 20.00,
        ISBN: "978-0-06-088328-7",
        editorial: "Harper & Row",
        numeroDeEdicio: 1,
        anyDePublicacio: 1967,
        generos: ["Ficció", "Realisme Màgic"]
    },
    {
        títol: "Moby Dick",
        autor: {
            nombre: "Herman",
            apellidos: "Melville"
        },
        preu: 14.50,
        ISBN: "978-1-56619-909-4",
        editorial: "Pleiades Press",
        numeroDeEdicio: 1,
        anyDePublicacio: 1851,
        generos: ["Ficció", "Aventura"]
    }
];

function Autor(nombre, apellidos){
    this.nombre = nombre;
    this.apellidos = apellidos;
}

function Llibre(titol, autor, preu, isbn, editorial, numeroDeEdicio, anyDePublicacio, generos){
    this.titol = titol;
    this.autor = autor;
    this.preu = preu;
    this.isbn = isbn;
    this.editorial = editorial;
    this.numeroDeEdicio = numeroDeEdicio;
    this.anyDePublicacio = anyDePublicacio;
    this.generos = generos;
}

let llibresObj = [];
for (let llibre of llibres){
    llibresObj.push(
                        new Llibre(
                            llibre["títol"],
                            new Autor(
                                llibre["autor"]["nombre"],
                                llibre["autor"]["apellidos"]
                            ),
                            llibre["preu"],
                            llibre["ISBN"],
                            llibre["editorial"],
                            llibre["numeroDeEdicio"],
                            llibre["anyDePublicacio"],
                            llibre["generos"]
                        )
                    );
}