import React from "react";


class CovidForm extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.CovidSubmitMethod}>
                <input type="text" />
            </form>
        );
    }

}



export default CovidForm;
