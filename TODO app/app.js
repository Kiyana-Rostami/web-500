const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText === "") return; 
  const li = document.createElement("li");
  li.textContent = taskText + " (to do)";
  li.className = "todo";

//   btn behavior
  const btn = document.createElement("button");
  btn.textContent = "START";
  btn.addEventListener("click", function () {
    if (li.classList.contains("todo")) {
      li.className = "in-progress";
      li.textContent = taskText + " (in progress)";
      btn.textContent = "DONE";
    } else if (li.classList.contains("in-progress")) {
      li.className = "done";
      li.textContent = taskText + " (done)";
      btn.textContent = "UNDO";
    } else {
      li.className = "in-progress";
      li.textContent = taskText + " (in progress)";
      btn.textContent = "DONE";
    }
    li.appendChild(btn);
  });

  li.appendChild(btn);
  taskList.appendChild(li);
  input.value = "";
});
