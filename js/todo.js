const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const list = document.createElement("li");
    list.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const btn = document.createElement("button");
    btn.innerText = "Del";
    btn.addEventListener("click", delToDo)
    list.appendChild(span);
    list.appendChild(btn);
    toDoList.appendChild(list);
}

function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}