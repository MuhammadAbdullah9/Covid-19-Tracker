import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';


export default function GlobeBarChart() {

    const [BarData, setBarData] = useState()

    useEffect(() => {
        async function getGlobeBarChart() {
            const apiData = await fetch('https://corona.lmao.ninja/v2/all?yesterday')
            const jsonData = await apiData.json()
            setBarData(jsonData)
        }

        getGlobeBarChart()

    }, [])

    var Recovered = BarData && BarData.todayRecovered
    var Cases = BarData && BarData.todayCases
    var Deaths = BarData && BarData.todayDeaths

    const state = {
        labels: ['Cases', 'Recovered', 'Deaths'],
        datasets: [
            {
                label: `Today's Worldwide Statistics`,
                backgroundColor: '#7986CB',
                data: [Cases, Recovered, Deaths],
                barPercentage: 1,
                barThickness: 50,
                hoverBackgroundColor: ['#FDD835', '#43A047', '#B71C1C'],
                minBarLength: 150
            }
        ]
    }

    return (
        <div>
            <Bar
                data={state}

                options={{
                    legend: {
                        display: false,
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: `Today's Worldwide Statistics`,
                        fontSize: 25
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                }}
            />
        </div>
    );
}
