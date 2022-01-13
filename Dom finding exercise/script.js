// Select the section with an id of container without using querySelector.
document.getElementById('container');

// Select the section with an id of container using querySelector.
document.querySelector('#container');

// Select all of the list items with a class of “second”.
document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third');

// Give the section with an id of container the text “Hello!”.
const hello = document.querySelector('#container');
hello.innerText = "Hello!";

// Add the class main to the div with a class of footer.
const addF = document.querySelector('.footer');
addF.classList.add('main');

// Remove the class main on the div with a class of footer.
addF.classList.remove('main');

// Create a new li element.
const newLi = document.createElement('li');

// Give the li the text “four”.
const ul = document.querySelector('ul');
newLi.textContent = "four";
ul.append(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olLoop = document.querySelectorAll('ol li');
for (let ol of olLoop){
    ol.style.backgroundColor="green"
};
// Remove the div with a class of footer
const removeF = document.querySelector('#footer');
removeF.remove();