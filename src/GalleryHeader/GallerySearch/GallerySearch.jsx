import React, {Component} from 'react';
import DropdownSearch from'./DropDownSearch/DropDownSearch';
import './GallerySearch.css';

class GallerySearch extends Component{
    textForSearch;
    options;

    handleClick = () => {
        const textToSearct = this.textForSearch;
        this.addNewTextToOptions(textToSearct);
        this.props.searchText(textToSearct);
        console.log("Search component" + textToSearct);
    }

    addNewTextToOptions = (txt) =>{
        if(!this.options.includes(txt)){
            this.options.push(txt);
        }
    }

    componentWillMount(){
        this.options = [""];
    }

    onSelect = ()=>{
        console.log("DropDown");
    }
    updateInputValue =(evt) => {
        this.textForSearch = evt.target.value;
      }
    
    render(){
        return(
            <div className="gallerySearch">
            <input id="searchText" type="text" placeholder="Search..." onChange={this.updateInputValue} />
            <button id="submit" onClick={this.handleClick}>Submit</button>
            <div className="serachDropDown">
            <DropdownSearch options={this.options} searchText={this.props.searchText}/>
            </div>
            </div>
        );
    }
}
export default GallerySearch;