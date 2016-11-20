var React  = require('react');
var TopBar = require('../components/TopBar');
var IndexPage = React.createClass({
  render:function(){
    return(<div id="IndexPage">
      <a onClick={()=>{this.props.router.goto("/search");}}><button className = "ui button fluid homeButton">Book Seat</button></a>
      <a onClick={()=>{this.props.router.goto("/search");}}><button className = "ui button fluid homeButton">Book Group Space</button></a>
      <a onClick={()=>{this.props.router.goto("/findperson");}}><button className = "ui button fluid homeButton">Find Person</button></a>
      <a onClick={()=>{this.props.router.goto("/profile");}}><div id="userIcon"><i className="users icon"></i></div></a>
      <a onClick={()=>{this.props.router.goto("/help");}}><div id="helpIcon"><i className="help icon"></i></div></a>
    </div>
      )
  }
});
module.exports = IndexPage;
