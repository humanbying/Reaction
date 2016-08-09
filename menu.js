var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello this is some text
      </div>
    );
  }
});

var CommentBox2 = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello this is some text2
      </div>
    );
  }
});

var TryButton = React.createClass({
  render: function() {
    return (
      <div>
        <button>
          Magical Button
        </button>
      </div>
    );
  }
});

var TryForm = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <input type="text" />
            <button>
              Submit
            </button>
        </form>
      </div>
    );
  }
});

var HelloWorld = React.createClass({
  getInitialState:function() {
    return {counter: 0}
  },
  addToCounter: function() {
    if(this.state.counter % 10 === 0 && this.state.counter !== 0) {
      alert("AWESOME!");}
    this.setState({counter: this.state.counter + 1})
  },
  minusFromCounter: function() {
    if(this.state.counter > 0){
    this.setState({counter: this.state.counter - 1});}
  },
  multiplyCounter: function() {
    this.setState({counter: this.state.counter * 2})
  },
  divideCounter: function() {
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
  }
});



ReactDOM.render(
  <div>
    <CommentBox />
    <CommentBox2 />
    <TryButton />
    <TryForm />
    <HelloWorld date={new Date()}/>
  </div>,
  document.getElementById('stuff')
);
