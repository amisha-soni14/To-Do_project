let addButton, listItem, todoArray = [], liData, li;

function addTodo() {
  const inputValue = document.getElementById('todo').value;
  if(inputValue == "") {
    alert("Enter any text");
  }
  else {
    const today = new Date();
    const date = `${today.getDate()} - ${(today.toLocaleString('default', { month: 'short' }) )} - ${today.getFullYear()}`;
    const todoObj = {
      id: Date.now(),
      text: inputValue,
      date: date
    };

    todoArray.push(todoObj);
    localStorage.setItem("todos", JSON.stringify(todoArray));
    displayData(todoObj);
    reset();
  }
}

function displayData({id, text, date}) {
  li = `<li id="${ id }" class = "todo-list">
    <span id="span1">${text}</span>
    ${date}
    <button class="btn btn-info" id="edit" onclick="editTask('${id}', '${text}' ,'${date}');" aria-label="Edit">
      <i class="fas fa-edit" aria-hidden="true"></i>
    </button>
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#comfirmBox" onclick="deleteTask('${id}')">
      <i class="fas fa-trash-alt" aria-hidden="true" ></i>
    </button>
  </li>`;
  document.getElementById('task-data').insertAdjacentHTML('beforeend', li);
}

function reset() {
  document.getElementById("todo").value = "";
}

function editTask(id, text, date) {
  const edit = prompt("Edit Your Text !!", `${text}`);

  if(edit) {
    todoArray.map((todo) => {
      if(todo.id === +id) {
        todo.text = edit;
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(todoArray));
    console.log(todoArray)
    todoArray.map((e) => {
      if(e.id === +id) {
        let updateData = document.getElementById(id).querySelector('span').innerText;
        updateData = edit;
        document.getElementById(id).querySelector('span').innerText = updateData;
      }
    });
  }
}
function asce() {
  const stores_li = document.querySelectorAll('.todo-list');
  Array.from(stores_li).sort((a, b) => a.id - b.id ).forEach(el => el.parentNode.appendChild(el));
  }

function desc() {
  const stores_li = document.querySelectorAll('.todo-list');
  Array.from(stores_li).sort((a, b) => b.id - a.id ).forEach(el => el.parentNode.appendChild(el));
}

function deleteTask(id) {
  let confirm = new bootstrap.Modal(document.getElementById('comfirmBox'), {});
  confirm.show();
  const confirmValue = document.getElementById('yes').value;
  console.log(confirmValue)
  if (confirmValue == "yes") {
    deleteData = todoArray.filter((e) => (e.id !== +id));
    document.getElementById(`${id}`).remove();
    localStorage.setItem("todos", JSON.stringify(deleteData));
  }
  confirm.close();
}

