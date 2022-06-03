// Generate New Acronym 
const genAcroModal = document.getElementById('acrogen-modal-container');
const acroGenForm = document.getElementById('acrogen');
const addAcroGenBtn = document.getElementById('genNewAcro');
const closeAcroGenBtn = document.getElementById('closeAcroGenForm');

const acroList = document.querySelector('.acro-container');

addAcroGenBtn.addEventListener('click', () => {
    genAcroModal.classList.add('show');
})

closeAcroGenBtn.addEventListener('click', () => {
    genAcroModal.classList.remove('show');
})

var wordInput = document.getElementById('wordInput');

// Generate new acronym form submission event listener
acroGenForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let str = wordInput.value;
    if (str) {
        buildAcro(str);
    }
    genAcroModal.classList.remove('show');
})

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

var acroWordInput = document.getElementById('acroWordInput');
var acroDefinitionInput = document.getElementById('acroDefinitionInput');

// Generate new acronym form submission event listener
acroForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let acro = acroWordInput.value;
    let acroDefinition = acroDefinitionInput.value;
    if (acro) {
        addAcro(acro, acroDefinition);
    }
    acroModal.classList.remove('show');
})

var acroListArray = [];

function addAcro (acroWord, acroDefinition) {
    let dateCreated = (new Date()).toLocaleDateString('en-US');
    let acro = {
        id: Date.now(),
        dateCreated,
        acroWord,
        acroDefinition
    };
    acroListArray.push(acro);
    console.log(acroListArray);
    renderAcro(acro);
}

function renderAcro (acro) {
    //Acronym card container
    let acroCard = document.createElement('div');
    acroCard.classList.add('draggable');
    acroCard.setAttribute('id', acro.id);
    acroCard.setAttribute('draggable', 'true');
    
    //Acronym card header
    let acroCardHeader = document.createElement('div');
    acroCardHeader.setAttribute('id','acrocard-header');

    let acroWord = document.createElement('h2');
    acroWord.textContent = acro.acroWord;
    acroWord.setAttribute('contenteditable', 'true');

    const expandBtn = document.createElement('button');
    const expandIcon = document.createElement('i');
    expandIcon.setAttribute('class', 'fa-solid fa-caret-down');
    expandBtn.appendChild(expandIcon);

    // Append acronym card's heading element to card header
    acroCardHeader.appendChild(acroWord);
    acroCardHeader.appendChild(expandBtn);

    //Acronym card content
    let acroCardContent = document.createElement('div');
    acroCardContent.setAttribute('class','def-hide');
    acroCardContent.setAttribute('id', 'acrocard-content');

    const deltBtn = document.createElement('button');
    const deltIcon = document.createElement('i');
    deltIcon.setAttribute('class', 'fa-solid fa-trash-can');
    deltBtn.appendChild(deltIcon);
    
    let acroDefinition = document.createElement('p');
    acroDefinition.textContent = acro.acroDefinition;
    acroDefinition.setAttribute('contenteditable', 'true');

    // Append acronym card's content element to card header
    acroCardContent.appendChild(acroDefinition);
    acroCardContent.appendChild(deltBtn);

    acroCard.appendChild(acroCardHeader);
    acroCard.appendChild(acroCardContent);

    acroList.appendChild(acroCard);

    // Delete task card when user clicks delete button 
    deltBtn.addEventListener('click', () => {
        const check = confirm('Are you sure you want to delete this card?');
        let id = event.target.parentElement.getAttribute('data-id');
        let index = acroListArray.findIndex(acro => acro.id === Number(id));
        if (check) {
            removeItemFromArray(acroListArray, index)
            console.log(acroListArray);
            acroCard.remove();
        } 
    })

    expandBtn.addEventListener('click', () => {
        expandIcon.classList.toggle('fa-caret-up');
        acroCardContent.classList.toggle('def-show');
    })

    // Function to allow cards to be dragged and dropped between columns
    // Adapted from https://codepen.io/WebDevSimplified/pen/JjdveeV 
    const draggables = document.querySelectorAll('.draggable');

    // Add 'dragging' class to provide feedback when the user starts dragging card
    draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
        });

    // Remove 'dragging' class to provide feedback when the user stops dragging card
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
        });
    });

    acroForm.reset();
    acroGenForm.reset();
}

// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}  

function buildAcro (str) {
    const wordArr = str.split(' ');
    const firstLetters = wordArr.map(word => word[0]);
    const acroWord = firstLetters.join('');
    const res = acroWord.toUpperCase();
    addAcro(res, str);
}