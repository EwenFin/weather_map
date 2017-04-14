var app = function(){
  var center = {lat: 55.953251, lng: -3.188267}
  var containerDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(containerDiv, center, 5);
  var forecastButton = document.querySelector("#forecast")
  mainMap.addClickEvent();
  forecastButton.addEventListener("click", function(){
    var latitude = mainMap.marker.getPosition().lat();
    var longitude = mainMap.marker.getPosition().lng();
    console.log(latitude, longitude)

  })

}

window.onload = app;