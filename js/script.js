// DATA
const photoBlogGridElements = document.getElementById("photo-blog-grid")
const overlayElement = document.querySelector(".overlay")
const overlayItemImgElement = document.getElementById("overlay-item-img")
const btnCloseItemElement = document.querySelector(".btn-close-item")

console.log(photoBlogGridElements, overlayElement, overlayItemImgElement, btnCloseItemElement);


// FUNCTIONS

/**
 * Funzione che tramite una chiamata AJAX ottiene degli oggetti da un API e crea un nodo HTML che aggiunge delle cards per la "photo-blog-section"
 * @param {object} // nodo HTML
 * @returns {object} // nodo HTML 
 */
function getPhoto(element) {
    // Effettuo una chiamata AJAX tramite AXIOS all'API di JSON Placeholder
    axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=6`)
    .then((response) => {
        console.log(response, response.data);

        // Creo ciclo forEach con l'array di oggetti presi dalla chiamata
        response.data.forEach(curElement => {
            console.log(curElement);

            // Creo due variabili le quali assegno le proprietà (chiave/valore) URL & TITLE dall'oggetto corrente
            let url = curElement.url;
            let title = curElement.title;
            console.log(url, title);

            // Creo un nodo HTML ed inserisco le due varibili URL & TITLE nel codice rendendolo dinamico
            element.innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="${url}" class="card-img-top" alt="photo">
                        <div class="card-body" style="height: 80px">
                            <h5 class="card-title">${title}</h5>
                        </div>
                    </div>
                </div>
            `;
        });

        // Prendo tutti gli elementi card dal nodo HTML
        const cardsElements = document.querySelectorAll(".card")
        console.log(cardsElements);

        // Creo un ciclo forEach con l'arrey di elementi presi sopra
        cardsElements.forEach(curCard => {
            console.log(curCard);

            // Per ogni elemento aggingo un evento click
            curCard.addEventListener("click", () => {
                // console.log(`click`);
                overlayElement.classList.remove("hide");

                // Aggiungo l'img per ogni overlay
                overlayItemImgElement.src = curCard.querySelector('img').src;

                // Per ogni elemento aggiungo un evento click al bottone
                btnCloseItemElement.addEventListener("click", () => {
                    // console.log("click");
                    overlayElement.classList.add("hide");
                });
            });
        });
        
        return photoBlogGridElements;
    });
};


// LOGIC
getPhoto(photoBlogGridElements);





