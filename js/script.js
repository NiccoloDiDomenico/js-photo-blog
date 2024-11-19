// Elements
const photoBlogGridElements = document.getElementById("photo-blog-grid")
console.log(photoBlogGridElements);

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
    });