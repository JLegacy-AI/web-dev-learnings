var todoItems = [];

$(document).ready(function () {
  //Attach Event Listener
  function addEventListenerTodoItems() {
    /**
     * Event Listener for Check Button
     */
    $(".check-btn").click(function () {
      const targetBtn = $(this);
      const targetTodoItem = targetBtn.parent();
      const btnClass = targetBtn.attr("class").split(" ");

      console.log(targetBtn);
      console.log(targetTodoItem);
      console.log(btnClass);

      if (targetBtn.attr("data-checked") !== "true") {
        btnClass.push("bg-success text-white");
        $(this).html(`<i class="bi bi-check-lg fs-5"></i>`);
        $(this).attr("class", btnClass.join(" "));
        $(targetTodoItem).addClass(
          "text-decoration-line-through text-secondary"
        );
        $(targetBtn).attr("data-checked", "true");
      } else {
        $(this).html(``);
        btnClass.pop();
        btnClass.pop();
        $(this).attr("class", btnClass.join(" "));
        $(targetTodoItem).removeClass(
          "text-decoration-line-through text-secondary"
        );
        $(targetBtn).attr("data-checked", "false");
      }
      // Others Behaviour
    });

    /**
     *  Event Listener for Remove Button
     */
    $(".remove-btn").click(function () {
      const targetBtn = $(this);
      const targetTodoItem = targetBtn.parent();
      const targetTodoItemId = targetTodoItem.attr("id").split("-")[2];
      removeTodoItem(targetTodoItemId);
    });
  }

  $("#form-add-task").submit(function (e) {
    e.preventDefault();
    const todoItem = $("#task-field").val();

    if (todoItem === "") {
      Toastify({
        text: "Should not Empty",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #ff5733, #ff3333)",
        },
      }).showToast();
    } else if (todoItem.length > 35) {
      Toastify({
        text: "Character Length <= 35",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #ff5733, #ff3333)",
        },
      }).showToast();
    } else {
      todoItems.push(todoItem);
      $("#task-field").val("");
      Toastify({
        text: "Task Added",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #33ff57, #33ff9e)",
        },
      }).showToast();
      // Load Todo Items to DOM
      loadTodoItems();
    }
  });

  /*
   * Load Todo Items to DOM
   */

  function loadTodoItems() {
    $("#todo-container").html("");
    if (todoItems.length === 0) {
      $("#todo-container").html(
        `<p class="text-center no-task">No Task Added</p>`
      );
    }
    todoItems.forEach((todoItem, id) => {
      $("#todo-container").append(todoItemHTML(id, todoItem));
    });

    addEventListenerTodoItems();
  }

  /*
   * Todo Item Dom
   */
  function todoItemHTML(id, todoItem) {
    return `
      <div
      id="todo-item-${id}"
      class="w-100 my-2 p-2 rounded-3 d-flex justify-content-between align-items-center todo-item"
      >
        <button
          class="btn btn-link rounded-circle border border-1 border-white d-flex justify-content-center align-items-center check-btn"
          style="width: 30px; height: 30px"
          data-target="#todo-item-${id}"
        ></button>
        <p class="p-0 px-2 m-0" style="font-size: 12px; flex: 1">
          ${todoItem}
        </p>
        <button
          class="btn rounded-circle btn-link d-flex justify-content-center align-items-center fs-3 remove-btn"
          style="width: 30px; height: 30px"
          data-target="#todo-item-${id}"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
    `;
  }

  /*
   * Remove Todo Item
   */

  function removeTodoItem(id) {
    todoItems.splice(id, 1);
    loadTodoItems();
  }

  // Adding EventListener
  addEventListenerTodoItems();
  loadTodoItems();
});
