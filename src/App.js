import React from 'react';
import './scss/mainStyle.scss';
import television from './imgs/television.svg';
import TopPart from './components/top-part.js';
import InputPart from './components/input-part.js';
import InfoPart from './components/info-part.js';
import AppInfoPart from './components/app-info-part.js';
import NoCity from './components/error.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      lightMode: 1,
      input: "",
      weatherObj: "",
      cities: [],
      error: 0
    };
    this.handleLightModeChange = this.handleLightModeChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getNewWeather = this.getNewWeather.bind(this);
    this.propositionClick = this.propositionClick.bind(this);
    this.turnOffError = this.turnOffError.bind(this);
  }

  async componentDidMount() {
    //getting the cities name propositions from github
    try {
    const cities = await fetch('https://raw.githubusercontent.com/Havir-S/weather-app/master/locations.json');
    const citiesJson = await cities.json();
    this.setState({cities: citiesJson.cities});

    //LocalStorage values check
    if (localStorage) {
      //city check
      if (localStorage.city) {
        //we have a city -- we call the api on that city
        let startCity = localStorage.city;
        let weatherObj = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${localStorage.city}&APPID=c67eaa7e77ad12d3669b53dc4b0112e2&units=metric`);
        let weatherObjJson = await weatherObj.json();
        this.setState({weatherObj: weatherObjJson});
        this.setState({city: startCity});
      } else {
        //we do not have a city -- we set the default to London
        let weatherObj = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c67eaa7e77ad12d3669b53dc4b0112e2&units=metric`);
        let weatherObjJson = await weatherObj.json();
        this.setState({weatherObj: weatherObjJson});
        localStorage.setItem('city','London');
        this.setState({city:'London'});
      }

      //lightmode check
      if (localStorage.lightMode === "true" || localStorage.lightMode === "false") {
        //we do have it
        this.setState({lightMode: localStorage.lightMode});
      } else {
        localStorage.setItem('lightMode',"true");
        this.setState({lightMode: "true"});
        //we do not have lightMode property
      }

    } else {
      console.log('We have no access to localStorage, no value will be remembered.');
    }
  }
  catch(err) {
    console.log(err);
  }
  }

  handleLightModeChange(e) {
    this.setState({lightMode: e});
    if(localStorage) {
      localStorage.lightMode = e;
    }
  }

  handleInputChange(input) {
    this.setState({input});
  }

  turnOffError() {
    this.setState({error: 0});
  }

  async getNewWeather() {
    try {
    let newCity = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&APPID=c67eaa7e77ad12d3669b53dc4b0112e2&units=metric`);
    let newCityRes = await newCity.json();
    if (newCityRes.cod === 200) {
      this.setState({weatherObj: newCityRes});
      if (localStorage) {
        if (localStorage.city) {
          localStorage.city = newCityRes.name;
        }
      }
      this.setState({input: ""});
    } else {
      this.setState({input: ""});
      this.setState({error: 1});
    }

  }
  catch(err) {
    console.log(err);
  }
  }

  async propositionClick(e) {

  await this.setState({input: e});
  this.getNewWeather();
  }

  render() {
    let darkMode;
    if(this.state.lightMode === "true") {
      darkMode = "";
    } else {
      darkMode = 'dark-main';
    }
  return (
    <div className='wrapper'>
      <div className={`main ${darkMode}`}>

        <TopPart mainIcon={television}
                 lightMode={this.state.lightMode}
                 changeLightMode={this.handleLightModeChange}
                 checkSomething={this.checkSomething}
                 />

        <InputPart handleInputChange={this.handleInputChange}
                   inputValue={this.state.input}
                   flagValue={this.state.weatherObj.sys}
                   startSearchingNewCity={this.getNewWeather}
                   cities={this.state.cities}
                   propositionClick={this.propositionClick}
                   />

        <InfoPart television={television}
                  weatherObj={this.state.weatherObj}/>

        <AppInfoPart />
        
        {this.state.error === 1 ? <NoCity turnOffError={this.turnOffError} /> : <div></div>}
      </div>
    </div>
  );
  }
}

export default App;
