const toDoForm = document.querySelector("form");
const list = document.querySelector("#list");
const itemInput = document.querySelector("#input");

localStorage.setItem("savedList", JSON.stringify(list.querySelectorAll("li")));

list.addEventListener("click",function(event){
    if (event.target.tagName === "BUTTON"){
        event.target.parentElement.remove();
    }
    else if (event.target.tagName === "LI"){
        event.target.classList.toggle("cross-out");
    }
});

toDoForm.addEventListener("submit",function(event){
    event.preventDefault();
    const newLi = document.createElement("li");
    const remove = document.createElement("button");   
    newLi.innerText = itemInput.value;
    remove.innerText = "Remove";       
    if (newLi.innerText == ""){
        return false; //no empty to do list entries
    }
    else{
        newLi.setAttribute(data-key);
        newLi.appendChild(remove);
        list.appendChild(newLi);
        itemInput.value="";
    }
});

