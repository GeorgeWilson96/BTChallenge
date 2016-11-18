var React  = require('react');
var TopBar = require('../components/TopBar');
var IndexPage = React.createClass({
  render:function(){
    return (<div>
      <a onClick={()=>{this.props.router.goto("/floor");}}>floor</a>
    </div>);
  }
});
module.exports = IndexPage;
