let TaskEnterField = document.getElementById('task-field');
let AddBtn = document.getElementById("add-btn");
let TaskContainer = document.querySelector(".task-container");

let removeAllButton = document.getElementById("remove-All");



let TaskBag = [];

let infoEl;

document.addEventListener("DOMContentLoaded", () =>{
  let showData = [...JSON.parse(localStorage.getItem("TodoTask"))];

  showData.forEach((item)=>{
    let listEl = document.createElement("li");

    infoEl = document.createElement("p");
    
    listEl.innerHTML = item.todo;

    TaskContainer.appendChild(listEl);

    TaskContainer.appendChild(infoEl);

    listEl.setAttribute("onClick", "removeLocal(event)"); 
    
  })

})

function addTask(){

  let taskDetail = {
    todo: TaskEnterField.value,
  }

  let listEl = document.createElement("li");

   infoEl = document.createElement("p");

  listEl.innerText = taskDetail.todo;

  TaskContainer.appendChild(listEl);

  TaskContainer.appendChild(infoEl)

  TaskBag.push(taskDetail);

  localStorage.setItem("TodoTask", JSON.stringify(TaskBag)); 

  listEl.setAttribute("onClick", "removeLocal(event)");

  TaskEnterField.value = "";

}


function removeLocal(event){
  let listText = event.target.innerText;

  let showData = [...JSON.parse(localStorage.getItem("TodoTask"))];

  showData.forEach((item)=>{
   if(listText === item.todo){
    showData.splice(showData.indexOf(item), 1); 
    TaskContainer.removeChild(event.target);
    TaskContainer.removeChild(infoEl);
   }
  })
  localStorage.setItem("TodoTask", JSON.stringify(showData));

}

function removeAll(){
  localStorage.clear();
  location.reload();
}

removeAllButton.addEventListener("click", removeAll);
AddBtn.addEventListener("click", addTask);