import React from 'react';
import './Country.css';

const Country = (props) => {
  return (
    <section>
      <div className='floater'>
        <div className='icon-temp'>
          <img src={props.icon} alt='Icon' />
          <p id='temp'>90°</p>
        </div>
        <p>SUNNY</p>
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