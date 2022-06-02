var addButton, data =[] , statement , obj ,listItem , getData;

function todo() {
  addButton = document.getElementById('todo').value;
  addData(addButton);
  // displayData(listItem);
}
function addData(statement) {
  // debugger
  //let date = new Date();
  obj = {
  text : statement,
  id:new Date()
  };

  data.push(obj);
  localStorage.setItem("value", JSON.stringify(data));
  var retrievedData = localStorage.getItem("value");
  getData = JSON.parse(retrievedData);
  console.log(getData);
  //document.getElementById("display").innerHTML = getData;
}

function displayData() {
  let listItem = getData.map(function(element){
    console.log(`${element.text} ${element.id}`)
    return `${element.text} ${element.id}`;
  })
  document.getElementById("display").innerHTML = listItem;
}
