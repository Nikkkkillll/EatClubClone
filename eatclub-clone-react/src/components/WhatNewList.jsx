import React, { Component } from "react";
import JSON from '../Json/Store99.json'
import WhatNew from "./WhatNew";


class  WhatNewList extends Component{
    constructor(){
        super();
        this.state={
            WhatNewData:JSON
        }
        
    }

    render(){
        return(
            <div>
                <WhatNew valuelist={this.state.WhatNewData}/>
            </div>
        )
    }
}

export default WhatNewList;