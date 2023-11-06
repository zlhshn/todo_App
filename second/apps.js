


const addButton = document.getElementById('add')
const input  = document.getElementById('input')
const ul = document.querySelector('#todo-list')


 
    


addButton.addEventListener('click',()=>{

   
       const li = document.createElement('li')
       const checkInput = document.createElement('input')
       const p = document.createElement('p')
       const deleteButton = document.createElement('button')

       const sil =deleteButton.textContent('X')
       const text =p.textContent(input.value)

       deleteButton.appendChild(sil)
       p.appendChild(text)

      

       li.appendChild(checkInput)
       li.appendChild(p)
       li.appendChild(deleteButton)
      

       checkInput.type = 'checkbox'
       li.classList.add('li-class')
       p.classList.add('p-class')
       deleteButton.classList.add('delete')

       ul.appendChild(li)
       input.value = '';
       
    
})