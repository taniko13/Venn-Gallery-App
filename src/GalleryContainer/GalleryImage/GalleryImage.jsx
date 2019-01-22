import React, { Component } from 'react';
import './GalleryImage.css';

class GalleryImage extends Component {
  
  render() {
    const imageModel = this.props.imageModel;
    return (
      <div className="GalleryImage">
        <h6>{imageModel.id}</h6>
        <h6>{imageModel.name}</h6>
        <h6>{imageModel.souce}</h6>
      </div>
    );
  }
}

export default GalleryImage;