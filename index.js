let countEl = document.getElementById("increment");
let saveEl = document.querySelector("#save");
let count = 0;
function Increment(){
    count++
    countEl.innerHTML= count;
}

function save(){
    saveEl.innerHTML += count + " - ";
    count = 0;
    countEl.textContent= count;
}