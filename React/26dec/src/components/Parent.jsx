import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {count:0,isShow:true}
        console.log('Parent Constructor');
    }

    componentDidMount(){
        console.log('Parent compo Did Mount');
    }

    componentDidUpdate(prevProp,prevState){
        console.log('Parent Comp Did Update');
        console.log(prevState);
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    handleToggle(){
        this.setState({isShow:!this.state.isShow})
    }
    componentWillUnmount(){
        console.log("Parent mount will Unmount");
    }
  render() {
    console.log('Parent Render')
    return (
      <div>
        
<h1>Parent Component</h1>
<h2>{this.state.count}</h2>

<button onClick={()=>this.increment()} >Increment</button>
<button onClick={()=>this.handleToggle()} >Toggle</button>

{
    this.state.isShow && <Child/>
}
      </div>
    )
  }
}
