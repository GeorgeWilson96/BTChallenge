var React = require('react');
var Router = React.createClass({
  getInitialState:function(){
    this.props.router.origin = this;
    return {};
  },
  render:function(){
    var page;
    this.props.children.map((child)=>{
      if(child.props.path == this.props.router.path)
        page = child;
    });
    return page;
  }
});
var router = {
  history:[],
  path:"/",
  goto:function(newPage) {
    debugger;
    this.history.push(this.page);
    this.path = newPage;
    this.origin.forceUpdate();
  },
  goBack:function(){
    this.page = history.pop();
  },

};
module.exports = {Router:Router,router:router};
