function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskInput.value;
      taskList.appendChild(newTask);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  