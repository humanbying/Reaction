
var MyComponent = React.createClass({

  render: function(){
    return (
      <div>
      <h1>Hello, world!</h1>
      <p>
      Two roads diverged in a yellow wood,<br></br>
      And sorry I could not travel both<br></br>
      And be one traveler, long I stood<br></br>
      And looked down one as far as I could<br></br>
      To where it bent in the undergrowth;<br></br>
      <br></br>
      Then took the other, as just as fair,<br></br>
      And having perhaps the better claim,<br></br>
      Because it was grassy and wanted wear;<br></br>
      Though as for that the passing there<br></br>
      Had worn them really about the same,<br></br>
      <br></br>
      And both that morning equally lay<br></br>
      In leaves no step had trodden black.<br></br>
      Oh, I kept the first for another day!<br></br>
      Yet knowing how way leads on to way,<br></br>
      I doubted if I should ever come back.<br></br>
      <br></br>
      I shall be telling this with a sigh<br></br>
      Somewhere ages and ages hence:<br></br>
      Two roads diverged in a wood, and I—<br></br>
      I took the one less traveled by,<br></br>
      And that has made all the difference.<br></br>
      </p>
      </div>
    );
  }
});


var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
     return {
       initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )
  }
});

// ReactDOM.render(<FilteredList/>, document.getElementById('mount-point'));


ReactDOM.render(
  <div>
  <FilteredList/>
  <MyComponent/>
  </div>,
  document.getElementById('myDiv')

);
