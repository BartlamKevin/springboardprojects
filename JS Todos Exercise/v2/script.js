
const toDoForm = document.querySelector("form");
const list = document.getElementById("list");
const itemInput = document.getElementById("input");

const savedList = JSON.parse(localStorage.getItem("saves")) || [];
for (let x = 0; x < savedList.length; x++){
    let newLi = document.createElement("li");
    let remove = document.createElement("button");
        newLi.innerText = savedList[x].saves;
        newLi.complete = savedList[x].complete ? true : false;
        if (newLi.complete){
            newLi.classList.add("cross-out");
        }
        remove.innerText = "Remove"; 
        list.appendChild(newLi);
        newLi.appendChild(remove);
        remove.setAttribute("data-id", [x]);
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
        newLi.appendChild(remove);
        list.appendChild(newLi);
        remove.innerText = "Remove"; 
        remove.setAttribute("data-id", itemId);
        newLi.setAttribute("data-id", itemId);
        savedList.push({saves : newLi.innerText.replace(remove.innerText,""), complete : false});
        localStorage.setItem("saves", JSON.stringify(savedList));
        itemInput.value="";

    }
});

list.addEventListener("click",function(event){
    let clicked = event.target;
    let y = clicked.getAttribute("data-id");
    if (event.target.tagName === "BUTTON"){
        savedList.splice(y,1);
        localStorage.setItem("saves", JSON.stringify(savedList));
        event.target.parentNode.remove();
    }else if (event.target.tagName === "LI"){
        if(!clicked.complete){
            clicked.classList.add("cross-out");
            savedList[y].complete = true;

            localStorage.setItem("saves", JSON.stringify(savedList));
        } 
        else{
            clicked.classList.remove("cross-out");
            savedList[y].complete = false;
            localStorage.setItem("saves", JSON.stringify(savedList));
        }


    } 
    for (let x = 0; x < savedList.length; x ++){
        if (savedList[x].saves === clicked.innerText){
            savedList[x].complete = !savedList[x].complete;
            
            localStorage.setItem("saves", JSON.stringify(savedList));
        }

    }
    console.log(y)
});

