import React, { Component } from "react";
import JSON from '../Json/ValueFunData.json'
import ValueFun99 from "./ValueFun99";

class  ValueFunList extends Component{
    constructor(){
        super();
        this.state={
            ValueData:JSON
        }
        
    }

    render(){
        return(
            <div>
                <ValueFun99 valuelist={this.state.ValueData}/>
            </div>
        )
    }
}

export default ValueFunList;