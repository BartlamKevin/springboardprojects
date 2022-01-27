const gameContainer = document.getElementById("game");

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
    let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

    return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
    for (let color of colorArray) {
        // create a new div
        const newDiv = document.createElement("div");

        // give it a class attribute for the value we are looping over
        newDiv.classList.add(color);
        newDiv.setAttribute("id",color);
        // call a function handleCardClick when a div is clicked on
        newDiv.addEventListener("click", handleCardClick);

        // append the div to the element with an id of game
        gameContainer.append(newDiv);
    }
}


const allCards = shuffledColors.length;
let disableClick = document.getElementsByTagName("div");
let clickedCard = [];
// TODO: Implement this function!
function handleCardClick(event) {
    let color = this.classList;
    this.style.backgroundColor = color;
    clickedCard.push(this);
    if (clickedCard.length === 2){
        for(let x = 0; x < allCards; x++){
            disableClick[x].classList.toggle("noclick")
        // you can use event.target to see which element was clicked
        console.log("you just clicked", event.target);
        }
        if(clickedCard[0].id === clickedCard[1].id){
            clickedCard[0].classList.add("match");
            clickedCard[1].classList.add("match");
            for(let x = 0; x < allCards; x++){
                disableClick[x].classList.toggle("noclick");
            }
            clickedCard = [];
            
        }
        else{
            setTimeout(function(){
                for(let x = 0; x < allCards; x++){
                    disableClick[x].classList.toggle("noclick");
                }
                clickedCard[0].removeAttribute("style");
                clickedCard[1].removeAttribute("style");
                clickedCard=[];
            },1000);
        }
    }
}
// when the DOM loads
createDivsForColors(shuffledColors);
