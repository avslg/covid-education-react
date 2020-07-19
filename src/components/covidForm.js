import React from "react";


class CovidForm extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.CovidSubmitMethod}>
                <p>time: covid {this.props.timeCovid}</p>
                <input type="text" />
            </form>
        );
    }

}



export default CovidForm;

