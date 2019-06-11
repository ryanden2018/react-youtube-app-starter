import React, { Component } from "react";

export default class VideoFrame extends Component {
  render() {
    return (
      <div>
       <iframe width={"600"} height={"400"} src={`https://www.youtube.com/embed/${this.props.videoId}`} />
       <br />
       <h3>{this.props.video.snippet.title}</h3>
       <p>{this.props.video.snippet.description}</p>
      </div>
    );
  }
}
