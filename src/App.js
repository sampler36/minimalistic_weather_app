import React, { useState } from 'react';
import Info from './Components/Info/Info';
import Country from './Components/Country/Country';
import './App.css';

import ca from './img/pic-1.jpg'
import sun from './img/sun-icon.svg';
import ru from './img/pic-2.jpg';
import snw from './img/snow-icon.svg';

const App = () => {

  const [countries] = useState([{city: 'Los Angeles', country: 'CALIFORNIA'}, {city: 'Moscow', country: 'RUSSIA'}]);

  return (
    <main>
      <Info />
      <Country img={ca} icon={sun} countries={countries[0]} />
      <Country img={ru} icon={snw} countries={countries[1]} />
    </main>
  );
}

export default App;