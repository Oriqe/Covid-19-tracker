import React from 'react';
import censor_info from './censor_info/censor_info';
import './App.css';
import CountryList from './component/CountryList/CountryList';

// import fs from 'fs';
// const fs = require('fs');

// fs.readFileSync(
//   'C:\\Users\\orikl\\Desktop\\Playground\\contantmanagertraersy\\New folder\\New folder\\newer_folder\\covid-trac'
// );

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      stats: [],
      more_stats: [],
    };
  }

  async componentDidMount() {
    const puppeteer = require('puppeteer');

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      const gaga = await page.goto('https://www.zillow.com');
      console.log(gaga.text);
      await page.screenshot({ path: 'example.png' });

      await browser.close();
    })();

    const resp = await fetch('https://api.covid19api.com/countries');
    const countries = await resp.json();

    this.setState({ countries });
    this.state.countries.forEach(async (country) => {
      console.log(country, '%%%%%%%%%%%%%%%%%%%%5');
      console.log(country.Slug, country.ISO2);
      if (country.ISO2 === 'AN') return;
      const resp = await fetch(
        `https://api.covid19api.com/country/${country.Slug}`
      );
      const detailed_resp = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${country.ISO2}`
      );

      const data = await resp.json();
      const more_data = await detailed_resp.json();
      const final_data = {
        covid_stats: data[data.length - 1],
        more_stats: more_data,
        censor_stats:
          censor_info[
            country.Slug.toLowerCase().replace(' ', '_').replace('-', '_')
          ],
      };
      console.log(final_data);

      if (data.length)
        this.setState((prevState) => ({
          stats: prevState.stats.concat({
            covid_stats: final_data.covid_stats,
            more_stats: final_data.more_stats,
            censor_rate: final_data.censor_stats,
            CountryCode: country.ISO2,
          }),
        }));
    });
  }

  render() {
    console.log();
    return (
      <div className="App">
        <CountryList main_stats={this.state.stats} />
      </div>
    );
  }
}

export default App;
