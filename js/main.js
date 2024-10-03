// In-Class-Lab-3
// Jane Griggs

// Part 1
// Linked JS File
console.log('js file successfully linked');

// Select div with the class 'javascript-resources'
const javaResources = document.querySelector('.javascript-resources');
// Select butoon with the id of 'show-resources'
const showResourceBtn = document.querySelector('#show-resources');


// Add an event listener to the button that will listen to the 'click' event
// Converted the show-resources selection to a variable called showResourceBtn
// addEventListener to the variable showResourceBtn
// Remove the class 'd-none' from the 'div' with the class 'javascript-resources'
// Here the button is selected, an eventListener created to monitor for a click,
// Then the function targets a different div-class etc to make something else happen.
// .d-none was responsible for hiding the list of things.
showResourceBtn.addEventListener('click', (event) => {
    javaResources.classList.remove('d-none');
});

// Part 2

// Add an event listener on the element selected in the previous step, that will listen
// to the mouse over event
// Pass in the event object into the event handler function eg (event) => {
// Use console.log to print out the 'event.target', it will allow you to see the link list of elements in your
// console of each thing you hover over.
// On the event.target use the method "classList.add" to add the class named "fw-bold".
// a. When you only hover over the first link item you should see something like this
javaResources.addEventListener('mouseover', (event) => {
    console.log(event.target.classList.add('fw-bold'));
});

// add does not have a return value, so you see undefined in the console log, but the bolding is working
// correctly

// Part 3

// You see an issue with your application. The idea is that you only want to bold the text of the item you are hovering over. In the image below, all links get highlighted when you hover your mouse over the other items in the list. You need to fix this (probably with another event listener of mouseout)
// Add another event listener on the div list group selected in the first step (the last section) that listens to mouseout events
// In the event handler on the event.target use the method 'classList.remove' to remove the class named 'fw-bold'
// The handler will remove the class when you move away from an item in the list.
javaResources.addEventListener('mouseout', (event) => {
    event.target.classList.remove('fw-bold');
});

// Part 4

// Add an event listener to the list to listen to the 'click' event
// In this event handler use the same techniques in the previous steps to add the class 'fst-italic' on the event.target
javaResources.addEventListener('click', (event) => {
    event.target.classList.add('fst-italic');
});


