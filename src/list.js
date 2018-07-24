let submitButton = document.getElementById("list-button")
let listTitleInput = document.getElementById("new-list-title")
let appContent = document.getElementById("app-content");
let allLists = [];
let listId = 0;


submitButton.addEventListener('click', combineActions);

function combineActions(event) {
  newListFromButton(event);
  showTaskForm(event);
  showList(event)
}

// submitButton.addEventListener('click', function() {
//   newListFromButton();
//   showTaskForm();
// });

console.log(appContent)
console.log(submitButton)
console.log(listTitleInput)
console.log(allLists)


class List {

  constructor (title) {
    this.title = title;
    this.listId = ++listId;
    allLists.push(this);
  }

  deleteList() {
    allLists = allLists.filter( function(list) {
      return list.listId !== this.listId
    }.bind(this))
  }

}

function newListFromButton(event) {
  new List(listTitleInput.value);
  event.preventDefault();
  console.log(allLists)
}

function showTaskForm(event) {
  appContent.innerHTML = taskForm

}

function showList(event) {
  appContent.innerHTML += listShowPage
}



// HTML for new Task pop-up:
let taskForm = `<form id="create-task-form">
    <label for="parent-list">Select List:</label>
    <select id="parent-list">
      <!-- Major key alert:
      read the docs for HTML option selected:
      https://www.w3schools.com/tags/att_option_selected.asp -->
    <option value="My Dank List" selected>
      My Dank List
    </option>
    </select>

    <label for="new-task-description">Task description:</label>
    <input required type="text" id="new-task-description" placeholder="description">

    <label for="new-task-priority">Priority level:</label>
    <input type="text" id="new-task-priority" placeholder="priority">
    <input type="submit" value="Create New Task">
  </form>`

  let listShowPage = `<div id="lists">
<!-- begin list 1 -->
  <div>
    <h2>doughnuts
      <button data-title="doughnuts" class="delete-list">
        X
      </button>
    </h2>
    <ul>
        <li>
        Task: mocha
        <button data-list-title="doughnuts" data-task-name="mocha" class="delete-task">
            X
        </button>
        <br>
        Priority: low
      </li>
      <li>
        Task: chocolate
        <button data-list-title="doughnuts" data-task-name="chocolate" class="delete-task">
          X
        </button>
        <br>
        Priority: high
      </li>
    </ul>
  </div>
<!--end list 1  -->

<!-- begin list 2 -->
  <div>
    <h2>chik fil a
      <button data-title="chik fil a" class="delete-list">
        X
      </button>
    </h2>

    <ul>
      <li>
        Task: spicy chicken deluxe
        <button data-list-title="chik fil a" data-task-name="spicy chicken deluxe" class="delete-task">
          X
        </button>
        <br>
        Priority: high
      </li>
      <li>
        Task: waffle fries
        <button data-list-title="chik fil a" data-task-name="waffle fries" class="delete-task">
        X
        </button>
        <br>
        Priority: high
      </li>
    </ul>
  </div>
<!-- end list 2 -->
</div>`
