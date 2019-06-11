import React, { Component } from "react";
import SearchForm from './SearchForm';
import VideoContainer from './VideoContainer';
import keys from './keys';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults : [],
      searchTerm : "yams",
      videoId: "ib1trMlWDH4",
      video: { snippet: {title: "Southern Baked Candied Yams - Soul Food Style - I Heart Recipes",
       description: "Best southern baked candied yams recipe http://www.iheartrecipes.com/baked-candied-yams-soul-food/ My southern baked candied yams recipe is a easy one."} }
    };
  }

  setSearchTerm = (term) => {
    if(term.length > 0) {
      this.setState( { searchTerm: term } );
    } else {
      this.setState( {searchTerm: "yams"} );
    }
  }

  searchAPI = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this.state.searchTerm}&type=video`)
    .then( res => res.json() )
    .then( data => this.setState({searchResults:data.items}) )
  }

  componentDidMount() {
    this.searchAPI();
  }

  getVideo = (videoId,video) => {
    this.setState( { videoId: videoId, video: video } );
  }

  render() {
    return (<div>
      <SearchForm setSearchTerm={this.setSearchTerm} searchAPI={this.searchAPI} />
      <VideoContainer video={this.state.video} videoId={this.state.videoId} searchResults={this.state.searchResults} getVideo={this.getVideo} />
    </div>);
  }
}

export default App;
