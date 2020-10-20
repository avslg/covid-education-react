import React from 'react';
import CovidForm from './components/covidForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCases: '',
      newCases: '',
      activeCases: '',
      criticalCases: '',
      recovered: '',
      newDeaths: '',
      totalDeaths: '',
      date: '',
      time: '',
    };

    this.updateStats = this.updateStats.bind(this);
    // Чтобы не терялся контекст при передаче метода в слушатель
  }

  getCovidJson = async () => {
    // e.preventDefault();
    const country = 'russia';
    const xApiHost = 'covid-193.p.rapidapi.com'; // https://rapidapi.com/api-sports/api/covid-193
    const xApiKey = '99999999999999999'; // CHANGE

    const data = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': xApiHost,
        'x-rapidapi-key': xApiKey,
      },
    }).then((response) => response.json());

    return data;
  }

  async updateStats(e) {
    e.preventDefault();

    const result = await this.getCovidJson();
    // console.log(result);

    this.setState({
      totalCases: result.response[0].cases.total,
      newCases: result.response[0].cases.new,
      activeCases: result.response[0].cases.active,
      criticalCases: result.response[0].cases.critical,
      recovered: result.response[0].cases.recovered,
      newDeaths: result.response[0].deaths.new,
      totalDeaths: result.response[0].deaths.total,
      date: result.response[0].day,
      time: result.response[0].time,
    });

    const formInput = document.querySelector('.form input');
    formInput.value += ' случаев';
  }

  render() {
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    const {
      timeCovid, totalCases, activeCases,
      criticalCases, totalDeaths, newDeaths, date, time,
      newCases, recovered,
    } = this.state;
    const clickCovid = this.updateStats;
    return (
      <div className="container">
        <CovidForm
          CovidSubmitMethod={this.getCovidJson}
          timeCovid={timeCovid}
          clickCovid={clickCovid}
          totalCases={totalCases}
          activeCases={activeCases}
          criticalCases={criticalCases}
          totalDeaths={totalDeaths}
          newDeaths={newDeaths}
          date={date}
          time={time}
          newCases={newCases}
          recovered={recovered}
        />
      </div>
    );
  }
}

export default App;
