let addButton, listItem, todoArray = [], liData, li;
$(document).ready(function() {

});
function addTodo() {
  const inputValue = $("#todo").val();
  console.log(inputValue);
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
    todoArray.push(todoObj)
    localStorage.setItem("todos", JSON.stringify(todoArray));
    displayData(todoObj);
    reset();
  }
}

function displayData({id, text, date}) {
  // debugger
  li = `<li id="${ id }" class = "todo-list">
    <span id="span1">${text}</span>${date}

    <button class="btn btn-info" id="edit" onclick="editTask('${id}', '${text}' ,'${date}');" aria-label="Edit">
      <i class="fas fa-edit" aria-hidden="true"></i>
    </button>
    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#comfirmBox" onclick="deleteTask('${id}')">
      <i class="fas fa-trash-alt" aria-hidden="true" ></i>
    </button>
    </li>`;
  console.log(li);
  $("#task-data").after(li);
}

function reset() {
  $("#todo").val('');
}

function editTask(id, text, date) {
  const edit = prompt("Edit Your Text !!", `${text}`);
  if(edit) {
    debugger
    $.map(todoArray,function(todo) {
      if(todo.id === +id) {
        todo.text = edit;
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(todoArray));
    $.map(todoArray,function(e){
      if(e.id === +id) {
        let updateData = $('#span1').append(edit);
        console.log(updateData)
        // updateData = edit;
        $('updateData').appendTo('span');
      }
    });
  }
}
