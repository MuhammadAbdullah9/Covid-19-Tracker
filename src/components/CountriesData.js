import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';

export default function CountriesData() {

    const [CountryData, setCountryData] = useState([])
    var infected = []
    var recovered = []
    var deaths = []
    var lastUpdated = []
 
   


    useEffect(() => {

        async function getCountriesData() {
            const apiData = await fetch('https://api.apify.com/v2/datasets/9eUGCilmJ8HDf60mL/items?format=json&clean=1')
            const jsonData = await apiData.json()
            setCountryData(jsonData)
            console.log(jsonData)
        }

        getCountriesData()

    }, [])

    CountryData && CountryData.map(v => {
        return infected.push(v.infected)
    })
    
    CountryData && CountryData.map(v => {
        return recovered.push(v.recovered)
    })
    
    CountryData && CountryData.map(v => {
        return deaths.push(v.deceased)
    })
    CountryData && CountryData.map(v => {
        return lastUpdated.push(v.lastUpdatedAtSource)
    })   
    
    const data = {
        labels: lastUpdated,
        datasets: [
            {
                label: "infected",
                data: infected,
                borderColor: "#FDD835"
            },
            {
                label: "recovered",
                data: recovered,
                borderColor: "#43A047"
            },
            {
                label: "deaths",
                data: deaths,
                borderColor: "#B71C1C"
            }
        ]
    };

    const legend = {
        display: true,
        position: "bottom",
        labels: {
            fontColor: "white",
            fontSize: 12
        }
    };

    const options = {
        title: {
            display: true,
            text: "Day to Day statistics of Pakistan",
            fontSize:35
        },
        maintainAspectRatio: false ,
        scales: {
            yAxes: [{
                ticks: {
                    stepSize: 100000
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    };




    return (
        <div className={'bg pakData'}>
            <Grid container>
            <Line height={500} data={data} legend={legend} options={options} />
            </Grid>
        </div>
    )
}