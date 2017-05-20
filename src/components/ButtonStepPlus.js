import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ButtonStepPlus extends Component {
  render(){
    return (
      <div>
        <RaisedButton  className="button-step-plus" onClick={this.props.increaseStep} label="Next" />
      </div>
    );
  }
}

export default ButtonStepPlus;
