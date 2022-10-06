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

// grabbing all save buttons
var save0El = document.querySelector("#save0")
var save1El = document.querySelector("#save1")
var save2El = document.querySelector("#save2")
var save3El = document.querySelector("#save3")
var save4El = document.querySelector("#save4")
var save5El = document.querySelector("#save5")
var save6El = document.querySelector("#save6")
var save7El = document.querySelector("#save7")
var save8El = document.querySelector("#save8")
var save9El = document.querySelector("#save9")

//grabbing all forms
var form0El = document.querySelector("#form0")
var form1El = document.querySelector("#form1")
var form2El = document.querySelector("#form2")
var form3El = document.querySelector("#form3")
var form4El = document.querySelector("#form4")
var form5El = document.querySelector("#form5")
var form6El = document.querySelector("#form6")
var form7El = document.querySelector("#form7")
var form8El = document.querySelector("#form8")
var form9El = document.querySelector("#form9")

// load local storage to form
function onLoad() {
    form0El.value = JSON.parse(localStorage.getItem("form0") || "[]")
    form1El.value = JSON.parse(localStorage.getItem("form1") || "[]")
    form2El.value = JSON.parse(localStorage.getItem("form2") || "[]")
    form3El.value = JSON.parse(localStorage.getItem("form3") || "[]")
    form4El.value = JSON.parse(localStorage.getItem("form4") || "[]")
    form5El.value = JSON.parse(localStorage.getItem("form5") || "[]")
    form6El.value = JSON.parse(localStorage.getItem("form6") || "[]")
    form7El.value = JSON.parse(localStorage.getItem("form7") || "[]")
    form8El.value = JSON.parse(localStorage.getItem("form8") || "[]")
    form9El.value = JSON.parse(localStorage.getItem("form9") || "[]")
}


// TODO: new try
function changeBackground() {
    var nowMHour = parseInt(moment().format('k'))
    for (let i = 0; i < 10; i++) {
        var current = parseInt(timeBoxEL[i].textContent)
        if (current >= 9 && current <= 12) {
            console.log("between 9 and 12")
            console.log(current)
            console.log(nowMHour)
            if (current < nowMHour) {
                formEl[i].style.backgroundColor = 'grey'
                formBoxEL[i].style.backgroundColor = 'gray'
            } else if (current > nowMHour) {
                formEl[i].style.backgroundColor = 'green'
                formBoxEL[i].style.backgroundColor = 'green'
            } else {
                formEl[i].style.backgroundColor = 'red'
                formBoxEL[i].style.backgroundColor = 'red'
            }
        } else if (current >= 1 && current <= 6) {
            console.log("between 6 and 1")
            var current = current + 12
            console.log(current)
            console.log(nowMHour)
            if (current < nowMHour) {
                formEl[i].style.backgroundColor = 'grey'
                formBoxEL[i].style.backgroundColor = 'gray'
            } else if (current > nowMHour) {
                formEl[i].style.backgroundColor = 'green'
                formBoxEL[i].style.backgroundColor = 'green'
            }
            } else {
            formEl[i].style.backgroundColor = 'red'
            formBoxEL[i].style.backgroundColor = 'red'
}}}

//display the time at the top
function displayTime() {
    var now = moment().format('MMM, DD, YYYY hh:mm:ss a')
    currentDayEl.textContent = now
}

//click to save form into local storage
save0El.addEventListener("click", function (event) {
    localStorage.setItem("form0", JSON.stringify(form0El.value))
})
save1El.addEventListener("click", function (event) {
    localStorage.setItem("form1", JSON.stringify(form1El.value))
})
save2El.addEventListener("click", function (event) {
    localStorage.setItem("form2", JSON.stringify(form2El.value))
})
save3El.addEventListener("click", function (event) {
    localStorage.setItem("form3", JSON.stringify(form3El.value))
})
save4El.addEventListener("click", function (event) {
    localStorage.setItem("form4", JSON.stringify(form4El.value))
})
save5El.addEventListener("click", function (event) {
    localStorage.setItem("form5", JSON.stringify(form5El.value))
})
save6El.addEventListener("click", function (event) {
    localStorage.setItem("form6", JSON.stringify(form6El.value))
})
save7El.addEventListener("click", function (event) {
    localStorage.setItem("form7", JSON.stringify(form7El.value))
})
save8El.addEventListener("click", function (event) {
    localStorage.setItem("form8", JSON.stringify(form8El.value))
})
save9El.addEventListener("click", function (event) {
    localStorage.setItem("form9", JSON.stringify(form9El.value))
})


onLoad()

setInterval(displayTime, 1000)

changeBackground()

// TODO: saving the input in the form in local storage for all save buttons
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


// TODO: setting ALL form values to localStorage Items
// function onLoad () {
//     for (let i = 0; i < 10; i++) {
//         formEl[i].value = JSON.parse(localStorage.getItem
//         // TODO: need to make array of form submits
//         ("form") || "[]")
//     }
// }