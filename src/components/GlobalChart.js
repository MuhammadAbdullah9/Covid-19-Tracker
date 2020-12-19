import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';


export default function GlobalChart() {

    const [ChartData, setChartData] = useState()

    useEffect(() => {
        async function getGlobalChart() {
            const apiData = await fetch('https://corona.lmao.ninja/v2/all?yesterday')
            const jsonData = await apiData.json()
            setChartData(jsonData)
        }

        getGlobalChart()

    }, [])


    var Recovered = ChartData && ChartData.recovered
    var Cases = ChartData && ChartData.cases
    var Deaths = ChartData && ChartData.deaths

    const state = {
        datasets: [
            {
                label: ['Cases'],
                data: [0, Cases],
                borderColor: 'yellow',
                backgroundColor: 'rgba(255 ,255, 0, 0.2)'
            },
            {
                label: ['Recovered'],
                data: [0, Recovered],
                borderColor: 'green',
                backgroundColor: 'rgba(0 ,255, 0, 0.2)'
            },
            {
                label: ['Deaths'],
                data: [0, Deaths],
                borderColor: 'red',
                backgroundColor: 'rgba(255 ,0, 0, 0.3)'
            }
        ]
    }

    return (
        <div className={'GlobeLineChart'}>
            <Line
                width={50}
                height={500}
                data={state}

                options={{
                    maintainAspectRatio: false ,
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                stepSize: 20000000
                            }
                        }],

                    },
                    title: {
                        display: true,
                        text: 'This is the graphical representation of Covid till now',
                        fontSize: 35
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    }

                }}
            />
        </div>
    );

}