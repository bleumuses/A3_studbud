//Basic task form DOM elements
const taskModal = document.getElementById('taskform-modal-container');
const taskform = document.getElementById('taskform');
const addTaskButton = document.getElementById('addNewTask');
const closeTaskButton = document.getElementById('closeTaskForm');

const tasklist = document.querySelector('.container');

// DOM elements for the task input fields
var taskInput = document.getElementById('taskInput');
var taskDescriptionInput = document.getElementById('taskDescriptionInput');
var dueDateInput = document.getElementById('dueDateInput');
var estimatedTimeInput = document.getElementById('estimatedTimeInput');
var priorityInput = document.getElementById('priorityInput');
var subjectInput = document.getElementById('subjectInput');

// Task form opening event listener
addTaskButton.addEventListener('click', () => {
    taskModal.classList.add('show');
})

// Task form closing event listener
closeTaskButton.addEventListener('click', () => {
    taskModal.classList.remove('show');
})

// Task form submission event listener
taskform.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let taskDescription = taskDescriptionInput.value;
    let dueDate = dueDateInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    let subjectName = subjectInput.value;
    if (task) {
        addTask(task, taskDescription, dueDate, estimatedTime, priorityRating, false, subjectName);
    }
    taskModal.classList.remove('show');
})

// Attempt to record the colour user has selected to set the task header's colour (inspired by https://codepen.io/kylewetton/pen/bGbobMa?editors=1111)
// Able to get the colour but failed to set the colour (see more below)
// const colorButton = document.querySelectorAll('.color');

// colorButton.forEach(color => {
//     color.addEventListener('click', () => {
//         let colorNameClass = color.className;
//         console.log(colorNameClass);
//         resetActiveButton();
//         color.classList.add('active-color');
//     })
// })

// Create global array to track tasks
var taskListArray = [];

// Function to add task with user inputs as parameters
function addTask(taskTitle, taskDescription, dueDate, estimatedTime, priorityRating, completionStatus, subjectName) {
    let dateCreated = (new Date()).toLocaleDateString('en-US');
    let task = {
        id: Date.now(),
        taskTitle,
        taskDescription,
        dueDate,
        dateCreated,
        estimatedTime,
        priorityRating,
        estimatedTime,
        completionStatus,
        subjectName
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
}

// Function to display task on screen
function renderTask(task) {
    // Task card container
    let card = document.createElement('div');
    card.classList.add('draggable');
    card.setAttribute('id', task.id);
    card.setAttribute('draggable', 'true');

    // Card header
    let heading = document.createElement('div');
    heading.setAttribute('id', 'card-header');
    
    let subject = document.createElement('div');
    subject.innerHTML = '<p>' + '<b>' + 'Subject: ' + '</b>' + task.subjectName + '</p>';
    subject.setAttribute('contenteditable', 'true');

    let taskTitle = document.createElement('h2');
    taskTitle.textContent = task.taskTitle;
    taskTitle.setAttribute('contenteditable', 'true');

    let priority = document.createElement('p');
    priority.textContent = task.priorityRating;
    priority.setAttribute('contenteditable', 'true');
    priority.setAttribute('id', 'priority');

    let delCard = document.createElement('span');
    let delCardText = document.createTextNode('\u00d7');
    delCard.classList.add('deleteCard');
    delCard.appendChild(delCardText);

    let description = document.createElement('div');
    description.innerHTML = '<p>' + '<b>' + 'Description: ' + '</b>' + task.taskDescription + '</p>';
    description.setAttribute('contenteditable', 'true');

    // Append card's heading elements to card header
    heading.appendChild(priority);
    heading.appendChild(delCard);
    heading.appendChild(taskTitle);
    heading.appendChild(subject);
    heading.appendChild(description);

    // Card content
    let content = document.createElement('div');
    content.setAttribute('id','card-content');

    let due = document.createElement('div');
    due.innerHTML = '<p>' + '<b>' + 'Due: ' + '</b>' + task.dueDate + '</p>';
    due.setAttribute('contenteditable', 'true');


    let time = document.createElement('p');
    time.textContent = task.estimatedTime;
    due.setAttribute('contenteditable', 'true');
    let min = document.createTextNode(' mins');
    time.appendChild(min);

    // Append card's content elements to card content
    content.appendChild(due);
    content.appendChild(time);

    // Append heading and content to card
    card.appendChild(heading);
    card.appendChild(content);

    // Add card to task list
    tasklist.appendChild(card);

    // Delete task card when user clicks delete button 
    delCard.addEventListener('click', () => {
        const check = confirm('Are you sure you want to delete this card?');
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex(task => task.id === Number(id));
        if (check) {
            removeItemFromArray(taskListArray, index)
            console.log(taskListArray);
            card.remove();
        } 
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

    // Attempt to set task heading colour when user chooses a colour from the 'add new task' form but failed
    // let headerColor = document.querySelector('.active-color')
    // setNewColor(headerColor);

    // Clear the input form
    taskform.reset();
}

// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}  

// Attempt to set task heading colour when user chooses a colour from the 'add new task' form
// function resetActiveButton() {
//     colorButton.forEach(color => {
//         color.classList.remove('active-color');
//     })
// }
// function setNewColor (color) {
//     document.getElementById('card-header').style.backgroundColor = color;
// }