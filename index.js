/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Using JSON.stringify()/JSON.parse() intentionally for revision purposes.
// Although localStorage stores strings directly, this pattern is required
// when storing objects or arrays.

const lightInputEl = document.getElementById("l-input-el")
const lightConvertBtn = document.getElementById("l-convert-btn")
const lightLengthConverter = document.getElementById("l-length-converter")
const lightVolumeConverter = document.getElementById("l-volume-converter")
const lightMassConverter = document.getElementById("l-mass-converter")
const lightClearBtn = document.getElementById("l-clear-btn") 

lightInputEl.value = JSON.parse(localStorage.getItem("lmodeLastInputValue"))
lightLengthConverter.innerHTML = `${Number(lightInputEl.value)} meters = ${getLengthInFeet(Number(lightInputEl.value))} feet | ${Number(lightInputEl.value)} feet = ${getLengthInMeter(Number(lightInputEl.value))} meters`
lightVolumeConverter.innerHTML = `${Number(lightInputEl.value)} liters = ${getVolumeInGallons(Number(lightInputEl.value))} gallons | ${Number(lightInputEl.value)} gallons = ${getVolumeInLiters(Number(lightInputEl.value))} liters`
lightMassConverter.innerHTML = `${Number(lightInputEl.value)} kilos = ${getMassInPounds(Number(lightInputEl.value))} pounds | ${Number(lightInputEl.value)} pounds = ${getMassInKilograms(Number(lightInputEl.value))} kilos`
    
lightConvertBtn.addEventListener("click", function () {
    lightLengthConverter.innerHTML = `${Number(lightInputEl.value)} meters = ${getLengthInFeet(Number(lightInputEl.value))} feet | ${Number(lightInputEl.value)} feet = ${getLengthInMeter(Number(lightInputEl.value))} meters`
    lightVolumeConverter.innerHTML = `${Number(lightInputEl.value)} liters = ${getVolumeInGallons(Number(lightInputEl.value))} gallons | ${Number(lightInputEl.value)} gallons = ${getVolumeInLiters(Number(lightInputEl.value))} liters`
    lightMassConverter.innerHTML = `${Number(lightInputEl.value)} kilos = ${getMassInPounds(Number(lightInputEl.value))} pounds | ${Number(lightInputEl.value)} pounds = ${getMassInKilograms(Number(lightInputEl.value))} kilos`
    localStorage.setItem("lmodeLastInputValue", JSON.stringify(lightInputEl.value))
})

lightClearBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    lightInputEl.value = ""
    lightLengthConverter.innerHTML = `${Number(lightInputEl.value)} meters = ${getLengthInFeet(Number(lightInputEl.value))} feet | ${Number(lightInputEl.value)} feet = ${getLengthInMeter(Number(lightInputEl.value))} meters`
    lightVolumeConverter.innerHTML = `${Number(lightInputEl.value)} liters = ${getVolumeInGallons(Number(lightInputEl.value))} gallons | ${Number(lightInputEl.value)} gallons = ${getVolumeInLiters(Number(lightInputEl.value))} liters`
    lightMassConverter.innerHTML = `${Number(lightInputEl.value)} kilos = ${getMassInPounds(Number(lightInputEl.value))} pounds | ${Number(lightInputEl.value)} pounds = ${getMassInKilograms(Number(lightInputEl.value))} kilos`
})

const darkInputEl = document.getElementById("d-input-el")
const darkConvertBtn = document.getElementById("d-convert-btn")
const darkLengthConverter = document.getElementById("d-length-converter")
const darkVolumeConverter = document.getElementById("d-volume-converter")
const darkMassConverter = document.getElementById("d-mass-converter")
const darkClearBtn = document.getElementById("d-clear-btn")

darkInputEl.value = JSON.parse(localStorage.getItem("dmodeLastInputValue"))
darkLengthConverter.innerHTML = `${Number(darkInputEl.value)} meters = ${getLengthInFeet(Number(darkInputEl.value))} feet | ${Number(darkInputEl.value)} feet = ${getLengthInMeter(Number(darkInputEl.value))} meters`
darkVolumeConverter.innerHTML = `${Number(darkInputEl.value)} liters = ${getVolumeInGallons(Number(darkInputEl.value))} gallons | ${Number(darkInputEl.value)} gallons = ${getVolumeInLiters(Number(darkInputEl.value))} liters`
darkMassConverter.innerHTML = `${Number(darkInputEl.value)} kilos = ${getMassInPounds(Number(darkInputEl.value))} pounds | ${Number(darkInputEl.value)} pounds = ${getMassInKilograms(Number(darkInputEl.value))} kilos`

darkConvertBtn.addEventListener("click", function () {
    darkLengthConverter.innerHTML = `${Number(darkInputEl.value)} meters = ${getLengthInFeet(Number(darkInputEl.value))} feet | ${Number(darkInputEl.value)} feet = ${getLengthInMeter(Number(darkInputEl.value))} meters`
    darkVolumeConverter.innerHTML = `${Number(darkInputEl.value)} liters = ${getVolumeInGallons(Number(darkInputEl.value))} gallons | ${Number(darkInputEl.value)} gallons = ${getVolumeInLiters(Number(darkInputEl.value))} liters`
    darkMassConverter.innerHTML = `${Number(darkInputEl.value)} kilos = ${getMassInPounds(Number(darkInputEl.value))} pounds | ${Number(darkInputEl.value)} pounds = ${getMassInKilograms(Number(darkInputEl.value))} kilos`
    localStorage.setItem("dmodeLastInputValue", JSON.stringify(darkInputEl.value))
})

darkClearBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    darkInputEl.value = ""
    darkLengthConverter.innerHTML = `${Number(darkInputEl.value)} meters = ${getLengthInFeet(Number(darkInputEl.value))} feet | ${Number(darkInputEl.value)} feet = ${getLengthInMeter(Number(darkInputEl.value))} meters`
    darkVolumeConverter.innerHTML = `${Number(darkInputEl.value)} liters = ${getVolumeInGallons(Number(darkInputEl.value))} gallons | ${Number(darkInputEl.value)} gallons = ${getVolumeInLiters(Number(darkInputEl.value))} liters`
    darkMassConverter.innerHTML = `${Number(darkInputEl.value)} kilos = ${getMassInPounds(Number(darkInputEl.value))} pounds | ${Number(darkInputEl.value)} pounds = ${getMassInKilograms(Number(darkInputEl.value))} kilos`
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