import React from 'react';
import './scss/mainStyle.scss';


fetch('https://raw.githubusercontent.com/Havir-S/weather-app/master/locations.json')
  .then(res => res.json())
  .then(res => console.log(res));

  const cities = [
    "London","Bangkok","Paris","Dubai","Singapore","New York","Tokyo","Seoul","Antalya","Phuket","Mecca","Hong Kong","Milan","Palma de Mallorca","Pattaya","Osaka","Bali",
    "Cairo","Athens","Moscow","Florence","Dublin","Chennai","Orlando","Madrid","Jaipur","Venice","Riyadh","Ho Chi Minh City","Johannesburg","Johor Bahru","Berlin","Vienna","Denpasar","Barcelona","Nara",
    "Agra","Las Vegas","Los Angeles","Shanghai","Amsterdam","Miami","Prague","Mumbai","Guangzhou","Taipepi","Rome","Delhi","Warsaw","Istanbul","Shenzhen","Kuala Lumpur",
    "New York City","Cracov","Tirana","Andorra la Vella","Yerevan","Baku","Minsk","Brussels","Sarajevo","Sofia","Zagreb","Nicosia","Copenhagen","Tallinn","Helsinki","Tbilisi","Budapest","Reykjavik",
    "Nur-Sultan","Pristina","Riga","Vaduz","Vilnius","Luxembourg","Valletta","Chisinau","Monaco","Podgorica","Skopje","Oslo","Lisbon","Bucharest","San Marino","Belgrade","Bratislava",
    "Ljubljana","Stockholm","Bern","Ankara","Kiev","Vatican City"
  ];


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>go for it</p>
      </header>
    </div>
  );
}

export default App;
