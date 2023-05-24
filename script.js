

function setContainerBackground(dayCondition) {
    var container = document.querySelector(".container");
  
    if (dayCondition === "Sunny" || dayCondition === "Clear") {
      container.style.backgroundImage = "url('assets/img/sunny.jpg')";
      container.style.color = "black"; 
    } else if (dayCondition === "Partly cloudy") {
      container.style.backgroundImage = "url('assets/img/partly cloud.jpg')";
      container.style.color = "black";
    } else if (dayCondition === "Cloudy") {
      container.style.backgroundImage = "url('assets/img/partly cloud.jpg')";
      container.style.color = "black"; 
    } else if (dayCondition === "Overcast") {
      container.style.backgroundImage = "url('./assets/img/overcast.jpg')";
      container.style.color = "white";
    } else if (dayCondition === "Mist") {
      container.style.backgroundImage = "url('./assets/img/mist.jpg')";
      container.style.color = "white"; 
    } else if (dayCondition === "Moderate or heavy rain shower" || dayCondition === "Light rain shower" ) {
      container.style.backgroundImage = "url('./assets/img/rain.jpg')";
      container.style.color = "white"; 
    } else {
      container.style.backgroundImage = "url('./assets/img/default.jpg')";
      container.style.color = "black"; 
    }
  }
  
  
  
  
      function getWeather() {
        var apiKey = "YOUR_API";
        var cityInput = document.getElementById("cityInput");
        var cityName = cityInput.value;
  
        // Make an API request to fetch weather data
        fetch("https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + cityName)
          .then(response => response.json())
          .then(data => {
            // Extract relevant information from the API response
            var time = data.location.localtime;
            var locationName = data.location.name;
            var temperature = data.current.temp_c;
            var region = data.location.region;
            var country = data.location.country;
            var windSpeed = data.current.wind_kph;
            var humidity = data.current.humidity;
            var feelsLike = data.current.feelslike_c;
            var iconURL = data.current.condition.icon;
            var weatherDescription = data.current.condition.text;
            setContainerBackground(weatherDescription);
  
            // Display the weather information
            document.getElementById("location").innerHTML =locationName + "<br>" + region + "," + country;
            document.getElementById("temperature").innerHTML = temperature + " °C" + " <img src='" + "https:" + iconURL + "' height='25px' alt='Weather Icon'>";
            document.getElementById("wind-speed").innerHTML = windSpeed + " km/h" + '&nbsp <img src="assets/img/wind.png" height="25px">';
            document.getElementById("humidity").innerHTML = "Humidity : " + humidity + "%" + '&nbsp <img src="assets/img/humidity.png" height="25px">';
            document.getElementById("feels-like").innerHTML = "Feels Like: " + feelsLike + " °C";
            document.getElementById("description").innerHTML = weatherDescription + " <img src='" + "https:" + iconURL + "' height='25px' alt='Weather Icon'>";
            document.getElementById("localtime").innerHTML = time;
  
            var windLogo = document.createElement("img");
  windLogo.src = "sunny.jpg"; // Replace "path/to/wind-logo.png" with the actual path to your wind logo image
  windLogo.alt = "Wind Logo"; // Add alternative text for accessibility
  windSpeedElement.appendChild(windLogo);
  
  
          })
          .catch(error => {
            // Handle any errors that occur during the API request
            console.log("Error:", error);
          });
      }