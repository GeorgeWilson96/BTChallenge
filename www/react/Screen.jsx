var React  = require('react');
var ReactDOM  = require('react-dom');
var TopBar = require('./components/TopBar');
var Router = require('./components/Router').Router;
var router = require('./components/Router').router;
var IndexPage = require('./pages/IndexPage');
var SearchPage = require('./pages/SearchPage');
var FloorPlanPage = require('./pages/FloorPlanPage');
var DateTime = require('./pages/DateTimePage');
var FindPerson = require('./pages/FindPerson');
var ProfilePage = require('./pages/ProfilePage');
import mat from 'material-ui/Avatar';
var HelpPage = require('./pages/HelpPage');
var Screen = React.createClass({
  render:function(){
    return (<div>
      <TopBar title="TEST"/>
      <Router router={router}>
        <IndexPage path="/" router={router}/>
        <SearchPage path="/search" router={router}/>
        <FloorPlanPage path="/floor" router={router}/>
        <DateTime path="/datetime" router={router}/>
        <FindPerson path="/findperson" router={router}/>
        <ProfilePage path="/profile" router={router}/>
        <HelpPage path="/help" router={router}/>
      </Router>
    </div>);
  }
});
ReactDOM.render(<Screen/>,document.body);
