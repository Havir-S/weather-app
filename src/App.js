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

  // fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c67eaa7e77ad12d3669b53dc4b0112e2&units=metric')
  //   .then(res => res.json())
  //   .then(res => console.log(res));

  function checkLocalStorage(searchedValue) {
    if(localStorage) {
      if (localStorage.getItem(searchedValue)) {
        return localStorage.getItem(searchedValue);
      }
    } else {
      return getLondon();
    }
  }



  async function getLondon() {
    let london = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c67eaa7e77ad12d3669b53dc4b0112e2&units=metric');
    let londonRes = await london.json();

    return londonRes.name;
  }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: checkLocalStorage('city'),
      lightMode: false,
      input: "",
      weatherObj: {}
    };
    this.handleLightModeChange = this.handleLightModeChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getNewCity = this.getNewCity.bind(this);
  }

  handleLightModeChange(e) {
    this.setState({lightMode: e});
  }

  handleInputChange(input) {
    this.setState({input});
  }


  async getNewCity() {
    let newCity = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&APPID=c67eaa7e77ad12d3669b53dc4b0112e2&units=metric`);
    let newCityRes = await newCityRes.json();
    this.setState({weatherObj: newCityRes});
  }

  render() {
  return (
    <div className='wrapper'>
      <div className='main'>
        <TopPart mainIcon={television}
                 lightMode={this.state.lightMode}
                 changeLightMode={this.handleLightModeChange} />

        <InputPart handleInputChange={this.handleInputChange}
                   inputValue={this.state.input}
                   />
        <InfoPart television={television} />
        <AppInfoPart />
      </div>
    </div>
  );
  }
}

export default App;
