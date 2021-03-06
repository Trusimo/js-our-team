// Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
// Definiamo un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Milestone 1:
// stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
// Milestone 2:
// stampare i dati all’interno di un contenitore nella pagina html in modo dinamico,
// creando per ciascun membro del team un elemento html che conterrà i suoi dati.

// Creo un array con 6 oggetti, i membri del team
const team = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        posizione: "Founder & CEO"
    },
    {
        nome: "Angela",
        cognome: "Carroll",
        posizione: "Chief Editor"
    },
    {
        nome: "Walter",
        cognome: "Gordon",
        posizione: "Office Manager"
    },
    {
        nome: "Angela",
        cognome: "Lopez",
        posizione: "Social Media Manager"
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        posizione: "Developer"
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        posizione: "Graphic Designer"
    }
]

// stampo in console e in HTML gli oggetti uno per uno
for (let i = 0; i < team.length; i++) {
    const membro = team[i];
    console.log(membro.nome, membro.cognome + ", " + membro.posizione);
    const card = document.createElement("div");
    card.append(membro.nome + " " + membro.cognome + ", " + membro.posizione);

    const contenitore = document.getElementById("contenitore")
    contenitore.append(card)
}