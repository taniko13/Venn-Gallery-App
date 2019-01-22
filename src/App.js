import React, { Component } from 'react';
import GalleryApp from './GalleryApp/GalleryApp';
import GalleryAppModel from './GalleryApp/GalleryAppModel';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
         <GalleryApp appModel={new GalleryAppModel()}/>
      </div>
    );
  }
}

export default App;
