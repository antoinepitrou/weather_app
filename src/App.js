import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

class Forecast extends Component {
  render(){
    var day = this.props.forecastData.map(function(value){
      return value.date.weekday + " " + value.date.monthname+ " " + value.date.day + " " + value.date.year
    })
    var temperature = this.props.forecastData.map(function(value){
      return value.high.celsius
    })
    var icon = this.props.forecastData.map(function(value){
      return value.icon_url
    })
    return (
      <div className="forecast">
        <div className="day">{day[this.props.step]}</div>
        <img className="icon_url" src={icon[this.props.step]} />
        <div className="temperature" >{temperature[this.props.step]}˚F</div>
      </div>
    );
  }
}

export {Forecast};

class ButtonStepMinus extends Component {
  render(){
    return (
      <div>
        <button className="button-step-minus" onClick={this.props.decreaseStep}>Previous</button>
      </div>
    );
  }
}

export {ButtonStepMinus};

class ButtonStepPlus extends Component {
  render(){
    return (
      <div>
        <button className="button-step-plus" onClick={this.props.increaseStep}>Next</button>
      </div>
    );
  }
}

export {ButtonStepPlus}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        step:0,
        forecastData:[]
    }
  }
  componentWillMount(){
    axios.get('http://api.wunderground.com/api/44539645ac11cd74/forecast10day/q/CA/San_Francisco.json')
      .then(function(response){
        var forecastResponse = response.data.forecast.simpleforecast.forecastday;
        this.setState({forecastData:forecastResponse});
        console.log(forecastResponse)
      }.bind(this));
  }
  increaseStep(){
    var stepPlus = this.state.step;
    if (stepPlus >= this.state.forecastData.length - 1){
      return
    };
    stepPlus++;
    this.setState({step:stepPlus});
  }
  decreaseStep(){
    var stepMinus= this.state.step;
    if (stepMinus <= 0){
      return
    };
    stepMinus--;
    this.setState({step:stepMinus});
  }
  render(){
    return (
      <div>
        <ButtonStepMinus decreaseStep={this.decreaseStep.bind(this)} />
        <Forecast forecastData={this.state.forecastData} step={this.state.step} />
        <ButtonStepPlus increaseStep={this.increaseStep.bind(this)} />
      </div>
    )
  }
};

export default App;
