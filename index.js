/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Using JSON.stringify()/JSON.parse() intentionally for revision purposes.
// Although localStorage stores strings directly, this pattern is required
// when storing objects or arrays.

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthConverter = document.getElementById("length-converter")
const volumeConverter = document.getElementById("volume-converter")
const massConverter = document.getElementById("mass-converter")
const clearBtn = document.getElementById("clear-btn") 
const themeToggleBtn = document.getElementById("theme-toggle-btn")
const container = document.getElementById("container")
const bottomSectionContainers = document.getElementsByClassName("bottom-section-container")

inputEl.value = JSON.parse(localStorage.getItem("lmodeLastInputValue"))
lengthConverter.innerHTML = `${Number(inputEl.value)} meters = ${getLengthInFeet(Number(inputEl.value))} feet | ${Number(inputEl.value)} feet = ${getLengthInMeter(Number(inputEl.value))} meters`
volumeConverter.innerHTML = `${Number(inputEl.value)} liters = ${getVolumeInGallons(Number(inputEl.value))} gallons | ${Number(inputEl.value)} gallons = ${getVolumeInLiters(Number(inputEl.value))} liters`
massConverter.innerHTML = `${Number(inputEl.value)} kilos = ${getMassInPounds(Number(inputEl.value))} pounds | ${Number(inputEl.value)} pounds = ${getMassInKilograms(Number(inputEl.value))} kilos`
    
convertBtn.addEventListener("click", function () {
    lengthConverter.innerHTML = `${Number(inputEl.value)} meters = ${getLengthInFeet(Number(inputEl.value))} feet | ${Number(inputEl.value)} feet = ${getLengthInMeter(Number(inputEl.value))} meters`
    volumeConverter.innerHTML = `${Number(inputEl.value)} liters = ${getVolumeInGallons(Number(inputEl.value))} gallons | ${Number(inputEl.value)} gallons = ${getVolumeInLiters(Number(inputEl.value))} liters`
    massConverter.innerHTML = `${Number(inputEl.value)} kilos = ${getMassInPounds(Number(inputEl.value))} pounds | ${Number(inputEl.value)} pounds = ${getMassInKilograms(Number(inputEl.value))} kilos`
    localStorage.setItem("lmodeLastInputValue", JSON.stringify(inputEl.value))
})

clearBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    inputEl.value = ""
    lengthConverter.innerHTML = `${Number(inputEl.value)} meters = ${getLengthInFeet(Number(inputEl.value))} feet | ${Number(inputEl.value)} feet = ${getLengthInMeter(Number(inputEl.value))} meters`
    volumeConverter.innerHTML = `${Number(inputEl.value)} liters = ${getVolumeInGallons(Number(inputEl.value))} gallons | ${Number(inputEl.value)} gallons = ${getVolumeInLiters(Number(inputEl.value))} liters`
    massConverter.innerHTML = `${Number(inputEl.value)} kilos = ${getMassInPounds(Number(inputEl.value))} pounds | ${Number(inputEl.value)} pounds = ${getMassInKilograms(Number(inputEl.value))} kilos`
})

themeToggleBtn.addEventListener("click", function(){
    container.classList.toggle("dark-mode-container")
    for (let i=0; i<bottomSectionContainers.length; i++) {
        bottomSectionContainers[i].classList.toggle("dark-mode-bottom-section")
        document.getElementsByTagName("h2")[i].classList.toggle("dark-mode-h2")
        document.getElementsByTagName("h3")[i].classList.toggle("dark-mode-h3")
    }    
})

function getLengthInFeet(num) {
    return (num * 3.281).toFixed(3)
}

function getLengthInMeter(num) {
    return (num / 3.281).toFixed(3)
}

function getVolumeInGallons(num) {
    return (num * 0.264).toFixed(3)
}

function getVolumeInLiters(num) {
    return (num / 0.264).toFixed(3)
}

function getMassInPounds(num) {
    return (num * 2.204).toFixed(3)
}

function getMassInKilograms(num) {
    return (num / 2.204).toFixed(3)
}