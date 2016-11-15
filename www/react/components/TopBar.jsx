var React  = require('react');
var ReactDOM  = require('react-dom');

var TopBar = React.createClass({
  getInitialState:function(){
    return {colour:"RED"};
  },
  changeColour:function() {
    if (this.state.colour == "RED") {
      this.setState({colour:"BLUE"});
    }
    else {
      this.setState({colour:"RED"});
    }
  },
  render:function(){
    return (<h2 className="header" style={{color:this.state.colour}} onClick={this.changeColour}>
            {this.props.title}
    </h2>)
  }
});
module.exports = TopBar;
