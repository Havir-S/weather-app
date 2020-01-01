import React from 'react';

class AppInfoPart extends React.Component {

  render() {
    return (
      <div className="app-info-part">
        <div className="api-part">
          <a href="https://openweathermap.org/" >Weather API</a>
          <a href="http://satyr.io/" >Flags API</a>
          <a href="https://www.flaticon.com/">Icons site</a>
          <a href="https://github.com/Havir-S">Bundled together by Christopher Saffron </a>
        </div>
      </div>
    )
  }
}

export default AppInfoPart;
