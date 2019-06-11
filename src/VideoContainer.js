import React, { Component } from "react";
import VideoFrame from './VideoFrame';
import VideoList from './VideoList';

export default class VideoContainer extends Component {
  render() {
    return (
      <div style={{position:"absolute",width:"80%",top:"100px",left:"100px"}}>
        <div style={{position:"absolute",width:"70%",top:"0px",left:"0px"}}><VideoFrame video={this.props.video} videoId={this.props.videoId} /></div>
        <div style={{position:"absolute",width:"30%",top:"0px",right:"0px"}}><VideoList getVideo={this.props.getVideo} searchResults={this.props.searchResults} /></div>
      </div>
    );
  }
}
