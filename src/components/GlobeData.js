import React, { useState, useEffect } from 'react';
import '../App.css';
import GlobeBarChart from '../components/GlobeBarChart'
import Grid from '@material-ui/core/Grid';


export default function GlobeData() {

  var currentDate = new Date().toDateString()
  const [GlobalData, setGlobalData] = useState()

  useEffect(() => {
    async function getGlobeData() {
      const apiData = await fetch('https://corona.lmao.ninja/v2/all?yesterday')
      const jsonData = await apiData.json()
      setGlobalData(jsonData)
    }

    getGlobeData()

  }, [])

  return (
    <div>
      <h1 className={'mainH'}>Global Covid-19 Statistics</h1>
      <Grid container className={'bg'}>
        <Grid item xs={12} sm={12} md={6}>
          <h3 className={'color ml'}>Total Statistics till : {currentDate}</h3>

          <div className={'ml leftBorder-i'}>
            <h4 >INFECTED</h4>
            <h2 className={"margin cases"}>{GlobalData && GlobalData.cases}</h2>

          </div>
          <div className={'ml leftBorder-r'}>
            <h4 >RECOVERED</h4>
            <h2 className={"margin recovered"}>{GlobalData && GlobalData.recovered}</h2>
          </div>
          <div className={'ml leftBorder-d'}>
            <h4 >DEATHS</h4>
            <h2 className={"margin deaths"}>{GlobalData && GlobalData.deaths}</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          < GlobeBarChart />
        </Grid>
      </Grid>
    </div>
  );
}