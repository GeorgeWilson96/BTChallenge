var React  = require('react');
var TopBar = require('../components/TopBar');
var DateTimePage = React.createClass({
  render:function(){
    return (<div id="Date">
        <div style={{display:"block"}}><label for = "inDate">Date From:  </label><input type="date" name="inDate"></input></div>
        <div style={{display:"block"}}><label for = "outDate">Date Till:  </label><input type="date" name="outDate"></input></div>
        <div id= "checkboxes">
        <div style={{display:"block"}}><input type="checkbox" name = "morning" /><label for = "morning">  Morning (07:00 - 12:00)</label></div>
        <div style={{display:"block"}}><input type="checkbox" name = "afternoon" /><label for = "afternoon">    Afternoon (12:00 - 17:00)</label></div>
        <div style={{display:"block"}}><input type="checkbox" name = "evening" /><label for = "evening">  Evening (17:00 - 22:00)</label></div>
        <div style={{display:"block"}}><input type="checkbox" name = "overnight" /><label for = "overnight">    Overnight (22:00 - 07:00)</label></div>
      </div>
        {/*<a }}>*/}<div id = "fplanbutton"><button onClick={()=>{this.props.router.goto("/floor");}} className = "ui button fluid homeButton">Next</button></div>{/*</a>*/}
    </div>);
  }
});
module.exports = DateTimePage;
