import React from 'react';
import ActionCreator from '../actions/PeopleActions';

export default React.createClass({
  getInitialState() {
    return {};
  },

  correctInfo() {
    ActionCreator.invalidate();
  },

  render() {
    let human = this.props.human;
    let state = human.status? "YES" : "NO";
    return (
      <div>
      <div className="info">
        <div className="label"><h1>Is {human.name} still alive?</h1></div>
        <div className="state">{state}</div>
      </div>
      <div id="footer">
        Is this information incorrect?
        <span className="correct" onClick={this.correctInfo}>Correct it!</span>
      </div>
      </div>
    );
  }
});
