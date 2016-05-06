import React,{
  Component,
} from 'react';

export default class AddText extends Component{
  addText() {
    var _this = this;
    this.props.addText(this.refs.inputAddText.value,function(){
      _this.refs.inputAddText.value = '';
      _this.refs.inputAddText.focus();
    });
  }
  onKeydown(e){
    var keyCode = e.nativeEvent.keyCode;
    if(keyCode === 13) {
      this.addText();
    }
  }
  render() {
    var {onKeydown} = this.props;
    return <div className="addText">
        <input type="text" ref="inputAddText" onKeyDown={this.onKeydown.bind(this)}/>
        <button onClick={this.addText.bind(this)}>add</button>
      </div>
  }
}