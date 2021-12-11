const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// toDos array는 localStorage와 다르다.
// localStorage는 toDos를 복사한 것이다.
// localstorage에는 text만 들어갈 수 있다.
// toDos에게 object형식으로 id와 text를 줄 것이다.



function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement; 
    // event가 발생한 대상(target) 얻기 : event.target
    // 발생한 event의 parentElement는 li이다.
    console.dir(li.id);
    li.remove();

}

// 테그를 만들고 append로 붙이는 작업까지 해야한다.
function paintToDo(newTodo) {
    const li = document.createElement("li");
    // newTodo를 추가하면서 생성된 id값을 li의 id값으로 넣어주기
    li.id = newTodo.id;
    const span = document.createElement("span");
    // newTodo만 넣으면 object형태로 보이기 때문에
    // newTodo에 있는 text를 받아와야한다
    span.innerHTML = newTodo.text; 
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    // append는 마지막에 놓여야 한다.
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(newTodo);
    toDoInput.value = ""; // 입력창을 비워놓음
    const newTodoObj ={
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);  // push는 toDos 배열의 맨 뒤에 newTodoObj값을 추가하는 함수
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// '["plan1","plan2","plan3"]'  과 같은 형식으로 string이 savedToDos에 저장됨

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
//  parsedToDos.forEach(item => {console.log("this is the turn of ",item)});
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}