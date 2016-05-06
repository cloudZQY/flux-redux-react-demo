import React,{
  Component,
} from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextItem from '../../common/textItem.js';
import AddText from '../../common/addText.js';
import * as Actions from '../actions/action.js';
import _ from 'lodash';

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:props.data
    }
  }
  componentDidMount(){
    this.props.actions.init();
  }
  removeText(index){
    this.props.actions.removeText(index);
  }
  addText(text,callback){
    _.trim(text) !== '' && this.props.actions.addText(text);
    callback();
  }
  render() {
    var _this = this;
    return <div>
      <h1>Redux</h1>
      <span onClick={this.props.actions.getWeather}>添加异步信息</span>  
      <AddText
        addText={this.addText.bind(this)} />
      <div className="pd20">
        {this.props.data.length == 0 ? '' : this.props.data.map(function(ele,index){
          return <TextItem 
                    index={index} 
                    key={index} 
                    ele={ele} 
                    removeText={_this.removeText.bind(_this)}/>
        })}
      </div>
    </div>
  }
}

function mapStateToProps(state){
  return {
    data:state
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);


