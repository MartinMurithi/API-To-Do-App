//QUERY SELECTORS
const allTasksContainer = document.querySelector(".all_tasks");
const completedTasksContainer = document.querySelector(".completed_tasks");
const uncompleteTasksContainer = document.querySelector(".uncompleted_tasks");

const allTaskList = document.querySelector(".all_tasks_list");
const completeTasksList = document.querySelector(".completed_tasks_list");
const uncompleteTaskList = document.querySelector(".uncompleted_tasks_list");

const hideTasksBtn = document.querySelector(".show_all_tasks");
const hideCompleteTasksBtn = document.querySelector(".show_completed_tasks");
const hideUncompleteTasksBtn = document.querySelector(".show_uncompleted_tasks");

const API_LINK = "https://dummyjson.com/todos";

//EVENT LISTENERS
hideTasksBtn.addEventListener('click', hideAllTasks);
hideCompleteTasksBtn.addEventListener('click', hideCompleteTasks);
hideUncompleteTasksBtn.addEventListener('click', hideUncompleteTasks);

async function fetchTodos(url){
    let res;
    let jsonData;
    
    allTaskList.style.display = "block";
    completeTasksList.style.display = "block";
    uncompleteTaskList.style.display = "block";
    
    try{
    res = await fetch(url);
    jsonData = await res.json();
    }catch(error){
        alert(error);
    }

    console.log(jsonData);

    //display all tasks
    jsonData.todos.forEach(task => {
        allTaskList.innerHTML+=
        `<li> 
            <p>Task ID : ${task.id}</p>
            <p>Task : ${task.todo}</p>
            <p>Completed :${task.completed}</p>
            <p>User ID : ${task.userId}</p>
        </li>`
        
    //display completed tasks
        if(task.completed === true){
        completeTasksList.innerHTML +=
        `<li> 
            <p>Task ID : ${task.id}</p>
            <p>Task : ${task.todo}</p>
            <p>Completed :${task.completed}</p>
            <p>User ID : ${task.userId}</p>
        </li>`
    }

    else if(task.completed === false){
        uncompleteTaskList.innerHTML +=
        `<li>
            <p>Task ID : ${task.id}</p>
            <p>Task : ${task.todo}</p>
            <p>Completed :${task.completed}</p>
            <p>User ID : ${task.userId}</p>
        </li>`
        }
    });
}

function hideAllTasks(){
    
    if (allTaskList.style.display === "block") {
        allTaskList.style.display = "none";
        hideTasksBtn.innerHTML = "Show Tasks";
        allTasksContainer.style.height = "150px";
    }
    else if(allTaskList.style.display === "none"){
        allTaskList.style.display = "block";
        hideTasksBtn.innerHTML = "Hide Tasks"
        allTasksContainer.style.height = "auto";
    }
}

function hideCompleteTasks(){
    if (completeTasksList.style.display === "block") {
        completeTasksList.style.display = "none";
        hideCompleteTasksBtn.innerHTML = "Show Tasks";
        completedTasksContainer.style.height = "150px";
    }
    else if(completeTasksList.style.display === "none"){
        completeTasksList.style.display = "block";
        hideCompleteTasksBtn.innerHTML = "Hide Tasks"
        completedTasksContainer.style.height = "auto";
    }
}

function hideUncompleteTasks(){
    if (uncompleteTaskList.style.display === "block") {
        uncompleteTaskList.style.display = "none";
        hideUncompleteTasksBtn.innerHTML = "Show Tasks";
        uncompleteTasksContainer.style.height = "150px";
    }
    else if(uncompleteTaskList.style.display === "none"){
        uncompleteTaskList.style.display = "block";
        hideUncompleteTasksBtn.innerHTML = "Hide Tasks"
        uncompleteTasksContainer.style.height = "auto";
    }
}

fetchTodos(API_LINK);