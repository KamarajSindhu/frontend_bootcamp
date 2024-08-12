const filmInput = document.getElementById('film-input')
const addBtn = document.getElementById('add-btn')
const filmList = document.getElementById('film-list')

addBtn.addEventListener('click', function() {

    const newfilm = document.createElement ('div')
    newfilm.classList.add('film-item')
    newfilm.textContent = filmInput.value
    filmList.appendChild()
    filmInput.value = ''
   
}) 
