import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state ={
        people: [
            {name: 'james', age: 38, email: 'random@gmail.com'},
            {name: 'beth', age: 22, email: 'notaready@hotmail.com'},
        {age: 23, email: 'nothappening'}],
        userInput: '',
        filteredPeople: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val});
    }
    filterOut(prop) {
        var people = this.state.people;
        var filteredPeople = [];
        for (var i = 0; i < people.length; i++)
        if(people[i].hasOwnProperty(prop)) {
            filteredPeople.push(people[i]);
        }
        this.setState({filteredPeople: filteredPeople})

    }
  
    render() {
        return ( 
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.people, null, 10)}</span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.filterOut(this.state.userInput)}>Filter</button>
            <span className="resultBOx filterObjectRB">Filtered: {JSON.stringify(this.state.filteredPeople, null, 10)}</span>
        </div>    
        )
    }
}

export default FilterObject;