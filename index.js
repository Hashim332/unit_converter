/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const lengthEl = document.getElementById("length-conversion")
const volumeEl = document.getElementById("volume-conversion")
const massEl = document.getElementById("mass-conversion")
let errorMessageEl = document.getElementById("error-message")



lengthEl.innerHTML = ""
volumeEl.innerHTML = ""
massEl.innerHTML = ""
errorMessageEl.style.visibility="hidden";  

function showErrorMessage() {
    errorMessageEl.style.visibility="visible";  
    errorMessageEl.innerHTML = "Please input an integer"
    errorMessageContainer.style.height = "auto"; // Adjust height to fit content
}

function hideErrorMessage() {
    errorMessageEl.style.visibility="hidden"; 
    errorMessageContainer.style.height = errorMessageEl.offsetHeight + "px"; // Set container height to match error message height
}

inputBtn.addEventListener("click", function() {
    let userInput = parseInt(inputEl.value)
    
    
    if (Number.isInteger(userInput) === true) {
        // errorMessageEl.style.display = "none";
        renderLength(Number(inputEl.value))
        renderVolume(Number(inputEl.value))
        renderMass(Number(inputEl.value)) 
        hideErrorMessage()
}   else {
        lengthEl.innerHTML = ``
        volumeEl.innerHTML = ``
        massEl.innerHTML = ``
        showErrorMessage()
        console.log("check if there's an error message")
}
})


function renderLength(integer) {
    const lengthRatio = 3.281
    let metresToFeet = integer * lengthRatio
    let feetToMetres = integer / lengthRatio
    
    lengthEl.innerHTML = `${integer} metres = ${metresToFeet.toFixed(2)} feet | ${integer} feet = ${feetToMetres.toFixed(2)} metres`
}

function renderVolume(integer) {
    const volumeRatio = 0.264
    let litresToGallons = integer * volumeRatio
    let gallonsToLitres = integer / volumeRatio
    
    volumeEl.innerHTML = `${integer} litres = ${litresToGallons.toFixed(2)} gallons | ${integer} gallons = ${gallonsToLitres.toFixed(2)} litres`
}

function renderMass(integer) {
    const massRatio = 2.204
    let kilosToPounds = integer * massRatio
    let poundsToKilos = integer / massRatio
    
    massEl.innerHTML = `${integer} kilos = ${kilosToPounds.toFixed(2)} pounds | ${integer} pounds = ${poundsToKilos.toFixed(2)} kilos`
}

inputEl.addEventListener("input", function(){
  let width = Math.max(117, (this.value.length + 1) * 35);
  // Set the width of the input element
  this.style.width = width + 'px';
})


// if (Number.isInteger(inputEl.value) === true) {
    
// } else {
//      lengthEl.innerHTML = ``
//      volumeEl.innerHTML = ``
//      massEl.innerHTML = ``
     
//      errorMessageEl = "Please input an integer"
// }