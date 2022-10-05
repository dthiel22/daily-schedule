console.log('linked')

// grabbing Id elements on HTML
var currentDayEl = document.querySelector("#current-day")
var timeboxEL = document.querySelector("#time-box")
var form9El = document.querySelector("#form9")
var formboxEL = document.querySelector("#form-box")
var listTextEl = document.querySelector("#listText9")
var save9El = document.getElementById("save9")

var now = moment().format('MMM, DD, YYYY k:mm:ss')

// setting form values to localStorage Items
form9El.value = JSON.parse(localStorage.getItem("form9") || "[]")

// saving the input in the form in local storage
save9El.addEventListener("click", function (){
    if(form9El.value === ""){
        alert("There must be something to do!")
    } else if (form9El.value !==null) {
        localStorage.setItem("form9", JSON.stringify(form9El.value))
    }
})

function changeBackground (){
    var now2 = moment().format('k')
    if (parseInt(timeboxEL.textContent) < parseInt(now2)) {
        console.log('it is lower')
        formboxEL.style.background = 'red'
        form9El.style.background = 'red'
    }
}

function displayTime() {
    var now = moment().format('MMM, DD, YYYY k:mm:ss')
    currentDayEl.textContent = now
}

setInterval(displayTime, 1000)

changeBackground()