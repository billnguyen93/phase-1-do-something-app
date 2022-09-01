document.addEventListener('DOMContentLoaded', () => {
    getActivity() 
    homePage()
})

const boredUrl = "http://www.boredapi.com/api/activity/"

//DOM Selectors

const bodyDiv = document.querySelector("#activity")
const button = document.querySelector('#reload-activity-button')

//Rendering

function getActivity() {
    fetch("http://www.boredapi.com/api/activity/")
.then(resp => resp.json())
.then(activity => showActivity(activity))
}

function showActivity(activity) {
    
    const h4 = document.getElementById("show-activity")
    h4.innerText = activity.activity
     
   }




function resetMainDiv() {
    mainDiv.innerHTML = ''
}

function homePage() {
    const h1 = document.createElement('h1')
    h1.innerText = "Choose An Activity"
    const p = document.createElement('p')
    p.innerText = "Click on Get Activity to generate a random activity to do"

    mainDiv.append(h1, p)
}

//Event Listeners

button.addEventListener('click', showActivity)

//Event Handlers

