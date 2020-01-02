import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue.js';

const whatever = (event) => {
  event.preventDefault();
  console.log('hiiiiiiiiiiiiii');
}

const Category = ({title, result, switchBool,selected,answered}) => {
  return (
    <div className={'category'} data-testid="category">
      <h3> {title} </h3> 
      <Clue result={result[0]} 
            key={result[0]['id']}
            switchBool={switchBool}
            selected={selected}
            answered={answered}/> 
      <Clue result={result[1]}
            key={result[1]['id']}
            switchBool={switchBool}
            selected={selected}
            answered={answered}/> 
      <Clue result={result[2]} 
            key={result[2]['id']}
            switchBool={switchBool}
            selected={selected}
            answered={answered}/> 
      <Clue result={result[3]}
            key={result[3]['id']}
            switchBool={switchBool}
            selected={selected}
            answered={answered}/> 
      <Clue result={result[4]} 
            key={result[4]['id']}
            switchBool={switchBool}
            selected={selected}
            answered={answered}/> 
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
