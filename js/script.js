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
    cardContainer.innerHTML += `
    <div class="col-4" >
        <div class="card">
            <img src="${thisMember.image}" class="card-img-top object-contain" height="356">
            <div class="card-body text-center">
                <div>${thisMember.name}</div>
                <div>${thisMember.role}</div>
            </div>
        </div>
    </div >`
}