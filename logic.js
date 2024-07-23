let inputEl = document.getElementById("inp")
let click = document.getElementById("convert")
let len = document.getElementById("lenght")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

// 1 meter = 3.281 feet
// 1 feet = 0.305 meter
// 1 liter = 0.264 gallons
// 1 gallon = 3.785 liter
// 1 kilogram = 2.204 pound
// 1 pound = 0.454 kilo 
// 1 km = 0.621 mile
// 1 mile = 1.609 km

let  meterF = 3.281 
let feetM = 0.305 
let literG = 0.264 
let gallonL = 3.785 
let kilogramP = 2.205 
let poundK= 0.454  

click.addEventListener('click',function()
{
    let temp=inputEl.value
    console.log(inputEl)
   // len.textContent = `${temp} meters = ${temp*meterF.toFixed(3)}`
    len.textContent = ` ${temp} meters = ${(temp*meterF).toFixed(3)} feet | ${temp} feet = ${(temp*feetM).toFixed(3)} meters`
    volume.textContent = ` ${temp} liters = ${(temp*literG).toFixed(3)} gallons | ${temp} gallons = ${(temp*gallonL).toFixed(3)} liters`
    mass.textContent = ` ${temp} kilos = ${(temp*kilogramP).toFixed(3)} pounds | ${temp} pounds = ${(temp*poundK).toFixed(3)} kilos`


})