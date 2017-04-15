var LineChart = function(container, title, temperatures, times){

    this.chart =  new Highcharts.chart({

        chart: {
            type: "line",
            renderTo: container,
        },
        title: {
            text: title
        },
        series: [
        {data: temperatures }],
        yAxis: {
            title: {
                text: 'temperature'
            }
        },  
        xAxis:{
            categories: times,
            title:{

                text: 'time'
            }
        }
    })
}


