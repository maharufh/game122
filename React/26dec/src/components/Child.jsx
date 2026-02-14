 import React, { Component } from 'react'
 
 export default class Child extends Component {
    constructor(props) {
        super(props)
        console.log("Child ctt is running");
    }
    componentDidMount(){
        console.log('child compo Did Mount');
    }

    componentDidUpdate(){
        console.log('child update');
    }

    componentWillUnmount(){
        console.log("child mount will unMount");
    }
   render() {
    console.log("child render");
     return (
       <div> 

        <h1>I m Child Component</h1>
       </div>
     )
   }
 }
 