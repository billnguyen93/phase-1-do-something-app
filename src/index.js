document.addEventListener('DOMContentLoaded', () => {
    getActivity()
   
    
})

const boredUrl = "http://www.boredapi.com/api/activity/"

//DOM Selectors
const bodyDiv = document.querySelector("#activity")
const mainDiv = document.querySelector("#main")
const formDiv = document.querySelector('#form-container')
const button = document.querySelector('#new-activity')
const participantsLi = document.getElementById("participants")
const h6 = document.getElementById("show-activity")
const priceLi = document.getElementById("price")



//Rendering

function getActivity() {
    fetch(boredUrl)
        .then(resp => resp.json())
        .then(data => {
            currentActivity = data
            const activity = data.activity
            h6.innerText = activity
            const price = data.price
            priceLi.innerText = "Price: " + price
            const participants = data.participants
            participantsLi.innerText = "Participants: " + participants
        })
}

//Event Listeners
button.addEventListener('click', getActivity)


//Event Handlers

