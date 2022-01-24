

const toDoForm = document.querySelector("form");
const list = document.getElementById("list");
const itemInput = document.getElementById("input");
const savedList = JSON.parse(localStorage.getItem("saves")) || [];

for (let x = 0; x < savedList.length; x++){
    let newLi = document.createElement("li");
    let remove = document.createElement("button");
        newLi.innerText = savedList[x].saves;
        newLi.complete = savedList[x].complete ? true : false; //is the item marked as complete?
        if (newLi.complete){
            newLi.classList.add("cross-out");
        }
        remove.innerText = "Remove"; 
        list.appendChild(newLi);
        newLi.appendChild(remove);
        remove.setAttribute("data-id", [x]); //give each item and button an ID based on the list length
        newLi.setAttribute("data-id", [x]);
};

toDoForm.addEventListener("submit",function(event){
    event.preventDefault();
    let newLi = document.createElement("li");
    let liVal = document.getElementById("input").value;
    let remove = document.createElement("button");
    newLi.innerText = liVal;
    newLi.complete = false;
    if (newLi.innerText == ""){
        return false; //no empty to do list entries
    }
    else{
        const itemId = savedList.length;
        newLi.appendChild(remove); //add button
        list.appendChild(newLi); //add li
        remove.innerText = "Remove";
        remove.setAttribute("data-id", itemId); //set the id to how long the list is starting at 0
        newLi.setAttribute("data-id", itemId);
        savedList.push({saves : newLi.innerText.replace(remove.innerText,""), complete : false});//deletes the text of the button so it doesn't show in the stored list
        localStorage.setItem("saves", JSON.stringify(savedList));
        itemInput.value="";//resets the todo input
    }
});

list.addEventListener("click",function(event){
    let clicked = event.target;
    let item = savedList;
    let clickId = clicked.getAttribute("data-id");
    if (event.target.tagName === "BUTTON"){
        savedList.splice(clickId,1);//removes item from array
        localStorage.setItem("saves", JSON.stringify(savedList));
        event.target.parentNode.remove();//deletes item
    }else if (event.target.tagName === "LI"){
        event.target.classList.toggle("cross-out"); //let's you decide that a tast is not complete
        if(event.target.classList.contains("cross-out")){//checks to see if an item is corssed out
            item[clickId].complete = true;
        }else{
            item[clickId].complete = false;
        }
        localStorage.setItem("saves", JSON.stringify(savedList));
    };
});
