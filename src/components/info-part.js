import React from 'react';
import sunsetImg from '../imgs/sunset.svg';
import sunriseImg from '../imgs/dawn.svg';
import globeImg from '../imgs/globe.svg';
import humidityImg from '../imgs/humidity.svg';
import manometerImg from '../imgs/manometer.svg';
import windyImg from '../imgs/windy.svg';
import cloudsImg from '../imgs/clouds.svg';
import thermometerImg from '../imgs/thermometer.svg';
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
    return (
      <div className="info-grid-element sunriseSunset">
        <div className="sunrise">
          <p>Sunrise</p>
          <img className="info-grid-element-img" src={sunriseImg} alt={sunriseImg} />
          <p className="time-sun"> at 6:00 </p>
          <p className="time-from-now"> 3 hours ago </p>
        </div>
        <div className="sunset span3-4">
          <p>Sunset</p>
          <img className="info-grid-element-img" src={sunsetImg} alt={sunsetImg} />
          <p className="time-sun"> at 6:00 </p>
          <p className="time-from-now"> 3 hours ago </p>
        </div>
      </div>
    )
  }
}

class InfoPart extends React.Component {

  render() {
    return (
      <div className='info-part'>
      <p>Current Weather:</p>
      <p className="weather-description">
        broken clouds
        <img className="weather-icon" src={this.props.television} alt={this.props.television} />
      </p>
        <div className="info-scroll">
         <div className="info-grid-container">
         <GridElement imgSrc={thermometerImg}
                      description='Temperature'
                      value='15'
                      classMore='span2-4'
                      sign='℃'
         />
         <GridElement imgSrc={cloudsImg}
                       description='Cloudiness'
                       value='80'
                       classMore='span2-4'
                       sign='%'
        />
        <SunriseAndDawn />
        <GridElement imgSrc={humidityImg}
                      description='Humidity'
                      value='80'
                      classMore='span2-4'
                      sign='%'
        />
        <GridElement imgSrc={manometerImg}
                      description='Pressure'
                      value='1034'
                      classMore='span2-4'
                      sign=""
        />
        <GridElement imgSrc={windyImg}
                      description='Wind'
                      value='3.1'
                      classMore='span2-4'
                      sign="m/s"
        />
        <CoordinatesElement x='0.32' y='0.32' />


         </div>
        </div>
      </div>
    )
  }
}
export default InfoPart;
