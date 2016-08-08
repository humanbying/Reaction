var HelloWorld = React.createClass({
  getInitialState:function() {
    return {
      counter: 0
    }
  },
  addToCounter: function() {
    console.log('add!');
    this.setState({counter: this.state.counter + 1})
    if(this.state.counter % 10 === 0) {
      alert("AWESOME!");
    }
  },
  minusFromCounter: function() {
    console.log('subtract!');
    if(this.state.counter > 0){
    this.setState({counter: this.state.counter - 1});
    }
  },
  multiplyCounter: function() {
    console.log('multiply!');

    this.setState({counter: this.state.counter * 2})
  },
  divideCounter: function() {
    console.log('divide!');

    this.setState({counter: this.state.counter / 2})
  },
  alertFartCounter: function() {
    alert("bloop bloop bloop");
  },
  render: function() {
    return (
      <div>
        <div>
          Counter: {this.state.counter}
        </div>
        <button onClick={this.addToCounter}>+</button>
        <button onClick={this.minusFromCounter}>-</button>
        <button onClick={this.multiplyCounter}>*</button>
        <button onClick={this.divideCounter}>/</button>
        <button onClick={this.alertFartCounter}>Fart</button>

      </div>
    )
    return (
      <div>

      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld date={new Date()}/>,
  document.getElementById('example')
);
