import React, { Component } from 'react';
import './App.css';
// import app from './server'

class Data extends Component {

//   constructor(){
//     super();
//     this.state = {
//         name: []
//     };
// };

componentDidMount() {
var url = 'http://localhost:3001/alumni'
var that = this
  fetch(url)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function(data) {
    console.log(data)
  });
}


  render(data) {
    return (
      <div className="App">

      </div>
    );
  }
}

export default Data;
