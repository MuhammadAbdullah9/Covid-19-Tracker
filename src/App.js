import React from 'react'
import './App.css';


import Header from './components/Header'
import GlobeData from './components/GlobeData'
import GlobalChart from './components/GlobalChart'
import CountriesData from './components/CountriesData'


function App() {
  return (
    <div>
      <Header />
      <GlobeData />
      <GlobalChart />
      < CountriesData />
    </div>
  );
}

export default App;
