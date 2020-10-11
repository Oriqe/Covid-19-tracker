import React from 'react';
import './country.css';
const Country = (props) => {
  return (
    <div className="country">
      <img
        className="flag"
        src={props.more_stats.flag}
        alt={props.stats.Country}
      ></img>
      <h2>{props.stats.Country}</h2>
      <p className="mini-header">General details</p>
      <div className="describe">
        <p>{`Population : ${props.more_stats.population}`}</p>
        <p>{`Area : ${props.more_stats.area}`}</p>
        <p>{`Borders With : ${props.more_stats.borders}`}</p>
        <p>{`Censorship Rate : ${props.censor_rate}`}</p>
        <p>{`GINI Rate : ${props.more_stats.gini}`}</p>
      </div>
      <p className="mini-header">Covid Details</p>
      <div className="describe">
        <p>{`Active Cases : ${props.stats.Active}`}</p>
        <p>{`Confirmed Cases : ${props.stats.Confirmed}`}</p>
        <p>{`Death Count : ${props.stats.Deaths}`}</p>
        <p>{`Recovered Cases  : ${props.stats.Recovered}`}</p>
      </div>
      <p>Analysis</p>
    </div>
  );
};

export default Country;
