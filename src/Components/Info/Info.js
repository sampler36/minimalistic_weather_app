import React, { useState } from 'react';
import './Info.css';
import bg from '../../img/bg-shape.svg';

const Info = () => {

  let [clickedCel, setClickedCel] = useState('');
  let [clickedFah, setClickedFah] = useState('clicked');

  return (
    <section>
      <img src={bg} alt='Background shape' id='bg' />
      <h1>WEATHER<br/>ME<span>NOW</span></h1>
      <hr />
      <p>A minimal weather app design to brighten up your day.<br />Designed and developed by Charlie Taminian @ Bone Crush Media.</p>
      <div className='bottom'>
        <p>Your weather is currently showing in:</p>
        <div className='buttons'>
          <div className='btn'>
            <button className={clickedCel} onClick={() => {
              setClickedCel(clickedCel = 'clicked');
              setClickedFah(clickedFah = '');
            }}>C</button>
            <p>Celsius</p>
          </div>
          <div className='btn'>
            <button className={clickedFah} onClick={() => {
              setClickedFah(clickedFah = 'clicked');
              setClickedCel(clickedCel = '');
            }}>F</button>
            <p>Fahrenheit</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;