// Select all the tasks in the list
const tasks = document.querySelectorAll('#todo-list li');

// Add a click event listener to each task
tasks.forEach(task => {
  task.addEventListener('click', () => {
    task.classList.toggle('completed');
  });
});