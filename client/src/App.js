import React from 'react';
import Images from './components/Images';
import './App.css';

function App() {
  return (
    <div id='root'>
        <div className='hero is-fullheight is-bold is-info'>
          <div className='hero-body'>
            <div className='container'>
              <div className='header content'>
                <h1 className='title is-1'>
                  Infinite Scroll by Unsplash
                </h1>
                <Images />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
