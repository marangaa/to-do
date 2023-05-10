// Get the task list element
const taskList = document.getElementById('task-list');

// Add click event listener to task list element to handle deleting tasks
taskList.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
  }
});

// Add submit event listener to form to handle adding new tasks
const addTaskForm = document.getElementById('add-task-form');
addTaskForm.addEventListener('submit', addTask);

// Function to add a new task to the task list
function addTask(e) {
  e.preventDefault(); // prevent form submission from reloading the page

  const newTaskInput = document.getElementById('new-task');
  const newTaskText = newTaskInput.value.trim(); // trim leading/trailing whitespace
  if (newTaskText === '') {
    return; // don't add empty tasks
  }

  const newTaskItem = document.createElement('li');
  newTaskItem.textContent = newTaskText;

  // Add delete button to task item
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  newTaskItem.appendChild(deleteButton);

  taskList.appendChild(newTaskItem);

  newTaskInput.value = ''; // clear input field
}
