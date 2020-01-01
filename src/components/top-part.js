import React from 'react';

class TopPart extends React.Component {


  render() {
    return (
      <div className="top-part">
        <nav>
        <div className="change-mode-div">
          <p className="light-mode">Light mode</p>
          <div className="checkbox">
            <input className="check" type="checkbox" id="check" />
          </div>
          <p className="dark-mode">Dark mode</p>
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
