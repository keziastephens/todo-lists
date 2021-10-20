console.log('scripts linked');

// selectors - grab our html elements
const taskBtn = document.querySelector(".add-task-btn");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

taskBtn.addEventListener("click", addTask)
taskList.addEventListener("click", deleteTask)



function addTask(event){
    event.preventDefault();
    console.log(taskInput.value);

    // created our div
    // create element function produces an html tag
    const taskDiv = document.createElement("div");
    // classList.add gives a class to our div element
    // this is what it will look like <div class="task-div"></div>
    taskDiv.classList.add("task-div");

    // create out li
    const newTask = document.createElement("li");
    newTask.classList.add("task-item");
    // innerText appends text into a tag <li>inner text</li>
    // newTask.innerText = "a task has been generated";
    newTask.innerText = taskInput.value;
    taskDiv.appendChild(newTask);

    
    // completed button
    const finishedBtn = document.createElement("button");
    finishedBtn.innerHTML = '<i class="fas fa-check"></i>';
    finishedBtn.classList.add("finished-btn");
    taskDiv.appendChild(finishedBtn);

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt test"></i>';
    deleteBtn.classList.add("delete-btn");
    // append our child elements to the parent
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv)
    taskInput.value = "" ;
}

function deleteTask(e){
    console.log(e.target);
    const taskItem = e.target;
    if(taskItem.classList[0] === 'delete-btn'){
        const task = taskItem.parentElement;
        task.remove();
        // taskItem.remove();
    }

    // if(taskItem.classList[0] === "finished-btn"){
    //     const task = taskItem.parentElement;
    //     task.classList.toggle("completed");
    // }
}



