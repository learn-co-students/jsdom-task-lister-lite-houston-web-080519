document.addEventListener("DOMContentLoaded", () => {
  // your code here

array = []

  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let item = document.querySelector('#new-task-description')
    console.log(item.value)
    let list = document.querySelector('#tasks')
    let element = document.createElement('li')
    list.append(element)
    element.append( item.value )
    
    let button = document.createElement('button')
    element.append( button )
    button.innerText = "x"
   
    button.addEventListener('click', function(e){
      element.remove()
    })
    
  })

  




});








