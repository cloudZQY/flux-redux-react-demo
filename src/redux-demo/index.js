import React,{
  Component,
} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import todoApp from './reducers/reducer.js';
import Home from './components/home';
import '../less/style.less';

export default class App extends Component{
  render() {
    return <Provider store = {todoApp}>
      <Home></Home>
    </Provider>
  }
}

ReactDOM.render(<App />,document.getElementById('container'));
