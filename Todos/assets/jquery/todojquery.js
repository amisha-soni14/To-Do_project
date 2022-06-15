let addButton, listItem, todoArray = [], liData, li, idValue;
$(document).ready(function() {
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

      <button class="btn btn-info" id="edit" aria-label="Edit">
        <i class="fas fa-edit" aria-hidden="true"></i>
      </button>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmBox" id="delete">
        <i class="fas fa-trash-alt" aria-hidden="true" ></i>
      </button>
      </li>`;
    $("#task-data").after(li);
  }

  function reset() {
    $("#todo").val('');
  }

  $(document).on("click","#edit",function(event) {
  debugger
    let id = event.target.todoObj;
    console.log(id)
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

  $('#delete').click(function (id) {
    let confirm = new bootstrap.Modal($('#confirmBox'), {});
    idValue = id;
    confirm.show();
  })

  $('#deleteElement').click(function() {
    deleteData = todoArray.filter((e) => (e.id !== +idValue));
    $(`#${idValue}`).remove();
    $('.modal-backdrop').remove();
    localStorage.setItem("todos", JSON.stringify(deleteData));
  })


});
// $(document).on('keypress',function(e) {
//   if(e.which == 13) {

//   }
// });

