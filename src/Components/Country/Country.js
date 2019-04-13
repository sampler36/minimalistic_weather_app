import React from 'react';
import './Country.css';

const Country = (props) => {
  return (
    <section>
      <div className='floater'>
        <div className='icon-temp'>
          <img src={props.icon} alt='Icon' />
          <p id='temp'>{props.cities ? parseInt(props.cities.main.temp) : ''}°</p>
        </div>
        <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ''}</p>
      </div>
      <img src={props.img} alt='Country' id='country-img' />
      <div className='country'>
        <p>{props.countries.city}</p>
        <p>{props.countries.country}</p>
      </div>
    </section>
  );
}

export default Country;