import React from "react";
import CovidForm from "./components/covidForm" 

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      jsonData: "",
      totalCases: "",
      newCases: "",
      activeCases: "",
      criticalCases: "",
      recovered: "",
      newDeaths: "",
      totalDeaths: "",
      date: "",
      time: "" 
    }

    this.updateStats = this.updateStats.bind(this);//Чтобы не терялся контекст при передаче метода в слушатель
  }

  async updateStats(){
    let result = await this.getCovidJson();
    console.log(result);

    this.setState({
      jsonData: result,
      totalCases: result.response[0].cases.total,
      newCases: result.response[0].cases.new,
      activeCases: result.response[0].cases.active,
      criticalCases: result.response[0].cases.critical,
      recovered: result.response[0].cases.recovered,
      newDeaths: result.response[0].deaths.new,
      totalDeaths: result.response[0].deaths.total,
      date: result.response[0].day,
      time:result.response[0].time
    });

   }


  getCovidJson = async () => {
    //e.preventDefault();
    let country = "russia";
    const xApiHost = "covid-193.p.rapidapi.com"; // https://rapidapi.com/api-sports/api/covid-193
    const xApiKey = "ae61153825mshf5d7179ef888deap132741jsnd421646d8d62"; // CHANGE

    let data = await  fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`,{
        "method": "GET",
        "headers":{
          "x-rapidapi-host": xApiHost,
          "x-rapidapi-key": xApiKey
        } 
      }).then(response => {
          return response.json();
      });
      
      return data;
  }

  render(){
    return(
      <div>r
        <CovidForm CovidSubmitMethod={this.getCovidJson} timeCovid={this.state.time}/>
          <button onClick={this.updateStats}>button</button>
          <label>{this.state.totalCases}</label><br/>
          <label>{this.state.newCases}</label><br/>
          <label>{this.state.activeCases}</label><br/>
          <label>{this.state.criticalCases}</label><br/>
          <label>{this.state.recovered}</label><br/>
          <label>{this.state.newDeaths}</label><br/>
          <label>{this.state.totalDeaths}</label><br/>
          <label>{this.state.date}</label><br/>
          <label>{this.state.time}</label><br/>
      </div>
     );
  }

}





export default App; 
