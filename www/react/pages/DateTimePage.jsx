var React  = require('react');
var TopBar = require('../components/TopBar');
var DateTimePage = React.createClass({
  render:function(){
    return (<div id="Date">
      <div class="ui top attached demo menu">
  <a className="item">
    <i className="sidebar icon"></i>
    Menu
  </a>
</div>
<div class="ui bottom attached segment pushable">
  <div class="ui inverted labeled icon left inline vertical sidebar menu">
    <a className="item">
      <i className="home icon"></i>
    </a>
      Home
    <a className="item">
      <i className="block layout icon"></i>
      Topics
    </a>
    <a className="item">
      <i className="smile icon"></i>
      Friends
    </a>
    <a className="item">
      <i className="calendar icon"></i>
      History
    </a>
  </div>
  <div class="pusher">
    <div class="ui basic segment">
      <h3 class="ui header">Application Content</h3>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</div>

        <div style={{display:"block"}}><label for = "inDate">Date From:  </label><input type="date" name="inDate"></input></div>
        <div style={{display:"block"}}><label for = "outDate">Date Till:  </label><input type="date" name="outDate"></input></div>
        <div id= "checkboxes">
        <div style={{display:"block"}}><input type="checkbox" name = "morning" /><label for = "morning">  Morning (07:00 - 12:00)</label></div>
        <div style={{display:"block"}}><input type="checkbox" name = "afternoon" /><label for = "afternoon">    Afternoon (12:00 - 17:00)</label></div>
        <div style={{display:"block"}}><input type="checkbox" name = "evening" /><label for = "evening">  Evening (17:00 - 22:00)</label></div>
        <div style={{display:"block"}}><input type="checkbox" name = "overnight" /><label for = "overnight">    Overnight (22:00 - 07:00)</label></div>
      </div>
        {/*<a onClick={()=>{this.props.router.goto("/FloorPlanPage");}}>*/}<div id = "fplanbutton"><button className = "ui button fluid homeButton">Next</button></div>{/*</a>*/}
    </div>);
  }
});
module.exports = DateTimePage;
