import React, { Component } from 'react';
import GallerySearch from './GallerySearch/GallerySearch';
import './GalleryHeader.css';

class GalleryHeader extends Component {
  
  render() {
    let searchText = this.props.searchText;
    return (
        <div className="Gallery-header">
          <h1>Gallery </h1>
          <GallerySearch searchText={searchText}/>
      </div>
    );
  }
}

export default GalleryHeader;