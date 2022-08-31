document.addEventListener('DOMContentLoaded', () => {
    getActivity()
})

const boredUrl = "http://www.boredapi.com/api/activity/"

function getActivity() {
    fetch("http://www.boredapi.com/api/activity/")
.then(resp => resp.json())
.then(activity => console.log(activity))
}