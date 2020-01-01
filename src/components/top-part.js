import React from 'react';

class TopPart extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.changeLightMode(e.target.checked);
  }

  render() {
    const lightMode = this.props.lightMode;
    let lightModeP;

    if (lightMode === true) {
      lightModeP = <p className="light-mode">Light mode</p>
    } else {
      lightModeP = <p className="dark-mode">Dark mode</p>
    }

    return (
      <div className="top-part">
        <nav>
        <div className="change-mode-div">
          {lightModeP}
          <div className="checkbox">
            <input className="check" type="checkbox" id="check" onChange={this.handleChange} />
            <label htmlFor="check"></label>
            <div className="rays">
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
            </div>
          </div>
        </div>
          <h2><span>Weather App</span></h2>
          <div className="main-icon-container">
            <img className='main-icon' src={this.props.mainIcon} alt={this.props.mainIcon} />
          </div>
        </nav>
      </div>
    )
  }
}

export default TopPart;
