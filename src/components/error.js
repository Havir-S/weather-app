import React from 'react';

class NoCity extends React.Component {

  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.props.turnOffError();
    },5000);
  }

  componentWillUnmount() {
  clearTimeout(this.timerID);
  }

  render() {
    return (
      <div className="error" onClick={this.props.turnOffError}>
        <div className="error-text">
          No City Found with such name!
        </div>
      </div>
    )
  }
}


export default NoCity;
