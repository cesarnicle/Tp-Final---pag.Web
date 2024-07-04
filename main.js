
let contenedorCards = document.getElementById('contenedor_cards');
let cardsHTML = ""
document.addEventListener('DOMContentLoaded', function() {
    for (let npc in personajes) {
        cardsHTML += crearCards(npc);
    }
    contenedorCards.innerHTML = cardsHTML;
    
    document.querySelectorAll('.ver').forEach(boton => {
        boton.addEventListener('click', function() {
            const characterName = this.closest('.cards').querySelector('p').innerText.replace(/\s+/g, '-').toLowerCase();
            window.location.href = `informacion.html?name=${characterName}`;
        });
    });
});
    

    
    let personajeInfo = document.getElementById('personajeInfo');



    function crearCards(npc) {
        const sanitizedName = personajes[npc].name.replace(/\s+/g, '-').toLowerCase();
    
        let card = document.createElement('div');
        card.classList.add('cards');
    
        let name = document.createElement('p');
        let image = document.createElement('img');
    
        name.innerText = personajes[npc].name;
        image.src = personajes[npc].image;
    
        let contorno = document.createElement('div');
        contorno.classList.add('borde');
    
        let boton = document.createElement('button');
        boton.innerText = "Ver Más";
        boton.classList.add("ver");
    
        contorno.append(boton);
        card.append(name, image, contorno);
    
        return card.outerHTML;
    }
    
    window.addEventListener('load', function() {
        const params = new URLSearchParams(window.location.search);
        const characterName = params.get('name');

        if (characterName) {
            const characterCard = document.getElementById(characterName);
            if (characterCard) {
                characterCard.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });





    let dropdownMenu = document.getElementById('dropdownMenu');
    let infoHTML = ""
    for(let npc in personajes){
        infoHTML += mostrarInformacion(npc)   
    }
    dropdownMenu.innerHTML = infoHTML

    function mostrarInformacion(npc) {
        const sanitizedName = personajes[npc].name.replace(/\s+/g, '-').toLowerCase();
    
        let card = `
            <div class="card text-bg-dark mb-3" style="max-width: 1000px;">
                <div id="${sanitizedName}" class="row g-0">
                    <div class="col-md-4">
                        <img src="${personajes[npc].image}" class="img-fluid rounded-start" alt="${personajes[npc].name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${personajes[npc].name}</h5>
                            <p class="card-text">${personajes[npc].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return card;
    }
    



