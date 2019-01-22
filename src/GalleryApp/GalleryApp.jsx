import React, {Component}  from 'react';
import GalleryHeader from '../GalleryHeader/GalleryHeader';
import GalleryContainer from '../GalleryContainer/GalleryContainer';
import GalleryImageModel from '../GalleryContainer/GalleryImage/GalleryImageModel'

class GalleryApp extends Component {
  
  constructor(){
    super();
    this.state = {
      images: [
        new GalleryImageModel('111', 'img1', 'src1'),
        new GalleryImageModel('222', 'img2', 'src2'),
        new GalleryImageModel('333', 'img3', 'src3'),
        new GalleryImageModel('444', 'img4', 'src4'),
        new GalleryImageModel('555', 'img5', 'src5'), ],
  };
}

changeImages(images){
  this.setState({images: images})
}
  searchText=(txt)=>{
    let images = [];
    for(let i = 0; i<10; i++){
      images.push(new GalleryImageModel(txt + i,txt, txt))
    }
    this.setState({images: images})
    console.log("App component" + txt);
  }

  render() {
    return (
      <div className="App">
          <GalleryHeader searchText={this.searchText} />
          <GalleryContainer images={this.state.images}/>
      </div>
    );
  }
}

export default GalleryApp;