const input = document.getElementById('input')
const ul = document.getElementById('list')
const addButton = document.getElementById('add')




// ! sayfa yüklenirken todoların en son halinin gelmesi

window.addEventListener('load',()=>{
   
    ul.innerHTML = localStorage.getItem('todos')
    taskCount()
    saveData()
})


//! todo lar eklendikten sonra oluşacak elementler

function addTask(){

// ? created new element
    const li =document.createElement('li')
    const p =document.createElement('p')
    const deleteButton = document.createElement('button')
    const todo = document.createElement('span')
    
// ? new element connected layout
    ul.appendChild(li)
    li.appendChild(p)
    li.appendChild(todo)
    li.appendChild(deleteButton)
    
// ? created new element text
    const text= document.createTextNode(input.value)
    const x =document.createTextNode('X')
    
// ? text and element connected
    deleteButton.appendChild(x)
    todo.appendChild(text)
    
// ?new elemet connected
    li.classList.add("li")
    p.classList.add('p')
    todo.classList.add('span')
    deleteButton.classList.add('sil')
    deleteButton.id = 'delete'
    deleteButton.type = 'button'
    
    input.value =''

    taskCount()
    saveData()
    
}



// ! add butonuna click eventinin verilmesi
addButton.addEventListener('click',()=>{

    if(!input.value.trim()){
        alert('Please enter the to-do task')
    }else{

    addTask()
    saveData()
    taskCount()
} 
})


// ! todo nun üzeri çiziliyor

ul.addEventListener('click',(e)=>{
  
if(e.target.classList.contains('li')) {

    console.log(e.target.querySelector('.p').classList.toggle('pchecked'));
    e.target.querySelector('span').classList.toggle('span-checked')
 
}else if(e.target.classList.contains('sil')){
    e.target.parentElement.remove()
   

}else if(e.target.classList.contains('p')){

    e.target.classList.toggle('pchecked')
    e.target.nextElementSibling.classList.toggle('span-checked')
    
} else if(e.target.classList.contains('span')){

    e.target.classList.toggle('span-checked')
    e.target.previousElementSibling.classList.toggle('pchecked')
    
}
saveData()
taskCount()

})




// ! todoları en son haliyle localde depolamak için

function saveData(){


localStorage.setItem('todos',ul.innerHTML);



}



// ! Güncel day almak için

day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

document.getElementById('day').textContent = day[new Date().getDay()]





function taskCount() {
    const li = document.querySelector('li')
    const totalTask = document.querySelectorAll('.li').length;
    const completedTask = document.querySelectorAll('.pchecked').length;
   
    const result = document.querySelector('.result');

   if(ul.textContent){
    result.textContent = `${completedTask} OUT OF  ${totalTask} TASK COMPLETED`;
    result.classList.add('result-task')
    

   }else if(!ul.textContent){

    result.style.display ='none' 
     
   }

}


