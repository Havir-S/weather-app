import React from 'react';

class NoCity extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.props.turnOffError();
    },5000);
  }

  componentWillUnmount() {
    console.log('error disappear');
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
