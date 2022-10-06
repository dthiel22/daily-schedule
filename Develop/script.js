console.log('linked')

// grabbing Id elements on HTML
var bodyEl = document.querySelector("body")
var currentDayEl = document.querySelector("#current-day")

var timeBoxEL = document.querySelectorAll(".time-box")
console.log(timeBoxEL[9].textContent)
var timeValue = parseInt(timeBoxEL[9].textContent)
console.log(timeValue)
var formEl = document.querySelectorAll(".form")
console.log(formEl[9])
var formBoxEL = document.querySelectorAll(".form-box")
console.log(formBoxEL[9])
var saveEl = document.querySelectorAll(".save")

// setting form values to localStorage Items
function onLoad () {
    for (let i = 0; i < 10; i++) {
        formEl[i].textContent.value = JSON.parse(localStorage.getItem("form") || "[]")
    }
}

// changing background
function changeBackground() {
    var nowHour = parseInt(moment().format('h'))
    var nowMHour = parseInt(moment().format('k'))
    for (let i = 0; i < 10; i++) {
        if (parseInt(timeBoxEL[i].textContent) + 12 < nowMHour) {
            console.log('it is lower')
            formEl[i].style.backgroundColor = 'grey'
            formBoxEL[i].style.backgroundColor = 'gray'
        } else if (parseInt(timeBoxEL[i].textContent) + 12 > nowMHour) {
            console.log('it is greater')
            formEl[i].style.backgroundColor = 'green'
            formBoxEL[i].style.backgroundColor = 'green'
        } else {
            formEl[i].style.backgroundColor = 'red'
            formBoxEL[i].style.backgroundColor = 'red'
        }
    }
}

function displayTime() {
    var now = moment().format('MMM, DD, YYYY hh:mm:ss a')
    currentDayEl.textContent = now
}

onLoad()

setInterval(displayTime, 1000)

changeBackground()

// saving the input in the form in local storage for all save buttons
// bodyEl.addEventListener("click", function (event) {
//     var mouseClick = event.target
//     console.log(mouseClick.parentNode)
//     var mouseClick2 = mouseClick.parentNode
//     console.log(mouseClick2.parentNode)
    // for (let i = 0; i < 10; i++) {
    // if (formEl[i].value === "") {
    //     alert("There must be something to do!")
    // } else if () {
    //     localStorage.setItem("form", JSON.stringify(formEl[i].value))
    //     console.log(JSON.stringify(formEl[i].value))
    // }}
// })