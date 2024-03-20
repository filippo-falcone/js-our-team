/*
// Creo un array composto da oggetti composti da 'name', 'role', 'image'
// Creo un ciclo for per leggere il contenuto
// Stampo il contenuto dell'array nel DOM
// Bonus 1: trasformo la caratteristica image  in immagini nel dom
*/
/* MATERIALS */
const tableBody = document.querySelector('#table-body');
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
    tableBody.innerHTML += `
    <tr>
        <td>${thisMember.name}</td>
        <td>${thisMember.role}</td>
        <td><img src="${thisMember.image}" width="100"></td>
    </tr>
    `
}