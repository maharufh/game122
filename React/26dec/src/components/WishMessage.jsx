import React, { Component } from 'react'

export default class WishMessage extends Component {
    constructor(props) {
        super(props);

        this.printMsg = this.printMsg.bind(this);
        this.state = {msg:"Hello"}
        
    }

    printMsg(){
        this.setState({msg:"Good Evening"});
    }
  render() {
    return (
      <div>
        <h1> Wish Message Is : {this.state.msg}</h1>
        <button onClick={this.printMsg}>Click Here</button>
      </div>
    )
  }
}
