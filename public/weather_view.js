var WeatherView = function(detailsElement){
  this.detailsElement = detailsElement
}

WeatherView.prototype = {

  render: function(weather){
    var chartContainer = document.querySelector("#weather-display");
    var latitude = + localStorage.getItem("latitude")
    var longitude = + localStorage.getItem("longitude")
    var chartTitle = "Temperatures at " + latitude.toFixed(2) + ", " + longitude.toFixed(2);
    var temperatures = [];
    var times = [];
    var weatherIconId = [];
    var cloudCover = [];
    var windSpeed = [];
    var windDirection = [];
    // var rainfall = [];
    weather.list.forEach(function(time){
      times.push(time.dt_txt);
      temperatures.push((time.main.temp - 273).toFixed(1));
      weatherIconId.push(time.weather[0].icon);
      cloudCover.push(time.clouds.all + "%");
      windSpeed.push(time.wind.speed + "m/s");
      windDirection.push(time.wind.deg);
      // rainfall.push(time.rain.3h + "mm")
      
    })
    console.log("temperature", temperatures);
    console.log("times", times);
    console.log("icons", weatherIconId);
    // console.log("rainfall", rainfall);
    console.log("windspeed", windSpeed);
    console.log("clouds", cloudCover);
    console.log("windDirection", windDirection);

    var weatherSeries = [];
    for(var i = 0; i < times.length; i++){
      weatherSeries.push([times[i], temperatures[i]]);
    };
    console.log(weatherSeries) 
    new LineChart(chartContainer, chartTitle, temperatures, times)


    
  }
}