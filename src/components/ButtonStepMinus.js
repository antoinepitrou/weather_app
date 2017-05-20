import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ButtonStepMinus extends Component {
  render(){
    return (
      <div>
        <RaisedButton className="button-step-minus" onClick={this.props.decreaseStep} label="Previous" />
      </div>
    );
  }
}

export default ButtonStepMinus;
