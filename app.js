/*Free API Website
https://github.com/public-apis/public-apis*/

let cat = document.querySelector('.cat');
let fox = document.querySelector('.fox');
let dog = document.querySelector('.dog');

const catBtn = document.querySelector('.get-cat');
const foxBtn = document.querySelector('.get-fox');
const dogBtn = document.querySelector('.get-dog');

catBtn.addEventListener("click",getRandomCat);
dogBtn.addEventListener("click", getRandomDog);
foxBtn.addEventListener("click", getRandomFox);


function getRandomCat(){
    fetch('https://api.catboys.com/img')
    .then((response)=> response.json())
    .then((responseData) => {
        cat.innerHTML =`<img src="${responseData.url}">`;
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

