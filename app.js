const addButton = document.getElementById('add')
const input = document.querySelector('#input')
const  day = document.querySelector('.day')
const ul = document.querySelector('ul')


// ! güncel gün almak için kod

const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

day.textContent = dayName[new Date().getDay()] 


// ! sayfa yenilendiğinde todoların tekrar yüklenmesi için
window.addEventListener('load',()=>{

    ul.innerHTML = localStorage.getItem('todo')
    input.focus()
    taskcount()

   
})


// ! todoları  add butonu kullanarak eklemek için

addButton.addEventListener('click',()=>{
    if(!input.value.trim()){

        alert('enter a to-do')
    }else{

// ? todo lar eklenince oluşacak elemanlarımız
const li = document.createElement('li')
const p = document.createElement('p')
const task = document.createElement('span')
const deleteButton = document.createElement('button')
//  ? todo lar layouta bağlandı
ul.appendChild(li)
li.appendChild(p)
li.appendChild(task)
li.appendChild(deleteButton)

// ? element içine textleri oluşturur

const text = document.createTextNode(input.value)
const x = document.createTextNode('X')

// ? oluşan elemanlara class verilmesi

p.classList.add('circle')
li.classList.add('li')
task.classList.add('task')
deleteButton.classList.add('sil')


// ? elememtlere  textlerin bağlanması

task.appendChild(text)
deleteButton.appendChild(x)

input.value = ''

 }

//  ?  local storage e todoların depolanması
localStorage.setItem('todo',ul.innerHTML)

taskcount()

})


// ! bubling kullanarak ul taşıyıcısı üzerindeki elemanlara event verilmesi
ul.addEventListener('click',(e)=>{


    if(e.target.classList.contains('sil')){

        e.target.parentElement.remove()

    } else if(e.target.classList.contains('circle')){

        e.target.classList.toggle('pchecked')
        e.target.closest('li').querySelector('span').classList.toggle('span-checked')

    } else if(e.target.classList.contains('li')){

        e.target.querySelector('p').classList.toggle('pchecked')

        e.target.querySelector('span').classList.toggle('span-checked')

    }else if(e.target.classList.contains('task')){

        e.target.classList.toggle('span-checked')
        e.target.previousElementSibling.classList.toggle('pchecked')
    }

    
    localStorage.setItem('todo',ul.innerHTML)
    taskcount()
})


// ! en sona bilgi satırı yazılması

function  taskcount(){

const totalTask = document.querySelectorAll('.li').length
const doneTask = document.querySelectorAll('.pchecked').length
const result = document.querySelector('.result')
result.classList.add('result-task')
result.textContent = ` ${doneTask}  OUT OF ${totalTask} TASK COMPLETED`


if(!totalTask){

    result.style.display = 'none';
}else{
    result.style.display = 'block'
}


}

