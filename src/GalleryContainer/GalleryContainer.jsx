import React, { Component } from 'react';
import './GalleryContainer.css';
import GalleryImage from './GalleryImage/GalleryImage';
import ScrollArea from 'react-scrollbar';

class GalleryContainer extends Component{
    render(){
        const images = this.props.images;
        return (
            <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            vertical={true}>
            <div className="Gallery-container">
                {images.map(img=> <GalleryImage key={img.id} imageModel={img}/>)}
          </div>
          </ScrollArea>
        );
    }
}

export default GalleryContainer;