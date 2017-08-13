import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
      super();
      this.state ={
          userInput: '',
          palindrome: []
      }
  }
    handleChange(val) {
        this.setState({userInput: val})
    }
    palindromeCheck(userInput) {
        var palindrome = userInput.toLowerCase();
        var backwards = userInput.toLowerCase().split('').reverse().join('');
        if (palindrome === backwards) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }
    render() {
        return ( 
        <div className="puzzleBox palindromePB"> 
            <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input> 
        <button className="confirmationButton" onClick={ () => this.palindromeCheck(this.state.userInput)}>Check for Palindrome</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
        </div>
        )
    }
}

export default Palindrome;