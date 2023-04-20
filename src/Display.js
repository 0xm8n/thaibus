import React, { Component } from 'react';
import fire from './fire';
import AppBarMenu from './AppBarMenu';
import SearchBar from './SearchBar';
import TableResult from './TableResult';
import FooterBar from './FooterBar';

export default class Display extends Component {
  constructor() {
      super();
      this.state = {
        line: [],
        searchText: "",
      };
  }
  componentDidMount(){
    fire.ref('/data/line').once('value').then(snapshot => {
      this.setState({ line: snapshot.val()});
    });
  }

  onTextChange(e) {
    this.setState({searchText: e.target.value});
  }

  render() {
    return (
      <div>
        <AppBarMenu />
        <SearchBar onTextChange={(e) => this.onTextChange(e)} searchText={this.state.searchText} />
        <TableResult line={this.state.line} searchText={this.state.searchText} />
        <FooterBar />
      </div>
    );
  }
}
