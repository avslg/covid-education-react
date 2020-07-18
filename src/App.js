import React from "react";
import CovidForm from "./components/covidForm" 

class App extends React.Component{

  getCovidJson = async (e) => {
    e.preventDefault();
    
    alert("invoked");
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
