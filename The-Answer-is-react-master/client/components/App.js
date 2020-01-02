import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard.js';
import Scoreboard from './Scoreboard.js';
import Response from './Response.js';
import Categories from './Categories.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {results: categories,
                selected: false,
                answered: false,
                },  
      currentQuestion: {
        question: false,
      },
      answeredQuestions: [],
      score: 0,
          
    };
    this.switchBool = this.switchBool.bind(this);
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }

  switchBool(event) {
    const temp = this.state.selected;
    this.setState({
      selected: !temp
    })
    console.log('hi')
  }


  render() {
    return (
      <div id={'app'}>
        <Gameboard currentQuestion={this.state.currentQuestion} 
                   results={this.state.results.results}
                   switchBool={this.switchBool}
                   selected={this.state.results.selected}
                   answered={this.state.results.answered}/>

        {/* <Scoreboard score={this.state.score}/>  */}
        {/* <Response/>  */}
      </div>
    );
  }
}
