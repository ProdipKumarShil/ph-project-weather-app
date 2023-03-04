const API_KEY = 'b4673fec0705f8956abc5e4fa2e8283c'

document.getElementById('search-btn').addEventListener('click', () => {
    const cityValue = document.getElementById('city').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}`
    console.log(cityValue)
    fetch(url)
        .then(res => res.json())
        .then(data => showInfo(data))
})
function setValueById(id, info){
    if(info){
        document.getElementById(id).innerHTML = info
    }
    else{
        document.getElementById(id).innerHTML = 'Please enter a valid city'
    }
}

const showInfo = data => {
    console.log(data.name)
    setValueById('cityName', data.name)
}
