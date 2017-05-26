import React, { Component } from 'react';
import '../assets/font/icomoon/style.css';

class IconSwitcher extends Component {
  render() {
    var icon = this.props.forecastData.map(function(value){
      return value.icon
    });
    var weatherIcon = {
      fog: 'icon-cloud-fog2',
      partlycloudy: 'icon-cloud-sun2',
      clear:'icon-sun',
      mostlycloudy:'icon-clouds2'
    }
    for (var i in weatherIcon) {
      if (icon[this.props.step] === i) {
        icon = weatherIcon[i]
      }
    }
    return (
      <span className='icomoon'>
        <span className={icon}></span>
      </span>
    );
  }
}



class Forecast extends Component {
  render(){
    var day = this.props.forecastData.map(function(value){
      return value.date.weekday + " " + value.date.monthname+ " " + value.date.day
    })
    var temperature = this.props.forecastData.map(function(value){
      return value.high.fahrenheit
    })
    return (
      <div className="forecast">
        <IconSwitcher forecastData={this.props.forecastData} step={this.props.step} />
        <span className="temperature" >{temperature[this.props.step]}˚F</span>
        <div className="day">{day[this.props.step]}</div>
      </div>
    );
  }
}

export default Forecast;
