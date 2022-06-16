let addButton, listItem, todoArray = [], liData, li, idValue;
$(document).ready(function() {
  $('#todo').keypress(function(e) {
    var key = e.which;
    if (key == 13) // the enter key code
    {
      $('#btn').click();
      return false;
    }
  });
  $('#btn').click(function() {
    const inputValue = $("#todo").val();
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
  })

  function displayData({id, text, date}) {
    li = `<li id="${ id }" class = "todo-list">
      <span class="span1">${text}</span>${date}

      <button class="btn btn-info" id="editTodo" value="${ id }" aria-label="Edit">
        <i class="fas fa-edit" aria-hidden="true"></i>
      </button>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmBox" id="delete" value="${ id }">
        <i class="fas fa-trash-alt" aria-hidden="true" ></i>
      </button>
      </li>`;
    $("#task-data").after(li);
  }

  function reset() {
    $("#todo").val('');
  }

  $(document).on("click","#editTodo",function(event) {
    let id = event.target.value;
    const edit = prompt("Edit Your Text !!");
    if(edit) {
      $.map(todoArray,function(todo) {
        if(todo.id === +id) {
          todo.text = edit;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(todoArray));
      $.map(todoArray,function(e){
        if(e.id === +id) {
          $(`#${id} .span1`).text(edit);
        }
      });
    }
  })

  $('#asce').click(function () {
    const stores_li = $('.todo-list');
    Array.from(stores_li).sort((a, b) => a.id - b.id ).forEach(el => el.parentNode.appendChild(el));
  })

  $('#desc').click(function () {
    const stores_li = $('.todo-list');
    Array.from(stores_li).sort((a, b) => b.id - a.id ).forEach(el => el.parentNode.appendChild(el));
  })

  $(document).on("click","#delete",function(event) {
    let confirm = new bootstrap.Modal($('#confirmBox'), {});
    idValue = event.target.value;
    confirm.show();
  })

  $('#deleteElement').click(function() {
    let deleteValue = todoArray.filter((e) => (e.id !== +idValue));
    $(`#${idValue}`).remove();
    $('.modal-backdrop').remove();
    localStorage.setItem("todos", JSON.stringify(deleteValue));
  })

  $("#sample").click(function() {
    id = Date.now();
    name = "Sample Todo";
    const today = new Date();
    date = `${today.getDate()} - ${(today.toLocaleString('default', { month: 'short' }) )} - ${today.getFullYear()}`;
    let data = `<li id="${ id }" class = "todo-list">
      <span class="span1">${name}</span>${date}

      <button class="btn btn-info" id="editTodo" value="${ id }" aria-label="Edit">
        <i class="fas fa-edit" aria-hidden="true"></i>
      </button>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmBox" id="delete" value="${ id }">
        <i class="fas fa-trash-alt" aria-hidden="true" ></i>
      </button>
      </li>`;
    $("#task-data").after(data);

  })
})
