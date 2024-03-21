/*
// Creo un array composto da oggetti composti da 'name', 'role', 'image'
// Creo un ciclo for per leggere il contenuto
// Stampo il contenuto dell'array nel DOM
// Bonus 1: trasformo la caratteristica image  in immagini nel dom
*/
/* MATERIALS */

const cardContainer = document.querySelector('#card-container');
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Menager',
        image: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg'
    }
];

/* BODY */

for (let i = 0; i < team.length; i++) {
    const thisMember = team[i];
    generateCardTemplate(thisMember); // Metodo con il template literals
    // generateCardAppend(thisMember); // Metodo con append
}

/* FUNCTIONS */

// Funzione che genera un elemento del DOM che rappresenta una card (metodo con template literals)
// member: elemento che rappresenta l'intero oggetto
// return: elemento del dom che rappresenta una un cotainer con le card
function generateCardTemplate(member) {
    const cardContainer = document.querySelector('#card-container');
    cardContainer.innerHTML += `
    <div class="col-9 col-md-6 col-lg-4 mx-auto" >
        <div class="card">
            <img src="${member.image}" class="card-img-top">
            <div class="card-body text-center">
                <div>${member.name}</div>
                <div>${member.role}</div>
            </div>
        </div>
    </div >`
    return cardContainer;
}

// Funzione che genera un elemento del DOM che rappresenta una card (metodo con create element)
// member: elemento che rappresenta l'intero oggetto
// return: elemento del dom che rappresenta una colonna con una card
function generateCardAppend(member) {
    const col = document.createElement('div');
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardName = document.createElement('div');
    const cardrole = document.createElement('div');
    col.classList.add('col-9');
    col.classList.add('col-md-6');
    col.classList.add('col-lg-4');
    col.classList.add('mx-auto');
    card.classList.add('card');
    img.src = member.image;
    img.classList.add('card-img-top');
    cardBody.classList.add('card-body');
    cardBody.classList.add('text-center');
    cardName.innerText = member.name;
    cardrole.innerText = member.role;
    cardContainer.append(col);
    col.append(card);
    card.append(img, cardBody);
    cardBody.append(cardName, cardrole);
    return col;
}