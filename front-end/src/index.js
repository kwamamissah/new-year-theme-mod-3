const addBtn = document.querySelector('#new-theme-btn')
const themeForm = document.querySelector('.container')
const URL = `http://localhost:3000/theme`
const cardDetails = document.querySelector('.card')
let addTheme = false


document.addEventListener("DOMContentLoaded", initPage)

function initPage(){
  addCreateHandler()
  fetchCards()

}

function fetchCards(){
  fetch(URL)
  .then(res => res.json())
  .then(json => json.forEach(displayCards))

}

function displayCards(theme){
    let cardContainer = document.querySelector("#theme-array")
    let cardHTML = `
    <div class="card btn-group data-id="${theme.id}" >
        <h2 class="hide" style='align-items: center;'>${theme.name}</h2>
        <h2>${theme.theme}</h2>
        <h3 class="hide">${theme.description}</h3>
        <h6 class="hide">${theme.instagram}</h6>
        <button class='view-btn'>View</button>
        <button class= 'hide collapse-btn'>Collapse</button>
        <button class= 'hide edit-btn'>Edit</button>
        <button class= 'hide delete-btn'>Delete</button>

    </div>
    `
    cardContainer.innerHTML += cardHTML

    viewCardHandler()
    collapseCardHandler()
    deleteCardHandler()
}

function viewCardHandler(){
  let viewBtn = document.querySelectorAll('.view-btn')
  viewBtn.forEach(btn => btn.addEventListener('click', flipCard))
}

function collapseCardHandler(){
  let collapseBtn = document.querySelectorAll('.collapse-btn')
  collapseBtn.forEach(btn => btn.addEventListener('click', flipCard))
}


function flipCard(e){
  let x = e.target.parentElement
  Array.from(x.children).forEach(item => item.classList.toggle('hide'))
}
// cardDetails.addEventListener('click', () => {
//   Array.from(cardDetails.children).forEach(item => item.classList.remove('hide'))
// })

function addCreateHandler(){
  let form = document.querySelector(".add-theme-form")
  form.addEventListener("submit", processNewCard)
}

function processNewCard(e){
  e.preventDefault()
  let name = e.target.name.value
  let theme = e.target.theme.value
  let description = e.target.description.value
  let instagram = e.target.instagram.value


  e.target.reset()
  createCard(name, theme, description, instagram).then(displayCards)

}

function createCard(name, theme, description, instagram) {
  let request = new Request(URL)
  let options = {
    method: 'POST',
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify
  ({
    name: name,
    theme: theme,
    description: description,
    instagram: instagram
  })
  }
  fetch(request, options)
  .then(resp => resp.json())
}

function editCardHandler(){
  let editBtn = document.querySelectorAll('.edit-btn')
  editBtn.forEach(btn => btn.addEventListener('click', editCard))
}

function editCard(){
  
}

function deleteCardHandler(){
  let deleteBtn = document.querySelectorAll('.delete-btn')
  deleteBtn.forEach(btn => btn.addEventListener('click', removeCard))
}

function removeCard(e){
  let id = e.target.parentElement.dataset.id
  let card = e.target.parentElement
  card.remove()

  deleteCard(id, card)
}

function deleteCard(id, card){
  let request = new Request(`http://localhost:3000/theme/${id}`)
  let options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      theme: card
    })
  }
  fetch(request, options)
}


addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addTheme = !addTheme
  if (addTheme) {
    themeForm.style.display = 'block'
    // submit listener here
  } else {
    themeForm.style.display = 'none'
  }
})

// function customCardHandler(){
//   let form = document.querySelector("#add-theme-form")
//   form.addEventListener('submit', changeWordColor)
// }


function changeWordColor(){
  debugger
  let wordColor = document.querySelector('#words')
  let defaultVal = wordColor.jscolor.value
  let currentVal = wordColor.value
  $('.card').css('color', defaultVal)

}

// cardDetails.addEventListener('onmouseover', themeDisplay)



function themeDisplay(){
  //get theme card.
let themeCard = document.querySelector('.card')
let theme = themeCard.children[1]


if (themeCard.children.length === 4){
  //hide content;
  themeCard.innerHTML == theme;
}
else {
  themeCard === "hello"
}

}
