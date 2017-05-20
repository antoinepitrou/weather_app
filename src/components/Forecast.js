import React, { Component } from 'react';

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
        <div className="temperature" >{temperature[this.props.step]}˚C</div>
      </div>
    );
  }
}

export default Forecast;
