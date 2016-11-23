var React  = require('react');
var ReactDOM  = require('react-dom');

var TopBar = React.createClass({
  goBack:function(){
    this.props.router.goBack()
  },
  render:function(){
    return (<div style={{margin:"1vh 0",textAlign:"center"}}>
      <h2 onClick={this.changeColour}>
        <i className="chevron left icon" style={{float:"left"}} onClick={this.goBack}></i>
        <div style={{display:"inline-flex"}}>{this.props.title}</div>
        <div><img src="./img/Logo.png" style={{float: "right", height: "37px", position: "relative", top: "-18px"}}/></div>
      </h2>
    </div>)
  }
});
module.exports = TopBar;
