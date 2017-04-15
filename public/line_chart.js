var LineChart = function(container, title, temperatures, times){

    this.chart =  new Highcharts.chart({

        chart: {
            type: "line",
            renderTo: container,
        },
        title: {
            text: title
        },
        yAxis: {
            title: {
                text: "temperatures"

            }
        },  
        xAxis:{
            categories: times,
            title:{

                text: 'time'
            }
        },
        series:[ 
        {data: temperatures }],

    })
}




