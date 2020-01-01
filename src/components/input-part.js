import React from 'react';

async function getAllCities() {
  let cities = await fetch('https://raw.githubusercontent.com/Havir-S/weather-app/master/locations.json');
  let citiesRes = await cities.json();
  return Promise.resolve(citiesRes.cities);

}

class Proposition extends React.Component {

  render() {
    return (
      <div className="proposition">
        <span className="proposition-span">{this.props.value}</span>
      </div>
    )
  }
}

class InputPart extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.state = {
      cities: getAllCities()
    }
  }

  handleValueChange(e) {
    this.props.handleInputChange(e.target.value);
  }

  render() {

    console.log(this.state.cities);

    return (
      <div className='input-part'>
        <div className="input-container">
          <span className="input-placeholder">City</span>
          <input className="main-input" type="text" onChange={this.handleValueChange}/>
          <div className="propositionsDiv">
            <Proposition value='Tokyo' />
            <Proposition value='Tokyo' />
            <Proposition value='Tokyo' />
            <Proposition value='Tokyo' />
          </div>
          {this.props.inputValue.length > 0 &&
            <button className="main-button" type="button"> Check </button>
          }

          <div className="info-div">
            <img className="country-flag" src="http://satyr.io/80x60?flag=jp" alt="country_flag" />
            <p>JP</p>
          </div>
        </div>
      </div>
    )
  }
}

export default InputPart;
