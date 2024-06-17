import { addList, deleteList, doneList, editList } from "./list.js";

export const listGroupHandler = (event) => {
    // console.log(event.target);
    const list = event.target.closest(".list")
    // console.log(list);
    if(event.target.classList.contains("list-del-btn")){
       deleteList(list.id);
    }
    if(event.target.classList.contains("list-edit-btn")){
        editList(list.id);
    }
    if(event.target.classList.contains("list-done-check")){
        doneList(list.id)
    } 
}

export const addTaskBtnHandler = () => {
    if(taskInput.value.trim()){
        addList(taskInput.value)
    }else{
        alert("You need to fill task.")
    }
}

export const taskInputHandler = (event) => {
    if(event.key === "Enter"){
        addList(taskInput.value)
    } 
}

export const deleteAllHandler = () => {
    if(window.confirm("Are you sure to delete all lists?")){
    const allList = listGroup.querySelectorAll(".list");
    allList.forEach((list) => {
        list.remove();
        })
    }
}

export const doneAllHandler = () => {
   if(window.confirm("Are you sure to done all lists?")){
    const allList = listGroup.querySelectorAll(".list");
    allList.forEach((list) => {
        list.querySelector(".list-done-check").checked =true;
        doneList(list.id)
        })
   }
}