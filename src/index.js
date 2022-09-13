document.addEventListener('DOMContentLoaded', () => {
    getActivity()
    submitActivity()
    
})

//DOM Selectors

const activityDiv = document.querySelector("#my-activities")
const bodyDiv = document.querySelector("#activity")
const mainDiv = document.querySelector("#main")
const formDiv = document.querySelector('#form-container')

const button = document.querySelector('#new-activity')

const participantsLi = document.getElementById("participants")
const h6 = document.getElementById("show-activity")
const priceLi = document.getElementById("price")
const likedActivities = document.getElementById("liked-activities")

const activityForm = document.querySelector("#activity-form")

//Rendering

const boredUrl = "http://www.boredapi.com/api/activity/"
      
function getActivity() {
fetch(boredUrl)
 .then(resp => resp.json())
 .then(data => renderActivity(data))

}

function renderActivity(data) {
    bodyDiv.innerHTML = ''
    h6.innerText = data.activity
    console.log(data)
    priceLi.innerText = "Price: " + data.price
    participantsLi.innerText = "Participants: " + data.participants
    
    const likeButton = document.createElement("button")
    likeButton.innerText = "Like"
    bodyDiv.append(likeButton)

    // Like Button 
    likeButton.addEventListener('click', () => {
        if (!activityInList(activity)) {
            let p = document.createElement("p")
            p.innerText = data.activity
            likedActivities.append(p)

            p.addEventListener('click', () => {
                p.remove()
            })
        }
    })
      
        
}

function activityInList(activity) {
    const pTag = Array.from(document.querySelectorAll("#liked-activities p"))
    return pTag.some(tag => {
        return tag.innerText === activity.activity
        
    })
    
}

//Event Listeners

button.addEventListener('click', getActivity)

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
        p2.innerHTML = ''
    })
}


