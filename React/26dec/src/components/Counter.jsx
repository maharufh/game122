import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.countInc = this.countInc.bind(this);
    this.countDec = this.countDec.bind(this);
  }

  countInc() {
    this.setState({ count: this.state.count + 1 });
  }

  countDec() {
    
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{this.state.count}</h1>
        <button onClick={this.countInc} style={{ fontSize: '20px', margin: '5px' }}>➕</button>
        <button onClick={this.countDec} style={{ fontSize: '20px', margin: '5px' }}>➖</button>
      </div>
    );
  }
}
