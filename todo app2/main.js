// ===== Model =====
class TodoModel {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  addTask(text) {
    this.tasks.push({ text, completed: false });
    this._commit();
  }

  toggleTask(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this._commit();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this._commit();
  }

  _commit() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

// ===== View =====
class TodoView {
  constructor() {
    this.list = document.getElementById("todoList");
    this.counter = document.getElementById("counter");
  }

  render(tasks) {
    this.list.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.text;
      if (task.completed) li.classList.add("completed");

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = task.completed ? "Undo" : "Done";
      toggleBtn.addEventListener("click", () => this.onToggle(index));

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => this.onDelete(index));

      li.appendChild(toggleBtn);
      li.appendChild(deleteBtn);
      this.list.appendChild(li);
    });

    const remaining = tasks.filter(t => !t.completed).length;
    this.counter.textContent = `Remaining tasks: ${remaining}`;
  }

  bindToggle(handler) { this.onToggle = handler; }
  bindDelete(handler) { this.onDelete = handler; }
}

// ===== Controller =====
class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindToggle(this.handleToggle);
    this.view.bindDelete(this.handleDelete);

    document.getElementById("addBtn").addEventListener("click", () => {
      const input = document.getElementById("newTask");
      if (input.value.trim()) {
        this.model.addTask(input.value.trim());
        input.value = "";
        this.updateView();
      }
    });

    this.updateView();
  }

  updateView = () => {
    this.view.render(this.model.tasks);
  };

  handleToggle = (index) => {
    this.model.toggleTask(index);
    this.updateView();
  };

  handleDelete = (index) => {
    this.model.deleteTask(index);
    this.updateView();
  };
}

const app = new TodoController(new TodoModel(), new TodoView());
