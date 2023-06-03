const key = '0905110a2a08206a3f453ce82c3c8c16'

function showDataOnScreen(data) {

    document.querySelector('h1').innerHTML = `Tempo em ${data.name}`
    document.querySelector('#temperature').innerHTML = `${Math.floor(data.main.temp)}°C`
    document.querySelector('#temp-max').innerHTML = `${Math.floor(data.main.temp_max)}°C`
    document.querySelector('#temp-min').innerHTML = `${Math.floor(data.main.temp_min)}°C`
    document.querySelector('#weather-image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector('#description').innerHTML = data.weather[0].description
    document.querySelector('#moisture').innerHTML = `Umidade: ${data.main.humidity}%`
}

async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
    
    showDataOnScreen(data)
}

function getCityName() {
    const city = document.querySelector('input').value

    searchCity(city)
}