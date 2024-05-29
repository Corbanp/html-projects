// Get references to HTML elements
const newTaskInput = document.querySelector('#new-task');
const addBtn = document.querySelector('#add-btn');
const taskList = document.querySelector('#task-list');

// Add event listener to "Add" button
addBtn.addEventListener('click', () => {
  // Get the value of the new task input
  const newTaskText = newTaskInput.value;
  
  // If the input is not empty or just spaces
  if (newTaskText.trim()) {
    // Create a new task list item
    const newTask = document.createElement('li');
    
    // Create a new span element to hold the task text
    const taskText = document.createElement('span');
    taskText.textContent = newTaskText;
    
    // Create a new button element to delete the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(newTask);
    });
    
    // Create a new button element to edit the task
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      // Create a new input element for editing the task
      const editInput = document.createElement('input');
      editInput.type = 'text';
      
      // Set the input value to the task text
      editInput.value = taskText.textContent;
      
      // Replace the task text with the input element
      newTask.replaceChild(editInput, taskText);
      
      // Change the edit button text to "Save"
      editBtn.textContent = 'Save';
      
      // Add event listener to "Save" button
      editBtn.addEventListener('click', () => {
        // Set the task text to the new input value
        taskText.textContent = editInput.value;
        
        // Replace the input element with the task text
        newTask.replaceChild(taskText, editInput);
        
        // Change the edit button text back to "Edit"
        editBtn.textContent = 'Edit';
      });
    });
    
    // Add the task text and buttons to the new task list item
    newTask.appendChild(taskText);
    newTask.appendChild(deleteBtn);
    newTask.appendChild(editBtn);
    
    // Add the new task list item to the task list
    taskList.appendChild(newTask);
    
    // Clear the new task input
    newTaskInput.value = '';
  }
});
