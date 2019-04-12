import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <h1>WEATHER<br/>ME<span>NOW</span></h1>
          <hr />
          <p>A minimal weather app design to brighten up your day.<br />Designed and developed by Charlie Taminian @ Bone Crush Media.</p>
          <div className='bottom'>
            <p>Your weather is currently showing in:</p>
            <div className='buttons'>
              <div className='btn'>
                <button>C</button>
                <p>Celsius</p>
              </div>
              <div className='btn'>
                <button className='clicked'>F</button>
                <p>Fahrenheit</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;