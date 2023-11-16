let state = {};
const odds = [];
const evens = [];
const limbo = [];

// References
const form = document.querySelector(".the-form");
const numbank = document.getElementById("EventBank");

//https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/events

async function logMovies() {
  const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/events");
  const movies = await response.json();
  console.log(movies);
  return movies;
}

state = await logMovies();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //When we cick we want to add the item to the array
  //First, we need to grab the input value
  const inputValue = form.elements.number.value;
  state.push(inputValue);

  console.log(state);

  render();
})

console.log("state" + state);

render();

function render(){
  // Renders the Number Bank
  events.replaceChildren(Object.values(state));
  // Renders the odds number bank
  ///odd_nums.replaceChildren(...odds + ", ");
  // Renders the evens number bank
  //even_nums.replaceChildren(...evens + ", ");
}

/*sort1btn.addEventListener("click", () => {
  let j = 0;
  limbo.push(state.splice(0,1)[j++]);

  check_even(limbo[0]);
  limbo.splice(0);

  render();
})

sortAll.addEventListener("click", () => {

  //console.log(state.length)

  for (let i = 0; i < state.length; i++) {
    check_even(state[i]);
  }

  state = [];

  render();
})



// Global variables for the number count
let even_count = 0;
let odd_count = 0;

function check_even(num){
  
  if (num % 2 === 0){
    evens[even_count] = num;
    even_count++;
  }
  else{
    odds[odd_count] = num;
    odd_count++;
  }
}*/