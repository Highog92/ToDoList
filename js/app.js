const todoInput = document.querySelector('#new-todo')
const submitBtn = document.querySelector('#submit-btn')
const todoList = document.querySelector('#todo-list')
let myTodos = []

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // fang input value
    myTodos.push(todoInput.value);
    console.log(myTodos);

    // kald function som printer li
    createLi()

})

// function som printer li-element
function createLi() {

    // loop over vores todo array

    // ryd innerhtml først
    // ----
    myTodos.forEach((todo) => {
        let todoTemplate = `<li class="todo">
        <span>${todo}</span><button class="delete"></button>
      </li>`

        // tilføj til innerhtml
        todoList.innerHTML += todoTemplate
    })

}

// function som sletter fra array

