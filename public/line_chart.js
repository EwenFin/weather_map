var LineChart = function(container, title, weatherData){

    this.chart =  new Highcharts.chart({

        chart: {
            type: "line",
            renderTo: container,
        },
        title: {
            text: title
        },
        plotOptions: {
         series: {
             allowPointSelect: true
            }
        },
        series: [
        {data: [weatherData] }],
        yAxis: {
            title: {
                text: 'temperature'
            }
        },  
        xAxis:{
            title:{
                text: 'time'
            }
        }
    })
}


