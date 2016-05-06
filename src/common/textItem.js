import React,{
  Component,
} from 'react';

export default class TextItem extends Component{
  render() {
    var _this = this;
    var {index,ele} = this.props;
    return <p className="border1 pd20 text-item"> {ele.text} <span onClick={_this.props.removeText.bind(this,index)} className="remove icon-remove"></span></p>
  }
}