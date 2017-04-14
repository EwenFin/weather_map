var app = function(){
  var center = {lat: 55.953251, lng: -3.188267}
  var containerDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(containerDiv, center, 5);
  var forecastButton = document.querySelector("#forecast")
  mainMap.addClickEvent();
  forecastButton.addEventListener("click", function(){
    var latitude = localStorage.getItem("latitude")
    var longitude = localStorage.getItem("longitude")
    var url = "api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude
    var forecast = new Forecast(url)

  })

}

window.onload = app;