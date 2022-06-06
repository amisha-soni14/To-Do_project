let addButton, listItem, todoArray = [], liData;

function addTodo() {
  const today = new Date();
  const date = `${today.getDate()} - ${(today.toLocaleString('default', { month: 'short' }) )} - ${today.getFullYear()}`;
  const todoObj = {
    id: Date.now(),
    text: document.getElementById('todo').value,
    date: date
  };

  todoArray.push(todoObj);
  localStorage.setItem("todos", JSON.stringify(todoArray));
  displayData(todoObj);
  reset();
}

function displayData({id, text, date}) {
  const li = `<li id="${ id }">
    <span id="span1">${text}</span>
    ${date}
    <button class="btn btn-info" id="edit" onclick="editTask('${id}', '${text}' ,'${date}');" aria-label="Edit">
      <i class="fas fa-edit" aria-hidden="true"></i>
    </button>
    <button class="btn btn-danger" id="delete" onclick="deleteTask('${id}');">
      <i class="fas fa-trash-alt" aria-hidden="true"></i>
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




function deleteTask(id) {
debugger
  //const deleteId = id;
  deleteData = todoArray.filter((e) => (e.id !== +id));
      // todoArray.splice(0,todoArray.findIndex(deleteId));
  console.log(deleteData)
  localStorage.setItem("todos", JSON.stringify(deleteData));
}
//
//   console.log(removedEl);
//   localStorage.setItem("todos", JSON.stringify(todoArray));
//   let removeData = todoArray.map(function(element) {
//     return `${element.text}${element.date}`;
//   })
//   document.getElementById("task-data").innerHTML = removeData;
// }

