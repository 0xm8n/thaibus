import {orange500,cyan400,grey100} from 'material-ui/styles/colors';

let screenHeight = window.innerHeight-301;
const appStyle={
  tableStyles: {
    tableHeight: screenHeight.toString()+'px',
    fixedHeader: true,
    fixedFooter: true,
    selectable: false,
    multiSelectable: false,
    showHeaderCheckboxes: false,
    showCheckboxes: false,
    enableSelectAll: false,
    deselectOnClickaway: false,
    showRowHover: true,
    stripedRows: false,
    rowBody: {
      padding: '5px 0px 5px 10px',
      height: '25px'
    },
    colHeaderLine: {
      padding: '5px 0px 5px 10px',
      width: "20%",
      height: '25px',
      fontSize: '14px',
      color: cyan400
    },
    colHeaderDesc: {
      padding: '5px 0px 5px 10px',
      height: '25px',
      fontSize: '14px',
      color: cyan400
    },
    colBodyLine: {
      padding: '5px 0px 5px 10px',
      width: "20%",
      height: '25px'
    },
    colBodyDesc: {
      padding: '5px 0px 5px 10px',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      height: '25px'
    },
    rowFooter: {
      height: '20px',
    },
    colFooter: {
      height: '20px',
      textAlign: 'center'
    },
  },
  searchToolBar: {
    textField: {
      width: '180px'
    },
    inputStyle: {
      color: orange500,
    },
    underlineStyle: {
      borderColor: orange500,
    },
    underlineFocusStyle: {
      borderColor: cyan400,
    },
    floatingLabelStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: cyan400,
    },
    toolBarStyle: {
      backgroundColor: grey100
    },
    searchIconStyle: {
      height:'30px',
      width:'30px',
      color:cyan400,
    },
    blankToolbar: {
      backgroundColor: grey100,
      height: '20px'
    }
  },
  AppBarStyle: {
    appBar: {
      backgroundColor: cyan400
    },
    title: "ค้นหาสายรถเมล์ใหม่",
    titleStyle: {
      fontSize: '16px',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
    }
  },
  FooterBar: {
    footerBar: {
      backgroundColor: cyan400,
      height: '30px',
    },
    title: '@2017 made with Love by MBIX TECH Co. Ltd.',
    titleStyle: {
      fontSize: '10px',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      color: '#FFF',
      padding: '5px 30px 5px 10px',
      fontFamily: 'Roboto, sans-serif'
    }
  }
};
export default appStyle;
