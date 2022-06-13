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
    // displayData(todoObj);
    reset();
  }
}
function reset() {
  $("#todo").val();
}
