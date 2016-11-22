var React  = require('react');
var TopBar = require('../components/TopBar');
{/*import Avatar from 'material-ui/Avatar';*/}
var ProfilePage = React.createClass({
  render:function(){
    return (<div id = "prof">
      <div className="ui link cards">
        <div className="card">
    <div className="image">
      <img id = "imgg" src="http://semantic-ui.com/images/avatar2/large/matthew.png" />
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
      <table class="ui celled table">

      <div id = "form" className="ui form">
  <div className="inline fields">
    <tr><td>
    <div className="eight wide field">
      <input type="text" placeholder="First Name" />
    </div>
  </td></tr>
  <tr><td>
    <div className="eight wide field">
      <input type="text" placeholder="Middle Name" />
    </div>
    </td></tr>
    <tr><td>
    <div className="eight wide field">
      <input type="text" placeholder="Last Name" />
    </div>
    </td></tr>
    <tr><td>
    <div className="eight wide field">
      <input type="email" placeholder="Email Address" />
    </div>
    </td></tr>
  </div>
</div>
<tbody>
</tbody>
</table>
    </div>);
  }
});
module.exports = ProfilePage;
