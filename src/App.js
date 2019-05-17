import React, { Component } from 'react';
import InvoiceGenerator from './Components/InvoiceGenerator';
 import axios from 'axios';

 
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        message: "hello"
      }
    }
  }


   getDataFromBE = () => {
    axios.post('http://localhost:5000/api')
    .then(res=> console.log(res.data.message))
    .catch(err=>console.log(err.response.data.message));
    }
  


  render() {
    return (
      <div>
        <InvoiceGenerator /> 
      </div>
    );
  }
}

export default App;


