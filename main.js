const API_KEY = 'b4673fec0705f8956abc5e4fa2e8283c'
const city = 'dhaka'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
