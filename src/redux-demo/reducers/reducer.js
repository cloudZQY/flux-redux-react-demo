import Constants from '../constants/AppConstants.js';

function todoApp(state = [], action) {
  switch (action.type) {
    case Constants.INIT:
      var newState = state.slice();
      newState.push({
        text: 'this is first item.'
      })
      return newState;
    case Constants.ADD_TEXT:
      var newState = state.slice();
      newState.unshift({
        text: action.text
      })
      return newState;
    case Constants.REMOVE_TEXT:
      var newState = state.slice();
      newState.splice(action.index,1);
      return newState;
    default:
      return state;
  }
}



import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

var store = createStore(todoApp, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
console.log('store',store);
export default store