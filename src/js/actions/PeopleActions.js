import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

/* eslint-disable no-console */

export default {
  init(name) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.INIT,
      name
    });
  },
  invalidate() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.INVALIDATE
    });
  },
  validate(url, name, alive) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.VALIDATE,
      url,
      name,
      alive
    });
  }
};
