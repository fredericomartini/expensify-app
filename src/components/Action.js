import React from 'react';

const Action = (props) => (
  <div>
    <button className="big-button" disabled={!props.hasOptions} onClick={props.handlePickOne}>
      What should I Do ?
    </button>
  </div>
);

export default Action;
