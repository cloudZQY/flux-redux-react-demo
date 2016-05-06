import React,{
  Component,
} from 'react';
import Stores from '../stores/Store';
import Actions from '../actions/Actions';
import TextItem from '../../common/textItem.js';
import AddText from '../../common/addText.js';
import _ from 'lodash';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentDidMount() {
    var _this=this;
    Stores.addChangeListener(function(){
      _this.setState({
        data: Stores.getAll()
      })
    });
    Actions.init();
  }
  addText(text,callback) {
    _.trim(text) !== '' && Actions.addText(text);
    callback();
  }
  removeText(index) {
    Actions.removeText(index);
  }
  render() {
    var _this = this;
    return <div>
      <h1>FLUX</h1>
      <span onClick={Actions.getWeather}>添加异步信息</span>  
      <AddText
        addText={this.addText.bind(this)} />
      <div className="pd20">
        {this.state.data.length == 0 ? 'loading...' : this.state.data.map(function(ele,index){
          return <TextItem 
                    index={index} 
                    key={index} 
                    ele={ele} 
                    removeText={_this.removeText}/>
        })}
      </div>
    </div>
  }
}