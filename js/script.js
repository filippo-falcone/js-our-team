/*
// Creo un array composto da oggetti composti da 'name', 'role', 'image'
// Creo un ciclo for per leggere il contenuto e stampare le caratteristiche di ogni membro del team
*/
/* MATERIALS */
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Menager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];
/* BODY */
for (let i = 0; i < team.length; i++) {
    const thisMember = team[i];
    console.log(`Nome: ${thisMember.name}`);
    console.log(`Ruolo: ${thisMember.role}`);
    console.log(`Immagine: ${thisMember.image}`);
}