import React from 'react';
import './Country.css';

import ca from '../../img/pic-1.jpg'
import sun from '../../img/sun-icon.svg';
import ru from '../../img/pic-2.jpg';
import snow from '../../img/snow-icon.svg';

const Country = (props) => {
  return (
    <section>
      <div className='floater'>
        <div className='icon-temp'>
          {props.cities && props.cities.name === 'Los Angeles' ?
            <img src={sun} alt='Icon' />
            :
            <img src={snow} alt='Icon' />
          }
          <p id='temp'>{props.cities ? parseInt(props.cities.main.temp) : ''}°</p>
        </div>
        <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ''}</p>
      </div>
      {props.cities && props.cities.name === 'Los Angeles' ?
        <img src={ca} alt='Los Angeles' id='country-img' />
        :
        <img src={ru} alt='Moscow' id='country-img' />
      }
      <div className='country'>
        {props.cities && props.cities.name === 'Los Angeles' ?
          <div>
            <p>{props.cities.name}</p>
            <p>CALIFORNIA</p>
          </div>
          :
          <div>
            <p>Moscow</p>
            <p>RUSSIA</p>
          </div>
        }
      </div>
    </section>
  );
}

export default Country;