import React from 'react';
import ReactDOM from 'react-dom';
import ImageItem from 'components/ImageItem';
import Hello from 'components/hello';
import './less/style.less';
class App extends React.Component{
  render(){
    return <div>
              <ImageItem />
              <Hello />
              <h1>hello react es2015</h1>
           </div>
  }
}

ReactDOM.render(<App />,document.getElementById('container'));
