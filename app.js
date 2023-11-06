

const input = document.getElementById('input')
const ul = document.getElementById('list')
const addButton = document.getElementById('add')






addButton.addEventListener('click',()=>{


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
deleteButton.classList.add('sil')
deleteButton.id = 'delete'
deleteButton.type = 'button'






input.value =''


deleteButton.addEventListener('click',()=>{

    ul.removeChild(li)
})



li.addEventListener('click', () => {

    
    p.classList.toggle('pchecked');
    todo.classList.toggle('line');
});



}



})




