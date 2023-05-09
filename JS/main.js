const gridElement = document.getElementById("grid")
console.log(gridElement);

const bottone = document.getElementById('bottone');
console.log(bottone);



// aggiungere evento al bottone
bottone.addEventListener('click',
function () {
// quindi al click deve comparire la griglia
    document.getElementById('grid').classList.add("active")
    

}
)



// creiamo i numeri ciclandoli

for (let i = 1; i <= 100; i++) {
    // console.log(i);


    const newSquare = createGridSquare();

// aggiunge ulteriore evento al click dello square
    newSquare.addEventListener("click",

    // quando l'utente clicca sul quadrato diventa blue e in console compare il numero selezionato
        function () {
            newSquare.classList.add("blue-click");
            console.log(i);
        }
    )
    // aggiungiamo all'html i quadrati e i numeri nei quadrati
    gridElement.append(newSquare);
    newSquare.append(i);
}












// FUNZIONI

// creazione span con classe square
function createGridSquare() {
    const newElement = document.createElement("span");
    newElement.classList.add("square");
    return newElement;
}