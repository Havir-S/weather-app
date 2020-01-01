import React from 'react';

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
  }

  handleValueChange(e) {
    this.props.handleInputChange(e.target.value);
  }

  render() {
    let flagValue = 'http://satyr.io/20x20?delay=3g';
    let countryShort;
    if (typeof this.props.flagValue === 'object') {
      /*Could have done it with just taking the country's abbreviation and replacing it in some places, but
        with what I had in mind(having a static default img) this would actually take more time */
      flagValue = `http://satyr.io/80x60?flag=${this.props.flagValue.country}`;
      countryShort = this.props.flagValue.country;
    }

    return (
      <div className='input-part'>
        <div className="input-container">
         {this.props.inputValue.length > 0 ?
           <span className="input-placeholder dirty">City</span> :
           <span className="input-placeholder">City...</span>
         }
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
            <img className="country-flag" src={flagValue} alt="country_flag" />
            <p>{countryShort}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default InputPart;
