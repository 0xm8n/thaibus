import React, { Component } from 'react';
import ActSearchIcon from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import appStyle from './appStyle';
import {orange500} from 'material-ui/styles/colors';

export default class SearchBar extends Component {
  render() {
    const styles = appStyle.searchToolBar;
    return (
      <div>
        <Toolbar style={styles.toolBarStyle}>
          <ToolbarGroup firstChild={true}>
          </ToolbarGroup>
          <ToolbarGroup>
            <TextField
              floatingLabelText="Search"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              inputStyle={styles.inputStyle}
              value={this.props.searchText}
              onChange={this.props.onTextChange}
              style={styles.textField}
            />
            <ActSearchIcon style={styles.searchIconStyle} hoverColor={orange500}/>
          </ToolbarGroup>
          <ToolbarGroup>
          </ToolbarGroup>
          <ToolbarGroup>
          </ToolbarGroup>
          <ToolbarGroup>
          </ToolbarGroup>
        </Toolbar>
        <Toolbar style={styles.blankToolbar} />
      </div>
    );
  }
}
