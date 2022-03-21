//Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team. 
//Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
//Una volta definita la struttura dati, prendendo come riferimento 
//la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

const container = document.querySelector('.team-container');
const members = [
    {nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'img/angela-caroll-chief-editor.jpg'
    },
    {nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'img/walter-gordon-office-manager.jpg'
    },
    {nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'img/angela-lopez-social-media-manager.jpg'
    },
    {nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'img/scott-estrada-developer.jpg'
    },
    {nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'img/barbara-ramos-graphic-designer.jpg'
    }
];

function createCard(){
    for(let i=0; i < members.length; i++){
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        container.appendChild(teamCard);
        const cardImage = document.createElement('div');
        cardImage.className = 'card-image';
        teamCard.appendChild(cardImage);
        cardImage.innerHTML = `<img src="${members[i].foto}"/>`;
        const cardText = document.createElement('div');
        cardText.className = 'card-text';
        teamCard.appendChild(cardText);
        cardText.innerHTML = `<h3>${members[i].nome}</h3><p>${members[i].ruolo}</p>`;
    }
}

createCard();



