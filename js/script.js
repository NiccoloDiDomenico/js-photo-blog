// Elements
const photoBlogGridElements = document.getElementById("photo-blog-grid")
console.log(photoBlogGridElements);


// Logic

// Effettuo chiamata AJAX tramite AXIOS all'API di JSON Placeholder
axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=6`)
    .then((response) => {
        console.log(response.data);
        
        response.data.forEach(curElement => {
            let url = curElement.url;
            let titles = curElement.title;
            console.log(url, titles);

            photoBlogGridElements.innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="${url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${titles}</h5>
                            <p class="card-text">Card body</p>
                        </div>
                    </div>
                </div>
            `;
        });
    });