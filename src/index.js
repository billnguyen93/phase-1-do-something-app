document.addEventListener('DOMContentLoaded', () => {
    getActivity()
    showActivity()
})

const boredUrl = "http://www.boredapi.com/api/activity/"

//DOM Selectors

const mainDiv = document.querySelector("#main")
mainDiv.style.textAlign = 'center'

//Rendering

function getActivity() {
    fetch("http://www.boredapi.com/api/activity/")
.then(resp => resp.json())
.then(activity => showActivity(activity))
}

function showActivity(activity) {
    mainDiv.innerHTML = `
    <h2>${activity.activity}</h2>
    <p>Price: ${activity.price}</p>
    <p>Participants: ${activity.participants}
    <p>Type of Activity: ${activity.type}
    `    
}

function resetMainDiv() {
    mainDiv.innerHTML = ''
}

function homePage() {
    
}