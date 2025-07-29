import React, { Component } from "react";
import JSON from '../Json/Store99.json'
import Store9 from "./Store9";


class  Store9List extends Component{
    constructor(){
        super();
        this.state={
            StoreData:JSON
        }
        
    }

    render(){
        return(
            <div>
                <Store9 valuelist={this.state.StoreData}/>
            </div>
        )
    }
}

export default Store9List;