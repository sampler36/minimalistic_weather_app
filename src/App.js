import React, { useState, useEffect } from 'react';
import Info from './Components/Info/Info';
import Country from './Components/Country/Country';
import './App.css';

import ca from './img/pic-1.jpg'
import sun from './img/sun-icon.svg';
import ru from './img/pic-2.jpg';
import snw from './img/snow-icon.svg';

const App = () => {
  const  [cities, setCities] = useState([]);
  const [countries] = useState([{city: 'Los Angeles', country: 'CALIFORNIA'}, {city: 'Moscow', country: 'RUSSIA'}]);

  useEffect(() => {

    (async function fetchData() {
      const response = await fetch('http://api.openweathermap.org/data/2.5/group?id=5368361,524901&units=imperial&appid=40af4c7a896866ecce136a32e66d7f74');
      const data = await response.json();
      setCities(data.list);
    })();

  }, []);

  return (
    <main>
      <Info />
      <Country img={ca} icon={sun} countries={countries[0]} cities={cities[0]}/>
      <Country img={ru} icon={snw} countries={countries[1]} cities={cities[1]}/>
    </main>
  );
}

export default App;