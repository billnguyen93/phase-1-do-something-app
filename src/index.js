document.addEventListener('DOMContentLoaded', () => {
    getActivity() 
    
})

const boredUrl = "http://www.boredapi.com/api/activity/"

//DOM Selectors

const bodyDiv = document.querySelector("#activity")
const button = document.querySelector('#reload-activity-button')

//Rendering

function getActivity() {
 return fetch("http://www.boredapi.com/api/activity/")
.then(resp => resp.json())
.then(activity => showActivity(activity))
}

function showActivity(activity) {
    
    const h6 = document.getElementById("show-activity")
    h6.innerText = activity.activity
    const priceLi = document.getElementById("price")
    priceLi.innerText = "Price: " + activity.price 
    const participantsLi = document.getElementById("participants")
    participantsLi.innerText = "Participants: " + activity.participants

   }

//Event Listeners

//Event Handlers

