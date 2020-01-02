import React from 'react';
import sunsetImg from '../imgs/sunset.svg';
import sunriseImg from '../imgs/dawn.svg';
import globeImg from '../imgs/globe.svg';
import humidityImg from '../imgs/humidity.svg';
import manometerImg from '../imgs/manometer.svg';
import windyImg from '../imgs/windy.svg';
import cloudsImg from '../imgs/clouds.svg';
import thermometerImg from '../imgs/thermometer.svg';
import { formatDistanceStrict } from 'date-fns';
//celc &#8451; ℃
//fahr &#8457; ℉

class GridElement extends React.Component {

  render() {
    const tempColor = this.props.value;
    let valueH3;
    if (Number(tempColor) > 25 && this.props.description === 'Temperature') {
      valueH3 = <h3 className="grid-element-value" style={{color: "red"}} >{this.props.value}<span className="celsius">℃</span></h3>
    } else if (tempColor < 5 && this.props.description === 'Temperature') {
      valueH3 = <h3 className="grid-element-value" style={{color: "lightblue"}} >{this.props.value}<span className="celsius">℃</span></h3>
    } else {
      valueH3 = <h3 className="grid-element-value" >{this.props.value}<span className="celsius">{this.props.sign}</span></h3>
    }
    return (
      <div className="info-grid-element">
        <img className="info-grid-element-img" src={this.props.imgSrc} alt={this.props.imgSrc} />
        <div className={"info-div " + this.props.classMore}>
          <h3 className="grid-element-description">{this.props.description} :</h3>
          {valueH3}
        </div>
      </div>
    )
  }
}

class CoordinatesElement extends React.Component {

  render() {
    return (
      <div className="info-grid-element">
        <div className="img-div">
          <p className="coordinates-title">Coordinates</p>
          <img className="info-grid-element-img" src={globeImg} alt={globeImg} />

        </div>
        <div className={"info-div " + this.props.classMore}>
          <p>X: {this.props.x}</p>
        </div>
        <div className={"info-div " + this.props.classMore}>
          <p>Y: {this.props.y}</p>
        </div>
      </div>
    )
  }
}

class SunriseAndDawn extends React.Component {

  render() {

    let sunriseTime,sunsetTime,sunriseTimeDistance,sunsetTimeDistance;

  if (this.props.sunrise && this.props.sunset) {
    let {sunrise, sunset} = this.props;
    let sunriseDate = new Date(sunrise);
    let sunsetDate = new Date(sunset);
    let now = new Date();

    sunriseTimeDistance = formatDistanceStrict(sunriseDate,now,{addSuffix: true});
    sunsetTimeDistance = formatDistanceStrict(sunsetDate,now,{addSuffix: false});

    //sunrisetime fix
    if (sunriseDate.getHours().toString().length === 2) {
      sunriseTime = sunriseDate.getHours().toString() + ":";

      //minutes fix
      if (sunriseDate.getMinutes().toString().length === 2) {
        sunriseTime += sunriseDate.getMinutes().toString();
      } else {
        sunriseTime += "0";
        sunriseTime += sunriseDate.getMinutes().toString();
      }
    } else {
      sunriseTime = "0";
      sunriseTime += sunriseDate.getHours().toString() + ":";

      //minutes fix
      if (sunriseDate.getMinutes().toString().length === 2) {
        sunriseTime += sunriseDate.getMinutes().toString();
      } else {
        sunriseTime += "0";
        sunriseTime += sunriseDate.getMinutes().toString();
      }
    }

    //sunsettime fix
    if (sunsetDate.getHours().toString().length === 2) {
      sunsetTime = sunsetDate.getHours().toString() + ":";

      //minutes fix
      if (sunsetDate.getMinutes().toString().length === 2) {
        sunsetTime += sunsetDate.getMinutes().toString();
      } else {
        sunsetTime += "0";
        sunsetTime += sunsetDate.getMinutes().toString();
      }
    } else {
      sunsetTime = "0";
      sunsetTime += sunsetDate.getHours().toString() + ":";

      //minutes fix
      if (sunsetDate.getMinutes().toString().length === 2) {
        sunsetTime += sunsetDate.getMinutes().toString();
      } else {
        sunsetTime += "0";
        sunsetTime += sunsetDate.getMinutes().toString();
      }
    }
  }

    return (
      <div className="info-grid-element sunriseSunset">
        <div className="sunrise">
          <p>Sunrise</p>
          <img className="info-grid-element-img" src={sunriseImg} alt={sunriseImg} />
          <p className="time-sun">at {sunriseTime}</p>
          <p className="time-from-now">{sunriseTimeDistance}</p>
        </div>
        <div className="sunset span3-4">
          <p>Sunset</p>
          <img className="info-grid-element-img" src={sunsetImg} alt={sunsetImg} />
          <p className="time-sun">at {sunsetTime}</p>
          <p className="time-from-now">in {sunsetTimeDistance}</p>
        </div>
      </div>
    )
  }
}

class InfoPart extends React.Component {

  render() {
    let temperature,cloudiness,humidity,pressure,wind,sunrise,sunset,coordX,
        coordY,description,flagID,name;

    if(typeof this.props.weatherObj === 'object') {
      let weatherObj = this.props.weatherObj;
      temperature = weatherObj.main.temp.toFixed();
      cloudiness = weatherObj.clouds.all;
      humidity = weatherObj.main.humidity;
      pressure = weatherObj.main.pressure;
      wind = weatherObj.wind.speed;
      sunrise = (weatherObj.sys.sunrise * 1000);
      sunset = (weatherObj.sys.sunset * 1000);
      coordX = weatherObj.coord.lon;
      coordY = weatherObj.coord.lat;
      description = weatherObj.weather[0].description;
      flagID = weatherObj.weather[0].icon;
      name = weatherObj.name;
    }
    return (
      <div className='info-part'>
      <p>Current Weather in {name}:</p>
      <p className="weather-description">
        <img className="weather-icon weather-icon-left" src={`http://openweathermap.org/img/wn/${flagID}@2x.png`} alt='icon' />
        {description}
        <img className="weather-icon weather-icon-right" src={`http://openweathermap.org/img/wn/${flagID}@2x.png`} alt='icon' />
      </p>
        <div className="info-scroll">
         <div className="info-grid-container">
         <GridElement imgSrc={thermometerImg}
                      description='Temperature'
                      value={temperature}
                      classMore='span2-4'
                      sign='℃'
         />
         <GridElement imgSrc={cloudsImg}
                       description='Cloudiness'
                       value={cloudiness}
                       classMore='span2-4'
                       sign='%'
        />
        <GridElement imgSrc={humidityImg}
                      description='Humidity'
                      value={humidity}
                      classMore='span2-4'
                      sign='%'
        />
        <GridElement imgSrc={manometerImg}
                      description='Pressure'
                      value={pressure}
                      classMore='span2-4'
                      sign=""
        />
        <GridElement imgSrc={windyImg}
                      description='Wind'
                      value={wind}
                      classMore='span2-4'
                      sign="m/s"
        />
        <SunriseAndDawn sunrise={sunrise} sunset={sunset} />
        <CoordinatesElement x={coordX} y={coordY} />


         </div>
        </div>
      </div>
    )
  }
}
export default InfoPart;
