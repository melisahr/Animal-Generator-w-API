/*Free API Website
https://github.com/public-apis/public-apis*/

let duck = document.querySelector('.duck');
let fox = document.querySelector('.fox');
let dog = document.querySelector('.dog');
const duckBtn = document.querySelector('.get-duck');
const foxBtn = document.querySelector('.get-fox');
const dogBtn = document.querySelector('.get-dog');

duckBtn.addEventListener("click",getRandomDuck);
dogBtn.addEventListener("click", getRandomDog);
foxBtn.addEventListener("click", getRandomFox);


function getRandomDuck(){
    fetch("")
    .then((response)=> response.json())
    .then(responseData => {
        duck.innerHTML=`<img src="${responseData.url}" />`;
    });
}

function getRandomDog(){
    fetch("https://random.dog/woof.json")
    .then(response => response.json())
    .then((responseData) =>{
        dog.innerHTML = `<img src="${responseData.url}">`;
    });
}
function getRandomFox() {
    fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((responseData) => {
        fox.innerHTML = `<img src="${responseData.image}"/>`; 
    });
}