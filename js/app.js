console.log('party rock')

let inpt = document.getElementById('input-text')
//console.log(inpt)
let btn = document.getElementById('submit-button')
//console.log(btn) 
let list = document.getElementById('todo-list')
//console.log(list)
let clearBtn = document.getElementById('clear-button')
//console.log(clearBtn) 


list.addEventListener('click', function(evt){
  console.log('ayoo') 
})

//pesudocode for: delete click
//grab the indiv list item
//delete the item that is being clicked on 

btn.addEventListener('click', function(evt){
  //console.log("hey")
  const newLi = document.createElement('li')
  newLi.textContent = inpt.value
  if (inpt.value !== ""){
    document.querySelector('ul').appendChild(newLi)
  inpt.value = ""

  clearBtn.addEventListener('click', function(evt){
    document.getElementById('todo-list').removeChild(newLi)
    inpt.value = "" 
  })
  }
})




// clearBtn.addEventListener('click', function(evt){
//   document.getElementById('todo-list').removeChild(newLi)
//   inpt.value = "" 
// })
//peudocode for reset/clear
//look at the ul ..... REMOVE ITS CHILDREN !!!
  //
// also do somethin like 
//return inpt.value=""
//or something

// // - Create a new `li` element.
// // - Set the text of the newly created `li` element to the text that the user has entered into the `input` element.
// // - Reset the text in the `input` field to an empty string.
// // - Add the new `li` element to the page, inside the `ul` element.
