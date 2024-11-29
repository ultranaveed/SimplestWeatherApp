
const apiKey ="4e59ffdefd13c77c2d109789c4da778b";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp.toFixed(1) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed.toFixed(1) + " km/h";

    if(data.weather[0].main == "Clouds"){weatherIcon.src = "imgs/clouds.png";}
    else if(data.weather[0].main == "Clear"){weatherIcon.src = "imgs/clear.png";}
    else if(data.weather[0].main == "Rain"){weatherIcon.src = "imgs/rain.png";}
    else if(data.weather[0].main == "Drizzle"){weatherIcon.src = "imgs/drizzle.png";}
    else if(data.weather[0].main == "Mist"){weatherIcon.src = "imgs/mist.png";}

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

