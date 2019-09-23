document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.getElementById('create-task-form')
  let taskInput = document.getElementById('new-task-description')

  form.addEventListener('submit', function(e){
    
    e.preventDefault();
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    ul.append(li);
    
  })

});
