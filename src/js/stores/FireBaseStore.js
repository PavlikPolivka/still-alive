import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
// data storage
let _human = [];
let _loading = true;
let _error = false;
let _correct = false;
let _path = "";

var Firebase = require('firebase');
var firebase = new Firebase("https://still-alive-info.firebaseio.com/people");

// Facebook style store creation.
const FireBaseStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  isLoading() {
    return _loading;
  },
  isError() {
    return _error;
  },
  getHuman() {
    return _human;
  },
  getPath() {
    return _path;
  },
  isCorrect() {
    return _correct;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.INIT:
        _path = action.name.trim();
        var human = firebase.child(_path);
        human.on("value", function(snap) {
          _loading = false;
          if(snap.val()) {
            _human = snap.val();
          } else {
            _error = true;
          }
          FireBaseStore.emitChange();
        });
        break;
      case Constants.ActionTypes.INVALIDATE:
        _correct = true;
        FireBaseStore.emitChange();
        break;
      case Constants.ActionTypes.VALIDATE:
        _correct = false;
        _loading = false;
        _human.name = action.name.trim();
        _human.status = action.alive;
        _error = false;
        var human = firebase.child(_path);
        human.set(_human);
        FireBaseStore.emitChange();
        break;
    // add more cases for other actionTypes...

    // no default
    }
  })
});

export default FireBaseStore;
