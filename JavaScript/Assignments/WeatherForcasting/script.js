const api = "b26afc4b8b773507785f13920a9597d2";

async function getWeather() {
  const { lon, lat } = await getLocation();

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`
  );
  const Data = await response.json();

  const des = Data.weather[0].description;
  const icon = Data.weather[0].icon;
  const temp = Data.main.temp;
  const visibility = Data.visibility;
  const humidity = Data.main.humidity;

  console.log(Data);

  document.getElementById("box").innerHTML = ` <div class="w-50">
          <p>Temperature : ${Math.floor(temp - 273.14)}℃</p>
        <p>Humadity : ${humidity}%</p>
        <p>Descripton : ${des}</p>
         <p>Visibility : ${visibility}%</p>

        </div>
      
      <div >
        <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="image" width="200px" height="200px">
      </div>`;
}

async function getLocation() {
  const place = document.getElementById("place").value;
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${place}&count=1&language=en&format=json`
  );
  const Data = await response.json();

  const lon = Data.results[0].longitude;
  const lat = Data.results[0].latitude;

  return { lon, lat };
}
