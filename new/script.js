const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function addTask() {
if(inputBox.value === ''){
alert("You must write something!");
}
else{
let li = document.createElement("li");
li.innerHTML = inputBox.value;
listContainer.appendChild(li);
let span = document.createElement('span')
span.innerHTML = '\u00d7'
li.appendChild(span)

}

inputBox.value =''
saveDate()
}


listContainer.addEventListener('click', function(e){

 if(e.target.tegName === 'li'){
    e.target.classList.toogle('checked')
    saveDate()
 }
 else if(e.target.tagName === 'span'){
    e.target.appendElement.remove()
    saveDate()
 }
},false)

function saveDate(){

    localStorage.setItem('data', listContainer.innerHTML)
}

function showTAsk(){
    listContainer.innerHTML = localStorage.getItem('data')
}

showTAsk()