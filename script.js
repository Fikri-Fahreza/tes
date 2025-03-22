function addTask() {
  console.log("Add Task clicked");
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `<span onclick="toggleComplete(this)">${taskText}</span> <button onclick="removeTask()">Remove</button>`;
  document.getElementById("taskList").appendChild(li);

  taskInput.value = ""; // Clear the input field
}

function removeTask() {
  console.log("Remove Task clicked");
  let taskList = document.getElementById("taskList");
  if (taskList.lastChild) {
    taskList.removeChild(taskList.lastChild);
  } else {
    alert("No tasks to remove.");
  }
}
function toggleComplete(task) {
  task.ClassList.toggle("completed");
}
