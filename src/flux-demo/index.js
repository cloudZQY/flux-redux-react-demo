import React,{
  Component,
} from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home'
import '../less/style.less';

export default class App extends Component{
  render() {
    return <div> 
      <Home></Home>
    </div>
  }
}

ReactDOM.render(<App />,document.getElementById('container'));
