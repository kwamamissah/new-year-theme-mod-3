const addBtn = document.querySelector('#new-theme-btn')
const themeForm = document.querySelector('.container')
const URL = "http://localhost:3000/theme"
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
    <div class="card" data-id="${theme.id}">
        <h2 class="hide">${theme.name}</h2>
        <h2>${theme.theme}</h2>
        <h3 class="hide">${theme.description}</h3>
        <h6 class="hide">${theme.instagram}</h6>
    </div>
    `
    cardContainer.innerHTML += cardHTML

    // let cardTheme = `<h2>${theme.theme}</h2>`
    // let cardFront = document.querySelector('.card')
    // cardFront.innerHTML = cardTheme

    themeDisplay()
}


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
debugger
}
