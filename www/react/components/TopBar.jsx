var React  = require('react');
var ReactDOM  = require('react-dom');

var TopBar = React.createClass({
  goBack:function(){
    this.props.router.goBack()
  },
  render:function(){
    return (<div style={{margin:"1vh 0",textAlign:"center", height:"10vh", backgroundColor:"#D3D3D3",marginTop:"0"}}>
      <h2 onClick={this.changeColour}>
        <i className="chevron left icon" style={{float:"left",height:"10vh",fontSize:"2.3em", position: "relative", top: "17px"}} onClick={this.goBack}></i>
        <div style={{display:"block", position:"relative", top:"26px", fontSize:"1.5em"}}><img style={{height: "49px", position: "relative", top: "-18px"}} src="./img/Logo.png" />{this.props.title}</div>
      </h2>
    </div>)
  }
});
module.exports = TopBar;
