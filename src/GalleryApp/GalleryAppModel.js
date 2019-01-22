class GalleryAppModel {
    flickr;
    textToSearch;
    containerModel;
    
    constructor() {
        this.textToSearch = "";
    }

    setTextSearch(textToSearch){
        this.textToSearch = textToSearch;
        this.searchImages(textToSearch);
        console.log("Succ to type!!");
    }

    searchImages(textToSearch) {
        console.log(textToSearch);
        this.containerModel.addNewIamge(textToSearch, textToSearch, textToSearch);
        //  this.flickr.photos.search({
        //     text: textToSearch
        //   }, function(err, result) {
        //      if(err) { throw new Error(err); }
        //      console.log(result);
        //    });
    }
}

export default GalleryAppModel;