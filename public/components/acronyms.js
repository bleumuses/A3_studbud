// Generate New Acronym 
const genAcroModal = document.getElementById('acrogen-modal-container');
const acroGenForm = document.getElementById('acrogen');
const addAcroGenBtn = document.getElementById('genNewAcro');
const closeAcroGenBtn = document.getElementById('closeAcroGenForm');

const acroList = document.querySelector('.container');

addAcroGenBtn.addEventListener('click', () => {
    genAcroModal.classList.add('show');
})

closeAcroGenBtn.addEventListener('click', () => {
    genAcroModal.classList.remove('show');
})

var wordInput = document.getElementById('wordInput');
var genAcroListArray = [];

// Generate new acronym form submission event listener
acroGenForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let str = wordInput.value;
    if (str) {
        buildAcro(str);
    }
    acroGenForm.classList.remove('show');
})

function addGenAcro (acroDefition) {
    let dateCreated = (new Date()).toLocaleDateString('en-US');
    let word = {
        id: Date.now(),
        dateCreated,
        acroDefition
    };
    genAcroListArray.push(word);
    console.log(genAcroListArray);
    renderGenAcro(word);
}

function renderGenAcro (word) {
    //Acronym card container
    let acroCard = document.createElement('div');
    acroCard.classList.add('draggable');
    acroCard.setAttribute('id', word.id);
    acroCard.setAttribute('draggable', 'true');
    
    //Acronym card header
    let acroCardHeader = document.createElement('div');
    acroCardHeader.setAttribute('id','acrocard-header');

    let acronymisedWord = document.createElement('h2');
    acronymisedWord.textContent = buildAcro(str);
    acronymisedWord.setAttribute('contenteditable', 'true');

    // Append acronym card's heading element to card header
    acroCardHeader.appendChild(acronymisedWord);

    //Acronym card content
    let acroCardContent = document.createElement('div');
    acroCardContent.setAttribute('id', 'acrocard-content');

    
    let acroDefition = document.createElement('p');
    acroDefition = word.acroDefition;
    acroDefition.setAttribute('contenteditable', 'true');

    // Append acronym card's content element to card header
    acroCardContent.appendChild(acroDefition);

    acroCard.appendChild(acroCardHeader);
    acroCard.appendChild(acroCardContent);

    acroCard.appendChild(acroList);
}

// Add New Acronym
const acroModal = document.getElementById('acro-modal-container');
const acroForm = document.getElementById('acro');
const addAcroBtn = document.getElementById('addNewAcro');
const closeAcroBtn = document.getElementById('closeAcroForm');

addAcroBtn.addEventListener('click', () => {
    acroModal.classList.add('show');
})

closeAcroBtn.addEventListener('click', () => {
    acroModal.classList.remove('show');
})

function buildAcro (str) {
    const wordArr = str.split(' ');
    const firstLetters = wordArr.map(word => word[0]);
    const acroWord = firstLetters.join('');
    const res = acroWord.toUpperCase();
    console.log(res);
}