import React, { Component } from 'react';
import './App.css';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <form>
//           Amount:
//           <input type="text" name="name"/>
//           <input type="submit" value="Submit"/>
//         </form>
//       </div>
//     );
//   }
// }

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('User value: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <h1>User Value:</h1>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Please enter your value here"/>
          <input type="submit" value="Submit" />
        </form>

        <div>
          <h1>Value after interest calculations:</h1>
          <p></p>
        </div>
      
      </div>
    );
  }
}



export default Name;

