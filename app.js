//selectors
const totdoinput=document.querySelector('.todo-input'); 
const totdobutton=document.querySelector('.todo-button');
const totdolist=document.querySelector('.todo-list');
const deloption=document.querySelector('.del');
const filteroption=document.querySelector('.filter-todo');
//event listeners
// types of events
// onclick
//onchange
//onmouseover/out
//onkeydown 
//onload
totdobutton.addEventListener('click',addtodo);
filteroption.addEventListener('click',filtertodo);
deloption.addEventListener('click',deleteall);
totdolist.addEventListener('click',deletecheck);
window.addEventListener("scroll",scrollfunction)
totop.addEventListener("click",backtotop);

//Functions
function deleteall(){
    var del=totdolist;
    while(del.hasChildNodes()){
        del.removeChild(del.firstChild);
    }
}
function addtodo(event){
    event.preventDefault();
    //todo div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    //create li 
    const newtodo = document.createElement("li");
    newtodo.innerText=totdoinput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);
    //check mark button
    const completedbutton=document.createElement('button');
    completedbutton.innerHTML='Done';
    completedbutton.classList.add('complete-btn');
    todoDiv.appendChild(completedbutton)
    //trash button
    const trashbutton=document.createElement('button');
    trashbutton.innerHTML='Del';
    trashbutton.classList.add('trash-btn');
    todoDiv.appendChild(trashbutton);
    //append to list
    totdolist.appendChild(todoDiv);
    totdoinput.value='';
}


function deletecheck(e){
    const item=e.target;
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filtertodo(e){
    const todos=totdolist.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display='flex';
                }else{
                    todo.style.display="none";
                }
                break;
        }
    });
}