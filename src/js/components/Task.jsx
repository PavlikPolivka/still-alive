import React from 'react';

export default React.createClass({
  getDefaultProps() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  render() {
    let {task} = this.props;
    return (
      <li className="task">
        <input type="checkbox" ref="checkbox" checked={task.completed} />
        <label>{task.title}</label>
      </li>
    );
  }
});
//{this.handleToggle.bind(this, task)}