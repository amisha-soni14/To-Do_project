var addButton, data = [], statement, obj, listItem, getData;

function todo() {
  addButton = document.getElementById('todo').value;
  console.log(addButton)
  addData(addButton);
}
function addData(statement) {
  let today = new Date();
  let date = today.getDate()+' - '+(today.toLocaleString('default', { month: 'short' }) )+' - '+today.getFullYear();
  console.log(date);
  obj = {
    text : statement,
    id : date
  };
  data.push(obj);
  localStorage.setItem("value", JSON.stringify(data));
  var retrievedData = localStorage.getItem("value");
  getData = JSON.parse(retrievedData);
  console.log(getData);
  displayData();
  reset();
}

function displayData() {
  listItem = getData.map(function(element) {
    console.log(`${element.text}`)
    return `${element.text}`;
  })
  let createDate = getData.map(function(ele) {
    console.log(`${ele.id}`)
    return `${ele.id}`;
  })
  document.getElementById("display").innerHTML = listItem;
  document.getElementById("dis-date").innerHTML = `Created at : ${createDate}`;
}

function reset() {
  document.getElementById("todo").innerHTML = "  ";
}

function editTask() {
  let edit = prompt("Edit Your Text !!", `${listItem}`);
  let editData = getData.findIndex((obj => obj.text = edit));
  getData[editData].text = edit;
  localStorage.setItem("value", JSON.stringify(getData));
  let updateData = getData.map(function(element) {
    return `${element.text}`;
  })
  document.getElementById("display").innerHTML = updateData;
}

function deleteTask() {
  let removedEl = getData.pop();
  console.log(removedEl);
  localStorage.setItem("value", JSON.stringify(getData));
  let removeData = getData.map(function(element) {
    return `${element.text}${element.id}`;
  })
  document.getElementById("task-data").innerHTML = removeData;
}

