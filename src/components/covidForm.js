import React from "react";

class CovidForm extends React.Component{
    render(){
        return(
            <div className="form">
                <p className="block-header"><h1>COVID 19</h1>
                </p>
                <p className="block-desc">
                    <span>Статистика по заболеваемости коронавирусной инфекции</span>
                </p> 
                <form>
                    <p>time: covid {this.props.timeCovid}</p>
                    <input type="text" />
                    <button onClick={this.props.clickCovid}>click</button>
                </form>
            </div>
        );
    }

}



export default CovidForm;

