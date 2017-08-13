import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state ={
        unfilteredString: [ 'string1' , 'string 2', 'random' , 'additional string'],
        userInput: '',
        filteredString: []
        }
    }  
      handleChange(val) {
    this.setState({ userInput: val });
  }

    filterString(userInput) {
        var unfilteredString = this.state.unfilteredString;
        var filteredString = [];
        for (var i = 0; i < unfilteredString.length; i++) {
            if(unfilteredString[i].includes(userInput) ) {
                filteredString.push(unfilteredString[i])
            }
        } this.setState({filteredString: filteredString})
    }
    

    render() {
        return ( 
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unfilteredString, null, 10)}</span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput)}>Filter</button>
            <span className="resultBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredString, null, 10)}</span>
        </div>    
        )
    }
}

export default FilterString;