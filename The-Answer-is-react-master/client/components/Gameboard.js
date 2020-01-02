import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories.js'

const Gameboard = props => {
  if (props.selected) {
    return (<h1> hiiiiiiiiiiiiiiiiiiiiiiiii </h1>)
  }
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
      <Categories results={props.results}
                  switchBool={props.switchBool}
                  selected={props.selected}
                  answered={props.answered}/> 
    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
