// const button = document.querySelector('button'); // select the only button on the page and store it in a variable
// const input = document.querySelector('input'); // select the only input on the page and store it in a variable
// const list = document.querySelector('ul'); // select the only ul on the page and store it in a variable
//
// function addGoal(){
//
//     const enteredValue = input.value; // store the value of the input in a variable
//     const newListItem = document.createElement('li'); // create a new list item
//     newListItem.textContent = enteredValue; // set the text content of the new list item to the value of the input
//     list.appendChild(newListItem); // append the new list item to the ul
//     input.value = ''; // set the value of the input to an empty string
// }
//
// button.addEventListener('click', addGoal); // add an event listener to the button

Vue.createApp({

    data() {
        return{ //object
            goals: [],
            enteredValue: '',
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');