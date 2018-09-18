import React, { Component } from 'react';

export default class RXhoc extends Component {
  constructor() {
    super();

    this.state = {};
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
    return(
      <div>
      {this.props.children(this)}
      </div>
    )
  }
}