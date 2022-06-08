let addButton, listItem, todoArray = [], liData, li;

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
  // sorting(todoObj);
}

function displayData({id, text, date}) {
  li = `<li id="${ id }">
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
function asce() {
  debugger
    todoArray.sort((a, b) => a.id - b.id);
    //console.log(sorted)
    console.log(todoArray)
  }
function desc() {

  todoArray.sort((a, b) => b.id - a.id);
  //console.log(sorted)
  console.log(todoArray)
  localStorage.setItem("todos", JSON.stringify(todoArray));
  todoArray.map(function(ele) {
    debugger
    let arrangeData = document.getElementById('task-data').querySelector('li').innerText;
    console.log(arrangeData)
    document.querySelector('li').innerText = arrangeData;
  })

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

