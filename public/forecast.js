var Forecast = function(url){
  this.url = url;
  this.weatherDetails = []
}

Forecast.prototype = {
  getData: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText;
        this.weatherDetails = JSON.parse(jsonString);
        console.log(this.weatherDetails)
      }
    }.bind(this);
    request.send();
  }

}