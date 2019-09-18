document.addEventListener("DOMContentLoaded", function(e){
  // your code here
  let form = document.querySelector("#create-task-form");
  let listItem = document.getElementById('tasks');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(`${form[0].value}`));
    listItem.appendChild(item);
    // debugger;
  });
});
