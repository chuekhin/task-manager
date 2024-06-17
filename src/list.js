import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

export const tasks =["go to korea","work there","meet my idol"]

export const updateTaskTotal = () => {
    const lists = document.querySelectorAll(".list");
    taskTotal.innerText = lists.length;
  };
  
  export const updateDoneTaskTotal = () => {
    const lists = document.querySelectorAll(".list input:checked");
    doneTaskTotal.innerText = lists.length;
  };
  
  //create new list
  export const createNewList = (currentTask) => {
  
      const list = listTemplate.content.cloneNode(true);
      // console.log(list);
      list.querySelector(".list").id = "list" + uuidv4();
      list.querySelector(".list-task").innerText=currentTask;
    return list;
  };
  
  //delete list
  export const deleteList = (listId) => {
      // console.log(listId);
      const currentList = document.querySelector(`#${listId}`)
      // console.log(currentList);
      Swal.fire({
        title: "Are you sure to delete?",
        text: "Delete this list!",
        icon: "warning",
        showCancelButton : true,
        confirmButtonText :"Yes,delete it!"
      }).then((result) => {
        if(result.isConfirmed){
            currentList.classList.add("animate__animated","animate__hinge");
            currentList.addEventListener("animationend",() => {
            currentList.remove();
            })
        }  
      })
  }
  
  //edit list
  export const editList = (listId) => {
          const currentList = document.querySelector(`#${listId}`)
  
          const listDoneCheck = currentList.querySelector(".list-done-check");
          const listEditBtn = currentList.querySelector(".list-edit-btn");
          const listTask = currentList.querySelector(".list-task");
  
          listEditBtn.setAttribute("disabled",true);
          listDoneCheck.setAttribute("disabled",true);
          const currentTask = listTask.innerText;
          const newTaskInput = document.createElement("input");
          listTask.after(newTaskInput);
          newTaskInput.className =
          "border border-stone-950 font-mono w-[180px] px-2 py-1 focus:outline-none";
          newTaskInput.value = currentTask;
          newTaskInput.focus();
          listTask.classList.add("hidden");
  
          newTaskInput.addEventListener("blur", () => {
          // console.log(newTaskInput.value);
          listEditBtn.removeAttribute("disabled");
          listDoneCheck.removeAttribute("disabled")
          listTask.classList.remove("hidden");
          listTask.innerText = newTaskInput.value;
          newTaskInput.remove();
          });
  
          newTaskInput.addEventListener("keyup", () => {
          // console.log(newTaskInput.value);
          if(event.key == "Enter"){
              listEditBtn.removeAttribute("disabled");
              listDoneCheck.removeAttribute("disabled")
              listTask.classList.remove("hidden");
              listTask.innerText = newTaskInput.value;
              newTaskInput.remove();
          }
      });
  }
  

  //done list
  export const doneList = (listId) => {
  
          const currentList = document.querySelector(`#${listId}`)
          const listDoneCheck = currentList.querySelector(".list-done-check");
          const listEditBtn =currentList.querySelector(".list-edit-btn");
          const listTask = currentList.querySelector(".list-task");
        //   updateDoneTaskTotal();
          listTask.classList.toggle("line-through");
          currentList.classList.add("duration-300");
          currentList.classList.toggle("opacity-20");
          currentList.classList.toggle("scale-90");
          if(listDoneCheck.checked){
              listEditBtn.setAttribute("disabled",true)
          }else{
              listEditBtn.removeAttribute("disabled")
          }
  }
  

  //addlist
  export const addList = (currentTask) => {
      // console.log(taskInput.value);
      listGroup.append(createNewList(currentTask));
      taskInput.value = null;
    //   updateTaskTotal();
    };
  