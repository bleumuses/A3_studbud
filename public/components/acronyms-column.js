// Basic acroCol form DOM elements
const acroColModal = document.getElementById('acro-col-modal-container');
const acroColForm = document.getElementById('acro-col-form');
const addAcroColButton = document.getElementById('addNewAcroCol');
const closeAcroColButton = document.getElementById('closeAcroColForm');

const acroColList = document.querySelector('#kanban');

// DOM elements for the acroCol input fields
var acroColTitle = document.getElementById('acroColTitleInput');

// acroCol form opening event listener
addAcroColButton.addEventListener('click', () => {
    acroColModal.classList.add('show');
})

// acroCol form closing event listener
closeAcroColButton.addEventListener('click', () => {
    acroColModal.classList.remove('show');
})

// acroCol form submission event listener
acroColForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let acroCol = acroColTitle.value;
    if (acroCol) {
        addAcroCol(acroCol)
    }
    acroColModal.classList.remove('show');
})

// Create global array to track acroCols
var acroColListArray = [];

// Function to add acroCol with user inputs as parameters
function addAcroCol(acroColName) {
    let dateCreated = (new Date()).toLocaleDateString('en-US');
    let acroCol = {
        id: Date.now(),
        acroColName,
        dateCreated
    };
    acroColListArray.push(acroCol);
    console.log(acroColListArray);
    renderAcroCol(acroCol);
}

// Function to display acroCol on screen
function renderAcroCol(acroCol) {
    // Create Kanban acroCol with editable title
    let kAcroCol = document.createElement('div');
    kAcroCol.setAttribute('id', 'kanban-column');

    let kAcroColTitle = document.createElement('h2');
    kAcroColTitle.setAttribute('contenteditable', 'true');
    kAcroColTitle.textContent = acroCol.acroColName;

    let dash = document.createElement('hr');

    // Append user input into acroCol
    kAcroCol.appendChild(kAcroColTitle);
    kAcroCol.append(dash);

    // Create container to store task card
    let kAcroColItem = document.createElement('div');
    kAcroColItem.setAttribute('class', 'acro-container');

    // Add container to acroCol
    kAcroCol.appendChild(kAcroColItem);

    // Add acroCol to list of acroCols
    acroColList.appendChild(kAcroCol);

    // Allow new Kanban acroCol to contain draggable cards when dragged over         
    // Adapted from https://codepen.io/WebDevSimplified/pen/JjdveeV 
    const containers = document.querySelectorAll('.acro-container');

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            // Call getDragAfterElement function to pass in the current container that the user is in and their mouse y-position
            const afterElement = getDragAfterElement(container, e.clientY);
            // Select the only card that is currently being dragged
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
            // Append card to end of container if there is nothing above
            container.appendChild(draggable);
            } else {
            // Determine which card the dragging card would be inserted before
            container.insertBefore(draggable, afterElement);
            }
        });
    });

    acroColForm.reset();
}

// Allow existing Kanban acroCol to contain draggable cards when dragged over
// Adapted from https://codepen.io/WebDevSimplified/pen/JjdveeV 
const containers = document.querySelectorAll('.acro-container');

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        // Call getDragAfterElement function to pass in the current container that the user is in and their mouse y-position
        const afterElement = getDragAfterElement(container, e.clientY);
        // Select the only card that is currently being dragged
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
        // Append card to end of container if there is nothing above
        container.appendChild(draggable);
        } else {
        // Determine which card the dragging card would be inserted before
        container.insertBefore(draggable, afterElement);
        }
    });
});

// Function to determine the user's mouse y-position to return whichever card the mouse is directly after  
function getDragAfterElement(container, y) {
    // Array of all cards within the container, excluding the card that the user is currently dragging
      const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    // Loop through the array of cards within the container to return the closest card child that is directly after the user's mouse y-position which was passed in through the function
      return draggableElements.reduce((closest, child) => {
        // Create bounding box around the children inside the array
        const box = child.getBoundingClientRect();
        // Find distance between the centre of the bounding box and the user's cursor
        const offset = y - (box.top + box.height / 2);
        // If offset is negative, cursor is above the card. If offset is positive, cursor is below the card.
        // Get card that has negative offset but closest to 0 
        if (offset < 0 && offset > closest.offset) {
            // Return an object with the new closest element and its child
          return { offset: offset, element: child }
        } else {
          return closest
        }
        // Initial offset is smallest number so any new offset is greater than the initial one
      }, { offset: Number.NEGATIVE_INFINITY }).element
    }