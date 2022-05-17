// Basic column form DOM elements
const columnModal = document.getElementById('columnform-modal-container');
const columnform = document.getElementById('columnform');
const addColumnButton = document.getElementById('addNewColumn');
const closeColumnButton = document.getElementById('closeColumnForm');

const columnList = document.querySelector('#kanban');

// DOM elements for the column input fields
var columnTitle = document.getElementById('columnTitleInput');

// Column form opening event listener
addColumnButton.addEventListener('click', () => {
    columnModal.classList.add('show');
})

// Column form closing event listener
closeColumnButton.addEventListener('click', () => {
    columnModal.classList.remove('show');
})

// Column form submission event listener
columnform.addEventListener("submit", function(event) {
    event.preventDefault();
    let column = columnTitle.value;
    if (column) {
        addColumn(column)
    }
    columnModal.classList.remove('show');
})

// Create global array to track columns
var columnListArray = [];

// Function to add column with user inputs as parameters
function addColumn(columnName) {
    let dateCreated = (new Date()).toLocaleDateString('en-US');
    let column = {
        id: Date.now(),
        columnName,
        dateCreated
    };
    columnListArray.push(column);
    console.log(columnListArray);
    renderColumn(column);
}

// Function to display column on screen
function renderColumn(column) {
    // Create Kanban column with editable title
    let kColumn = document.createElement('div');
    kColumn.setAttribute('id', 'kanban-column');

    let kColumnTitle = document.createElement('h2');
    kColumnTitle.setAttribute('contenteditable', 'true');
    kColumnTitle.textContent = column.columnName;

    let dash = document.createElement('hr');

    // Append user input into column
    kColumn.appendChild(kColumnTitle);
    kColumn.append(dash);

    // Create container to store task card
    let kColumnItem = document.createElement('div');
    kColumnItem.setAttribute('class', 'container');

    // Add container to column
    kColumn.appendChild(kColumnItem);

    // Add column to list of columns
    columnList.appendChild(kColumn);

    // Allow new Kanban column to contain draggable cards when dragged over         
    // Adapted from https://codepen.io/WebDevSimplified/pen/JjdveeV 
    const containers = document.querySelectorAll('.container');

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

    columnform.reset();
}

// Allow existing Kanban column to contain draggable cards when dragged over
// Adapted from https://codepen.io/WebDevSimplified/pen/JjdveeV 
const containers = document.querySelectorAll('.container');

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