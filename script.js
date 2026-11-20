
function addTask() {
  

    const newTask = document.createElement('li');

    const taskList = document.getElementById('taskList');

    newTask.textContent = document.getElementById('inputTask').value;

    taskList.appendChild(newTask);
    document.getElementById('inputTask').value =""
     deleteTask(newTask);
editTask(newTask);
}

function deleteTask(newTask)
{
    const deletebtn = document.createElement('button')
    deletebtn.textContent = "Delete"
    newTask.appendChild(deletebtn)
    deletebtn.onclick = function(){
        newTask.remove()
    }
}

function editTask(newTask)
{
     const editbtn = document.createElement('button')
     editbtn.textContent= "Edit"
     newTask.appendChild(editbtn)
     editbtn.onclick =function(){
       const oldTask = newTask.firstChild.textContent;
       const updatedTask = prompt("edit your task" , oldTask);
            if (updatedTask !== null && updatedTask.trim() !== "") {
            newTask.firstChild.textContent = updatedTask;
            }
        }

     }
