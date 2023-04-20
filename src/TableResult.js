import React, { Component } from 'react';
import {Table,TableBody,TableFooter,TableHeader,TableHeaderColumn,TableRow,TableRowColumn,} from 'material-ui/Table';
import appStyle from './appStyle';

export default class TableResult extends Component {
  mapLine(){
    let tableStyles = appStyle.tableStyles;
    let items = this.props.line;
    let keyword = this.props.searchText;
    let list = items.map((index, id) => {
      const oldNum = items[id].oldNum;
      const newNum = items[id].newNum;
      const desc = items[id].desc;
      let rowData = <TableRow key={id} style={tableStyles.rowBody}>
        <TableRowColumn style={tableStyles.colBodyLine}>{newNum}</TableRowColumn>
        <TableRowColumn style={tableStyles.colBodyLine}>{oldNum}</TableRowColumn>
        <TableRowColumn style={tableStyles.colBodyDesc}>{desc}</TableRowColumn>
      </TableRow>;
      if(keyword === ""){
        if(oldNum === "-"){
          return (rowData);
        }else{
          return null;
        }
      }
      else {
        if(oldNum.toLowerCase().includes(keyword.toLowerCase()) || newNum.toLowerCase().includes(keyword.toLowerCase()) || desc.toLowerCase().includes(keyword.toLowerCase())){
          return (rowData);
        }else{
          return null;
        }
      }
    });
    let itemList = <div>
      <Table
        height={tableStyles.tableHeight}
        fixedHeader={tableStyles.fixedHeader}
        fixedFooter={tableStyles.fixedFooter}
        selectable={tableStyles.selectable}
        multiSelectable={tableStyles.multiSelectable}
      >
        <TableHeader
          displaySelectAll={tableStyles.showHeaderCheckboxes}
          adjustForCheckbox={tableStyles.showHeaderCheckboxes}
          enableSelectAll={tableStyles.enableSelectAll}
        >
          <TableRow style={tableStyles.rowBody}>
            <TableHeaderColumn style={tableStyles.colHeaderLine} tooltip="The New Line">สายใหม่</TableHeaderColumn>
            <TableHeaderColumn style={tableStyles.colHeaderLine} tooltip="The Old Line">สายเก่า</TableHeaderColumn>
            <TableHeaderColumn style={tableStyles.colHeaderDesc} tooltip="The Description">รายละเอียด</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={tableStyles.showCheckboxes}
          deselectOnClickaway={tableStyles.deselectOnClickaway}
          showRowHover={tableStyles.showRowHover}
          stripedRows={tableStyles.stripedRows}
        >
          {list}
        </TableBody>
        <TableFooter
          adjustForCheckbox={tableStyles.showHeaderCheckboxes}
        >
          <TableRow style={tableStyles.rowFooter}>
            <TableRowColumn colSpan="3" style={tableStyles.colFooter}>
            </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
    </div>;
    return itemList;
  }

  render() {
    return (
      <div>
        {this.mapLine()}
      </div>
    );
  }
}
