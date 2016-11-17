var React  = require('react');
var request = require('superagent');
var TopBar = require('../components/TopBar');
var SearchPage = React.createClass({
  getInitialState:function(){
    return {text:"",chips:[],list:[]};
  },
  textChanged:function(e){
    var value = e.currentTarget.value;
    this.setState({text:value});
    if(value){
      request
      .get('/json/preferences.json')
      .set('Accept', 'application/json')
      .end((err,res)=>{
        debugger;
        var chips = [];
        if(res.ok){
          res.body.map((chip)=>{
            if(chip.toUpperCase().indexOf(value.toUpperCase())!== -1){
              chips.push(chip);
            }
          });
        }
        this.setState({list:chips});
      });
    }
    else {
      this.setState({list:[]});
    }
  },
  addChip:function(chip){
    var chips = this.state.chips;
    chips.push(chip);
    this.setState({chips:chips});
  },
  render:function(){
    var list = [];
      this.state.list.map((chip)=>{
        list.push(<div className="item PrefItem" onClick={()=>{this.addChip(chip)}}>{chip}</div>);
      });
    var chips = [];
      this.state.chips.map((chip)=>{
        chips.push(<div className="md-chip">
          <div className="md-chip-text">
            {chip}
            </div>
        </div>);
        console.log(chips);
      });
    if(this.state.list.length === 0 && this.state.text.length > 0){
      list.push(<div className="chip">Not Found</div>)
    }
    return (<div id="SearchPage">
      <div className="ui icon fluid input">
        <input placeholder="Search..."
          type="text"
          onChange={this.textChanged}
          value={this.state.text}/>
        <i className="search icon"></i>
      </div>
      <div className="ui segment listPreferences">
        <div className="ui divided list">
          {list}
        </div>
      </div>
      <div className="chips">
        {chips}
      </div>
      <div className="ui fluid positive button">Next</div>
    </div>);
  }
});
module.exports = SearchPage;
