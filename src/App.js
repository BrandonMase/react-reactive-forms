import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactiveForm from './ReactiveForm/ReactiveForm';
import RXInput from './ReactiveForm/RXInput';

class App extends Component {
  constructor(){
    super();

    this.state = {
      value: 'hi',
      newForm: {},
    }
  }

  onValueChanges(changes) {
    
  }
  render() {
    return (
      <div className="App">
        <ReactiveForm 
          FormGroup="newForm"
          valueChanges={this.onValueChanges} >
        <div>
          <RXInput formControl="input1" value='hi'/>
          <input value={this.state.value}/>
        </div>
        <div>hi</div>
        </ReactiveForm>
      </div>
    );
  }
}

export default App;
