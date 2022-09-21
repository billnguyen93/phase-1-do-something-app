document.addEventListener('DOMContentLoaded', () => {
    getActivities()
    submitActivity()
    
})

//DOM Selectors

const activityDiv = document.querySelector("#my-activities")
const bodyDiv = document.querySelector("#activity")
const mainDiv = document.querySelector("#main")
const formDiv = document.querySelector('#form-container')

const button = document.querySelector('#new-activity')
const pTag = document.querySelector("#activity-list")

const likedActivities = document.getElementById("liked-activities")
const activityForm = document.querySelector("#activity-form")

//Rendering

const boredUrl = "http://www.boredapi.com/api/activity/"
 
const activities = []

console.log(activities)


function getActivities() {
    activities.splice(0,5) // remove all existing elements in array
    for (let i = 0; i < 5; i++) { // loop fetches 5 activities on initial render & each time button is clicked.
        fetch(boredUrl)
        .then(resp => resp.json())
        .then(data => activities.push(data))
        .then(() => {
            
            if (activities.length === 5) {
                renderActivities(activities)
            }
         })
    }
  

}

function renderActivities(array) {
    pTag.innerHTML = ''
    
    array.forEach((data) => {
        const ul = document.createElement("ul")
        const h6 = document.createElement("h6")
        const participantsLi = document.createElement("li")
        const priceLi = document.createElement("li")
        const typeLi = document.createElement("li")
        
        h6.innerText = data.activity
        ul.style.border = "dotted"
        priceLi.innerText = "Price: " + data.price
        participantsLi.innerText = "Participants: " + data.participants
        typeLi.innerText = "Type: " + data.type
        
        const likeButton = document.createElement("button")
        likeButton.innerText = '❤'
    

    // Like Button 

    likeButton.addEventListener('click', () => {
        let p = document.createElement("p")
            p.innerText = data.activity
            likedActivities.append(p)

            if (p.innerText === data.activity) {
                likeButton.disabled = true
            }

            p.addEventListener('click', () => {
                p.remove()
            })   
    }) 
    ul.append(h6, priceLi, participantsLi, typeLi, likeButton)
    
    pTag.append(ul)
    })            
}

//Event Listeners

button.addEventListener('click', getActivities)

function submitActivity() {
    activityForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleActivity(e.target.newActivity.value)  
    document.getElementById("activity-form").reset()
  })
    
}

//Event Handlers

function handleActivity(activity) {
    let p2 = document.createElement("p")
    p2.textContent = `${activity}`
    likedActivities.appendChild(p2)

    p2.addEventListener("click", () => {
        p2.remove()
    })
}
