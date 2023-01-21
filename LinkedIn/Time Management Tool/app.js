const newTaskButton = document.getElementById("new-task-button");
newTaskButton.addEventListener("click", function() {
  const taskList = document.getElementById("task-list");

  // Get the task description,due date and reminder from the user
  const taskDescription = prompt("Enter a task description:");
  const taskDueDate = prompt("Enter the due date (mm/dd/yyyy):");
  const taskReminder = prompt("Enter the reminder time (hh:mm) :");

  // Create a new task element
  const newTask = document.createElement("div");
  newTask.innerHTML = taskDescription + " - Due: " + taskDueDate + "Reminder: " + taskReminder;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function() {
    newTask.remove();
  });

  // Append the delete button to the new task element
  newTask.appendChild(deleteButton);

  // Append the new task to the task list
  taskList.appendChild(newTask);

  //set reminder
  setReminder(taskReminder, taskDescription);
});

function setReminder(reminder,task) {
  const reminderTime = new Date();
  reminderTime.setHours(reminder.split(':')[0]);
  reminderTime.setMinutes(reminder.split(':')[1]);
  const currentTime = new Date();
  const difference = reminderTime - currentTime;
  setTimeout(function(){ alert("Reminder: " + task); }, difference);
}
