import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category.js';

const Categories = ({results, switchBool,selected,answered}) => {
  const first = results[0];
  const second = results[1];
  const third = results[2];
  const fourth = results[3];
  const fifth = results[4];
  return (
    <div id={'categories'} data-testid="categoryList">
      <Category key={first.id} 
                title={first.title} 
                result={first.clues} 
                switchBool={switchBool}
                selected={selected}
                answered={answered}/> 
      <Category key={second.id} 
                title={second.title} 
                result={second.clues} 
                switchBool={switchBool}
                selected={selected}
                answered={answered}/> 
      <Category key={third.id} 
                title={third.title} 
                result={third.clues} 
                switchBool={switchBool}
                selected={selected}
                answered={answered}/> 
      <Category key={fourth.id} 
                title={fourth.title} 
                result={fourth.clues} 
                switchBool={switchBool}
                selected={selected}
                answered={answered}/> 
      <Category key={fifth.id} 
                title={fifth.title} 
                result={fifth.clues}
                switchBool={switchBool}
                selected={selected}
                answered={answered}/> 
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
