const listAddition = document.querySelector('.addList');
const list = document.querySelector('.list');
const addButton = document.querySelector('.fa-plus-square');
const message = document.querySelector('.message');

function addTask() {

      if(listAddition.value != '') {

        // Create list item
        const taskItem = document.createElement('li');
        taskItem.classList.add('taskItem');

        // Create icon to delete item

        const taskDeleteIcon = document.createElement('i');
        taskDeleteIcon.classList.add('far');
        taskDeleteIcon.classList.add('fa-trash-alt');

        const taskCompleteIcon = document.createElement('i');
        taskCompleteIcon.classList.add('fas');
        taskCompleteIcon.classList.add('fa-check');

        // Add Icon and text value added by user to list item
        taskItemText = listAddition.value;
        taskItem.append(taskItemText);
        taskItem.appendChild(taskDeleteIcon);
        taskItem.appendChild(taskCompleteIcon);
        list.appendChild(taskItem);

        document.querySelector('.opaque').style.backgroundColor = "#333737";
      } else {
        message.innerHTML = "You must enter an item for your task list";
        document.querySelector('.opaque').style.backgroundColor = "#0c5d13";
    };

    // Reset text field
    listAddition.value = '';
};

// Reset error reset error message

function resetMessage() {
  listAddition.addEventListener('keydown', () => {
    message.innerHTML = "";
    document.querySelector('.opaque').style.backgroundColor = "#333737";
  });
};

// Mark item as done or delete from list

function ListItemControl(event) {
  const taskCompleteIcon = event.target;

  // Completed item function, mark as done or remove done status

  if (taskCompleteIcon.className === 'fas fa-check') {
    if (taskCompleteIcon.parentElement.className === 'strike')
    {
      taskCompleteIcon.parentElement.classList.add('taskItem');
      taskCompleteIcon.parentElement.classList.remove('strike');
    } else {
      taskCompleteIcon.parentElement.classList.add('strike');
      taskCompleteIcon.parentElement.classList.remove('taskItem');
    }
  }

  // Delete item from list

  if (taskCompleteIcon.className === 'far fa-trash-alt') {
      taskCompleteIcon.parentElement.remove();
    }
}

    list.addEventListener('click', ListItemControl);

// Filter list by all items / completed items / incomplete items

function filterResults() {
  const filterField = document.querySelector('.filter');
  const filterCompleteTask = document.querySelectorAll('li.strike');
  const filterCompleteTask2 = document.querySelectorAll('li.taskItem');
   if(filterField.value === 'complete') {
    filterCompleteTask2.forEach(field => {
      field.style.display = "none";
    });
    filterCompleteTask.forEach(field => {
      field.style.display = "block";
    });
  } else if(filterField.value === 'incomplete') {
   filterCompleteTask.forEach(field => {
     field.style.display = "none";
   });
   filterCompleteTask2.forEach(field => {
     field.style.display = "block";
   });
 } else {
    filterCompleteTask.forEach(field => {
      field.style.display = "block";
    });
    filterCompleteTask2.forEach(field => {
      field.style.display = "block";
    });
  };
}

resetMessage();
