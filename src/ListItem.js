import React, { Component } from "react";

export default class ListItem extends Component {
  
  render() {
    return (
      <div onClick={() => this.props.getVideo(this.props.item.id.videoId,this.props.item)}>
        <img style={{float:"left"}} src={this.props.item.snippet.thumbnails.default.url} />
        <b>{this.props.item.snippet.title}</b><br />
      {this.props.item.snippet.channelTitle}<br />
      <br /><br /><br />
      </div>
    );
  }
}
