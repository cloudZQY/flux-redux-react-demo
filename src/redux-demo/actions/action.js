import Constants from '../constants/AppConstants.js';

export function init(){
  return {
    type: Constants.INIT
  }
}

export function addText(text){
  return {
    type: Constants.ADD_TEXT,
    text
  }
}

export function removeText(index){
  return {
    type: Constants.REMOVE_TEXT,
    index
  }
}

export function getWeather(){
  return function(dispatch) {
    fetch('https://api.heweather.com/x3/weather?cityid=CN101020100&key=a50f9715ce0e4b299f15c801f53925c6')
      .then(function(response){ 
        return response.json()
      })
      .then(function(data){
        dispatch({
          type: Constants.ADD_TEXT,
          text:data['HeWeather data service 3.0'][0].suggestion.comf.txt
        });
      })
  }
}