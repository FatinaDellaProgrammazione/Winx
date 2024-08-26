alert('EEEEEENCHAAAANTIIIIIIX WOOOOHOWOOOOOOHO ENCHANTIIIIX (stavolta davvero)')

const pulsantiCarosello = document.querySelectorAll(".pulsante");
const immagini = document.querySelectorAll(".immagine");
const informazioni = document.querySelectorAll(".informazione")
//.log è un metodo. document è l'oggetto che a sua volta avrà un metodo//

//-passo 2- trovare un modo per identificare il click dell'utente sul bottone//
 pulsantiCarosello.forEach ((pulsante, indice) => {
    pulsante.addEventListener("click", () => {
        deselezionaPulsante();

        pulsante.classList.add("selezionato");

        eliminaImmaginePrecedente();

        immagini[indice].classList.add("attiva");

        eliminaInfoPrecedente();

        informazioni[indice].classList.add("attiva");
    });
});


function eliminaInfoPrecedente() {
    const informazioneAttiva = document.querySelector(".informazione.attiva");
    informazioneAttiva.classList.remove("attiva");
}

function eliminaImmaginePrecedente() {
    const immagineAttiva = document.querySelector(".attiva");
    immagineAttiva.classList.remove("attiva");
}

function deselezionaPulsante() {
    const pulsanteSelezionato = document.querySelector(".selezionato");
    pulsanteSelezionato.classList.remove("selezionato");
}

var x =document.getElementById("musica");
function mouseOver () {
    x.play();
}