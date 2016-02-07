import React from 'react';
import ActionCreator from '../actions/PeopleActions';

let invalid = false;

export default React.createClass({
  getInitialState() {
    return {};
  },

  validateInput() {
    let text = this.refs.input.getDOMNode().value;
    if(!text) {
      invalid = true;
    } else {
      invalid = false;
    }
    this.forceUpdate();
  },

  yesClick() {
    if(!invalid) {
      let url = this.props.url;
      let text = this.refs.input.getDOMNode().value;
      let alive = true;
      ActionCreator.validate(url, text, alive);
    }
  },

  noClick() {
    if(!invalid) {
      let url = this.props.url;
      let text = this.refs.input.getDOMNode().value;
      let alive = false;
      ActionCreator.validate(url, text, alive);
    }
  },

  render() {
    let message = "Sorry we do not have this information. Can you help us?";
    if(this.props.correction) {
      message = "Is this information incorrect? Can you corrct it?";
    }
    let name = this.props.url;
    if(this.props.name) {
      name = this.props.name;
    }
    let yesClass = invalid? "invalid" : "yes";
    let noClass = invalid? "invalid" : "no";
    return (
      <div className="info">
        <div className="label">
          <h1>{message}</h1>
          <h1>Is 
          <input type="text" ref="input" onChange={this.validateInput} placeholder="Name cannot be empty" defaultValue={name} />
           still alive?</h1>
        </div>
        <div className="question">
        <span className={yesClass} onClick={this.yesClick}>YES</span>/ 
        <span className={noClass} onClick={this.noClick}>NO</span></div>
      </div>
    );
  }
});
