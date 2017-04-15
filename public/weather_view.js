var WeatherView = function(detailsElement){
  this.detailsElement = detailsElement
}

WeatherView.prototype = {

  render: function(weather){
    var chartContainer = document.querySelector("#weather-display");
    var latitude = + localStorage.getItem("latitude")
    var longitude = + localStorage.getItem("longitude")
    var chartTitle = "Weather at " + latitude.toFixed(2) + ", " + longitude.toFixed(2);
    var temperatures = [];
    var times = [];
    weather.list.forEach(function(time){
      times.push(time.dt_txt);
      temperatures.push(time.main.temp);
    })
    console.log(temperatures);
    console.log(times);
    var weatherSeries = [];
    for(var i = 0; i < times.length; i++){
      weatherSeries.push([times[i], temperatures[i]]);
    } 

    new LineChart(chartContainer, chartTitle, weatherSeries
      )

    
  }
}