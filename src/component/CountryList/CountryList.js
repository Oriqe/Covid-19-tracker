import React from 'react';
import Country from '../Country/Country';
import './countrylist.css';
const CountryList = (props) => {
  return (
    <div className="countrylist">
      {props.main_stats.map((country) => (
        <Country
          key={country.CountryCode}
          stats={country.covid_stats}
          more_stats={country.more_stats}
          censor_rate={country.censor_rate}
        />
      ))}
    </div>
  );
};
export default CountryList;
