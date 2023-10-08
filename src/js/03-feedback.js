import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const FB_KEY = "feedback-form-state"
const feedBack = {
    email: "",
    message: ""
}
onReboot()

form.addEventListener('input', onInput)
form.addEventListener('submit', onSubmit)

function onInput() {
    feedBack.email = form.email.value
    feedBack.message = form.message.value
    saveDataOnLS()
}

function saveDataOnLS() {
    localStorage.setItem(FB_KEY, JSON.stringify(feedBack))
}

function onReboot() {
    const sevedMassege = localStorage.getItem(FB_KEY)
    if (sevedMassege) {
      form.email.value = JSON.parse(sevedMassege).email 
      form.message.value = JSON.parse(sevedMassege).message 
    } 
}

function onSubmit(e) {
    e.preventDefault()
    e.currentTarget.reset()
    localStorage.removeItem(FB_KEY)
}