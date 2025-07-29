import React, { Component } from "react";
import JSON from '../Json/ProteinMeal.json'
import ProteinMeals from "./ProteinMeals";


class  ProteinMealsList extends Component{
    constructor(){
        super();
        this.state={
            ProteinMealsData:JSON
        }
        
    }

    render(){
        return(
            <div>
                <ProteinMeals valuelist={this.state.ProteinMealsData}/>
            </div>
        )
    }
}

export default ProteinMealsList;