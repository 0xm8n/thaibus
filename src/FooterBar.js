import React, { Component } from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import appStyle from './appStyle';

export default class FooterBar extends Component {
  render() {
    let styles=appStyle.FooterBar;
    return (
      <div>
        <Toolbar style={styles.footerBar}>
          <ToolbarGroup firstChild={true} style={styles.titleStyle}>
            {styles.title}
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
