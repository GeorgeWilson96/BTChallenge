var React  = require('react');
var TopBar = require('../components/TopBar');
var DateTimePage = React.createClass({
  render:function(){
    return (<div id="Date">
        <input type="date" name="inDate"></input>
        <input type="date" name="outDate"></input>
        <div id= "checkboxes">
        <input type="checkbox" value="Morning (07:00 - 12:00)"></input>
        <input type="checkbox" value="Afternoon (12:00 - 17:00)"></input>
        <input type="checkbox" value="Evening (17:00 - 22:00)"></input>
        <input type="checkbox" value="Overnight (22:00 - 07:00"></input></div>
        {/*<a onClick={()=>{this.props.router.goto("/FloorPlanPage");}}><div id = "fplanbutton"><button className = "ui button fluid homeButton">Next</button></div></a>*/}
    </div>);
  }
});
module.exports = DateTimePage;
