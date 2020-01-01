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

  render() {
    return (
      <div className='input-part'>
        <div className="input-container">
          <span className="input-placeholder">City</span>
          <input className="main-input" type="text" />
          <div className="propositionsDiv">
            <div className="proposition">
              <span className="proposition-span">Tokyo</span>
            </div>
            <div className="proposition">
              <span className="proposition-span">Tokyo</span>
            </div>
            <div className="proposition">
              <span className="proposition-span">Tokyo</span>
            </div>
            <div className="proposition">
              <span className="proposition-span">Tokyo</span>
            </div>
          </div>
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
