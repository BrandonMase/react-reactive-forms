import React, { Component } from 'react';
import RXhoc from './RXhoc';

export default class RXInput extends Component {
  
  //{
//     INVALID: boolean,
//     Dirty: boolean,
//     Touched: boolean, 
//     Value: {
//       Control: controlValue, 
      // Control: controlValue, 
      // Control: controlValue, 
      // Control: controlValue, 
      // Control: controlValue, 
//       }
//    }

//A RX component only cares about itself. 
// When a value / status changes update the parent component

  
  
  constructor() {
    super();

    
    this.state = {
      value: '',
      formControl: '',
    }
  }

    componentDidMount() {
      this.setState({
        value: this.props.value,
        formControl: this.props.formControl
      })
  
      console.log(this.props)
    }
  
    componentWillReceiveProps(nextProps) {
      console.log(this.props);
    }
  
    handleChange(event) {
      console.log('RXINPUT', event);
      this.props.handleChange(this.state.formControl, event);
      this.setState({value: event});
    }

  render() {
    return (
     <RXhoc>
     {(data) => (
       <div>
       {console.log('data', data)}
       <input
       value={this.props.value}
       />
       </div>
     )}
     </RXhoc>
    );
  }
}