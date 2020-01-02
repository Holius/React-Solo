import React from 'react';
import PropTypes from 'prop-types';

const Clue = ({result, switchBool,selected,answered}) => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  return (
    <div> 
      <h5 onClick={switchBool} id={result.id}> {selected ? result.question : result.value } </h5>
    </div>
  );
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
