import React, {PropTypes} from 'react';
import FireBaseStore from '../stores/FireBaseStore';
import ActionCreator from '../actions/PeopleActions';
import Loading from './Loading.jsx';
import Missing from './Missing.jsx';
import Info from './Info.jsx';

var validUrl = false;

function stateChange() {
  return {
    path: FireBaseStore.getPath(),
    loading: FireBaseStore.isLoading(),
    error: FireBaseStore.isError(),
    human: FireBaseStore.getHuman(),
    correct: FireBaseStore.isCorrect()
  }
}

export default React.createClass({

  _onChange() {
    this.setState(stateChange());
  },

  getInitialState: function() {
    var urlRegex = new RegExp("https?:\/\/(is.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}).still-alive.info\/?");
    var url = window.location.href;
    var name = "";
    if(urlRegex.test(url)) {
      validUrl = true;
      var groups = urlRegex.exec(url);
      name = urlRegex.exec(url)[2];
      ActionCreator.init(name);
    }
    return stateChange();
  },

  componentDidMount() {
    FireBaseStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    FireBaseStore.removeChangeListener(this._onChange);
  },

  render() {
    if(!validUrl) {
      return (<h1>Not Valid url</h1>);
    }
    if(this.state.loading) {
      return (<Loading />);
    }
    if(this.state.error || this.state.correct) {
      return (<Missing  url={this.state.path} name={this.state.human.name} correct={this.state.correct}/>);
    }
    return (
      <Info human={this.state.human} />
    );
  }
});
