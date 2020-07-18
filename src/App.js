import React from "react";
import CovidForm from "./components/covidForm" 

class App extends React.Component{

  getCovidJson = async (e) => {
    e.preventDefault();
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
      }).then(json => {
        console.log(json);
        alert("invoked");
      });
      
    //let result = await data.json();
    //console.log(result);
    //alert("invoked");



  }

  render(){
    return(
      <div>r
        <CovidForm CovidSubmitMethod = {this.getCovidJson}/>
       </div>
    );
  }

}





export default App; 
