import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {
  EventEmitter
} from 'events';
import Constants from '../constants/AppConstants.js';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';

var app = [];

function init() {
  app[0]={
    id:0,
    text:'this is first item.'
  }
}

function addText(text) {
 app.unshift({
  text
 })
}

function removeText(index) {
 delete app[index];
}

var Stores = assign({},EventEmitter.prototype,{
  getAll: function() {
    return app;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT,callback)
  }
})

AppDispatcher.register(function(action) {
  switch(action.actionType){
    case Constants.INIT:
      init();
      Stores.emitChange();
      break;
    case Constants.ADD_TEXT:
      addText(action.text);
      Stores.emitChange();
      break;
    case Constants.REMOVE_TEXT:
      removeText(action.index);
      Stores.emitChange();
      break;
  }
})

export default Stores;