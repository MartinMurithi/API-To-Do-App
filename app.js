
//fetch data using api

const allDataList = document.querySelector(".all_tasks_list");
const completeTasksList = document.querySelector(".completed_tasks_list");
const uncompleteTaskList = document.querySelector(".uncompleted_tasks_list");

const API_LINK = "https://dummyjson.com/todos";
//const error = ""

async function fetchTodos(url){
    let res;
    let jsonData;

    try{
    res = await fetch(url);
    jsonData = await res.json();
    }catch(error){
        alert(error);
    }
    console.log(jsonData);


    //display all tasks

    jsonData.todos.forEach(task => {
        console.log(task);

        allDataList.innerHTML+= `<li> 
        <p>Task ID : ${task.id}</p>
        <p>Task : ${task.todo}</p>
        <p>Completed :${task.completed}</p>
        <p>User ID : ${task.userId}</p>
        </li>`
        

        //display completed tasks
        if(task.completed === true){
            completeTasksList.innerHTML += `<li> 
            <p>Task ID : ${task.id}</p>
            <p>Task : ${task.todo}</p>
            <p>Completed :${task.completed}</p>
            <p>User ID : ${task.userId}</p>
            </li>`
        }

        else if(task.completed === false){
            uncompleteTaskList.innerHTML += `<li>
            <p>Task ID : ${task.id}</p>
            <p>Task : ${task.todo}</p>
            <p>Completed :${task.completed}</p>
            <p>User ID : ${task.userId}</p>
            </li>`
        }
    })

}

fetchTodos(API_LINK);