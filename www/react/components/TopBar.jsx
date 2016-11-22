var React  = require('react');
var ReactDOM  = require('react-dom');

var TopBar = React.createClass({
  render:function(){
    return (<div style={{margin:"1vh 0",textAlign:"center"}}>

      <h2 onClick={this.changeColour}>
      <i className="chevron left icon" style={{float:"left"}}></i>
            <div style={{display:"inline-flex"}}>{this.props.title}</div>
            <div style={{height: "100%",display: "inline-flex",float: "right",maxWidth: "21%"}}><img src="./img/Logo.png" style={{float:"right"}}/></div>
      </h2>
    </div>)
  }
});
module.exports = TopBar;
