import React, { Component } from "react";
import ListItem from './ListItem';

export default class VideoList extends Component {
  render() {
    return (
      <div>
        {this.props.searchResults.map( result => <ListItem getVideo={this.props.getVideo} item={result} /> )}
      </div>
    );
  }
}
