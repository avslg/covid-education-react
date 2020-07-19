import React from "react";
import CovidForm from "./components/covidForm" 

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      jsonData: "",
      allCasees:""
    }

    this.updateStats = this.updateStats.bind(this);//Чтобы не терялся контекст при передаче метода в слушатель
  }

  updateStats(){
    let result = this.getCovidJson();
    alert("update");

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
      
      this.setState({
        jsonData: JSON.stringify(data)
      });

      alert("invoked");
      console.log(data);
      return data;
  }

  render(){
    return(
      <div>r
        <CovidForm CovidSubmitMethod={this.getCovidJson}/>
          <button onClick={this.updateStats}>button</button>
          <label>{this.state.jsonData}</label>

      </div>
     );
  }

}





export default App; 
