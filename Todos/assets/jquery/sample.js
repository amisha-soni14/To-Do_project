$(document).ready(function () {
  debugger
  $("#Save").click(function () {
    var person = new Object();
    person.name = $('#name').val();
    person.surname = $('#surname').val();
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      type: 'POST',
      dataType: 'json',
      data: person,
      success: function (data, textStatus, xhr) {
        console.log(data);
      },
      error: function (xhr, textStatus, errorThrown) {
        console.log('Error in Operation');
      }
    });
  })
})
