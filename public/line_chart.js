var LineChart = function(container, title, data){

    this.chart =  new Highcharts.chart({

        chart: {
            type: "line",
            renderTo: container,
        },
        title: {
            text: title
        },
        series: data,
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


