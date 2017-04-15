var WeatherView = function(detailsElement){
  this.detailsElement = detailsElement
}

WeatherView.prototype = {

  render: function(weather){
    var chartContainer1 = document.querySelector("#temperature-display");
    var chartContainer2 = document.querySelector("#windspeed-display");
    var chartContainer3 = document.querySelector("#cloudcover-display")
    // var latitude = + localStorage.getItem("latitude");
    // var longitude = + localStorage.getItem("longitude");
    var chartTitleTemp = "Temperature"
    var chartTitleWindspeed = "Wind Speeds"
    var chartTitleCloudCover = "Cloud Cover"
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
      cloudCover.push(time.clouds.all);
      windSpeed.push(time.wind.speed);
      windDirection.push(time.wind.deg);
      // rainfall.push(time.rain.3h + "mm")
      //damn 3h ruining my code...
      
    })
    console.log("temperature", temperatures);
    console.log("times", times);
    console.log("icons", weatherIconId);
    // console.log("rainfall", rainfall);
    console.log("windspeed", windSpeed);
    console.log("clouds", cloudCover);
    console.log("windDirection", windDirection);

    var temperatureSeries = [];
    for(var i = 0; i < times.length; i++){
      temperatureSeries.push([ times[i], + temperatures[i]]);
    };
    
    //Temperatures not appearing on the graph...

    var windSpeedSeries = [];
    for(var i = 0; i < times.length; i++){
      windSpeedSeries.push([ times[i], + windSpeed[i]]);
    };

    var cloudCoverSeries = [];
    for(var i = 0; i < times.length; i++){
      cloudCoverSeries.push([ times[i], + cloudCover[i]]);
    };


  

    new LineChart(chartContainer1, chartTitleTemp, temperatureSeries, times)
    new LineChart(chartContainer2, chartTitleWindspeed, windSpeedSeries, times)
    new LineChart(chartContainer3, chartTitleCloudCover, cloudCoverSeries, times)


    
  }
}