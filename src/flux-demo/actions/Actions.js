import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/AppConstants.js';

var Actions = {
  init: function() {
    AppDispatcher.dispatch({
      actionType: Constants.INIT
    })
  },
  addText: function(text) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_TEXT,
      text
    })
  },
  removeText: function(index) {
    AppDispatcher.dispatch({
      actionType: Constants.REMOVE_TEXT,
      index
    })
  },
  getWeather() {
    var _this = this;
    fetch('https://api.heweather.com/x3/weather?cityid=CN101020100&key=a50f9715ce0e4b299f15c801f53925c6')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        AppDispatcher.dispatch({
          actionType: Constants.ADD_TEXT,
          text: data['HeWeather data service 3.0'][0].suggestion.comf.txt,
        })
      })
  }
}

export default Actions;