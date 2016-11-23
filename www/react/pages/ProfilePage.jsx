var React  = require('react');
var TopBar = require('../components/TopBar');
{/*import Avatar from 'material-ui/Avatar';*/}
var ProfilePage = React.createClass({
  render:function(){
    return (<div id = "prof">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img id="imgg" src="./img/profiles/matthew.png" />
          </div>
          <div className="content">
            <div className="header">John Daniels</div>
            <div className="meta">
              <span className="date">Architectural Engineer</span>
            </div>
            <div className="description">
              *bio*
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
});
module.exports = ProfilePage;
