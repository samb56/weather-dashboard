
// fetch(https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=c7af3c19c9d96138f2b050bfc0db187d
// ) .then(res => console.log(res))

// let news = {
//   "newsAPIkey": "c7af3c19c9d96138f2b050bfc0db187d"
//    fetchNews: function (term) {
//      fetch("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60&lon=30&dt=1650445666&appid={API key}&only_current={true})

//       .then(r ==> r.json())
//       .then(data ==> {
//         var content = JSON.parse(data.contents)
//       })
//    }
// }

var weatherArray = []
var currentWeatherArray = []
var cityArray = []
var cityInput = document.querySelector(".city-input")
var search = document.querySelector(".search")

fetch("https://api.openweathermap.org/data/2.5/forecast?q=Chicago&units=imperial&appid=c7af3c19c9d96138f2b050bfc0db187d")
  .then(response => response.json())
  // .then(data => console.log(data));
  .then(gatherData)

function gatherData(data) {
  weatherArray = []
  for (let i = 0; i < data.list.length; i += 8) {
    const weatherdata = data.list[i];
    weatherArray.push(weatherdata);
    console.log(weatherdata);
  }
  console.log(weatherArray)
}

search.onclick = function () {
  fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput.value + "&limit=1&appid=04717c2f5053dd9eae83e9b57b641cf6")
    .then(response => response.json())
    .then(data => cityArray = [data[0].lat, data[0].lon])
    .then(_ => fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + cityArray[0] + "&lon=" + cityArray[1] + "&units=imperial&appid=c7af3c19c9d96138f2b050bfc0db187d"))
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(gatherCurrentData)
}
function gatherCurrentData(data) {
  currentWeatherArray = []
  var currentData = data.current
  currentWeatherArray.push(currentData)


  console.log(currentWeatherArray)
}


// fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=04717c2f5053dd9eae83e9b57b641cf6")
//   .then(response => response.json())
//   .then(data => cityArray.push(data[0].lat, data[0].lon))
//   .then(_ => fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + cityArray[0] + "&lon=" + cityArray[1] + "&units=imperial&appid=c7af3c19c9d96138f2b050bfc0db187d"))
//   .then(response => response.json())
//   // .then(data => console.log(data));
//   .then(gatherCurrentData)

// function gatherCurrentData(data) {
//   const currentData = data.current
//   currentWeatherArray.push(currentData)


//   console.log(currentWeatherArray)
// }


