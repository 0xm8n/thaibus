import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavMenuIcon from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import logo from './mbix-1024.png';
import appStyle from './appStyle';
import './App.css';

export default class AppBarMenu extends Component {
  constructor() {
      super();
      this.state = {
        menuOpen: false
      };
  }
  handleMenuToggle() {
    let toggleOpen = !this.state.menuOpen;
    this.setState({menuOpen: toggleOpen});
  }
  handleMenuClose() {
    this.setState({menuOpen: false});
  }

  render() {
    let styles = appStyle.AppBarStyle;
    let menuOpen = this.state.menuOpen;
    return (
      <div>
        <AppBar
          style={styles.appBar}
          title={styles.title}
          titleStyle={styles.titleStyle}
          iconElementLeft={
            <img alt="mbixtech" className="header-logo" src={logo} />
          }
          iconElementRight={
            <IconButton
            onTouchTap={() => this.handleMenuToggle()}
            >
              <NavMenuIcon />
            </IconButton>}
        />
        <Drawer
          docked={false}
          width={200}
          openSecondary={true}
          open={menuOpen}
          onRequestChange={() => this.handleMenuClose()}
        >
          <Link style={{textDecoration:'none'}} to='/'><MenuItem>Home - Search Bus Line</MenuItem></Link>
          <Link style={{textDecoration:'none'}} to='/AddNewLine'><MenuItem>Add New Bus Line</MenuItem></Link>
          <Link style={{textDecoration:'none'}} to='/EditLine'><MenuItem>Edit Bus Line Detials</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}
