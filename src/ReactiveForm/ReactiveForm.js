import React, { Component } from 'react';
import RXInput from './RXInput';

export default class ReactiveForm extends Component {
  constructor() {
    super();

    this.state = {
      controls: [],
      values: {}
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  componentDidMount() {
    console.log(this.props.children);
    let childrenWithProps = this.recursiveCloneChildren(this.props.children);
    this.setState({childrenWithProps: childrenWithProps}, () => console.log(this.state.values));
  }

  handleChange(formControl, event) {
    console.log('handle change', formControl)
    let values = {...this.state.values}
    values[formControl] = event;
    console.log(values)
    this.setState({values: values}, () => console.log(this.state.values));
  }

  getValue(formControl) {
    return this.state.values[formControl];
  }
  
  recursiveCloneChildren(children) {
    return React.Children.map(children, child => {
        var childProps = {};
        if (React.isValidElement(child)) {
            if(child.type.name === 'RXInput' || child.type === 'textarea') {
              childProps = {handleChange: (e) => this.handleChange(child.props.formcontrol, e)};
            }
        }
        if (child.props) {
            // String has no Prop
            childProps.children = this.recursiveCloneChildren(child.props.children);
            return React.cloneElement(child, childProps);
        }
        return child;
    })
  }



  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }
  render() {
    return (
      <div>
      {this.state.childrenWithProps}
      </div>
    );
  }
}