document.addEventListener('DOMContentLoaded', () => {
    getActivity()
    submitActivity()
    
})

const boredUrl = "http://www.boredapi.com/api/activity/"

//DOM Selectors
const activityDiv = document.querySelector("#my-activities")
const bodyDiv = document.querySelector("#activity")
const mainDiv = document.querySelector("#main")
const formDiv = document.querySelector('#form-container')

const button = document.querySelector('#new-activity')
const likeBtn = document.querySelector('#like-button')

const participantsLi = document.getElementById("participants")
const h6 = document.getElementById("show-activity")
const priceLi = document.getElementById("price")
const likedActivities = document.getElementById("liked-activities")
const p = document.getElementById("add-activity")

const activityForm = document.querySelector("#activity-form")

//Rendering

function getActivity() {
    return fetch(boredUrl)
        .then(resp => resp.json())
        .then(data => {
            
            currentActivity = data.key
            const activity = data.activity
            h6.innerText = activity
            const price = data.price
            priceLi.innerText = "Price: " + price
            const participants = data.participants
            participantsLi.innerText = "Participants: " + participants
            likeBtn.addEventListener('click', () => {  
                let p = document.createElement("p")
                p.innerText = data.activity          
                likedActivities.appendChild(p)
                })
        })
}

function submitActivity() {
    activityForm.addEventListener('submit', (e) => {
        e.preventDefault()
        handleActivity(e.target.newActivity.value)
    })
}


//Event Listeners
button.addEventListener('click', getActivity)

//Event Handlers
function handleActivity(activity) {
    let p = document.createElement("p")
    p.textContent = `${activity}`
    likedActivities.appendChild(p)
    
}


