import React from 'react';

class Proposition extends React.Component {

  render() {
    return (
      <div className="proposition" onClick={() => this.props.valueCheck(this.props.value)}>
        <span className="proposition-span">{this.props.value}</span>
      </div>
    )
  }
}

class InputPart extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleStartSearchingNewCity = this.handleStartSearchingNewCity.bind(this);
  }

  handleValueChange(e) {
    this.props.handleInputChange(e.target.value);
  }

  handleStartSearchingNewCity(e) {
    if (e.key === 'Enter' || e.target.name === 'main-button') {
      this.props.startSearchingNewCity();
    } else {

    }
    // this.props.startSearchingNewCity
  }


  render() {

    let flagValue = 'http://satyr.io/20x20?delay=3g';
    let countryShort,cities,filteredCities,propositionDiv;
    if (typeof this.props.flagValue === 'object') {
      /*Could have done it with just taking the country's abbreviation and replacing it in some places, but
        with what I had in mind(having a static default img) this would actually take more time */

      flagValue = `http://satyr.io/80x60?flag=${this.props.flagValue.country}`;
      countryShort = this.props.flagValue.country;
    }
    if (this.props.cities) {
      cities = this.props.cities;
      filteredCities = cities.filter((el) => {
        return el.toLowerCase().indexOf(this.props.inputValue.toLowerCase()) > -1;
      });
    }

    if (this.props.inputValue.length > 0 && filteredCities.length > 0) {
     propositionDiv =
      <div className="propositionsDiv">
      {filteredCities.map(city => (
      <Proposition value={city}
                   key={city}
                   valueCheck={this.props.propositionClick}/>

      ))}
      </div>
    }

    return (
      <div className='input-part'>
        <div className="input-container">
         {this.props.inputValue.length > 0 ?
           <span className="input-placeholder dirty">City</span> :
           <span className="input-placeholder">City...</span>
         }
          <input value={this.props.inputValue}
                 className="main-input"
                 type="text"
                 onChange={this.handleValueChange}
                 onKeyDown={this.handleStartSearchingNewCity}
                 />
          {propositionDiv}

          {this.props.inputValue.length > 0 &&
            <button name="main-button" className="main-button" type="button" onClick={this.handleStartSearchingNewCity}>Check</button>
          }

          <div className="info-div">
            <img className="country-flag" src={flagValue} alt="country_flag" />
            <p>{countryShort}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default InputPart;
