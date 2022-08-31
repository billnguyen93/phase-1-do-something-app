document.addEventListener('DOMContentLoaded', () => {
    getActivity()
    showActivity()
})

const boredUrl = "http://www.boredapi.com/api/activity/"

//DOM Selectors

const mainDiv = document.querySelector("#main")

//Rendering

function showActivity() {
    const h3 = document.createElement('h3')
    h3.innerText = "Pick Something to Do"
    mainDiv.appendChild(h3)
    h3.style.marginTop = "0"
}

function getActivity() {
    fetch("http://www.boredapi.com/api/activity/")
.then(resp => resp.json())
.then(activity => console.log(activity))
}

