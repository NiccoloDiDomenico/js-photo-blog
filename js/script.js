// Elements
const photoBlogGridElements = document.getElementById("photo-blog-grid")
const overlayElement = document.querySelector(".overlay")
const btnCloseItemElement = document.querySelector(".btn-close-item")
console.log(photoBlogGridElements, overlayElement, btnCloseItemElement);

// Functions


// Logic

// Effettuo chiamata AJAX tramite AXIOS all'API di JSON Placeholder
axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=6`)
    .then((response) => {
        console.log(response.data);
        
        // Creo ciclo forEach con l'array di oggetti presi dalla chiamata
        response.data.forEach(curElement => {
            // Creo due variabili gli assegno i valori delle chiavi degli oggetti presi dalla chiamata
            let url = curElement.url;
            let titles = curElement.title;
            console.log(url, titles);

            // Inserisco le varibili nel codice e lo rendo dinamico
            photoBlogGridElements.innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="${url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${titles}</h5>
                        </div>
                    </div>
                </div>
            `;
        });
        
        // Prendo l'elemento card dal nodo HTML
        const cardsElements = document.querySelectorAll(".card")
        console.log(cardsElements);

        // Creo un ciclo forEach con l'arrey di elementi presi sopra
        cardsElements.forEach(curCard => {
            console.log(curCard);

            // Per ogni elemento aggingo un evento click
            curCard.addEventListener("click", () => {
                // console.log(`click`);
                overlayElement.classList.remove("hide");
                btnCloseItemElement.addEventListener("click", () => {
                    // console.log("click");
                    overlayElement.classList.add("hide");
                });
            });
        });
        
    });