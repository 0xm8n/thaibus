import React, { Component } from 'react';
import AppBarMenu from './AppBarMenu';
import FooterBar from './FooterBar';
import undercons from './undercons.png';

export default class EditLine extends Component {
  render() {
    return (
      <div>
        <AppBarMenu />
        <img alt="undercons" src={undercons} width='100%' />
        <FooterBar />
      </div>
    );
  }
}
