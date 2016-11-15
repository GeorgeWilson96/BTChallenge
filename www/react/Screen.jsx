var React  = require('react');
var ReactDOM  = require('react-dom');
var TopBar = require('./components/TopBar')
var Screen = React.createClass({
  render:function(){
    return (<div>
      <TopBar title="TEST"/>
      <div onClick={()=>{alert('HELLO');}}>
      Hello
      </div>
    </div>);
  }
});
ReactDOM.render(<Screen/>,document.body);
