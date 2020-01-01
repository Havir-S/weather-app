import React from 'react';
import './scss/mainStyle.scss';
import television from './imgs/television.svg';
import TopPart from './components/top-part.js';
import InputPart from './components/input-part.js';
import InfoPart from './components/info-part.js';
import AppInfoPart from './components/app-info-part.js';
// https://openweathermap.org/weather-conditions TUTAJ JUZ SA IKONKI

// fetch('https://raw.githubusercontent.com/Havir-S/weather-app/master/locations.json')
//   .then(res => res.json())
//   .then(res => {
//     console.log(res.cities);
//   });
//
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c67eaa7e77ad12d3669b53dc4b0112e2&units=metric')
    .then(res => res.json())
    .then(res => console.log(res));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'London'
    }
  }

  render() {
  return (
    <div className='wrapper'>
      <div className='main'>
        <TopPart mainIcon={television} />
        <InputPart />
        <InfoPart television={television} />
        <AppInfoPart />
      </div>
    </div>
  );
  }
}

export default App;
