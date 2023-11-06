const input = document.getElementById('input')
const ul = document.getElementById('list')
const addButton = document.getElementById('add')


window.addEventListener('load',()=>{

    ul.innerHTML = localStorage.getItem('todos')
})


function addTask(){

    if(!input.value.trim()){
        alert('Please enter the to-do task')
    }else{
    
    
        //! todo lar eklendikten sonra oluşacak elementler
    
    const li =document.createElement('li')
    const p =document.createElement('p')
    const deleteButton = document.createElement('button')
    const todo = document.createElement('span')
    
    ul.appendChild(li)
    li.appendChild(p)
    li.appendChild(todo)
    li.appendChild(deleteButton)
    
    const text= document.createTextNode(input.value)
    const x =document.createTextNode('X')
    
    
    deleteButton.appendChild(x)
    todo.appendChild(text)
    
    li.classList.add("li")
    p.classList.add('p')
    todo.classList.add('span')
    deleteButton.classList.add('sil')
    deleteButton.id = 'delete'
    deleteButton.type = 'button'
    
    input.value =''
    saveData()

}}




addButton.addEventListener('click',()=>{

    addTask()
})



// ! todo nun üzeri çiziliyor

ul.addEventListener('click',(e)=>{
    console.log(e.target);
    saveData()

if(e.target.classList.contains('li')) {

    console.log(e.target.querySelector('.p').classList.toggle('pchecked'));
    e.target.querySelector('span').classList.toggle('line')
    saveData()

}else if(e.target.classList.contains('sil')){
    e.target.parentElement.remove()
    saveData()

}else if(e.target.classList.contains('p')){

    e.target.classList.toggle('pchecked')
    e.target.nextElementSibling.classList.toggle('line')
    saveData()

} else if(e.target.classList.contains('span')){

    e.target.classList.toggle('line')
    e.target.previousElementSibling.classList.toggle('pchecked')
    saveData()
}

})


function saveData(){


console.log(localStorage.setItem('todos',ul.innerHTML));

}